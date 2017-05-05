/**
 * Created by jiajie on 17/5/5.
 */
import _ from 'lodash';

_.assignDeep = (target, source) => {
	if (!(_.isObject(target) && _.isObject(source))) {
		return target;
	}

	_.forOwn(source, (value, key) => {
		if (!_.isObject(value) || _.isFunction(value)) {
			target[key] = value;
		} else if (!_.isObject(target[key]) || _.isFunction(target[key])) {
			target[key] = value;
		} else {
			_.assignDeep(target[key], value);
		}
	});

	return target;
};

_.dropKeys = (target, keys) => {
	if (!(_.isObject(target) && _.isArray(keys))) {
		return target;
	}

	keys.forEach(key => delete target[key]);
	return target;
};

_.cloneAssign = (target, assignment) => {
	if (!(_.isObject(target) && _.isObject(assignment))) {
		return target;
	}

	return _.assign(_.clone(target), assignment);
};

_.flattenObject = (target) => {
	if (!_.isObject(target)) {
		return target;
	}
	const result = {};
	_.forOwn(target, (value, key) => {
		if (!_.isObject(value)) {
			result[key] = value;
		} else {
			_.assign(result, _.flattenObject(value));
		}
	});
	return result;
}

// weightMap should be like { priority2: value1, priority2: value2}
__.genWeightedList = (weightMap) => {
	return __.flatten(__.map(weightMap, item =>
		__.times(item.priority, () => item.value)))
}
