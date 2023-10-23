

function clickedTrainingInfo(exerciseName) {
    let exerciseContentHtml = '';
    const infoHtml = model.exercises[exerciseName];
    exerciseContentHtml = [
        `<h2>${infoHtml.name || ''}</h2>`,
        `<h4>${infoHtml.nameJapanese || ''}</h4>`,
        `<p>${infoHtml.description || ''}</p>`,
        `<p><iframe src="${infoHtml.medialink}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </p>`,
    ];
    document.getElementById('exerciseContent').innerHTML = exerciseContentHtml.join('');
}

function selectSubtype(id) {
    model.selectedSubtype = id;
    pensumView();
}

function createExerciseHtml() {
    if(model.selectedSubtype == null) return startingExercise();

    let html = '';
    for (let exercise of model.exercises) {
        if (exercise.subtypesId == model.selectedSubtype) {
            html += /*HTML*/` <li>${exercise.name}</li>`;
        }
    }
    return html;
}

function startingExercise() {
    let html = '';
    for (let exercise of model.exercises) {
        if (exercise.subtypesId == 0) {
            html += /*HTML*/` <li>${exercise.name}</li>`;
        }
    }
    return html;
}
