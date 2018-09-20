//  Set UI class

class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        this.searchContainer = document.querySelector('.searchContainer');
        this.searchBox = document.querySelector('.search');
    }

    showProfile(user){
        this.profile.innerHTML =`
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member SInce: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mp-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }
    
    // Show repos
    showRepos(repos){
        let output = '';
        repos.forEach((repo) => {
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
            `
        });

        document.getElementById('repos').innerHTML = output;
    }

    //Show alert
    showAlert(msg, cls){
        // clear any remaing alert
        this.clearAlert()
        //create div
        const div = document.createElement('div');
        //Add class
        div.className = cls;
        // add text
        div.appendChild(document.createTextNode(msg));
        //add to body
        this.searchContainer.insertBefore(div, this.searchBox);
        // clear alert after 2 sec
        setTimeout(()=>{
            this.clearAlert();
        }, 2000);
    }

    // clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove()
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}