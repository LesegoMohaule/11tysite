// fetch("teams.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(clubs){
//     let placeholder = document.querySelector("#data.output");
//     let out = "";
//     for(let club of clubs){
//         out += `${club.name}
//         <img src='${club.img}'>`;
//     }
//     placeholder.innerHTML = out;
// });

const sports = [
    "🏀",
    "🏉",
    "🎾",
    "⛳",
    "⚽"
   
  ];


  var sport = sports[Math.floor(Math.random() * Math.floor(sports.length))];

  document.querySelector(".sport").append(sport);
