// import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

import { getQuote } from './features/quote/quoteSlice';
const App = () => {
  const { isLoading } = useSelector( (store) => store.quote )
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getQuote())
  }, [])
  
  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>h1 title</h1>
      <Quote />
    </div>
  );
}

export default App;
