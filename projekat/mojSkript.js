
document.getElementById("ime").addEventListener("input", proveriIme);

function proveriIme() {
    var imeInput = document.getElementById("ime");
    var ime = imeInput.value;
    var errorElement = document.getElementById("ime-error");

    if (ime.length <= 3) {
        errorElement.textContent = "Greska, ime mora imati vise od 3 slova.";
    } else {
        errorElement.textContent = "";
    }
}


