import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { ITrackProps } from "../utils/interfaces/ITrackProps";
import Clip from "./Clip";

export default function Track({ trackId, clips, updateClipSize }: ITrackProps) {
    return (
        <Droppable droppableId={trackId.toString()}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="border p-4 mb-4"
                    style={{ minHeight: '100px', backgroundColor: '#f0f0f0' }}
                >
                    {clips.map((clip, index) => (
                        <Clip key={clip.id} clip={clip} index={index} updateClipSize={updateClipSize} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
