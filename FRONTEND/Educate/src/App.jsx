import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import Course from './pages/Course'
import { useState } from 'react'
import { courses as coursesData } from './data/courses'
import Notes from './pages/Notes'

function App() {

  const [courses, setCourses] = useState(coursesData)
  const [notes, setNotes] = useState([])

  const setCourseIsRead = (id) => {
    setCourses(prev => prev.map(course => course.id == id ? {...course, isRead: true} : course))
  }

  return (
    <div className='App'>
      <BrowserRouter>
      <SideBar courses={courses} notes={notes}/>
        <Routes>
          <Route path='/' element={<Home courses={courses}/>}/>
          <Route path='/course/:id' element={<Course setIsRead={(id) => setCourseIsRead(id)} addNote={(note) => setNotes(prev => [...prev, note])}/>}/>
          <Route path='/notes' element={<Notes addNote={(note) => setNotes(prev => [...prev, note])} notes={notes} deleteNote={(note) => setNotes(prev => prev.filter(pnote => pnote != note))}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
