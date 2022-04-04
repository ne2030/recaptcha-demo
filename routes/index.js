var express = require('express');
var router = express.Router();
const { html } = require('fxjs');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  const page = html`
    <html>
      <head>
        <title>reCAPTCHA demo: Simple page</title>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body>
        <form action="?" method="POST">
          <div class="g-recaptcha" data-sitekey="6LfrYkUeAAAAAJWJjvxfnGDg2Q4tf36jEa9DNrKn"></div>
          <br/>
          <input type="submit" value="Submit">
        </form>
          <button onclick="hi()">console</button>
          <script>
              function hi() {
                  console.log(grecaptcha.getResponse());  
              }
          </script>
      </body>
    </html>
    `

  res.send(page);
});

router.post('/', async function(req, res, next) {
  console.log(req.body['g-recaptcha-response']);
  console.log(req.body);

  const { data: response } = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
  }, {
    params: {
      secret: '6LfrYkUeAAAAAOIxZigrfgvQHmd9ZJP0JpoG-vMr',
      response: req.body['g-recaptcha-response'],
    }
  })

  console.log(response);


  res.send(html`<!doctype html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                           <meta http-equiv="X-UA-Compatible" content="ie=edge">
               <title>Document</title>
  </head>
  <body>
    ${response}
  </body>
  </html>`)
})

router.get('/v3', (req, res) => {
  const page = html`
    <html>
      <head>
        <title>reCAPTCHA demo: Simple page</title>
          <script src="https://www.google.com/recaptcha/api.js?render=6Lc89HgeAAAAAPCrwatlePjxSTmjsjKGNok8Jf0D"></script>
      </head>
      <body>
          <button onclick="onClick()">인증</button>
          <script>
              function onClick() {
                  console.log('clicked~~')
                  grecaptcha.ready(function() {
                      grecaptcha.execute('6Lc89HgeAAAAAPCrwatlePjxSTmjsjKGNok8Jf0D', {action: 'submit'}).then(function(token) {
                        console.log(token);
                          postData('http://khb.abc:3000/v3', { token })
                                  .then(data => console.log(JSON.stringify(data))) // JSON-string from \`response.json()\` call
                                  .catch(error => console.error(error));

                          function postData(url = '', data = {}) {
                              console.log(url);
                              // Default options are marked with *
                              return fetch(url, {
                                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                                  mode: 'cors', // no-cors, cors, *same-origin
                                  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                                  credentials: 'same-origin', // include, *same-origin, omit
                                  headers: {
                                      'Content-Type': 'application/json',
                                      // 'Content-Type': 'application/x-www-form-urlencoded',
                                  },
                                  redirect: 'follow', // manual, *follow, error
                                  referrer: 'no-referrer', // no-referrer, *client
                                  body: JSON.stringify(data), // body data type must match "Content-Type" header
                              })
                                      .then(response => response.json()); // parses JSON response into native JavaScript objects
                          }
                      });
                  });
              }
          </script>
      </body>
    </html>
    `

  res.send(page);
})

router.get('/ethers', (req, res) => {
  res.send(html`
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                             <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <title>Document</title>
        <script src="https://cdn.ethers.io/lib/ethers-5.4.umd.min.js"
                type="application/javascript"></script>
        <script src="./javascripts/index.js"></script>
    </head>
    <body>
    </body>
    </html>
  `)
})

router.post('/v3', async(req, res) => {
  console.log('token', req.body);

  const { data: response } = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
  }, {
    params: {
      secret: '6Lc89HgeAAAAAAWf9y4EwfkfVbhcseoqxBfc5Szg',
      response: req.body.token,
    }
  })

  console.log('response', response);

  res.end();
})

module.exports = router;
