
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'


import EditorTopBar from "../components/EditorTopBar";
import EditorSidebar from "../components/EditorSidebar";
import UserPanel from "../components/UserPanel";

const TextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,
            
        ],
        content: '<p>Hello World!</p>',
    });

    if (!editor) return null;

    return (
        <section className="h-screen w-full bg-[#DBDCEC] grid grid-cols-[320px_1fr] grid-rows-[88px_1fr] overflow-hidden">

            <UserPanel />

            <EditorTopBar editor={editor} />

            <EditorSidebar />

            <main className="flex flex-col overflow-hidden">
                <div className="flex-1 overflow-auto flex justify-center pt-30 px-8 mt-20">
                    <div className="bg-white w-220 min-h-200 px-12 py-10 ml-40 border-2">
                        <EditorContent editor={editor}  className="prose max-w-none [&_.ProseMirror]:outline-none p-15"  />
                    </div>
                </div>
            </main>

        </section>
    );
}

export default TextEditor;