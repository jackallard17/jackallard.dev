import type { NextPage } from 'next'
import React from 'react';
import { useState } from 'react';
import { ColorScheme, Button, Group, useMantineTheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import ThemeToggle from '../components/ThemeToggle';
import Title from '../components/Title';
import styles from '../styles/Home.module.css'
import { ProjectListing } from '../components/ProjectListing';

const PRIMARY_COL_HEIGHT = 300;

const Home: NextPage = () => {
  return (
    <>
            <Title></Title>
    </>
  )
}

export default Home;