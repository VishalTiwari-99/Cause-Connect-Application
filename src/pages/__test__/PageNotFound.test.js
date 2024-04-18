import {render, screen, cleanup} from '@testing-library/react';
import PageNotFound from '../PageNotFound';

afterEach(()=>{
    cleanup();
});

test("should render page not found page", ()=>{
    render(<PageNotFound />);
    const pageNotFoundElement = screen.getByTestId("pnf");
    expect(pageNotFoundElement).toBeInTheDocument();
    expect(pageNotFoundElement).toHaveTextContent("404");
    expect(pageNotFoundElement).toHaveTextContent(/not found/i)
});