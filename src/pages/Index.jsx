import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/hero-product.jpg" alt="Featured Product" mx="auto" />
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" mb={10} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
          <Box>
            <Heading size="md" mb={4}>Follow Us</Heading>
            <HStack spacing={4} justify="center">
              <Link href="#"><FaFacebook size="24px" /></Link>
              <Link href="#"><FaTwitter size="24px" /></Link>
              <Link href="#"><FaInstagram size="24px" /></Link>
            </HStack>
          </Box>
          <Box>
            <Heading size="md" mb={4}>Contact Us</Heading>
            <Text>Email: support@electroshop.com</Text>
            <Text>Phone: (123) 456-7890</Text>
          </Box>
          <Box>
            <Heading size="md" mb={4}>Terms of Service</Heading>
            <Link href="#">Read our terms</Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;