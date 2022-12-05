import { VFC } from 'react';
import Container from '@mui/material/Container';
import TopPageView, {TopPageApp} from './TopPageView';



const MainPage: VFC = () => {
    const userInfo:TopPageApp =
    {
        userId: '1',
        userName: 'Kaito Mishina',
        password: 'password'
    };

    return (
        <Container>
            <TopPageView userInfo={userInfo} />
        </Container>    
    );
};


export default MainPage;