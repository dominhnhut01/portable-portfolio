import { Divider, Stack, Text, Container, Box, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Tooltip } from '@chakra-ui/react';

const deviconLinkArray = [
  [
    "Typescript",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ],
  [
    "Python",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ],
  [
    "C++",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
  ],
  [
    "Java",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  ],
  [
    "Node.js",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  ],
  [
    "Express.js",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ],
  [
    "React.js",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  ],
  [
    "Django",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  ],
  [
    "PostgreSQL",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
  ],
  [
    "MongoDB",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  ],
  [
    "PyTorch",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  ],
  [
    "TensorFlow",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  ],
];

export default function Skills({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Wrap direction={['row']} mx={4} align="center" justify="center">
            {deviconLinkArray.map(([name, link], index) => {
              return (
                <WrapItem key={index}>
                <Tooltip label={name} placement="top">
                  <img
                    key={index}
                    src={link}
                    alt={`Devicon ${index}`}
                    width="50"
                    style={{
                      transition: "transform 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </Tooltip>
                </WrapItem>
              );
            })}
          </Wrap>
        </Stack>
      </Container>
    </>
  );
}
