import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Feeling() {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeeling = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: feeling });
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
                    onChange={(e) => {
                        setFeeling(e.target.value);
                    }}
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