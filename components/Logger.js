/**
 * Created by jiajie on 17/5/5.
 */
import debug from 'debug';

export default class Logger {
	constructor(...args) {
		this.name = [Config.appName, ...args].join(':');
		this.debug = debug(this.name);
	}

	log(format, ...args) {
		this.print('log', format, ...args);
	}

	info(format, ...args) {
		this.print('info', format, ...args);
	}

	warn(format, ...args) {
		this.print('warn', format, ...args);
	}

	error(format, ...args) {
		this.print('error', format, ...args);
	}

	print(level, format, ...args) {
		if (typeof format === 'string') {
			this.debug('[%o] ' + format, level, ...args);
		} else {
			this.debug('[%o] %o', level, format, ...args);
		}
	}
}
