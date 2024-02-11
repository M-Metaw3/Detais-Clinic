import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress,
  CardMedia,
  
} from '@material-ui/core';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon,  } from '@material-ui/icons';
import axios from 'axios';

const apiUrl = 'http://localhost:3111/blogs'; // Replace with your API URL

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value, type } = e.target;
  
  //   setCurrentBlog((prevBlog) => {
  //     return {
  //       ...prevBlog,
  //       [name]: type === 'file' ? e.target.files[0] : value,
  //     };
  //   });
  // };
  
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.data.data)
      setBlogs(response.data.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleInputChange = (e) => {
    setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setCurrentBlog({ ...currentBlog, image: e.target.files[0] });
  };

  const handleAddBlog = async () => {
    try {
      const formData = new FormData();
      formData.append('title', currentBlog.title);
      formData.append('description', currentBlog.description);
      formData.append('images', currentBlog.image);

      await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      fetchBlogs();
      setCurrentBlog({ title: '', description: '', image: null });
      setOpenDialog(false);
      setUploadProgress(0);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const handleEditBlog = async (blog) => {
    try {
      const formData = new FormData();
      formData.append('title', currentBlog.title);
      formData.append('description', currentBlog.description);
      formData.append('images', currentBlog.image);

      await axios.put(`${apiUrl}/${blog._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      fetchBlogs();
      setCurrentBlog({ title: '', description: '', image: null });
      setOpenDialog(false);
      setUploadProgress(0);
    } catch (error) {
      console.error('Error editing blog:', error);
    }
  };

  const handleDeleteBlog = async (blog) => {
    try {
      await axios.delete(`${apiUrl}/${blog._id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleOpenDialog = (blog) => {
    setCurrentBlog(blog);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setCurrentBlog({ title: '', description: '', image: null });
    setOpenDialog(false);
    setUploadProgress(0);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Blogs
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpenDialog(true)}
      >
        Add Blog
      </Button>
      <Grid container spacing={2} style={{ marginTop: '16px' }}>
        {blogs?.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
           
            <Card>
            <CardMedia
        component="img"
        height="194"
        image={blog&&blog?.images&&`http://localhost:3111/Blogs/${blog?.images}`}
        alt="Paella dish"
      />
              <CardContent>
                
                <Typography variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {blog?.description}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <IconButton aria-label="edit" onClick={() => handleOpenDialog(blog)}>
                  <EditIcon />
                </IconButton> */}
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteBlog(blog)}
                  color="secondary"
               >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentBlog._id ? 'Edit Blog' : 'Add Blog'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details for the blog:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            name="title"
            value={currentBlog.title}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={currentBlog.description}
            onChange={handleInputChange}
            fullWidth
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {uploadProgress > 0 && (
            <LinearProgress variant="determinate" value={uploadProgress} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={currentBlog._id ? handleEditBlog : handleAddBlog}
            color="primary"
            disabled={uploadProgress > 0}
          >
            {currentBlog._id ? 'Edit' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Blog;