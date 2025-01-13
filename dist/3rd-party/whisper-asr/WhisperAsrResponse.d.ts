export type WhisperAsrResponse = string | ASRResponse;
/**
 * Represents the response from an Automatic Speech Recognition (ASR) system.
 */
type ASRResponse = {
    /**
     * The complete transcription of the audio as a single string.
     */
    text: string;
    /**
     * An array of segments containing detailed information about each part of the transcription.
     */
    segments: {
        /**
         * A unique identifier for the segment.
         */
        id: number;
        /**
         * The reference or offset value for the segment.
         */
        seek: number;
        /**
         * The start time of the segment in seconds.
         */
        start: number;
        /**
         * The end time of the segment in seconds.
         */
        end: number;
        /**
         * The transcription text for this segment.
         */
        text: string;
        /**
         * An array of tokens representing the transcription in encoded form.
         */
        tokens: number[];
        /**
         * The decoding temperature used for the segment.
         */
        temperature: number;
        /**
         * The average log probability of the transcription.
         */
        avg_logprob: number;
        /**
         * The compression ratio applied to the segment's text.
         */
        compression_ratio: number;
        /**
         * The probability that no speech is detected in this segment.
         */
        no_speech_prob: number;
    }[];
    /**
     * The language code of the transcription (e.g., "en" for English).
     */
    language: string;
};
export {};
