import { VFC } from 'react';
import Container from '@mui/material/Container';

import RegisterPageView from './RegisterPageView';



const MainPage: VFC = () => {

    return (
        <Container>
            <RegisterPageView />
        </Container>    
    );
};


export default MainPage;