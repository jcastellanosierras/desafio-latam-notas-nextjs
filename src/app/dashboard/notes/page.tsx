import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import CardNote from '../components/CardNote'
import Link from 'next/link'

export default async function Page() {
  const user = await currentUser()

  if (!user) {
    return <h1>Ha ocurrido un error</h1>
  }

  const notes = await prisma.note.findMany({
    where: {
      user: {
        authId: user.id,
      },
    },
  })

  return (
    <>
      <h1>Notas</h1>
      <ul className='flex gap-4 flex-wrap'>
        {notes.map((note) => (
          <li key={note.id} className='w-64'>
            <Link href={`/dashboard/notes/${note.id}`}>
              <CardNote title={note.title} content={note.content} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
