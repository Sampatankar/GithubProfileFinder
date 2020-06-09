class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  //Display profile in the UI:
  showProfile(user) {
    //insert user into profile:
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  //Show user repos:
  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span> 
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span> 
                <span class="badge badge-success">Forks: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        `;
    });

    //Output the repositories:
    document.getElementById('repos').innerHTML = output;
  }



  //Show the alert message:
  showAlert(message, className) {
    //Clear any remaining alerts:
    this.clearAlert();
    //Create a div:
    const div = document.createElement('div');
    //Add a class to the div:
    div.className = className;
    //Add text:
    div.appendChild(document.createTextNode(message));
    //Get the parent:
    const container = document.querySelector('.searchContainer');
    //get the search box:
    const search = document.querySelector('.search');
    //Then Insert an alert at this DOM location:
    container.insertBefore(div, search);
    //Timeout user not found after 3 secs:
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message - no multiple alerts on every key press:
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //clear the profile once you've deleted the input in search box:
  clearProfile() {
    this.profile.innerHTML = '';
  }
}