import * as React from 'react';
import { VFC } from 'react';                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Paper, styled, ThemeProvider, Typography } from '@mui/material';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function checkError(err: boolean){
  if(err) {
    return "曜日は1つだけ選んでください"
  }
  else{
     return ""
  }
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GameGenreCard() {
  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ゲームジャンル
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="アクション" />
          <FormControlLabel control={<Checkbox />} label="シューティング" />
          <FormControlLabel control={<Checkbox />} label="その他" />
        </FormGroup>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          プレイ人数
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="1人" />
          <FormControlLabel control={<Checkbox />} label="2人" />
          <FormControlLabel control={<Checkbox />} label="3人" />
        </FormGroup>
      </CardContent>
    </Card>
  );
}

function BasicCard() {
  return (
    <Card sx={{ width: 600, height:300}}>
      <Grid container direction="row" xs = {12} spacing={2} ml = {2} alignItems="center" justifyItems="center">
        <CardContent>
          <Typography sx={{ fontSize: 14, mt: 3 }} color="text.secondary" gutterBottom>
            ゲーム名
          </Typography>
          <Typography variant="h5" component="div">
            画像
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ゲーム内容の説明です。これはシューティングゲームです。
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}

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

const MainPageView: VFC = () => {

  const [state, setState] = React.useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday} = state;
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday].filter((v) => v).length !== 1;

  return (
    <div>
      <Grid container direction="row" xs={12} spacing={3}  mt = {1} alignItems="center" justifyItems="center">
        <Grid container direction="column" xs = {3} spacing={5}  mt = {0} mb={30} alignItems="center" justifyItems="center"> 
          <GameGenreCard />
        </Grid>
        <Grid container direction="column" xs = {6} spacing={2} alignItems="center">
          <Box sx={{p: 3}}>
            <BasicCard />
          </Box>
          <Box sx={{p: 3}}>
            <BasicCard />
          </Box>
        </Grid>
        <Grid direction="column" item xs={3} ml={5} mt={60}>
          <Item>
            <ThemeProvider theme={theme}>
              <Button >
                <Typography variant="h3">
                  確定
                </Typography>
              </Button>
            </ThemeProvider>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPageView;