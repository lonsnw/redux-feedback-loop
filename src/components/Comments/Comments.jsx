import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Comments() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addComments = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: comments });
        history.push('/review')
    }
    
    return(
        <div>
            <Card>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" sx={{ padding: 1 }}>
                    <Typography variant="h6" color="primary.dark">Are there any comments that you want to leave?</Typography>
                    <br />
                    <TextField
                    fullWidth
                    id="comments"
                    label="Comments"
                    data-testid="input"
                    onChange={(e) => {
                        setComments(e.target.value);
                    }}
                    />
                    <br />
                    <Button 
                    startIcon={<NavigateNextOutlinedIcon />} 
                    variant="contained" 
                    color='primary' 
                    data-testid="next"
                    onClick={addComments}>
                        Next</Button>
                </Stack>
           </Card>
        </div>
    )
}

export default Comments;