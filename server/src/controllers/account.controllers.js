const { Router } = require('express');
const { Account } = require('../models');
const createError = require('http-errors');

const router = Router();

/** 
 * TODO: Crear la cuenta del usuario.
 * TODO: Enviar un email al usuario para verificar la cuenta de email.
 * 
*/

exports.getAccounts = async (req, res, next) => {
    try {
        const accounts = await Account.find({});

        res.status(200);
        res.json({
            count: accounts.length,
            results: accounts
        });
    } catch(err) {
        return next(createError(500), err.message);
    }
}

exports.createAccount = async (req, res, next) => {
    try {
        const account = new Account({ ...req.body });
        const isInvalid = account.validateSync();
        
        if (!isInvalid) {
            account.save();

            res.status(201);
            res.json({
                data: account
            });
        }

        return next(createError(400, isInvalid.message));
    } catch(err) {
        return next(createError(500), err.message);
    }
}