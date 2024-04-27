import { Typography, Stack, Card, TextField, Button } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function Comments() {

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
                    />
                    <br />
                    <Button startIcon={<NavigateNextOutlinedIcon />} variant="contained" color='primary'>Next</Button>
                </Stack>
           </Card>
        </div>
    )
}

export default Comments;