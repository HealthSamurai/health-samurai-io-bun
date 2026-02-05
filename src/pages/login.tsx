import { BareLayout } from "../components/BareLayout";
import { isGoogleOAuthConfigured } from "../auth/google";
import type { Context } from "../context";

export const metadata = {
  title: "Login",
  description: "Sign in to your account",
  fullPage: true,
};

type LoginPageProps = {
  error?: string;
  redirect?: string;
  showGoogle?: boolean;
};

export function LoginForm({ error, redirect, showGoogle = true }: LoginPageProps): string {
  const googleEnabled = showGoogle && isGoogleOAuthConfigured();

  return (
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <a href="/" class="flex justify-center">
            <img src="/assets/images/logos/aidbox-alt.svg" alt="Health Samurai" class="h-12" />
          </a>
          <div class="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </div>
        </div>

        {error && (
          <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Google Sign-In Button */}
        {googleEnabled && (
          <div>
            <a
              href="/auth/google"
              class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </a>
            <p class="mt-2 text-center text-xs text-gray-500">
              @health-samurai.io accounts only
            </p>
          </div>
        )}

        {googleEnabled && (
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-50 text-gray-500">Or sign in with email</span>
            </div>
          </div>
        )}

        <form class="space-y-6" method="POST" action="/api/login">
          {redirect && <input type="hidden" name="redirect" value={redirect} />}

          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-or-username" class="sr-only">Email or Username</label>
              <input
                id="email-or-username"
                name="email_or_username"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email or Username"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign in
            </button>
          </div>
        </form>

        <div class="text-center">
          <a href="/" class="text-sm text-gray-600 hover:text-primary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage(params: Record<string, string> & { ctx?: Context; devMode?: boolean }): string {
  const content = LoginForm({ redirect: params.redirect });
  return BareLayout({
    title: "Login",
    description: "Sign in to your account",
    children: content,
    ctx: params.ctx,
    devMode: params.devMode,
  });
}
