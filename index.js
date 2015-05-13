'use strict';
var handlebars = require('handlebars'),
fs = require('fs'),
pdf = require('html-pdf');

if(process.argv.length < 3){
    console.log('missing output filename');
    process.exit(0);
}

if(process.argv.length < 4){
    console.log('missing config file');
    process.exit(0);
}

var fileName = 'output/' +process.argv[2],
configFile = process.argv[3];

// get config
var config = require('./config/' + configFile);

// compile the template
var template = handlebars.compile(config.template);

// call template as a function, passing in your data as the context
var html = template(config.data);

var options = config.options;
options.filename = fileName;

pdf.create(html, options).toFile(function(err, res){
if (err) {
    return console.log(err);
}
console.log(fileName,'saved');    

});
