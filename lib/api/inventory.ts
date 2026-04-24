import { erpFetch } from "./client";

export async function getInventory() {
  try {
    const data = await erpFetch('/api/resource/Item?fields=["name","item_name","item_group","standard_rate","stock_uom"]');
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch inventory:", error);
    return [];
  }
}

export async function getStockLevels() {
  try {
    const data = await erpFetch('/api/resource/Bin?fields=["item_code","actual_qty","warehouse"]');
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch stock levels:", error);
    return [];
  }
}
