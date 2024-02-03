document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const loadingMessage = document.getElementById("loadingMessage");
    // loadingMessage.style.display = "none";
    const errorMessage = document.getElementById("errorMessage");
    const characterDetails = document.getElementById("characterDetails");
  
    fetchButton.addEventListener("click", fetchCharacter);
  
    async function fetchCharacter() {
      loadingMessage.style.display = "block";
      errorMessage.style.display = "none";
      characterDetails.style.display = "none";
  
      try {
        const response = await fetch("https://www.swapi.tech/api/people/" + getRandomCharacterId());
        
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        const data = await response.json();
        console.log(data)
        displayCharacter(data.result.properties);
      } catch (error) {
        console.error("Error:", error);
        errorMessage.style.display = "block";
      } finally {
        loadingMessage.style.display = "none";
      }
    }
  
    function getRandomCharacterId() {
      return Math.floor(Math.random() * 83) + 1;
    }
  
    function displayCharacter(character) {
        const { name, height, gender, birth_year, homeworld} = character;
        homeworld_url = homeworld;
      
        // Fetch homeworld data from URL
        fetch(homeworld_url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch homeworld data. Status: ${response.status}`);
            }
            // console.log(response.json(), 'planet');
            return response.json();
          })
          .then(homeworldData => {
            const homeworldName = homeworldData.result.properties.name;
      
            characterDetails.innerHTML = `
              <h2>${name}</h2>
              <p><strong>Height:</strong> ${height}</p>
              <p><strong>Gender:</strong> ${gender}</p>
              <p><strong>Birth Year:</strong> ${birth_year}</p>
              <p><strong>Homeworld:</strong> ${homeworldName}</p>
            `;
            characterDetails.style.display = "block";
          })
          .catch(error => {
            console.error("Error:", error);
            characterDetails.innerHTML = `<p>Error fetching homeworld data.</p>`;
            characterDetails.style.display = "block";
          });
      }
      
  });
  