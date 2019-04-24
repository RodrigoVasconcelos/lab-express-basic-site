const express = require('express');

const app = express(); //it replace the http stuf create

//middleware for static files
app.use(express.static('public'))

app.get('/index', (request, response, next) => {
  console.log('request', request);
  response.sendFile(__dirname + '/public/index.html')
});

app.get('/alice', (request, response, next) => {
  console.log('request', request);
  response.sendFile(__dirname + '/public/alice.html')
});

app.get('/vasco', (request, response, next) => {
  console.log('request', request);
  response.sendFile(__dirname + '/public/vasco.html')
});

app.get('/constanca', (request, response, next) => {
  console.log('request', request);
  response.sendFile(__dirname + '/public/constanca.html')
});

app.get('/carlos', (request, response, next) => {
  console.log('request', request);
  response.sendFile(__dirname + '/public/alice.html')
});

app.listen(3009, () => {
  console.log('My first express up is running');
})