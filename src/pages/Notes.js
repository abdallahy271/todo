import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import NoteTaker from '../components/NoteTaker'
import SideBar from '../components/SideBar'
import './Notes.css'
import Header from '../components/Header.js'

function Notes() {
    const [ notes, setNotes ] = useState(JSON.parse(localStorage.notes) || [])
    const [ activeNote, setActiveNote ] = useState(false)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))


    }, [ notes ])
    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: 'Untitled Note',
            body: '',
            lastModified: Date.now()
        }
        setNotes([newNote, ...notes])
    }

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote){
                return updatedNote
            }
            return note
        })
        setNotes(updatedNotesArray)
    }

    const onDeleteNote = ( idToDelete ) => {
        setNotes(notes.filter((note) => note.id !== idToDelete))
    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote)
    }
    return (
        <>
        <Header />
        <div className='Notes'>
            <SideBar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <NoteTaker activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
        </div>
        </>
    )
}

export default Notes
