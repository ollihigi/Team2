function todayAsDateString() {
    return new Date().toLocaleDateString();
}

function hasSession() {
    return document.cookie.includes('PHPSESSID');
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function toDayAndDate(date, days, dayName) {
    const dateStr = addDays(date, days).toLocaleDateString();
    return dayName + ' ' + dateStr.substring(0, dateStr.length - 5);
}

function uker(n) {
    return n + ' uke' + (n == 1 ? '' : 'r');
}