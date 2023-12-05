// selecting elements
const notyBtn = document.getElementsByClassName("get-Nofti-Btn")[0] as any;
const headWrap = document.getElementsByClassName("head-Wrap")[0] as any;

// our objectData
//arry of objects
// let objectData: any = [
//   {
//     text: "Error!",
//     color: "black",
//     backGroundColor: "red",
//   },
//   {
//     text: "Logged In",
//     color: "white",
//     backGroundColor: "green",
//   },
//   {
//     text: "Loading",
//     color: "black",
//     backGroundColor: "yellow",
//   },
//   {
//     text: "Something Went Wrong!",
//     color: "white",
//     backGroundColor: "black",
//   },
// ];

// object of arrays
let objectData: any = {
  text: ["Error!", "Logged In", "Loading", "Something Went Wrong!"],
  color: ["black", "white", "black", "white"],
  backGroundColor: ["red", "green", "yellow", "black"],
};

// our function
let showNoty = (data) => {
  // creating element
  const pEl = document.createElement("p");
  const notificationWrap = document.createElement("div");
  // sending our data from our object

  // our notify element
  notificationWrap.classList.add("notigication-Wrap");
  notificationWrap.classList.add("active");
  notificationWrap.style.backgroundColor = `${objectData.backGroundColor[data]}`;
  notificationWrap.appendChild(pEl);
  notyBtn.disabled = true;
  // our p element
  pEl.textContent = `${objectData.text[data]}`;
  pEl.style.color = `${objectData.color[data]}`;

  headWrap.appendChild(notificationWrap);

  // our timers
  // this timer will remove classlist and false the disabled btn
  setTimeout(() => {
    notificationWrap.classList.remove("active");
    notyBtn.disabled = false;

    // this timer will remove any element that is created dinamcly
    setTimeout(() => {
      notificationWrap.remove();
      pEl.remove();
    }, 1060);
  }, 1000);
};

// our event lisnters
notyBtn.addEventListener("click", () => {
  // created our random num function
  let randNum = Math.floor(Math.random() * 4);

  // sending our random number to the function
  console.log(randNum);
  showNoty(randNum);
});
