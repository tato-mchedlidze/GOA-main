import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";

function StudentsList() {
  const students = useContext(StudentsContext);

  return (
    <div className="space-y-2">
      {students.map((student, index) => (
        <p key={index} className="text-blue-600 font-medium">
          {student}
        </p>
      ))}
    </div>
  );
}

export default StudentsList;
