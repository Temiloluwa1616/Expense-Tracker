import { Box, Flex, Heading, Text, VStack, HStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import TransactionForm from "../add-trasactions";
import TransactionChartSummary from "../chart";

export default function Summary({
  onClose,
  isOpen,
  totalExpense,
  totalIncome,
}) {
  const balance = totalIncome - totalExpense;
  const isPositiveBalance = balance >= 0;

  return (
    <Box
      p={8}
      border="1px solid rgba(255,255,255,0.1)"
      borderRadius="32px"
      bg="rgba(255,255,255,0.95)"
      backdropFilter="blur(20px)"
      boxShadow="0 25px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        bgGradient: "linear(90deg, #667eea, #764ba2, #667eea)",
        backgroundSize: "200% 100%",
        animation: "gradient-shift 3s ease infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        gap={8}
      >
        
        <Flex
          flex={1}
          w="full"
          flexDirection="column"
          alignItems="center"
          gap={6}
        >
         
          <Box
            textAlign="center"
            p={6}
            borderRadius="24px"
            bg={isPositiveBalance 
              ? "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))"
              : "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(248,113,113,0.05))"
            }
            border="1px solid"
            borderColor={isPositiveBalance ? "green.200" : "red.200"}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              inset: "-1px",
              borderRadius: "24px",
              bgGradient: isPositiveBalance
                ? "linear(135deg, #10B981, #34D399)"
                : "linear(135deg, #EF4444, #F87171)",
              opacity: 0.5,
              zIndex: -1,
            }}
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="gray.600"
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Current Balance
            </Text>
            <Heading
              size="2xl"
              color={isPositiveBalance ? "green.600" : "red.600"}
              fontWeight="bold"
              mb={1}
            >
              {isPositiveBalance ? "+" : "-"}${Math.abs(balance)}
            </Heading>
            <Text
              fontSize="sm"
              color={isPositiveBalance ? "green.500" : "red.500"}
              fontWeight="medium"
            >
              {isPositiveBalance ? "Looking good!" : "Budget deficit"}
            </Text>
          </Box>

          
          <HStack spacing={4} w="full">
           
            <Box
              flex={1}
              p={6}
              borderRadius="20px"
              bg="white"
              border="1px solid"
              borderColor="green.100"
              position="relative"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(16,185,129,0.1)",
              }}
              transition="all 0.3s ease"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                bgGradient: "linear(90deg, #10B981, #34D399)",
                borderTopRadius: "20px",
              }}
            >
              <VStack spacing={3} align="center">
                <Box
                  w={12}
                  h={12}
                  borderRadius="16px"
                  bg="green.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl">📈</Text>
                </Box>
                <Stat textAlign="center">
                  <StatLabel color="gray.600" fontSize="sm" fontWeight="medium">
                    Total Income
                  </StatLabel>
                  <StatNumber color="green.600" fontSize="xl" fontWeight="bold">
                    ${totalIncome}
                  </StatNumber>
                </Stat>
              </VStack>
            </Box>

           
            <Box
              flex={1}
              p={6}
              borderRadius="20px"
              bg="white"
              border="1px solid"
              borderColor="red.100"
              position="relative"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(239,68,68,0.1)",
              }}
              transition="all 0.3s ease"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                bgGradient: "linear(90deg, #EF4444, #F87171)",
                borderTopRadius: "20px",
              }}
            >
              <VStack spacing={3} align="center">
                <Box
                  w={12}
                  h={12}
                  borderRadius="16px"
                  bg="red.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl">📉</Text>
                </Box>
                <Stat textAlign="center">
                  <StatLabel color="gray.600" fontSize="sm" fontWeight="medium">
                    Total Expense
                  </StatLabel>
                  <StatNumber color="red.600" fontSize="xl" fontWeight="bold">
                    ${totalExpense}
                  </StatNumber>
                </Stat>
              </VStack>
            </Box>
          </HStack>
        </Flex>

        
        <Box
          flex={1}
          maxW={{ base: "full", lg: "400px" }}
          h="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          p={4}
        >
          <Box
            w="full"
            h="full"
            borderRadius="24px"
            bg="white"
            p={6}
            boxShadow="0 10px 30px rgba(0,0,0,0.05)"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              bgGradient: "linear(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05))",
              zIndex: -1,
            }}
          >
            <Text
              textAlign="center"
              fontSize="lg"
              fontWeight="bold"
              color="gray.700"
              mb={4}
            >
               Financial Overview
            </Text>
            <Box h="calc(100% - 40px)">
              <TransactionChartSummary expense={totalExpense} income={totalIncome} />
            </Box>
          </Box>
        </Box>
      </Flex>

      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}