// // import React from 'react';
// // import TextField from '@mui/material/TextField';
// // const ContactDashboard = () => {
// //   return (
// //     <div>
// //       ssssssssssssssssssss
    
// //     </div>
// //   );
// // }

// // export default ContactDashboard;
//  import * as React from "react";

// function ContactDashboard(props) {
//   return (
//     <>
//       <div className="div">
//         <div className="div-2">
//           <div className="div-3">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1a990ca6c5783e7966a52b0cfb996617816c7da33f977f80680d132aedfd4a?"
//               className="img"
//             />
//             <div className="div-4">Request #000</div>
//           </div>
//           <div className="div-5">Accepted</div>
//         </div>
//         <div className="div-6" />
//         <div className="div-7">
//           <div className="div-8">
//             <div className="div-9">Name</div>
//             <div className="div-10">Brian Clark</div>
//           </div>
//           <div className="div-11">
//             <div className="div-12">Email</div>
//             <div className="div-13">example@youremail.com</div>
//           </div>
//         </div>
//         <div className="div-14">
//           <div className="div-15">
//             <div className="div-16">Phone number</div>
//             <div className="div-17">Service title</div>
//           </div>
//           <div className="div-18">
//             <div className="div-19">Service</div>
//             <div className="div-20">service</div>
//           </div>
//           <div className="div-21">
//             <div className="div-22">Date</div>
//             <div className="div-23">00 / 00 / 0000</div>
//           </div>
//           <div className="div-24">
//             <div className="div-25">service cost</div>
//             <div className="div-26">2000 $</div>
//           </div>
//         </div>
//         <div className="div-27">Design file</div>
//         <div className="div-28">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/18589237d8b646d1fec817a6c662559868d15b9e1777563d8e162953519e8757?"
//             className="img-2"
//           />
//         </div>
//       </div>
//       <style jsx>{`
//         .div {
//           background-color: #fff;
//           display: flex;
//           flex-direction: column;
//           padding: 32px 40px 50px;
//         }
//         @media (max-width: 991px) {
//           .div {
//             padding: 0 20px;
//           }
//         }
//         .div-2 {
//           display: flex;
//           width: 100%;
//           justify-content: space-between;
//           gap: 20px;
//           white-space: nowrap;
//         }
//         @media (max-width: 991px) {
//           .div-2 {
//             max-width: 100%;
//             flex-wrap: wrap;
//             white-space: initial;
//           }
//         }
//         .div-3 {
//           align-self: start;
//           display: flex;
//           margin-top: 15px;
//           gap: 12px;
//           font-size: 20px;
//           color: #000;
//           font-weight: 600;
//         }
//         @media (max-width: 991px) {
//           .div-3 {
//             white-space: initial;
//           }
//         }
//         .img {
//           aspect-ratio: 0.63;
//           object-fit: auto;
//           object-position: center;
//           width: 10px;
//           fill: rgba(92, 106, 110, 0.38);
//           align-self: start;
//         }
//         .div-4 {
//           font-family: Open Sans, sans-serif;
//           flex-grow: 1;
//         }
//         @media (max-width: 991px) {
//           .div-4 {
//             white-space: initial;
//           }
//         }
//         .div-5 {
//           justify-content: center;
//           align-items: center;
//           border-radius: 4px;
//           background-color: rgba(2, 212, 48, 0.08);
//           color: #02d430;
//           padding: 17px 60px 10px;
//           font: 500 14px/143% Inter, -apple-system, Roboto, Helvetica,
//             sans-serif;
//         }
//         @media (max-width: 991px) {
//           .div-5 {
//             white-space: initial;
//             padding: 0 20px;
//           }
//         }
//         .div-6 {
//           background-color: #9a9a9a;
//           margin-top: 31px;
//           height: 1px;
//         }
//         @media (max-width: 991px) {
//           .div-6 {
//             max-width: 100%;
//           }
//         }
//         .div-7 {
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//           font-size: 14px;
//           color: var(--Neutral-colors-600, #6d758f);
//           white-space: nowrap;
//           line-height: 143%;
//           margin: 51px 16px 0 0;
//         }
//         @media (max-width: 991px) {
//           .div-7 {
//             max-width: 100%;
//             flex-wrap: wrap;
//             white-space: initial;
//             margin: 40px 10px 0 0;
//           }
//         }
//         .div-8 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//         }
//         @media (max-width: 991px) {
//           .div-8 {
//             max-width: 100%;
//             white-space: initial;
//           }
//         }
//         .div-9 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         @media (max-width: 991px) {
//           .div-9 {
//             max-width: 100%;
//           }
//         }
//         .div-10 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-10 {
//             white-space: initial;
//             max-width: 100%;
//             padding-right: 20px;
//           }
//         }
//         .div-11 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//         }
//         @media (max-width: 991px) {
//           .div-11 {
//             max-width: 100%;
//             white-space: initial;
//           }
//         }
//         .div-12 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         @media (max-width: 991px) {
//           .div-12 {
//             max-width: 100%;
//           }
//         }
//         .div-13 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-13 {
//             max-width: 100%;
//             padding-right: 20px;
//             white-space: initial;
//           }
//         }
//         .div-14 {
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//           font-size: 14px;
//           color: var(--Neutral-colors-600, #6d758f);
//           line-height: 143%;
//           margin: 33px 16px 0 0;
//         }
//         @media (max-width: 991px) {
//           .div-14 {
//             max-width: 100%;
//             margin-right: 10px;
//             flex-wrap: wrap;
//           }
//         }
//         .div-15 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//         }
//         .div-16 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         .div-17 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           white-space: nowrap;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-17 {
//             white-space: initial;
//             padding-right: 20px;
//           }
//         }
//         .div-18 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//           white-space: nowrap;
//         }
//         @media (max-width: 991px) {
//           .div-18 {
//             white-space: initial;
//           }
//         }
//         .div-19 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         .div-20 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-20 {
//             padding-right: 20px;
//             white-space: initial;
//           }
//         }
//         .div-21 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//           white-space: nowrap;
//         }
//         @media (max-width: 991px) {
//           .div-21 {
//             white-space: initial;
//           }
//         }
//         .div-22 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         .div-23 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-23 {
//             white-space: initial;
//             padding-right: 20px;
//           }
//         }
//         .div-24 {
//           display: flex;
//           flex-grow: 1;
//           flex-basis: 0%;
//           flex-direction: column;
//         }
//         .div-25 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//         }
//         .div-26 {
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           font-family: Inter, sans-serif;
//           align-items: start;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           margin-top: 12px;
//           justify-content: center;
//           font-weight: 400;
//           white-space: nowrap;
//           padding: 18px 60px 18px 16px;
//         }
//         @media (max-width: 991px) {
//           .div-26 {
//             white-space: initial;
//             padding-right: 20px;
//           }
//         }
//         .div-27 {
//           color: var(--Neutral-colors-600, #6d758f);
//           leading-trim: both;
//           text-edge: cap;
//           font-feature-settings: "clig" off, "liga" off;
//           margin: 33px 16px 0 0;
//           font: 600 14px/143% Inter, -apple-system, Roboto, Helvetica,
//             sans-serif;
//         }
//         @media (max-width: 991px) {
//           .div-27 {
//             max-width: 100%;
//             margin-right: 10px;
//           }
//         }
//         .div-28 {
//           justify-content: center;
//           align-items: center;
//           border-radius: 6px;
//           border: 1px solid var(--Neutral-colors-300, #f1f3f7);
//           box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
//           background-color: var(--Neutral-colors-100, #fff);
//           display: flex;
//           margin: 12px 16px 0 0;
//           padding: 50px 60px;
//         }
//         @media (max-width: 991px) {
//           .div-28 {
//             max-width: 100%;
//             margin-right: 10px;
//             padding: 0 20px;
//           }
//         }
//         .img-2 {
//           aspect-ratio: 0.78;
//           object-fit: auto;
//           object-position: center;
//           width: 38px;
//           margin: 28px 0;
//         }
//       `}</style>
//     </>
//   );
// }
// export default ContactDashboard;

