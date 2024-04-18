import {render, screen, cleanup} from '@testing-library/react';
import Card from '../Card';
import { BrowserRouter } from 'react-router-dom';

afterEach(()=>{
    cleanup();
});

test("should render card component", ()=>{
    const fund =    {
                        "beneficiary": "Spider Man",
                        "gender": "Male",
                        "email": "spiderman@gmail.com",
                        "accountnumber": "10430843903",
                        "amount": "15000",
                        "description": "To build school for poor children of West Africa.",
                        "Img": "assets/images/images6.jpg",
                        "donation": 5,
                        "id": 12
                    };
    render(
        <BrowserRouter>
            <Card fund={fund}/>
        </BrowserRouter>
        );
    
        const cardElement = screen.getByTestId("card-container");
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent("Send Donation");
})