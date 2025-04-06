// types/speech.d.ts

interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    start(): void;
    stop(): void;
    onstart: (() => void) | null;
    onend: (() => void) | null;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
  }
  
  interface Window {
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
  

const startRecording = () => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  
    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
  
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }
      setNote(transcript);
    };
  
    recognitionRef.current = recognition;
    recognition.start();
  };
  
  