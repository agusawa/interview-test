const readline = require('readline');
const { showModuloThreeNumbersUntil, isValidNumber } = require('./utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  const inputNumber = await new Promise((resolve) => rl.question("Masukkan Angka\n> ", resolve));

  if (isValidNumber(inputNumber)) {
    const number = parseInt(inputNumber.trim());
    showModuloThreeNumbersUntil(number);
  } else {
    console.info('Anda memasukkan angka yang salah')
  }

  rl.close();
}

run()
