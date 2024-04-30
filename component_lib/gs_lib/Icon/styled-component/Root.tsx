import { styled } from '@gluestack-style/react'
import { Svg } from 'react-native-svg'

export default styled(
  Svg,
  {
    w: 20,
    h: 20,

    variants: {
      variant: {
        modalHeader: {
        //   color: '$muted500',
          h: 16,
          w: 16,
        },
      },
    },

    _dark: {
      h: 16,
      w: 16,
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
)
