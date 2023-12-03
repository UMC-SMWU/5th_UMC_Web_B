import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdPage from '../../components/Ad/AdPage';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      axios
        .get('http://localhost:8000/user/payload', {
          headers: { Authorization: token },
        })
        .then((res) => {
          localStorage.setItem('id', res.data.result.id);
          dispatch({ type: 'user/loginUser', payload: res.data.result });
        })
        .catch((error) => alert(error.message));
    }
  }, []);

  return <AdPage />;
}
