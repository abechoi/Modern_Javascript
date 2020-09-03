const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = recipe => {
  let time = recipe.created.toDate();
  let html = `
    <li>
      <div>${recipe.title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

// get documents
db.collection("recipes").get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    addRecipe(doc.data());
  })
}).catch(err => console.log(err));

// add documents
form.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('recipes').add(recipe)
    .then(docRef => console.log("Document written with ID: ", docRef))
    .catch(err => console.log(err));
});

