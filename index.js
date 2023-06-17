const searchBtn = document.getElementById("glow-on-hover");
const searchBar = document.getElementById("search");

let searchQuery;

searchBar.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBar.value != "") {
        location.href = 'pages/results/results.html';
        searchQuery = searchBar.value;
        console.log(searchQuery)
    }
}