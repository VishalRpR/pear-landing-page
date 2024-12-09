import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { createClient } from "@/utils/supabase/server";
import PricingSuccess from "@/components/pricing-success";
import { getUserAndSubscription } from "@/lib/data-fetching";

export const metadata: Metadata = constructMetadata({
  title: "Pricing success",
  description: "The pricing success page for PearAI.",
  canonical: "/pricing/success",
});

export default async function Pricing() {
  const supabase = createClient();
  const { openAppQueryParams } = await getUserAndSubscription();
  return (
    <>
      <PricingSuccess openAppQueryParams={openAppQueryParams} />
    </>
  );
}
