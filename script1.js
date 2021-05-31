function solver() {
    const a = document.getElementById("aValue").value;
    console.log(a * 2);
    const b = document.getElementById("bValue").value;
    const x = document.getElementById("xValue").value;
    let y = a * Math.pow(Math.sin(x + 5), 2) + b / (Math.exp(x / Math.sqrt(a)));
    console.log(y);
    let res = document.getElementById("result");
    res.textContent = "y= " + y;
}