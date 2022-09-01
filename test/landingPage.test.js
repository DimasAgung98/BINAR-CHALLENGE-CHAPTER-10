import { render, screen } from '@testing-library/react';
import landingPage from '../pages/index';

describe('landingPage', () => {
    it('renders landingPage', () => {
        render(<landingPage />);
        const heroTitle = screen.getByText(/team/i);
        expect(heroTitle).toBeInTheDocument();
    });
})


