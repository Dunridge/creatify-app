import { useState } from "react";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
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

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            const trackIndex = tracks.findIndex(track => track.id === source.droppableId);
            const track = Array.from(tracks[trackIndex].clips);
            const [movedClip] = track.splice(source.index, 1);
            track.splice(destination.index, 0, movedClip);

            const newTracks = Array.from(tracks);
            newTracks[trackIndex] = { ...tracks[trackIndex], clips: track };

            setTracks(newTracks);
        } else {
            const sourceTrackIndex = tracks.findIndex(track => track.id === source.droppableId);
            const destinationTrackIndex = tracks.findIndex(track => track.id === destination.droppableId);

            const sourceTrack = Array.from(tracks[sourceTrackIndex].clips);
            const [movedClip] = sourceTrack.splice(source.index, 1);
            const destinationTrack = Array.from(tracks[destinationTrackIndex].clips);
            destinationTrack.splice(destination.index, 0, movedClip);

            const newTracks = Array.from(tracks);
            newTracks[sourceTrackIndex] = { ...tracks[sourceTrackIndex], clips: sourceTrack };
            newTracks[destinationTrackIndex] = { ...tracks[destinationTrackIndex], clips: destinationTrack };

            setTracks(newTracks);
        }
    };


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="h-[800px] bg-white/[0.05]">
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
