console.log = ((log) => {
  let number = null;
  return (command) => {
      switch (command) {
          case "h":
          case "?":
          case "help": {
              log(`
                  Welcome!
                  Usage:

                      console.log('your command here');

                  There is some commands I have:

                      play -    Play with me :)
                      exit -    Exit :(

                  Type 'help' for more information
              `);
              return;
          }
          case "play": {
              number = Math.ceil(Math.random() * 100);
              log("Guess the namber:");
              return;
          }
          case "exit": {
              number = null;
              console.log = log;
              return;
          }
          default: {
              if (number == null) return log(command);
              if (typeof command !== "number") return;
              if (command < number) {
                  log(`Try more`);
                  return;
              } else if (command > number) {
                  log(`Try less`);
                  return;
              }
              number = null;
              log(`You won!`);
              return;
          }
      }
  };
})(console.log);
console.log("help");
