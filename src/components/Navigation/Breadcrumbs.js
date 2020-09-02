import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton'

import { useSelector } from 'react-redux'

export default function SimpleBreadcrumbs() {
  const locationBreadcrumbs = useSelector((state) => state.spotDetail)
  const mapLocationBreadcrumbs = useSelector(({ mapToShow }) => mapToShow.data)
  const { pathname } = useLocation()
  const urlLocation = pathname.split('/')
  useEffect(() => {
    setBreadcrumbActive(false)
  }, [mapLocationBreadcrumbs])
  useEffect(() => {
    setBreadcrumbActive(true)
  }, [locationBreadcrumbs])
  const [breadcrumbActive, setBreadcrumbActive] = useState(false)
  const { continent, country, region, name } = locationBreadcrumbs.data

  if (urlLocation.length === 2) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" component={RouterLink} to="/">
          Home
        </Link>
        <Typography color="textPrimary">
          {urlLocation[1].charAt(0).toUpperCase() + urlLocation[1].slice(1)}
        </Typography>
      </Breadcrumbs>
    )
  }

  if (continent && breadcrumbActive) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          component={RouterLink}
          to={`/continents/${continent.id}`}
        >
          {continent.name}
        </Link>
        <Link
          color="inherit"
          component={RouterLink}
          to={`/countries/${country.id}`}
        >
          {country.name}
        </Link>
        <Link
          color="inherit"
          component={RouterLink}
          to={`/regions/${region.id}`}
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
        <Link
          color="inherit"
          component={RouterLink}
          to={`/continents/${mapLocationBreadcrumbs.continent.id}`}
        >
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
        <Link
          color="inherit"
          component={RouterLink}
          to={`/continents/${mapLocationBreadcrumbs.continent.id}`}
        >
          {mapLocationBreadcrumbs.continent.name}
        </Link>
        <Link
          color="inherit"
          component={RouterLink}
          to={`/countries/${mapLocationBreadcrumbs.country.id}`}
        >
          {mapLocationBreadcrumbs.country.name}
        </Link>
        <Typography color="textPrimary">
          {mapLocationBreadcrumbs.name}
        </Typography>
      </Breadcrumbs>
    )
  }
  return <Skeleton variant="text" />
}
