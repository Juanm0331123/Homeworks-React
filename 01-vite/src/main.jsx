import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowseRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowseRouter>

    </BrowseRouter>
  </Provider>
)