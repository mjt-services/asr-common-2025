import type { WhisperAsrRequest } from "./3rd-party/whisper-asr/WhisperAsrRequest";

export type AsrConnectionMap = {
  "asr.transcribe": {
    request: {
      options?: Partial<{}>;
      body: WhisperAsrRequest;
    };
    response: {};
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
