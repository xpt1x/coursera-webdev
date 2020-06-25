(() => {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let id in names) {
    let first = names[id].charAt(0).toLowerCase(); 
    first == 'j' ? byeSpeaker.speak(names[id]) : helloSpeaker.speak(names[id]);
  }
})();
