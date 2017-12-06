var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var parseString = require('xml2js').parseString;

app.get('/scrape', function(req, res){

  url = 'https://www.cineworld.co.uk/syndication/all-performances.xml';

  request(url, function(error, response, html){
    
    console.log('Requesting...');
    
        if(!error){
            var $ = cheerio.load(html, { xmlMode: true });

            var xml = $('cinemas');

            parseString(xml, function (err, result) {
                console.log('parsing xml');

                var data = JSON.stringify(result, null, 4);
                var sanitised = JSON.parse(data);

                res.send(sanitised);
                
                fs.writeFile('outputString.json', data, function(err){            
                    console.log('File successfully written!');        
                });
                
            });

        }

    });


});

app.listen('8081')

console.log('Load "http://localhost:8081/scrape" to request scrape data');

exports = module.exports = app;