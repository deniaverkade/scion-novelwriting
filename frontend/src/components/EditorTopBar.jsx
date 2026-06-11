
const EditorTopBar = ({ editor }) => {
    if (!editor) return null;

    return (
        <section className="w-[95%] z-50 ml-[10%] ">

            {/* Bar 1*/}
            <div className="bg-[#45454F] h-32">

            </div>

            {/* Bar 2 */}

            <div className="bg-[#BEBED4] h-10 flex items-center gap-2 px-3  border-[#8D8D9F]">

                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className="px-2 py-1 hover:bg-gray-300"
                >
                    B
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className="px-2 py-1 italic hover:bg-gray-300"
                >
                    I
                </button>

                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className="px-2 py-1 hover:bg-gray-300"
                >
                    H1
                </button>

                <button
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className="px-2 py-1 hover:bg-gray-300"
                >
                    • ---
                </button>

            </div>

        </section>
    );
}

export default EditorTopBar;