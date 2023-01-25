import { useState } from "react";
import Navbar from "./components/navbar";
import SearchPage from './pages/search'
import SavedPage from './pages/saved'

function App() {
  const [view, setView] = useState('search')

  return (
    <>
      <Navbar view={view} setView={setView} />
      {view === 'search' 
        ? <SearchPage />
        : <SavedPage />}
    </>
  );
}

export default App;
