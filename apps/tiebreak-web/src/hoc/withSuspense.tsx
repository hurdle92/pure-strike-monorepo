import { Suspense } from "react";

export const withSuspense =
  (Component) =>
  ({ fallback, ...props }) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
