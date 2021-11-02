"use strict";

document.addEventListener("DOMContentLoaded", function() {

    let firulette = document.getElementById('firulette');

    function aparecer(){
        firulette.classList.remove('firulette');
        firulette.classList.add('view');
    }

    firulette.addEventListener("DOMContentLoaded", aparecer());
});