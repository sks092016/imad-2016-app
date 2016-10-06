var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var schooling = {
	title : "Subhash : Schooling", 
	heading1 : "Name of School",
	heading2 : "Jawahar Navodaya Vidyalaya, Khurai Sagar",
	about1 : `<p>The Navodaya Vidyalaya System is a unique experiment unparalleled in the annals of school education in India and elsewhere. Its significance lies in the selection of talented rural children as the target group and the attempt to provide them with quality education comparable to the best in a residential school system. Such children are found in all sections of society, and in all areas including the most backward. </p>`,
	heading3 : "Vision of School",
	about2 : `<p>But, so far, good quality education has been available only to well-to-do sections of society, and the poor have been left out. It was felt that children with special talent or aptitude should be provided opportunities to proceed at a faster pace, by making good quality education available to them, irrespective of their capacity to pay for it.These talented children otherwise would have been deprived of quality modern education traditionally available only in the urban areas. </p>`,
	heading4 : "Idea of School",
	about3 : `<p>Such education would enable students from rural areas to compete with their urban counterparts on an equal footing. The National Policy on Education-1986 envisaged the setting up of residential schools, to be called Jawahar Navodaya Vidyalayas that would bring out the best of rural talent. </p>`
}
function createTemplate(content) {

var title = content.title ;

var heading1 = content.heading1;
var heading2 = content.heading2;
var heading3 = content.heading3;
var heading4 = content.heading4;

var about1 = content.about1
var about2 = content.about2
var about3 = content.about3

var htmlTemplate = 
	`<!DOCTYPE html>
	<html>

		<head>
			<title>${title}</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<link rel="stylesheet" type="text/css" href="/ui/style.css"/>
		</head>

		<body>

			<div id="container">
				<div id= "side"> 
					<div id="sidebar">
						  <h4>Achivements and Key Skills</h4>
						  <ul class="null">
							<li><a href="http://all-free-download.com/free-website-templates/">Project Handeled</a></li>
							<li><a href="http://jigsaw.w3.org/css-validator/check/referer">Certifications Done</a></li>
							<li><a href="http://validator.w3.org/check?uri=referer">Skills Learned</a></li>
							<li><a href="http://all-free-download.com/free-website-templates/">Training Attended</a></li>
						  </ul>
					</div>
				</div>
				<div id="head"> <span class="title">Subhash Soni</span>
				
					<div id="nav">
					  <ul class="null">
						<li><a href="/">Present Employer</a></li>
						<li><a href="http://all-free-download.com/free-website-templates/">Collage</a></li>
						<li><a href="/schooling">Schooling</a></li>
						<li><a href="http://all-free-download.com/free-website-templates/">Personal Details</a></li>
					  </ul>
					</div>
					
				</div>
				
				<div id="main">
					
					<div class="entry">
					  
					  <h2>${heading1}</h2>
					  <h3>${heading2}</h3>
					  ${about1}
					  
					</div>
					
					<div class="entry">
					  
					  <h2>${heading3}</h2>
					  ${about2}
					  
					</div>
				 
					<div class="entry">
					  
					  <h2>${heading4}</h2>
					  ${about3}   
						
					</div>
				  
				</div>

			</div>
		</body>

	</html>`;
return htmlTemplate ;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/schooling', function (req, res) {
  res.send(createTemplate(schooling));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/sidebg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sidebg.png'));
});

app.get('/ui/tcillogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tcillogo.png'));
});

app.get('/ui/tcillogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tcillogo.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
