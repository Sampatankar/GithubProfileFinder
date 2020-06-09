class Github {
  constructor() {
    this.client_id = 'put_your_own_in';
    this.client_secret = 'put_your_own_in';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  //Fetch the url:
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //get json data:
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    //return the json data:
    return {
      profile,
      repos
    }
  }

}