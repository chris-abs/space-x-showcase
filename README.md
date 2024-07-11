This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Will first need to create a .env file and simply add

NEXT_PUBLIC_SPACEX_API_BASE_URL=https://api.spacexdata.com/v4

I know with this being a public accessible api that hiding it behind .env variables is pointless - I just wanted to showcase how I would typically use .env

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

On the landing page (pun intended), a user can see all upcoming launches, any of these launch cards are clickable and will redirect the user to that upcoming launch's specific launch page.

We also have a legacy launches page - accessible through the header - which will redirect the user to '/launches'. Here a section for all the launches over the past 3 years can be scrolled through (using keyboard arrows). The next section is a whole list of all legacy launches since the origin of space-x. All of these cards are interactable, when pressed the user will be redirect to that launch's specific page. On this page we can see the status of each launch, be it pending, success or failure.

There are lots of changes i would make to this project but i have done my best to stick to the 4 hour time limit

**feature list:**

- add data pagination to list requests, currently fetching too much data, would be better to set limits and render these within a table that can shift between pages.

- would be better to fetch more data within the specific launches page '/launches/{id}', perhaps we could create a new route to /launchpad/{id} taking the launchpad id from our launches response and then display some data regarding the launchpad used for this launch.

- about 1 million different styling tweaks across the different pages, just to make the pages more uniform and aesthetic

- various refactoring

  - for sure extract some of these elements in to more reusable components and keep a more DRY and maintainable structure
  - perhaps add sections to the launchs/[id] pages, not necessarily needed (seeing as though we only have one currently) but would help futureproofing

- no current functionality within footer - no real functionality in the header and the 'Explore Now' button in the landing hero doesn't do anything.

- could probably optimise the overal repo structure - not convinced src is needed

- for sure could polish up my type assertion and general typescript (i'm a little out of practice) but this will only get better.

Thank you for taking you time to have look at this project - i look forward to hearing back from you with some feedback :)
