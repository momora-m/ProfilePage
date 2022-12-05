import * as React from 'react';
import { VFC } from 'react';                                                                                                          
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { Paper } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright ©'}
      <Link color="inherit" href="https://mui.com/">
        Gameet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export type TopPageApp = {
  userId: string;
  userName: string; 
  password: string;
}

type Props = {
  userInfo: TopPageApp;
}

const TopPageView: VFC<Props> = (props) => {
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    history.push('/register');
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const  { userInfo } = props;
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{width:900,height:600,ml:13}}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h4" variant="h5" sx={{mt: 5}}>
            ここは中央大学の公認サークル、情報工学研究部についてのポータルサイトです！
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Link href="https://twitter.com/chuojouken">情報工学研究部Twitter</Link>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            ゲームを見る
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default TopPageView;