import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Box,
  VStack,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay 
        bg="rgba(0,0,0,0.4)"
        backdropFilter="blur(10px)"
      />
      <form onSubmit={handleSubmit}>
        <ModalContent
          bg="linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)"
          backdropFilter="blur(20px)"
          border="1px solid rgba(255,255,255,0.2)"
          borderRadius="24px"
          boxShadow="0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2)"
          overflow="hidden"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            bgGradient: "linear(to-r, transparent, purple.400, blue.400, transparent)",
          }}
        >
          <ModalHeader
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            color="white"
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
            py={6}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              bg: "rgba(255,255,255,0.6)",
              borderRadius: "full",
            }}
          >
            Add New Transaction
          </ModalHeader>
          <ModalCloseButton 
            color="white" 
            size="lg"
            _hover={{ bg: "rgba(255,255,255,0.2)" }}
            borderRadius="full"
          />
          
          <ModalBody p={8}>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel 
                  color="gray.700" 
                  fontWeight="semibold"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Description
                </FormLabel>
                <Input
                  placeholder="Enter transaction description"
                  name="description"
                  type="text"
                  onChange={handleFormChange}
                  size="lg"
                  borderRadius="16px"
                  border="2px solid transparent"
                  bg="gray.50"
                  _hover={{
                    bg: "gray.100",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  _focus={{
                    bg: "white",
                    border: "2px solid",
                    borderColor: "purple.400",
                    boxShadow: "0 0 0 3px rgba(159, 122, 234, 0.1), 0 10px 25px rgba(0,0,0,0.1)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                />
              </FormControl>

              <FormControl>
                <FormLabel 
                  color="gray.700" 
                  fontWeight="semibold"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Amount
                </FormLabel>
                <Input
                  placeholder="Enter transaction amount"
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                  size="lg"
                  borderRadius="16px"
                  border="2px solid transparent"
                  bg="gray.50"
                  _hover={{
                    bg: "gray.100",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  _focus={{
                    bg: "white",
                    border: "2px solid",
                    borderColor: "purple.400",
                    boxShadow: "0 0 0 3px rgba(159, 122, 234, 0.1), 0 10px 25px rgba(0,0,0,0.1)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                />
              </FormControl>

              <FormControl>
                <FormLabel 
                  color="gray.700" 
                  fontWeight="semibold"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  mb={4}
                >
                  Transaction Type
                </FormLabel>
                <RadioGroup value={value} onChange={setValue}>
                  <HStack spacing={6} justify="center">
                    <Box
                      as="label"
                      cursor="pointer"
                      p={4}
                      borderRadius="16px"
                      border="2px solid"
                      borderColor={value === "income" ? "green.400" : "gray.200"}
                      bg={value === "income" ? "green.50" : "white"}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        borderColor: "green.400",
                      }}
                      position="relative"
                      overflow="hidden"
                      _before={value === "income" ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgGradient: "linear(45deg, green.400, emerald.400)",
                        opacity: 0.1,
                      } : {}}
                    >
                      <VStack spacing={2}>
                        <Radio
                          value="income"
                          colorScheme="green"
                          name="type"
                          onChange={handleFormChange}
                          size="lg"
                        />
                        <Text fontWeight="semibold" color="gray.700">
                          Income
                        </Text>
                      </VStack>
                    </Box>

                    <Box
                      as="label"
                      cursor="pointer"
                      p={4}
                      borderRadius="16px"
                      border="2px solid"
                      borderColor={value === "expense" ? "red.400" : "gray.200"}
                      bg={value === "expense" ? "red.50" : "white"}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        borderColor: "red.400",
                      }}
                      position="relative"
                      overflow="hidden"
                      _before={value === "expense" ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgGradient: "linear(45deg, red.400, pink.400)",
                        opacity: 0.1,
                      } : {}}
                    >
                      <VStack spacing={2}>
                        <Radio
                          value="expense"
                          colorScheme="red"
                          name="type"
                          onChange={handleFormChange}
                          size="lg"
                        />
                        <Text fontWeight="semibold" color="gray.700">
                          Expense
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter 
            p={8} 
            pt={4}
            bg="linear-gradient(to-b, transparent, rgba(0,0,0,0.02))"
          >
            <HStack spacing={4} w="full" justify="center">
              <Button
                onClick={onClose}
                size="lg"
                borderRadius="16px"
                px={8}
                bg="gray.100"
                color="gray.700"
                _hover={{
                  bg: "gray.200",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                transition="all 0.3s ease"
                fontWeight="semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={onClose}
                size="lg"
                borderRadius="16px"
                px={8}
                bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                color="white"
                _hover={{
                  bgGradient: "linear(135deg, #5a6fd8 0%, #6a4190 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                transition="all 0.3s ease"
                fontWeight="semibold"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  bgGradient: "linear(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s ease",
                }}
               
              >
                Add Transaction
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}