import { 
  Button, 
  Flex, 
  Heading, 
  useDisclosure, 
  Box, 
  Container,
  Icon,
  Text,
  HStack
} from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    allTransactions,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
        `,
      }}
    >
      <Container maxW="7xl" py={8} position="relative" zIndex={1}>
        <Flex flexDirection="column" gap={8}>
          
          <Flex 
            alignItems="center" 
            justifyContent="space-between" 
            flexWrap="wrap"
            gap={4}
          >
            <Box>
              <Heading
                color="white"
                fontSize={["2xl", "3xl", "4xl", "5xl"]}
                fontWeight="bold"
                mb={2}
                bgGradient="linear(135deg, #ffffff 0%, #f0f9ff 100%)"
                bgClip="text"
                textShadow="0 2px 4px rgba(0,0,0,0.1)"
              >
               Expense Tracker
              </Heading>
              <Text 
                color="rgba(255,255,255,0.8)" 
                fontSize="lg"
                fontWeight="medium"
              >
                Track your income and expenses with style
              </Text>
            </Box>
            
            <Button
              onClick={onOpen}
              size="lg"
              borderRadius="20px"
              px={8}
              py={6}
              bg="rgba(255,255,255,0.15)"
              backdropFilter="blur(20px)"
              border="1px solid rgba(255,255,255,0.2)"
              color="white"
              fontWeight="bold"
              fontSize="md"
              _hover={{
                bg: "rgba(255,255,255,0.25)",
                transform: "translateY(-2px)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
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
              <HStack spacing={2}>
                <Text>✨</Text>
                <Text>Add Transaction</Text>
              </HStack>
            </Button>
          </Flex>

          {/* Summary Section */}
          <Summary
            totalExpense={totalExpense}
            totalIncome={totalIncome}
            isOpen={isOpen}
            onClose={onClose}
          />

          {/* Transactions Lists */}
          <Flex
            w="full"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "column", "column", "row", "row"]}
            gap={6}
          >
            <ExpenseView
              data={allTransactions.filter((item) => item.type === "expense")}
              type="expense"
            />
            <ExpenseView
              data={allTransactions.filter((item) => item.type === "income")}
              type="income"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}