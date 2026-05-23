'use client'

import { useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import 'ol/ol.css'

export default function MapComponent() {
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<Map | null>(null)

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return

        mapInstanceRef.current = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),

                }),
            ],
            view: new View({
                center: fromLonLat([126.9780, 37.5665]), // 서울 중심
                zoom: 12,
            }),
        })
        return () => {
            mapInstanceRef.current?.setTarget(undefined)
            mapInstanceRef.current = null
        }
    }, [])
    return <div ref={mapRef} className="w-full h-full" /> 
}