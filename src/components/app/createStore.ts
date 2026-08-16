import * as React from "react";

import type { PlatformId } from "./platforms";

/** Isolated client-side draft state for the Create prototype (no backend). */
export type MediaFile = {
  name: string;
  size: number;
  type: string;
  url: string;
  kind: "image" | "video";
};

export type CreateDraft = {
  platforms: PlatformId[];
  postName: string;
  category: string;
  contentType: "image" | "video" | "text";
  media: MediaFile | null;
  analyzed: boolean;
  content: Record<string, Record<string, string>>;
};

const initial: CreateDraft = {
  platforms: [],
  postName: "",
  category: "",
  contentType: "image",
  media: null,
  analyzed: false,
  content: {},
};

let state: CreateDraft = initial;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const createDraft = {
  get: () => state,
  set: (patch: Partial<CreateDraft>) => {
    state = { ...state, ...patch };
    emit();
  },
  setField: (platform: string, field: string, value: string) => {
    state = {
      ...state,
      content: { ...state.content, [platform]: { ...state.content[platform], [field]: value } },
    };
    emit();
  },
  togglePlatform: (id: PlatformId) => {
    const has = state.platforms.includes(id);
    state = {
      ...state,
      platforms: has ? state.platforms.filter((p) => p !== id) : [...state.platforms, id],
    };
    emit();
  },
  reset: () => {
    state = initial;
    emit();
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useCreateDraft() {
  return React.useSyncExternalStore(
    createDraft.subscribe,
    createDraft.get,
    () => initial,
  );
}

export const CATEGORIES = [
  "Entertainment",
  "Lifestyle",
  "Education",
  "Technology",
  "Business",
  "Fitness",
  "Travel",
  "Fashion",
  "Food",
  "Gaming",
  "Other",
];
