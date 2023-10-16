function initSchedule() {
    model.schedule = {
        startDate: '2023-08-07',
        weeks: [
            ...createWeek('2023-08-07', 32, 38, 2023, 'Emne 1'),
            ...createWeek('2023-09-25', 39, 40, 2023, 'Emne 2'),
            ...createWeek('2023-10-09', 41, 41, 2023, 'Høstferie'),
            ...createWeek('2023-10-16', 42, 45, 2023, 'Emne 2'),
            ...createWeek('2023-11-13', 46, 51, 2023, 'Emne 3', ['2023-12-21', '2023-12-22']),
            ...createWeek('2023-12-25', 52, 52, 2023, 'Juleferie'),
            ...createWeek('2024-01-01', 1, 2, 2024, 'Emne 3', ['2024-01-01', '2024-01-11', '2024-01-12']),
        ],
        lessons: [],
    }
    initLessons();
}

function initLessons() {
    const weeks = model.schedule.weeks;
    addLesson('Felles oppstart', '1', '9:30 - 10:30', 0);
    addLesson('Egenarbeid i team', '1', '10:30 - 11:30', 0);
    addLesson('Intervjuchorei', '4', '9:00 - 9:30', 0);
    addLesson('Chorei + NK i team', '2,3,5', '9:00 - 9:30', 0);
    addLesson('Oppsummering + intro logging', '5', '10:00 - 11:00', 0);
    addLesson('Spørsmål og svar-økt', '5', '10:00 - 11:00', 1);
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        const week = weeks[weekIndex];
        if (weekIndex > 0) {
            addLesson('Chorei + NK i team', '1', '9:20 - 10:00', weekIndex);
            addLesson('Intervjuchorei', '4', '9:00 - 10:00', weekIndex);
            addLesson('Chorei + NK i team', '2,5', '9:00 - 10:00', weekIndex);
        }
        if (weekIndex > 1) {
            addLesson('Spørsmål og svar-økt', '1', '10:00 - 11:00', weekIndex);
            addLesson('Spørsmål og svar-økt', '3', '9:00 - 10:00', weekIndex);
            if (weekIndex != 2) {
                addLesson('Spørsmål og svar-økt', '5', '12:30 - 13:30', weekIndex);
            }
        }
        if (weekIndex == 7) {
            addLesson('Undervisning', '1,2,3,4', '10:00 - 11:30', weekIndex);
        } else {
            addLesson('Undervisning', '2', '10:00 - 11:30', weekIndex);
            if (week.description != 'Emne 2' && weekIndex != 2) {
                addLesson('Undervisning', '4', '12:30 - 14:00', weekIndex);
            } else if (weekIndex == 2) {
                addLesson('Undervisning', '5', '12:30 - 14:00', weekIndex);
            }
        }
        if (weekIndex == 0) {
            addLesson('Fellessesjon', '1', '13:30 - 14:30', 0, 'Fellessesjon med spørsmål og svar');
        }
        addLesson('Avslutning i team', '1,2,3,4,5', '14:45 - 15:00', weekIndex, 'Oppsummering og avslutning i team - inkludert logg');
    }
}

function addLesson(text, daysStr, time, weekIndex, subText) {
    const pageModel = model.schedule;
    const lessons = pageModel.lessons;
    const week = pageModel.weeks[weekIndex];
    if (week.isHoliday) return;
    const days = daysStr.split(',').map(Number);
    lessons.push({ text, days, time, weekIndex, subText });
}

function createWeek(startDate, startWeek, endWeek, year, description, allExcept) {
    const weeks = [];
    let date = startDate;
    const isHoliday = description.includes('ferie');
    for (let weekNo = startWeek; weekNo <= endWeek; weekNo++) {
        let saturdayDate = addDays(date, 6).toISOString().substring(0, 10);
        const except = allExcept === undefined ? undefined : allExcept.filter(d => d >= date && d <= saturdayDate);
        weeks.push({ date, weekNo, year, description, isHoliday, except });
        date = new Date(new Date(date).getTime() + 1000 * 60 * 60 * 24 * 7).toISOString().substring(0, 10);
    }
    return weeks;
}