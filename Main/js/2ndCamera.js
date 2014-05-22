var videoElement2 = document.querySelector("video.camera1");
var audioSelect2 = document.querySelector("select#audioSource2");
var videoSelect2 = document.querySelector("select#videoSource2");

navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function gotSources(sourceInfos) {

  for (var i = 0, count = 0; i != sourceInfos.length; ++i) {
    
    var sourceInfo = sourceInfos[i];
    var option = document.createElement("option");
    option.value = sourceInfo.id;
    if (sourceInfo.kind === 'audio') {
      option.text = sourceInfo.label || 'microphone ' + (audioSelect2.length + 1);
      audioSelect2.appendChild(option);
    } else if (sourceInfo.kind === 'video') {
        count++;
      	if(count === 2){
      option.text = sourceInfo.label || 'camera ' + (videoSelect2.length + 1);
      videoSelect2.appendChild(option);
      break;
  		}
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
    start2();
}

if (typeof MediaStreamTrack === 'undefined'){
  alert('This browser does not support getusermedia().\n\nTry Chrome Canary and up.');
} else {
  MediaStreamTrack.getSources(gotSources);
}


function successRoomCallback(streamRoom) {
  window.streamRoom = streamRoom; // make stream available to console
  videoElement2.src = window.URL.createObjectURL(streamRoom);
  videoElement2.play();
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}

function start2(){
  if (!!window.streamRoom) {
    videoElement2.src = null;
    window.streamRoom.stop();
  }
  var audioSource2 = audioSelect2.value;
  var videoSource2 = videoSelect2.value;
  var constraints2 = {
    audio: {
      optional: [{sourceId: audioSource2}]
    },
    video: {
      optional: [{sourceId: videoSource2}]
    }
  };
  navigator.getUserMedia(constraints2, successRoomCallback, errorCallback);
}

audioSelect2.onchange = start2;
videoSelect2.onchange = start2;

