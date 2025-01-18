import { escapeHTML } from "@app/services/web-utils";
import dict from "./l10n/en.json";

export const l10n = (slug: string) => escapeHTML((dict as Record<string, string | undefined>)[slug] || slug);
