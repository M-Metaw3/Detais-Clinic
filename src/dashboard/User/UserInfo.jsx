


// import { useState, useEffect } from 'react';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   FormControl,
//   FormLabel,
//   Input,
//   useDisclosure,
//   useToast,
// } from '@chakra-ui/react';
// import axios from 'axios';

// const UserInfo = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const toast = useToast();
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     clinic: '',
//     email: '',
//     role: '',
//     password: '',
//     passwordConfirm: '',
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3111/users');
//       console.log(response?.data?.data?.data)
//       setUsers(response?.data?.data?.data);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to fetch users. Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (selectedUser) {
//         // Update user
//         const response = await axios.put(`/users/${selectedUser._id}`, formData);

//         if (response.status === 200) {
//           toast({
//             title: 'User Updated',
//             description: 'User updated successfully!',
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//           });
//           setSelectedUser(null);
//         }
//       } else {
//         // Create user
//         const response = await axios.post('/users', formData);

//         if (response.status === 201) {
//           toast({
//             title: 'User Created',
//             description: 'User created successfully!',
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//           });
//         }
//       }

//       setFormData({
//         name: '',
//         clinic: '',
//         email: '',
//         role: '',
//         password: '',
//         passwordConfirm: '',
//       });

//       fetchUsers();
//       onClose();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'An error occurred. Please try again later.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setFormData(user);
//     onOpen();
//   };

//   const handleDelete = async (userId) => {
//     try {
//       const response = await axios.delete(`/users/${userId}`);

//       if (response.status === 200) {
//         toast({
//           title: 'User Deleted',
//           description: 'User deleted successfully!',
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//         setSelectedUser(null);
//         fetchUsers();
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete the user. Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <>
//       <Table variant="striped" colorScheme="gray">
//         <Thead>
//           <Tr>
//             <Th>Name</Th>
//             <Th>Clinic</Th>
//             <Th>Email</Th>
//             <Th>Role</Th>
//             <Th>Action</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {users.map((user) => (
//             <Tr key={user._id}>
//               <Td>{user.name}</Td>
//               <Td>{user.clinic}</Td>
//               <Td>{user.email}</Td>
//               <Td>{user.role}</Td>
//               <Td>
//                 <Button size="sm" onClick={() => handleEdit(user)}>
//                   Edit
//                 </Button>
//                 <Button size="sm" colorScheme="red" ml={2} onClick={() => handleDelete(user._id)}>
//                   Delete
//                 </Button>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalContent>
//         <ModalHeader>{selectedUser ? 'Edit User' : 'Create User'}</ModalHeader>
//       <ModalCloseButton />
//       <ModalBody>
//         <form onSubmit={handleSubmit}>
//           <FormControl mb={4}>
//             <FormLabel>Name</FormLabel>
//             <Input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4}>
//             <FormLabel>Clinic</FormLabel>
//             <Input
//               name="clinic"
//               value={formData.clinic}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4}>
//             <FormLabel>Email</FormLabel>
//             <Input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4}>
//             <FormLabel>Role</FormLabel>
//             <Input
//               name="role"
//               value={formData.role}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4}>
//             <FormLabel>Password</FormLabel>
//             <Input
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required={!selectedUser}
//             />
//           </FormControl>
//           <FormControl mb={4}>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               name="passwordConfirm"
//               type="password"
//               value={formData.passwordConfirm}
//               onChange={handleInputChange}
//               required={!selectedUser}
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue">
//             {selectedUser ? 'Update' : 'Create'}
//           </Button>
//         </form>
//       </ModalBody>
//     </ModalContent>
//   </Modal>
// </>
// );
// };

// export default UserInfo;


// import React, { useState, useEffect } from 'react';
// import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react';
// import axios from 'axios';

// const UserInfo = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     name: '',
//     clinic: '',
//     email: '',
//     role: 'user',
//     phone: '',
//     password: '',
//     passwordConfirm: '',
//     country: '',
//     EmailVerify: false,
//     active: true,
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3111/users');
//       setUsers(response?.data?.data?.data);
//       console.log(response?.data?.data?.data)
//     } catch (error) {
//       console.error('Failed to fetch users:', error.message);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (userId) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user._id === userId ? { ...user, selected: !user.selected } : user
//       )
//     );
//   };

//   const handleAddUser = async () => {
//     try {
//       await axios.post('http://localhost:3111/users', newUser);
//       setNewUser({
//         name: '',
//         clinic: '',
//         email: '',
//         role: 'user',
//         phone: '',
//         password: '',
//         passwordConfirm: '',
//         country: '',
//         EmailVerify: false,
//         active: true,
//       });
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to add user:', error.message);
//     }
//   };

