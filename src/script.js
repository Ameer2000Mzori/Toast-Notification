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
var showNoty = function (data) {
    // creating element
    var pEl = document.createElement("p");
    // sending our data from our object
    // our notify element
    notificationWrap.classList.add("active");
    notificationWrap.style.backgroundColor = "".concat(data.backGroundColor);
    notificationWrap.appendChild(pEl);
    notyBtn.disabled = true;
    // our p element
    pEl.textContent = "".concat(data.text);
    pEl.style.color = "".concat(data.color);
    // our timers
    setTimeout(function () {
        notificationWrap.classList.remove("active");
        notyBtn.disabled = false;
        setTimeout(function () {
            pEl.textContent = "";
            pEl.remove();
        }, 1160);
    }, 1100);
};
// our event lisnters
notyBtn.addEventListener("click", function () {
    // created our random num function
    var randNum = Math.floor(Math.random() * 4);
    // sending our random number to the function
    console.log(randNum);
    showNoty(objectData[randNum]);
});
