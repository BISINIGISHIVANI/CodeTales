import { View ,TouchableOpacity,Text,ScrollView,Clipboard} from 'react-native';
import { HStack, Icon ,Button,ButtonText} from '@gluestack-ui/themed';
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
TrashIcon,  GripVerticalIcon, EditIcon, MailIcon, ExternalLinkIcon, MenuIcon, 
InfoIcon, LinkIcon, LockIcon, RemoveIcon, MoonIcon, SlashIcon, CheckCircleIcon, PhoneIcon, 
HelpCircleIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, LoaderIcon, StarIcon, 
SunIcon, UnlockIcon, EyeIcon, EyeOffIcon, AlertCircleIcon, DismissCircleIcon, ShareIcon, 
FavouriteIcon, GlobeIcon, ThreeDotsIcon, PlayIcon, CloseCircleIcon, DeleteFilledIcon, DirectionsIcon, 
DirectWalkInIcon, DismissBareIcon, DismissCircleOutlineIcon, DismissCirclePillIcon, DismissIcon, 
DocFileIcon, DocumentIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, DocumentBulletListFilledIcon, 
DocumentMultipleIcon, DocumentMultipleFilledIcon, DocumentSyncIcon, DocumentTableIcon, DocumentToolboxIcon, 
DownloadIcon, DraftIcon, DrawerArrowDownloadIcon, DumbbellIcon
} from './Icon';

export function IconScreen() {
  // Define an array containing all the icon components DocumentMultipleFilled.tsx
  const icons = [
    CabIcon, CalendarCheckmarkIcon, CalendarFilled, CalendarIcon, CalendarTodayIcon, 
    CallForwardIcon, CallHoldIcon, CameraIcon,
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
    TrashIcon, DownloadIcon, GripVerticalIcon, EditIcon, MailIcon, ExternalLinkIcon, MenuIcon, DownloadIcon,CloseCircleIcon,
    InfoIcon, LinkIcon, LockIcon, RemoveIcon, MoonIcon, SlashIcon, CheckCircleIcon, PhoneIcon, 
    HelpCircleIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, LoaderIcon, StarIcon, 
    SunIcon, UnlockIcon, EyeIcon, EyeOffIcon, AlertCircleIcon, CloseCircleIcon, ShareIcon, 
    FavouriteIcon, GlobeIcon, ThreeDotsIcon, PlayIcon,DeleteFilledIcon, DirectionsIcon, 
    DirectWalkInIcon, DismissBareIcon, DismissCircleOutlineIcon, DismissCirclePillIcon, DismissIcon, 
    DocFileIcon, DocumentIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, DocumentBulletListFilledIcon, 
    DocumentMultipleIcon, DocumentMultipleFilledIcon, DocumentSyncIcon, DocumentTableIcon, DocumentToolboxIcon, 
    DownloadIcon, DraftIcon, DrawerArrowDownloadIcon, DumbbellIcon
  ];

  const toJSFormat = (iconName) => {
    // Split the icon name by camel case
    const words = iconName.match(/[A-Za-z][a-z]*/g) || [];
    // Convert the words to lowercase and join them with underscores
    return words.map(word => word.toLowerCase()).join('_');
  };
  const copyIconHandler=(iconName)=>{
    // Alert the user that the icon name has been copied
    Clipboard.setString(iconName?.render?.displayName);
    alert(`Icon name "${iconName?.render?.displayName}" copied to clipboard!`);
    
  }

  const downloadSVG = (iconName) => {
    const formattedName=iconName.render?.displayName
    const svgString = document.getElementById(formattedName).outerHTML;
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${iconName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

  return (
    <ScrollView>
    <View style={{ justifyContent: 'center' }}>
      <HStack flexWrap="wrap" alignItems="center">
        {/* Map over the icons array to render each icon */}
        {icons.map((IconComponent, index) => (
          <View key={index} style={{ alignItems: 'center', margin: 10 }}>
            <Icon as={IconComponent} m="$2" w="$4" h="$4" cursor='pointer'/>
            <HStack>
            {/* <Button size='$xs' onPress={()=>copyIconHandler(IconComponent)}><ButtonText>Copy</ButtonText></Button> */}
            {/* <Button onPress={()=>downloadSVG(IconComponent)}><ButtonText>Download</ButtonText></Button> */}
            </HStack>
          </View>
        ))}
      </HStack>
    </View>
    </ScrollView>
  );
}