//   const handleDeleteUsers = async () => {
//     const selectedUserIds = users.filter((user) => user.selected).map((user) => user._id);
//     try {
//       await axios.delete('http://localhost:3111/users/delete', { data: { userIds: selectedUserIds } });
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to delete users:', error.message);
//     }
//   };

//   return (
//     <Box maxW="800px" mx="auto" my={8}>
//       <Input
//         mb={4}
//         placeholder="Name"
//         name="name"
//         value={newUser.name}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         placeholder="Clinic"
//         name="clinic"
//         value={newUser.clinic}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         placeholder="Email"
//         name="email"
//         value={newUser.email}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         placeholder="Phone"
//         name="phone"
//         value={newUser.phone}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         placeholder="Country"
//         name="country"
//         value={newUser.country}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={newUser.password}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         type="password"
//         placeholder="Confirm Password"
//         name="passwordConfirm"
//         value={newUser.passwordConfirm}
//         onChange={handleInputChange}
//       />

//       <Button colorScheme="blue" onClick={handleAddUser} mb={4}>
//         Add User
//       </Button>

//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Name</Th>
//             <Th>Clinic</Th>
//             <Th>Email</Th>
//             <Th>Phone</Th>
//             <Th>Country</Th>
//             <Th>Role</Th>
//             <Th>Action</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {users.map((user) => (
//             <Tr key={user._id}>
//               <Td>{user.name}</Td>
//               <Td>{user.clinic}</Td>
//               <Td>{user.email}</Td>
//               <Td>{user.phone}</Td>
//               <Td>{user.country}</Td>
//               <Td>{user.role}</Td>
//               <Td>
//                 <Checkbox
//                   isChecked={user.selected}
//                   onChange={() => handleCheckboxChange(user._id)}
//                 />
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>

//       <Button colorScheme="red" onClick={handleDeleteUsers} mt={4}>
//         Delete Selected Users
//       </Button>

//       <Box mt={4}>
//         <p>Total Users: {users.length}</p>
//       </Box>
//     </Box>
//   );
// };

// export default UserInfo;














// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Checkbox,
//   Stack,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
// } from '@chakra-ui/react';
// import axios from 'axios';

// const UserInfo = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     name: '',
//     clinic: '',
//     email: '',
//     role: 'user',
//     phone: '',
//     password: '',
//     passwordConfirm: '',
//     country: '',
//     EmailVerify: false,
//     active: true,
//   });

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
//   const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3111/users');
//       setUsers(response?.data?.data?.data);
//     } catch (error) {
//       console.error('Failed to fetch users:', error.message);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (userId) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user._id === userId ? { ...user, selected: !user.selected } : user
//       )
//     );
//   };

//   const handleAddUser = async () => {
//     try {
//       await axios.post('http://localhost:3111/users', newUser);
//       setNewUser({
//         name: '',
//         clinic: '',
//         email: '',
//         role: 'user',
//         phone: '',
//         password: '',
//         passwordConfirm: '',
//         country: '',
//         EmailVerify: false,
//         active: true,
//       });
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to add user:', error.message);
//     }
//   };

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     setNewUser(user);
//     setUpdateModalOpen(true);
//   };

//   const handleUpdateUser = async () => {
//     try {
//       await axios.put(`http://localhost:3111/users/${selectedUser._id}`, newUser);
//       setUpdateModalOpen(false);
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to update user:', error.message);
//     }
//   };

//   const handleDeleteUsers = () => {
//     setDeleteAlertOpen(true);
//   };

//   const handleConfirmDelete = async () => {
//     const selectedUserIds = users.filter((user) => user.selected).map((user) => user._id);
//     try {
//       await axios.delete('http://localhost:3111/users/delete', { data: { userIds: selectedUserIds } });
//       setDeleteAlertOpen(false);
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to delete users:', error.message);
//     }
//   };

//   const handleCancelDelete = () => {
//     setDeleteAlertOpen(false);
//   };

