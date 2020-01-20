import React from 'react';
import renderer from 'react-test-renderer';
import MarkDown from './../MarkDown';

describe('<MarkDown />', () => {
    let markDownProps
    beforeEach(() => {
        markDownProps = {
            id: "id",
            title: "title",
            description: "description",
        }
    });

    it('should render properly', () => {
        let tree = renderer.create(
            <MarkDown {...markDownProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    });

    it('should render properly when children passed', () => {
        let tree = renderer.create(
            <MarkDown {...markDownProps}>
                <span>children</span>
            </MarkDown>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    });
})