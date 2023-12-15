/* eslint-disable react/prop-types */
import classes from '../styles/Notes.module.css'
import { useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const Notes = ({notes, deleteNote, addNote}) => {

	const nav = useNavigate()

	const [newNote, setNewNote] = useState('')

  return (
	<div className={classes.notes}>
			<button className={classes.back} onClick={() => nav('/')}>
				<IoMdArrowBack className={classes.icon}/>
			</button>
		<h2 className={classes.title}>My Notes</h2>	
		<div className={classes.notesList}>
			{notes.map(note => 
				<p className={classes.note} key={note}>{note}<button onClick={() => deleteNote(note)} className={classes.deleteNote}><RiDeleteBin6Fill className={classes.icon}/></button></p>	
			)}
		</div>
		<div className={classes.addNote}>
			<input value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder='Add new note...' type="text" className={classes.input}/>
			<button onClick={() => {newNote.length ? addNote(newNote) : alert("Note is empty");setNewNote('')}} className={classes.addButton}>+</button>
		</div>
	</div>
  )
}

export default Notes