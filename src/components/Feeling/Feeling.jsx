import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Feeling() {

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
                    />
                    <br />
                    <Button startIcon={<NavigateNextOutlinedIcon />} variant="contained" color='primary'>Next</Button>
                </Stack>
            </Card>
        </div>
    )
}

export default Feeling;