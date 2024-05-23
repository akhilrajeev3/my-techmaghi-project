export interface studentDTO
{
    id:number;
    rollno:number,
    name:string;
    photo:string;
}

export interface mainPageDTO{
    liststudents?: studentDTO[]
    listtoppers?: studentDTO[]
}