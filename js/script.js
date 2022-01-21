

function generateUI(jsonUserData){

 
   
        var userCard = `<div class="card mx-auto mt-1" style="width: 18rem;">
        <img src="${jsonUserData.avatar_url}" class="card-img-top w-50 mx-auto mt-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${jsonUserData.name != null ? jsonUserData.name :  "Name" }</h5>
          <p class="card-text">${jsonUserData.bio != null ? jsonUserData.bio :  "Bio" }</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Followers : ${jsonUserData.followers} </li>
          <li class="list-group-item">Following : ${jsonUserData.following}</li>
          <li class="list-group-item">Public repos : ${jsonUserData.public_repos}</li>
          <li class="list-group-item">Location 🏡 : ${jsonUserData.location != null ? jsonUserData.location:"India"}</li>
        </ul>
        <div class="card-body">
        <a href="${jsonUserData.html_url}" target="_blank" class="card-link text-secondary">More</a>
      </div>
      </div>
      <footer class="mt-5" >Created with ❤ by <a href="${jsonUserData.blog}">Sourabh</a></footer>`;
    
      var card = document.querySelector(".container");
    
      card.innerHTML = userCard;
    
     
}



const getData = async function(username){
 
    const userData = await fetch(`https://api.github.com/users/${username}`)
    const jsonUserData = await userData.json();
    if(userData.status === 403){
        var card = document.querySelector(".container");
        card.innerHTML = "<h1 class='text-warning'>Search limit exceed !!!</h1>";
    } else if(userData.status === 404){
        var card = document.querySelector(".container");
        card.innerHTML = "<h1 class='text-danger mt-5'>User Not Found 😏</h1>";
    }else{
        generateUI(jsonUserData);
        console.log(userData.status);
    }
   
} 




var input = document.querySelector('input');

input.addEventListener("change", function(e){
 username = e.target.value;
 getData(username)
});