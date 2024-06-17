import { ITrack } from "../interfaces/ITrack";
import { v4 as uuid } from 'uuid';

// @ts-ignore
import creatifyVideo from "../../assets/videos/creatify-video.mp4";
// @ts-ignore
import youTubeVideo from "../../assets/videos/youtube-video.mp4";
import { IVideo } from "../interfaces/IVideo";


// initial tracks that are dropped from the sidebar are supposed to be taking up 100% of their duration
export const initialTracks: ITrack[] = [
    {
        id: uuid(),
        title: "Track 1",
        clips: [
            {
                id: uuid(),
                title: "Clip 1",
                width: 200,
                height: 50,
                videoId: 'video-1'
            }
        ],
    },
    {
        id: uuid(),
        title: "Track 2",
        clips: [
            {
                id: uuid(),
                title: "Clip 2",
                width: 200,
                height: 50,
                videoId: 'video-2'
            }
        ],
    },
];
