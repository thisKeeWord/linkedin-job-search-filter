'use strict';

var siri = {
	previousResponse: null,
	suggestions: ['I like the sound of that!',
		'That sounds like a terrible idea',
		'Where do you get these ideas from?',
		"Quite frankly my dear, I don't give a damn",
		"Yes, just plain yes",
		'I am Groot',
		"I'll have what you're having!",
		"May the force be with you.",
		"Uh Oh. I've got a feeling we're not in Kansas anymore.",
		"I see nothing wrong with that",
		"That's the smartest thing I have heared all day",
		'I wish I had two more hands, so I could give that 4 thumbs down',
		'That is the best idea you have had all day',
		'I am very neutral on this one',
		"I'm too exhausted to give advice right now"]
};
chrome.tts.getVoices(
          function(voices) {
            for (var i = 0; i < voices.length; i++) {
              console.log('Voice ' + i + ':');
              console.log('  name: ' + voices[i].voiceName);
              console.log('  lang: ' + voices[i].lang);
              console.log('  gender: ' + voices[i].gender);
              console.log('  extension id: ' + voices[i].extensionId);
              console.log('  event types: ' + voices[i].eventTypes);
            }
          });
var form = document.getElementById('form');

function generationAdvice() {
	var suggestCount = siri.suggestions.length;
	var i = Math.floor(Math.random() * suggestCount);

	if(siri.previousResponse === siri.suggestions[i]) {
		return generationAdvice();
	} 
	else {
		siri.previousResponse = siri.suggestions[i];
		return siri.suggestions[i];
	}
}

var advice = generationAdvice();

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var input = document.getElementById('input-box');
	var question = input.value;

	if(question.slice(-1) === '?') {
		chrome.tts.speak(advice, {
			'gender': 'female',
			'lang': 'en-GB',
			'rate': 1.0
		});
		advice = generationAdvice();
	} else {
		chrome.tts.speak('Please ask a question', {
			'lang': 'en-GB',
			'gender': 'male',
			'rate': 1.0
		});
	}
	input.value = '';
});
