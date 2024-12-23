import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './app.css'

function App() {

  return (
    <>
      <h1 className='text-2xl bg-green text-white'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
