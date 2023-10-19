function pensumView() {
  let trainingCategory = model.categories;
  document.getElementById('app').innerHTML = /*HTML*/`
<section class="slider_section ">
<div class="container ">
  <div class="row">
    <div class="col-md-6 ">
      <div class="detail-box">
        <h1>5 KYU GULT BELTE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
        </p>
        <a href="">
          Min Side
        </a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="img-box">
        <img src="images/pensumImage.png" alt="">
      </div>
    </div>
  </div>
</div>
</section>
<!-- end slider section -->
</div>

<!-- feature section -->
<section class="feature_section">
<div class="container">
<div class="feature_container">
  <div class="box active">
    <div class="img-box">
    <img src="images/yellowBelt.png" alt="">
    </div>
    <h5 class="name">Gult Belte</h5>
  </div>
  <div class="box">
    <div class="img-box"></div>
    <h5 class="name">Orange Belte</h5>
  </div>
  <div class="box">
    <div class="img-box"></div>
    <h5 class="name">Grønt Belte</h5>
  </div>
</div>
</div>
</section>
<section class="about_section layout_padding-bottom">
<div class="container">
<div class="rightSideExercise">
<div class="pensumSelect">
  <h2>${trainingCategory[0].name}</h2><br/>
  ${techniqueTraining(0, 5)}
  <h2>${trainingCategory[1].name}</h2>
  <!${techniqueTraining(8, 1)}
  <div id="techniqueInfo"></div>
  <h2>${trainingCategory[2].name}</h2>
  ${techniqueTraining(12, 0)}
</div>


  <div class="pensumContent" id="exerciseContent">
      <h2>Guard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <img class="exerciseImg" id="exerciseImg" src="images/guard.png" alt="">
  </div>

</section>
`;
}
