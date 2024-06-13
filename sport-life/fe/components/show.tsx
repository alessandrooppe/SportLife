import { ReactNode } from "react";

export interface ShowProps<T> {
  when: T | null | undefined | false;
  fallback?: ReactNode;
  children: ReactNode | ((item: T) => ReactNode);
}

export function Show<T>({ when, fallback, children }: ShowProps<T>) {
  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  return <>{fallback}</>;
}
