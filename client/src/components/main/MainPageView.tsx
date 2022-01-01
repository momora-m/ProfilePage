import * as React from 'react';
import { VFC } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';                                                                                                         
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import WineBarIcon from '@mui/icons-material/WineBar';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
import { Button, Card, CardActions, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';






const theme = createTheme();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function BasicCard() {
  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          プロモーション
        </Typography>
        <Typography variant="h5" component="div">
          今なら野菜が安い！
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          全品30%OFF
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const MainPageView: VFC = () => {
  const history = useHistory();
  const moveRegister = () => {
    history.push('/register');
  }
  return (
    <div>   
      <Grid container direction="row" xs = {12} spacing={2} mt = {1} alignItems="center" justifyItems="center"> 
        <Grid container direction="column" xs = {3} spacing={2} mt = {1} alignItems="center" justifyItems="center">
            <Grid item xs={2} alignItems="center" justifyItems="center">
              <LocalDrinkIcon />
            </Grid> 
          <Grid item xs={3}>
            <Item>飲み物</Item>
          </Grid>
        </Grid>
        <Grid container direction="column" xs = {3} spacing={2} mt = {1} alignItems="center" justifyItems="center">
            <Grid item xs={2} alignItems="center" justifyItems="center">
            <WineBarIcon />
            </Grid> 
          <Grid item xs={3}>
            <Item>アルコールだよ</Item>
          </Grid>
        </Grid>
        <Grid container direction="column" xs = {3} spacing={2} mt = {1} alignItems="center" justifyItems="center">
            <Grid item xs={2} alignItems="center" justifyItems="center">
            <BakeryDiningIcon />
            </Grid> 
          <Grid item xs={3}>
            <Item>パン</Item>
          </Grid>
        </Grid>
        <Grid container direction="column" xs = {3} spacing={2} mt = {1} alignItems="center" justifyItems="center">
            <Grid item xs={2} alignItems="center" justifyItems="center">
            <SetMealIcon />
            </Grid> 
          <Grid item xs={3}>
            <Item>魚類だ</Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" xs = {12} spacing={2} mt = {3} ml={20} alignItems="center" justifyItems="center">
        <Grid container direction="column" xs = {3} spacing={2} alignItems="center" justifyItems="center">
          <BasicCard />
        </Grid>
        <Grid container direction="column" xs = {3} spacing={2} alignItems="center" justifyItems="center">
          <BasicCard />
        </Grid>
        <Grid container direction="column" xs = {3} spacing={2} alignItems="center" justifyItems="center">
          <BasicCard />
        </Grid>
      </Grid>
      <Grid item xs={6} spacing={5} ml = {30} mt={3} alignItems="center" justifyItems="center">
          <Item>
          <ThemeProvider theme={theme}>
            <Button onClick={moveRegister}>
                  操作画面へ
            </Button>
          </ThemeProvider>
        </Item>
      </Grid>
    </div>
  );
};

export default MainPageView;