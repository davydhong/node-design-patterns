const path = require('path');
const { appendFile } = require('fs');
const morse = require('morse');

class LogStrategy {
  static toMorseCode(timestamp, message) {
    const morseCode = morse.encode(message);
    console.log(morseCode);
  }

  static noDate(timestamp, message) {
    // ! The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
    console.log(message);
  }

  static toFile(timestamp, message) {
    const fileName = path.join(__dirname, 'logs.txt');
    appendFile(fileName, `${timestamp} - ${message} \n`, (error) => {
      if (error) {
        console.error('Error writing to file');
        console.error(error);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {
    // does nothing
  }
}

module.exports = LogStrategy;
