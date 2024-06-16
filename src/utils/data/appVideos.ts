

// @ts-ignore
import creatifyVideo from "../../assets/videos/creatify-video.mp4";
// @ts-ignore
import youTubeVideo from "../../assets/videos/youtube-video.mp4";
import { IVideo } from "../interfaces/IVideo";


// TODO: add an interface
export const appVideos: IVideo[] = [
    {
        id: 1,
        title: "Creatify",
        video: creatifyVideo
    },
    {
        id: 2,
        title: "YouTube",
        video: youTubeVideo
    },
];
