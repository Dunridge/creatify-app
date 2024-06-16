import Timeline from "./Timeline";
import View from "./View";

export default function Editor() {

    return (
        <div className="flex-grow flex flex-col justify-between h-full">
            <View/>
            <Timeline/>
        </div>
    );
}
