import {render, screen, cleanup} from '@testing-library/react';
import ViewFund from '../ViewFund';
import { BrowserRouter } from 'react-router-dom';

afterEach(()=>{
    cleanup();
});

test("should render view fund component", ()=>{
    render(
        <BrowserRouter>
        <ViewFund/>
        </BrowserRouter>
    );
    const viewFundElement = screen.getByTestId("view-component");
    expect(viewFundElement).toBeInTheDocument();
    expect(viewFundElement).toHaveTextContent("Together To Help The World Better!");
})