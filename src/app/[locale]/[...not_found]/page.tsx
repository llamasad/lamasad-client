// app/[locale]/[...not_found]/page.tsx
import { notFound } from 'next/navigation';

export default function NotFoundCatchAll() {
    notFound();
}
