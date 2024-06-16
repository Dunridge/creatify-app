import { Draggable } from "react-beautiful-dnd";
import { IClipProps } from "../utils/interfaces/IClipProps";

export default function Clip({ clip, index }: IClipProps) {

    return (
        // TODO: make each clip resizable 
        <Draggable draggableId={clip.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-2 mb-2 border rounded text-black cursor-grab"
                    style={{
                        userSelect: 'none',
                        ...provided.draggableProps.style,
                    }}
                >
                    {clip.title}
                </div>
            )}
        </Draggable>
    );
}
