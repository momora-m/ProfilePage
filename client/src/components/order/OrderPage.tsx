import { VFC } from 'react';
import Container from '@mui/material/Container';

import OrderPageView from './OrderPageView';



const MainPage: VFC = () => {

    return (
        <Container>
            <OrderPageView />
        </Container>    
    );
};


export default MainPage;