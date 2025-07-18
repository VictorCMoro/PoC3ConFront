export class Pedido {
    public clienteId: string;
    public dataPedido: Date;
    public descricao: string; 
    public valor: number;
    
    constructor(clienteId: string, dataPedido: Date, descricao: string, valor: number){
        this.clienteId = clienteId,
        this.dataPedido = dataPedido,
        this.descricao = descricao,
        this.valor = valor
    }
}
