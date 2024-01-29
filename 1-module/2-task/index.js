const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  return name !== null && name.trim() !== '' && name.length >= 4;
}

function sayHello() {
  rl.question('Введите ваше имя: ', (userName) => {
    if (isValid(userName)) {
      print(`Добро пожаловать, ${userName}!`);
    } else {
      print('Некорректное имя');
    }
    rl.close();
  });
}

sayHello();
