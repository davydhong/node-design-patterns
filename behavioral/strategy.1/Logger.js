/*
! Issue: all the methods are hard coded. what if you don't want the timestamp? what if you want to save the log files?
*/

class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

module.exports = new Logger();
