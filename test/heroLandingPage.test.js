import { render, screen } from '@testing-library/react';
import HeroLandingPage from '../components/landingPage/HeroLandingPage';

describe('Testing Component HeroLandingPage', () => {
    test('renders landingPage', () => {
        render(<HeroLandingPage />);
        const Title = screen.getByText(/play various games/i);
        expect(Title).toBeInTheDocument();
    });
})

const title1 = "Play various games from Team One Project and enjoy the fun."

describe("check herolandingpage", () => {
    test("check title", async () => {
        const title = await HeroLandingPage(title1)
        expect(title.title1 === "Play various games from Team One Project and enjoy the fun.").toBeTruthy();
    });
});

