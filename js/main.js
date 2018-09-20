// Init github
const github = new Github;
// init UI
const ui = new UI;

// GET user input DOM
const userInput = document.getElementById('searchUser');
// target input area
userInput.addEventListener('keyup', (e) => {
    //get user input value
    const userText = e.target.value;
    //check whether its a not empty
    if(userText){
        //call data
        github.getUser(userText).then((data)=>{
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User Not Found', 'alert alert-danger mt-3');
            }
            else{
                // Show data
                ui.showProfile(data.profile);
                //show repo
                ui.showRepos(data.repos);
            }
        })
    }
    else{
        // clear profile
        ui.clearProfile()
    }
});