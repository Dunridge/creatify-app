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
                    className="bg-primary border p-4 mb-4 bg-white/[0.05]"
                    style={{ 
                        height: '84px',
                        backgroundColor: '#1e1e28'
                    }}
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
