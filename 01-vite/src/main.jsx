import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Registro } from './components/Registro'
import { Login } from './components/Login'
import Upload from './components/Upload'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Registro />
      <Login />
      <Upload />
    </BrowserRouter>
  </Provider>
)