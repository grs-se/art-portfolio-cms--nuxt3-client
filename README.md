<h1 align="center">Artist's Portfolio and CMS</h1>
<h2 align="center">(Nuxt3 Universal App)</h2>

<div align="center">
    <img src="docs/_media/project_screenshot(gallery_category_filters).png" alt="" />
</div>
<br/>

<!-- <div align="center">
  :man_artist:
</div> -->
<!-- <div align="center">
  <strong>Inspired by the intersection between Art and Programming</strong>
</div> -->

<br />

<!-- <div align="center">
  <sub>Built for artists, with ❤︎ by
  <a href="https://twitter.com/">GRS</a>
</div> -->

## Table of Contents

- [Features](#features)
- [Example](#example)
- [Philosophy](#philosophy)
- [State](#state)
- [Routing](#routing)
- [Server Rendering](#server-rendering)
- [Components](#components)
- [API](#api)
- [Installation](#installation)
- [See Also](#see-also)
- [Support](#support)

## Technologies

<p align="center">

<!-- <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a> -->
  <!-- <a href="https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a> -->
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="vue">
  </a>
   <a href="https://github.com/nuxt">
    <img src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82" alt="vue">
  </a>
   <a href="https://github.com/tailwindcss">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss">
   </a>
</p>

<div align="center">
  <h3>
    <a href="https://grs-art-portfolio-cms.netlify.app/">
      Website
    </a>
    <span> | </span>
    <a href="https://github.com/grs-se/art-portfolio-cms--api-server">
      REST API
    </a>
  </h3>
</div>

## Live Demo Site

https://grs-art-portfolio-cms.netlify.app/

## Project Overview

I am a self-taught entry level software developer with a range of transferable skills. I began learning to code just before “lockdown”, whilst working full-time in Landscape Construction. My motivation was to build an art portfolio website linked to a database that a user could interact with in many ways: sorting, filtering, different viewing modes, commenting, bookmarking, etc. However, I quickly became fascinated with programming and this project became more ambitious, a training ground to learn more advanced programming concepts: state-management, universal and client-side rendering, cloud asset management, authentication and authorization, etc. These days I program more than making art!

This project is currently in a simple form as a public display portfolio, but I am in the process of implementing additional functionality to upgrade the project to include the following functionality:

- CMS, to enable artist's to manage and archive all of their artworks
- An artist's educational e-resource book - to compile inspiration resources;
- A review and critiquing platform for mentors and fellow artist's to interact with each other and the artworks, and provide feedback.

A 'Universal' rendered application built with Vue.js(3), Nuxt(3), Pinia. Source code for the accompaying backend project - a custom REST API server - can be found at: https://github.com/grs-se/art-portfolio-cms--api-server

Please note: this project is still in development, contains faults and unfinished implementation, and is not ready for production use.

### Project Screenshots

|                                                         |                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| ![](<docs/_media/project_screenshot(3).png>)            | ![](<docs/_media/project_screenshot(gallery_category_filters).png>) |
| ![](<docs/_media/project_screenshot(landing_page).png>) | ![](<docs/_media/project_screenshot(gallery_category).png>)         |

## Features

- **isomorphic/universal rendering:** renders seamlessly in browsers
- **cloud asset storage:**: store images and files in cloud storage with Cloudinary or AWS S3
- **continuous intergration/deployment:**: with Netlify CLI
- **state management**: with Pinia

<hr/>

- [ ] Post Creation
- [ ] Post Editing
- [ ] Post Deletion
- [ ] Post Liking
- [ ] Post Commenting
- [ ] Post Tagging
- [x] Post Searching
- [x] Post Filtering
- [ ] Post Bookmarking

### UI Features

- [ ] Mobile Responsive
- [ ] Dark Mode
- [x] Gallery Modes
  - [x] Grid
  - [x] Masonry
  - [x] Lightbox
  - [x] Carousel
  - [x] Spotlights
  - [x] Modal
  - [x] Aside

### State Management

- [x] Pinia

### Deployment

- [x] CI/CD Netlify CLI
- [ ]

- [ ] = Partially Implemented Funtionality

<hr/>

## Production

Build the application for production using netlify-cli:

```bash
netlify build && netlify deploy --prod
```

## Further Project Goals

- User and Admin Accounts

## Contact me

<div align="center">
<a href="https://github.com/grs-e" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href = "mailto:georgericesmith@gmail.com?subject = Feedback&body = Message">
<img src=https://img.shields.io/badge/gmail-%23EE4831.svg?&style=for-the-badge&logo=gmail&logoColor=white alt=gmail style="margin-bottom: 5px;" />
</a>
</div>
