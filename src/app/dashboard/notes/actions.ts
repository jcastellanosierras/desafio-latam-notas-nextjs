'use server'

import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createNote(_prevState: unknown, formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const user = await currentUser()

  if (!title) {
    return 'El título es requerido'
  }

  if (!content) {
    return 'El contenido es requerido'
  }

  if (!user) {
    return 'El usuario no está autenticado'
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        authId: user.id,
      },
    })

    if (!dbUser) {
      return 'Usuario no encontrado'
    }

    await prisma.note.create({
      data: {
        title,
        content,
        user: {
          connect: {
            id: dbUser.id,
          },
        },
      },
    })
  } catch {
    return 'Error creando la nota'
  }

  revalidatePath('/dashboard/notes')
  return redirect('/dashboard/notes')
}

export async function updateNote(_prevState: unknown, formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const user = await currentUser()

  if (!id) {
    return 'El ID es requerido'
  }

  if (!title) {
    return 'El título es requerido'
  }

  if (!content) {
    return 'El contenido es requerido'
  }

  if (!user) {
    return 'El usuario no está autenticado'
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        authId: user.id,
      },
    })

    if (!dbUser) {
      return 'Usuario no encontrado'
    }

    await prisma.note.update({
      data: {
        title,
        content,
      },
      where: {
        id: parseInt(id),
      },
    })
  } catch {
    return 'Error actualizando la nota'
  }

  revalidatePath(`/dashboard/notes/${id}`)
  return redirect(`/dashboard/notes/${id}`)
}

export async function deleteNote(_prevState: unknown, formData: FormData) {
  const id = formData.get('id') as string

  if (!id) {
    return 'El ID es requerido'
  }

  try {
    await prisma.note.delete({
      where: {
        id: parseInt(id),
      },
    })
  } catch {
    return 'Error eliminando la nota'
  }

  revalidatePath(`/dashboard/notes`)
  return redirect(`/dashboard/notes`)
}
