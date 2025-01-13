import type { WhisperAsrRequest } from "./3rd-party/whisper-asr/WhisperAsrRequest";
import type { WhisperAsrResponse } from "./3rd-party/whisper-asr/WhisperAsrResponse";

export type AsrConnectionMap = {
  "asr.transcribe": {
    request: {
      options?: Partial<{}>;
      body: WhisperAsrRequest;
    };
    response: WhisperAsrResponse;
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
