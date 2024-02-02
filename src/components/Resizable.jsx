import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

export const Resizable = () => {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const Window1 = () => (
    <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
      <Pane minSize={50} maxSize="70%">
        <div
          style={{
            ...layoutCSS,
            // background: "#ddd",
            border: "1px solid black",
          }}
        >
          Window-1
        </div>
      </Pane>
      <Window2 />
    </SplitPane>
  );

  const Window2 = () => (
    <div
      style={{
        ...layoutCSS,
        // background: "#d5d7d9",
        border: "1px solid black",
      }}
    >
      Window-2
    </div>
  );

  const Window3 = () => (
    <div
      style={{
        ...layoutCSS,
        // background: "#d5d7d9",
        border: "1px solid black",
      }}
    >
      Window-3
    </div>
  );

  const Window = () => (
    <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
      <Pane minSize={50} maxSize="70%">
        <Window1 />
      </Pane>
      <Window3 />
    </SplitPane>
  );

  return (
    <div style={{ height: 500 }}>
      <Window />
    </div>
  );
};
