//  banner section 
const btn = document.getElementById("btn").addEventListener("click", function(){ 
    // get user name input
    const userName = document.getElementById("name")
    const name = userName.value;
    
    // get password input
    const userPass = document.getElementById("password")
    const pass = userPass.value ;
    


    // match userName and password
    if(name === 'ayesha' && pass === '1234'){
        alert('User name and Password is right')
    }
    else{
        alert('User name and Password is wrong')
    }

    // clear input field
    userName.value = '';
    userPass.value = '';
})


// get all levels
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data))
}


// get word by levels
const loadLevelWord = (id) =>{ 
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then((data) => displayLevelWord(data.data))
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = ""

    if(words.length == 0){
        wordContainer.innerHTML = ` 
          <div class="text-center col-span-full rounded py-10 space-y-6 font-bangla">
                <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <p class="text-xl font-medium text-gray-300">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
            </div>
        
        `
        return;
    }

    words.forEach((word) =>{ 
        const card =  document.createElement("div")
        card.innerHTML = ` 
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি "}</h2>
                <p class="font-semibold">Meaning / Pronounciation</p>

                <div class="font-semibold text-2xl font-bangla">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি " } / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায়নি "}</div>

                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `

        wordContainer.append(card)
    })
}



// display lessons
const displayLesson = (lessons) =>{
    // get the container & empty
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";

    // get into every lessons
    lessons.forEach((lesson) => {
        // create element
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = ` 
            <button onclick ="loadLevelWord( ${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        
        `


        // append into container
        levelContainer.append(btnDiv)
    })
}

loadLessons()