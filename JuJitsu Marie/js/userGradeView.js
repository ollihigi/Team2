function userGradeView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
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
                    <a href="#profile" class="active">Gradering</a>
                    <hr align="center">
                </div>
                <div class="url">
                    <a onclick="userSettingsView()">Innstillinger</a>
                    <hr align="center">
                </div>
            </div>
        </div>
        <!-- End -->

        <!-- main_grade -->
        <div class="main_grade">
   
            <div class="card_grade">
                <div class="card_grade-body">
                <div class="trackers">
               
                <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle"
                  stroke-dasharray="80, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>

              <svg viewBox="0 0 36 36" class="circular-chart">
              <path class="circle"
                stroke-dasharray="30, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
           </div>
           <div class="card_grade">
           <div class="card_grade-body">
               <div class="beltGrade">
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoWhite" name="check" checked />
                       <label for="roundedTwoWhite"></label>
                       <p>Hvitt</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoYellow" name="check" />
                       <label for="roundedTwoYellow"></label>
                       <p>Gult</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoOrange" name="check" />
                       <label for="roundedTwoOrange"></label>
                       <p>Orange</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoGreen" name="check" />
                       <label for="roundedTwoGreen"></label>
                       <p>Grønt</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBlue" name="check" />
                       <label for="roundedTwoBlue"></label>
                       <p>Blått</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBrown" name="check" />
                       <label for="roundedTwoBrown"></label>
                       <p>Brunt</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBlack" name="check" />
                       <label for="roundedTwoBlack"></label>
                       <p>Svart</p>
                   </div>
               </div>
           </div>
       </div>
       <div class="card_grade">
           <div class="card_grade-body">
               <div class="categoryGrade">
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoGrunnteknikker" name="check" checked />
                       <label for="roundedTwoGrunnteknikker"></label>
                       <p>Grunnteknikker</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoTeknikktrening" name="check" />
                       <label for="roundedTwoTeknikktrening"></label>
                       <p>Teknikktrening</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoSelvforsvarstrening" name="check" />
                       <label for="roundedTwoSelvforsvarstrening"></label>
                       <p>Selvforsvar</p>
                   </div>
               </div>
           </div>
       </div>
       <div class="card_grade">
           <div class="card_grade-body">
               <div class="subtypeGrade">
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoGuardstillinger" name="check" checked />
                       <label for="roundedTwoGuardstillinger"></label>
                       <p>Guardstillinger</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoForflytninger" name="check" checked />
                       <label for="roundedTwoForflytninger"></label>
                       <p>Forflytninger</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoOther" name="check" checked />
                       <label for="roundedTwoOther"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoAnother" name="check" checked />
                       <label for="roundedTwoAnother"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoYetAnother" name="check" checked />
                       <label for="roundedTwoYetAnother"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoLastOne" name="check" />
                       <label for="roundedTwoLastOne"></label>
                       <p>--</p>
                   </div>
               </div>
           </div>
       </div>

           </div>
           </div>
           <div class="card_grade">
           <div class="card-body">
               <div class="exerciseGrade">
                   <div class="roundedTwo">
                   
                       <input type="checkbox" value="None" id="roundedTwoWhite" name="check" checked />
                       <label for="roundedTwoWhite"></label>
                       <p>Forsvarsguard</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoYellow" name="check" />
                       <label for="roundedTwoYellow"></label>
                       <p>Angrepsguard</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoOrange" name="check" />
                       <label for="roundedTwoOrange"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoGreen" name="check" />
                       <label for="roundedTwoGreen"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBlue" name="check" />
                       <label for="roundedTwoBlue"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBrown" name="check" />
                       <label for="roundedTwoBrown"></label>
                       <p>--</p>
                   </div>
                   <div class="roundedTwo">
                       <input type="checkbox" value="None" id="roundedTwoBlack" name="check" />
                       <label for="roundedTwoBlack"></label>
                       <p>--</p>
                   </div>
               </div>
           </div>
       </div>
       
        `;
}
