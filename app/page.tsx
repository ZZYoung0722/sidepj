'use client'

import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'

const MapComponent = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <MapComponent />
      </main>
    </div>
  )
}