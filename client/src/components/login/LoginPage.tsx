import { VFC } from 'react';
import Container from '@mui/material/Container';
import LoginPageView, {LoginPageApp} from './LoginPageView';



const MainPage: VFC = () => {
    const userInfo:LoginPageApp =
    {
        userId: '1',
        userName: 'Kaito Mishina',
        password: 'password'
    };

    return (
        <Container>
            <LoginPageView userInfo={userInfo} />
        </Container>    
    );
};


export default MainPage;