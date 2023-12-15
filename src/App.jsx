import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { user_token } from './store/actions/userActions';
import router from './router/router';
import apiUrl from './api';
import './App.css';

/**
 * The App component is a React component that dispatches a user_token action if a token is present in
 * local storage.
 * @returns The App component is returning a RouterProvider component with a prop of router.
 */
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let url = `${apiUrl}/auth/token`;
    let token = localStorage.getItem('token');
    if(token) {
      let configs = {headers:{'Authorization': `Bearer ${token}`}}
        axios.post(url, null, configs)
          .then(response => dispatch(user_token(response.data.user)))
          .catch(err => console.log(err))
    }
  },[dispatch])

  return (
    <RouterProvider router={router} />
  )
}

export default App