import { IClip } from "./IClip";

export interface ITrack {
    id: string;
    title: string;
    clips: IClip[];
}