import { convertFromRaw, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { toolbar } from "./toolbar";

const CustomDraft = ({ setDraftHtml, initialValue }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      setDraftHtml(convertToRaw(value.getCurrentContent()));
    }
  }, [value]);

  useEffect(() => {
    if (initialValue) {
      setValue(convertFromRaw(initialValue));
    }
  }, [initialValue]);
  return (
    <Editor
      editorState={value}
      toolbar={toolbar}
      toolbarClassName="!bg-base-200 !border-0 !rounded-t-lg border-b !border-neutral p-2 text-black"
      wrapperClassName="bg-base-300 border-neutral border rounded-lg"
      editorClassName=""
      onEditorStateChange={setValue}
    />
  );
};

export default CustomDraft;
