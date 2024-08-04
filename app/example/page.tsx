"use client" // This tells Next.js that this component should run on the client side

import { useState } from 'react' // Import the useState hook from React
import { Button, Container, Group, Card, Text, Grid, Center} from '@mantine/core';

import ClickGame from './clickGame'

// This is our example webpage React component
export default function example() { // We make it the default export so that Next.js knows to render it

  const names = ["Kieran", "Kit", "Dave", "Sarah", "Billy"]

  // This is the JSX (or HTML) that will be rendered to the page
  return (
    <>
      <ClickGame />

      { names.map((name, key) => {
        return (
          <p key={key}>{name}</p>
        )
      })}

    </>
  )
}





