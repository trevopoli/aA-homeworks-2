document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const placeInput = document.getElementsByClassName("favorite-input")[0];
  
  const addPlace = function(event) {
    event.preventDefault();
    let inputPlace = placeInput.value;
    placeInput.value = "";

    let ulPlaces = document.getElementById("sf-places");
    let li = document.createElement("li");
    li.innerHTML = inputPlace;

    ulPlaces.append(li);
  }

  const favoriteSubmit = document.getElementsByClassName("favorite-submit")[0];
  favoriteSubmit.addEventListener("click", addPlace);

  // adding new photos

  const showPhotoForm = function(event) {
    document.getElementsByClassName("photo-form-container")[0].classList.remove("hidden");
  }

  const photoShowButton = document.getElementsByClassName("photo-show-button")[0];
  photoShowButton.addEventListener("click", showPhotoForm);

  //trying direct
  const addPhoto = function (event) {
    event.preventDefault();

    let img = document.createElement("img")
    let urlInput = document.getElementsByClassName("photo-url-input")[0];
    img.src = urlInput.value;
    urlInput.value= "";
    let li = document.createElement("li");
    li.append(img);

    document.getElementsByClassName("dog-photos")[0].append(li);
  }

  document.getElementsByClassName("photo-url-submit")[0].addEventListener("click", addPhoto);

  


});
