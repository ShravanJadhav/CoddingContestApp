let url =`https://kontests.net/api/v1/all`;

let response = fetch(url);
response.then((v)=>{
   return v.json()
}).then((contest)=>{

    console.log(contest);
    const images = ['https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp', 
    'https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg', 
    'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp'];

     ihtml= ""
    for(item in contest){
      const randomimg = images[Math.floor(Math.random() * images.length)];

      ihtml+=`<div class="card my-3 mx-3 shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <img src="${randomimg}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">Start at : ${contest[item].start_time}</p>
        <p class="card-text">End at : ${contest[item].end_time}</p>
        <h6 class="card-text">Site: ${contest[item].site}</h6>
        <a href="${contest[item].url}" class="btn btn-primary">Contest Link</a>
      </div>
    </div>`  

    }

    
    cardContainer.innerHTML=ihtml;
   

    
}).catch(error => console.log(error));


 