window.addEventListener("load", () => {
  const form = document.querySelector(".row");
  const input = document.querySelector("#input");
  const list = document.querySelector("#ulList");
  const button = document.querySelector("#addBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Check the input value
  //   input.addEventListener("input", () => {
  //     if (input.value === "") {
  //       button.disabled = true;
  //     } else {
  //       button.disabled = false;
  //     }
  //   });

  // When addBtn clicked, it will create li element
  document.getElementById("addBtn").addEventListener("click", () => {
    if (input.value === "") {
      button.disabled = true;
    } else {
      let newElm = document.createElement("li");
      newElm.innerHTML = input.value;
      ``;
      newElm.className = "liList";
      list.appendChild(newElm);
    }

    input.value = ""; // Clear the input after adding an item
  });
});
