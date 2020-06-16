//Variables for each chaos difficulty. Includes array of available chaos tokens that will be the 'chaos bag'
let easyTokenBag = ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let standardTokenBag = ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let hardTokenBag = ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let expertTokenBag = ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]

//Select main container to add new elements to
const divContainer = document.querySelector('.container');
const newDiv = document.createElement('div');

//Function that creates a new div that contains the array of tokens in selected chaos bag
function createDiv(){
    divContainer.appendChild(newDiv);
}

//Display the relevant array of tokens to the user on screen once they select a difficulty
const difficultySelector = document.getElementById("difficulty-select");
difficultySelector.addEventListener('input', function displayTokens(event){
    createDiv();
    //Use the Switch statement to evaluate the difficulty value selected
    switch (event.target.value) {
            case "Easy":
                newDiv.textContent = easyTokenBag;
                break;
            case "Standard":
                newDiv.textContent = standardTokenBag;
                break;
            case "Hard":
                newDiv.textContent = hardTokenBag;
                break;
            case "Expert":
                newDiv.textContent = expertTokenBag;
        }
    });

//TODO: add listener event for 'draw chaos token' button and randomly select an item from the set difficulty chaos bag
//TODO: display the last drawn token to the user if they keep drawing tokens