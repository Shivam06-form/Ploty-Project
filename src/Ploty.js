import React , {useState}from 'react'
import Plot from 'react-plotly.js';




 const Ploty = () => {
const [X, setX] = useState([])
const [Y, setY] = useState([])
 


    const fetchProducts = async () => {
        const response = await fetch(`https://api.tvmaze.com/schedule/full`)
        const responseData = await response.json();
       const filteredProducts= responseData.slice(0, 30)
       const filteredProducts2= responseData.slice(30, 50)
// console.log(filteredProducts)

          setX(filteredProducts)
          setY(filteredProducts2)
}


fetchProducts()

    return (
        <div>
           <Plot
           data={[
            {
              x: X.map((map)=>( map.name)),
              y:  X.map((map)=>( map.airtime )),
            // z: X.map((map)=>( map.id )),
              type: 'marker',
              mode: 'delta',
              marker: {color: 'red'},
              name: 'Seasons Part 1'
            },
            {type: 'keyboard', 
            x: Y.map((map)=>( map.name)), 
            y: Y.map((map)=>( map.Season)),
            marker:{color: 'green'},
            name: 'Season Part 2',
            },
          ]}
          layout={ {width: 1200, height: 1000, title: 'A Fancy Plot'} }
           /> 
        </div>
    )
}

export default Ploty