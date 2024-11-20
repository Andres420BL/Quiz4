let input = document.querySelector("input");
let addBtn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = input.value;

  if (texto !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(addEditBtn(p)); // Añadir botón de editar
    li.appendChild(addDeleteBtn()); // Añadir botón de eliminar
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  
  deleteBtn.textContent = "";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

function addEditBtn(p) {
  const editBtn = document.createElement("button");
  editBtn.className = "btn-edit";

  const icon = document.createElement('img');
  icon.src = "../assets/editar.png";  
  icon.alt = "Edit Icon";  

  editBtn.appendChild(icon);

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edita tu tarea:", p.textContent);
    if (newText !== null && newText.trim() !== "") {
      p.textContent = newText;
    }
  });

  return editBtn;
}
