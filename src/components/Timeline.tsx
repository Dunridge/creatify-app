import { useState } from "react";
import { ITimelineProps } from "../utils/interfaces/ITimelineProps";
import { ITrack } from "../utils/interfaces/ITrack";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Track from "./Track";
import { initialTracks } from "../utils/data/initialTracks";

export default function Timeline({ }: ITimelineProps) {
    const [tracks, setTracks] = useState(initialTracks);

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

    // TODO: here take the duration of the selected video 
    // TODO: add the dragging logic 
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="h-[800px]">
                {tracks.map((track: ITrack) => (
                    <Track key={track.id}
                        trackId={track.id.toString()}
                        clips={track.clips} />
                ))}
            </div>
        </DragDropContext>
    );
}