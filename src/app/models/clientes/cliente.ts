import { Pedido } from "../pedidos/pedido";

export class Cliente {
    id: string;
    nome: string;
    email: string; 
    cpf: string;
    dataNascimento: Date
    pedidos: Pedido[]
    telefone?: string 

    constructor(id: string, nome: string, email: string, cpf: string, pedidos: Pedido[], dataNascimento: Date,  telefone?: string){
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.telefone = telefone,
        this.cpf = cpf,
        this.dataNascimento = dataNascimento,
        this.pedidos = pedidos
    }
}
