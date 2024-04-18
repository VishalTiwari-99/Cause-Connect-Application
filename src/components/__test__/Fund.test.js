import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Fund from '../Fund';

afterEach(()=>{
    cleanup();
});

test("should render Fund Component", ()=>{
    render(
    <BrowserRouter>
    <Fund/>
    </BrowserRouter>
    );

    const fundElement = screen.getByTestId('fund-component');
    expect(fundElement).toBeInTheDocument();
    expect(fundElement).toHaveTextContent("Details about Fundraise:");
    expect(fundElement).toHaveTextContent("Donate Now");
})