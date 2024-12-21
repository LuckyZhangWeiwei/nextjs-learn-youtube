"use client";

function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html>
      <body>
        <h2>global error</h2>
      </body>
    </html>
  );
}

export default GlobalError;
