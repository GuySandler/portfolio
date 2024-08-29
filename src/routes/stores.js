import { writable } from 'svelte/store';

export const page = writable("home");
export const transitioning = writable(false);
export const DarkTheme = writable(true);
