import { VFC } from 'react';
import Container from '@mui/material/Container';

import GameListPageView from './GameListPageView';



const MainPage: VFC = () => {

    return (
        <Container>
            <GameListPageView />
        </Container>    
    );
};


export default MainPage;