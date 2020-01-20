import React, { Component } from 'react';
import SideBar from './../../Components/SideBar';
import { MarkDown, MDExample, MDExampleCode, MDExamplePreview } from './../../Components/MarkDown';
import markdownData from './../../Data/markdown';
import Logo from './../../Components/Logo';
import './MarkDownPage.css';

class Markdown extends Component {
    renderSideBar() {
        const options = markdownData.map((item) => {
            return {
                id: item.id,
                title: item.title
            }
        })

        return (
            <div className="MarkDownPage__Sidebar">
                <SideBar options={options} heading="Markdown" />
            </div>
        )
    }

    renderMarkDownComponent() {
        return (

            markdownData.map((item, index) => {
                const { title, description, id } = item;
                return (
                    <MarkDown id={id}
                        key={`${id}_${index}`}
                        title={title}
                        description={description}>
                        {
                            item.content.map((subItem, index) => {
                                const { code, preview, subTitle, subDescription } = subItem
                                return (
                                    <MDExample key={index} title={subTitle} description={subDescription}>
                                        <MDExampleCode>
                                            <div dangerouslySetInnerHTML={{ __html: code }} />
                                        </MDExampleCode>
                                        <MDExamplePreview>
                                            <div dangerouslySetInnerHTML={{ __html: preview }} />
                                        </MDExamplePreview>
                                    </MDExample>
                                )
                            })
                        }
                    </MarkDown>
                )
            })
        )
    }
    render() {
        return (
            <div className="MarkDownPage">
                <header className="MarkDownPage__Header">
                    <Logo />
                    <button className={`Navigation__ToggleBtn ${this.state.isMainNavActive ? 'Navigation__ToggleBtn__Active' : ''}`}
                        onClick={this.toggleBtnClick}>
                        <span className="Navigation__ToggleBtn__Line"></span>
                        <span className="Navigation__ToggleBtn__Line"></span>
                        <span className="Navigation__ToggleBtn__Line"></span>
                    </button>
                </header>
                {this.renderSideBar()}
                <main className="MarkDownPage__Content">
                    {this.renderMarkDownComponent()}
                </main>
            </div>
        );
    }
}

export default Markdown;