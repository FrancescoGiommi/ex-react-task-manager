export default function TaskRow({ task, colorsStates }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td className={colorsStates(task)}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
}
