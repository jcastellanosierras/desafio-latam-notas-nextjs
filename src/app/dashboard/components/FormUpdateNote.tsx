'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useActionState } from 'react'
import { updateNote } from '../notes/actions'
import DialogRemoveNote from './DialogRemoveNote'

export default function FormUpdateNote({
  id,
  title,
  content,
}: {
  id: number
  title: string
  content: string
}) {
  const [error, action, isPending] = useActionState(updateNote, null)

  return (
    <form action={action} className='space-y-8'>
      <input type='hidden' name='id' defaultValue={id} />
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1'
        >
          Título
        </label>
        <Input
          id='title'
          type='text'
          name='title'
          defaultValue={title}
          placeholder='Ingresa el título de tu nota'
          aria-describedby='title-error'
        />
      </div>
      <div>
        <label
          htmlFor='content'
          className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1'
        >
          Contenido
        </label>
        <Textarea
          id='content'
          name='content'
          defaultValue={content}
          placeholder='Escribe el contenido de tu nota aquí'
          className='min-h-[200px]'
          aria-describedby='content-error'
        />
      </div>
      {error && (
        <div className='text-red-500 dark:text-red-400' id='error'>
          {error}
        </div>
      )}
      <Button disabled={isPending} type='submit'>
        {isPending ? 'Creando nota...' : 'Crear nota'}
      </Button>
      <DialogRemoveNote id={id} />
    </form>
  )
}
