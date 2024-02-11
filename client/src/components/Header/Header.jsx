
import Search from './Search'
import Logo from './Logo'
import RightHeader from './RightHeader'

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex  justify-between items-center max-w-6xl mx-auto p-3">
        <Logo />
        <Search />
        <RightHeader />
      </div>
    </header>
  )
}

export default Header
