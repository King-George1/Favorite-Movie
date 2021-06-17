const addMovieModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const modalAddMovie = document.querySelector(".btn.btn--success");
let myMovieList = [];

const toggleBackDrop = (_) => {
  backDrop.style.display = "block";
};

const clearInputValue = (_) => {
  document.querySelector("input#title").value = "";
  document.querySelector("input#image-url").value = "";
  document.querySelector("input#rating").value = "";
};

const cancelClickAction = (_) => {
  addMovieModal.classList.toggle("visible");
  clearInputValue();
  backDrop.style.display = "none";
};

const backdropClickAction = (_) => {
  //Not Implemented
  addMovieModal.classList.toggle("visible");
  backDrop.style.display = "none";
};

const handleAddMovie = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const modalAddMovieAction = (_) => {
  const movieTitle = document.querySelector("input#title").value.trim();
  const imageUrl = document.querySelector("input#image-url").value.trim();
  const rating = document.querySelector("input#rating").valueAsNumber;
  if (movieTitle === "" || imageUrl === "" || rating > 5 || rating < 1) {
    alert("Enter Valid Values");
  } else {
    let newMovie = { title: movieTitle, url: imageUrl, rate: rating };
    myMovieList.push(newMovie);

    cancelClickAction();
    clearInputValue();
  }
};

addMovie.addEventListener("click", handleAddMovie, false);
document
  .querySelector(".btn.btn--passive")
  .addEventListener("click", cancelClickAction, false);
backDrop.addEventListener("click", backdropClickAction, false);
modalAddMovie.addEventListener("click", modalAddMovieAction, false);
