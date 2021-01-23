//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function

// Note: Semi-colons are optional in java script but still use them
"use strict";

(function()
{
    function displayHome()
    {
        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");

        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";

        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];

        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        // Setting new paragraphs class name
        newParagraph.className = "fs-6";

        // This is another way to inject
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;


        //newParagraph.before(paragraphDiv);
        // ex inserting after node
        newParagraph.after(paragraphDiv);
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
         <p id="paragraphOne" class="fs-3 fw-bold">This is my first Paragraph</p `;        
    }

    function displayAbout()
    {
    }

    function displayProjects()
    {
    }

    function displayServices()
    {
    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //Form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){

            console.log(fullName.value);
            console.log(contactNumber.value);
            console.log(emailAddress.value);
        });
    }

    // Start function
    function Start()
    {
        // console.log display app started
        console.log("App Started...");

        // switch case statements
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
        }
        
    }

    // Event listener
    window.addEventListener("load", Start);

})();




