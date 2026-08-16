import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";

import { AppShell } from "@/components/app/AppShell";
import { CreateSteps } from "@/components/app/CreateSteps";
import { PageHeader } from "@/components/app/ui";

const title = "Create — Grodo";
const description = "Build, analyse and publish a post across your connected channels.";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CreateLayout,
});

function CreateLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = pathname.endsWith("/editor") ? 3 : pathname.endsWith("/media") ? 2 : 1;

  return (
    <AppShell>
      <PageHeader title="Create" description="A three-step workflow from setup to publish." />
      <CreateSteps current={current as 1 | 2 | 3} />
      <div className="mt-6">
        <Outlet />
      </div>
    </AppShell>
  );
}
