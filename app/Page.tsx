import React from 'react'
import Hero from '@/components/main/Hero'
import Image from 'next/image'

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  )
}

export default Home