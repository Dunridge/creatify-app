import { IClip } from "./IClip";

export interface IClipProps {
    clip: IClip;
    index: number;
    updateClipSize: (id: string, width: number, height: number) => void;
}