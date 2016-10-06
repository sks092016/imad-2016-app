var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var mainData = {
     'schooling' : 
     {
    	title : "Subhash : Schooling", 
    	heading1 : "Name of School",
    	heading2 : "Jawahar Navodaya Vidyalaya, Khurai Sagar",
    	about1 : `<p>The Navodaya Vidyalaya System is a unique experiment unparalleled in the annals of school education in India and elsewhere. Its significance lies in the selection of talented rural children as the target group and the attempt to provide them with quality education comparable to the best in a residential school system. Such children are found in all sections of society, and in all areas including the most backward. </p>`,
    	heading3 : "Vision of School",
    	about2 : `<p>But, so far, good quality education has been available only to well-to-do sections of society, and the poor have been left out. It was felt that children with special talent or aptitude should be provided opportunities to proceed at a faster pace, by making good quality education available to them, irrespective of their capacity to pay for it.These talented children otherwise would have been deprived of quality modern education traditionally available only in the urban areas. </p>`,
    	heading4 : "Idea of School",
    	about3 : `<p>Such education would enable students from rural areas to compete with their urban counterparts on an equal footing. The National Policy on Education-1986 envisaged the setting up of residential schools, to be called Jawahar Navodaya Vidyalayas that would bring out the best of rural talent. </p>`,
        
        subhead1 : "High School",
        subhead2 : "Matriculation",
        subhead3 : "Academics Achivement",
        subhead4 : "Sports"
         
     },
 
    'college' : 
     {
    	title : "Subhash : College", 
    	heading1 : "Name of College",
    	heading2 : "Jabalpur Engineering College Jabalpur",
    	about1 : `<p>Jabalpur Engineering College, Jabalpur was established on 7 July, 1947 when the entire global chess board was witnessing a dramatic change. It was born just a few months before India broke the shackles of British slavery. <br> This illustrious Institution got the distinction of being the Second Engineering College in India and is the premier institution of Engineering Education in Central India. Thanks to the inspired vision of the great pioneering Principal Dr. S.P. Chakravarti. From a very small room in old Robertson College, this tiny icon has grown into a mighty oak tree, which is now 63 years old and has celebrated its Diamond Jubilee in the year 2007. <br> The college since its inception has a well equipped High Voltage Laboratory and Telecommunication Department which was not available in any other contemporary colleges. Even before the advent of Television in the country, Telecommunication Lab was established in this college. The former has been made as one of the Centers of Excellence by Govt. of India in recognition of its contribution in the area of High-Voltage research and testing. It is getting grants from government of India to further promote its research and development activities. The college also has the distinction of being the first in India to offer BE degree in Electronics and Telecommunication Engineering.</p>`,
    	
    	heading3 : "Vision of College",
    	about2 : `<p>To be a front runner in Technical Education providing academic excellence satisfying global needs
    	</p>`,
    	heading4 : "Mission of College",
    	about3 : `<p>
                     To develop world class infrastructure and knowledge empowerment mechanism for carving out graduates 
                    and postgraduates of high level of competence embedded with wisdom; and dedicated to ethics and values.<br>To conduct research in the frontier areas and to develop innovative and creative problem solving skills.<br>To establish strong linkages with technical institutions, industries, R&D organisations and community.
                     </p>`,
        
        subhead1 : "Final Academics",
        subhead2 : "Technical Certificates",
        subhead3 : "Academics Achivement",
        subhead4 : "Sports" 
         
     },
        
    'perDetails' : 
     {
    	title : "Subhash : Personal Details ", 
    	heading1 : "Self Details",
    	heading2 : "Subhash Soni",
    	about1 : `<p>
    	                <b>Date of Birth</b> : 02 Nov 1987 
    	                <br>
    	                <b>Place of Birth</b> : Sagar Madhya Pradesh
    	                <br>
    	                <b>Time  of Birth</b> : 7:20 AM
    	                <br>
    	                <b>Zodiac Sign </b> : Aquaris
    	                <br>
    	                <b>Hobbies & Intersts </b> : Like Xploring the things
    	           
    	           </p>`,
    	
    	heading3 : "Details of Family",
    	about2 : `<p>
    	                <b>Father's Name</b> : Naval Kishor Soni
    	                <br>
    	                <b>Mother's Name</b> : Geeta Soni
    	                <br>
    	                <b>Sister's Name</b> : Divya Soni
    	                <br>
    	          </p>`,
    	          
    	heading4 : "Family Moral Values",
    	about3 : `<p>
                      More than anything else, let me be clear - we need to be willing to fight for freedom, and free markets, and traditional moral values. That's what the American people want to see this movement and this party return to. <br> Mike Pence
 
                 </p>`,
        
        subhead1 : "Family Background",
        subhead2 : "Family Occupation",
        subhead3 : "Relatives",
        subhead4 : "Business"
         
     }
        
    
} ;

function createTemplate(content) {

var title = content.title ;

var heading1 = content.heading1;
var heading2 = content.heading2;
var heading3 = content.heading3;
var heading4 = content.heading4;

var about1 = content.about1 ;
var about2 = content.about2 ;
var about3 = content.about3 ;

var subhead1 = content.subhead1 ;
var subhead2 = content.subhead2 ;
var subhead3 = content.subhead3 ;
var subhead4 = content.subhead4 ;


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
							<li><a href="/default">${subhead1}</a></li>
							<li><a href="/default">${subhead2}</a></li>
							<li><a href="/default">${subhead3}</a></li>
							<li><a href="/default">${subhead4}</a></li>
						  </ul>
					</div>
				</div>
				<div id="head"> <span class="title">Subhash Soni</span>
				
					<div id="nav">
					  <ul class="null">
						<li><a href="/">Present Employer</a></li>
						<li><a href="/college">Collage</a></li>
						<li><a href="/schooling">Schooling</a></li>
						<li><a href="/perDetails">Personal Details</a></li>
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
} ;

var defTemplate = function() {
	
	var defTemplate = 
		`
		<!DOCTYPE html>
		<html>
			<head>
				
			</head>
			<body>
				<div>
				<h1>Sorry !!! Folks the page is under contruction. We will meet you soon. "Bye"</h1>
				</div>
			</body>
		</html> `	 ;
	
	return defTemplate ;
} ;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:contentName', function (req, res) {
  var contentName = req.params.contentName ;
  res.send(createTemplate(mainData[contentName]));
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

app.get('/default', function (req, res) {
  res.send(defTemplate());
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
