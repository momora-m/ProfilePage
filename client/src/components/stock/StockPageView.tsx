import * as React from 'react';
import { useEffect, useState, VFC } from 'react';
import axios from 'axios'                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Paper, styled, TextField, ThemeProvider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';




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


const StockPageView: VFC = () => {



  const headers = {'Access-Control-Allow-Origin': '*',
                   'access-control-allow-origin': '*'}


  const putHeaders = {'Content-Type': 'application/json'
  }
  type Data =
  {
    _id?:string;
    user:string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Array<{[name:string]:any}>;
  }
  const [datas, setDatas] = useState<Data>({} as Data);

  const baseURL = 'https://fooddelivery-func.azurewebsites.net/api/GetRefrigerators?code=SnjCrkUDh9nuS0cXt4O7kipFG1yHrnFXlGT28KpHfzG9/gdwvS3Nyw==&user=user'
  const putURL = 'https://fooddelivery-func.azurewebsites.net/api/PutRefrigerators?code=UxnQVQQyWOXDgZcPbkEjgkmG5sTkcpT13iuFYKOcqq3jfa1nVdWWVA==&user=user'

  useEffect(() => {
    axios.get(baseURL,{headers: headers}).then((res) =>{
       //useContext等に取得したデータを保存し利用する
       // eslint-disable-next-line no-console
       console.log(res.data)
       setDatas(res.data)
    })
  },[])

  function checkData(data: Data){
    if(data.items){
      return <div>{datas.items.map((data) => {
        return <div>{data.name}：{data.quan}個</div>
      })}</div>
    }
    else {
      return ""
    }
  }

  const history = useHistory();
  const moveMain = () => {
    history.push('/main');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputDatas, setInputDatas] = useState<string>('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDatas(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = () =>{
    inputDatas.split('\n').forEach(value => {
      datas.items.push({name: value.split(' ')[0],quan: value.split(' ')[1]})
    })
    setDatas(datas);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dataSent = delete (datas._id);
    axios.put(putURL,JSON.stringify(datas),{headers: putHeaders}).then(res =>{
      alert(res.data+"更新完了");
    })
    .catch(error=> {
      // eslint-disable-next-line no-console
      console.log(error);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(datas));
    })
  };
  
  return (
    <div>
      <Grid container direction="row" xs={12} spacing={3}  mt = {1} ml ={50}>
        <Grid container direction="column" xs = {3} spacing={5}  mt = {3} mb={30}> 
          <Card sx={{ minWidth: 275}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                現在庫
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {checkData(datas)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 600,mt: 5}}>
            <TextField
              id="outlined-multiline-flexible"
              label="食材と数をスペース区切りで入力してください"
              multiline
              maxRows={4}
              value={inputDatas}
              onChange={handleChange}
              sx={{mt: 3,ml: 4,mb:3, width: 400}}
            />
          </Card>
        </Grid>
        <Grid container direction="row" xs={12} spacing={3}  mt = {1}  mr={3} >
            <Item>
              <ThemeProvider theme={theme}>
                <Button onClick={handleClick}>
                  <Typography variant="h3">
                    追加
                  </Typography>
                </Button>
              </ThemeProvider>
            </Item>
            <Item sx={{ml:10}}>
              <ThemeProvider theme={theme}>
                <Button onClick={moveMain}>
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

export default StockPageView;