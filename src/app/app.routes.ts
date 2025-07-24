import { Routes } from '@angular/router';
import { CriacaoClienteComponent } from './features/usuarios/pages/criacao-cliente/criacao-cliente.component';
import { EdicaoClienteComponent } from './features/usuarios/pages/edicao-cliente/edicao-cliente.component';
import { DetalhesClienteComponent } from './features/usuarios/pages/detalhes-cliente/detalhes-cliente.component';
import { ClientesComponent } from './features/usuarios/pages/lista-de-clientes/clientes.component';

export const routes: Routes = [
    {path: '', component: ClientesComponent},
    {path: 'criacao-cliente', component: CriacaoClienteComponent},
    {path: 'cliente-detalhes/:id', component: DetalhesClienteComponent},
    {path: 'edicao-cliente/:id', component: EdicaoClienteComponent}
];
