import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Feeling() {
    const [feedback, setFeedback] = useState({ feeling: 0, understanding: 0, support: 0, comments: '' });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelings = (e) => {
        setFeedback({
            ...feedback,
            feeling: e.target.value,
        });
    }

    const addFeeling = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: feedback });
        history.push('/understanding')
    }

    return(
        <div>
            <Card>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" sx={{ padding: 1 }}>
                    <Typography variant="h6" color="primary.dark">How are you feeling today?</Typography>
                    <br />
                    <TextField
                    id="feeling"
                    label="Feeling"
                    type="number"
                    data-testid="input"
                    onChange={handleFeelings}
                    />
                    <br />
                    <Button 
                    startIcon={<NavigateNextOutlinedIcon />} 
                    variant="contained" 
                    color='primary' 
                    data-testid="next"
                    onClick={addFeeling}>
                        Next</Button>
                </Stack>
            </Card>
        </div>
    )
}

export default Feeling;