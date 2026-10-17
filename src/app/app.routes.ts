import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { Dashboard } from './pages/dashboard/dashboard';
import { Overview } from './pages/dashboard/overview/overview';
import { Plans } from './pages/dashboard/plans/plans';
import { Wallet } from './pages/dashboard/wallet/wallet';
import { Profile } from './pages/dashboard/profile/profile';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'auth', component: Auth },
    {
        path: 'dash',
        component: Dashboard,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: Overview },
            { path: 'plans', component: Plans },
            { path: 'wallet', component: Wallet },
            { path: 'profile', component: Profile },
        ],
    },
    { path: 'dashboard', redirectTo: 'dash' },
    { path: '**', component: NotFound }
];
