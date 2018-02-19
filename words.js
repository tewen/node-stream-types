const sampleWords = ['Golden', 'dojo', 'seatrout', 'candlefish', 'sprat', 'toadfish,', 'horn', 'shark', 'crevice', 'kelpfish', 'loweye', 'catfish', 'pleco', 'Old', 'World', 'rivuline', 'electric', 'knifefish', 'zebrafish', 'tenpounder.', 'Yellowtail', 'clownfish', 'hake', 'Black', 'angelfish', 'saury', 'Asian', 'carps;', 'tope,', 'tadpole', 'cod', 'brook', 'trout', 'walking', 'catfish', 'neon', 'tetra.', 'Sacramento', 'splittail:', 'clown', 'triggerfish', 'mola', 'tigerperch', 'alligatorfish', 'batfish', 'warmouth', 'Ganges', 'shark', 'Japanese', 'eel.', 'Rough', 'scad', 'longnose', 'dace', 'dogfish', 'shark', 'pejerrey', 'swordtail', 'lefteye', 'flounder', 'bass', 'lumpsucker,', 'airsac', 'catfish', 'giant', 'gourami?', 'Longnose', 'lancetfish', 'thornyhead', 'freshwater', 'hatchetfish.'];

exports.randomWord = (newline = true) => {
  const index = Math.round(Math.random() * (sampleWords.length - 1));
  return `${sampleWords[index]}${newline ? '\n' : ''}`;
};
