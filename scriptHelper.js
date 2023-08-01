// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput == ""){
    return "Empty";
   }
   
   if (isNaN(Number(testInput))){
    return "Not a Number";
   } else {
    return "Is a Number";
   }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    let validatePilot = validateInput(pilot);
    let validateCopilot = validateInput(copilot);
    let validateFuel = validateInput(fuelLevel);
    let validateCargo = validateInput(cargoLevel);
    let errorsExist = false;

    if (validatePilot === "Empty" || validateCargo === "Empty" || validateFuel === "Empty" || validateCopilot === "Empty"){
        window.alert("Enter a value in every field.");
        errorsExist = true;
        return errorsExist;
    }

    if (validatePilot != "Not a Number"){
        window.alert("Pilot name must be a string.")
        errorsExist = true;
        return errorsExist;
    }

    if (validateCopilot != "Not a Number"){
        window.alert("Copilot name must be a string.")
        errorsExist = true;
        return errorsExist;       
    }

    if (validateFuel != "Is a Number"){
        window.alert("Fuel Level must be a number.")
        errorsExist = true;
        return errorsExist;       
    }

    if (validateCargo != "Is a Number"){
        window.alert("Cargo Mass must a number")
        errorsExist = true;
        return errorsExist;       
    }

    return errorsExist;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
