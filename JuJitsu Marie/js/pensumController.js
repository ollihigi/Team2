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
    let delB = [];
    for (let i = start; i < subType.length - end; i++) {
        delB.push(subType[i].name)   
    }

    let optionsHtml = '';
    for(let i = 0; i <delB.length; i++) {
        optionsHtml += `<li><a href="#" onclick="clickedTrainingInfo('${delB[i]}')">${delB[i]}</a></li>`;
    }

    return /*HTML*/` <ul>${optionsHtml}</ul>`
}


  