//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function sumNumbers(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

const sum = sumNumbers(10)(10);
console.log(sum);

sumNumbers()