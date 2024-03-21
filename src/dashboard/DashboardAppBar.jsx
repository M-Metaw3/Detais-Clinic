'use client'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
import logo from'../assets/Group 847 (1).png'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import Colormoodwitcher from "../pages/Colormoodwitcher";

// import { useColorModeValue, Box } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';

import Cookies from 'js-cookie';
import {Navigate, useNavigate } from 'react-router-dom';



const LinkItems = [
  // { name: 'Home', icon: FiHome , href:'/dashboard' },
  { name: 'Users', icon: FiHome , href:'/dashboard/users' },

  // { name: 'Services', icon: FiTrendingUp , href:'/dashboard/services' },
  { name: 'contact', icon: FiCompass , href:'/dashboard/contact' },
  // { name: 'Requests', icon: FiStar  , href:'/dashboard/contentmangment/requests'},
  { name: 'Content Mangement', icon: FiSettings , href:'/dashboard/contentmangment' },
]

const SidebarContent = ({ onClose, ...rest }) => {

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#273A5E', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" p={'25px'} alignItems="center" mx="8" justifyContent="space-between">
       
       <Image src={logo}/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
           <NavLink key={link.name}  to={link.href} className='text-decoration-none d-flex align-items-center'>

        <NavItem color='white' icon={link.icon}>
          {link.name}
        </NavItem>
        </NavLink >

      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue('white', 'cyan.400'),
          color: useColorModeValue('black', 'white'),
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ user,onOpen, ...rest }) => {
  const clearCookiesAndReload = () => {
    // Clear cookies
    Cookies.remove('tokenadmin');
    Cookies.remove('useradmin');
  
    // Reload the page
    window.location.reload('/');
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logoaaaaaaaaaa
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
                {/* <Colormoodwitcher/> */}
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                {/* <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                /> */}
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">

                  <Text fontSize="sm">{user?.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user?.role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              {/* <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={clearCookiesAndReload}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const DashboardAppBar = ({islogin,isjwt}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

console.log(islogin)

  return (
    <>
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav user={islogin} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
    
    <Outlet/>
      </Box>
    </Box>

      </>
  )
}

export default DashboardAppBar