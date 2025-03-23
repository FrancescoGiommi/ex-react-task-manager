import { useMemo } from "react";

export default function TaskRow({ task, colorsStates }) {
  const colorClass = useMemo(() => colorsStates(task), [task, colorsStates]);
  return (
    <tr>
      <td>{task.title}</td>
      <td className={colorClass}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
}
