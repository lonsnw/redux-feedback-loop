import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Support() {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addSupport = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: support });
        history.push('/comments')
    }

    return(
        <div>
            <Card>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" sx={{ padding: 1 }}>
                    <Typography variant="h6" color="primary.dark">How well are you being supported?</Typography>
                    <br />
                    <TextField
                    id="support"
                    label="Support"
                    type="number"
                    data-testid="input"
                    onChange={(e) => {
                        setSupport(e.target.value);
                    }}
                    />
                    <br />
                    <Button 
                    startIcon={<NavigateNextOutlinedIcon />} 
                    variant="contained" 
                    color='primary' 
                    data-testid="next"
                    onClick={addSupport}>
                        Next</Button>
                </Stack>
           </Card>
        </div>
    )
}

export default Support;