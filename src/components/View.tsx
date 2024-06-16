import { IViewProps } from "../utils/interfaces/IViewProps";

export default function View({ selectedVideo }: IViewProps) {

    return (
        <div className="w-full min-h-[460px] py-[24px] flex-grow flex justify-center items-center">
            <video key={selectedVideo.id} className="max-h-[500px] min-h-[300px]" width="675" height="500" controls>
                <source src={selectedVideo.video} type="video/mp4" />
            </video>
        </div>
    );
}