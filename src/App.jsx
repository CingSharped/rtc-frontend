import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/'
import * as Pages from './pages'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />} />
        <Route path="/dashboard" element={<Pages.Dashboard />} />
        <Route path="/deckdisplay" element={<Pages.DeckDisplay />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.Signup />} />
        <Route path="/cardsearch" element={<Pages.CardSearch />} />
        <Route path="/profile" element={<Pages.Profile />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/support" element={<Pages.Support />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
