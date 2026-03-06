import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <div>Math Operation</div>
    </BaseNode>
  );
};
