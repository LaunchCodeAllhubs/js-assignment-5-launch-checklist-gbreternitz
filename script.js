// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets)
        console.log(destination.name)
        addDestinationInfo(document, destination.name, destination.diameter,
             destination.star, destination.distance, destination.moons, destination.image);
    })
   
    //let form = document.getElementById("formSubmit");
    let form = document.querySelector("form")
    form.addEventListener("submit", function(event){
    
        let pilot = document.getElementById("pilotName");
        
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");

        let isFaulty = formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
        if (isFaulty){
            event.preventDefault();
        }
   })

});