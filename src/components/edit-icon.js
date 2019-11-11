import React from "react"
import PropTypes from "prop-types"

const EditIcon = props => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle",
    },
    path: {
      fill: props.color,
    },
  }
  return (
    <svg
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={styles.svg}
      width={`${props.size}rem`}
      height={`${props.size}rem`}
    >
      <path
        style={styles.path}
        d="M492.2 74.3l-54.5-54.5c-26.4-26.4-69.1-26.4-95.5 0L12.7 349.3.3 461.2c-3.2 29.2 21.5 53.7 50.5 50.5l111.8-12.4 329.6-329.6c26.4-26.4 26.4-69.1 0-95.4zM140.6 453.4l-92.3 10.3 10.3-92.3L294 135.9l82.1 82.1-235.5 235.4zm317.7-317.6L410 184.1 327.9 102l48.3-48.3c7.6-7.6 20-7.6 27.6 0l54.5 54.5c7.6 7.6 7.6 19.9 0 27.6z"
      />
    </svg>
  )
}

EditIcon.defaultProps = {
  size: 16,
}
EditIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}

export default EditIcon
