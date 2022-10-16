const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");

const heartBtn = document.querySelector("#heart");
const countNum = document.querySelector("#counter");
const likes = document.querySelector(".likes");

const form= document.querySelector("form");
const list = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

const pauseBtn = document.querySelector("#pause");
const allBtns = [minusBtn, plusBtn, heartBtn, submitBtn];



minusBtn.addEventListener("click", function(){
    countNum.textContent = parseInt(countNum.textContent) - 1;
    //  -- countNum.textCountent
})

const addOne = () => {++ countNum.textContent}
plusBtn.addEventListener("click", addOne)

heartBtn.addEventListener("click", function() {
    // 4.find the number on the counter
    const currentNum = countNum.innerText;
    // 6.find the number of likes which have been clicked
    const foundNumOfLikes = document.getElementById(`like-${currentNum}`);
    // 6a.when we didn't click on the heart button
    if (!foundNumOfLikes) {
    //1. create a list element
    const li = document.createElement("li");
    // 5.give the list current counter number
    li.id = `like-${currentNum}`
    //2. make a string
    let str = `${currentNum} has been liked <span> 1 </span> time`;
    li.innerHTML= str;
    // 3.append the list on DOM
    likes.append(li)
    //6b.if we click the heart button
    }else {
        // let the liked number + 1
        const newLikes = ++foundNumOfLikes.querySelector('span').textContent;
        // update the string with the new likes num
        let str = `${currentNum} has been liked <span> ${newLikes} </span> times`;
        return foundNumOfLikes.innerHTML = str;
    }

})

form.addEventListener("submit", e => {
    e.preventDefault();
    const p = document.createElement ("p")
    p.textContent= e.target.comment.value
    list.append(p)
})

let pauseStatus = false;
pauseBtn.addEventListener("click", (e) => {

    pauseStatus = ! pauseStatus
    if (pauseStatus){
        clearInterval(intervalID)
        pauseBtn.textContent = "resume";
        allBtns.forEach(button => button.disabled = true)
    }else {
        intervalID = setInterval (addOne, 1000);
        pauseBtn.textContent = "pause";
        allBtns.forEach(button => button.disabled = false)
    }

})

let intervalID = setInterval (addOne, 1000);
