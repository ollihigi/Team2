function userGradeView() {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = /*HTML*/ `
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
       <div class="trackProgress">
       <div id="checklist">
           <div id="progress">
        
               <svg viewBox="0 0 36 36" class="circular-chart">
                   <path class="circle"
                       stroke-dasharray="0, 100"
                       d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                   />
                   <!-- SVG text element to display percentage -->
                   <text class="percentage-text" id="progressPercentage" x="50%" y="50%" fill="white">
                       <tspan x="50%" dy="0" >0%</tspan>
                   </text>
               </svg>
           </div>
           <h2>Del A - Grunnteknikker</h2>
           <ul>
               <!-- Apply the "disabled-checkbox" class to make the checkbox unclickable -->
               <li><input type="checkbox" class="subtype" id="subtype1">Guardstillinger / Benstillinger</li>
               <li><input type="checkbox" class="subtype" id="subtype2">Forflytninger</li>
               <li><input type="checkbox" class="subtype" id="subtype3">Fallteknikk</li>
               <li><input type="checkbox" class="subtype" id="subtype4">Kast / Fellinger</li>
               <li><input type="checkbox" class="subtype" id="subtype5">Slag</li>
               <li><input type="checkbox" class="subtype" id="subtype6">Spark</li>
               <li><input type="checkbox" class="subtype" id="subtype7">Mønster</li>
               <li><input type="checkbox" class="subtype" id="subtype8">Forflytninger</li>
               <li><input type="checkbox" class="subtype" id="subtype9">Blokkeringer</li>
           </ul>
           <h2>Guardstillinger / Benstillinger</h2>
           <ul>
               <li><input type="checkbox" class="exercise subtype1">1</li>
               <li><input type="checkbox" class="exercise subtype1">2</li>
               <li><input type="checkbox" class="exercise subtype1">3</li>
               <li><input type="checkbox" class="exercise subtype1">4</li>
           </ul>
           
           <!-- Add more exercises here -->
       </div>
   </div>
   `;
}


       // Function to update the bottom checkboxes based on the top checkboxes
       function updateCheckboxes() {
        const exerciseCheckboxes = document.querySelectorAll('.exercise');
        const subtype1 = document.getElementById('subtype1');

        // Check if all exercise checkboxes are checked
        const areAllExercisesChecked = Array.from(exerciseCheckboxes).every(checkbox => checkbox.checked);
        
        // Check or uncheck subtype1 based on all exercise checkboxes
        subtype1.checked = areAllExercisesChecked;

        // Recalculate the progress
        updateProgress();
    }

    // Add event listeners to exercise checkboxes to update subtype1
    const exerciseCheckboxes = document.querySelectorAll('.exercise');
    exerciseCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckboxes);
    });

    // Function to calculate progress percentage and update the circular chart
    function updateProgress() {
        const exerciseCheckboxes = document.querySelectorAll('.subtype');
        const checkedCount = Array.from(exerciseCheckboxes).filter(checkbox => checkbox.checked).length;
        const totalCount = exerciseCheckboxes.length;
        const percentage = (checkedCount / totalCount) * 100;



        // Update the circular chart
        const circle = document.querySelector('.circle');
        circle.style.strokeDasharray = percentage + ', 100';
        
        // Update the percentage text in the SVG
        const percentageText = document.querySelector('.percentage-text tspan');
        percentageText.textContent = Math.round(percentage) + '%';
    }
}

  
       
