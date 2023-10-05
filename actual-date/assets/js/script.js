function insertZero(num) {
    return num >= 10 ? num : `0${num}`
}

function getWeekendDay(weekend) {
    const weekendDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    return weekendDay[weekend];
}

function getMonths(month) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return months[month];
}

const actualDate = new Date();
const weekend = actualDate.getDay();
const day = insertZero(actualDate.getDate());
const month = actualDate.getMonth();
const year = actualDate.getFullYear();
const hour = insertZero(actualDate.getHours());
const min = insertZero(actualDate.getMinutes());


const insertActualDay = document.querySelector(".date h1");
const insertActualHour = document.querySelector(".date h2");
const showWeekendDay = getWeekendDay(weekend);
const showMonth = getMonths(month);

insertActualDay.innerHTML = `${showWeekendDay}, ${day} de ${showMonth} de ${year}`;
insertActualHour.innerHTML = `${hour}:${min}`
