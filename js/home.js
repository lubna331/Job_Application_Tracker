// console.log("hello there")

// get all the header boxes

const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")
// console.log(totalCount);

// get the card and children to count

const getCards = document.getElementById("cards");

// create function to count the card children

function countChildren(){
    //set total count's inner text
    totalCount.innerText = getCards.children.length;
}
countChildren()


// toggle buttons
// const toggleAll = document.getElementById("toggle-all")
// const toggleInterview = document.getElementById("toggle-interview")
// const toggleRejected = document.getElementById("toggle-rejected");