const brcrypt = require('bcryptjs');

exports.createHashPassword = password => {
    const salt = brcrypt.genSaltSync(10);
    const hash = brcrypt.hashSync(password, salt);

    return hash;
}