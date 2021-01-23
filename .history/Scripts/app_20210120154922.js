/* Custom scripts go here */

// IIFE - Immediately Invoked Function Expression
// AKA: Anonymous Self-Executing Function

(function(){

    "use strict";

    // initialization function
    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph";

        //selection examples
        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        let paragraphOneContentElements = document.getElementsByTagName("p")[0];
        console.log(paragraphOneContentElements);

        let paragraphQuery = document.querySelector("p");
        console.log(paragraphQuery);

        let paragraphOneQuery = document.querySelectorAll("p")[0];

        // HOW TO INSERT OR ADD BRAND NEW ELEMENT DYNAMICALLY RATHER THAN MANUALLY

        // STEP 1 - CREATE NEW ELEMENT
        let paragraphTwo = document.createElement("p");
        // STEP 2 - CONFIGURE THE NEW ELEMENT
        paragraphTwo.setAttribute("id", "paragraphTwoID");
        paragraphTwo.textContent = "This is my second paragraph";
        paragraphTwo.className = "fs-4 fw-bold";
        // STEP 3 - TARGET THE PARENT ELEMENT
        let mainContent = document.querySelectorAll("main");

        // STEP 4 - APPEND NEW ELEMENT TO THE PARENT
        //mainContent.appendChild(paragraphTwo);
        
        let newDivtag = document.createElement("div");
        newDivTag.innerHTML = `<h2> this is my second heading </h2>
        <p id="paragraphThree"> This is the third paragraph </p>`;

        //mainContent.append(newDivTag);

        paragraphOne.after(newDivTag)
        
    }


    // event listener
    window.addEventListener("load", Start); 
})();


