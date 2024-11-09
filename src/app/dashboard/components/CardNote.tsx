import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CardNote({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='truncate'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground line-clamp-3'>{content}</p>
      </CardContent>
    </Card>
  )
}
