import React from 'react'
import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'
import { Path, G } from 'react-native-svg'

const BlankFileIcon = createIcon({
  Root,
  viewBox: '0 0 317.001 317.001',
  path: (
    <G>
      <Path
        d='M270.825,70.55L212.17,3.66C210.13,1.334,207.187,0,204.093,0H55.941C49.076,0,43.51,5.566,43.51,12.431V304.57
        c0,6.866,5.566,12.431,12.431,12.431h205.118c6.866,0,12.432-5.566,12.432-12.432V77.633
        C273.491,75.027,272.544,72.51,270.825,70.55z M55.941,305.073V12.432H199.94v63.601c0,3.431,2.78,6.216,6.216,6.216h54.903
        l0.006,222.824H55.941z'
      />
    </G>
  ),
})

BlankFileIcon.displayName = 'BlankFileIcon'

export {BlankFileIcon}
