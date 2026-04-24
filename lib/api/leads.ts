import { erpFetch } from "./client";

export async function getLeads() {
  try {
    const data = await erpFetch('/api/resource/Lead?fields=["name","lead_name","status","email_id","mobile_no"]');
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return [];
  }
}

export async function createLead(leadData: any) {
  return erpFetch('/api/resource/Lead', {
    method: 'POST',
    body: JSON.stringify(leadData),
  });
}
