import { useState } from 'react'

const useField = (isValid, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange,
    error: !isValid(value),
  }
}

const useFieldNoError = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange,
  }
}

const useCheckField = (defaultValue = false) => {
  const [checked, setChecked] = useState(defaultValue)
  const onChange = () => {
    setChecked(!checked)
  }
  return {
    checked,
    onChange,
  }
}

const useMultipleSelect = (defaultValue = []) => {
  const defaultArray = []
  if (defaultValue.length > 0) {
    defaultValue.split(',').map((el) => defaultArray.push(el.trim()))
  }
  const [value, setValue] = useState(defaultArray)
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

export default {
  useField,
  useClick,
  useCheckField,
  useMultipleSelect,
  useFieldNoError,
}
