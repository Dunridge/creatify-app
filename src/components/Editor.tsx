import { IEditorProps } from "../utils/interfaces/IEditorProps";
import Timeline from "./Timeline";
import View from "./View";

export default function Editor({ selectedVideo }: IEditorProps) {

    return (
        <div className="flex-grow flex flex-col justify-between h-full">
            <View selectedVideo={selectedVideo}/>
            <Timeline/>
        </div>
    );
}
