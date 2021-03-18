import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Switch from '@material-ui/core/Switch'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Link from '@material-ui/core/Link'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { updateSurfspot, removeSurfspot } from '../reducers/allSpotsSearch'
import {
  updateSurfspotMenu,
  removeSurfspotMenu,
} from '../reducers/nestedSurfspots'
import { removeCreated } from '../reducers/userDetail'
import { setNotification } from '../reducers/notification'
import formHelper from '../utils/formHelper'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Spot name',
  },
  { id: 'country', numeric: false, disablePadding: false, label: 'Country' },
  {
    id: 'is-secret',
    numeric: false,
    disablePadding: false,
    label: 'Secret',
  },
  {
    id: 'edit',
    numeric: false,
    disablePadding: false,
    label: 'Edit',
  },
]

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all spots' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}))

const EnhancedTableToolbar = (props) => {
  const dispatch = useDispatch()

  const classes = useToolbarStyles()
  const { numSelected, ids, spots, setSelected } = props
  const removeMultiple = (arrayIds) => {
    const arrayCopy = [...arrayIds]
    const errorsRemove = []
    const removedIds = arrayIds.filter((id) => !errorsRemove.includes(id))
    recursiveDelete(arrayCopy, errorsRemove)
    return { removedIds, errorsRemove }
    async function recursiveDelete(array, errors) {
      if (array.length > 0) {
        const id = array.pop()
        const removedSpot = await formHelper.deleteSpot(id)
        if (removedSpot.error) errors.push(id)
        return recursiveDelete(array)
      }
      return errors
    }
  }
  const handleDelete = () => {
    const removedSpot = removeMultiple(ids)
    if (removedSpot.errorsRemove.length > 0)
      dispatch(setNotification('Something went wrong...', 'error'))
    else
      removedSpot.removedIds.forEach((id) => {
        const spot = spots.find((s) => s.id === id)

        dispatch(removeCreated(id))
        dispatch(removeSurfspot(id))
        dispatch(setNotification('Surfspots deleted correctly'))
        if (spot.isSecret) return
        dispatch(removeSurfspotMenu(spot))
      })
    setSelected([])
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Created spots
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  ids: PropTypes.array.isRequired,
  spots: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 350,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export default function EnhancedTable() {
  const history = useHistory()
  const data = useSelector((state) => state.userProfile)
  const { id, createdSpots } = data
  const rows = data.createdSpots.map((s) => ({
    name: s.name,
    id: s.id,
    country: s.country.name,
    isSecret: s.isSecret,
  }))
  const dispatch = useDispatch()

  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleEdit = (event, property) => {
    event.stopPropagation()
    history.push(`/edit/${property}`)
  }

  const handleSecretSpot = async (event, property) => {
    event.stopPropagation()
    const spot = data.createdSpots.find((s) => s.id === property.id)
    const modifiedSpot = {
      ...spot,
      continent: spot.continent.id,
      country: spot.country.id,
      region: spot.region.id,
      user: id,
      isSecret: event.target.checked,
    }
    const updatedModified = await formHelper.updateSpot(modifiedSpot)
    if (!updatedModified.error) {
      dispatch(updateSurfspot(updatedModified))
      dispatch(updateSurfspotMenu(updatedModified))
      // eslint-disable-next-line no-param-reassign
    } else event.target.checked = !event.target.checked
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, el) => {
    const selectedIndex = selected.indexOf(el)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, el)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (el) => selected.indexOf(el) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          spots={createdSpots}
          ids={selected}
          numSelected={selected.length}
          setSelected={setSelected}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Link
                          color="inherit"
                          component={RouterLink}
                          to={`/surfspots/${row.id}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="left">{row.country}</TableCell>
                      <TableCell align="left">
                        <Switch
                          defaultChecked={row.isSecret}
                          name="isSecret"
                          onClick={(event) => handleSecretSpot(event, row)}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <IconButton
                          onClick={(event) => handleEdit(event, row.id)}
                          aria-label="edit"
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
