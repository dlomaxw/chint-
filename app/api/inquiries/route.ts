import { NextResponse } from "next/server"
import { mkdir, readFile, writeFile } from "fs/promises"
import path from "path"

type InquiryRecord = {
  id: string
  type: "contact" | "quote" | "newsletter" | "installer"
  name: string
  email: string
  phone?: string
  company?: string
  topic?: string
  message?: string
  productName?: string
  productModel?: string
  productPrice?: string
  quantity?: string
  status: "Open" | "Interested" | "New"
  createdAt: string
}

const dataDir = path.join(process.cwd(), "data")
const dataFile = path.join(dataDir, "inquiries.json")

async function readInquiries(): Promise<InquiryRecord[]> {
  try {
    const content = await readFile(dataFile, "utf8")
    return JSON.parse(content)
  } catch {
    return []
  }
}

async function writeInquiries(records: InquiryRecord[]) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, JSON.stringify(records, null, 2))
}

export async function GET() {
  const records = await readInquiries()
  return NextResponse.json({ data: records })
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const type = payload.type || "contact"
    const email = String(payload.email || "").trim()
    const name = String(payload.name || payload.email || "Website inquiry").trim()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 })
    }

    const records = await readInquiries()
    const record: InquiryRecord = {
      id: `INQ-${Date.now()}`,
      type,
      name,
      email,
      phone: payload.phone || "",
      company: payload.company || "",
      topic: payload.topic || "",
      message: payload.message || "",
      productName: payload.productName || "",
      productModel: payload.productModel || "",
      productPrice: payload.productPrice || "",
      quantity: payload.quantity || "",
      status: type === "quote" ? "Interested" : "Open",
      createdAt: new Date().toISOString(),
    }

    await writeInquiries([record, ...records])
    return NextResponse.json({ data: record }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Could not save inquiry. Please try again." }, { status: 500 })
  }
}
