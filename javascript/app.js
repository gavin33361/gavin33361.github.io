$(document).ready(function(){
	var x = 0;
	function answer1(){
		if (x%2==0){
			$("#question1").append("<table class='table1'><tr><th><i>p</i></th><th><i>q</i></th><th><i>r</i></th><th><i>q</i> &and; <i>r</i> &and; <i>p'</i></th></tr>" + 
				"<tr><td>T</td><td>T</td><td>T</td><td>F</td></tr>" + 
				"<tr><td>T</td><td>T</td><td>F</td><td>F</td></tr>" +
				"<tr><td>T</td><td>F</td><td>T</td><td>F</td></tr>" +
				"<tr><td>T</td><td>F</td><td>F</td><td>F</td></tr>" +
				"<tr><td>F</td><td>T</td><td>T</td><td>T</td></tr>" +
				"<tr><td>F</td><td>T</td><td>F</td><td>F</td></tr>" +
				"<tr><td>F</td><td>F</td><td>T</td><td>F</td></tr>" +
				"<tr><td>F</td><td>F</td><td>F</td><td>F</td></tr></table>");
			x++;}
			else 
			{
				$(".table1").hide();
				x++;
			}
		}
		$("#button1").click(function(){
			answer1();
		});
		var y = 0;
		function answer2(){
			if (y%2==0){
				$("#question2").append("<table class='table2'><tr><th><i>p</i></th><th><i>q</i></th><th><i>r</i></th><th><i>p</i> &or; <i>q'</i> &or; <i>r'</i></th></tr>" + 
					"<tr><td>T</td><td>T</td><td>T</td><td>T</td></tr>" + 
					"<tr><td>T</td><td>T</td><td>F</td><td>T</td></tr>" +
					"<tr><td>T</td><td>F</td><td>T</td><td>T</td></tr>" +
					"<tr><td>T</td><td>F</td><td>F</td><td>T</td></tr>" +
					"<tr><td>F</td><td>T</td><td>T</td><td>F</td></tr>" +
					"<tr><td>F</td><td>T</td><td>F</td><td>T</td></tr>" +
					"<tr><td>F</td><td>F</td><td>T</td><td>T</td></tr>" +
					"<tr><td>F</td><td>F</td><td>F</td><td>T</td></tr>");
				y++;}
				else 
				{
					$(".table2").hide();
					y++;
				}
			}
			$("#button2").click(function(){
				answer2();
			});
			var z = 0;
			function answer3(){
				if (z%2==0){
					$("#question3").append("<table class='table3'><tr><th><i>p</i></th><th><i>q</i></th><th><i>r</i></th><th><i>r'</i> &rArr; (<i>q</i> &and; <i>p'</i>)</th></tr>" + 
						"<tr><td>T</td><td>T</td><td>T</td><td>T</td></tr>" + 
						"<tr><td>T</td><td>T</td><td>F</td><td>F</td></tr>" +
						"<tr><td>T</td><td>F</td><td>T</td><td>T</td></tr>" +
						"<tr><td>T</td><td>F</td><td>F</td><td>F</td></tr>" +
						"<tr><td>F</td><td>T</td><td>T</td><td>T</td></tr>" +
						"<tr><td>F</td><td>T</td><td>F</td><td>T</td></tr>" +
						"<tr><td>F</td><td>F</td><td>T</td><td>T</td></tr>" +
						"<tr><td>F</td><td>F</td><td>F</td><td>F</td></tr>");
					z++;}
					else 
					{
						$(".table3").hide();
						z++;
					}
				}
				$("#button3").click(function(){
					answer3();
				});
				var zz = 0;
				function answer4(){
					if (zz%2==0){
						$("#question4").append("<table class='table4'><tr><th><i>p</i></th><th><i>q</i></th><th><i>r</i></th><th>(<i>q</i> &or; <i>p'</i>) &rArr; <i>r'</i></th></tr>" + 
							"<tr><td>T</td><td>T</td><td>T</td><td>F</td></tr>" + 
							"<tr><td>T</td><td>T</td><td>F</td><td>T</td></tr>" +
							"<tr><td>T</td><td>F</td><td>T</td><td>T</td></tr>" +
							"<tr><td>T</td><td>F</td><td>F</td><td>T</td></tr>" +
							"<tr><td>F</td><td>T</td><td>T</td><td>F</td></tr>" +
							"<tr><td>F</td><td>T</td><td>F</td><td>T</td></tr>" +
							"<tr><td>F</td><td>F</td><td>T</td><td>F</td></tr>" +
							"<tr><td>F</td><td>F</td><td>F</td><td>T</td></tr>");
						zz++;}
						else 
						{
							$(".table4").hide();
							zz++;
						}
					}
					$("#button4").click(function(){
						answer4();
					});
				})