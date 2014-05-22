function show(){
				var video = document.querySelector(".ppt");
		 
					navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
					 
					if (navigator.getUserMedia) {      
					    navigator.getUserMedia({video: true, audio: true}, handleVideo, videoError);
					}
					 
					function handleVideo(stream) {
					    video.src = window.URL.createObjectURL(stream);
					}
					 
					function videoError(e) {
					    console.log("error");
					}
						
				}
		function stop(){
				var video = document.querySelector(".ppt");
		 
					navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
					 
					if (navigator.getUserMedia) {      
					    navigator.getUserMedia({video: true, audio: true}, handleVideo, videoError);
					}
					 
					function handleVideo(stream) {
					    video.pause();
					    video.src="";
					}
					 
					function videoError(e) {
					    console.log("error "+ e);
					}
						
				}
			
				function camera1(element)
				{
					var camera1 = document.getElementById("camera1"),
						camera2 = document.getElementById("camera2"),
						ppt = document.getElementById("ppt"),
						pptClass = ppt.className,
						camera1Class = camera1.className,
						camera2Class = camera2.className;
					var temp;
					//alert(camera1Class);
					if (camera1Class=="camera1") 
					{
						stop();
						ppt.className = camera1Class;
						camera1.className = pptClass;
						show();
						// alert("Change");
					}
					else if(camera2Class=="camera1")
					{
						stop();
						ppt.className= camera2Class;
						camera2.className= pptClass;
						show();
						// alert("Change");
					}

				}
				function camera2(element)
				{
					var camera1 = document.getElementById("camera1"),
						camera2 = document.getElementById("camera2"),
						ppt = document.getElementById("ppt"),
						pptClass = ppt.className,
						camera1Class = camera1.className,
						camera2Class = camera2.className;
					var temp;
					if (camera1Class=="camera2") 
					{
						stop();
						ppt.className = camera1Class;
						camera1.className = pptClass;
						show();
						// alert("Change");

					}
					else if(camera2Class=="camera2")
					{
						stop();
						ppt.className = camera2Class;
						camera2.className = pptClass;
						show();
						// alert("Change");
					}

				}
				function ppt(element)
				{
					var camera1 = document.getElementById("camera1"),
						camera2 = document.getElementById("camera2"),
						ppt = document.getElementById("ppt"),
						pptClass = ppt.className,
						camera1Class = camera1.className,
						camera2Class = camera2.className;
					var temp;
					if (camera1Class=="ppt") 
					{
						stop();
						ppt.className = camera1Class;
						camera1.className = pptClass;
						show();
						// alert("Change");

					}
					else if(camera2Class=="ppt")
					{
						stop();
						ppt.className = camera2Class;
						camera2.className = pptClass;
						show();
						// alert("Change");
					}
					// else
					// 	alert("no change");
				}