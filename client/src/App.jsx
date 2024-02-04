import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Profile, SignIn, SignUp } from './pages'
import { Header, PrivateRoute } from './components'
import CreateListing from './pages/CreateListing'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
