import { ISidebarProps } from "../utils/interfaces/ISidebarProps";
import SidebarVideo from "./SidebarVideo";

export default function Sidebar({ selectVideo, videos }: ISidebarProps) {

    return (
        <div className="w-[356px] h-full px-[40px]">
            <div>Videos</div>
            { videos.map((video) => (
                <SidebarVideo key={video.id} {...video} selectVideo={() => selectVideo(video)} />
            ))}
        </div>
    );
}
