const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

var transcript="google";

recognition.onstart = function(){
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event){
    const current =  event.resultIndex;

     transcript = event.results[current][0].transcript;
    content.textContent= transcript;

    readOutLoud(transcript);
};

//add the listener to button

btn.addEventListener('click', ()=>{
recognition.start();
});

function readOutLoud(transcript){
    const speech = new SpeechSynthesisUtterance();
    speech.text = transcript;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    console.log(typeof(transcript));
    window.speechSynthesis.speak(speech);
    

}
function search(){
		if(this.transcript =="google"){
			alert("say again");
		}
		else{
    window.open('http://google.com/search?q='+this.transcript);
		}
}
