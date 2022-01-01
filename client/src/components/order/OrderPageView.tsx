import * as React from 'react';
import { VFC } from 'react';                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Paper, styled, ThemeProvider, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useHistory } from 'react-router-dom';

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function checkError(err: boolean){
  if(err) {
    return "不足材料を選んでください"
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

  const history = useHistory();
  const moveMain = () => {
    history.push('/main');
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, setState] = React.useState({
    beaf: false,
    carrot: false,
    potato: false,
    onion: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  const { beaf,carrot,potato,onion} = state;
  const error = [beaf,carrot,potato,onion].filter((v) => v).length == 0;

  return (
    <div>
      <Grid container direction="row" xs={12} spacing={3}  mt = {1} ml ={50}>
        <Grid container direction="column" xs = {3} spacing={5}  mt = {0} mb={30}> 
          <Card sx={{ minWidth: 275}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                不足材料選択
              </Typography>
              <FormControl
                required
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={beaf} onChange={handleChange}/>} label="牛肉" name="beaf"/>
                  <FormControlLabel control={<Checkbox checked={carrot} onChange={handleChange}/>} label="にんじん" name="carrot"/>
                  <FormControlLabel control={<Checkbox checked={potato} onChange={handleChange}/>} label="じゃがいも" name="potato"/>
                  <FormControlLabel control={<Checkbox checked={onion} onChange={handleChange}/>} label="たまねぎ" name="onion"/>
                </FormGroup>
                <FormHelperText>{checkError(error)}</FormHelperText>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid container direction="row" xs={12} spacing={3}  mt = {1}  mr={3} >
            <Item>
              <ThemeProvider theme={theme}>
                <Button onClick={moveMain}>
                  <Typography variant="h3">
                    追加
                  </Typography>
                </Button>
              </ThemeProvider>
            </Item>
            <Item sx={{ml:10}}>
              <ThemeProvider theme={theme}>
                <Button onClick={handleOpen}>
                  <Typography variant="h3">
                    注文
                  </Typography>
                </Button>
              </ThemeProvider>
            </Item>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            注文完了
          </Typography>
        </Box>
      </Modal> 
    </div>
  );
};

export default MainPageView;