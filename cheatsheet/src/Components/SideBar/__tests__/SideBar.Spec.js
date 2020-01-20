import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'
import SideBar from './../index';

jest.mock('./../../Logo', () => 'Logo')

describe('SideBar', () => {
    it('renders correctly', () => {
        const sideBarProps = {
            heading: 'Sidebar',
            options: [
                {
                    "id": "id1",
                    "title": "title1",
                },
                {
                    "id": "id2",
                    "title": "title2",
                }
            ]
        }
        let tree = renderer.create(
            <StaticRouter location="someLocation" context={{}}>
                <SideBar {...sideBarProps} />
            </StaticRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});