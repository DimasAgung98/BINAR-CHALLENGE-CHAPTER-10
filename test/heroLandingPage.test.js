import renderer from 'react-test-renderer';
import { createRef } from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import HeroLandingPage from '../components/landingPage/HeroLandingPage';
import { act } from 'react-dom/test-utils';
import Sidebar from '../components/HomePage/Sidebar';
import gambar from '../public/apex.jpg';
import Image from 'next/image';

describe('Testing Component HeroLandingPage', () => {
    test('Add Text HerolandingPage', () => {
        const component = renderer.create(
            <>
                <div>
                    <h1>Team One</h1>
                    <p>lorem ipsum</p>
                </div>
            </>
        )
        let page = component.toJSON();
        expect(page).toMatchSnapshot();
    });

    test('Add Form HerolandingPage', () => {
        const component = renderer.create(
            <>
                <div>
                    <h1>Team One</h1>
                </div>
                <div>
                    <form>Team :</form>
                    <input>One</input>
                </div>
            </>
        )
        let page = component.toJSON();
        expect(page).toMatchSnapshot();
    });

    test('Add Image HerolandingPage', () => {
        const component = renderer.create(
            <>
                <div>
                    <Image src={gambar} alt='image'></Image>
                </div>
            </>
        )
        let page = component.toJSON();
        expect(page).toMatchSnapshot();
    });

    let container;
    test('Add Componment sidebar HerolandingPage', () => {
        act(() => {
            ReactDOM.render(<Sidebar />);
        })
    });

    test('Expect Value HerolandingPage', () => {
        expect(HeroLandingPage()).toBe('teamone');
    });
})