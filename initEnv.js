/**
 * Created by jiajie on 17/5/5.
 */
require('babel-register')({
	extensions: ['.es', '.js']
});

const lazy = require('lazily-require');

global.Promise = require('bluebird');
global.Promise = require('bluebird');
global.appRoot = require('approot')(__dirname).consolidate();
global.__ = require('lodash');
global.moment = require('moment');

// import enhancers
appRoot.enhancers.listChildren().forEach((item) => {require(appRoot.enhancers(item));});

require('./config/loadConfig');

// Lazy folder loading
global.Starters = lazy(appRoot.starters());
global.Components = lazy(appRoot.components());
global.Logger = Components.Logger;
global.Routes = lazy(appRoot.routes());
global.Middlewares = lazy(appRoot.middlewares());

