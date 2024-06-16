import { Droppable } from "react-beautiful-dnd";
import { ITrackProps } from "../utils/interfaces/ITrackProps";
import Clip from "./Clip";

export default function Track({ trackId, clips }: ITrackProps) {
    // contain clips and then can be moved between different tracks

    return (
        // TODO: replace id generation with uuid 
        <Droppable droppableId={trackId.toString()}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="border p-4 mb-4"
                    style={{ minHeight: '100px', backgroundColor: '#f0f0f0' }}
                >
                    {clips.map((clip, index) => (
                        <Clip key={clip.id} clip={clip} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
