import {Link} from 'react-router-dom';
const Header = () => {

  return( 
    <header>
      <Link to='/' className='links'>Home</Link>
      <Link to='/auth' className='links'>Auth</Link>
      <Link to='/about' className='links'> About </Link>
      <Link to='/products' className='links'>Products</Link>
      <Link to='/cart' className='links'>Cart</Link>
      </header>  
  )
}

export default Header