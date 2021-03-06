import * as babel from "@babel/standalone";

const assert = `
      const assert = (current, expected) => current.toString() === expected.toString() ? "Pass" : "Fail";
    `;

const transpileCode = input => {
  return babel.transform(input, { presets: ["es2015"] }).code;
};

const unitTests = (assertations, cb) => {
  return `
  const data = ${JSON.stringify(assertations)}
  data.forEach(({input, output}, index)=>{
    const result = ${cb}.apply(this, input)
    results[\`Test-\${index + 1}\`] = \`\${assert(result, output)}\`;
  });
`;
};

const generateScriptTag = (code, assertations, cb) => {
  const test = unitTests(assertations, cb);
  return `<script>
    const results = {};
    try {
      ${assert}
      ${code}
      ${test}
      window.parent.postMessage({type: "TEST_RESULTS", response: JSON.stringify(results)})
    } catch (e) {
      window.parent.postMessage({type: "RUN_TIME_ERROR", response: e.stack})
    }
</script>`;
};

export { transpileCode, generateScriptTag };
