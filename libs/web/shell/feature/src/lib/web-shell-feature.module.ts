import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@lavanderia/web/auth/data-access'
import { WebLayoutComponent } from '@lavanderia/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@lavanderia/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@lavanderia/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('@lavanderia/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@lavanderia/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@lavanderia/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    WebAuthDataAccessModule,
  ],
})
export class WebShellFeatureModule {}
