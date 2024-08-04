import { Button, Container, Group, Card, Text, Grid, Center } from '@mantine/core';
import { useState } from 'react' // Import the useState hook from React

export default function ClickGame() {
  const [value, setValue] = useState(0) // This defines a state variable called value, and a function to update it called setValue


  return (
    <>
      <Container bg='red' p='md'>
        <Card mt='md'>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Our Clicking Game</Text>
          </Group>

          <Text size="sm" c="dimmed">
            Click on the buttons below to do things.
          </Text>
          <Text size='xl'>Current Value: {value}</Text>

          <Grid mt='md'>
            <Grid.Col span={6}>
              <Center>
                <Button w='90%' onClick={() => setValue(value - 1)}>Click to decrease</Button>
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                <Button w='90%' onClick={() => setValue(value + 1)}>Click to increase</Button>
              </Center>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </>
    
  )
}