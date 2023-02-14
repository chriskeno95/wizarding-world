$(document).ready(function() {
    var harrysWand = "./assets/images/harry-wand.png"
     var goylesWand = "./assets/images/goyle-wand.png";
    var vincentsWand = "./assets/images/crabbe_wand.png";
    var voldemortsWand = "./assets/images/voldemort_wand.png";
var trelawney_Wand = "./assets/images/trelawney_wand.png";
var tonksWand = "./assets/images/tonks_wand.png";
var snapesWand = "./assets/images/snape_wand.png";
var slughornsWand = "./assets/images/slughorn_wand.png";
var siriusWand = "./assets/images/sirius_wand.png";
var ronsWand = "./assets/images/ron_wand.png";
var nevillesWand = "./assets/images/neville_wand.png";
var narcissasWand = "./assets/images/narcissa_wand.png";
var mcgonagallsWand = "./assets/images/mcgonagall_wand.png";
var mad_eye_wand = "./assets/images/mad_eye_wand.png";
var lupinsWand = "./assets/images/lupin_wand.png";
var lunasWand = "./assets/images/luna_wand.png";
var luciussWand = "./assets/images/lucius_wand.png";
var krumsWand = "./assets/images/krum_wand.png";
var jamesWand = "./assets/images/james_wand.png";
var harmionesWand = "./assets/images/Hermione_wand.png";
var ginnysWand = "./assets/images/ginny_wand.png";
var georgesWand = "./assets/images/george_wand.png";
var fredsWand = "./assets/images/fred_wand.png";
var fleursWand = "./assets/images/fleur_wand.png";
var dumbledoresWand = "./assets/images/dumbledore_wand.png";
var dracosWand = "./assets/images/draco_wand.png";
var deansWand = "./assets/images/dean_wand.png";
var chosWand = "./assets/images/cho_wand.png";
var cedricsWand = "./assets/images/cedric_wand.png";
var bellatrixsWand = "./assets/images/bellatrix_wand.png";
var unknownWand = "./assets/images/unknown_wand.png"

    var nextCharacter = $(".next-character");
    var prevCharacter = $(".previous-character");
    var prevSpell = $(".previous-spell");
    var nextSpell = $(".next-spell");
    var search = $("#search")

    var characterName = $("#character-name")
    var speciesType = $("#species-type")
    var DOB = $("#birth-date")
    var hogwartsHouse = $("#house")
    var patronus = $("#patronus")
    var wandLength = $("#wand-length")
    var wandCore = $("#wand-core")
    var wandWood = $("#wand-wood")
    var wandImage = $(".wand")
    var characterImg = $("#characterImg")
    var spell = $("#spell-name");
    var spellDescription = $("#spell-description");

    nextCharacter.on("click", function() {
   getCharacterDetails().then(getRandomCharacter);
});
    nextSpell.on("click", function() {
       getSpells().then(getRandomSpell)
    });
    prevSpell.on("click", function() {
       getSpells().then(getRandomSpell)
    });
    prevCharacter.on("click", function() {
   getCharacterDetails().then(getRandomCharacter);
});


//search.on("click", function(event){
//event.preventDefault();
//let userSearch = $("#userInput").val().trim();
//if(userSearch === results.name){
 //   getRandomCharacter(userSearch)
//}
//alert(userSearch);
//})

    function getCharacterDetails(){
        let characterStatsURL = "https://hp-api.onrender.com/api/characters";
        console.log(characterStatsURL);

        return fetch(characterStatsURL)
            .then(function(data){
                return data.json()
            }).then(function(response){
                console.log(response)
                return response;
            });
    }

    function getRandomCharacter(results){
        let randomIndex = Math.floor(Math.random() * results.length);

        var newCharacterName = results[randomIndex].name ? results[randomIndex].name : "unknown";

        var newCharacterDOB = results[randomIndex].dateOfBirth ? results[randomIndex].dateOfBirth : "unknown";

        var newCharacterSpecies = results[randomIndex].species ? results[randomIndex].species : "unknown";

        var newCharacterHouse = results[randomIndex].house ? results[randomIndex].house : "unknown";

        var newCharacterPatronus = results[randomIndex].patronus ? results[randomIndex].patronus : "unknown";

        var newCharacterWandLength = results[randomIndex].wand.length ? results[randomIndex].wand.length : "unknown";

        var newCharacterWandWood = results[randomIndex].wand.wood ? results[randomIndex].wand.wood : "unknown";

        var newCharacterWandCore = results[randomIndex].wand.core ? results[randomIndex].wand.core : "unknown";

        var newCharacterImage = results[randomIndex].image

        characterName.html(newCharacterName)
        DOB.html(newCharacterDOB)
        speciesType.html(newCharacterSpecies)
        hogwartsHouse.html(newCharacterHouse)
        patronus.html(newCharacterPatronus)
        wandLength.html(newCharacterWandLength)
        wandCore.html(newCharacterWandCore)
        wandWood.html(newCharacterWandWood)

        if (newCharacterImage === "") {
            getRandomCharacter(results);
        } else {
            characterImg.attr("src",newCharacterImage)
        }

        if(characterName !== ""){
      switch (characterName.text()) {
  case "Harry Potter":
    wandImage.attr("src", harrysWand);
    break;
  case "Lord Voldemort":
    wandImage.attr("src", voldemortsWand);
    break;
  case "trelawney":
    wandImage.attr("src", trelawney_Wand);
    break;
  case "tonks":
    wandImage.attr("src", tonksWand);
    break;
  case "Severus Snape":
    wandImage.attr("src", snapesWand);
    break;
  case "Horace Slughorn":
    wandImage.attr("src", slughornsWand);
    break;
  case "Sirius Black":
    wandImage.attr("src", siriusWand);
    break;
  case "Ron Weasley":
    wandImage.attr("src", ronsWand);
    break;
  case "Neville Longbottom":
    wandImage.attr("src", nevillesWand);
    break;
    case "Vincent Crabbe":
    wandImage.attr("src", vincentsWand);
    break;
    case "Gregory Goyle":
    wandImage.attr("src", goylesWand);
    break;
  case "Narcissa Malfoy":
    wandImage.attr("src", narcissasWand);
    break;
  case "Minerva McGonagall":
    wandImage.attr("src", mcgonagallsWand);
    break;
  case "mad-eye Moody":
    wandImage.attr("src", mad_eye_wand);
    break;
  case "Remus Lupin":
    wandImage.attr("src", lupinsWand);
    break;
  case "Luna Lovegood":
    wandImage.attr("src", lunasWand);
    break;
  case "Lucius Malfoy":
    wandImage.attr("src", luciussWand);
    break;
  case "Victor Krum":
    wandImage.attr("src", krumsWand);
    break;
  case "James Potter":
    wandImage.attr("src", jamesWand);
    break;
  case "Hermione Granger":
    wandImage.attr("src", harmionesWand);
    break;
  case "Ginny Weasley":
    wandImage.attr("src", ginnysWand);
    break;
  case "George Weasley":
    wandImage.attr("src", georgesWand);
    break;
  case "Fred Weasley":
    wandImage.attr("src", fredsWand);
    break;
  case "Fleur":
    wandImage.attr("src", fleursWand);
    break;
  case "Albus Dumbledore":
    wandImage.attr("src", dumbledoresWand);
    break;
  case "Draco Malfoy":
    wandImage.attr("src", dracosWand);
    break;
  case "Dean":
    wandImage.attr("src", deansWand);
    break;
  case "Cho Chang":
    wandImage.attr("src", chosWand);
    break;
  case "Cedric Diggory":
    wandImage.attr("src", cedricsWand);
    break;
  case "Bellatrix Lestrange":
    wandImage.attr("src", bellatrixsWand);
    break;
  default:
    wandImage.attr("src", unknownWand);;
    break;
}
}

    }

   function getSpells(){
        let spellsURL = "https://hp-api.onrender.com/api/spells";
        console.log(spellsURL);

        return fetch(spellsURL)
            .then(function(data){
                return data.json()
            }).then(function(response){
                console.log(response)
                return response;
            });
    }

    

    function getRandomSpell(response){ 
        let randomSpellIndex = Math.floor(Math.random() * response.length);

        var newSpell = response[randomSpellIndex].name

        var newSpellDescription = response[randomSpellIndex].description

        spell.html(newSpell)
        spellDescription.html(newSpellDescription)
    }

    getSpells().then(getRandomSpell)
    getCharacterDetails().then(getRandomCharacter);
});
