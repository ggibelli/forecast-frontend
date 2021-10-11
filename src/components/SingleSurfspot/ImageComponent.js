import React from 'react'
import { useImage } from 'react-image'
import PropTypes from 'prop-types'

const ImageComponent = React.forwardRef(function MyComponent(props, ref) {
  const { src } = useImage({
    srcList: props.src,
  })
  return (
    <div {...props}>
      <img src={src} ref={ref} alt={props.text} />
    </div>
  )
})

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ImageComponent
