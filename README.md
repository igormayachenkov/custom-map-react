# A custom map example. 
Based on React engine and SVG graphics. Shows: 
- a custom map image
- a movable and clickable marker 
- a modifyable polyline (track)

### The reason
- In some cases Google Maps give you just a green field only. 
- The second one is an isolated local network.

### Demo
The working installation is here: http://188.120.249.76/custom-map-react/

## Local start
1. Download the code    
    `git clone git@github.com:igormayachenkov/custom-map-react.git`
2. Run the app in the development mode
    `npm install`   
    `npm start`
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Installation on the server
1. Download the code    
    `git clone git@github.com:igormayachenkov/custom-map-react.git`
2. Make a build   
    `npm install --omit=dev`   
    `npm run build` => it creates "build" forder
3. To expose as a subpage `/custom-map-react`. Set symink dashboard/custom-map-react -> build  (only once)   
    `cd /var/www/html`   
    `ln -s /your-path/custom-map-react/build custom-map-react`

