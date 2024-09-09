import moment from 'moment-timezone';

function timeToNewYear() {
    const now = moment().tz(moment.tz.guess());
    const currentYear = now.year();
    const newYear = moment([currentYear + 1, 0, 1]).tz(moment.tz.guess()); // 1 января следующего года

    const timeLeft = moment.duration(newYear.diff(now));

    const days = Math.floor(timeLeft.asDays());
    const hours = timeLeft.hours();
    const minutes = timeLeft.minutes();
    const seconds = timeLeft.seconds();

    console.log(`Текущая таймзона: ${now.tz()}`);
    console.log(`До ближайшего Нового Года осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
}

timeToNewYear();