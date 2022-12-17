export type Project = {
  slug: string
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'react-space',
    title: 'React Space',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
    image:
      'https://images.unsplash.com/photo-1666535904626-9711b03e2aba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    slug: 'react-infinite-scroll',
    title: 'React Infinite Scroll',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
    image:
      'https://images.unsplash.com/photo-1670441182961-0bf8a667821f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    slug: 'photo-gallery',
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    image:
      'https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3JmdWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    slug: 'event-planner',
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    image:
      'https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
]
