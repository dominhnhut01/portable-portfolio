import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ProjectsArray from "./ProjectsArray";

export default function Projects({ color }) {
    const projects = ProjectsArray();
    
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>
                      <Text py={2}>{project.techstack}</Text>
                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <div key={button.text} >
                            <Button color={`${color}.400`} onClick={() => {
                            window.open(`${button.href}`, "_blank", "noreferrer,noopener");
                          }}>
                              {button.text}
                            </Button>
                          </div>
                        ))}
                      </HStack>
                      
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
