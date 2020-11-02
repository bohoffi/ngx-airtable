import { Type } from '@angular/core';
import { Version2Component } from './version/version2/version2.component';
import { Version3Component } from './version/version3/version3.component';

export interface Version {
    title: string;
    route: string[];
    current?: boolean;
    component: Type<any>
}

export const VERSIONS: Version[] = [
    {
        title: '3.x',
        route: ['3.x'],
        current: true,
        component: Version3Component
    },
    {
        title: '2.x',
        route: ['2.x'],
        component: Version2Component
    }
];
