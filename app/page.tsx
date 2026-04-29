import { cookies } from "next/headers";
import LandingContent from "./LandingContent";

export default async function LandingPage() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get("jerson_prepwise_token");

  return <LandingContent isLoggedIn={isLoggedIn} />;
}
