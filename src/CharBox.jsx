import React from 'react'
import PropTypes from 'prop-types'

export const CharBox = ({ char }) => {
  return (
    <div className="charBox" test-id="char-box">{char}</div>
  )
}

CharBox.propTypes = {
  char: PropTypes.string,
}