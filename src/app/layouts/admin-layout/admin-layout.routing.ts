import { Routes } from '@angular/router';
import { ConfigurarComponent } from 'src/app/pages/configurar/configurar.component';
import { BuscadorComponent } from 'src/app/pages/generico/buscador/buscador.component';
import { PerfilComponent } from 'src/app/pages/generico/perfil/perfil.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';
import { AuthGuardGuard } from 'src/app/services/seguridad/auth-guard.guard';

import { PrincipalComponent } from '../../pages/principal/principal.component';
import { ServiciosComponent } from 'src/app/pages/principal/servicios/servicios.component';
import { TramitesComponent } from 'src/app/pages/principal/tramites/tramites.component';
import { RenaveComponent } from 'src/app/pages/principal/tramites/renave/renave.component';
import { CertificacionComponent } from 'src/app/pages/principal/tramites/certificacion/certificacion.component';
import { PilotajeComponent } from 'src/app/pages/principal/servicios/pilotaje/pilotaje.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'principal',
        component: PrincipalComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'buscador',
        component: BuscadorComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'configurar',
        component: ConfigurarComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'servicios',
        component: ServiciosComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'pilotaje',
        component: PilotajeComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'tramites',
        component: TramitesComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'renave',
        component: RenaveComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'certificacion',
        component: CertificacionComponent,
        canActivate: [AuthGuardGuard]
    },

];
