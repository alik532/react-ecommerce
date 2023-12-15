/* eslint-disable react/prop-types */
import classes from '../styles/Course.module.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import { courses } from '../data/courses';

const Course = ({setIsRead, addNote}) => {

	const { id } = useParams()

	const [data, setData] = useState(null)
	console.log(id)

	const nav = useNavigate()

	useEffect(() => {
		const fetchCourse = async (id) => {
			const options = {
				method: 'GET',
				url: 'https://wiki-briefs.p.rapidapi.com/search',
				params: {
					q: id,
					topk: 16,
				},
				headers: {
					'X-RapidAPI-Key': '21984204b7msh3267a67b6624b0ep1c87b2jsn6053aef7f9e6',
					'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
				}
			};
			
			const response = await axios.request(options)
			setData(response.data)
		}
		fetchCourse(id)
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const [selectedText, setSelectedText] = useState('');
	const [showButton, setShowButton] = useState(false);
  
	useEffect(() => {
		document.addEventListener('selectionchange', handleSelectionChange);
		return () => {
			document.removeEventListener('selectionchange', handleSelectionChange);
		};
	}, []);

	const handleSelectionChange = () => {
		const selection = window.getSelection().toString();
		setSelectedText(selection);
		setShowButton(!!selection);
	};
	
	const makeNote = () => {
		console.log('Selected Text:', selectedText);
		addNote(selectedText)
		setSelectedText('')
		setShowButton(false)
	};

	console.log(data)
	if (data == null) {
		return <div className={classes.loader}></div>
	}
  return (
	<div className={classes.course}>
		{showButton && <button className={classes.makeNoteButton} onClick={makeNote}>Make note</button>}
		<div className={classes.header}>
			<button className={classes.back} onClick={() => nav(-1)}>
				<IoMdArrowBack className={classes.icon}/>
			</button>
		</div>
		<div className={classes.content}>
			<div className={classes.texts}>
				<h2 className={classes.title}>
					{data.title ? data.title : "No title"}
				</h2>
				<div className={classes.summary}>
					{data?.summary.map((par, indx) =>
						<div key={indx} className={classes.sentence}>
							{par}
						</div>
					)}
				</div>
			</div>
			<hr />
			{data.image && <div className={classes.imgContainer}>
				<img src={data.image} className={classes.img} alt="" />
				<a href={data?.url}>Sourse <IoMdArrowForward className={classes.icon}/></a>
			</div>}
		</div>
		<button className={classes.button} onClick={() => {setIsRead(courses.find(course => course.name == id).id);nav('/')}}>Mark as read</button>
	</div>
  )
}

export default Course