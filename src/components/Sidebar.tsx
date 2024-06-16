import { ISidebarProps } from "../utils/interfaces/ISidebarProps";
import SidebarVideo from "./SidebarVideo";

export default function Sidebar({ selectVideo, videos }: ISidebarProps) {

    return (
        <div className="w-[310px] min-w-[310px] max-w-[310px] flex-grow justify-between bg-white/[0.05] backdrop-blur-sm transition-all duration-300 ease-in-out flex-col gap-2 overflow-hidden rounded-2xl">

            <div>Videos</div>
            {videos.map((video) => (
                <SidebarVideo key={video.id} {...video} selectVideo={() => selectVideo(video)} />
            ))}

        </div>
    );
}
