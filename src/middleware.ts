import { type NextRequest, NextResponse } from 'next/server'

// Auth middleware disabled for demo: re-enable with Supabase when going live
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = { matcher: [] }
