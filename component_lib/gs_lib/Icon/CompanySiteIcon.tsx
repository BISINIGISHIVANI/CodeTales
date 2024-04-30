import React from 'react'
import { createIcon } from '@gluestack-ui/icon'
import Root from './styled-component/Root'
import { Path, G, LinearGradient, Defs, Stop } from 'react-native-svg'

const CompanySiteIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path
        d='M12.0001 20.6774C17.71 20.6774 22.3387 16.0486 22.3387 10.3387C22.3387 4.62879 17.71 0 12.0001 0C6.29016 0 1.66138 4.62879 1.66138 10.3387C1.66138 16.0486 6.29016 20.6774 12.0001 20.6774Z'
        fill='url(#paint0_linear_5631_14317)'
      />
      <Path
        d='M22.3387 10.3387C22.3387 10.3386 22.3387 10.3385 22.3387 10.3385C22.3386 4.62988 17.7119 0.0020235 12.0037 4.7033e-05C12.0025 4.7033e-05 12.0012 0 12 0C11.9994 0 11.9988 4.7033e-05 11.9982 4.7033e-05C11.678 9.40918e-05 11.3614 0.0154822 11.0487 0.0439999C11.0942 0.0481411 11.1395 0.0533175 11.1849 0.0580705C8.20434 0.482212 5.73295 3.20536 4.76528 6.88701C2.85018 7.76409 1.66138 8.9864 1.66138 10.3387C1.66138 11.691 2.85018 12.9133 4.76533 13.7904C5.733 17.472 8.20439 20.1952 11.185 20.6193C11.1395 20.6241 11.0943 20.6293 11.0487 20.6334C11.3621 20.662 11.6793 20.6774 12.0001 20.6774C17.7099 20.6774 22.3386 16.0488 22.3387 10.3389C22.3387 10.3388 22.3387 10.3387 22.3387 10.3387ZM4.46655 8.36762C4.40189 8.81882 4.35888 9.28038 4.33931 9.75045H2.99154C3.23046 9.2792 3.74067 8.79986 4.46655 8.36762ZM2.99154 10.9269H4.33931C4.35888 11.397 4.40194 11.8585 4.46655 12.3097C3.74067 11.8775 3.23046 11.3982 2.99154 10.9269ZM20.4189 9.75045H19.6608C19.6412 9.28038 19.5982 8.81882 19.5336 8.36762C19.8442 8.55256 20.1148 8.74612 20.3421 8.944C20.3779 9.20974 20.4037 9.47868 20.4189 9.75045ZM19.6608 10.9269H20.4189C20.4037 11.1987 20.3779 11.4676 20.3421 11.7334C20.1148 11.9312 19.8441 12.1248 19.5335 12.3098C19.5982 11.8585 19.6412 11.397 19.6608 10.9269ZM19.9697 7.26108C19.7386 7.13049 19.4936 7.00546 19.2348 6.88696C18.858 5.45341 18.2531 4.16527 17.4791 3.10141C18.6123 4.25694 19.4763 5.67718 19.9697 7.26108ZM13.3255 6.72433C13.425 7.68428 13.4849 8.70574 13.5012 9.75045H10.4989C10.5153 8.70569 10.5751 7.68428 10.6747 6.72433C11.1108 6.69685 11.553 6.68268 12.0001 6.68268C12.4472 6.68268 12.8894 6.69685 13.3255 6.72433ZM13.2613 1.35238C14.4587 1.68965 15.5723 2.50461 16.4812 3.72927C17.0473 4.49195 17.5045 5.37318 17.8435 6.35191C16.8088 6.01991 15.6386 5.77365 14.3793 5.63501C14.1291 3.8152 13.7382 2.31854 13.2613 1.35238ZM13.5012 10.9269C13.4848 11.9717 13.425 12.9931 13.3254 13.953C12.8893 13.9805 12.4472 13.9947 12 13.9947C11.5529 13.9947 11.1107 13.9805 10.6746 13.953C10.575 12.9931 10.5152 11.9716 10.4988 10.9269H13.5012ZM14.3794 15.0424C15.6386 14.9037 16.8088 14.6574 17.8435 14.3255C17.5045 15.3042 17.0474 16.1854 16.4813 16.9481C15.9757 17.6293 15.4067 18.1838 14.7953 18.5998C14.2897 18.9437 13.6313 18.467 13.8018 17.8798C14.0357 17.0744 14.2319 16.1144 14.3794 15.0424ZM15.7962 13.6373C15.3795 13.7196 14.9533 13.7876 14.5194 13.8416C14.6079 12.9247 14.6625 11.9457 14.6778 10.9269H18.4832C18.4522 11.6136 18.3671 12.2867 18.2282 12.9406C17.5019 13.2274 16.687 13.4612 15.7962 13.6373ZM14.6778 9.75045C14.6626 8.73158 14.6079 7.75271 14.5194 6.83576C14.9533 6.88979 15.3795 6.95774 15.7962 7.04009C16.687 7.21619 17.5019 7.45002 18.2282 7.73675C18.3672 8.39073 18.4523 9.06381 18.4833 9.75045H14.6778ZM11.101 4.01327C11.2806 3.20805 11.4972 2.51365 11.7274 2.00518C11.8322 1.77369 11.9252 1.61167 12.0001 1.49995C12.0748 1.61167 12.1679 1.77365 12.2727 2.00518C12.503 2.51365 12.7196 3.20805 12.8992 4.01327C13.005 4.488 13.0979 4.99901 13.1773 5.5376C12.7908 5.51713 12.3982 5.50621 12.0001 5.50621C11.6019 5.50621 11.2092 5.51713 10.8228 5.5376C10.9022 4.99896 10.9951 4.48795 11.101 4.01327ZM7.51884 3.72927C8.42778 2.50461 9.54138 1.68965 10.7387 1.35238C10.2619 2.31849 9.87098 3.8152 9.62072 5.63501C8.36142 5.77365 7.19126 6.01995 6.15653 6.35195C6.49559 5.37318 6.95276 4.492 7.51884 3.72927ZM5.77192 7.73675C6.49827 7.45002 7.31319 7.21619 8.20396 7.04009C8.62062 6.95774 9.04683 6.88979 9.48076 6.83576C9.39225 7.75271 9.33761 8.73162 9.32232 9.75045H5.51695C5.54787 9.06381 5.63295 8.39068 5.77192 7.73675ZM5.51691 10.9269H9.32227C9.33756 11.9458 9.3922 12.9247 9.48072 13.8416C9.04684 13.7876 8.62062 13.7196 8.20392 13.6373C7.31314 13.4612 6.49822 13.2273 5.77187 12.9406C5.633 12.2867 5.54787 11.6136 5.51691 10.9269ZM7.51884 16.9481C6.95276 16.1854 6.49559 15.3042 6.15658 14.3255C7.19126 14.6575 8.36147 14.9037 9.62076 15.0424C9.7682 16.1145 9.96444 17.0744 10.1983 17.8799C10.3688 18.4671 9.71041 18.9438 9.20486 18.5998C8.59342 18.1838 8.02448 17.6293 7.51884 16.9481ZM10.8228 15.1398C11.2093 15.1603 11.6019 15.1712 12.0001 15.1712C12.3982 15.1712 12.7908 15.1603 13.1773 15.1398C13.0979 15.6784 13.005 16.1894 12.8992 16.6641C12.7195 17.4694 12.5029 18.1638 12.2727 18.6722C12.2717 18.6745 12.2706 18.6768 12.2696 18.6792C12.1647 18.9099 11.8354 18.9099 11.7306 18.6792C11.7295 18.6768 11.7285 18.6745 11.7274 18.6722C11.4972 18.1638 11.2805 17.4694 11.101 16.6641C10.9951 16.1894 10.9022 15.6784 10.8228 15.1398ZM17.4791 17.576C18.2531 16.5121 18.858 15.224 19.2348 13.7904C19.4936 13.6719 19.7386 13.5469 19.9697 13.4163C19.4763 15.0002 18.6123 16.4204 17.4791 17.576Z'
        fill='url(#paint1_linear_5631_14317)'
      />
      <Path
        d='M23.0471 19.0277H0.952894C0.426635 19.0277 0 18.6011 0 18.0748V13.221C0 12.6947 0.426635 12.2681 0.952894 12.2681H23.0471C23.5733 12.2681 24 12.6947 24 13.221V18.0748C24 18.6011 23.5734 19.0277 23.0471 19.0277Z'
        fill='url(#paint2_linear_5631_14317)'
      />
      <Path
        d='M23.0472 12.2681H21.1445C21.6708 12.2681 22.0975 12.6947 22.0975 13.221V18.0748C22.0975 18.6011 21.6708 19.0277 21.1445 19.0277H23.0472C23.5735 19.0277 24.0001 18.6011 24.0001 18.0748V13.221C24.0001 12.6947 23.5735 12.2681 23.0472 12.2681Z'
        fill='url(#paint3_linear_5631_14317)'
      />
      <Path
        d='M3.91573 17.079C3.91573 17.2183 3.70674 17.3577 3.46288 17.3577C3.20166 17.3577 3.01587 17.2183 3.01587 17.079V13.288C3.01587 13.1255 3.20166 13.0151 3.46288 13.0151C3.70674 13.0151 3.91573 13.1255 3.91573 13.288V15.0007C4.02025 14.7742 4.27563 14.5594 4.63563 14.5594C5.16392 14.5594 5.62255 15.111 5.62255 15.7786V17.079C5.62255 17.2648 5.39615 17.3577 5.16975 17.3577C4.96076 17.3577 4.72274 17.2648 4.72274 17.079V15.7786C4.72274 15.558 4.53116 15.3431 4.30472 15.3431C4.11314 15.3431 3.91573 15.5057 3.91573 15.7786V17.079Z'
        fill='#7A6D79'
      />
      <Path
        d='M7.00435 16.3766C7.00435 16.5449 7.06237 16.603 7.24237 16.603H7.49207C7.75329 16.603 7.87522 16.7946 7.87522 16.9804C7.87522 17.172 7.75329 17.3578 7.49207 17.3578H7.24237C6.5051 17.3578 6.10449 17.0617 6.10449 16.3766V13.6655C6.10449 13.5029 6.34256 13.3926 6.5515 13.3926C6.77795 13.3926 7.00435 13.5029 7.00435 13.6655V14.5943H7.66035C7.80548 14.5943 7.88096 14.7569 7.88096 14.9136C7.88096 15.0762 7.80548 15.2329 7.66035 15.2329H7.00435V16.3766Z'
        fill='#7A6D79'
      />
      <Path
        d='M9.11739 16.3766C9.11739 16.5449 9.17541 16.603 9.35541 16.603H9.60511C9.86633 16.603 9.98826 16.7946 9.98826 16.9804C9.98826 17.172 9.86633 17.3578 9.60511 17.3578H9.35541C8.61814 17.3578 8.21753 17.0617 8.21753 16.3766V13.6655C8.21753 13.5029 8.4556 13.3926 8.66454 13.3926C8.89099 13.3926 9.11739 13.5029 9.11739 13.6655V14.5943H9.77339C9.91852 14.5943 9.99405 14.7569 9.99405 14.9136C9.99405 15.0762 9.91856 15.2329 9.77339 15.2329H9.11739V16.3766Z'
        fill='#7A6D79'
      />
      <Path
        d='M11.1902 14.8673V15.0008C11.3237 14.7743 11.6082 14.5596 11.9739 14.5596C12.5603 14.5596 13.0131 15.1111 13.0131 15.7787V16.1851C13.0131 16.8295 12.5429 17.4159 12.003 17.4159C11.6604 17.4159 11.3586 17.1895 11.2482 16.9515V18.339C11.2482 18.4783 11.045 18.6176 10.7896 18.6176C10.5342 18.6176 10.3484 18.4783 10.3484 18.339V14.8673C10.3484 14.7047 10.54 14.5944 10.778 14.5944C11.0161 14.5944 11.1902 14.7047 11.1902 14.8673ZM12.1133 15.7788C12.1133 15.5582 11.9159 15.3433 11.6721 15.3433C11.4631 15.3433 11.2482 15.5059 11.2482 15.7788V16.2606C11.2482 16.3593 11.4282 16.6322 11.6837 16.6322C11.9101 16.6322 12.1133 16.4116 12.1133 16.1851V15.7788Z'
        fill='#7A6D79'
      />
      <Path
        d='M14.7373 16.5567C14.7373 16.156 13.3788 16.4289 13.3788 15.4536C13.3788 15.024 13.6459 14.5596 14.4703 14.5596C14.9753 14.5596 15.4572 14.7337 15.4572 14.9776C15.4572 15.0937 15.3411 15.4014 15.1321 15.4014C14.9754 15.4014 14.7954 15.2272 14.4819 15.2272C14.2497 15.2272 14.151 15.326 14.151 15.413C14.151 15.7381 15.5211 15.5001 15.5211 16.5218C15.5211 17.0676 15.1263 17.4159 14.4006 17.4159C13.7911 17.4159 13.2976 17.1663 13.2976 16.8818C13.2976 16.7424 13.4137 16.487 13.5937 16.487C13.7794 16.487 13.913 16.7482 14.3774 16.7482C14.6851 16.7482 14.7373 16.6379 14.7373 16.5567Z'
        fill='#7A6D79'
      />
      <Path
        d='M16.7635 15.3548C16.7635 15.5928 16.5603 15.8017 16.3223 15.8017C16.0668 15.8017 15.8752 15.5928 15.8752 15.3548C15.8752 15.1109 16.0668 14.9077 16.3223 14.9077C16.5603 14.9077 16.7635 15.1109 16.7635 15.3548ZM16.7635 16.9455C16.7635 17.1835 16.5603 17.3925 16.3223 17.3925C16.0668 17.3925 15.8752 17.1835 15.8752 16.9455C15.8752 16.7016 16.0668 16.4984 16.3223 16.4984C16.5603 16.4984 16.7635 16.7016 16.7635 16.9455Z'
        fill='#7A6D79'
      />
      <Path
        d='M19.7244 13.1836C19.7244 13.2185 19.7186 13.2591 19.7012 13.294L17.6576 17.4798C17.617 17.5668 17.5067 17.6249 17.3964 17.6249C17.199 17.6249 17.0713 17.4623 17.0713 17.3172C17.0713 17.2824 17.0829 17.2417 17.1003 17.2069L19.138 13.0212C19.1845 12.9224 19.2774 12.876 19.3819 12.876C19.5444 12.876 19.7244 12.9979 19.7244 13.1836Z'
        fill='#7A6D79'
      />
      <Path
        d='M21.1526 13.1836C21.1526 13.2185 21.1468 13.2591 21.1294 13.294L19.0859 17.4798C19.0452 17.5668 18.9349 17.6249 18.8246 17.6249C18.6272 17.6249 18.4995 17.4623 18.4995 17.3172C18.4995 17.2824 18.5111 17.2417 18.5285 17.2069L20.5662 13.0212C20.6127 12.9224 20.7056 12.876 20.8101 12.876C20.9726 12.876 21.1526 12.9979 21.1526 13.1836Z'
        fill='#7A6D79'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_5631_14317'
          x1={1.66138}
          y1={10.3387}
          x2={22.3387}
          y2={10.3387}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#99E6FC' />
          <Stop offset={0.4296} stopColor='#01D0FB' />
          <Stop offset={0.5256} stopColor='#08C6F7' />
          <Stop offset={0.692} stopColor='#1DA9EB' />
          <Stop offset={0.9074} stopColor='#3F7CD9' />
          <Stop offset={1} stopColor='#4F66D0' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_5631_14317'
          x1={-6.77641}
          y1={10.3387}
          x2={21.9394}
          y2={10.3387}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#99E6FC' />
          <Stop offset={0.4296} stopColor='#01D0FB' />
          <Stop offset={0.5256} stopColor='#08C6F7' />
          <Stop offset={0.692} stopColor='#1DA9EB' />
          <Stop offset={0.9074} stopColor='#3F7CD9' />
          <Stop offset={1} stopColor='#4F66D0' />
        </LinearGradient>
        <LinearGradient
          id='paint2_linear_5631_14317'
          x1={0}
          y1={15.6479}
          x2={27.7633}
          y2={15.6479}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#F8F6F7' />
          <Stop offset={0.1788} stopColor='#F8F6F7' />
          <Stop offset={1} stopColor='#E7E6F5' />
        </LinearGradient>
        <LinearGradient
          id='paint3_linear_5631_14317'
          x1={10.6354}
          y1={15.6479}
          x2={20.9418}
          y2={15.6479}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#F8F6F7' />
          <Stop offset={1} stopColor='#D1CEEB' />
        </LinearGradient>
      </Defs>
    </G>
  ),
})

CompanySiteIcon.displayName = 'CompanySiteIcon'

export  {CompanySiteIcon}
