


  import React from 'react';
  import { Button,useColorMode } from '@chakra-ui/react';
  import { SunIcon  } from '@chakra-ui/icons'

  const Colormoodwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button  mr={"10px"} onClick={toggleColorMode}>
          <SunIcon mr={"10px"}/>
          {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    );
  }
  
  export default Colormoodwitcher;
  