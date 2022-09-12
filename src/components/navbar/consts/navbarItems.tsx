import DnsIcon from '@mui/icons-material/Dns';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

import { NavbarItem } from '../types';


export const mainNavbaritems: NavbarItem[] = [
    {id: 0, icon: <PeopleIcon /> , title: "Authentication", path: "authentication"},
    {id: 1, icon: <DnsIcon  /> , title: "Database", path: "database"},
    {id: 2, icon: <ImageIcon  /> , title: "Storage", path: "storage"},
    {id: 3, icon: <PublicIcon /> , title: "Hosting", path: "hosting"},
    {id: 4, icon: <SettingsEthernetIcon  /> , title: "Functions", path: "functions"},
    {id: 5, icon: <SettingsInputComponentIcon  /> , title: "Machine learning", path: "machine-learning"},
]