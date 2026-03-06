import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode title="Filter" inputs={["data"]} outputs={["filtered"]}>
      <div>Filter Data</div>
    </BaseNode>
  );
};
