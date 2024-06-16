import { ITrack } from "../interfaces/ITrack";
import { v4 as uuid } from 'uuid';

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
            }
        ],
    },
];
