function authView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <section class="profile">
 <!-- Sidenav -->
 <div class="sidenav">
 <div class="profile">
     <img src="/JuJitsu Marie/images/profile2.png" alt="" width="100" height="100">

     <div class="name">
         Marie
     </div>
     <div class="job">
         Administrator
     </div>
 </div>

 <div class="sidenav-url">
     <div class="url">
         <a onclick="userGradeView()">Gradering</a>
         <hr align="center">
     </div>
     <div class="url">
         <a href="#settings" class="active">Innstillinger</a>
         <hr align="center">
     </div>
 </div>
</div>
<!-- End -->

<!-- Main -->
<div class="form">
      
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Lag Bruker</a></li>
        <li class="tab"><a href="#login">Logg In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <br>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                Fornavn<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>
        
            <div class="field-wrap">
              <label>
                Etternavn<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Passord<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <button type="submit" class="buttonForm buttonForm-block"/>Bli Medlem</button>
          
          </form>

        </div>
        
        <div id="login">   
          <form action="/" method="post">
          
            <div class="field-wrap">
            <label>
              Email<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a href="#">Glemt passordet?</a></p>
          
          <button class="buttonForm buttonForm-block"/>Log In</button>
          
          </form>

        </div>
        
      </div><!-- tab-content -->
      
</div> <!-- /form -->
</section>
    `
}

