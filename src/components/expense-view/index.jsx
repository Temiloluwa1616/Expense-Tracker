import { Box, Flex, Heading, Text, VStack, Icon } from "@chakra-ui/react";

export default function ExpenseView({ type, data }) {
  const isIncome = type === "income";
  
  return (
    <Box
      flex={1}
      w="full"
      bg="white"
      mr={4}
      mt={10}
      borderRadius="24px"
      overflow="hidden"
      position="relative"
      boxShadow="0 20px 50px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.2)"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 32px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.2)",
      }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bgGradient: isIncome 
          ? "linear(90deg, #10B981, #34D399, #6EE7B7)"
          : "linear(90deg, #EF4444, #F87171, #FCA5A5)",
      }}
    >
      <Box p={6}>
        <Flex 
          justifyContent="space-between" 
          alignItems="center"
          mb={6}
        >
          <Flex alignItems="center" gap={3}>
            <Box
              w={12}
              h={12}
              borderRadius="16px"
              bg={isIncome ? "green.100" : "red.100"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                bgGradient: isIncome
                  ? "linear(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.2))"
                  : "linear(135deg, rgba(239,68,68,0.1), rgba(248,113,113,0.2))",
              }}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={isIncome ? "green.600" : "red.600"}
              >
                {isIncome ? "💰" : "💸"}
              </Text>
            </Box>
            <Heading 
              size="lg" 
              color="gray.800"
              fontWeight="bold"
              bgGradient={isIncome 
                ? "linear(135deg, #059669, #10B981)"
                : "linear(135deg, #DC2626, #EF4444)"
              }
              bgClip="text"
            >
              {isIncome ? "Income" : "Expense"}
            </Heading>
          </Flex>
          <Box
            px={3}
            py={1}
            borderRadius="full"
            bg={isIncome ? "green.50" : "red.50"}
            border="1px solid"
            borderColor={isIncome ? "green.200" : "red.200"}
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={isIncome ? "green.700" : "red.700"}
            >
              {data.length} items
            </Text>
          </Box>
        </Flex>

        <VStack spacing={3} align="stretch">
          {data.length === 0 ? (
            <Box
              p={8}
              textAlign="center"
              borderRadius="16px"
              bg="gray.50"
              border="2px dashed"
              borderColor="gray.200"
            >
              <Text color="gray.500" fontSize="lg" mb={2}>
                No {type} transactions yet
              </Text>
              <Text color="gray.400" fontSize="sm">
                Add your first {type} transaction to get started
              </Text>
            </Box>
          ) : (
            data.map((item, index) => (
              <Box
                key={index}
                p={4}
                borderRadius="16px"
                bg={isIncome ? "green.50" : "red.50"}
                border="1px solid"
                borderColor={isIncome ? "green.100" : "red.100"}
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateX(4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  borderColor: isIncome ? "green.200" : "red.200",
                }}
                transition="all 0.3s ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  bg: isIncome ? "green.400" : "red.400",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgGradient: isIncome
                    ? "linear(135deg, rgba(16,185,129,0.02), rgba(52,211,153,0.05))"
                    : "linear(135deg, rgba(239,68,68,0.02), rgba(248,113,113,0.05))",
                  borderRadius: "16px",
                  zIndex: -1,
                }}
                
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex alignItems="center" gap={3}>
                    <Box
                      w={8}
                      h={8}
                      borderRadius="12px"
                      bg={isIncome ? "green.200" : "red.200"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="sm" color={isIncome ? "green.700" : "red.700"}>
                        {isIncome ? "+" : "-"}
                      </Text>
                    </Box>
                    <Text 
                      fontWeight="semibold" 
                      color="gray.700"
                      fontSize="md"
                      noOfLines={1}
                    >
                      {item.description || "No description"}
                    </Text>
                  </Flex>
                  <Box textAlign="right">
                    <Text 
                      fontSize="lg" 
                      fontWeight="bold"
                      color={isIncome ? "green.600" : "red.600"}
                    >
                      {isIncome ? "+" : "-"}${item.amount}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))
          )}
        </VStack>
      </Box>
    </Box>
  );
}