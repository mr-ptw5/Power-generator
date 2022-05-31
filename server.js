const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  
  //THE API ENDPOINT LOGIC!!!!!!!!
  else if (page === '/api') {
    fs.readFile('powers.json', function(err, data) {
      
      res.writeHead(200, {'Content-Type': 'application/json'});
      console.log("GONNA PRINT THIS  NOW")
      data = JSON.parse(data)
      
      const num = Math.floor(Math.random() * data.length)
      const power = data[num]

      const powers = {superpower: power.powerName,
                     url: power.powerUrl}
      res.end(JSON.stringify(powers));
  })
  }             
                
                
      //student != leon
  //else if
  else if (page === '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });}
  else if (page === '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);