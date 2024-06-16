import { ISidebarProps } from "../utils/interfaces/ISidebarProps";
import SidebarVideo from "./SidebarVideo";

export default function Sidebar({ selectVideo, videos }: ISidebarProps) {

    return (
        <div className="w-[310px] px-[24px] min-w-[310px] max-w-[310px] flex-grow justify-between bg-white/[0.05] backdrop-blur-sm transition-all flex-col gap-2 overflow-hidden">
            <div className="text-4xl my-[32px]">Videos</div>

            <div className="flex flex-col gap-[28px]">
                {videos.map((video) => (
                    <SidebarVideo key={video.id} {...video} selectVideo={() => selectVideo(video)} />
                ))}
            </div>
        </div>
    );
}
