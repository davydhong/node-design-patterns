/*
Issue: all the methods are hard coded. what if you don't want the timestamp? what if you want to save the log files?
! import LogStrategy
*/

const config = require('./config');
const LogStrategy = require('./LogStrategy');

class Logger {
  constructor(strategy = 'toConsole') {
    this.logs = [];
    this.strategy = LogStrategy[strategy];
  }

  get count() {
    return this.logs.length;
  }

  changeStrategy(newStrategy) {
    this.strategy = LogStrategy[newStrategy];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    // console.log(`${timestamp} - ${message}`);

    this.strategy(timestamp, message);
  }
}

module.exports = new Logger(config.logs.strategy);
