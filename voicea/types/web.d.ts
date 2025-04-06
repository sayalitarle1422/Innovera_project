const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  declare global {
    interface Window {
      webkitSpeechRecognition: any;
      SpeechRecognition: any;
    }
  
    interface SpeechRecognitionEvent extends Event {
      readonly resultIndex: number;
      readonly results: SpeechRecognitionResultList;
    }
  }
  