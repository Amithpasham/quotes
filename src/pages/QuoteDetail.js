import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Akhil', text: 'UI development is easy!'},
    {id: 'q2', author: 'Akhilesh', text: 'React is awesome!'}
];


const QuoteDetail = (props) => {
    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} 
            author={quote.author}></HighlightedQuote>
            <Route path={match.path} exact>
                <Link className="btn-first" to={`${match.url}/comments`}> 
                    Load Comments
                </Link>
            </Route>
            <Route path={`${match.url}/comments`}>
                <Comments></Comments>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;