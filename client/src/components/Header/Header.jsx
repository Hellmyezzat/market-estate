import Logo from './Logo'
import RightHeader from './RightHeader'
import SearchForm from './SearchForm'

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex  justify-between items-center max-w-6xl mx-auto p-3">
        <Logo />
        <SearchForm />
        <RightHeader />
      </div>
    </header>
  )
}

export default Header
