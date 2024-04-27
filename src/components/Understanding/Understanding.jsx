import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Understanding() {

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
                    />
                    <br />
                    <Button 
                    startIcon={<NavigateNextOutlinedIcon />} 
                    variant="contained" 
                    color='primary' 
                    data-testid="next">
                        Next</Button>
                </Stack>
           </Card>
        </div>
    )
}

export default Understanding;