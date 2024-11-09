'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useActionState, useState } from 'react'
import { deleteNote } from '../notes/actions'

export default function DialogRemoveNote({ id }: { id: number }) {
  const [open, setOpen] = useState(false)
  const [error, action, isPending] = useActionState(deleteNote, null)

  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => setOpen(true)}>Eliminar</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar nota</DialogTitle>
          <DialogDescription>
            ¿Estás seguro de que quieres eliminar esta nota?
          </DialogDescription>
        </DialogHeader>
        <form action={action}>
          {error && <p className='text-sm text-red-500'>{error}</p>}
          <input type='hidden' name='id' defaultValue={id} />
          <Button
            disabled={isPending}
            type='submit'
            className='bg-red-500 hover:bg-red-600'
          >
            {isPending ? 'Eliminando nota...' : 'Eliminar nota'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
