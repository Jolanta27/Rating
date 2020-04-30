var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue");
var ProgressBar = document.getElementById("ProgressBar");

SelectValue.innerHTML = slider.value;

slider.oninput = function () {
    SelectValue.innerHTML = this.value;
    selector.style.left = this.value + "%";
    ProgressBar.style.width = this.value + "%";
}