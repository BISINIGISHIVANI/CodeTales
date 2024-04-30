import { View ,TouchableOpacity,Text} from 'react-native';
import { HStack, Icon } from '@gluestack-ui/themed';
// Import all the individual icon components
import { 
  CabIcon, CalendarCheckmarkIcon, CalendarFilled, CalendarIcon, CalendarTodayIcon, 
  CallForwardIcon, CallHoldIcon, CameraIcon, CameraSwitchIcon, ChatAddIcon, 
  ChatHelpFilledIcon, ChatHelpIcon, ChatIcon, ChatOutlinedIcon, CheckmarkCircleFilledIcon, 
  CheckmarkCircleIcon, CheckmarkIcon, ApprovalsTabIcon, CircleIcon, ClockIcon, ClockOutlineIcon, 
  CommonFloorIcon, CommunityIcon, CompanySiteIcon, CopyIcon, CustomerReferralsIcon, CustomizeIcon,
  BarcodeScannerIcon, BlankFileIcon, BoardHeartIcon, BookIcon, BoxIcon, BuildingsIcon, 
  BuildingMultipleIcon, BuildingSingleIcon, AttachIcon, ArrowDropdownIcon, ArrowCircleRight, 
  ArrowCounterClockwise, ArrowCircleLeftIcon, AppsIcon, ArchiveIcon, AddIcon, AlertFilledIcon, 
  ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowDownIcon, ChevronsLeftIcon, ChevronsRightIcon, 
  ChevronsUpDownIcon, AtSignIcon, PaperclipIcon, BellIcon, CalendarDaysIcon, MessageCircleIcon, 
  CheckIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, 
  TrashIcon, DownloadIcon, GripVerticalIcon, EditIcon, MailIcon, ExternalLinkIcon, MenuIcon, 
  InfoIcon, LinkIcon, LockIcon, RemoveIcon, MoonIcon, SlashIcon, CheckCircleIcon, PhoneIcon, 
  HelpCircleIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, LoaderIcon, StarIcon, 
  SunIcon, UnlockIcon, EyeIcon, EyeOffIcon, AlertCircleIcon, CloseCircleIcon, ShareIcon, 
  FavouriteIcon, GlobeIcon, ThreeDotsIcon, PlayIcon
} from './Icon';

export function IconScreen() {
  // Define an array containing all the icon components
  const icons = [
    CabIcon, CalendarCheckmarkIcon, CalendarFilled, CalendarIcon, CalendarTodayIcon, 
    CallForwardIcon, CallHoldIcon, CameraIcon, 
    // CameraSwitchIcon,
    ChatAddIcon, 
    ChatHelpFilledIcon, ChatHelpIcon, ChatIcon, ChatOutlinedIcon, CheckmarkCircleFilledIcon, 
    CheckmarkCircleIcon, CheckmarkIcon, ApprovalsTabIcon, CircleIcon, ClockIcon, ClockOutlineIcon, 
    CommonFloorIcon, CommunityIcon, CompanySiteIcon, CopyIcon, CustomerReferralsIcon, CustomizeIcon,
    BarcodeScannerIcon, BlankFileIcon, BoardHeartIcon, BookIcon, BoxIcon, BuildingsIcon, 
    BuildingMultipleIcon, BuildingSingleIcon, AttachIcon, ArrowDropdownIcon, ArrowCircleRight, 
    ArrowCounterClockwise, ArrowCircleLeftIcon, AppsIcon, ArchiveIcon, AddIcon, AlertFilledIcon, 
    ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowDownIcon, ChevronsLeftIcon, ChevronsRightIcon, 
    ChevronsUpDownIcon, AtSignIcon, PaperclipIcon, BellIcon, CalendarDaysIcon, MessageCircleIcon, 
    CheckIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, 
    TrashIcon, DownloadIcon, GripVerticalIcon, EditIcon, MailIcon, ExternalLinkIcon, MenuIcon, 
    InfoIcon, LinkIcon, LockIcon, RemoveIcon, MoonIcon, SlashIcon, CheckCircleIcon, PhoneIcon, 
    HelpCircleIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, LoaderIcon, StarIcon, 
    SunIcon, UnlockIcon, EyeIcon, EyeOffIcon, AlertCircleIcon, CloseCircleIcon, ShareIcon, 
    FavouriteIcon, GlobeIcon, ThreeDotsIcon, PlayIcon
  ];

  return (
    <View style={{ justifyContent: 'center' }}>
      <HStack flexWrap="wrap" alignItems="center">
        {/* Map over the icons array to render each icon */}
        {icons.map((IconComponent, index) => (
          <View key={index} style={{ alignItems: 'center', margin: 10 }}>
            <Icon as={IconComponent} m="$2" w="$4" h="$4" cursor='pointer'/>
           
          </View>
        ))}
      </HStack>
    </View>
  );
}
