// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   console.log(missionTarget)
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
    `
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
    let launchReady = true;

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
        window.alert("Cargo Mass must be a number.")
        errorsExist = true;
        return errorsExist;       
    }
    
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    launchStatus = document.getElementById("launchStatus");


    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    
    if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch"
        launchReady = false;
        errorsExist = true;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    }

    if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchReady = false;
        errorsExist = true;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    }

    if (!launchReady){
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style = "color: #C7254E"
        errorsExist = true;
    } else {
        launchStatus.innerHTML = "Shuttle is Ready for launch"
        launchStatus.style = "color: #419F6A"
    }
    
    list.style="visibility: visible"

    return errorsExist;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
    selectedPlanet = planets[Math.floor(Math.random() * (planets.length - 1))]
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
