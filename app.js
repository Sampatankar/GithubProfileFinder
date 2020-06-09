//Instantiate the Github class from github.js:
const github = new Github;

//Instantiate the UI class from ui.js:
const ui = new UI;

//Search Input:
const searchUser = document.getElementById('searchUser');

//Search Input Event Listener:
searchUser.addEventListener('keyup', (e) => {
  //Get the input text:
  const userText = e.target.value;

  if (userText !== '') {
    //Make the http call:
    github.getUser(userText)
      .then(data => {
        //what to do it profile not found:
        if (data.profile.message === 'Not Found') {
          //Show an alert:
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //show a profile found:
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //clear the profile:
    ui.clearProfile();
  }
});