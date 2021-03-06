/*
 * Name: Aaron LeBlanc
 * Date: 2021/22/01
 * File name: app.js
 *
 */ 

"use strict";
// Contact Class
class Contact {
    // Getters and setters
    get FullName() 
    {
      return this.m_fullName;
    }
  
    set FullName(value) 
    {
      this.m_fullName = value;
    }
  
    get ContactNumber() 
    {
      return this.m_contactNumber;
    }
  
    set ContactNumber(value) 
    {
      this.m_contactNumber = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
  
    

    /**
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    // Constructor
    constructor(fullName = "", contactNumber = "", emailAddress = "") 
    {
      this.FullName = fullName;
      this.ContactNumber = contactNumber;
      this.EmailAddress = emailAddress;
    }

    // Methods

    /**
     * This methods overides to string function for contact class
     *
     * @returns {string}
     */
    toString() 
    {
      return `Full Name     : ${this.FullName} \nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
    }

    /**
     * This method returns JSON object made of the properties of the Contact class
     *
     * @returns {Object}
     */
    toJSON()
    {
      return {
        "fullName": this.FullName,
        "contactNumber": this.ContactNumber,
        "emailAddress": this.EmailAddress
      }
    }

    /**
     * This method converts the Contact into a comma-separated value string
     *
     * @returns {string}
     */
    serialize()
    {
      if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
      {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
      }
      else 
      {
        console.error("One or more properties of the Contact is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
      let propertyArray = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];
    }
  }