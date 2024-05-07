document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const user = document.querySelector('#user');
    const avatar = document.querySelector('#avatar');
    const repositorios = document.querySelector('#repositorios');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/ogiansouza')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            user.innerText = json.login;
            avatar.src = json.avatar_url;
            repositorios.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
        
        .catch(function(erro) {
            console.error('Erro ao carregar dados do GitHub:', erro);
        });

})