let app = document.getElementById('app');
let rsl;
const cor = ['#ff6666', '#00ccff', '#ff00ff', '#ff9900', '#ff0099', '#ccff33', '#ffff00', '#ff33cc', '#33ff33', '#ff66ff', '#ffcc00', '#66ccff', '#ff0000', '#ff8000', '#ffff00', '#00cc00', '#00ffff', '#0000ff', '#cc00cc', '#ff00ff', '#999999', '#cccccc', '#ffffff', '#ff0000', '#ff9933', '#ffff66', '#ff99cc', '#66ccff', '#99ff33', '#ff9999', '#ffcc00'];
const msc= [{
	nm:'Pom',
	ar:'midi/pom.wav',
	tc:'7'

},{
	nm:'clap',
	ar:'midi/clap.wav',
	tc:'8'

},{
	nm:'Tim',
	ar:'midi/tim.wav',
	tc:'9'

},{
	nm:'Puff',
	ar:'midi/puff.wav',
	tc:'4'

},{
	nm:'Splash',
	ar:'midi/splash.wav',
	tc:'5'

},{
	nm:'Toim',
	ar:'midi/toim.wav',
	tc:'6'

},{
	nm:'Psh',
	ar:'midi/psh.wav',
	tc:'1'

},{
	nm:'Tic',
	ar:'midi/tic.wav',
	tc:'2'

},{
	nm:'Tom',
	ar:'midi/tom.wav',
	tc:'3'
}
]

//Gera os botões do MIDI.
for(let i=0;i<msc.length;i++){app.innerHTML += `<button id='b${i}' onclick='inst${i}.play()' style='background-color:${cor[i]}'>${msc[i].nm}</button>
	<audio src='${msc[i].ar}' id='inst${i}'></audio>`;

	document.addEventListener('keydown', function(event) {
		if (event.code === 'Numpad'+ msc[i].tc) {
		document.getElementById(`inst${i}`).play();
		document.getElementById(`b${i}`).focus();
		}		
	});
   
}
