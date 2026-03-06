import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {
  return (
    <BaseNode title="API" inputs={["request"]} outputs={["response"]}>
      <div>External API Call</div>
    </BaseNode>
  );
};
