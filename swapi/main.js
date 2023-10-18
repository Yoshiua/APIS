document.querySelector("button").addEventListener("click", () => {
    console.log("button clicked");
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
.then(response => {
    let residents = response.data.results[0].residents
    console.log(residents)
    for(let i = 0; i < residents.length; i++) {
        axios.get(residents[i])
        .then((response) => {
            document.body.appendChild(document.createElement("h2")).textContent = response.data.name
        })
    }
    })
})