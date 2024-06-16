import { IClip } from "./IClip";

export interface ITrackProps {
    trackId: string;
    clips: IClip[];
    updateClipSize: (clipId: string, width: number, height: number) => void;
}
