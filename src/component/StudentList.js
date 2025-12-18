import { useEffect, useState } from "react";
import { deleteStudent, getStudents } from "../api";
import { Link } from "react-router-dom";

function StudentList() {
    const [students, setStudents] = useState([]);

    const loadStudents = () => {
        getStudents().then((res) => setStudents(res.data));
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const removeStudent = async (rollno) => {
        await deleteStudent(rollno);
        loadStudents();
    };

    return (
        <>
            <h1>Student List</h1>
            <Link to="/add">Add Student</Link>

            <table border="1">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((s) => (
                        <tr key={s.rollno}>
                            <td>{s.rollno}</td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>
                                <Link to={`/edit/${s.rollno}`}>Edit</Link>
                                
                                <button onClick={() => removeStudent(s.rollno)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default StudentList;
