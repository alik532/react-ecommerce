/* eslint-disable react/prop-types */
import classes from '../styles/SideBar.module.css'
import { Link } from 'react-router-dom'

const SideBar = ({courses, notes}) => {

	const readCourses = courses.filter(course => course.isRead == true)

  return (
	<div className={classes.sidebar}>
		<div className={classes.progress}>
			<h1>Progress: {(readCourses.length / courses.length * 100).toFixed(0)}%</h1>
			<div className={classes.progressBar}>
				<div className={classes.fullness} style={{width: `${readCourses.length / courses.length * 100}%`}}></div>
			</div>
			<div className={classes.stat}>Read Articles: {readCourses.length}</div>
		</div>
		<hr />
		<div className={classes.menu}>
			<Link to='/notes' className={classes.button}>My Notes <h4>{notes.length}</h4></Link>
		</div>
	</div>
  )
}

export default SideBar