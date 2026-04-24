import { createClient } from "@repo/api/client";
import { getBaseUrl } from "@repo/utils";

const client = createClient(getBaseUrl());

export const api = client.api;

export type ExtractData<T> = T extends (...args: never[]) => infer R
  ? Awaited<R> extends { data: infer D }
    ? NonNullable<D>
    : never
  : never;
