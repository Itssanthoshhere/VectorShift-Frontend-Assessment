import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 8,
        border: "1px solid #4b5563",
        background: "#1f2937",
        color: "white",
        minWidth: 150,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>{title}</div>

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
