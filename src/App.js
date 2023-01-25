import { useState } from "react";
import Navbar from "./components/navbar";
import SearchPage from './pages/search'
import SavedPage from './pages/saved'

function App() {
  const [view, setView] = useState('saved')

  const renderView = () => {
    if (view === 'saved')
      return <SavedPage />
    else if (view === 'search') {
      return <SearchPage />
    }
    return 'No matching view found'
  }

  return (
    <>
      <Navbar view={view} setView={setView} />
      { renderView() }
    </>
  );
}

export default App;
