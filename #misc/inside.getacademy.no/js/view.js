async function updateView() {
    const appDiv = document.getElementById('app');
    const hasError = (typeof (model.error) === 'string' && model.error.length > 0) || typeof (model.content) != 'object';
    if (hasError || !hasSession()) {
        showLoginButton(model.error || '');
        delete model.error;
        return;
    }

    appDiv.innerHTML = /*HTML*/`
        <details style="float:right">
            <summary>
                ${model.email} 
            </summary>
            <a href="javascript:logout()">logg ut</a>
        </details>
        <img src="/img/logo.png" class="logo"/>
        ${await createContentHtml(null, [...model.selectedContentIds], '')}
        `;
}

async function createContentHtml(parentId, selectedContentIds, html) {
    const content = model.content.filter(c => c.parentId == parentId);
    if (content.length == 0) return /*HTML*/`
        ${html}
        <article>
            ${await loadContentHtml(parentId)}
        </article>
    `;
    const selectedContentId = selectedContentIds.length == 0 ? content[0].id : selectedContentIds.shift();
    const areLessons = content[0].isLession;
    const elementSeparator = areLessons ? '</div><div>' : ' | ';
    let addHtml = content.map(contentElement => {
        const isSelected = selectedContentId == contentElement.id;
        const tagName = isSelected ? 'em' : 'a';
        return /*HTML*/`   
            <${tagName} 
                href="javascript:selectContent(${contentElement.id})"
                ${contentElement.subText ? `data-tooltip="${contentElement.subText}"` : ''}
                >
                ${contentElement.text}
            </${tagName}>
        `}).join(elementSeparator);
    if (areLessons) {
        addHtml = `<hr/><div class="myGrid"><div>${addHtml}</div></div>`;
        // const parentContent = model.content.find(c => c.id == parentId);
        // if (parentContent.subText) {
        //     addHtml = `<cite>${parentContent.text} - ${parentContent.subText}</cite>${addHtml}`;
        // }
    }
    return createContentHtml(selectedContentId, selectedContentIds, `${html}<p class="heading">${addHtml}</p>`);
}

function addParenthesis(text) {
    return text ? ' (' + text + ')' : '';
}

async function loadContentHtml(id) {
    const filePathParts = getPathParts(id);
    const filePath = filePathParts.join('/');
    let cacheObject = model.contentCache[filePath];
    if (cacheObject) {
        const useCache = !cacheObject.dontUseCache;
        const html = useCache ? await loadContentHtmlImpl(id, filePath) : cacheObject.html;
        return html;
    }
    let html = await loadContentHtmlImpl(id, filePath);
    const hasSchedule = hasScheduleLabel(html);
    if (!hasSchedule) html = labelExercises(id, html);
    model.contentCache[filePath] = hasSchedule ? { dontUseCache: true } : { html };
    return html;
}

function labelExercises(id, html) {
    let index = html.search(/<h.>Oppgaver<\/h.>/);
    if (index === -1) return html;
    let exerciseIndex = 0;
    while (true) {
        index = html.indexOf('<li>', index);
        if (index === -1) return html;
        // index = 4 + html.indexOf('<p>', index);
        index += 4;
        const letter = String.fromCharCode(65 + exerciseIndex)
        const exerciseHTML = `<strong>Oppgave ${id} ${letter}</strong> &nbsp; `;
        html = html.substring(0, index) + exerciseHTML + html.substring(index);
        exerciseIndex++;
    }
}

async function loadContentHtmlImpl(id, filePath) {
    const heading = '### ' + model.content.find(c => c.id == id).text + '\n';
    contentMarkdown = heading + await loadContent(filePath);
    const html = markdownToHtml(contentMarkdown);
    return handleSchedule(html);
}

function markdownToHtml(markdown) {
    var md = window.markdownit({
        linkify: true,
        html: true,
        langPrefix: 'language-',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) { }
            }

            return ''; // use external default escaping
        }
    });
    return swapYouTubeLinksToEmbed(md.render(markdown));
}

function swapYouTubeLinksToEmbed(html) {
    let index = -1;
    while (true) {
        const pattern = 'youtube(';
        index = html.indexOf(pattern, index);
        if (index == -1) return html;
        const endIndex = html.indexOf(')', index);
        const preHtml = html.substring(0, index);
        const youtubeId = html.substring(index + pattern.length, endIndex)
        const postHtml = html.substring(endIndex + 1);
        html = preHtml + getYouTubeEmbedHtml(youtubeId) + postHtml;
    }
}

function getYouTubeEmbedHtml(youtubeId) {
    return /*HTML*/`<iframe width="560" height="315" src="//www.youtube.com/embed/${youtubeId}?rel=0&autoplay=0" frameborder="0" allowfullscreen></iframe>`;
}

function getPathParts(id) {
    let contentId = id;
    const pathParts = [];
    while (true) {
        if (contentId == null) return pathParts;
        const content = model.content.find(c => c.id == contentId);
        pathParts.unshift(content.text);
        contentId = content.parentId;
    }
}

function showLoginButton(error) {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div style="color:red">
            ${error}
        </div>
        <div id="login" style="width: 199px;color-scheme: dark"></div>
        `;
    const client_id = '1025358994878-9k12q7d4aptf5qnhqcotu5jmpi389obs.apps.googleusercontent.com';
    const callback = verifyIdToken;
    google.accounts.id.initialize({ client_id, callback });
    const parent = document.getElementById('login');
    google.accounts.id.renderButton(parent, { width: 500, theme: 'filled_blue', shape: 'pill' });
    document.documentElement.setAttribute('data-theme', 'light');
}

