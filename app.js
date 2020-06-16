//Variables for each chaos difficulty. Includes array of available chaos tokens that will be the 'chaos bag'
let easyTokenBag = ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let standardTokenBag = ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let hardTokenBag = ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let expertTokenBag = ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]

//TODO: display the array of tokens to the user on screen once they select a difficulty
const difficultySelector = document.getElementById("difficulty-select");
difficultySelector.addEventListener('input', function displayTokens(event){
    console.log(event.target.value);
    if (event.target.value === "Easy") {
        console.log(easyTokenBag);
    }
});

//TODO: add listener event for 'draw chaos token' button and randomly select an item from the set difficulty chaos bag
//TODO: display the last drawn token to the user if they keep drawing tokens