import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { marked } from "https://esm.sh/marked";

const App = () => {
  const initialText = `
# Heading 1

## Heading 2

[Link](https://example.com)

This is an \`inline code\` example.

\`\`\`
// This is a code block example
function greet() {
  console.log("Hello, world!");
}
greet();
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote example.

![Image](https://via.placeholder.com/150)

**Bolded text**
`;
  const [textareaContent, setTextareaContent] = React.useState(initialText);
  const handleTextareaChange = (event) => {
    setTextareaContent(event.target.value);
  };
  
  return(
    <div class="main">
      <div>
  <textarea id="editor" value={textareaContent} onChange={handleTextareaChange}></textarea>
      </div>
      <div>
  <p id="preview" dangerouslySetInnerHTML={{ __html: marked(textareaContent) }}></p>
      </div>
        </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#container"))