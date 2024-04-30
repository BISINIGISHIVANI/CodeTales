import React from 'react'
import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'
import { G, Image, Defs, Pattern, Rect, Use } from 'react-native-svg'

const CommonFloorIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Rect width={24} height={24} fill='url(#pattern0)' />
      <Defs>
        <Pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
          <Use xlinkHref='#image0_5631_14323' transform='scale(0.00195312)' />
        </Pattern>
       
      </Defs>
    </G>
  ),
})

CommonFloorIcon.displayName = 'CommonFloorIcon'

export  {CommonFloorIcon}
