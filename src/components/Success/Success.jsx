import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Card, CardContent, CardActions, Button, Stack, Typography} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
        dispatch({ type: 'RESET_STORE' });
    }

    return(
        <Box sx={{ display: 'inline-block', padding: 2 }}>
            <Card>
                <Stack direction="column" justifyContent="space-between" alignItems="center" color='primary.dark'>
                    <CardContent>
                        <Typography>Thank you for submitting feedback!</Typography>
                    </CardContent>
                    <CardActions>
                        <Button data-testid="next" startIcon={<RestartAltIcon />} variant="contained" onClick={() => {handleClick()}}>Restart</Button>
                    </CardActions>
                </Stack>
            </Card>
        </Box>
    )
}

export default Success;