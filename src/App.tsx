import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="w-full h-screen flex bg-primary text-white py-[20px]">
      <Sidebar/>
      <Editor/>
    </div>
  );
}

export default App;
