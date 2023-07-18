import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import schemas from './src/sanity/schemas';
import {visionTool} from '@sanity/vision'

const config = defineConfig({
     projectId: 'up7d254e',
     dataset: 'production',
     title: 'pnbcb-portfolio',
     apiVersion: '2023-07-17',
     basePath: '/admin',
     plugins: [deskTool(),visionTool()],
     schema: {types: schemas}
})

export default config;