import React from 'react'
import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'
import { G, Path } from 'react-native-svg'

const CircleIcon = createIcon({
  Root,
  viewBox: '0 0 12 13',
  path: (
    <G>
      <Path
        d='M6 10.5C8.20914 10.5 10 8.70914 10 6.5C10 4.29086 8.20914 2.5 6 2.5C3.79086 2.5 2 4.29086 2 6.5C2 8.70914 3.79086 10.5 6 10.5Z'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </G>
  ),
})

CircleIcon.displayName = 'CircleIcon'

export  {CircleIcon}
