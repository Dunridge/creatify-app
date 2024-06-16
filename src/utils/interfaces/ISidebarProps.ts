import { IVideo } from "./IVideo";

export interface ISidebarProps {
    selectVideo: (video: IVideo) => void;
    videos: IVideo[];
}
