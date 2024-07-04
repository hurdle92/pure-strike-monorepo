import React, { Suspense } from "react";

export const withSuspense =
  (Component) =>
  ({ fallback, ...props }: { fallback: React.ReactElement }) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
