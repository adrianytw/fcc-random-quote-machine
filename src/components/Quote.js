import './Quote.css';

import { useSelector } from 'react-redux/es/exports';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getQuote } from '../features/quote/quoteSlice';

const Quote = () => {
    const dispatch = useDispatch();
    const { text, author, isLoading } = useSelector( store => store.quote )
  
    const tweet = 'https://twitter.com/intent/tweet?text=' + `"${text}"  - ${author}`
    useEffect( () => {
      dispatch(getQuote())
    }, [dispatch]);
  
    if (isLoading) {
      return (
        <div id="quote-box" className="loading">
          <h1>loading...</h1>
        </div>
      )
    }
    return (
        <div id="quote-box">
            <h2 id="text">{text}</h2>
            <h3 id="author">- {author}</h3>
            <div className="bottom-row">
                <a className="buttons sns-buttons" id="tweet-quote" href={tweet}>🐦</a>
                <button className="buttons" id="new-quote" onClick={() => dispatch(getQuote())}>🔃 fresh qwotie</button>
            </div>
        </div>
    )
}

export default Quote