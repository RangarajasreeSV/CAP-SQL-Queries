using { students.details as db } from '../db/StudentsSchema';


service StudentService{
    entity Students as projection on db.Students ;
}