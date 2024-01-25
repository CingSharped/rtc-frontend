import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/'
import * as Pages from './pages'
import './App.css'
import DeckDisplay from './pages/DeckDisplay/index';

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Pages.Home />}/>
        <Route path='/dashboard' element={<Pages.Dashboard />}/>
        <Route path='/deckdisplay' element={<Pages.DeckDisplay />}/>
      </Route>
    </Routes>
  )
}

export default App
