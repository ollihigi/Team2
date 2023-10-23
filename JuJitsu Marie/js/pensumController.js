// function guardStillinger(){
//     const detailBox = document.querySelector('.detail-box'); // Find the element with class 'detail-box'

//     if (detailBox) {
//       detailBox.innerHTML = /*HTML*/`
//         <h2>Angrep</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
//       `;
//     }
//   }


//<iframe src="https://www.youtube.com/embed/0glU6Qu06kU" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


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