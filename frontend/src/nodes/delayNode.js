import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {
  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <div>Delay Execution</div>
    </BaseNode>
  );
};
