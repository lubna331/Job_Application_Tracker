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
const availableJobs = document.getElementById("available");
// create function to count the card children (counting part)
function countChildren(){
    //set total count's inner text
    totalCount.innerText = getCards.childElementCount;
    availableJobs.innerText =getCards.childElementCount;
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
    
    //-------->>> {3rd part} <<<-------- 
    // render cards for tabs
    // get tabs by id
    const allTab = document.getElementById('cards');
    const interviewTab = document.getElementById('interview-tab');
    const rejectedTab = document.getElementById('rejected-tab');
    const displayJob = document.getElementById('displayJob');

    // initially hide display for all tab
    allTab.style.display = "none";
    interviewTab.style.display = "none";
    rejectedTab.style.display = "none";

    // display "All"
    if(id === "toggle-all"){
        allTab.style.display = "block";
    }

    // display interview
    if(id === "toggle-interview"){
        displayJob.classList.add('hidden');
        interviewTab.style.display = "block";
        interviewTab.innerHTML = "";
        
        if(interviewList.length === 0){
            interviewTab.innerHTML = `
                <div class="bg-base-100 w-[95%] h-[370px] lg:w-[1110px] lg:h-[280px] p-[24px] m-auto shadow-sm flex items-center justify-center rounded-md mb-4">
                    <h3 class="text-lg font-semibold text-gray-500">No jobs available</h3>
                </div>
            `;
        }
        for(let cardId of interviewList){
            let original = document.querySelector(`.card[data-id="${cardId}"]`);
            let copy = original.cloneNode(true);

            interviewTab.appendChild(copy);
        }
    }

    // display rejected
    if(id === "toggle-rejected"){
        displayJob.classList.add('hidden');
        rejectedTab.style.display = "block";
        rejectedTab.innerHTML = "";
        
        if(rejectedList.length === 0){
            rejectedTab.innerHTML = `
                <div class="bg-base-100 w-[95%] h-[370px] lg:w-[1110px] lg:h-[280px] p-[24px] m-auto shadow-sm flex items-center justify-center rounded-md mb-4">
                    <h3 class="text-lg font-semibold text-gray-500">No jobs available</h3>
                </div>
            `;
        }
        for(let cardId of rejectedList){
            let original = document.querySelector(`.card[data-id="${cardId}"]`);
            let copy = original.cloneNode(true);

            rejectedTab.appendChild(copy);
        }
    }
}


// get cards by id
const allCards = document.getElementById('cards');
function cardAction(conatiner){
    conatiner.addEventListener('click', function(event){
        // get clicked element by "event.target"
        let cardEvent = event.target;
        // stop event bubble
        if(!cardEvent.closest('button')) return;
        const button = cardEvent.closest('button');
        
        // get innetText of clicked button
        const btnName = button.innerText;
        //get parentNode to get the child which will be replaced
        const getParent = button.parentNode.parentNode;
        
        //also get the whole card to push into an array
        const cardId = Number(getParent.dataset.id);
        
        if(button.classList.contains('delete-btn')){
            getParent.parentNode.remove();
            deleteCard(cardId);
            countChildren();
            return;
        }
        //get the replace child
        let applied = getParent.querySelector('.replace');
        // console.log(btnName, applied);

        // finally replace the text and colors
        applied.innerText = btnName;
        applied.classList.remove('bg-green-100','text-[#10B981]');
        applied.classList.remove('bg-red-100','text-[#EF4444]');

        if(btnName === "INTERVIEW"){
            applied.classList.add('bg-green-100','text-[#10B981]')
            if(!interviewList.includes(cardId)){
                interviewList.push(cardId);
            }
            // remove if, it is present in rejected list (change accordingly)
            if(rejectedList.includes(cardId)){
                let index = rejectedList.indexOf(cardId)
                rejectedList.splice(index,1);
            }
        }
        else if(btnName === "REJECTED"){
            applied.classList.add('bg-red-100','text-[#EF4444]')
            if(!rejectedList.includes(cardId)){
                rejectedList.push(cardId);
            }
            // remove if, it is present in INTERVIEW list (change accordingly)
            if(interviewList.includes(cardId)){
                let index = interviewList.indexOf(cardId)
                interviewList.splice(index,1);
            }
        }

        countChildren();
    });
}

function deleteCard(cardId){
    
    rejectedList = rejectedList.filter(function(id){
        return id !== cardId;
    })

    interviewList = interviewList.filter(function(id){
        return id !== cardId;
    })
    countChildren();
}

cardAction(document.getElementById('cards'));
cardAction(document.getElementById('interview-tab'));
cardAction(document.getElementById('rejected-tab'));