// import { useState, useEffect } from 'react';
// import { Box, Button, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react';
// import axios from 'axios';

// const ContactDashboard = () => {
//   const toast = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     company: '',
//   });
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3111/contactus/contact');
//       console.log(response.data)
//       setContacts(response?.data?.data);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to fetch contacts. Please try again.',
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
//       if (selectedContact) {
//         // Update contact
//         const response = await axios.put(`http://localhost:3111/contactus/contact/${selectedContact._id}`, formData);

//         if (response.status === 200) {
//           toast({
//             title: 'Contact Updated',
//             description: 'Contact updated successfully!',
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//           });
//           setSelectedContact(null);
//         }
//       } else {
//         // Create contact
//         const response = await axios.post('http://localhost:3111/contactus/contact', formData);

//         if (response.status === 201) {
//           toast({
//             title: 'Contact Created',
//             description: 'Contact created successfully!',
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//           });
//         }
//       }

//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//         company: '',
//       });

//       fetchContacts();
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

//   const handleEdit = (contact) => {
//     setSelectedContact(contact);
//     setFormData(contact);
//   };

//   const handleDelete = async (contactId) => {
//     try {
//       const response = await axios.delete(`http://localhost:3111/contactus/contact/${contactId}`);

//       if (response.status == 204) {
//         toast({
//           title: 'Contact Deleted',
//           description: 'Contact deleted successfully!',
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//         setSelectedContact(null);
//         fetchContacts();
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete the contact. Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="500px" mx="auto" my={8}>
//       <form onSubmit={handleSubmit}>
//         <FormControl mb={4} isRequired>
//           <FormLabel>Name</FormLabel>
//           <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Phone</FormLabel>
//           <Input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Message</FormLabel>
//           <Textarea name="message" value={formData.message} onChange={handleInputChange} />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Company</FormLabel>
//           <Input type="text" name="company" value={formData.company} onChange={handleInputChange} />
//         </FormControl>

    
//         {selectedContact && (
//           <Button
//             colorScheme="red"
//             size="lg"
//             onClick={() => handleDelete(selectedContact._id)}
//           >
//             Delete
//           </Button>
//         )}
//       </form>

