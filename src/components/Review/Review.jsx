import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Card, CardContent, CardActions, Button, Stack, Typography} from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';

function Review() {
    const feedback = useSelector(store => store.feedback);
    const history = useHistory();

    let dataToSend = {
        feeling: feedback[0],
        understanding: feedback[1],
        support: feedback[2],
        comments: feedback[3],
    }

    const handleClick = () => {
        axios.post('/api/feedback', dataToSend).then((response) => {
            history.push('/success')
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong submitting your feedback!');
        })
    }

    return(
        <Box sx={{ display: 'inline-block', padding: 2 }}>
            <Card>
                <Stack direction="column" justifyContent="space-between" alignItems="center" color='primary.dark'>
                    <CardContent>
                        <Typography>How you're feeling: {feedback[0]}</Typography>
                        <Typography>How much you're understanding: {feedback[1]}</Typography>
                        <Typography>How supported you feel: {feedback[2]}</Typography>
                        <Typography>Your comments: {feedback[3]}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button data-testid="next" startIcon={<ChecklistIcon />} variant="contained" onClick={() => {handleClick()}}>Submit</Button>
                    </CardActions>
                </Stack>
            </Card>
        </Box>
    )
}

export default Review;