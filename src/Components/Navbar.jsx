import { Link } from "react-router-dom";
import './assets/style.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='user'>Calendar</Link>
    </nav>
  )
}