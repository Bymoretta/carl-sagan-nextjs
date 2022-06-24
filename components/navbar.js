import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
    return (
        
        <Box sx={{ flexGrow: 12 }}>
            <AppBar  color="primary" position="fixed">
                
                <Toolbar color> Carl Sagan Biografia
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" href="https://www.youtube.com/watch?v=jyWREQEk8E8"> Mas Info </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
