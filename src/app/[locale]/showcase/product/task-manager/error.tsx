'use client';

function Error(error: Error & { digest?: string }) {
    return <div>{error.message}</div>;
}

export default Error;
