#!/usr/bin/env node

process.env.app = 'api';
global.express = require('express');

import logger from 'morgan';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

const app = express();
app.disable('etag');
app.use(logger('dev'));

if (Config.compressBody) {
	app.use(require('compression')());
}

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.json({
	limit: '10mb'
}));
app.use(bodyParser.text({
	limit: '10mb'
}));

app.use(Middlewares.availability(Config.requestLimit));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes.api.index);
// app.use(Middlewares.notImplementHandler);
app.use(Middlewares.uncaughtErrorHandler);
app.set('port', Config.port);

export default app;