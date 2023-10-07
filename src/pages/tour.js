import dynamic from 'next/dynamic'


const Globe = dynamic(
  () => import('@/app/Components/Globe'),
  { ssr: false }
)

export default function Tour() {
  return (
    <main>
      <div>
        <Globe/>
      </div>
    </main>
  )
}
