import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // System Prompt and Knowledge Base (Condensed)
    const systemPrompt = `
      You are CHINT Smart Assistant, an expert in CHINT electrical products and Ugandan electrical standards.
      KNOWLEDGE:
      - MCBs (NXB-63), MCCBs (NM8N), ACBs (NA8G)
      - Solar Inverters (CPS Series), Smart Meters (DDSU/DTSU)
      - Installation guidance: Follow IEE standards and local Ugandan grid requirements.
      - Pricing: In UGX, real-time sync with ERPNext.
      STYLE:
      - Professional, precise, helpful.
      - If recommending a product, explain why (e.g., "For home protection, NXB-63 is best due to its high breaking capacity").
    `;

    // In a real implementation, we would call OpenAI/Gemini here.
    // For now, we'll use a sophisticated mock response logic based on keywords.
    
    let response = "I'm CHINT Smart Assistant. How can I help you with your electrical projects today?";

    const msg = message.toLowerCase();
    if (msg.includes("breaker") || msg.includes("mcb")) {
      response = "For standard residential protection, I recommend the CHINT NXB-63 Series MCB. It offers reliable overload and short-circuit protection. For industrial use, the NM8N Series MCCB is more suitable for higher currents.";
    } else if (msg.includes("solar") || msg.includes("inverter")) {
      response = "CHINT offers premium on-grid and hybrid inverters. Our CPS series is highly efficient for the Ugandan climate. Are you looking for a residential (5KW) or commercial (above 50KW) solution?";
    } else if (msg.includes("meter")) {
      response = "We have high-precision smart meters like the DTSU666 for three-phase systems. They integrate perfectly with our solar monitoring platforms.";
    } else if (msg.includes("hello") || msg.includes("hi")) {
      response = "Hello! I am your CHINT Smart Assistant. I can help with product specs, installation tips, or finding the right dealer in Uganda. What's on your mind?";
    }

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
  }
}
