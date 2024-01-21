
// import React from 'react';
// import { Card, CardBody, CardFooter, Stack, Heading, Text, Button, Image } from '@chakra-ui/react';
// import CountdownTimer from './CountDownTimer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   return (
//     <div style={{ width: "70%", border: "3px solid black", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div style={{ position: 'relative', width: "500px", height: "750px" }}>
//           <Image
//             w={"100%"} h={"100%"}
//             objectFit='cover'
//             maxW={{ base: '100%', sm: "200px" }}
//             src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j6yxcyb9a3drz2ertobw.jpg'
//             alt='Caffe Latte'
//           />
//           <div className='wedding' style={{ position: 'absolute', top: 0, left: 0, marginTop: "260px", width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white', textAlign: 'left', marginLeft: "40px" }}>
//             <Text style={{ fontSize: "25px" }}>
//               <b>Franto Shajel & <br />Blessmi</b>
//             </Text>
//             <Text style={{ fontSize: "18px", marginTop: "-15px" }} >
//               We're ready for forever, are you? Help us <br /> celebrate our big day with Joy!
//             </Text>
//           </div>
//         </div>
//         <div style={{ width: "50%", height: "750px", backgroundImage: `url('https://i.pinimg.com/originals/b1/7a/33/b17a33f58a9a3a9f6296a0b6cf037f4a.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto" }}>
//           <div style={{ border: "2px solid gold", padding: "0px", transform: "rotate(-15deg)" }}>
//           <div style={{ border: "2px solid green", padding: "0px", transform: "rotate(30deg)" }}>

         
//           <div style={{ border: "2px solid red", padding: "20px", transform: "rotate(-15deg)" }}>
//           <div style={{transform: "rotate(0deg)"}}>
//               <div>
//                 <Heading size='md'>Franto Shajel <br /> Weds <br />
//                  Blessmi</Heading>
//                 <Text py='2'>Friday, April 5, 2024</Text>
//                 <Text py='2' style={{ fontSize: "16px", marginTop: "-15px" }}><CountdownTimer /></Text>
//               </div>

//               <div>
//                 <Button variant='solid' colorScheme='blue'>
//                   RSVP
//                 </Button>
//               </div>

//               <Text py='2'>View Details</Text>
//               <FontAwesomeIcon icon={faChevronDown} />
//             </div>
//           </div>
//           </div>
//           </div>
//         </div>
//         </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import CountdownTimer from './CountDownTimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <Flex
      width="70%"
      border="3px solid black"
      margin="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="100%" display="flex" alignItems="center" justifyContent="center" overflowY={"hidden"} overflowX={"hidden"}>
  <Box position="relative" width="50%" height={"750px"}  className="boxImg">
    <Image
      w="100%"
      h="100%"
      objectFit="objectFit" 
      maxW={{ base: '100%', sm: "200px" }}
      src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j6yxcyb9a3drz2ertobw.jpg'
      alt='Caffe Latte'
      className="boxImg" 
    />
    <Box
      className='wedding'
      position="absolute"
      top={0}
      left={0}
      marginTop="260px"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      color="white"
      textAlign="left"
      marginLeft="40px"
    >
      <Text fontSize="25px" fontWeight="bold">
        Franto Shajel & <br />Blessmi
      </Text>
      <Text fontSize="18px" marginTop="-15px">
        We're ready for forever, are you? Help us <br /> celebrate our big day with Joy!
      </Text>
    </Box>
  </Box>
  <Box
  width="50%"
  height="750px"
  backgroundImage="url('https://i.pinimg.com/originals/b1/7a/33/b17a33f58a9a3a9f6296a0b6cf037f4a.jpg')"
  backgroundSize="cover"  
  backgroundPosition="center"
  objectFit="objectFit" 
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  margin="auto"
>
  <Box
    border="2px solid gold"
    padding="0px"
    transform="rotate(-15deg)"
  >
    <Box
      border="2px solid green"
      padding="0px"
      transform="rotate(30deg)"
    >
      <Box
        border="2px solid red"
        padding="20px"
        transform="rotate(-15deg)"
      >
        <Box transform="rotate(0deg)">
          <Box>
            <Heading size='md'>
              Franto Shajel <br />
              Weds <br />
              Blessmi
            </Heading>
            <Text py='2'>Friday, April 5, 2024</Text>
            <Text py='2' fontSize="16px" marginTop="-15px">
              <CountdownTimer />
            </Text>
          </Box>
          <Box>
            <Button variant='solid' colorScheme='blue'>
              RSVP
            </Button>
          </Box>
          <Text py='2'>View Details</Text>
          <FontAwesomeIcon icon={faChevronDown} />
        </Box>
      </Box>
    </Box>
  </Box>
{/* </Box> */}

        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
