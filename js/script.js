function calculate() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Masukkan panjang sisi dengan angka!");
        return;
    }

    var perimeter = sideA + sideB + sideC;
    var s = perimeter / 2; // semi-perimeter
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById("resultArea").innerText = area.toFixed(2);
    document.getElementById("resultPerimeter").innerText = perimeter.toFixed(2);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);