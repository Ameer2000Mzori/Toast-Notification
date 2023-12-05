// selecting elements
const notificationWrap = document.getElementsByClassName(
  "notigication-Wrap"
)[0] as any;

const notyBtn = document.getElementsByClassName("get-Nofti-Btn")[0] as any;

// our objectData

// our function
const showNoty = () => {
  // creating element
  const pEl = document.createElement("p");

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
  setTimeout(() => {
    notificationWrap.classList.remove("active");
    notyBtn.disabled = false;

    setTimeout(() => {
      pEl.remove();
    }, 1200);
  }, 1000);
};

// our event lisnters
notyBtn.addEventListener("click", showNoty);
