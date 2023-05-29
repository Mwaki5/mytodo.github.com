const url = 'https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8b99acd2a2msh12aa6f23203dffbp118b63jsn5f831aea76c6',
    'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
