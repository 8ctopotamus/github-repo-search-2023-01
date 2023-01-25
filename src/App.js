import { useState } from "react";
import Navbar from "./components/navbar";
import SearchPage from './pages/search'
import SavedPage from './pages/saved'

function App() {
  const [view, setView] = useState('search')

  return (
    <div className='bg-dark text-light vh-100 vw-100'>
      <Navbar view={view} setView={setView} />
      {view === 'search' 
        ? <SearchPage />
        : <SavedPage />}
    </div>
  );
}

export default App;
