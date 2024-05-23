
import './App.css';
import { useEffect, useState } from 'react';
import Student from './students/Students';
import StudentList from './students/studentList';
import { studentDTO } from './students/students.model'
import { mainPageDTO } from './students/students.model';

function App() {

  const [students, setStudents ]= useState<mainPageDTO>({})
  useEffect(() => {
    const timerId =setTimeout(() => {
      setStudents({
        liststudents : [{
    id: 1,
    rollno:101,
    name:"Robert Downey Jr. ",
    photo: 'https://facts.net/wp-content/uploads/2023/07/45-facts-about-robert-downey-jr-1689595666.jpg',
  },
  {
    id: 2,
    rollno:102,
    name:"Chris Evans ",
    photo: 'https://cdn.zeebiz.com/sites/default/files/2023/06/13/246845-news18-bl-zb.jpg'
  
  },
  { id: 3,
    rollno:103,
    name:"Chris Hemsworth ",
    photo:'https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-attends-marvel-studios-thor-love-and-news-photo-1709740913.jpg?crop=0.891xw:0.781xh;0.0380xw,0.00605xh&resize=640:*'
  },
  {
    id: 6,
    rollno:106,
    name:"Denzel Washington",
    photo:'https://media.glamour.com/photos/62028d29896d66b87622a7c7/master/w_2560%2Cc_limit/1154310819',
  },
  {
    id: 4,
    rollno:104,
    name:"Leonardo De Caprio",
    photo:'https://hips.hearstapps.com/hmg-prod/images/leonardo-dicaprio-642975679f5fa.jpg?crop=0.723xw:0.482xh;0.162xw,0.0588xh&resize=640:*',
  },
  {
    id: 5,
    rollno:105,
    name:"Brad Pitt",
    photo:'https://ew.com/thmb/P4FwTJOMcXA2TxZ69SQDxibzEEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1165177751-2000-d105ca4fa12c49efae54bba6cac13822.jpg',
  },
  
  ];

  const topperList: studentDTO[]=
  [
    
    {
      id: 6,
      rollno:106,
      name:"Denzel Washington",
      photo:'https://media.glamour.com/photos/62028d29896d66b87622a7c7/master/w_2560%2Cc_limit/1154310819',
    },
    {
      id: 4,
      rollno:104,
      name:"Leonardo De Caprio",
      photo:'https://hips.hearstapps.com/hmg-prod/images/leonardo-dicaprio-642975679f5fa.jpg?crop=0.723xw:0.482xh;0.162xw,0.0588xh&resize=640:*',
    },
    {
      id: 5,
      rollno:105,
      name:"Brad Pitt",
      photo:'https://ew.com/thmb/P4FwTJOMcXA2TxZ69SQDxibzEEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1165177751-2000-d105ca4fa12c49efae54bba6cac13822.jpg',
    },
  ]
  return (
    <>
    <h3>Student List</h3>
    <StudentList students={studentList}/>

    <h3>Toppers list</h3>
    <StudentList students={topperList}/>
    </>
  );
}

export default App;
