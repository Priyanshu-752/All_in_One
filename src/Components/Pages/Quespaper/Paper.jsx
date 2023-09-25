import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Paper() {
  let [categories] = useState({
  First_Year: [
    {
      id: 1,
      title: 'Btech',
      link: "https://drive.google.com/file/d/1dKrGMRpfTn0WJzNBxEfg_griEzsAaAbu/view?usp=drivesdk",
    },
    {
      id: 2,
      title: "Bca",

    },
    {
      id: 3,
      title: "BBA",

    },
    {
      id: 4,
      title: "B.Com",

    },
    {
      id: 5,
      title: "B.Frma",

    },
    {
      id: 6,
      title: "BJMC",

    },
    {
      id: 7,
      title: "HM",

    },
    ],
    Second_Year: [
      {
        id: 1,
        title: 'Btech',

      },
      {
        id: 2,
        title: "Bca",

      },
    ],
    Third_Year: [
      {
        id: 1,
        title: 'Btech',

      },
      {
        id: 2,
        title: "Bca",

      },
    ],
    Fourth_Year: [
      {
        id: 1,
        title: 'Btech',

      },
      {
        id: 2,
        title: "Bca",

      },
    ],
  })

  return (
    <>
    <div className="w-full max-w-full bg-blue-100 lg:px-24 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 lg:w-80 ">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
             )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <a href={post.link}>
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    </a>

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>

    </>
  )
}
