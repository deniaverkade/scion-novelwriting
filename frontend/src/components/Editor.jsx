import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Editor = () => {

const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    content: '<p>Hello World!</p>', // initial content
  })
    
    return ( 
    <div className="w-220 h-191 bg-white ml-[40%]">
         
      <EditorContent editor={editor} />

   
    </div> 
);
}
 
export default Editor;