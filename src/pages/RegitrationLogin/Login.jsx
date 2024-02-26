
import  React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PostDatalogin } from '../../api/apiFactory';

import { useNavigate, NavLink } from 'react-router-dom';
import { useToast, Input } from '@chakra-ui/react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
const nav= useNavigate()
const toast = useToast();
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    password: '',
    phone: '',
    passwordConfirm:'',
    country:'',
    // passwordConfirm:'',
    clinic:'',

    // ... other form fields
  })



console.log(formData)


  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData)
if(formData.password!=formData.passwordConfirm){
  toast({
  title: 'warning',
  description: 'password not matching',
  status: 'warning',
  duration: 3000,
  isClosable: true,
})

return ;
};
    try {
      const response = await PostDatalogin("users/signup",formData)
      if(response.status==201){
        
        toast({
          title: 'success',
          description: 'success registeration please verify your account and then log in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
                nav('/login')
                return;
              }
      if(response.response.status==500){

        toast({
          title: 'Error',
          description: 'Failed to fetch users. Please try again.',
          status: response.response.data.messge,
          duration: 3000,
          isClosable: true,
        });
  
      }
    } catch (error) {
    }
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    // <ThemeProvider  theme={defaultTheme}>
    //   <Container style={{ width:"70%",flexWrap:"wrap"}} component="main"  maxWidth="xl">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
       
    //       <Typography component="h1" variant="h5">
    //         Sign up
    //       </Typography>
    //       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //         <Grid container  spacing={2}>
    //           <Grid item xs={12} sm={6}>
                
    //             <TextField
    //                 type="text"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 InputProps={{
    //                   inputProps: {
    //                     minLength: 5,  // Set the minimum length for the email
    //                     maxLength: 50, // Set the maximum length for the email
    //                   },
    //                 }}
    //               required
    //               fullWidth
    //               id="name"
    //               label="First Name"
    //               autoFocus
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //                type="text"
    //                InputProps={{
    //                 inputProps: {
    //                   minLength: 5,  // Set the minimum length for the email
    //                   maxLength: 50, // Set the maximum length for the email
    //                 },
    //               }}
    //                value={formData.clinic}
    //                onChange={handleChange}
    //               required
    //               fullWidth
    //               id="clinic"
    //               label="clinic"
    //               name="clinic"
    //               autoComplete="clinic-name"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
                // <TextField
                //   required
                //   fullWidth
                //   type="text"
                //   name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                //   id="email"
                //   label="Email Address"
                //   InputProps={{
                //     inputProps: {
                //       minLength: 5,  // Set the minimum length for the email
                //       maxLength: 50, // Set the maximum length for the email
                //     },
                //   }}
                //   autoComplete="email"
                // />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="phone"
    //               required
    //               fullWidth
    //               value={formData.phoneNumber}
    //               onChange={handleChange}
    //               id="phoneNumber"
    //               label="phoneNumber"
    //               autoFocus
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="country"
    //               value={formData.country}
    //               onChange={handleChange}
    //               label="country"
    //               name="country"
    //               autoComplete="country"
    //             />
    //           </Grid>
         
              
    //           <Grid item xs={12}>
                // <TextField
                //   required
                //   InputProps={{
                //     inputProps: {
                //       minLength: 10,  // Set the minimum length for the email
                //       maxLength: 50, // Set the maximum length for the email
                //     },
                //   }}
                //   fullWidth
                //   name="password"
                //   value={formData.password}
                //   onChange={handleChange}
                //   label="Password"
                //   type="password"
                //   id="password"
                //   autoComplete="new-password"
                // />
    //           </Grid>
    //           <Grid item xs={12}>
                // <TextField
                //   required
                //   fullWidth
                //   name="passwordConfirm"
                //   label="passwordConfirm"
                //   type="password"
                //   value={formData.passwordConfirm}
                //   onChange={handleChange}
                //   id="confirmpassword"
                //   autoComplete="confirmpassword"
                // />
    //           </Grid>
              
    //           <Grid item xs={12}>
    //             <FormControlLabel
    //               control={<Checkbox value="allowExtraEmails" color="primary" />}
    //               label="I want to receive inspiration, marketing promotions and updates via email."
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <NavLink to="/login" variant="body2">
    //               Already have an account? Sign in
    //             </NavLink>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //     <Copyright sx={{ mt: 5 }} />
    //   </Container>
    // </ThemeProvider>











    <>
        <div className="flex flex-col flex-1 px-5 my-auto max-md:max-w-full">
          <div className="self-center text-3xl text-cyan-900 capitalize max-md:max-w-full">
            Create an account
          </div>
          <div className="flex gap-5 justify-between items-start mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="grow justify-center items-start py-6 pr-16 pl-4 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5">
            <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  type="text"
                
                />
            </div>
            <div className="grow justify-center items-start py-6 pr-16 pl-4 rounded-lg border border-solid border-slate-300 max-md:pr-5">
             

                         <input
                   type="text"
                   className="w-full bg-transparent border-none focus:outline-none"
                   value={formData.clinic}
                   onChange={handleChange}
                  required
                  fullWidth
                  id="clinic"
                  placeholder=" Clinic Name"
                  name="clinic"
                  autoComplete="clinic-name"
                />
            </div>
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
         

            <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email Address"
            
                  autoComplete="email"
                />
          </div>
          <div className="flex gap-5 justify-between items-start mt-6 max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start py-6 pr-16 pl-4 rounded-lg border border-solid border-slate-300 max-md:pr-5">
              

              <input
                className="w-full bg-transparent border-none focus:outline-none"
                  autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  id="phoneNumber"
                  placeholder="Phone number"
                  autoFocus
                />
            </div>
            <div className="grow justify-center items-start py-6 pr-16 pl-4 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5">
              

                         <input
                             className="w-full bg-transparent border-none focus:outline-none"
                  required
                  fullWidth
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  name="country"
                  autoComplete="country"
                />
            </div>
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
          <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
           

            <input
                  required
                  fullWidth
                  className="w-full bg-transparent border-none focus:outline-none"
                  name="passwordConfirm"
                  placeholder=" Confirm Password"
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  id="confirmpassword"
                  autoComplete="confirmpassword"
                />
          </div>
          <div className="flex gap-2 justify-between py-2 mt-4 text-gray-400 max-md:flex-wrap max-md:max-w-full">
         <input type='checkbox'/>
            <div className="flex-auto underline max-md:max-w-full">
              By creating an account, I agree to our{" "}
              <span className="text-gray-400 underline">Terms of use</span> and{" "}
              <span className="text-gray-400 underline">Privacy Policy</span>{" "}
            </div>
          </div>
          <button onClick={handleSubmit}  className="justify-center items-center px-16 py-4 mt-12 text-lg font-medium text-center text-white whitespace-nowrap rounded-lg bg-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            Register
          </button>
                <NavLink to="/login" variant="body2">
          <div className="self-center mt-9 text-zinc-800 max-md:max-w-full">
            Already have an account ? Login
          </div>
           </NavLink>

        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}