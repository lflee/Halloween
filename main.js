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
}
