function pensumView(){
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
<div class="pensumSelect">
      
      <li><a>Del A - Grunnteknikker</a>
      <li><a onclick="guardStillinger()">Guardstillinger / Benstillinger</a>
      <li><a onclick="guardStillinger()">Forsvarsguard, åpne hender (Shuto)</a></li>
      <li><a onclick="guardStillinger()">Angrepsguard, lukkede hender (Seiken)</a></li>
      <li><a onclick="guardStillinger()">Grunnleggende stilling (Zenkutsu-dachi)</a></li>
</div>

<div class="row">
  <div class="col-lg-5 col-md-6">
    <div class="detail-box" id="exerciseContent">
      <h2>
        Guard
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.

    </div>
  </div>
  <div class="col-lg-7 col-md-6">
    <div class="img-box" id="exerciseImg">
      <img src="images/guard.png" alt="">
    </div>
  </div>
</div>
</div>
</section>
    `;
}

function guardStillinger() {
    document.getElementById('exerciseContent').innerHTML = /*HTML*/`
        <h2>Angrep</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
    `;
}

function updateExercise(title, description, media) {
    document.getElementById('exerciseContent').innerHTML = /*HTML*/`
        <h2>${title}</h2>
        <p>${description}</p>
        <img src="${media}">
    `;
}


