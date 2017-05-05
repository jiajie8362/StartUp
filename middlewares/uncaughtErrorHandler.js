/**
 * Created by jiajie on 17/5/5.
 */
let f;

if (process.env.NODE_ENV == 'production') {
	f = function(err, req, res, next) { // eslint-disable-line no-unused-vars
		console.error(err);
		res.status(500).send('Unexpected Server Error');
	};
} else {
	f = function(err, req, res, next) { // eslint-disable-line no-unused-vars
		console.error(err);
		res.status(500).json(err);
	};
}

module.exports = f;
