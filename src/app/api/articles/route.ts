import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ARTICLE_URL!}/api/documents.list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN!}`,
      },
      body: JSON.stringify({
        parentDocumentId: process.env.PARENT_ID_ARTICLE!,
      }),
    })
    const data = await response.json()
    return NextResponse.json({ ...data })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error getting articles' })
  }
}
