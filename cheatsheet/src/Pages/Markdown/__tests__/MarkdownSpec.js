import React from 'react';
import renderer from 'react-test-renderer';
import Markdown from './../index';
jest.mock('./../../../Components/MarkDown', () => ({
    MarkDown: 'MarkDown',
    MDExample: 'MDExample',
    MDExampleCode: 'MDExampleCode',
    MDExamplePreview: 'MDExamplePreview'
}))

jest.mock('./../../../Components/SideBar', () => 'SideBar')
jest.mock('./../../../Data/markdown', () => (
    [
        {
            id: "headings",
            title: "Headings",
            description: "description",
            content: [{
                code: "code",
                preview: "preview",
                subTitle: "subTitle",
                subDescription: 'subDescription'
            }]
        }
    ]
))

describe('Markdown', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <Markdown />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});