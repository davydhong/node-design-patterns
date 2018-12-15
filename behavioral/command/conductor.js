/*
! use of the Conductor class:
* 1. Queuing commands
* 2. Logging commands
* 3. Undo commands
*/

class Conductor {
  constructor() {
    this.history = [];
    this.undone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    this.history.forEach(command => console.log(command.name));
  }

  undo() {
    // this requires the class to have undo method: adding undo commands
    const command = this.history.pop();
    console.log(`undo ${command.name}`);
    command.undo();
    this.undone.push(command);
  }

  redo() {
    const command = this.undone.pop();
    console.log(`redo ${command.name}`);

    command.execute();
    this.history.push(command);
  }
}

module.exports = new Conductor();
