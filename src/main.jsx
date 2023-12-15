import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import './index.css';

/* `ReactDOM.createRoot(document.getElementById('root')).render()` is rendering the root component of
the React application. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
