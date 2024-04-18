import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UpdateFundPage from '../UpdateFundPage';

afterEach(()=>{
    cleanup();
});

test("should render update fund page", ()=> {
    render(
        <BrowserRouter>
            <UpdateFundPage/>
        </BrowserRouter>
    );
    const updateFundFormElement = screen.getByTestId("update-fund-page");
    expect(updateFundFormElement).toBeInTheDocument();
});