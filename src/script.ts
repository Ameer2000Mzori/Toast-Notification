// selecting elements
const notigicationWrap = document.getElementsByClassName(
  "notigication-Wrap"
)[0] as any;

const notyBtn = document.getElementsByClassName("get-Nofti-Btn")[0];

// our objectData

// our function
const showNoty = () => {
  const pEl = document.createElement("p");

  pEl.textContent = "hallo world";
  pEl.style.color = "black";

  notigicationWrap.classList.add("active");
  notigicationWrap.style.backgroundColor = "green";
  notigicationWrap.appendChild(pEl);

  setTimeout(() => {
    notigicationWrap.classList.remove("active");
  }, 1500);
};

// our event lisnters
notyBtn.addEventListener("click", showNoty);
