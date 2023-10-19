// function guardStillinger(){
//     const detailBox = document.querySelector('.detail-box'); // Find the element with class 'detail-box'

//     if (detailBox) {
//       detailBox.innerHTML = /*HTML*/`
//         <h2>Angrep</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
//       `;
//     }
//   }
function techniqueTraining(start, end) {
    let subType = model.subtypes;
    let partsABC = [];
    for (let i = start; i < subType.length - end; i++) {
        partsABC.push(subType[i].name)
    }

    let optionsHtml = '';
    for (let i = 0; i < partsABC.length; i++) {
        optionsHtml += `<li><a onclick="clickedTrainingInfo(${i}); return false;">${partsABC[i]}</a></li>`;
    }

    return /*HTML*/` <ul>${optionsHtml}</ul>`
}
function clickedTrainingInfo(exerciseName) {
    let exerciseContentHtml = '';
    const infoHtml = model.exercises[exerciseName];
    exerciseContentHtml = [
<<<<<<< HEAD
        `<h2>${infoHtml.name || ''}</h2>`,
        `<h4>${infoHtml.nameJapanese || ''}</h4>`,
        `<p>${infoHtml.description || ''}</p>`,
    ];
    document.getElementById('exerciseContent').innerHTML = exerciseContentHtml.join('');
=======
        infoHtml.name || '',
        infoHtml.nameJapanese || '',
        infoHtml.description || '',
    ]
    document.getElementById('exerciseContent').innerHTML = exerciseContentHtml;
>>>>>>> c787f0f2b90c353d01700f64f8e88f615e4120c0
}
function template(){
    `
    <h2>{name}</h2>
    <h4>{nameJapanese}</h4>
    <p>{desciption}</p>
    <div>{media}</div>
    `;
}