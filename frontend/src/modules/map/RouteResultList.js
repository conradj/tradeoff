import React from 'react'
import RouteResult from './RouteResult'

const RouteResultList = ({ results }) => (
  <div>
    {results.map(result => (
      <RouteResult {...result} key={result.id} />
    ))}
  </div>
)

RouteResultList.defaultProps = {
  results: []
}

export default RouteResultList
