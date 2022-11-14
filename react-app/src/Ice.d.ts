import { Ice } from "ice";

declare module 'ice/lib/Ice' {
}

declare global {
    interface Window { Ice: Ice; }
    interface Window { Demo: Demo; }
}
