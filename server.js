var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
   articleOne : {
title: 'Article-one | soorajmenon',
heading: 'Article One',
date:'5 sep 2016',
content:  `<p>this is article onethis is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis   is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis is article onethis is article onethis is article onethis is article one</p>
                    
                    <p>this is article onethis is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis is article onethis is article onethis is article onethis is article one</p>
                    
                    <p>this is article onethis is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis is article onethis is article onethis is article onethis is article onethis is article one
                    this is article onethis is article onethis is article onethis is article onethis is article onethis is article one</p>,`
},
    articleTwo : {<html>
    <head>
        <title>
            
            Article Two | soorajmenon
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    
    <body>
        <div>
            <a href ='/'>Home</a>
            
        </div>
        <hr/>
        <h3>
            Article Two
        </h3>
        <div>
            
            15 Sep, 2016
        </div>
        
        <div>
            <p>this is article two</p>
        </div>
        
        
        
        
        
        
        
        
        
    </body>
    
    
    
    
</html>
  },
};

function createTemplate (data) {
    var title= data.title;
    var heading= heading.data;
    var date= date.data;
    var content = content.data;
    
var htmlTemplate= `
    <html>
    <head>
        <title>
            
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    
    <body>
        <div class ="container">
                    <div>
                    <a href ='/'>Home</a>
                    
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    
                   ${date}
                </div>
                
                <div>
                    ${content}
                </div>
        
            
        </div>
        
        
        
        
        
        
        
        
        
    </body>
    
    
    
    
</html>`;
return htmlTemplate;

}

    
    
    
    
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne);
});

app.get('/article-two', function (req, res) {
   res.send('Article two will be served here')
});

app.get('/article-three', function (req, res) {
   res.send('Article three will be served here')
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
