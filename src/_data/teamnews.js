const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/team',
  params: {name: 'Liverpool'},
  headers: {
    'X-RapidAPI-Key': '04b72be7f1msh4de22a55915d34fp13aed6jsn752314e34b2e',
    'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});