//   return (
//     <Box maxW="800px" mx="auto" my={8}>
//       <Input mb={4} placeholder="Name" name="name" value={newUser.name} onChange={handleInputChange} />
//       <Input mb={4} placeholder="Clinic" name="clinic" value={newUser.clinic} onChange={handleInputChange} />
//       <Input mb={4} placeholder="Email" name="email" value={newUser.email} onChange={handleInputChange} />
//       <Input mb={4} placeholder="Phone" name="phone" value={newUser.phone} onChange={handleInputChange} />
//       <Input mb={4} placeholder="Country" name="country" value={newUser.country} onChange={handleInputChange} />
//       <Input
//         mb={4}
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={newUser.password}
//         onChange={handleInputChange}
//       />
//       <Input
//         mb={4}
//         type="password"
//         placeholder="Confirm Password"
//         name="passwordConfirm"
//         value={newUser.passwordConfirm}
//         onChange={handleInputChange}
//       />

//       <Stack direction="row" spacing={4}>
//         <Button colorScheme="blue" onClick={handleAddUser}>
//           Add User
//         </Button>
//         <Button colorScheme="teal" onClick={handleUpdateUser}>
//           Update User
//         </Button>
//         <Button colorScheme="red" onClick={handleDeleteUsers}>
//           Delete Selected Users
//         </Button>
//       </Stack>

//       <Table variant="simple" mt={4}>
//         <Thead>
//           <Tr>
//             <Th>Name</Th>
//             <Th>Clinic</Th>
//             <Th>Email</Th>
//             <Th>Phone</Th>
//             <Th>Country</Th>
//             <Th>Role</Th>
//             <Th>Action</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {users.map((user) => (
//             <Tr key={user._id}>
//               <Td>{user.name}</Td>
//               <Td>{user.clinic}</Td>
//               <Td>{user.email}</Td>
//               <Td>{user.phone}</Td>
//               <Td>{user.country}</Td>
//               <Td>{user.role}</Td>
//               <Td>
//                 <Checkbox
//                   isChecked={user.selected}
//                   onChange={() => handleCheckboxChange(user._id)}
//                 />
//                 <Button size="sm" ml={2} onClick={() => handleEditUser(user)}>
//                   Edit
//                 </Button>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>

//       <Box mt={4}>
//         <p>Total Users: {users.length}</p>
//       </Box>

//       {/* Update User Modal */}
//       <AlertDialog isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}>
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader>Edit User</AlertDialogHeader>
//             <AlertDialogBody>
//               <Input
//                 mb={4}
//                 placeholder="Name"
//                 name="name"
//                 value={newUser.name}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 placeholder="Clinic"
//                 name="clinic"
//                 value={newUser.clinic}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 placeholder="Email"
//                 name="email"
//                 value={newUser.email}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 placeholder="Phone"
//                 name="phone"
//                 value={newUser.phone}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 placeholder="Country"
//                 name="country"
//                 value={newUser.country}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={newUser.password}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 mb={4}
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="passwordConfirm"
//                 value={newUser.passwordConfirm}
//                 onChange={handleInputChange}
//               />
//             </AlertDialogBody>
//             <AlertDialogFooter>
//               <Button colorScheme="blue" onClick={handleUpdateUser}>
//                 Update User
//               </Button>
//               <Button ml={3} onClick={() => setUpdateModalOpen(false)}>
//                 Cancel
//               </Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>

//       {/* Delete User Alert */}
//       <AlertDialog isOpen={isDeleteAlertOpen} onClose={handleCancelDelete}>
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader>Delete Users</AlertDialogHeader>
//             <AlertDialogBody>
//               Are you sure you want to delete the selected users?
//             </AlertDialogBody>
//             <AlertDialogFooter>
//               <Button colorScheme="red" onClick={handleConfirmDelete}>
//                 Yes
//               </Button>
//               <Button ml={3} onClick={handleCancelDelete}>
//                 No
//               </Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>
//     </Box>
//   );
// };

// export default UserInfo;
























import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  useToast,
  Th,
  Td,
  Checkbox,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  keyframes,
  Container
} from '@chakra-ui/react';
// import { Box, Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { GetData,DeleteData } from '../../api/apiFactory';
import Skeletoncomp from '../../components/Skeletoncomp';
import { Text } from '@chakra-ui/react';
const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    clinic: '',
    email: '',
    role: 'user',
    phone: '',
    password: '',
    passwordConfirm: '',
    country: '',
    EmailVerify: false,
    active: true,
  });
  const toast = useToast();

  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [deleteid, setdeleteid] = useState('');



 

    const { isPending, error, data } = useQuery({
        queryKey: ['UserInformation'],
        queryFn: () =>
        GetData("/users")
      })
