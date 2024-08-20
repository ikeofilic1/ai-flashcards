'use client'

import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <Container>
        <AppBar position="static" sx={{backgroundColor: '#3f51b5'}}>
        <Toolbar>
            <Typography variant="h6" sx={{flexGrow: 1}}>
            AI Flashcards
            </Typography>
            <Button color="inherit">
            <Link href="/sign-in" passHref>
                Log In
            </Link>
            </Button>
        </Toolbar>
        </AppBar>

        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{textAlign: 'center', my: 4}}
        >
        <SignUp />
        </Box>

    </Container>
  )
}