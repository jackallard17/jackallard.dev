import type { NextPage } from 'next'
import React from 'react';
import { useState } from 'react';
import { Space, Button, Grid, useMantineTheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import Title from '../components/Title';
import { BadgeCard } from '../components/BadgeCard/BadgeCard';
import attributes from '../components/BadgeCard/attributes.json'
import styles from '../styles/Home.module.css'
import { ProjectListing } from '../components/ProjectListing';
import { ResumeComponent } from '../components/ResumeComponent/ResumeComponent';

const PRIMARY_COL_HEIGHT = 300;

const Home: NextPage = () => {
  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={4}>
          <Title></Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <h2>Projects</h2>
          <ProjectListing></ProjectListing>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Home;