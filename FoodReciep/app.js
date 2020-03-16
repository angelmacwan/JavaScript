let APP_ID = "0f355682";
let APP_KEY = "9cf09e2604c9855d23880ffabc292ceb";

function Search() {
  let loadAnim = document.querySelector(".loading");
  document.querySelector(".onLOADtxt").style.display = "none";
  let cont = document.querySelector("#cont");
  cont.innerHTML = "";

  let item = document.querySelector("#searchItem");
  loadAnim.style.display = "block";
  try {
    async function getUserAsync() {
      let response = await fetch(
        `https://api.edamam.com/search?q=${item.value}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
      );
      let data = await response.json();

      return data;
    }
    getUserAsync().then(data => {
      let hits = data.hits;
      console.log(hits);

      for (let i = 0; i < hits.length; i++) {
        let ing = data.hits[i].recipe.ingredients;
        let ingData = "";
        for (let j = 0; j < ing.length; j++) {
          ingData += `${ing[j].text}  ${ing[j].weight}gm <br>`;
        }

        let healthLabels = hits[i].recipe.healthLabels;
        let healthLabelsData = "";
        for (let j = 0; j < healthLabels.length; j++) {
          healthLabelsData += `  ${healthLabels[j]}`;
        }
        let node = `<div class="card" data-toggle="tooltip"
        data-placement="top" title="${healthLabelsData}">
        <img class="card-img-top" src="${hits[i].recipe.image}">
        <div class="card-body">
        <h4 class="card-title">${hits[i].recipe.label}</h4>
        <h5 class="card-title text-info">${hits[i].recipe.calories} Calories</h5>
        <h5 class="card-title text-info">Ingredients</h5>
        <p>${ingData}</p>
        </div>
        </div>`;
        cont.innerHTML += node;
      }
      loadAnim.style.display = "none";
    });
  } catch (e) {
    console.log(e);
  } finally {
  }
}

function closePanel() {
  document.querySelector("#cau").style.opacity = "0";
}
