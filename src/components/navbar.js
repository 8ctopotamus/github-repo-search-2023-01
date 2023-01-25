const Navbar = ({ view, setView }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Repos</a>        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
              onClick={() => setView('search')}
              className={`nav-link ${view === 'search' ? 'active text-white' : ''}`} 
              href="#" 
            >
              <i className="bi bi-search"></i> Search
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('saved')}
              className={`nav-link ${view === 'saved' ? 'active text-white' : ''}`} 
              href="#" 
            >
              <i className="bi bi-bookmark-fill"></i> Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar