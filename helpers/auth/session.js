import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function loginIsRequired() {
  if (typeof window !== "undefined") {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status !== "authenticated") {
      router.push("/");
    }
  }
}
