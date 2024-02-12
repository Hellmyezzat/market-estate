import { Results, SearchSideBar } from '../components/Search'

function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <SearchSideBar />
      <Results />
    </div>
  )
}

export default Search
