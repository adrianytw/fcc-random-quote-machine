import {useSelector} from 'react-redux';
import { selectAllQuotes } from './quotesSlice';

const QuotesList = () => {
    const quotes = useSelector(selectAllQuotes)

    const renderedQuotes = quotes.map(quote => (
        <article>
            <h2>{quote.text}</h2>
            <h2>{quote.author}</h2>
        </article>
    ))
    return (
        <section>
            <h2>quotes</h2>
            {renderedQuotes}
        </section>
    )
}

export default QuotesList