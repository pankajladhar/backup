import React from 'react';
import renderer from 'react-test-renderer';
import Tile from './../index';

describe('Tile', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <Tile />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});