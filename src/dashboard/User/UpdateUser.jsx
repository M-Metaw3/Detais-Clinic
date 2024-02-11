
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
} from '@chakra-ui/react';
import axios from 'axios';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { GetData } from '../../api/apiFactory';
const UpdateUser = () => {
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

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
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdateUser = async () => {
    try {
     const res= await axios.put(`${Url}/users/`, newUser);
      setUpdateModalOpen(false);
      console.log(res)
    //   fetchUsers();
    } catch (error) {
      console.error('Failed to update user:', error.message);
    }
  };

    return (
        <div>
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
              <Input
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
              />
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

        </div>
    );
}

export default UpdateUser;
