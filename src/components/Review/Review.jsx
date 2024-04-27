import { useSelector } from 'react-redux';
import { Card, CardContent, Button, Typography} from '@mui/material';

function Review() {
    const feedback = useSelector(store => store.feedback);

    return(
        <Card>
            <CardContent>
                <Typography>How you're feeling: {feedback[0]}</Typography>
                <Typography>How much you're understanding: {feedback[1]}</Typography>
                <Typography>How supported you feel: {feedback[2]}</Typography>
                <Typography>Your comments: {feedback[3]}</Typography>
            </CardContent>
        </Card>
    )
}

export default Review;