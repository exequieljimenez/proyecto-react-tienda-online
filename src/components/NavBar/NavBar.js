import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem'}}>
            <Link to='/' className='titulo'>La Tabla</Link>
            <div className='navBar'>
                <Link to={'category/queso'} className='navBarElement'>Quesos</Link>
                <Link to={'category/embutido'} className='navBarElement'>Embutidos y Salazones</Link>
                <Link to={'category/vino'} className='navBarElement'>Vinos</Link>
                <Link to={'category/pan'} className='navBarElement'>Panes</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar