import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContact } from "@/components/FloatingContact";
import { site } from "@/lib/site";
import logo from "@/assets/fdh-logo.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 font-display text-5xl text-forest">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory hover:bg-moss"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-forest">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory hover:bg-moss"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-stone bg-ivory px-5 py-2.5 text-sm font-medium text-forest"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} — Veterinary Pharmaceutical Marketing` },
      {
        name: "description",
        content:
          "Veterinary vaccines, poultry & livestock drugs, and biosecurity from FDH Agrovet — a trusted Nigerian veterinary pharmaceutical marketing company since 2013.",
      },
      { name: "theme-color", content: "#1F3B2D" },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { property: "og:description", content: "Veterinary vaccines, poultry & livestock drugs, and biosecurity from FDH Agrovet — a trusted Nigerian veterinary pharmaceutical marketing company since 2013." },
      { name: "twitter:description", content: "Veterinary vaccines, poultry & livestock drugs, and biosecurity from FDH Agrovet — a trusted Nigerian veterinary pharmaceutical marketing company since 2013." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e470a91b-80c9-4ce1-8ce2-5148c02b2188/id-preview-c6aee619--6981d737-0bc5-4adf-a73b-52c80d3d732d.lovable.app-1784115245121.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e470a91b-80c9-4ce1-8ce2-5148c02b2188/id-preview-c6aee619--6981d737-0bc5-4adf-a73b-52c80d3d732d.lovable.app-1784115245121.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: "/",
          logo: logo.url,
          telephone: site.phoneIntl,
          email: site.email,
          address: { "@type": "PostalAddress", addressCountry: "NG", addressLocality: "Lagos" },
          foundingDate: `${site.yearFounded}`,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingContact />
    </QueryClientProvider>
  );
}
