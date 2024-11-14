"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateMarkdown } from "../redux/editorSlice";
import { marked } from "marked";
import { Textarea } from "@/components/ui/textarea";

const EditorPreview = () => {
  const markdown = useSelector((state: RootState) => state.editor.markdown);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateMarkdown(e.target.value));
  };

  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Editor</h2>
          <Textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
            className="w-full h-[300px] p-2 border rounded"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <div
            id="preview"
            className="w-full h-[300px] p-2 border rounded overflow-auto"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPreview;
