
interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
  }
  
  interface SpeechRecognitionErrorEvent extends Event {
    error: string;
  }
  