import { NavigationLink } from "./Types";

export const HOME_URL = '/';
export const RETREATS_URL = '/retreats';

export const HOME_LABEL = 'Expansive Soul';
export const RETREATS_LABEL = 'Retreats';

export const MOBILE_WIDTH_DIMENSIONS = 768;
export const NAVIGATION_LINKS: NavigationLink[] = [
    {
        path: HOME_URL,
        label: HOME_LABEL,
    },
    {
        path: RETREATS_URL,
        label: RETREATS_LABEL
    },
];