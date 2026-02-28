//-------->>> {2nd part} <<<--------
// declare empty array for interview and rejected,
let interviewList = [];
let rejectedList = [];

//-------->>> {1st part} <<<--------
// get all the header boxes (counting part )

const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")
// console.log(totalCount);

// get the card and children to count (counting part)
const getCards = document.getElementById("cards");

// create function to count the card children (counting part)
function countChildren(){
    //set total count's inner text
    totalCount.innerText = getCards.children.length;
    //set interview and rejected count from the interviewList and rejected array's length
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countChildren()


// get all the toggle buttons to use in toggleStyle function (toggle part)
const toggleAll = document.getElementById("toggle-all")
const toggleInterview = document.getElementById("toggle-interview")
const toggleRejected = document.getElementById("toggle-rejected");
//Initially "All" toggle button will be active
toggleAll.classList.add('bg-[#3B82F6]', 'text-white')

// function for toggle on 3 buttons through ID (toggle part)
function toggleStyle(id){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#3B82F6]', 'text-white')
    toggleInterview.classList.remove('bg-[#3B82F6]', 'text-white')
    toggleRejected.classList.remove('bg-[#3B82F6]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3B82F6]', 'text-white')
}