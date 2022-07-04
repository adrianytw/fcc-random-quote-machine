import { useSelector } from 'react-redux';

const Quote = () => {
    const { text, author } = useSelector( store => store.quote )

    return (
        <section>
            <h2>{text}</h2>
            <h3>{author}</h3>
        </section>

    )
}

export default Quote