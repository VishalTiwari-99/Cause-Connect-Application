import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListFundPage from '../ListFundPage';

afterEach(()=>{
    cleanup();
});
  

test("should render list fund page component", ()=>{
    render(
        <BrowserRouter>
            <ListFundPage />
        </BrowserRouter>
    );
    const ListFundPageElement = screen.getByTestId("list-fund-page");
    expect(ListFundPageElement).toBeInTheDocument();
});