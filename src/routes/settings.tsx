import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { AppShell } from "@/components/app/AppShell";
import { connectedAccounts } from "@/components/app/mockData";
import { PLATFORMS } from "@/components/app/platforms";
import { previewUser } from "@/components/app/mockUser";
import { Chip, Panel } from "@/components/app/ui";

const title = "Settings — Grodo";
const description = "Manage your profile, connected channels, notifications and plan.";

export const Route = createFileRoute("/settings")({
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
  component: SettingsPage,
});

const TABS = ["Profile", "Channels", "Notifications", "Plan"] as const;

function Toggle({ label }: { label: string }) {
  const [on, setOn] = React.useState(true);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-border px-4 py-3 text-left text-[0.85rem]"
    >
      {label}
      <span
        className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors ${
          on ? "bg-primary" : "bg-white/15"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-white transition-transform ${on ? "translate-x-4" : ""}`}
        />
      </span>
    </button>
  );
}

function SettingsPage() {
  const [tab, setTab] = React.useState<(typeof TABS)[number]>("Profile");

  return (
    <AppShell>
      <h1 className="text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">Settings</h1>
      <p className="mt-1 text-[0.88rem] text-muted-foreground">
        Prototype settings — nothing is saved.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t} active={tab === t} onClick={() => setTab(t)}>
            {t}
          </Chip>
        ))}
      </div>

      <Panel className="mt-4 max-w-[720px]">
        {tab === "Profile" ? (
          <div className="space-y-4">
            {[
              { id: "name", label: "Full name", value: previewUser.firstName },
              { id: "email", label: "Email", value: "spradha@grodo.app" },
              { id: "handle", label: "Handle", value: previewUser.handle },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-[0.8rem] text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  defaultValue={f.value}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => toast.success("Profile updated")}
              className="cta-gradient rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground"
            >
              Save changes
            </button>
          </div>
        ) : tab === "Channels" ? (
          <ul className="space-y-3">
            {connectedAccounts.map((a) => {
              const { Icon, name } = PLATFORMS[a.platform];
              return (
                <li
                  key={a.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border px-4 py-3"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="min-w-0">
                      <span className="block truncate text-[0.87rem] font-semibold">
                        {a.handle}
                      </span>
                      <span className="block text-[0.75rem] text-muted-foreground">{name}</span>
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => toast.success(`${name} disconnected`)}
                    className="shrink-0 rounded-lg border border-border px-3 py-1.5 text-[0.78rem] font-semibold"
                  >
                    Disconnect
                  </button>
                </li>
              );
            })}
          </ul>
        ) : tab === "Notifications" ? (
          <div className="space-y-3">
            {[
              "Email me about comments and messages",
              "Notify me when a scheduled post publishes",
              "Weekly performance summary",
              "AI content suggestions",
            ].map((l) => (
              <Toggle key={l} label={l} />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-[0.85rem] font-bold">{previewUser.plan}</p>
            <p className="mt-1 text-[0.82rem] leading-[1.55] text-muted-foreground">
              Upgrade to unlock advanced analytics, unlimited scheduling and AI tools.
            </p>
            <button
              type="button"
              onClick={() => toast.success("Plans are demo-only in this prototype")}
              className="cta-gradient mt-4 rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground"
            >
              View plans
            </button>
          </div>
        )}
      </Panel>
    </AppShell>
  );
}
