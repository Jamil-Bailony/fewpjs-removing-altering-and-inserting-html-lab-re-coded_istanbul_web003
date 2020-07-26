document.body.removeChild(document.querySelector("main#main"));
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.textContent = "Jamil is the champion";