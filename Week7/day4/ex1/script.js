document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Received data:", data);    
        displayResults(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function displayResults(data) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
    
    if (data.data && data.data.length > 0) {
        data.data.forEach(gif => {
        const imageUrl = gif.images.fixed_height.url;
        const image = document.createElement("img");
        image.src = imageUrl;
        outputDiv.appendChild(image);
        });
    } else {
        outputDiv.textContent = "No GIFs :(";
    }
}
