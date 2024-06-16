import { ISidebarVideoProps } from "../utils/interfaces/ISidebarVideoProps";

export default function SidebarVideo({ selectVideo, id, title, video }: ISidebarVideoProps) { 

    return (
        <div onClick={selectVideo} className="w-full px-[16px] py-[18px] cursor-pointer hover:bg-white/[0.05] rounded-md">
            <div>{title}</div>
        </div>
    );
}
