import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-screen flex'>
      <aside className='w-64 h-full bg-gray-100'>
        <h2>Notes App</h2>
        <Separator />
        <nav>
          <ul>
            <li>
              <Link href='/dashboard/notes/new'>Crear nota</Link>
            </li>
            <li>
              <Link href='/dashboard/notes'>Todas las notas</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className='w-full h-full'>
        <header className='w-full h-fit px-2 py-4 flex justify-between border-b-2 border-gray-500/40'>
          <h2>Dashboard</h2>
          <UserButton />
        </header>
        <section className='p-8'>{children}</section>
      </main>
    </div>
  )
}
