const sports = [
    "🏀",
    "🏉",
    "🎾",
    "⛳",
    "⚽"
   
  ];


  var sport = sports[Math.floor(Math.random() * Math.floor(sports.length))];

  document.querySelector(".sport").append(sport);