import { useState } from "react";

function CounterSummary() {
  const [count] = useState(0);

  return (
    <div className="bg-white shadow p-5 rounded-xl">
      <h3 className="text-gray-500">Counter Value</h3>
      <h1 className="text-3xl font-bold">{count}</h1>
    </div>
  );
}

export default CounterSummary;