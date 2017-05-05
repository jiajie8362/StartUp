const gulp = require('gulp-help')(require('gulp'));
const nodemon = require('gulp-nodemon');
const start = require('gulp-start-process');
// const __ = require('lodash');
const argv = require('yargs').argv;

process.env.app = 'gulp';

function runSpecs(done) {
	if (done === null) {
		done = (function() {});
	}
	let specFilter = '*';
	if (argv.t) {
		specFilter = `*${argv.t}*`;
	}
	return start(`app=test DEBUG=test* NODE_ENV=Test ./node_modules/.bin/mocha --harmony --opts mocha.opts \"specs/**/${specFilter}Spec.*\"`, done);
}

gulp.task('spec:once', 'Run spec one time', [], (done) => {
	return runSpecs(done);
});

gulp.task('spec', 'Run spec in watch mode', ['spec:once'], (done) => {
	const watch = require('gulp-watch');
	return watch(['**/*.js', '!node_modules/**', '!.git/**'], () => runSpecs(done));
});

gulp.task('api', 'Start api server in NODE_ENV or in dev env by default', [], () => {
	return nodemon({
		verbose: false,
		restartable: 'rs',
		ext: 'js,es',
		script: 'loader.js',
		ignore: ['workers', 'node_modules/', 'gulpfile.*'],
		env: {
			env: process.env.NODE_ENV || 'Development',
			DEBUG: process.env.DEBUG || '*'
		}
	});
});
