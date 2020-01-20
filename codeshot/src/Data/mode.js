const modes = [
  {
    "value": "apl",
    "label": "apl"
  },
  {
    "value": "asciiarmor",
    "label": "asciiarmor"
  },
  {
    "value": "asn.1",
    "label": "asn.1"
  },
  {
    "value": "asterisk",
    "label": "asterisk"
  },
  {
    "value": "brainfuck",
    "label": "brainfuck"
  },
  {
    "value": "clike",
    "label": "clike"
  },
  {
    "value": "clojure",
    "label": "clojure"
  },
  {
    "value": "cmake",
    "label": "cmake"
  },
  {
    "value": "cobol",
    "label": "cobol"
  },
  {
    "value": "coffeescript",
    "label": "coffeescript"
  },
  {
    "value": "commonlisp",
    "label": "commonlisp"
  },
  {
    "value": "crystal",
    "label": "crystal"
  },
  {
    "value": "css",
    "label": "css"
  },
  {
    "value": "cypher",
    "label": "cypher"
  },
  {
    "value": "d",
    "label": "d"
  },
  {
    "value": "dart",
    "label": "dart"
  },
  {
    "value": "diff",
    "label": "diff"
  },
  {
    "value": "django",
    "label": "django"
  },
  {
    "value": "dockerfile",
    "label": "dockerfile"
  },
  {
    "value": "dtd",
    "label": "dtd"
  },
  {
    "value": "dylan",
    "label": "dylan"
  },
  {
    "value": "ebnf",
    "label": "ebnf"
  },
  {
    "value": "ecl",
    "label": "ecl"
  },
  {
    "value": "eiffel",
    "label": "eiffel"
  },
  {
    "value": "elm",
    "label": "elm"
  },
  {
    "value": "erlang",
    "label": "erlang"
  },
  {
    "value": "factor",
    "label": "factor"
  },
  {
    "value": "fcl",
    "label": "fcl"
  },
  {
    "value": "forth",
    "label": "forth"
  },
  {
    "value": "fortran",
    "label": "fortran"
  },
  {
    "value": "gas",
    "label": "gas"
  },
  {
    "value": "gfm",
    "label": "gfm"
  },
  {
    "value": "gherkin",
    "label": "gherkin"
  },
  {
    "value": "go",
    "label": "go"
  },
  {
    "value": "groovy",
    "label": "groovy"
  },
  {
    "value": "haml",
    "label": "haml"
  },
  {
    "value": "handlebars",
    "label": "handlebars"
  },
  {
    "value": "haskell",
    "label": "haskell"
  },
  {
    "value": "haskell-literate",
    "label": "haskell-literate"
  },
  {
    "value": "haxe",
    "label": "haxe"
  },
  {
    "value": "htmlembedded",
    "label": "htmlembedded"
  },
  {
    "value": "htmlmixed",
    "label": "htmlmixed"
  },
  {
    "value": "http",
    "label": "http"
  },
  {
    "value": "idl",
    "label": "idl"
  },
  {
    "value": "javascript",
    "label": "javascript"
  },
  {
    "value": "jinja2",
    "label": "jinja2"
  },
  {
    "value": "jsx",
    "label": "jsx"
  },
  {
    "value": "julia",
    "label": "julia"
  },
  {
    "value": "livescript",
    "label": "livescript"
  },
  {
    "value": "lua",
    "label": "lua"
  },
  {
    "value": "markdown",
    "label": "markdown"
  },
  {
    "value": "mathematica",
    "label": "mathematica"
  },
  {
    "value": "mbox",
    "label": "mbox"
  },
  {
    "value": "mirc",
    "label": "mirc"
  },
  {
    "value": "mllike",
    "label": "mllike"
  },
  {
    "value": "modelica",
    "label": "modelica"
  },
  {
    "value": "mscgen",
    "label": "mscgen"
  },
  {
    "value": "mumps",
    "label": "mumps"
  },
  {
    "value": "nginx",
    "label": "nginx"
  },
  {
    "value": "nsis",
    "label": "nsis"
  },
  {
    "value": "ntriples",
    "label": "ntriples"
  },
  {
    "value": "octave",
    "label": "octave"
  },
  {
    "value": "oz",
    "label": "oz"
  },
  {
    "value": "pascal",
    "label": "pascal"
  },
  {
    "value": "pegjs",
    "label": "pegjs"
  },
  {
    "value": "perl",
    "label": "perl"
  },
  {
    "value": "php",
    "label": "php"
  },
  {
    "value": "pig",
    "label": "pig"
  },
  {
    "value": "powershell",
    "label": "powershell"
  },
  {
    "value": "properties",
    "label": "properties"
  },
  {
    "value": "protobuf",
    "label": "protobuf"
  },
  {
    "value": "pug",
    "label": "pug"
  },
  {
    "value": "puppet",
    "label": "puppet"
  },
  {
    "value": "python",
    "label": "python"
  },
  {
    "value": "q",
    "label": "q"
  },
  {
    "value": "r",
    "label": "r"
  },
  {
    "value": "rpm",
    "label": "rpm"
  },
  {
    "value": "rst",
    "label": "rst"
  },
  {
    "value": "ruby",
    "label": "ruby"
  },
  {
    "value": "rust",
    "label": "rust"
  },
  {
    "value": "sas",
    "label": "sas"
  },
  {
    "value": "sass",
    "label": "sass"
  },
  {
    "value": "scheme",
    "label": "scheme"
  },
  {
    "value": "shell",
    "label": "shell"
  },
  {
    "value": "sieve",
    "label": "sieve"
  },
  {
    "value": "slim",
    "label": "slim"
  },
  {
    "value": "smalltalk",
    "label": "smalltalk"
  },
  {
    "value": "smarty",
    "label": "smarty"
  },
  {
    "value": "solr",
    "label": "solr"
  },
  {
    "value": "soy",
    "label": "soy"
  },
  {
    "value": "sparql",
    "label": "sparql"
  },
  {
    "value": "spreadsheet",
    "label": "spreadsheet"
  },
  {
    "value": "sql",
    "label": "sql"
  },
  {
    "value": "stex",
    "label": "stex"
  },
  {
    "value": "stylus",
    "label": "stylus"
  },
  {
    "value": "swift",
    "label": "swift"
  },
  {
    "value": "tcl",
    "label": "tcl"
  },
  {
    "value": "textile",
    "label": "textile"
  },
  {
    "value": "tiddlywiki",
    "label": "tiddlywiki"
  },
  {
    "value": "tiki",
    "label": "tiki"
  },
  {
    "value": "toml",
    "label": "toml"
  },
  {
    "value": "tornado",
    "label": "tornado"
  },
  {
    "value": "troff",
    "label": "troff"
  },
  {
    "value": "ttcn",
    "label": "ttcn"
  },
  {
    "value": "ttcn-cfg",
    "label": "ttcn-cfg"
  },
  {
    "value": "turtle",
    "label": "turtle"
  },
  {
    "value": "twig",
    "label": "twig"
  },
  {
    "value": "vb",
    "label": "vb"
  },
  {
    "value": "vbscript",
    "label": "vbscript"
  },
  {
    "value": "velocity",
    "label": "velocity"
  },
  {
    "value": "verilog",
    "label": "verilog"
  },
  {
    "value": "vhdl",
    "label": "vhdl"
  },
  {
    "value": "vue",
    "label": "vue"
  },
  {
    "value": "webidl",
    "label": "webidl"
  },
  {
    "value": "xml",
    "label": "xml"
  },
  {
    "value": "xquery",
    "label": "xquery"
  },
  {
    "value": "yacas",
    "label": "yacas"
  },
  {
    "value": "yaml",
    "label": "yaml"
  },
  {
    "value": "yaml-frontmatter",
    "label": "yaml-frontmatter"
  },
  {
    "value": "z80",
    "label": "z80"
  }
]
export default modes;