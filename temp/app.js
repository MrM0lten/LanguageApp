console.log('wow---------------------')

function getData(endpoint){
    fetch("https://www.google.com")
    .then(response => {
      if (response.ok) {
        return response.text(); // Return the response as plain text (HTML)
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .then(html => {
      console.log(html); // Logs the HTML of the Google homepage
    })
    .catch(error => {
      console.error('Error fetching Google page:', error);
    });
}
function getAnkiData(action='deckNames',params = {}) {
    fetch('http://127.0.0.1:8765', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: action, // AnkiConnect action to get the deck names
            version: 6,          // API version (6 is the latest for AnkiConnect)
            params: params           // No params required for this action
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);  // Log the deck names
        return data.result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// getData("https://www.google.com");
// getData("http://localhost:8765");
getAnkiData("deckNamesAndIds")
getAnkiData("getDeckStats",{decks: [ "FirstOne"]})
getAnkiData("findCards",{query: "deck:FirstOne"})
getAnkiData("cardsInfo",{"cards": [
    1725181696788,
  ]})
console.log("here")