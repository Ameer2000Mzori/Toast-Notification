// selecting elements
var notificationWrap = document.getElementsByClassName("notigication-Wrap")[0];
var notyBtn = document.getElementsByClassName("get-Nofti-Btn")[0];
// our objectData
var objectData = [
    {
        text: "Error!",
        color: "black",
        backGroundColor: "red",
    },
    {
        text: "Logged In",
        color: "white",
        backGroundColor: "green",
    },
    {
        text: "Loading",
        color: "black",
        backGroundColor: "yellow",
    },
    {
        text: "Something Went Wrong!",
        color: "white",
        backGroundColor: "black",
    },
];
// our function
var showNoty = function () {
    // creating element
    var pEl = document.createElement("p");
    // sending our data from our object
    // our p element
    pEl.textContent = "hallo world";
    pEl.style.color = "black";
    // our notify element
    notificationWrap.classList.add("active");
    notificationWrap.style.backgroundColor = "green";
    notificationWrap.appendChild(pEl);
    notyBtn.disabled = true;
    // our timers
    setTimeout(function () {
        notificationWrap.classList.remove("active");
        notyBtn.disabled = false;
        setTimeout(function () {
            pEl.remove();
        }, 1200);
    }, 1000);
};
// our event lisnters
notyBtn.addEventListener("click", showNoty);
