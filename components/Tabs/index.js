// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function tabData(data){
    let container = document.createElement('div');

    container.textContent = data;
    container.classList.add('tab');

    return container; 
}

const topics = document.querySelector('.topics');

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        response.data.topics.forEach(article => {
            topics.appendChild(tabData(article));
        })
    })
    .catch(err => {
        console.log("Oops! Something went wrong", err);
    })
    