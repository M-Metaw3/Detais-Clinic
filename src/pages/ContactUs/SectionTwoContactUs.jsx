import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { PostData } from '../../api/apiFactory';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const SectionTwoContactUs = () => {
  const [succ,setsucc]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} - ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    // if (!isFormValid) {
    //   alert('Please fill in all fields');
    //   // You can display an error message or handle it in any other way
    //   return;
    // }
console.log(formData)
    try {
      const response = await PostData('/contactus/contact', formData);
      console.log(response?.response?.data?.error);

      if (response.status === 201) {
      setsucc(true)

        console.log('Done');
      }else{

      }
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };
console.log(formData)
  return (
<>
    {/* <Box
    display="flex"
      flexDirection="column"
      flexWrap="wrap"
      w="50%"
      textAlign="center"
      ml="auto"
      mr="auto"
      bg={useColorModeValue('white', 'white')}
      p={4}
      color="black"
      >
      <Box
        _dark={{ bg: '#141E31', color: 'white' }}
        display="flex"
        boxShadow="1px 1px 8px  grey"
        borderRadius="2px"
        border="1px solid grey"
        flexDirection="column"
        width="100%"
      >
        <Box flexWrap="wrap" w="100%" display="flex" justifyContent="space-around" textAlign="center" p={4} color="grey">
          <FormControl w="48%">
            <FormLabel _dark={{ color: 'white' }}>Name</FormLabel>
            <Input required    name="name"  color='black' onChange={handleInputChange} v _dark={{ color: 'white' }} type="name" />
          </FormControl>
          <FormControl w="48%">
            <FormLabel _dark={{ color: 'white' }}>Email</FormLabel>
            <Input required   name="email"  color='black'  onChange={handleInputChange}  _dark={{ color: 'white' }} type="email" />
          </FormControl>
        </Box>
        <Box flexWrap="wrap" w="100%" display="flex" justifyContent="space-between" textAlign="center" p={4} color="grey">
          <FormControl w="48%">
            <FormLabel _dark={{ color: 'white' }}>Phone</FormLabel>
            <Input required color='black'  onChange={handleInputChange}    name="phone" _dark={{ color: 'white' }} type="phone" />
          </FormControl>
          <FormControl w="48%">
            <FormLabel _dark={{ color: 'white' }}>Company</FormLabel>
            <Input required  color='black'  onChange={handleInputChange}    name="company"   
              _dark={{ color: 'white' }} type="company" />
          </FormControl>
        </Box>
        <Box w="100%" display="flex" justifyContent="space-between" textAlign="center" p={4} color="white">
          <FormControl w="100%">
            <FormLabel color={"grey"} >Message</FormLabel>
            <Textarea
            required
              onChange={handleInputChange}
              value={formData.message}
              name="message"
              color='black'
              _dark={{ color: 'white' }}
              placeholder="Here is a sample placeholder"
              size="lg"
              resize="vertical"
            />
          </FormControl>
        </Box>
        <Box w="100%" display="flex" justifyContent="space-between" textAlign="center" p={4} color="white">
          <FormControl w="10%">
            <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
              Send Message
              <ArrowForwardIcon ml="3px" />
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
    
 { succ&&<Alert status='success'>
    <AlertIcon />
    success sending message
  </Alert>} */}












<Box
    display="flex"
      flexDirection="column"
      flexWrap="wrap"
      w="50%"
      textAlign="center"
      ml="auto"
      mr="auto"
      bg={useColorModeValue('white', 'white')}
      p={4}
      color="black"
      >



  <div className="flex flex-col self-center p-8 mt-5 max-w-full text-sm leading-5 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Neutral-colors-400,#E1E4ED)] text-slate-500 w-[1086px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">Name</div>
            <div className="justify-center items-start py-5 pr-16 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
            <input required   className="w-full  bg-transparent border-none focus:outline-none"    name="name"   onChange={handleInputChange}  type="name" />
            </div>
          </div>
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">Email</div>
            <div className="justify-center items-start py-5 pr-16 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
            <input required   className="w-full  bg-transparent border-none focus:outline-none"    name="email"   onChange={handleInputChange}  type="name" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">Phone</div>
            <div className="justify-center items-start py-5 pr-16 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
            <input required   className="w-full  bg-transparent border-none focus:outline-none"    name="name"   onChange={handleInputChange}  type="phone" />
            </div>
          </div>
          <div className="flex flex-col flex-1 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">Company</div>
            <div className="justify-center items-start py-5 pr-16 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
            <input required   className="w-full  bg-transparent border-none focus:outline-none"    name="company"   onChange={handleInputChange}  type="name" />
            </div>
          </div>
        </div>
        <div className="mt-6 font-semibold max-md:max-w-full">Message</div>
        <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 leading-5 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
        <textarea required   className="w-full  bg-transparent border-none focus:outline-none"    name="message"   onChange={handleInputChange}  type="name" />
        </div>
          <button onClick={handleSubmit}>
        <div className="flex gap-1 justify-center self-start px-5 py-3.5 mt-6 font-semibold text-center text-white rounded-md shadow-sm bg-slate-500">

          <div className="grow">Send message</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/377ccebbdff2101d4822213e27eb8570a8f84621e8b9201ee74c78e80c1afd4a?"
            className="w-3 aspect-square"
            />
        </div>
            </button>
      </div>



      { succ&&<Alert status='success'>
    <AlertIcon />
    success sending message
  </Alert>} 

      </Box>      








              </>
    
  );
};

export default SectionTwoContactUs;



    // <Container maxWidth="md">
    //   <form onSubmit={handleSubmit}>
    //     <TextField
    //       label="Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       fullWidth
    //       required
    //     />
    //     <TextField
    //       label="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       fullWidth
    //       required
    //     />
    //     <TextField
    //       label="Phone"
    //       value={phone}
    //       onChange={(e) => setPhone(e.target.value)}
    //       fullWidth
    //     />
    //     <TextField
    //       label="Message"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       fullWidth
    //       multiline
    //       rows={4}
    //     />
    //     <TextField
    //       label="Company"
    //       value={company}
    //       onChange={(e) => setCompany(e.target.value)}
    //       fullWidth
    //     />
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       fullWidth
    //       style={{ marginTop: '16px' }}
    //     >
    //       Save Contact
    //     </Button>
    //   </form>

    //   <TableContainer component={Paper} style={{ marginTop: '32px' }}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Name</TableCell>
    //           <TableCell>Email</TableCell>
    //           <TableCell>Phone</TableCell>
    //           <TableCell>Message</TableCell>
    //           <TableCell>Company</TableCell>
    //           <TableCell></TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {contacts.map((contact) => (
    //           <TableRow key={contact._id}>
    //             <TableCell>{contact.name}</TableCell>
    //             <TableCell>{contact.email}</TableCell>
    //             <TableCell>{contact.phone}</TableCell>
    //             <TableCell>{contact.message}</TableCell>
    //             <TableCell>{contact.company}</TableCell>
    //             <TableCell>
    //               <IconButton
    //                 aria-label="delete"
    //                 onClick={() => handleDelete(contact._id)}
    //               >
    //                 <DeleteIcon />
    //               </IconButton>
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>