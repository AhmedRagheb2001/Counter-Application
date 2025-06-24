let counter =0;
const counterLabel = document.getElementById("counterLabel");
const increaseButton = document.getElementById("IncreaseButton");
const decreaseButton = document.getElementById("DecreaseButton");
const resetButton = document.getElementById("ResetButton");

increaseButton.onclick = function ()
{
    counter++;
    counterLabel.textContent=counter;
}

//The decrease Button functionality
decreaseButton.onclick= function ()
{
    counter--;
    counterLabel.textContent=counter;
}

//The Reset Button
resetButton.onclick = function ()
{
    counter=0;
    counterLabel.textContent= counter;
}
