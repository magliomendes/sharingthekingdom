import { DevotionalReadingComponent } from './devotional-reading/devotional-reading.component';
import { DevotionalsComponent } from './devotionals.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DevotionalsListComponent } from './devotionals-list/devotionals-list.component';

export const readingRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '', component: DevotionalsComponent, children: [
            { path: 'reading/:id', component: DevotionalReadingComponent, data: { state: 'reading' } },
            { path: '', component: DevotionalsListComponent, data: { state: 'list' } },
        ]
    }

]);

