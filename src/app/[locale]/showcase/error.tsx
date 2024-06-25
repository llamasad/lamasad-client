// error.jsx
'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    console.log(error);
    return <div>Oops, error!</div>;
}
