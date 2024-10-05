import { Routes } from '@angular/router';
import { CarListComponent } from './Components/car-list/car-list.component';
import { BookingsComponent } from './Components/bookings/bookings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'booking',
        pathMatch: 'full'
    },
    {
        path: "car",
        component: CarListComponent
    },
    {
        path: 'booking',
        component: BookingsComponent
    }
];
