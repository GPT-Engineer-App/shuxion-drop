import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1533898301026-0a2546b285e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwdC1zaGlydHxlbnwwfHx8fDE3MTA0Mzk0NDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Cool Sneakers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1607792246511-0b5f445700b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb29sJTIwc25lYWtlcnN8ZW58MHx8fHwxNzEwNDM5NDQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Trendy Jeans",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521166226003-6cc5aa8002df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBqZWFuc3xlbnwwfHx8fDE3MTA0Mzk0NDR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <IconButton icon={<FaBars />} variant="ghost" onClick={onOpen} mr={4} />
        <Heading as="h1" size="xl">
          Shuxion
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="ghost" onClick={onOpen} />
        <Badge ml={2} colorScheme="red">
          {cart.length}
        </Badge>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              ${product.price}
            </Text>
            <Button colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            {cart.map((item, index) => (
              <Box key={index} mb={4}>
                <Text>{item.name}</Text>
                <Text fontWeight="bold">${item.price}</Text>
              </Box>
            ))}
            <Button colorScheme="green" size="lg" w="full">
              Checkout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Index;
