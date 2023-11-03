function init() {
  loadModelFromLocalStorage();
  navBar();
  landingView();
  hideTitle();

}

function hideTitle(){
  let siteTitleElement = document.getElementById("siteTitle");
  if (siteTitleElement) {
      siteTitleElement.innerHTML = "";
  } 
  }

  function selectSubtype(event, id) {
    event.preventDefault();
    model.selectedSubtype = id;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }
  
  function setExerciseIsDone(id){
    const exercise = model.exercises.find(e=>e.id==id);
    exercise.isDone = !exercise.isDone;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }
  
  function navBar() {
    document.getElementById('header').innerHTML += /*HTML*/`
      <header>
        <div class="logo" onclick="landingView()">
          <img src="images/logo.png" alt="logo">
          <p id="siteTitle"><span>Ju</span>Jit<span>su</span>%</p>
        </div>
        <nav>
          <ul class="nav__links">
            <li>
              <a onclick="ExerciseCollectionView()">Ole</a>
              <a onclick="landingView(landingView)">Startside</a>
              <a onclick="checkUserLoggedIn(pensumView)">Pensum</a>
              <a onclick="checkUserLoggedIn(trainingView)">Trening</a>
              <a onclick="checkUserLoggedIn(userGradeView)">${model.user.name}</a>
            </li>
       
            <select id="theme" onchange="updateAccentColor(this.value)">
            <option id="current"value="#ffc107">⚙️</option>
            <option value="#fc6623">🟠</option>
            <option value="#00cf69">🟢</option>
            <option value="#0073b8">🔵</option>
            <option value="#6c4433">🟤</option>
            <option value="#f5302e">🔴</option>
            <option value="#8b64c3">🟣</option>
          </select>
          </ul>
        </select>
        </nav>
      </header>
    `;
  }

function updateNavBar(currentView) {
  const links = document.querySelectorAll('.nav__links a');
  links.forEach(link => {
    if (link.onclick.toString().includes(currentView)) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
}

function footer(){
    document.getElementById('footer').innerHTML += /*HTML*/`
    <footer>
    <div class="footer">
        <div class="footer__text">
            <p>© 2021 Ju Jitsu Pensum Oversikt</p>
        </div>
    </div>
</footer>
`;
}

function saveModelToLocalStorage() {
  localStorage.setItem('model', JSON.stringify(model));
}

function loadModelFromLocalStorage() {
  const storedModel = localStorage.getItem('model');
  if (storedModel) {
    model = JSON.parse(storedModel);
  }
}

function updateAccentColor(color) {

  document.documentElement.style.setProperty('--accent', color);
  localStorage.setItem('themeColor', color);
  switch (color) {
    case '#ffc107':
      colorEmoji = '🟡';
      break;
    case '#fc6623':
      colorEmoji = '🟠';
      break;
    case '#00cf69':
      colorEmoji = '🟢';
      break;
    case '#0073b8':
      colorEmoji = '🔵';
      break;
    case '#6c4433':
      colorEmoji = '🟤';
      break;
    case '#f5302e':
      colorEmoji = '🔴';
      break;
    case '#8b64c3':
      colorEmoji = '🟣';
      break;
  }
}


let colorEmoji = '';
updateEmoji();
function updateEmoji(){

let storedColor = localStorage.getItem('themeColor');

if (storedColor) {
  updateAccentColor(storedColor);
}
}

