export interface Comentario{
    id: number;
    nombre: string;
    email:string;
    comentar: string;
    postId: number;
    creadoEn: Date;
    editadoEn: Date;
}