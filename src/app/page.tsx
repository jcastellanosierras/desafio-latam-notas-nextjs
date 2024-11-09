import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { CheckCircle, PenLine, Share2 } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const user = await currentUser()

  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <PenLine className='h-6 w-6' />
          <span className='sr-only'>NotesApp</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Características
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Precios
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Acerca de
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contacto
          </Link>
          {user ? (
            <>
              <Link
                href='/dashboard'
                className='text-sm font-medium hover:underline underline-offset-4'
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href='/sign-in'
                className='text-sm font-medium hover:underline underline-offset-4'
              >
                Sign In
              </Link>
              <Link
                href='/sign-up'
                className='text-sm font-medium hover:underline underline-offset-4'
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Tus ideas, organizadas y seguras
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  NotesApp te ayuda a capturar tus pensamientos, organizar tus
                  ideas y colaborar con otros de manera sencilla y segura.
                </p>
              </div>
              <div className='space-x-4'>
                <Button>Comenzar gratis</Button>
                <Button variant='outline'>Saber más</Button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Características principales
            </h2>
            <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
              <div className='flex flex-col items-center space-y-3 text-center'>
                <PenLine className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>Toma de notas intuitiva</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Escribe, dibuja y organiza tus ideas con facilidad.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-3 text-center'>
                <CheckCircle className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>Sincronización automática</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Accede a tus notas desde cualquier dispositivo, en cualquier
                  momento.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-3 text-center'>
                <Share2 className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>
                  Colaboración en tiempo real
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Trabaja en equipo compartiendo y editando notas juntos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Comienza a organizar tus ideas hoy
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Únete a miles de usuarios que ya están mejorando su
                  productividad con NotesApp.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex space-x-2'>
                  <Input
                    className='max-w-lg flex-1'
                    placeholder='Ingresa tu email'
                    type='email'
                  />
                  <Button type='submit'>Registrarse</Button>
                </form>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  Al registrarte, aceptas nuestros{' '}
                  <Link className='underline underline-offset-2' href='#'>
                    Términos y Condiciones
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 NotesApp. Todos los derechos reservados.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Términos de servicio
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
