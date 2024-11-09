'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useActionState } from 'react'
import { createNote } from '../actions'

export default function Page() {
  const [error, action, isPending] = useActionState(createNote, null)

  return (
    <>
      <h1>Crear nota</h1>
      <form action={action} className='space-y-8'>
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
      </form>
    </>
  )
}
