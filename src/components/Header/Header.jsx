import AppBar from '@mui/material/AppBar';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Header() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
  }
    return(
        <AppBar position="static" sx={{ bgcolor: "primary.main", padding: 1 }} onClick={() => {handleClick()}}>
        <Typography variant="h3" className='App-title'>Feedback!</Typography>
        <Typography variant="h6">Don't forget it!</Typography>
        </AppBar>
    )
}

export default Header;