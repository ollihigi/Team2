function selectContent(id) {
    model.selectedContentIds = [];
    let currentId = id;
    while (currentId != null) {
        model.selectedContentIds.unshift(currentId);
        currentId = getParentId(currentId);
    }
    window.removeEventListener('popstate', showSelected);
    location.hash = id;
    window.addEventListener('popstate', showSelected, false);
    model.history.push(id);
    updateView();
}

function getParentId(id) {
    const contentElement = model.content.find(c => c.id == id);
    return contentElement == null ? null : contentElement.parentId;
}

function initContent(responseObj) {
    let lastId = null;
    model.email = responseObj.email;
    model.content = responseObj.content
        .split('\r\n')
        .filter(Boolean)
        .map(line => {
            [id, parentId, text, subText, level, type] = line.split(';');
            const isLession = id === '';
            id = toNumber(id) || lastId + 1;
            lastId = id;
            parentId = toNumber(parentId);
            return { id, parentId, text, subText, level, type, isLession };
        });
    showSelected();
    updateView();
}

function toNumber(numberText) {
    if (typeof (numberText) != 'string' || numberText.length == 0) return null;
    return parseInt(numberText);
}

function logout() {
    const cookieName = 'PHPSESSID';
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = cookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = cookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
    location.reload();
}

function selectWeek(weekNo) {
    model.schedule.selectedWeekIndex = weekNo;
    updateView();
}