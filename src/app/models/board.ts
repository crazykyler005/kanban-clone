export interface Board {
    id: number;
    title:string;
    color: string;
    userTypes:string[];
    assignees:string[];
    columns:string[];//={"Todo","Inprogress","Done"}
}