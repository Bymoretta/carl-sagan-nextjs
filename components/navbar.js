import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../components/themeconfig';

export default function ButtonAppBar() {
    return (
        
        <Box sx={{ flexGrow: 12 }}>
            <AppBar position="fixed">
                
                <Toolbar> Carl Sagan Biografia
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" href='myaccount.google.com'>Mas Info</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
