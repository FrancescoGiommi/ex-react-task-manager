import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const TaskRow = React.memo(({ task, colorsStates }) => {
  const colorClass = useMemo(() => colorsStates(task), [task, colorsStates]);
  return (
    <tr>
      <td>
        <Link to={`/task/${task.id}`} state={{ task }} title={`ID: ${task.id}`}>
          {task.title}
        </Link>
      </td>
      <td className={colorClass}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
