import React from 'react';
import renderer from 'react-test-renderer';
import MDExampleCode from './../MDExampleCode';

describe('<MDExampleCode />', () => {
    it('should render properly', () =>{
        let tree = renderer.create(
            <MDExampleCode>
                <span>children</span>
            </MDExampleCode>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})