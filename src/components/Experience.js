import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp, index) => (
                <Fade bottom key={index}>
                  <Card key={exp.company} size="sm" py={4}>
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} w={"35px"} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                      <HStack flexWrap="wrap" spacing={2} px={2} pt={4}>
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
