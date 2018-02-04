export class Oferta {

    constructor(
        public id: number,
        public logo: string,
        public nome: string,
        public expiracao: string,
        public banner: string,
        public descricao: string,
        public curtidas: string,
        public comentario: string,
        public dataCriacao: string
    ){}
}