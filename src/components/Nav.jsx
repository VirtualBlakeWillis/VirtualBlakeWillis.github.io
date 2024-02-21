import { hamburger } from '../assets';
import './index.css'
const Nav = () => {

  return (
    <section id='nav'>
      <div className="container">
        <div className="logo">
          <p>vbw</p>
        </div>
        <div className="hamburger">
          <img src={hamburger} alt="hamburger menu" />
        </div>
      </div>
    </section>
  )
}

export default Nav