import { useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import Quill from 'quill';
import './App.css'
//tiptap imports
//import { useEditor, EditorContent } from '@tiptap/react'
//import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
//import StarterKit from '@tiptap/starter-kit'


function App() {

   useEffect(() => {
    fetch('http://localhost:4000/api/workouts')
      .then(res => res.json())
      .then(data => console.log('Data van backend:', data))
      .catch(err => console.error('Geen verbinding:', err));
  }, []);


  return (
    <>

    </>
  )
}

export default App
