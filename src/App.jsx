import './App.css'
import Calendar from './components/Calendar'
import { useEffect } from 'react'

function App() {

  const historialDeEventos = Array.from({ length: 30 }, () => ({ value: [] }))

  useEffect(() => {
    const calendarDataString = JSON.stringify(historialDeEventos);
    localStorage.setItem('calendarData',calendarDataString)
  },[])

  return (
    <>
      <Calendar/>
    </>
  )
}

export default App
