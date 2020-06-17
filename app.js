//Variables for each chaos difficulty. Includes array of available chaos tokens that will be the 'chaos bag'
let easyTokenBag = ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let standardTokenBag = ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let hardTokenBag = ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]
let expertTokenBag = ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "mask", "broken tablet", "tentacles", "star"]

//Select main container to add new elements to
const divContainer = document.querySelector('.container');
const tokenBagDiv = document.createElement('div');
const displayTokenDiv = document.createElement('div');

//Display the relevant array of tokens to the user on screen once they select a difficulty
const difficultySelector = document.getElementById("difficulty-select");
difficultySelector.addEventListener('input', function displayTokens(event){
    divContainer.appendChild(tokenBagDiv);
    //Use the Switch statement to evaluate the difficulty value selected
    switch (event.target.value) {
            case "Easy":
                tokenBagDiv.textContent = easyTokenBag;
                break;
            case "Standard":
                tokenBagDiv.textContent = standardTokenBag;
                break;
            case "Hard":
                tokenBagDiv.textContent = hardTokenBag;
                break;
            case "Expert":
                tokenBagDiv.textContent = expertTokenBag;
        }
    });

//Function to randomly select a token from the bag
function randomToken(tokenBag) {
    return tokenBag[Math.floor(Math.random() * tokenBag.length)];
}

//Depending on difficulty selected, randomly select a token when 'draw chaos token' button is clicked
const drawTokenButton = document.getElementById("draw-token-button");
drawTokenButton.addEventListener('click', function displayAToken(){
    difficultySelector.after(displayTokenDiv);
    switch (difficultySelector.value) {
        case "Easy":
            displayTokenDiv.textContent = randomToken(easyTokenBag);
            break;
        case "Standard":
            displayTokenDiv.textContent = randomToken(standardTokenBag);
            break;
        case "Hard":
            displayTokenDiv.textContent = randomToken(hardTokenBag);
            break;
        case "Expert":
            displayTokenDiv.textContent = randomToken(expertTokenBag);
    }
});

//TODO: display to the user, the randomly selected token (instead of cconsole logging it)
//TODO: display the last drawn token to the user if they keep drawing tokens