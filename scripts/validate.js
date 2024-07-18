const editFormElement = document.querySelector("#edit-profile-form");
const newPlaceFormElement = document.querySelector("#new-place-form");

const titleInput = document.querySelector("input[name='title']");
const imageUrlInput = document.querySelector("input[name='image-url']");
const nameInput = document.querySelector("input[name='name']");
const roleInput = document.querySelector("input[name='role']");

const showInputError = (element) => {
  element.classList.add("popup__input-text-error");
};

const hideInputError = (element) => {
  element.classList.remove("popup__input-text-error");
};

const isValid = (input) => {
  if (!input.validity.valid) {
    showInputError(input);
  } else {
    hideInputError(input);
  }
};

nameInput.addEventListener("input", () => {
  isValid(nameInput);
});
roleInput.addEventListener("input", () => {
  isValid(roleInput);
});
