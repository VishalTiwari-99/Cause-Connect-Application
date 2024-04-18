import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FundPage from '../FundPage';

afterEach(()=>{
    cleanup();
});

test("should render fund page component", ()=>{
    render(
    <BrowserRouter>
        <FundPage/>
    </BrowserRouter>
    );
    const fundPageElement = screen.getByTestId("fund-page");
    expect(fundPageElement).toBeInTheDocument();
});