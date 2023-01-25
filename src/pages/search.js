import { useState } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'
import Spinner from '../components/spinner'
import API from '../utils/api'

const SearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [term, setTerm] = useState('')
  const [repos, setRepos] = useState([])

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
        : <pre>{JSON.stringify(repos, null, 2)}</pre>}
    </Container>
  )
}

export default SearchPage