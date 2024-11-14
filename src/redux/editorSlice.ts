import { createSlice } from "@reduxjs/toolkit";

interface EditorState {
  markdown: string;
}

const initialState: EditorState = {
  markdown: `# Markdown Previewer

## Subheading

[GitHub](https://github.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { updateMarkdown } = editorSlice.actions;
export default editorSlice.reducer;
