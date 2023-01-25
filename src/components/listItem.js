import Button from './button'

const ListItem = ({ repo, saved = false, toggleSaved }) => {
  const { description, full_name, html_url, stargazers_count, owner } = repo
  
  const btnClass = saved ? 'btn-success' : 'btn-outline-light'

  const icon = saved 
    ? <i className="bi bi-bookmark-check-fill"></i> 
    : <i className="bi bi-bookmark"></i> 

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start bg-dark text-light">
      <img src={owner.avatar_url} style={{ width: 75, height: 'auto' }} />
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <a href={html_url} target="_blank">
            {full_name} <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
        {description}<br/>
        <span className="badge bg-primary rounded-pill">
          <i className="bi bi-star-fill"></i> {stargazers_count}
        </span>
      </div>

      <Button 
        onClick={() => toggleSaved(repo)}
        className={btnClass}
      >
        {icon}
      </Button>
      
    </li>
  )
}

export default ListItem