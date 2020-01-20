import React from 'react';
import renderer from 'react-test-renderer';
import MDExamplePreview from './../MDExamplePreview';

describe('<MDExamplePreview />', () => {
    it('should render properly', () =>{
        let tree = renderer.create(
            <MDExamplePreview>
                <span>MDExamplePreview</span>
            </MDExamplePreview>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})