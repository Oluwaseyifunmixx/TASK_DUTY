
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import MyTask from './pages/MyTask'
import NewTask from './pages/NewTask'
import EditTask from './pages/EditTask'

function App() {

  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
      <Route path ="/tasks" element ={<MyTask/>} />
      <Route path ="/tasks/new" element ={<NewTask/>} />
      <Route path ="/tasks/edit/:id" element={<EditTask/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
