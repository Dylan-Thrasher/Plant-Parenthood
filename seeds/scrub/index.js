const axios = require('axios');
const fs = require('fs');

const _url = `https://perenual.com/api/species-list?key=sk-HKLg6642324530c635451`;
let dataString = ``;

const getPage = async (url) => {
  await axios.get(url)
    .then((response) => {
      let stringy = JSON.stringify(response.data.data)
      console.log(stringy);
      dataString += stringy;

    })
    .catch((error) => {
      console.log(error);
    });
}



const start = async () => {
  
  for (let i = 1; i < 101; i++) {
    let qURL = `${_url}&page=${i}`;
    await getPage(qURL);
  }

  fs.appendFile('data.json', dataString, (err) => {
    err ? console.error(err) : console.log('data saved!')
  })
}

start();