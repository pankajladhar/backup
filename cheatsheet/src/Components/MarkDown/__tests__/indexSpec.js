import * as root from './../index';

describe('Index file', () => {
    it('should export properly', () =>{
        expect(root.MarkDown).toBeDefined()
        expect(root.MDExample).toBeDefined()
        expect(root.MDExampleCode).toBeDefined()
        expect(root.MDExamplePreview).toBeDefined()
    })
})