import './hw_10.scss';

// //TASK 1
//  function randomInteger(min, max) {
//      var random = min + Math.random() * (max + 1 - min);
//      random = Math.floor(random);
//     return random;
//  }
//
//  console.log(randomInteger(0, 100));
// //TASK 2
// var user = {};
// user.name = Вася;
// user.surname = Петров;
// user.name = "Сергей";
// delete user.name;
// //TASK 3
// function isEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
// var form = {};
// alert( isEmpty(form) ); // true
// form ["AA7777AA"] = "Номер машины";
// alert( isEmpty(form) ); // false
// //TASK 4
//
// function Person(name, salary) {
//      this.name = name;
//      this.salary = salary;
//      this.fullInfoAbout = function () {
//          console.log('Привет, меня зовут ' + name + ' и я зарабатываю ' + salary);
//      };
//  }
//
//  function indetifyYourself(persons) {
//      persons.forEach(person => {
//          person.fullInfoAbout();
//      });
//  }
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
//
//  (function () {
//     function showOurSalary() {
//          let John = new Person('John', 400);
//          let Jack = new Person('Jack', 200);
//          let test = new Person('test', 'asadas');
//
//
//          let persons = [
//              John,
//              Jack,
//              test,
//         ];
//
//          function sumOfSalary() {
//              let sumOfSalary = John.salary + Jack.salary +test.salary
//              console.log('Сума зарплат ' + sumOfSalary);
//          }
//
//          indetifyYourself(persons);
//          sumOfSalary();
//
//      }
//      showOurSalary();
//  })();
// //TASK 5
//
// function Person(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     this.tellHowMuchDoYouEarn = function () {
//         console.log(name + salary);
//     };
// }
//
// function introduceYorSelf(persons) {
//     persons.forEach(person => {
//         person.tellHowMuchDoYouEarn();
//     });
// }
//
//
// (function () {
//     function showOurSalary() {
//         let petya = new Person('Петя: ', 500);
//         let vasya = new Person('Вася: ', 700);
//         let kolya = new Person('Коля: ', 450);
//
//
//         let persons = [
//             petya,
//             vasya,
//             kolya,
//         ];
//
//
//         function showMaxSalary() {
//             if (vasya.salary > petya.salary && kolya.salary) {
//                 console.log('Зарплата Васи больше всех');
//             } else if (petya.salary > vasya.salary && kolya.salary) {
//                 console.log('Зарплата Пети больше всех');
//             } else {
//                 console.log('Зарплата Коли больше всех');
//             }
//
//         }
//         introduceYorSelf(persons);
//         showMaxSalary()
//
//     }
//     showOurSalary();
// })();

// //TASK 6
//
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
// function multiplyNumeric(obj) {
//     for (var key in obj) {
//         if (isNumeric(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
//
// multiplyNumeric(menu);
//
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

//TASK 8

// var numbers = [];
//
// while (true) {
//
//     var value = prompt("Введите число", 0);
//
//     if (value === "" || value === null || isNaN(value)) break;
//
//     numbers.push(+value);
// }
//
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
//
// alert( sum );

//TASK 9

// if ([].indexOf) {
//
//     var find = function(array, value) {
//         return array.indexOf(value);
//     }
//
// } else {
//     var find = function(array, value) {
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] === value) return i;
//         }
//
//         return -1;
//     }
//
// }

//TASK 10

//TASK 11
//
// function pow(x, n) {
//     var result = x;
//
//     for (var i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// var x = prompt("x?", '');
// var n = prompt("n?", '');
//
// if (n <= 1) {
//     alert('Степень ' + n +
//         ' не поддерживается, введите целую степень, больше чем 1'
//     );
// } else {
//     alert( pow(x, n) );
// }
