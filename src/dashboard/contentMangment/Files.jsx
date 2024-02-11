import React, { useState } from 'react';
import { Box, VStack, IconButton, Grid,Text, GridItem } from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';

const FileuploadedMany = ({ onFileSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileSelect(newFiles); // Pass the selected file objects to the parent component
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileSelect(newFiles); // Pass the selected file objects to the parent component
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    onFileSelect(updatedFiles); // Pass the updated file objects to the parent component
  };

  return (
    <VStack spacing={4} align="center">
      <Box
        w="90%"
        h="300px"
        border="2px"
        borderColor="gray.300"
        borderRadius="md"
        position="relative"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        p={'20px'}
      >
        {selectedFiles.length > 0 ? (
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {selectedFiles.map((file, index) => (
              <GridItem key={index}>
                <Box
                  position="relative"
                  w="100%"
                  h="100%"
                  overflow="hidden"
                  borderRadius="md"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Selected ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <IconButton
                    icon={<MdCloudUpload />}
                    position="absolute"
                    top={0}
                    right={0}
                    aria-label="Remove File"
                    onClick={() => handleRemoveFile(index)}
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <VStack>
            <Box>
              <Text>Drag & Drop or Click to Upload</Text>
            </Box>
            <IconButton
              icon={<MdCloudUpload />}
              width="150px"
              height="150px"
              aria-label="Upload File"
              onClick={() => document.getElementById('fileInput').click()}
            />
          </VStack>
        )}
      </Box>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple
      />
    </VStack>
  );
};

export default FileuploadedMany;
