import { useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return(
        
        <Container component="main" maxWidth="xs">
            <h2 id="transition-modal-title" style={{textAlign: 'center'}}>Sign in.</h2>
        <CssBaseline />
        <div>
          <form  noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> setUsername(e.target.value)} 
              value={username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=> setPassword(e.target.value)} 
              value={password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
             
            >
              Sign In
            </Button>
            <Grid container>

              <Grid item>
                {/* onclick to fire off a function  */}

              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default Login;