// ! intent: Encapsulate a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations.

// * Command Pattern is has two components: conductor and command objects.
const { createInterface } = require('readline');
const conductor = require('./conductor');
const { ExitCommand, CreateCommand } = require('./commands');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('create <fileName> <text> | history | undo | redo | exit');
rl.prompt();

rl.on('line', (input) => {
  const [commandText, ...remaining] = input.split(' ');
  const [fileName, ...fileText] = remaining;
  const text = fileText.join(' ');

  switch (commandText) {
    case 'history':
      conductor.printHistory();
      break;

    case 'undo':
      conductor.undo();
      break;

    case 'redo':
      conductor.redo();
      break;

    case 'exit':
      //   console.log('TODO: Exit');
      conductor.run(new ExitCommand());
      break;

    case 'create':
      //   console.log(`TODO: Create File ${fileName}`);
      //   console.log('file contents:', text);
      conductor.run(new CreateCommand(fileName, text));

      break;

    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});
