import { setCookie } from 'cookies-next';
import type { theme } from '@/lib/redux/slices/theme-slice';

function onThemeChange(theme: theme) {
    setCookie('theme', theme, { maxAge: 60 * 60 * 24 * 365 }); // Set the cookie to expire after 1 year
}
const themeCookies = { create: onThemeChange };
export default themeCookies;
