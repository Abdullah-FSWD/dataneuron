import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

export const Resizable = () => {
  const [sizes, setSizes] = useState([]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const Window1 = () => (
    <div
      style={{
        ...layoutCSS,
        border: "1px solid black",
      }}>
      Window-1
    </div>
  );

  const Window2 = () => (
    <div
      style={{
        ...layoutCSS,
        border: "1px solid black",
      }}>
      Window-2
    </div>
  );

  const Window3 = () => (
    <div
      style={{
        ...layoutCSS,
        // background: "#d5d7d9",
        border: "1px solid black",
      }}>
      Window-3
    </div>
  );

  const Window = () => (
    <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
      <Pane minSize="20%" style={{ minHeight: 200 }}>
        <Window1 />
      </Pane>
      <Pane minSize="20%">
        <Window2 />
      </Pane>
    </SplitPane>
  );

  return (
    <div style={{ height: 500 }}>
      <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
        <Window />
        <Window3 />
      </SplitPane>
    </div>
  );
};
