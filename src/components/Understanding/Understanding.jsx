import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addUnderstanding = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: understanding });
        history.push('/support')
    }

    return(
        <div>
            <Card>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" sx={{ padding: 1 }}>
                    <Typography variant="h6" color="primary.dark">How well are you understanding the content?</Typography>
                    <br />
                    <TextField 
                    id="understanding"
                    label="Understanding"
                    type="number"
                    data-testid="input"
                    onChange={(e) => {
                        setUnderstanding(e.target.value);
                    }}
                    />
                    <br />
                    <Button 
                    startIcon={<NavigateNextOutlinedIcon />} 
                    variant="contained" 
                    color='primary' 
                    data-testid="next"
                    onClick={addUnderstanding}>
                        Next</Button>
                </Stack>
           </Card>
        </div>
    )
}

export default Understanding;