import { useSelector } from 'react-redux';

function Review() {
    const feedback = useSelector(store => store.feedback);

    return(
        <>
        {feedback.map((entry, i) => 
            <li key={i}> {entry}</li>
        )}
        </>
    )
}

export default Review;