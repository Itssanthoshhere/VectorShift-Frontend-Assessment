import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div className="node-container">
      <div className="node-title">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle key={index} type="target" position={Position.Left} id={input} />
      ))}

      <div>{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Right}
          id={output}
        />
      ))}
    </div>
  );
};
