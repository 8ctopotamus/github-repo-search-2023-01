import { useState, useEffect } from 'react'
import Container from '../components/container'
import List from '../components/list'
import ListItem from '../components/listItem'
import { lsKey } from '../utils/constants'

const SavedPage = () => {
  const [savedRepos, setSavedRepos] = useState([])

  useEffect(() => {
    loadSavedRepos()
  }, [])

  const loadSavedRepos = () => {
    const lsRepos = JSON.parse(localStorage.getItem(lsKey)) || []
    setSavedRepos(lsRepos)
  }

  const toggleSaved = repo => {
    const updatedSavedRepos = savedRepos.filter(savedRepo => savedRepo.id !== repo.id)
    localStorage.setItem(lsKey, JSON.stringify(updatedSavedRepos))
    loadSavedRepos()
  }

  return (
    <Container>
      <h1 className='mt-3'>Saved Repos</h1>
      {savedRepos.length === 0 ? (
        <p className='alert alert-warning'>You don't have any saved repos!</p>
      ) : (
        <List>
          {savedRepos.map(repo => {
            return (
              <ListItem 
                repo={repo} 
                saved={true}
                toggleSaved={toggleSaved}
                key={repo.html_url} 
              />
            )
          })}
        </List>
      )}
    </Container>
  )
}

export default SavedPage