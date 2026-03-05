//  banner section
const btn = document.getElementById("btn").addEventListener("click", function(){ 
    // get user name input
    const userName = document.getElementById("name")
    const name = userName.value;
    console.log(name)
    
    // get password input
    const userPass = document.getElementById("password")
    const pass = userPass.value ;
    console.log(pass)


    // match userName and password
    if(name === 'ayesha' && pass === '1234'){
        alert('User name and Password is right')
    }
    else{
        alert('User name and Password is wrong')
    }
})