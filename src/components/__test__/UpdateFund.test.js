import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UpdateFund from '../UpdateFund';

afterEach(()=>{
    cleanup();
});

test("should render UpdateFund Component", ()=>{
    render(
        <BrowserRouter>
        <UpdateFund/>
        </BrowserRouter>
    );
    const updateFundElement = screen.getByTestId("update-component");
    expect(updateFundElement).toBeInTheDocument();
    expect(updateFundElement).toHaveTextContent("Update Fund Request");
    expect(updateFundElement).toHaveTextContent("Amount");
    expect(updateFundElement).toHaveTextContent("Image");
})