import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { useState } from "react";
import { appVideos } from "./utils/data/appVideos";
import { IVideo } from "./utils/interfaces/IVideo";

function App() {
  const [selectedVideo, setSelectedVideo] = useState<IVideo>(appVideos[0]);
  const [videos, setVideos] = useState<IVideo[]>(appVideos);

  const selectVideo = (video: IVideo) => {
    debugger;
    setSelectedVideo(video);
  }

  return (
    <div className="w-full h-screen flex bg-primary text-white py-[20px]">
      <Sidebar selectVideo={selectVideo} videos={videos}/>
      <Editor selectedVideo={selectedVideo}/>
    </div>
  );
}

export default App;
