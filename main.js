function play() {
    var synth = new Tone.Synth() ;
    synth.toMaster() ;
    
    Tone.Transport.bpm.value = 141 ;

    const notes = ['D5', 'G4', 'G4', 'D5', 'G4', 'G4', 'D5', 'G4', 'D#5', 'G4'];

    synth.triggerAttackRelease(notes, '8n')

    // for (let index = 0; index < 10; index++) {
    //   var pricipleRangeHigh = index ;
    //   var pricipleRangeLow = index - 1 ;
    //     synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n')
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*2)
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*3)
    //     synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*4)
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*5)
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*6)
    //     synth.triggerAttackRelease('D' + pricipleRangeHigh , '8n', Tone.Time('8n')*7)
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*8)
    //     synth.triggerAttackRelease('D#' + pricipleRangeHigh , '8n', Tone.Time('8n')*9)
    //     synth.triggerAttackRelease('G' + pricipleRangeLow , '8n', Tone.Time('8n')*10)

      
    // }
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
