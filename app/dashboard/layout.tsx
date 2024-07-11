import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Ini layout khusus dashboard</p>
      {children}
    </div>
  );
}
