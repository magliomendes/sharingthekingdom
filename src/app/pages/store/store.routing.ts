import { StoreListComponent } from './store-list/store-list.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StoreComponent } from './store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

export const readingRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '', component: StoreComponent, children: [
            { path: '', component: StoreListComponent, data: { state: 'list' } },
            { path: 'detail/:id', component: StoreDetailComponent, data: { state: 'detail' } },
        ]
    }

]);

