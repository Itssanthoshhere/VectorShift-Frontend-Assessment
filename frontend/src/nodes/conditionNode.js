import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode title="Condition" inputs={["input"]} outputs={["true", "false"]}>
      <div>Conditional Logic</div>
    </BaseNode>
  );
};
