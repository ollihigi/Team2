
function navBar(){
    document.getElementById('header').innerHTML += /*HTML*/`
    <header>
    <img class="logo" src="images/logo.png" alt="logo">
    <nav>
        <ul class="nav__links">
            <li>
                <a href="#">Startside</a>
                <a onclick="pensumView()">Øvelser</a>
                <a href="#">Trening</a>
                <a onclick="userGradeView()">Min Side</a>
            </li>
        </ul>
    </nav>
    <a href="#" class="regLogBtn">
        <button>Bli Medlem</button>
    </a>
</header>
`;
}