import { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import { initialTracks } from "../utils/data/initialTracks";
import { IClip } from "../utils/interfaces/IClip";
import { ITimelineProps } from "../utils/interfaces/ITimelineProps";
import { ITrack } from "../utils/interfaces/ITrack";
import Track from "./Track";

export default function Timeline({ }: ITimelineProps) {
    const [tracks, setTracks] = useState<ITrack[]>(initialTracks);

    const updateClipSize = (clipId: string, width: number, height: number) => {
        setTracks(prevTracks => 
            prevTracks.map(track => ({
                ...track,
                clips: track.clips.map(clip => 
                    clip.id === clipId ? { ...clip, width, height } : clip
                ) as IClip[]
            }))
        );
    };

    const onDragEnd = (result: any) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        const sourceTrackIndex = tracks.findIndex(track => track.id.toString() === source.droppableId);
        const destinationTrackIndex = tracks.findIndex(track => track.id.toString() === destination.droppableId);

        const sourceTrack = Array.from(tracks[sourceTrackIndex].clips);
        const [movedClip] = sourceTrack.splice(source.index, 1);
        const destinationTrack = Array.from(tracks[destinationTrackIndex].clips);
        destinationTrack.splice(destination.index, 0, movedClip);

        const newTracks = Array.from(tracks);
        newTracks[sourceTrackIndex] = { ...tracks[sourceTrackIndex], clips: sourceTrack };
        newTracks[destinationTrackIndex] = { ...tracks[destinationTrackIndex], clips: destinationTrack };

        setTracks(newTracks);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="h-[800px]">
                {tracks.map((track: ITrack) => (
                    <Track key={track.id}
                        trackId={track.id.toString()}
                        clips={track.clips}
                        updateClipSize={updateClipSize} />
                ))}
            </div>
        </DragDropContext>
    );
}
