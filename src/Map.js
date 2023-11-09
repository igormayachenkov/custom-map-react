import React,{useState,useEffect,useCallback} from "react"

const MARKER_RADIUS=20

const Map = ()=>{
    const [walker,setWalker] = useState({path:[[10,20], [20,30], [50,50]]})
    const [x,y] = walker.path[walker.path.length-1]
    
    //const trackPoints = " 20,20 40,25 60,40 80,120 120,140 200,180"

    const markerStyle = {left: (x-MARKER_RADIUS)+"px", top: (y-MARKER_RADIUS)+"px"}

    

    //------------------------------------------------------------------------
    // RENDER
    console.log(`=> Map`, walker.path)

    return <div id="map">
        walker: {walker.toString()}

        <svg height="100%" width="100%">
            <polyline points={walker.path}
            stroke="white" strokeWidth="3" fill="none"
            />
        </svg> 
        <svg height={2*(MARKER_RADIUS+1)} width={2*(MARKER_RADIUS+1)} style={markerStyle}>
            <circle cx={MARKER_RADIUS+1} cy={MARKER_RADIUS+1} r={MARKER_RADIUS} stroke="white" strokeWidth="2" fill="red" />
        </svg> 
    </div>

}
export default Map