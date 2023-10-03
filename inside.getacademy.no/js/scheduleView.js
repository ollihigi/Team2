function getScheduleLabel() {
    return '// timeplan';
}

function hasScheduleLabel(text) {
    return text.includes(getScheduleLabel());
}

function handleSchedule(markdown) {
    const label = getScheduleLabel();
    const startIndex = markdown.indexOf(label);
    if (startIndex == -1) return markdown;
    const pre = markdown.substring(0, startIndex);
    const post = markdown.substring(startIndex + label.length);
    return pre + createSchedule() + post;
}

function createSchedule() {
    const schedule = model.schedule;
    const weekIndex = schedule.selectedWeekIndex || initSelectedWeek();
    const week = schedule.weeks[weekIndex];
    const lastWeekIndex = schedule.weeks.length - 1;
    const monday = new Date(week.date);
    const totalDayCount = getStats(lastWeekIndex).daysTotal;
    const weekStats = getStats(weekIndex);
    return /*HTML*/`
        <div>
            <div style="float: right">
                <div role="button" onclick="selectWeek(${0})">◁◁</div>
                <div role="button" onclick="selectWeek(${Math.max(weekIndex - 1, 0)})">◁</div>
                <div role="button" onclick="selectWeek(${Math.min(weekIndex + 1, lastWeekIndex)})">▷</div>
                <div role="button" onclick="selectWeek(${lastWeekIndex})">▷▷</div>
            </div>
            <hgroup>
                <h6>Uke ${week.weekNo} - ${week.year}: ${week.description}</h6>
                <div>
                    ${week.isHoliday ? '' : /*HTML*/`
                    Uke ${weekStats.daysModule / 5} av ${week.description} og uke  ${weekStats.daysTotal / 5} av ${totalDayCount / 5} totalt.
                    `}
                </div>
            </hgroup>
            <table style="table-layout: fixed; width: 100%;" role="grid">
                <thead>
                    <tr>
                        <th scope="col">${toDayAndDate(monday, 0, 'mandag')}</th>
                        <th scope="col">${toDayAndDate(monday, 1, 'tirsdag')}</th>
                        <th scope="col">${toDayAndDate(monday, 2, 'onsdag')}</th>
                        <th scope="col">${toDayAndDate(monday, 3, 'torsdag')}</th>
                        <th scope="col">${toDayAndDate(monday, 4, 'fredag')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${getLessons(week, weekIndex, 1, true)}</td>
                        <td>${getLessons(week, weekIndex, 2, true)}</td>
                        <td>${getLessons(week, weekIndex, 3, true)}</td>
                        <td>${getLessons(week, weekIndex, 4, true)}</td>
                        <td>${getLessons(week, weekIndex, 5, true)}</td>
                    </tr>
                    <tr>
                        <td>${getLunch(week, 1)}</td>
                        <td>${getLunch(week, 2)}</td>
                        <td>${getLunch(week, 3)}</td>
                        <td>${getLunch(week, 4)}</td>
                        <td>${getLunch(week, 5)}</td>
                    </tr>
                    <tr>
                        <td>${getLessons(week, weekIndex, 1, false)}</td>
                        <td>${getLessons(week, weekIndex, 2, false)}</td>
                        <td>${getLessons(week, weekIndex, 3, false)}</td>
                        <td>${getLessons(week, weekIndex, 4, false)}</td>
                        <td>${getLessons(week, weekIndex, 5, false)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function getLunch(week, day) {
    return isOffDay(week, day) ? 'Fridag' : '11:30 - 12:15<br/>Lunsj';
}

function getLessons(week, weekIndex, day, isBeforeLunch) {
    if (isOffDay(week, day)) return '';
    return model.schedule.lessons
        .filter(l => l.weekIndex == weekIndex && l.days.includes(day) && (isBeforeLunch ^ timeIsAfterLunch(l.time)))
        .map(l => {
            const tooltip = l.subText ? `data-tooltip="${l.subText}"` : '';
            return /*HTML*/`${l.time}<br/><span ${tooltip}>${l.text}</span><br/>`
        }).join('<br/>');
}

function isOffDay(week, day) {
    if (week.isHoliday) return true;
    if (week.except == undefined || week.except.length == 0) return false;
    const mondayDate = week.date;
    const dayOffset = day - 1;
    const date = addDays(mondayDate, dayOffset).toISOString().substring(0, 10);
    return week.except.includes(date);
}

function timeIsAfterLunch(time) {
    return time.startsWith('1') && time[1] > 1;
}

function getStats(weekIndex) {
    let daysTotal = 0;
    let daysModule = 0;
    let moduleDescription = '';
    for (let index = 0; index <= weekIndex; index++) {
        const week = model.schedule.weeks[index];
        if (week.isHoliday) continue;
        const exceptDaysCount = week.except === undefined ? 0 : week.except.length;
        const daysInThisWeek = 5 - exceptDaysCount;
        daysTotal += daysInThisWeek;
        if (moduleDescription != week.description) {
            daysModule = 0;
            moduleDescription = week.description;
        }
        daysModule += daysInThisWeek;
    }
    return { daysTotal, daysModule };
}

function weekObjectFromNumber(weekNo) {
    for (let week of model.schedule.weeks) {
        if (weekNo >= week.startWeek && weekNo < week.endWeek) return week;
    }
    return null;
}

function initSelectedWeek() {
    const schedule = model.schedule;
    const currentDate = new Date().toISOString().substring(0, 10);
    const startDate = schedule.startDate;
    if (currentDate < startDate) return schedule.selectedWeekIndex = 0;
    const millisSinceStart = new Date().getTime() - new Date(startDate).getTime();
    const daysSinceStart = millisSinceStart / (1000 * 3600 * 24);
    let weeksSinceStart = Math.floor(daysSinceStart / 7);
    if (daysSinceStart % 7 > 5) weeksSinceStart++;
    const weekIndex = schedule.selectedWeekIndex = Math.min(schedule.weeks.length - 1, weeksSinceStart);
    return weekIndex;
}
