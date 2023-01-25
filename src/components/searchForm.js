import Row from '../components/row'
import Input from '../components/input'
import Button from '../components/button'

const SearchForm = ({ term, setTerm, onSubmit }) => {
  
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }
  
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <Row>
        <div className="input-group input-group-lg">
          <Input 
            name="search"
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="form-control bg-dark text-light"
            placeholder="Search repos by keyword"
            type="search" 
          />
          <Button className="btn-success" disabled={!term}>Search</Button>
        </div>      
      </Row>
    </form>
  )
}

export default SearchForm