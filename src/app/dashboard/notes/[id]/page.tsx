import { prisma } from '@/lib/prisma'
import FormUpdateNote from '../../components/FormUpdateNote'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const note = await prisma.note.findUnique({
    where: {
      id: parseInt(id),
    },
  })

  if (!note) {
    return <h1>Nota no encontrada</h1>
  }

  return (
    <>
      <h1>{note.title}</h1>
      <FormUpdateNote id={note.id} title={note.title} content={note.content} />
    </>
  )
}
