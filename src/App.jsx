import './App.css'
import DarkModeToggle from './DarkModeToggle';

function App() {


  return (
  <div className='p-4 text-black bg-white min-h-screen dark:bg-gray-900 dark:text-white'>
    <DarkModeToggle />
    <h1 className='text 2x1'>Welcome To Dark Mode</h1>
    <p>A simple darkmode using tailwind</p>

  </div>
  )
}

export default App
