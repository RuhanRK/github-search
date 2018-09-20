// Github class constructor
class Github{
    constructor(){
        this.client_id = 'df8d1595fd0e9cb52d76';
        this.client_secret = 'c4a780a4e4c889069b6008eac6bee2df6fdbfd87';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const responseData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposData = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await responseData.json();
        const repos = await reposData.json();
        return{
            profile,
            repos
        };
    }
};