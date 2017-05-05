/**
 * Created by jiajie on 17/5/5.
 */
Promise.retry = function (callback, retryTimes = 5, retryInterval = 1000) {
	if (retryTimes < 1) {
		return Promise.reject(`Invalid retryTimes ${retryTimes}`);
	}

	return Promise.reduce(__.range(0, retryTimes), res =>
			Promise.try(callback)
				.then(data => {
					res.done = true;
					res.data = data;
					return Promise.reject(res); // Immediately end the reduce
				}, err => {
					res.err = err;
					return Promise.delay(retryInterval).return(res);
				})
		, {done: false})
		.then(finalHandle, finalHandle);
};
