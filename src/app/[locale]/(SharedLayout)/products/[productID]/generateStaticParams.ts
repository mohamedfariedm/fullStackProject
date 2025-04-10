import { supabase } from "@/lib/supabaseClient";
export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds

export async function generateStaticParams() {
    const { data: products, error } = await supabase.from("products").select("name");
  
    if (error || !products) return [];
  
    return products.map((product) => ({
      productID: encodeURIComponent(
        product.name.en.toLowerCase().replace(/\s+/g, "-").replace(/[–—]/g, "-")
      ),
    }));
  }
