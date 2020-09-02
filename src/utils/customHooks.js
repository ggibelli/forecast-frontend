import { useState } from 'react'

const dummyFunc = (input) => true

const useField = (isValid = dummyFunc) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange,
    error: !isValid(value),
  }
}

const useFieldNoError = () => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange,
  }
}

const useCheckField = () => {
  const [checked, setChecked] = useState(false)
  const onChange = (event) => {
    setChecked(!checked)
  }
  return {
    checked,
    onChange,
  }
}

const useMultipleSelect = () => {
  const [value, setValue] = useState([])
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
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

export default { useField, useClick, useCheckField, useMultipleSelect, useFieldNoError }
