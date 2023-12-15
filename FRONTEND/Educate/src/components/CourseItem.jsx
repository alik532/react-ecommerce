import classes from '../styles/CourseItem.module.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import { IoRocketSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const CourseItem = (props) => {

	// eslint-disable-next-line react/prop-types
	const {name, img, description, isRead} = props.course

  return (
	<div className={classes.item}>
		<div className={classes.img} style={{backgroundImage: `url(${img})`}}></div>
		<div className={classes.info}>
			<h2 className={classes.name}>{name}</h2>
			<h4 className={classes.desc}>{description}</h4>
			{isRead ? <div className={classes.read}>Marked as read</div> : <Button className={classes.button}>Explore<IoRocketSharp className={classes.icon} size={26}/></Button>}
		</div>
	</div>
  )
}

export default CourseItem