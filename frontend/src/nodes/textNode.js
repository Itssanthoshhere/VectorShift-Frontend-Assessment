// textNode.js

import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract variables like {{variable}}
  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    return [...new Set(matches.map((m) => m[1]))];
  };

  // Update variables when text changes
  useEffect(() => {
    setVariables(extractVariables(text));
  }, [text]);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <BaseNode title="Text" outputs={["output"]}>
      {/* Dynamic variable handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={variable}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      <textarea
        ref={textareaRef}
        value={text}
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: "40px",
          resize: "none",
          borderRadius: "5px",
          border: "1px solid #374151",
          padding: "6px",
          background: "#111827",
          color: "white",
        }}
      />
    </BaseNode>
  );
};
