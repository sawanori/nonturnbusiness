import { NextResponse } from "next/server"

export async function Get(request) {
  return NextResponse.json({message:"sawada"})
} 
