import Profile01 from '@/components/kokonutui/profile-01'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Profile01 
        name="El Negaciano"
        role="Desarrolladora Frontend"
        avatar="/placeholder.svg?height=300&width=300"
        subscription="Pro"
      />
    </main>
  )
}