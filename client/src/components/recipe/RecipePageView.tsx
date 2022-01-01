import * as React from 'react';
import { VFC } from 'react';                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Paper, styled, ThemeProvider, Typography } from '@mui/material';


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

function BasicCard() {
  return (
    <Card sx={{ width: 600, height:300}}>
      <Grid container direction="row" xs = {12} spacing={2} ml = {2} alignItems="center" justifyItems="center">
        <Grid container direction="column" xs = {6} spacing={2} mt = {2} alignItems="center" justifyItems="center">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              料理名
            </Typography>
            <Typography variant="h5" component="div">
              画像
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              料理の説明文が変わります。
            </Typography>
          </CardContent>
        </Grid>
        <Grid container direction="column" xs = {6} spacing={2} mt = {2} alignItems="center" justifyItems="center">
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                カロリー
              </Typography>
              <Typography variant="h5" component="div">
                800kcal
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                使用する材料
              </Typography>
              <FormControlLabel control={<Checkbox  />} label="じゃがいも" name="potato"/>
              <FormControlLabel control={<Checkbox />} label="にんじん" name="carrot"/>
              <FormControlLabel control={<Checkbox />} label="たまねぎ" name="onion"/>
              <FormControlLabel control={<Checkbox />} label="牛肉" name="beaf"/>
          </CardContent>
        </Grid>
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday} = state;
  const error = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday].filter((v) => v).length !== 1;

  return (
    <div>
      <Grid container direction="row" xs={12} spacing={3}  mt = {1} alignItems="center" justifyItems="center">
        <Grid container direction="column" xs = {3} spacing={5}  mt = {0} mb={30} alignItems="center" justifyItems="center"> 
          <Card sx={{ minWidth: 275}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                曜日選択
              </Typography>
              <FormControl
                required
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={Sunday} onChange={handleChange}/>} label="日曜日" name="Sunday"/>
                  <FormControlLabel control={<Checkbox checked={Monday} onChange={handleChange}/>} label="月曜日" name="Monday"/>
                  <FormControlLabel control={<Checkbox checked={Tuesday} onChange={handleChange}/>} label="火曜日" name="Tuesday"/>
                  <FormControlLabel control={<Checkbox checked={Wednesday} onChange={handleChange}/>} label="水曜日" name="Wednesday"/>
                  <FormControlLabel control={<Checkbox checked={Thursday} onChange={handleChange}/>} label="木曜日" name="Thursday"/>
                  <FormControlLabel control={<Checkbox checked={Friday} onChange={handleChange}/>} label="金曜日" name="Friday"/>
                  <FormControlLabel control={<Checkbox checked={Saturday} onChange={handleChange}/>} label="土曜日" name="Saturday"/>
                </FormGroup>
                <FormHelperText>{checkError(error)}</FormHelperText>
              </FormControl>
            </CardContent>
          </Card>
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