const express = require('express');
const app = express();
const fs = require('fs'),
      env = require('node-env-file');

if (fs.existsSync(__dirname + '/.env' )) {
  env(__dirname + '/.env');
}

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Rachio Dashboard';

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
