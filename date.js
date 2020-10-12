function hienthi() {
    let Year = document.getElementById("year").value;
    let Month = document.getElementById("month").value;
    let Day = document.getElementById("day").value;
    document.getElementById("display").innerText = Day + "/" Month + "/" Year;
}