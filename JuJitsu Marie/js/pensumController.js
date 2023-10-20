// function guardStillinger(){
//     const detailBox = document.querySelector('.detail-box'); // Find the element with class 'detail-box'

//     if (detailBox) {
//       detailBox.innerHTML = /*HTML*/`
//         <h2>Angrep</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
//       `;
//     }
//   }

function clickedTrainingInfo(exerciseName) {
    let exerciseContentHtml = '';
    const infoHtml = model.exercises[exerciseName];
    exerciseContentHtml = [
        `<h2>${infoHtml.name || ''}</h2>`,
        `<h4>${infoHtml.nameJapanese || ''}</h4>`,
        `<p>${infoHtml.description || ''}</p>`,
    ];
    document.getElementById('exerciseContent').innerHTML = exerciseContentHtml.join('');
}
function template(){
    `
    <h2>{name}</h2>
    <h4>{nameJapanese}</h4>
    <p>{desciption}</p>
    <div>{media}</div>
    `;
}