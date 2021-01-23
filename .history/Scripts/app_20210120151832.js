/* Custom scripts go here */

// IIFE - Immediately Invoked Function Expression
// AKA: Anonymous Self-Executing Function

(function(){

    // initialization function
    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph";

        //selection
        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        let paragraphOneContentElements = document.getElementsByTagName("p")[0];
        console.log(paragraphOneContentElements);
    }


    // event listener
    window.addEventListener("load", Start); 
})();


