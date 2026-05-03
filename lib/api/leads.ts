export async function getLeads() {
  try {
    const response = await fetch("/api/inquiries", { cache: "no-store" });
    const data = await response.json();
    return (data.data || []).map((lead: any) => ({
      name: lead.id,
      lead_name: lead.name,
      status: lead.status,
      email_id: lead.email,
      mobile_no: lead.phone,
      type: lead.type,
      created_at: lead.createdAt,
    }));
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return [];
  }
}

export async function createLead(leadData: any) {
  return fetch("/api/inquiries", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadData),
  });
}
