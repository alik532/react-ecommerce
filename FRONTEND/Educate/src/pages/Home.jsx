/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Link } from 'react-router-dom'
import CourseItem from '../components/CourseItem'
import classes from '../styles/Home.module.css'

export class Home extends Component {


  render() {

	this.componentDidMount
	
	const { courses } = this.props
	return (
		<div className={classes.home}>
			<h1>Welcome to Educate</h1>
			<div className={classes.courseList}>
				{courses.map(course => 
					(<Link key={course.name} className={classes.course} to={`/course/${course.name}`}>
						<CourseItem course={course}/>	
					</Link>)
				)}
			</div>
		</div>
	)
  }
}

export default Home