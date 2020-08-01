import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpot } from '../reducers/spotDetailReducer'
import { Link } from 'react-router-dom'


const SpotList = () => {
  const spotList = useSelector((state) => state.surfspots)
  const dispatch = useDispatch()
  console.log(spotList.map((spot) => console.log(spot.countries)))
  return (
    <div>
      <ul>
        {spotList.map((continent) => (
          <li key={continent.id}>
            {continent.name}

            <ul>
              {continent.countries.map((country) => (
                <li key={country.id}>
                  {country.name}

                  <ul>
                    {country.regions.map((region) => (
                      <li key={region.id}>
                        {region.name}
                        <ul>
                        {region.surf_spots.map(spot => (
                          <li key={spot.id} onClick={() => dispatch(fetchSpot(spot.id))}><Link to={`/surfspots/${spot.id}`}> {spot.name} </Link></li>
                          ))}
                        </ul>
                        
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpotList
