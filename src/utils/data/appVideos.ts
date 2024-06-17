// @ts-ignore
import creatifyVideo from "../../assets/videos/creatify-video.mp4";
// @ts-ignore
import youTubeVideo from "../../assets/videos/youtube-video.mp4";
import youTubeVideoSnapshot from "../../assets/img/youtube-video.png";
import creatifyVideoSnapshot from "../../assets/img/creatify-video.png";
import { IVideo } from "../interfaces/IVideo";

// TODO: add an interface
export const appVideos: IVideo[] = [
    {
        id: "video-1",
        title: "Creatify",
        video: creatifyVideo,
        thumbnail: creatifyVideoSnapshot,
    },
    {
        id: "video-2",
        title: "YouTube",
        video: youTubeVideo,
        thumbnail: youTubeVideoSnapshot,
    },
];
