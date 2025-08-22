

let screenContent = document.getElementById("screenContent");
let expression = "";

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;
        if (screenContent.innerText === "0" && !isNaN(value)) {
            screenContent.innerText = value;
        } else {
            screenContent.innerText += value;
        }
        expression += value;
    });
});

// Clear button
document.getElementById("btnc").addEventListener("click", () => {
    expression = "";
    screenContent.innerText = "0";
});

// Equal button
document.getElementById("btn=").addEventListener("click", () => {
    try {
        let result = eval(expression); // evaluate the string expression
        screenContent.innerText = result;
        expression = result.toString();
    } catch (e) {
        screenContent.innerText = "Error";
        expression = "";
    }
});