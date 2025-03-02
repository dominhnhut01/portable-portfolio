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
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import EducationArray from "./EducationArray";
import TagsArray from "./TagsArray";

export default function Education({ color }) {
  const education = EducationArray();
  const options = TagsArray("EducationTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);
  

  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {education
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
                              <b>{item[0]}</b>{item[1]}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
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
