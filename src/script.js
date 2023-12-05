// selecting elements
var notigicationWrap = document.getElementsByClassName("notigication-Wrap")[0];
var notyBtn = document.getElementsByClassName("get-Nofti-Btn")[0];
// our objectData
// our function
var showNoty = function () {
    var pEl = document.createElement("p");
    pEl.textContent = "hallo world";
    pEl.style.color = "black";
    notigicationWrap.classList.add("active");
    notigicationWrap.style.backgroundColor = "green";
    notigicationWrap.appendChild(pEl);
    setTimeout(function () {
        notigicationWrap.classList.remove("active");
    }, 1500);
};
// our event lisnters
notyBtn.addEventListener("click", showNoty);
