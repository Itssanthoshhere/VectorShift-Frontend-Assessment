// outputNode.js

import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode title="Output" inputs={["value"]}>
      <div>Output Result</div>
    </BaseNode>
  );
};
