import {
  Divider ,
  Image ,
  Center,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Colormoodwitcher from './Colormoodwitcher'
import logo from '../assets/logo (1).svg'
import logo2 from '../assets/Group 847 (1).png'

import Cookies from 'js-cookie';


export default function Nav() {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode } = useColorMode();
  const userCookie = Cookies?.get('user');
  const user = userCookie ? JSON.parse(userCookie) : undefined;
  const jwtCookie = Cookies?.get('user');
  const jwt = jwtCookie ? JSON.parse(jwtCookie) : undefined;
  const logoSrc = colorMode === 'dark' ? logo2 : logo;
  const clearCookiesAndReload = () => {
    // Clear cookies
    Cookies.remove('user');
    Cookies.remove('jwt');
  
    // Reload the page
    window.location.reload('/');
  };
  return (
    <Box  width={"100%"} position={"sticky"} zIndex={"1"} top={"0"}     >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'} 
   justifyContent={"space-around"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex 
          ml={"40px"}
          flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         <NavLink to={'/'}>
        <Image

    
style={{width:"100px",height:'60px'}}
    objectFit='fill'
    src={logoSrc}
    alt='Dan Abramov'
  />
</NavLink>
          <Center marginLeft={"35px"} height='65px'>
  <Divider  orientation='vertical' />
</Center>
        
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

          <Colormoodwitcher/>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'column'}
          spacing={6}>
            {!user&&!jwt?
           <NavLink to={`/login`} className='text-decoration-none d-flex align-items-center'>
          <Button
          mr={"40px"}
          onClick={()=>{console.log("ssssssssss")}}
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'14px'}
            fontWeight={600}
            lineHeight={"20px"}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'blue.300',
            }}>
              login In
             <ArrowForwardIcon margin={"3px"}/> 
          </Button >
          </NavLink>:         
          //  <NavLink to={`/`} className='text-decoration-none d-flex align-items-center'>
          <Button
          mr={"40px"}
          onClick={()=>{clearCookiesAndReload()}}
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'14px'}
            fontWeight={600}
            lineHeight={"20px"}
            color={'white'}
            bg={'red.400'}
            href={'#'}
            _hover={{
              bg: 'red.800',
            }}>
           logout
             <ArrowForwardIcon margin={"3px"}/> 
          </Button >
          // </NavLink>
          }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'}  placement={'bottom-start'}>

            <PopoverTrigger>
              <NavLink to={navItem.link}>
              <Box

       margin="15px"
                as="a"
                p={1}
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={400}
                color={"#6D758F"}
                transition={"0.3s"}
                _hover={{
                  textDecoration: 'none',
                  color: '6D758F',
                 
                fontWeight:600 
                }}>
                {navItem.label}
              </Box>
              </NavLink>
            </PopoverTrigger>

          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
        
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
        
      </Collapse>
    </Stack>
  )
}


const NAV_ITEMS = [
  {
    label: 'Services',
    link:'/services'
  },
  
  {
    label: 'Blog',
    link:'/blogs'

  },
  {
    label: 'About Us',
    link:'/aboutus'

  },
  {
    label: 'Contact Us',
    link:'/contactUs'

  },
  // {
  //   label: 'Language',
  //   link:'/services'

  // },

]