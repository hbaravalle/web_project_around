const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.cloneNode("#card-template");
const cardElement = cardTemplate.querySelector(".card");

const newPlacePopup = document.querySelector("#new-place-popup");
const newPlaceButton = document.querySelector(".profile__add-button");
const newPlaceForm = document.querySelector("#new-place-form");

const editProfilePopup = document.querySelector("#edit-profile-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileForm = document.querySelector("#edit-profile-form");

const imagePopup = document.querySelector("#image-popup");

const closePopupButtons = document.querySelectorAll(".popup__close-button");

function addNewPlace(nameValue, linkValue) {
  console.log(nameValue, linkValue);
  initialCards.push({
    name: nameValue,
    link: linkValue,
  });
  newPlacePopup.classList.toggle("show");

  const cardTemplate = document.querySelector("#card-template").content;
  console.log(cardTemplate);
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = nameValue;
  cardElement.querySelector(".card__image").setAttribute("src", linkValue);
  cardElement.querySelector(".card__image").setAttribute("alt", nameValue);
  cardElement.addEventListener("click", showImagePopup);
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      event.target.classList.toggle("card__like-button-icon--active");
    });
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      deletePlace(event);
    });
  cardsContainer.prepend(cardElement);
}

function deletePlace(event) {
  event.target.closest(".card").remove();
}

function editProfile(nameValue, AboutMeValue) {
  profileName.textContent = nameValue;
  profileRole.textContent = AboutMeValue;
}

function showImagePopup(event) {
  imagePopup.classList.toggle("show");
  document
    .querySelector(".popup__image")
    .setAttribute("src", event.target.getAttribute("src"));
  document.querySelector(".popup__image-caption").textContent =
    event.target.getAttribute("alt");
}

function showNewPlacePopup(event) {
  newPlacePopup.classList.toggle("show");
}

function showEditProfile(event) {
  editProfilePopup.classList.toggle("show");
}

function closePopup(event) {
  const popupElement = event.target.closest(".popup");
  popupElement.classList.toggle("show");
}

function renderInitialPlaces(places) {
  places.forEach(function (place) {
    addNewPlace(place.name, place.link);
  });
}
renderInitialPlaces(initialCards);

Array.from(closePopupButtons).forEach((element) => {
  element.addEventListener("click", closePopup);
});

newPlaceButton.addEventListener("click", showNewPlacePopup);
newPlaceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewPlace(
    newPlaceForm.elements.title.value,
    newPlaceForm.elements["image-url"].value
  );
});

editProfileButton.addEventListener("click", showEditProfile);
editProfileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  editProfile(
    editProfileForm.elements.name.value,
    editProfileForm.elements.role.value
  );
  closePopup(event);
});
