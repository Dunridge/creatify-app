import { IViewProps } from "../utils/interfaces/IViewProps";

export default function View({ selectedVideo }: IViewProps) {

    return (
        <div className="">
            <video key={selectedVideo.id} width="675" height="500" controls>
                <source src={selectedVideo.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}