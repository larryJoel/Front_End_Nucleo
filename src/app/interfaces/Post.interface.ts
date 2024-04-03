export interface Post{
    id:number;
    titulo: string;
    intro: string;
    conclusion: string;
    contenido: string;
    autor: string;
    image: string;
    categoriaId: number;
    status: string;
    visitas: number;
    likes: number;
    cantComentarios: number;
    creadoEn: Date;
    editadoEn: Date;
}