function navBar(){
    document.getElementById('header').innerHTML += /*HTML*/`
    <header>
    <img class="logo" src="images/logo.png" alt="logo" onclick="landingView()">
    <nav>
        <ul class="nav__links">
            <li>
            <a onclick="landingView()">Startside</a>
            <a onclick="pensumView()">Pensum</a>
            <a onclick="ExerciseCollectionView()">Øvelsesamling</a>
            <a onclick="trainingView()">Min trening</a>
            <a onclick="userGradeView()">Min Side</a>
            <a class="regLog"onclick="authView()">Bli Medlem</a>
            </li>
        </ul>
    </nav>
</header>
`;
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