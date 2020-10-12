function myFunction1() {
    let Year = document.getElementById("year").value;
    let Month = document.getElementById("month").value;
    let Day = document.getElementById("day").value;
    let d= Day + "/" + Month + "/" + Year;
    document.getElementById("display").innerText = d
}