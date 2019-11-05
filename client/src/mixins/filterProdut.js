export const filterProductMixins = {
    filters: {
        cutText(value) {
            return `${value.slice(0, 50)}...`;
        },
        prefixMoney(value) {
            return `RD$ ${value.toLocaleString()}`;
        },
        imgUrl(value) {
            /**
             * modificar la url cuando la proxy se configure en vue.config.js
             */
            return `http://localhost:1234/${value}`;
        }
    }
}