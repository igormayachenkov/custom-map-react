import React,{useState,useEffect,useCallback} from "react"

const MARKER_RADIUS=20

const Map = ()=>{
    const [walker,setWalker] = useState({path:[[10,20], [20,30], [50,50]]})
    const [x,y] = walker.path[walker.path.length-1]
    
    useEffect(()=>{
        console.log(`Start timer`)
        window.setInterval(()=>{
            const [x,y] = walker.path[walker.path.length-1]
            console.log(`timer ${x},${y}`)
            walker.path.push([x+10,y+10])
            setWalker({
                path: walker.path
            })

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