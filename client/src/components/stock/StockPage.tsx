import { VFC } from 'react';
import Container from '@mui/material/Container';

import StockPageView from './StockPageView';



const MainPage: VFC = () => {

    return (
        <Container>
            <StockPageView />
        </Container>    
    );
};


export default MainPage;