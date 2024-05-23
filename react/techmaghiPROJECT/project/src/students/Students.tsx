import { studentDTO } from "./students.model";
import css from "./student.module.css"

export default function Student(props:studentDTO)
{
    const buildLink =()=>`/student/${props.id}`
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.photo} alt="Photo" />
            </a>
            <p>
                <a href={buildLink()}>{props.name}</a>
            </p>
        </div>
    )
}