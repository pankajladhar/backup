import React from 'react';
import renderer from 'react-test-renderer';
import MDExample from './../MDExample';

describe("<MDExample />", () => {
    it('should render properly if title and description passed', () => {
        let tree = renderer.create(
            <MDExample title="title"
                description="description" />
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })

    it('should render properly if only children passed', () => {
        let tree = renderer.create(
            <MDExample>
                <span>children</span>
            </MDExample>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})