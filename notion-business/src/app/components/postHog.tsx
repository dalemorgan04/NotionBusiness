// pages/_app.tsx
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// Analytics
if (typeof window !== 'undefined') {
    let key = process.env['NEXT_PUBLIC_POSTHOG_KEY'] ?? "";
    let host = process.env['NEXT_PUBLIC_POSTHOG_HOST'] ?? ""
    posthog.init(key, {
        persistence: 'localStorage',
        api_host: host,
        // Enable debug mode in development
        loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
        },
    });
  }

interface CSPostHogProviderProps {
 children: React.ReactNode;
}

export const CSPostHogProvider: React.FC<CSPostHogProviderProps> = ({ children }) => {
 return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};