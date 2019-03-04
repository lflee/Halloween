var context = new AudioContext(),
  oscillator = null;

document.body.addEventListener('mousedown', function () {
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.start(context.currentTime);
});

document.body.addEventListener('mouseup', function () {
  oscillator.stop(context.currentTime);
  oscillator.disconnect();
});

function play() {
    
    var synth = new Tone.Synth().toMaster()
    
    synth.triggerAttackRelease('D5', '8n')
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*2)
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*3)
    synth.triggerAttackRelease('D5', '8n', Tone.Time('8n')*4)
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*5)
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*6)
    synth.triggerAttackRelease('D5', '8n', Tone.Time('8n')*7)
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*8)
    synth.triggerAttackRelease('D#5', '8n', Tone.Time('8n')*9)
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n')*10)

    for (let index = 0; index < 10; index++) {
      var pricipleRangeHigh = index ;
      var pricipleRangeLow = index - 1 ;
        synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n')
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*2)
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*3)
        synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*4)
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*5)
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*6)
        synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*7)
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*8)
        synth.triggerAttackRelease('D#' + pricipleRangeHigh , '8n', Tone.Time('8n')*9)
        synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*10)

      
    }
}

function playAscending() {
    
  var synth = new Tone.Synth().toMaster()
  
  for (let index = 0; index < 10; index++) {
    var pricipleRangeHigh = index ;
    var pricipleRangeLow = index - 1 ;
      synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n')
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*2)
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*3)
      synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*4)
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*5)
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*6)
      synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*7)
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*8)
      synth.triggerAttackRelease('D#' + pricipleRangeHigh , '8n', Tone.Time('8n')*9)
      synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*10)   
  }
}
