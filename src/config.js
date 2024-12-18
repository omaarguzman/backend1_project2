import * as url from 'url';


const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/uploads` },
    MONGODB_URI: 'mongodb://127.0.0.1:27017/productsdb',
    PRODUCTS_COLLECTION: 'products',
    PRODS_PAGE: 10
};

export default config;
