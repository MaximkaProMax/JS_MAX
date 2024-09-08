// #1
// Преобразуйте строку в нижний верблюжий регистр.
// JavaScript Exercises -> javaScriptExercises
function toCamelCase(str) {
    return str
        .replace(/\s(.)/g, function(match, group1) {
            return group1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function(match, group1) {
            return group1.toLowerCase();
        });
}
console.log(toCamelCase("JavaScript Exercises")); // javaScriptExercises

// #2
// Cкройте адрес электронной почты для защиты от неавторизованного пользователя.
// robin_singh@example.com -> robin...@example.com
function hideEmail(email) {
    let [user, domain] = email.split('@');
    let hiddenUser = user.slice(0, Math.ceil(user.length / 2)) + '...';
    return hiddenUser + '@' + domain;
}
console.log(hideEmail("robin_singh@example.com")); // robin...@example.com

// #3
// Найти по заданному номеру месяца, вывести количество дней в нем
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(2, 2024)); // 29 (високосный год)

// #4
// В переменную age запишите возраст человека (от 1 до 100 лет). Необходимо вывести значение возраста вместе с последующим словом "год", "года" или "лет".
function getAgeString(age) {
    let lastDigit = age % 10;
    let lastTwoDigits = age % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `Вам ${age} лет`;
    } else if (lastDigit === 1) {
        return `Вам ${age} год`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `Вам ${age} года`;
    } else {
        return `Вам ${age} лет`;
    }
}
console.log(getAgeString(24)); // Вам 24 года
console.log(getAgeString(57)); // Вам 57 лет