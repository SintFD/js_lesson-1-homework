// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

document.getElementById("task_1").addEventListener("click", function () {
  alert(`Привет, его имя ${prompt("сюды имя")} !`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу

document.getElementById("task_2").addEventListener("click", function () {
  const year = 2025 - Number(prompt("Год рождения сюды:"));
  let yearsOld = null;

  if (year <= 10) {
    yearsOld = "очень молодой";
  } else if (year <= 30) {
    yearsOld = "юнец";
  } else if (year <= 40) {
    yearsOld = "почти старый";
  } else if (year <= 60) {
    yearsOld = "уже старый";
  } else if (year <= 110) {
    yearsOld = "очень старый";
  } else if (year >= 110) {
    yearsOld = " ещё жив ???";
  }
  alert(`Тебе: ${year}  ,  Ты ${yearsOld}`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

document.getElementById("task_3").addEventListener("click", function () {
  const length = 4 * Number(prompt("Длина стороны квадрата:"));
  alert(`Периметр квадрата: ${length} см`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 4. Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.

document.getElementById("task_4").addEventListener("click", function () {
  const radius = Math.PI * Number(prompt("Радиус круга:")) ** 2;
  alert(`Периметр квадрата: ${radius} см`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 5. Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.

document.getElementById("task_5").addEventListener("click", function () {
  const distance = Number(prompt("Расстояние (в км):"));
  const time = Number(prompt("За сколько часов:"));
  let speed = distance / time;

  if (speed > 880) {
    alert("Вам нужен самолёт !!!");
  } else {
    alert(`Двигайтесь со скоростью: ${speed} км/ч`);
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
// константе.

document.getElementById("task_6").addEventListener("click", function () {
  const usdToEur = 0.9596;
  const usd = Number(prompt("Введите сумму (в USD)"));
  alert(`${usdToEur * usd} EUR`);
});

// --------------------------------------------------------------------------------------------------------------------------

// 7. Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером в 820 Мб помещается на флешку

document.getElementById("task_7").addEventListener("click", function () {
  const flashСapacity = 1024 * Number(prompt("Введите объем флешки (в Гб)"));

  alert(
    `На флешку вместится ${Math.trunc(
      flashСapacity / 820
    )} файлов размером в 820 Мб`
  );
});

// 8. Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

document.getElementById("task_8").addEventListener("click", function () {
  const money = Number(prompt("Сколько у вас денег ???"));
  const price = Number(prompt("Цена одной шоколадки ???"));
  const amount = Math.trunc(money / price);

  alert(
    `Вы можете купить: ${amount} шоколадки и у вас останется ${
      money - price * amount
    } AZN`
  );
});

// --------------------------------------------------------------------------------------------------------------------------

// 9. Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

document.getElementById("task_9").addEventListener("click", function () {
  // let i = 0;
  const number = prompt("Введите число");
  // let turnOver = null;

  // while (i < number.length) {
  //   i++;
  //   turnOver = String(turnOver + Number(number[number.length - i]));
  // }

  // alert(turnOver);

  // alert(number[2] + number[1] + number[0]);

  const reversedNumber =
    String(number % 10) +
    String(Math.floor(number / 10) % 10) +
    String(Math.floor(number / 100) % 10);
  alert(reversedNumber);
  console.log(typeof (number % 10));
});

// --------------------------------------------------------------------------------------------------------------------------

// 10. Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

document.getElementById("task_10").addEventListener("click", function () {
  const number = Number(Math.trunc(prompt("Введите число")));

  Number(number % 2) === 0 && alert(`Чётный`);
  Number(number % 2) !== 0 && alert(`Нечётный !!!`);
});
