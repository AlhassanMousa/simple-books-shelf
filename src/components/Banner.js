import {
  Button,
  Stack,
  VStack,
  Heading,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Book from "../images/books.png";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

function Item() {
  const bg = useColorModeValue("pink.50", "pink.500");

  return (
    <div>
      <Stack
        bg={"#FFF89A"}
        py={[12, 25]}
        px={[4, 6, 12]}
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
        spacing={4}
        mwidth={380}
        mwidth={300}
        height={400}
        padding={"10px"}
        alignContent={"center"}
        marginBottom={80}
      >
        <VStack align="flex-start" spacing={1}>
          <FadeIn delay={500}>
            <Heading fontSize={20} color="black">
              This BOOKStore is Just for test
            </Heading>
          </FadeIn>
          <FadeIn delay={600}>
            <Heading fontSize={20} fontWeight="none">
              For Featured Books of
            </Heading>
            <Heading fontSize={25}>February</Heading>
          </FadeIn>
          <FadeIn delay={700}>
            <Button as={Link} to="/store" colorScheme="blue">
              See More
            </Button>
          </FadeIn>
        </VStack>
        <FadeIn delay={500}>
          <Image
            loading="lazy"
            w="auto"
            h={["auto", "auto", 150, 200]}
            src={Book}
          />
        </FadeIn>
      </Stack>
    </div>
  );
}

export default function BannerCarousel() {
  return (
    <Box mb={4}>
      <Item />
    </Box>
  );
}
