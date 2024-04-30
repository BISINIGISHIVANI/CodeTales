import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'

const ClockIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  d: 'M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM7.50153 5C7.22538 5 7.00153 5.22386 7.00153 5.5V8.5C7.00153 8.77614 7.22538 9 7.50153 9H9.5C9.77614 9 10 8.77614 10 8.5C10 8.22386 9.77614 8 9.5 8H8.00153V5.5C8.00153 5.22386 7.77767 5 7.50153 5Z',
})

ClockIcon.displayName = 'ClockIcon'

export  {ClockIcon}
