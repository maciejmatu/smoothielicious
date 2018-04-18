import React from 'react'

function Box({ tag, html, children, ...props }) {
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