import './Quote.css';

import { useSelector } from 'react-redux/es/exports';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getQuote } from '../features/quote/quoteSlice';

const Quote = () => {
    const dispatch = useDispatch();
    const { text, author, isLoading } = useSelector( store => store.quote )
  
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
            <section>
                <h2 id="text">{text}</h2>
                <h3 id="author">{author}</h3>
                <button id="new-quote" onClick={() => dispatch(getQuote())}>fresh qwotie</button>
                <a id="tweet-quote" href='http://twitter.com/intent/tweet'>tweetah</a>
            </section>
        </div>
    )
}

export default Quote