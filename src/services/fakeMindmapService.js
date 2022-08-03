/*
Each mindmap contains
Title (string), Category (string),
Branches (list)
Each branch consists of title and list of strings
 */

const mindmaps = [
  {
    _id: 1,
    title: "Django overview",
    category: "Django",
    branches: [
      {
        title: "Part 1 Fundamentals",
        content: [
          "Fundamentals",
          "Building a data model",
          "Setting up database",
          "Django ORM",
          "Admin Site",
        ],
      },
      {
        title: "Part 2 Rest Framework",
        content: [
          "Building a rest api",
          "Advanced API concepts",
          "Design and implementation of Shopping cart API",
          "User authentication",
          "Securing APIs",
          "Desing and buildig of Orders api",
        ],
      },
      {
        title: "Part 3 Others",
        content: [
          "Uploading files",
          "Sending emails",
          "Running background tasks",
          "Automated testing",
          "Performance testing",
          "Caching",
          "Preparing for production",
          "Deployment",
        ],
      },
      {
        title: "Part 4 Some",
        content: [
          "Uploading files",
          "Sending emails",
          "Running background tasks",
          "Automated testing",
          "Performance testing",
          "Caching",
          "Preparing for production",
          "Deployment",
        ],
      },
      {
        title: "Part 5 A different feature",
        content: [
          "Uploading files",
          "Sending emails",
          "Running background tasks",
          "Automated testing",
          "Performance testing",
          "Caching",
          "Preparing for production",
          "Deployment",
        ],
      },
      {
        title: "Part 6 Sixth part",
        content: [
          "Uploading files",
          "Sending emails",
          "Running background tasks",
          "Automated testing",
          "Performance testing",
          "Caching",
          "Preparing for production",
          "Deployment",
        ],
      },
    ],
  },
  {
    _id: 2,
    title: "Fundamentals",
    category: "Django",
    branches: [
      {
        title: "Introduction",
        content: [],
      },
      {
        title: "Web development",
        content: [],
      },
      {
        title: "Setting up development environment",
        content: [],
      },
      {
        title: "First Django project",
        content: [],
      },
      {
        title: "First Django app",
        content: [],
      },
      {
        title: "Django debugging techniques",
        content: [],
      },
    ],
  },
];

export function getMindmaps() {
  return mindmaps;
}

export function getMindmapWithId(id) {
  let result = false;
  mindmaps.forEach((map) => {
    if (parseInt(id) === map._id) result = map;
  });
  return result;
}
