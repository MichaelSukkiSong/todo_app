document.querySelector(".add").addEventListener("submit", (e) => {
  //   console.log(e);
  e.preventDefault();
  controlAdd();
});

const controlAdd = () => {
  // 1) Get input
  const input = document.querySelector(".add__field").value;
  // 2) Add to DB
  // 3) Display in UI
  const markup = `
    <li>
        <h5>${input}</h5>
        <button class="delete_btn">X</button>
    </li>
  `;
  document.querySelector(".list").insertAdjacentHTML("beforeend", markup);
};

document.querySelector(".list_box").addEventListener("click", (e) => {
  if (e.target.matches(".delete_btn, .delete_btn *")) {
    // 1) delete from DB
    // 2) delete from UI
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});
