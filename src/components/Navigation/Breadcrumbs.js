import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { useSelector } from 'react-redux'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function SimpleBreadcrumbs() {
  const locationBreadcrumbs = useSelector((state) => state.spotDetail)
  const mapLocationBreadcrumbs = useSelector((state) => state.mapToShow)
  

  const { continent, country, region, name } = locationBreadcrumbs.data

  if (continent && !mapLocationBreadcrumbs) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          {continent.name}
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          {country.name}
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          {region.name}
        </Link>
        <Typography color="textPrimary">{name}</Typography>
      </Breadcrumbs>
    )
  }
  if (mapLocationBreadcrumbs && mapLocationBreadcrumbs.countries) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">
          {mapLocationBreadcrumbs.name}
        </Typography>
      </Breadcrumbs>
    )
  }
  if (mapLocationBreadcrumbs && mapLocationBreadcrumbs.regions) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          {mapLocationBreadcrumbs.continent.name}
        </Link>
        <Typography color="textPrimary">
          {mapLocationBreadcrumbs.name}
        </Typography>
      </Breadcrumbs>
    )
  }
  if (mapLocationBreadcrumbs && mapLocationBreadcrumbs.surfSpots) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          {mapLocationBreadcrumbs.continent.name}
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          {mapLocationBreadcrumbs.country.name}
        </Link>
        <Typography color="textPrimary">
          {mapLocationBreadcrumbs.name}
        </Typography>
      </Breadcrumbs>
    )
  }
  return <div>aaaa</div>
}
