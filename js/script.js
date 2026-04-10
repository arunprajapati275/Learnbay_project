function testLogic() {
    const input = document.getElementById('userInput').value;
    const display = document.getElementById('result');
    
    if(input === "") {
        display.innerHTML = "Kuch type toh kar bhai! 😂";
        display.style.color = "orange";
    } else {
        display.innerHTML = "Working! You typed: " + input;
        display.style.color = "#00FF00";
        console.log("Success: Logic tested with input:", input);
    }
}