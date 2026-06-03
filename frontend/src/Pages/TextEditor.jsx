import Editor from "../components/Editor";
import EditorTopBar from "../components/EditorTopBar";
import EditorSidebar from "../components/EditorSidebar";
import UserPanel from "../components/UserPanel";

const TextEditor = () => {
    return (
        <section className="bg-[#DBDCEC] w-full h-full absolute">

            {/* User panel */}
            
            <UserPanel/>

            {/* Side bar */}

            <EditorSidebar />

            {/* Top bar */}

            <EditorTopBar />

            {/* Editor */}

            <Editor/>

            
        </section>
    );
}

export default TextEditor;