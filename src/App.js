import './App.css'
import axios from 'axios'
import routes from './routes'
import Header from './components/Header'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'
import GlobalStyle from './styles/globalStyle'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me').then(res => {
      console.log(res.data.user)
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  }, []) //wont work without dispatch


  return (
    <div className="App">
      <Header/>
      {routes}
      <GlobalStyle/>
    </div>
  );
}

export default App