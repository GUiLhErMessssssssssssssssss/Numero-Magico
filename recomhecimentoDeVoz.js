const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang= "pt-br"
  recognition.start()

  recognition.addeventLister("result", onSpeak)

  function onSpeak(e){
    console.log(e.result[0][0].trancript)
  }