import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import productsRouter from './routes/products.router.js';
import viewsRouter from './routes/views.router.js';
import config from './config.js';


const app = express();

const httpServer = app.listen(config.PORT, async () => {
    await mongoose.connect(config.MONGODB_URI);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.engine('handlebars', handlebars.engine());
    app.set('views', `${config.DIRNAME}/views`);
    app.set('view engine', 'handlebars');

    app.use('/views', viewsRouter);
    app.use('/api/products', productsRouter);
    app.use('/static', express.static(`${config.DIRNAME}/public`));
    
    console.log(`Server activo en puerto ${config.PORT} conectado a bbdd`);
});