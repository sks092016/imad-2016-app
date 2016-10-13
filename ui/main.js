window.onload = function()
{

		console.log('Loaded!');

		//var button = document.getElementById('counter_btn');

		//button.onclick = function()
		//{
		//Make a request object

			var request = new XMLHttpRequest();

			//capture a response and store it in a variable 

			request.onreadystatechange = function()
			{
				if(request.readyState === XMLHttpRequest.DONE)
				{
					if (request.status === 200)
					{
						var counter = request.responseText ;
						// we are incrementing the counter here and will display to the right span
						var span = document.getElementById('count') ;

						span.innerHTML = counter.toString();
					}
				}
			};	

			//make request to server for desired resource 
			request.open('GET', 'http://localhost:8080/counter', true) ;
			request.send(null) ;
			
		//};
		
		var submit = document.getElementById("submit_btn");
		submit.onclick = function()
		{
		//Make a request object

			var request = new XMLHttpRequest();

			//capture a response and store it in a variable 

			request.onreadystatechange = function()
			{
				if(request.readyState === XMLHttpRequest.DONE)
				{
					if (request.status === 200)
					{
						var names = request.responseText ;
						// we received the information as JSON text and at client we are agian converting it to the JS object to render at the client browser 
						var names = JSON.parse(names) ; 		
						var list = " ";
						for (var i = 0 ; i<names.length ; i++)
						{
							list += "<li>"+names[i]+ "</li>" ;
						} 
						var ul = document.getElementById("namelist");
						ul.innerHTML = list ;
					}
				}
			};	
			var nameinput = document.getElementById("input");
			var name = nameinput.value ;
			//make request to server for desired resource 
			request.open('GET', 'http://localhost:8080/submit-name?name='+name, true) ;
			request.send(null) ;
			nameinput.value = "Enter new Comment" ;
			alert("You comment is submitted") ;
		};
};
