import Student from "./Students";
import { studentDTO } from "./students.model";
import css from './studentList.module.css'

export default function StudentList(props: studentListProps)
{
    if(!props.students){
        return <>LOADING....</>
    }else if (props.students.length === 0){
        return <>NO RECORDS FOUND....</>
    }else {
    return(
        <div className={css.div}>
            {props.students.map((student) =>(
                <Student {...student} key={student.id} />
            ))}
             
        </div>
    )
}
}

interface studentListProps {
    students: studentDTO[]
}

