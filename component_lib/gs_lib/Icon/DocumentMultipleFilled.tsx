import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'
import { Path, G } from 'react-native-svg'

const DocumentMultipleFilledIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d='M4 4.25C4 3.00736 5.00736 2 6.25 2H10.5039V6.74753C10.5039 7.99017 11.5113 8.99753 12.7539 8.99753H17.5V17.25C17.5 18.4926 16.4926 19.5 15.25 19.5H6.25C5.00736 19.5 4 18.4926 4 17.25V4.25Z' />
      <Path d='M12.0039 6.74753V2.46728C12.0803 2.52611 12.1532 2.59009 12.2221 2.65901L16.841 7.27786C16.9103 7.34721 16.9747 7.42062 17.0338 7.49753H12.7539C12.3397 7.49753 12.0039 7.16174 12.0039 6.74753Z' />
      <Path d='M8.75088 22C7.77121 22 6.93778 21.3739 6.62891 20.5H15.2509C17.0458 20.5 18.5009 19.0449 18.5009 17.25V8.93689L19.3419 9.77788C19.7638 10.1998 20.0009 10.7721 20.0009 11.3689V17.25C20.0009 19.8734 17.8742 22 15.2509 22H8.75088Z' />
    </G>
  ),
})

DocumentMultipleFilledIcon.displayName = 'DocumentMultipleFilledIcon'

export default DocumentMultipleFilledIcon
