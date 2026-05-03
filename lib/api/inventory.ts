import { erpFetch } from "./client";

const fallbackInventory = [
  { name: "NB1-63C20", item_name: "NB1-63 MCB 1P 20A", item_group: "Low Voltage", standard_rate: 15000, stock_uom: "Nos" },
  { name: "NDB-12", item_name: "Distribution Panel 12-Way", item_group: "Power Distribution", standard_rate: 180000, stock_uom: "Nos" },
  { name: "CPS-3000", item_name: "Solar Inverter 3kW", item_group: "New Energy", standard_rate: 1200000, stock_uom: "Nos" },
  { name: "NE-PLC16", item_name: "PLC 16 I/O", item_group: "Automation", standard_rate: 450000, stock_uom: "Nos" },
]

export async function getInventory() {
  try {
    const data = await erpFetch('/api/resource/Item?fields=["name","item_name","item_group","standard_rate","stock_uom"]');
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch inventory:", error);
    return fallbackInventory;
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
