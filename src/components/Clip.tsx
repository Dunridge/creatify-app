import { Draggable } from "react-beautiful-dnd";
import { IClipProps } from "../utils/interfaces/IClipProps";
import { Rnd } from "react-rnd";

export default function Clip({ clip, index }: IClipProps) {
    return (
        <Draggable draggableId={clip.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        marginBottom: '8px',
                        userSelect: 'none',
                    }}
                >
                    <Rnd
                        default={{
                            x: 0,
                            y: 0,
                            width: 200,
                            height: 50,
                        }}
                        minWidth={100}
                        minHeight={50}
                        bounds="parent"
                        className="bg-white p-2 mb-2 border rounded text-black"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto', // Ensure pointer events are enabled
                        }}
                        disableDragging={true} // Disable Rnd's dragging
                        enableResizing={{
                            top: false,
                            right: true,
                            bottom: false,
                            left: true,
                            topRight: false,
                            bottomRight: false,
                            bottomLeft: false,
                            topLeft: false,
                        }}
                    >
                        <div
                            className="cursor-grab"
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {clip.title}
                        </div>
                    </Rnd>
                </div>
            )}
        </Draggable>
    );
}
