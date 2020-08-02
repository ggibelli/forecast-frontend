import { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

const useClick = (name) => {
  const [open, setOpen] = useState(true)

  const onClick = setOpen(!open)

  return {
    name,
    onClick,
  }
}

export default { useField, useClick }
