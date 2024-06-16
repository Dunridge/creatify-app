import { ISidebarVideoProps } from "../utils/interfaces/ISidebarVideoProps";

export default function SidebarVideo({ selectVideo, id, title, video }: ISidebarVideoProps) { 

    return (
        <div onClick={selectVideo} className="w-full px-[12px] py-[4px]">
            <div>{title}</div>
        </div>
    );
}
