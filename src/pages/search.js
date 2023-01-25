import { useState, useEffect } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'
import Spinner from '../components/spinner'
import List from '../components/list'
import ListItem from '../components/listItem'
import API from '../utils/api'
import { lsKey } from '../utils/constants'

const SearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [term, setTerm] = useState('react')
  const [repos, setRepos] = useState([])
  const [savedRepos, setSavedRepos] = useState([])
  
  useEffect(() => {
    loadSavedRepos()
  }, [])

  const loadSavedRepos = () => {
    const lsRepos = JSON.parse(localStorage.getItem(lsKey)) || []
    setSavedRepos(lsRepos)
  }

  const searchRepos = async () => {
    if (term) {
      try {
        setLoading(true)
        const response = await API.searchRepos(term)        
        setRepos(response.data.items)
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }

  const toggleSaved = repo => {
    const foundRepo = savedRepos.find(savedRepo => savedRepo.id === repo.id)
    let updatedSavedRepos
    // if is in saved array
    if (foundRepo) {
      // remove repo from list
      updatedSavedRepos = savedRepos.filter(savedRepo => savedRepo.id !== repo.id)
    } else {
      // add repo to list
      updatedSavedRepos = [...savedRepos, repo]
    }
    localStorage.setItem(lsKey, JSON.stringify(updatedSavedRepos))
    loadSavedRepos()
  }
  
  return (
    <Container>
      <h1 className='mt-3'>Search Github Repos: {term}</h1>
      <SearchForm 
        term={term} 
        setTerm={setTerm}
        onSubmit={searchRepos} 
      />
      {loading 
        ? <Spinner />
        : <List>
            {repos.map(repo => {
              const saved = savedRepos.find(savedRepo => savedRepo.id === repo.id)
              return (
                <ListItem 
                  repo={repo} 
                  saved={saved}
                  toggleSaved={toggleSaved}
                  key={repo.html_url} 
                />
              )
            })}
          </List>
      }
    </Container>
  )
}

export default SearchPage