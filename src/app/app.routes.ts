import { Routes } from '@angular/router';
import { UsuariosComponent } from './features/usuarios/pages/lista-de-usuarios/usuarios.component';
import { CriacaoClienteComponent } from './features/usuarios/pages/criacao-cliente/criacao-cliente.component';
import { DetalhesUsuarioComponent } from './features/usuarios/pages/detalhes-usuario/detalhes-usuario.component';
import { EdicaoClienteComponent } from './features/usuarios/pages/edicao-cliente/edicao-cliente.component';

export const routes: Routes = [
    {path: '', component: UsuariosComponent},
    {path: 'criacao-cliente', component: CriacaoClienteComponent},
    {path: 'cliente-detalhes/:id', component: DetalhesUsuarioComponent},
    {path: 'edicao-cliente/:id', component: EdicaoClienteComponent}
];
