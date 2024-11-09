import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const user = await currentUser()

  if (!user) return redirect('/sign-in')

  const email = user.emailAddresses[0].emailAddress
  const name = user.fullName

  try {
    await prisma.user.create({
      data: {
        authId: user.id,
        email: email,
        name: name,
      },
    })

    return NextResponse.redirect(
      new URL('/dashboard', new URL(request.url).origin)
    )
  } catch {
    return new Response('Error creating user', { status: 500 })
  }
}
