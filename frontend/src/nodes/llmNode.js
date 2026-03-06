// llmNode.js

import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div>LLM Processing</div>
    </BaseNode>
  );
};
