import React from 'react'
// * Add css of your choice. styled-components, tailwindcss, MUI etc...

export type IBaseTemplate = {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>
}

export default BaseTemplate
