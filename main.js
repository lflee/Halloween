function play() {
    
    var synth = new Tone.Synth().toMaster()
    
    synth.triggerAttackRelease('D5', '8n')
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('D5', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('D5', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('D#5', '8n', Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '8n', Tone.Time('8n'))
}
