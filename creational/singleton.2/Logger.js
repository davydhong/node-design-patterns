class Logger {
  constructor() {
    // stores all the logs
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    // logs with a timestamp
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

// * Easier Way
// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }

//   getInstance() {
//     return Singleton.instance;
//   }
// }

// * module.exports = Logger;
// * module.exports = Singleton;

// ! this stores the class instance in memory and the same object will be called each time.
module.exports = new Logger();
