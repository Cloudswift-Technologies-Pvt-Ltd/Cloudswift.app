import { cookies } from "next/headers";

const COOKIE = "cs_admin_session";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "cloudswift-admin";
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  const val = jar.get(COOKIE)?.value;
  return val === sign(getAdminPassword());
}

export function sign(password: string) {
  // Lightweight session token (replace with proper auth for production)
  return Buffer.from(`cs:${password}`).toString("base64url");
}

export { COOKIE as ADMIN_COOKIE };
