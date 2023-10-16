
function navBar(){
    document.getElementById('app').innerHTML += /*HTML*/`
    <header>
    <img class="logo" src="images/logo.png" alt="logo">
    <nav>
        <ul class="nav__links">
            <li>
                <a href="#">Øvelser</a>
                <a href="#">Trening</a>
                <a href="#">Min Side</a>
            </li>
        </ul>
    </nav>
    <a href="#" class="regLogBtn">
        <button>Bli Medlem</button>
    </a>
</header>
`;
}