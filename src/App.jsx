import './App.css'
import Footer from './components/footer/Footer'	
import TaskList from './components/task-list/TaskList'

function App() {
  
  return (
    <div className="App">
      <h1 >To do list</h1>
      <TaskList />
      
      <Footer />
    </div>
  )
}

export default App
