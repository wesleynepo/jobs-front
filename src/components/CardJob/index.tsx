import { Box, Image, Stack, Text } from '@chakra-ui/react'

export type CardJobProps = {
    title: string
    company: string
    shortDescription: string
    logoUrl: string
}

export const CardJob = ({ title, company, shortDescription, logoUrl}: CardJobProps) => {

  return (
    <Stack m="2" shadow="xl" w="100%" minHeight="10rem" p="1rem" border="solid" borderWidth="0.1rem" borderColor="gray.400" borderRadius="0.5rem" direction="row">
      <Image src={logoUrl} width="50px" height="50px" objectFit="fill"  />
      <Box>
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <Text fontWeight="bold" fontSize="md" color="gray.500">{company}</Text>
        <Text fontSize="sm" color="gray.500">{shortDescription}</Text>
      </Box>
    </Stack>)
}