import React,{useState,useEffect,useCallback} from "react"
import {Walker} from "./Walker"

const MARKER_RADIUS=10

const Map = ()=>{
    const [walker,setWalker] = useState(new Walker([[10,20], [20,30], [50,50]]) )
    const [x,y] = walker.getPosition()
    
    useEffect(()=>{
        console.log(`Start timer`)
        window.setInterval(()=>{
            console.log(`timer`)
            setWalker(walker.move())

        },3000)

    },[])

    //------------------------------------------------------------------------
    // RENDER
    const markerStyle = {left: (x-MARKER_RADIUS)+"px", top: (y-MARKER_RADIUS)+"px"}
    const trackPoints = walker.path.reduce((str,[x,y])=>str+=` ${x},${y}`, "") //const trackPoints = walker.path - works once!
    //const trackPoints = " 20,20 40,25 60,40 80,120 120,140 200,180"

    console.log(`=> Map`, trackPoints)

    return <div id="map">
        walker: {walker.toString()}

        <svg height="100%" width="100%">
            <polyline points={trackPoints}
            stroke="white" strokeWidth="3" fill="none"
            />
        </svg> 

        <svg height={2*(MARKER_RADIUS+1)} width={2*(MARKER_RADIUS+1)} style={markerStyle}>
            <circle cx={MARKER_RADIUS+1} cy={MARKER_RADIUS+1} r={MARKER_RADIUS} stroke="white" strokeWidth="2" fill="red" />
        </svg> 
    </div>

}
export default Map