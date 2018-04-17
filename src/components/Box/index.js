import React from 'react'

function Box({ tag, html, props, children }) {
  const Element = tag || 'div'
  const innerHTML = html && { __html: children }

  if (innerHTML) {
    return <Element dangerouslySetInnerHTML={innerHTML} {...props} />
  }

  return (
    <Element {...props}>
      {children}
    </Element>
  )
}

export default Box