import { Container, Heading, Input, Button, FormControl, FormLabel, Flex, FormErrorMessage } from '@chakra-ui/react'
import { Formik } from 'formik'

export default function Contact() {
  return (
    <Flex align="center" justify="center">
      <Formik
        initialValues={{
          email: '',
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Container maxW="500px">
              <Flex direction="column" align="center">
                <Heading>Kontakt</Heading>
                <FormControl isRequired isInvalid={!!errors.email && touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input errorBorderColor="red.300" type="email" name="email" id="email" />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Wyślij
                </Button>
              </Flex>
            </Container>
          </form>
        )}
      </Formik>
    </Flex>
  )
}
