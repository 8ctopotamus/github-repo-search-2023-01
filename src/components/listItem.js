const ListItem = ({ description, full_name, html_url, stargazers_count }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start bg-dark text-light">
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          <a href={html_url} target="_blank">
            {full_name}
          </a>
        </div>
        {description}
      </div>
      <div>
        <span class="badge bg-primary rounded-pill">
          <i class="bi bi-star-fill"></i> {stargazers_count}
        </span>
      </div>
    </li>
  )
}

export default ListItem