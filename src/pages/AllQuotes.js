import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = (props) => {
    
    const DUMMY_QUOTES = [
        {id: 'q1', author: 'Akhil', text: 'UI development is easy!'},
        {id: 'q2', author: 'Akhilesh', text: 'React is awesome!'}
    ];

    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;