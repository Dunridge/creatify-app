import { useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Rnd } from 'react-rnd';
import { IClipProps } from '../utils/interfaces/IClipProps';

export default function Clip({ clip, index }: IClipProps) {
  const [isResizing, setIsResizing] = useState(false);
  const rndRef = useRef(null);

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleResizeStop = () => {
    setIsResizing(false);
  };

  return (
    <Draggable key={clip.id.toString()} draggableId={clip.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            marginBottom: '8px',
            userSelect: 'none',
            pointerEvents: isResizing ? 'none' : 'auto',
          }}
        >
          <Rnd
            ref={rndRef}
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
            }}
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
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
          >
            <div
              {...provided.dragHandleProps}
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
