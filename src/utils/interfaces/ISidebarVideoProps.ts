import { IVideo } from "./IVideo";

export interface ISidebarVideoProps extends IVideo {
    selectVideo: () => void;
}