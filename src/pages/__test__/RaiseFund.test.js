import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RaiseFundPage from '../RaiseFundPage';


afterEach(()=>{
    cleanup();
});

test("should render raise fund page", ()=>{
    render(
        <BrowserRouter>
            <RaiseFundPage />
        </BrowserRouter>
    );
    const raiseFundFormElement = screen.getByTestId("raise-fund-page");
    expect(raiseFundFormElement).toBeInTheDocument();
});