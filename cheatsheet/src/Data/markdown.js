const markdown = [
    {
        id: "headings",
        title: "Headings",
        description: "To create a heading, add one to six # symbols before your heading text. The number of # you use will determine the size of the heading.",
        content: [
            {
                "code": [
                    `
                        <p># Heading 1</p>
                        <p>## Heading 2</p>
                        <p>### Heading 3</p>
                        <p>#### Heading 4</p>
                        <p>##### Heading 5</p>
                        <p>###### Heading 6</p>
                    `,
                ],
                "preview": [
                    `
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                    `
                ]
            }
        ]
    },
    {
        id: "styling-text",
        title: "Styling text",
        description: "You can indicate emphasis with bold, italic, or strikethrough text.",
        content: [
            {
                "subTitle": "Bold text",
                "subDescription": "To create a bold text, add ** symbols before and after your text without space",
                "code": [
                    `
                        <p>**This is bold text**</p>
                    `,
                ],
                "preview": [
                    `
                        <strong>This is bold text</strong>
                    `
                ]
            },
            {
                "subTitle": "Italic text",
                "subDescription": "To create a italic text, add _ symbols before and after your text without space",
                "code": [
                    `
                        <p>_This text is italicized_</p>
                    `,
                ],
                "preview": [
                    `
                        <em>This text is italicized</em>
                    `
                ]
            },
            {
                "subTitle": "Strikethrough text",
                "subDescription": "To create a italic text, add ~~ symbols before and after your text without space",
                "code": [
                    `
                        <p>~~This was mistaken text~~</p>
                    `,
                ],
                "preview": [
                    `
                        <del>This was mistaken text</del>
                    `
                ]
            },
            {
                "subTitle": "Bold and italic text",
                "subDescription": "To create a bold and italic text, use ** and _ both symbols",
                "code": [
                    `
                        <p>~~This was mistaken text~~</p>
                    `,
                ],
                "preview": [
                    `
                        <del>This was mistaken text</del>
                    `
                ]
            }
        ]


    },
    {
        id: "quoting-text",
        title: "Quoting text",
        description: "To quote a text, add > before your heading text.",
        content: [
            {
                "code": [
                    `
                        <p>In the words of Abraham Lincoln: <br/> > Pardon my French</p>
                    `,
                ],
                "preview": [
                    `
                        <p>In the words of Abraham Lincoln:</p>
                        <blockquote>Pardon my French</blockquote>
                    `
                ]
            }
        ]
    },
    {
        id: "quoting-code",
        title: "Quoting code",
        description: "You can call out code or a command within a sentence with single ` (backticks). The text within the backticks will not be formatted.",
        content: [
            {
                "subTitle": "Inline quoting code",
                "subDescription": "To format code or text into its own distinct block, use ` (single backticks).",
                "code": [
                    `
                        <p>Use \`git status\` to list all new or modified files that haven't yet been committed.</p>
                    `,
                ],
                "preview": [
                    `
                    <p>Use <code>git status</code> to list all new or modified files that haven't yet been committed.</p>
                    `
                ]
            },
            {
                "subTitle": "Distinct block quoting code",
                "subDescription": "To format code or text into its own distinct block, use ``` (triple backticks).",
                "code": [
                    `
                    <p>Some basic Git commands are: <br />
                    \`\`\` <br />
                        git status <br />
                        git add <br />
                        git commit <br />
                    \`\`\`</p>
                    `,
                ],
                "preview": [
                    `
                        <p>Some basic Git commands are:</p>
<pre><code>git status 
git add 
git commit 
</code></pre>
                    `
                ]
            },
            {
                "subTitle": "Quoting code with syntax",
                "subDescription": "To format code or text into its own distinct block, use ``` (triple backticks), with langaue name. Like sh, js, python, java",
                "code": [
                    `
                    <p>Some basic Git commands are: <br />
                    \`\`\`sh <br />
                        git status <br />
                        git add <br />
                        git commit <br />
                    \`\`\`</p>
                    `,
                ],
                "preview": [
                    `
                        <p>Some basic Git commands are:</p>
<pre><code>git status 
git add 
git commit 
</code></pre>
                    `
                ]
            }
        ]
    },
    {
        id: "links",
        title: "Links",
        description: "You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( )",
        content: [
            {
                "code": [
                    `
                        <p>This site was built using [GitHub Pages](https://pages.github.com/).</p>
                    `,
                ],
                "preview": [
                    `
                    <p>This site was built using <a href="https://pages.github.com/">GitHub Pages</a>.</p>
                    `
                ]
            }
        ]
    },
]

export default markdown 