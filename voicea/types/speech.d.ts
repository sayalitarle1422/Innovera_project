export {};

declare global {
  interface Window {
    // webkitSpeechRecognition: typeof SpeechRecognition;
    SpeechRecognition: typeof SpeechRecognition;
  }

  // var webkitSpeechRecognition: typeof SpeechRecognition;
  var SpeechRecognition: typeof SpeechRecognition;

  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: any) => void;
    onend: () => void;
    start(): void;
    stop(): void;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    length: number;
  }

  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
    length: number;
    isFinal: boolean;
  }

  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }
}
// Add this to VoiceNoteTaker.tsx or a global types file
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onstart: (() => void) | null;
  onend: (() => void) | null;
}
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    // webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
const recognition = new SpeechRecognition() as SpeechRecognition & {
  onstart: () => void;
  onend: () => void;
};
