import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter} from 'react-router-dom'
import Home from './../index';

describe('Home', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <StaticRouter location="someLocation" context={{}}>
                <Home  />
            </StaticRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});