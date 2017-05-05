import onfinished from 'on-finished';
const logger = new Logger('middlewares/availability');
module.exports = function(limit) {
  let count = 0;
  let lastLogTime = moment().utc().unix();
  return function(req, res, next) {
    const curTime = moment().utc().unix();
    if (Math.abs(curTime - lastLogTime) > 60) {
      logger.info(`${moment().format('YYYY/M/D hh:mm:ss')} Current Unfinished Request Count : ${count}`);
      lastLogTime = curTime;
    }
    if (count >= limit) {
      return res.status(503).end('Too many requests');
    }

    count++;
    onfinished(res, () => count--);
    return next();
  };
};
