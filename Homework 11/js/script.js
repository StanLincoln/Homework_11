Придумайте названия для следующих функций:

Функция, которая принимает два числа и возвращает их сумму.

function sumNumbers(num1, num2) {
    return num1 + num2;
}


Функция, которая вычисляет среднее значение массива чисел.

function getAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

Функция, которая проверяет, является ли число четным.

function isEvenNumber(num) {
    return num % 2 === 0;
}

Функция, которая определяет, является ли число простым.

function testPrime(num) {

    if (num===1)  {
      return false;
    }
    else if(num === 2)  {
      return true;
    } else   {
      for(let i = 2; i < num; i++)  {
        if(num % i === 0) {
          return false;
        }
      }
      return true;  
    }
  }

Функция для форматирования даты в удобочитаемый вид.

function formatDate(date)

Функция, которая принимает строку и возвращает её с заглавной первой буквой.

function capitalizeString(str)

Функция, которая обращает порядок элементов в массиве.

function reverseArray(arr)

Функция, которая генерирует случайное число в заданном диапазоне.

function generateNumber(min, max)

Функция, которая преобразует строку в верхний регистр.

function convertToUpperCase(str)

Функция, которая преобразует строку в нижний регистр.

function convertToLowerCase(str)

Функция, которая проверяет, является ли строка допустимым адресом электронной почты.

function ifStringIsEmail(email)

Функция, которая находит наибольшее значение из массива чисел.

function MaxNumInArray(arr)


Функция, которая находит наименьшее значение из массива чисел.

function MinNumInArray(arr)

Функция, которая вычисляет площадь геометрической фигуры.

function calcShape(shape)

Функция для перевода температуры из Цельсия в Фаренгейт.

function celsiusToFahrenheit(celsius)

Функция для перевода температуры из Фаренгейта в Цельсий.

function fahrenheitToCelsius(fahrenheit)

Функция, которая вычисляет факториал числа.

function calcFactorial(num)

Функция, которая вычисляет расстояние между двумя точками в пространстве.

function distanceBetweenPoints(x, y)

Функция, которая форматирует число как денежную сумму в нужной валюте.

function formatCurrencyAmount(amount, currency)

Функция, которая возвращает длину строки.

function getStringLength(str)
