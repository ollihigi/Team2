function init() {
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

