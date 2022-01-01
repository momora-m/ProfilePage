import * as React from 'react';
import { VFC } from 'react';                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, createTheme, Paper, styled, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory } from 'react-router-dom';



const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

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
          家族構成
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="1~3人" />
          <FormControlLabel control={<Checkbox />} label="4~6人" />
          <FormControlLabel control={<Checkbox />} label="7人以上" />
        </FormGroup>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          1日当たりのカロリー
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="1500~2000kcal" />
          <FormControlLabel control={<Checkbox />} label="2000~3000kcal" />
          <FormControlLabel control={<Checkbox />} label="3000kcal以上" />
        </FormGroup>
      </CardContent>
    </Card>
  );
}


const MainPageView: VFC = () => {
  const history = useHistory();
  const moveRecipe = () => {
    history.push('/recipe');
  }
  const moveMain = () => {
    history.push('/main');
  }

  const moveStock = () => {
    history.push('/stock');
  }
  return (
    <div>   
      <Grid container direction="column" xs = {12} spacing={2}  mt = {1} alignItems="center" justifyItems="center"> 
        <Grid item xs={2} alignItems="center" justifyItems="center">
          <Item>
          <ThemeProvider theme={theme}>
              <Button onClick={moveStock}>
                <Typography variant="h3">
                  在庫確認・登録
                </Typography>
              </Button>
            </ThemeProvider>
          </Item>
        </Grid>
        <Grid item xs={2} alignItems="center" justifyItems="center">
          <Item>
            <ThemeProvider theme={theme}>
              <Button onClick={moveMain}>
                <Typography variant="h3">
                  発注
                </Typography>
              </Button>
            </ThemeProvider>
          </Item>
        </Grid>
        <Grid item xs={2} alignItems="center" justifyItems="center">
          <Item>
            <ThemeProvider theme={theme}>
              <Button onClick={moveRecipe} > 
                <Typography variant="h3">
                  レシピ絞りこみ
                </Typography>
              </Button>
            </ThemeProvider>
            <BasicCard></BasicCard>
          </Item>
        </Grid>        
      </Grid>  
    </div>
  );
};

export default MainPageView;