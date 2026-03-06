// inputNode.js

import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode title="Input" outputs={["value"]}>
      <div>Input Source</div>
    </BaseNode>
  );
};
