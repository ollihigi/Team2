function guardStillinger(){
    const detailBox = document.querySelector('.detail-box'); // Find the element with class 'detail-box'
    
    if (detailBox) {
      detailBox.innerHTML = /*HTML*/`
        <h2>Angrep</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      `;
    }
  }


  