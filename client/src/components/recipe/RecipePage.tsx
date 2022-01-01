import { VFC } from 'react';
import Container from '@mui/material/Container';

import RecipePageView from './RecipePageView';



const MainPage: VFC = () => {

    return (
        <Container>
            <RecipePageView />
        </Container>    
    );
};


export default MainPage;