//       <Box mt={8}>
//         <h2>Contacts</h2>
//         {contacts.length > 0 ? (
//           <ul>
//             {contacts.map((contact) => (
//               <li key={contact._id}>
//                 {contact.name} - {contact.email}
//                 <Button size="sm" ml={2} onClick={() => handleEdit(contact)}>
//                   Edit
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No contacts available.</p>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ContactDashboard;
















































import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Select,
} from '@chakra-ui/react';
import axios from 'axios';
import Url from '../api/ApiUrl';
import Cookies from 'js-cookie';
import {Navigate, NavLink, useNavigate } from 'react-router-dom';


const ContactDashboard = ({islogin,isjwt}) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
  });
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState('');
  useEffect(() => {
    fetchContacts();
  }, []);
  if (!islogin&&!isjwt) return <Navigate to={'/daschboard/login'} />;

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${Url}/contactus/contact`);
      setContacts(response?.data?.data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch contacts. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedContact) {
        const response = await axios.put(`${Url}/contactus/contact/${selectedContact._id}`, formData);

        if (response.status === 200) {
          toast({
            title: 'Contact Updated',
            description: 'Contact updated successfully!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setSelectedContact(null);
        }
      } else {
        const response = await axios.post(`${Url}/contactus/contact`, formData);

        if (response.status === 201) {
          toast({
            title: 'Contact Created',
            description: 'Contact created successfully!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        }
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
      });

      fetchContacts();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setFormData(contact);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${Url}/contactus/contact/${id}`);

      if (response.status === 204) {
        toast({
          title: 'Contact Deleted',
          description: 'Contact deleted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setSelectedContact(null);
        setSelectedContactId('');
        fetchContacts();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete the contact. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await axios.delete(`${Url}/contactus/deleteAll`);
console.log(response)
      if (response.status === 204) {
        toast({
          title: 'All Contacts Deleted',
          description: 'All contacts deleted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setSelectedContact(null);
        fetchContacts();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete all contacts. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="100%" mx="auto" my={8}>
      <form onSubmit={handleSubmit}>
        {/* ... (existing form controls) */}

 

     
      

        <Button
          colorScheme="red"
          size="lg"
          ml={2}
          onClick={handleDeleteAll}
        >
          Delete All
        </Button>
      </form>

      <Box mt={8}>
        <Table variant="simple">
          <TableCaption>Contacts</TableCaption>
          <Thead>
            <Tr>
            <Th>Number</Th>

              <Th>Name</Th>

              <Th>Email</Th>
              <Th>Message</Th>
              <Th>Company</Th>
              <Th>Phone</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts.map((contact,ind) => (
              <Tr key={contact._id}>
                <Td>{ind+1}</Td>

                <Td>{contact.name}</Td>
                <Td>{contact.email}</Td>
                <Td wordBreak={'break-word'}>{contact.message}</Td>
                <Td>{contact.company}</Td>
                <Td>{contact.phone}</Td>
                <Td>
                  
          <Button colorScheme="red" size="lg" onClick={()=>handleDelete(contact._id)}>
            Delete 
          </Button>
            
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Text mt={4}>Total Contacts: {contacts.length}</Text>
      </Box>
    </Box>
  );
};

export default ContactDashboard;
