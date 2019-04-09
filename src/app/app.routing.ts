import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', loadChildren: './pages/pages.module#PagesModule' },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