console.log(data);




  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, selected: !user.selected } : user
      )
    );
  };



  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewUser(user);
    setUpdateModalOpen(true);
  };

  const handleUpdateUser = async () => {
    try {
     const res= await axios.put(`http://localhost:3111/users/${selectedUser._id}`, newUser);
     console.log(res)
     if (res.status === 200) {
        toast({
          title: 'user Updated',
          description: 'user updated successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });}
          setUpdateModalOpen(false);                 
        window.location.reload()

    //   fetchUsers();
    } catch (error) {
      console.error('Failed to update user:', error.message);
    }
  };

  const handleDeleteUsers = (id) => {
    setDeleteAlertOpen(true);
    setdeleteid(id)
    console.log(deleteid)
  };

  const handleConfirmDelete = async () => {
    // const selectedUserIds = users.filter((user) => user.selected).map((user) => user._id);
    if(!deleteid) alert("no user exsite")
    try {

        const res = await DeleteData(`/users/${deleteid}`)
        if(res.status==204){
            toast({
                title: 'User Deleted',
                description: 'User Deleted!',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            // alert("success deleted data")
            setDeleteAlertOpen(false);
            window.location.reload()
          }
    //   fetchUsers();
    } catch (error) {
      console.error('Failed to delete users:', error.message);
    }
  };

  const handleCancelDelete = () => {
    setDeleteAlertOpen(false);
    setdeleteid("")

  };
  if(isPending){
    return <Skeletoncomp/>
}







const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out 1`;
  return (
    <Box  mx="auto" my={8}>
    













    <Box display={'flex'} justifyContent={'center'} p={"20px "}  w={'100%'} >
  
      <Box
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
        bgGradient="linear(to-l, #7928CA, #273A5E)"
        width="20"
        height="20"
        borderRadius={'100%'}
        display="flex"
        textAlign={"center"}
        alignContent={'center'}
        justifyContent={'center'}
        alignItems={'center'}
      >
<Text
textAlign={"center"}
        alignContent={'center'}
        color={"white"}
>


    Users :    {data?.data?.data?.length}
</Text>
    </Box>

    </Box>























      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
          <Th>Number</Th>

            <Th>Name</Th>
            <Th>Clinic</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Country</Th>
            <Th>Role</Th>
            <Th>Delete</Th>
            <Th>Edit</Th>

          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.data?.map((user,ind) => (
            <Tr key={user._id}>
                <Td>{ind+1}</Td>

              <Td>{user.name}</Td>
              <Td>{user.clinic}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.country}</Td>
              <Td>{user.role}</Td>
              <Td>
              <Button wordBreak={"break-word"} colorScheme="red" onClick={()=>handleDeleteUsers(user._id)}>
          Delete  
        </Button>
                {/* <Checkbox
                  isChecked={user.selected}
                  onChange={() => handleCheckboxChange(user._id)}
                /> */}
              </Td>

              <Td>
              <Button wordBreak={"break-word"} colorScheme="green" onClick={() => handleEditUser(user)}>
              Edit  
        </Button>
                {/* <Button colorScheme="green" size="sm" ml={2} onClick={() => handleEditUser(user)}>
                  Edit
                </Button> */}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
{/* 
      <Box mt={4}>
        <p>Total Users: {users.length}</p>
      </Box> */}

      {/* Update User Modal */}
      <AlertDialog isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Edit User</AlertDialogHeader>
            <AlertDialogBody>
              <Input
                mb={4}
                placeholder="Name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
              <Input
                mb={4}
                placeholder="Clinic"
                name="clinic"
                value={newUser.clinic}
                onChange={handleInputChange}
              />
              <Input
                mb={4}
                placeholder="Email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
              <Input
                mb={4}
                placeholder="Phone"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
              />
              <Input
                mb={4}
                placeholder="Country"
                name="country"
                value={newUser.country}
                onChange={handleInputChange}
              />
              {/* <Input
                mb={4}
                type="password"
                placeholder="Password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
              />
              <Input
                mb={4}
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                value={newUser.passwordConfirm}
                onChange={handleInputChange}
              /> */}
              <Select
                mb={4}
                placeholder="Select Role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              >
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </Select>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={handleUpdateUser}>
                Update User
              </Button>
              <Button ml={3} onClick={() => setUpdateModalOpen(false)}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Delete User Alert */}
      <AlertDialog isOpen={isDeleteAlertOpen} onClose={handleCancelDelete}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Users</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete the selected users?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleConfirmDelete}>
                Yes
              </Button>
              <Button ml={3} onClick={handleCancelDelete}>
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default UserInfo;
