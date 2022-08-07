/*
Each mindmap contains
Title (string), Category (string),
Branches (list)
Each branch consists of title and list of strings
 */
import _ from "lodash";

const mindmaps = [
  {
    _id: "1",
    title: "Django overview",
    category: "Django",
    branches: [
      {
        _id: "1",
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
        _id: "2",
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
        _id: "3",
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
        _id: "4",
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
        _id: "5",
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
        _id: "6",
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
    _id: "2",
    title: "Fundamentals",
    category: "Django",
    branches: [
      {
        _id: "1",
        title: "Introduction",
        content: [],
      },
      {
        _id: "2",
        title: "Web development",
        content: [],
      },
      {
        _id: "3",
        title: "Setting up development environment",
        content: [],
      },
      {
        _id: "4",
        title: "First Django project",
        content: [],
      },
      {
        _id: "5",
        title: "First Django app",
        content: [],
      },
      {
        _id: "6",
        title: "Django debugging techniques",
        content: [],
      },
    ],
  },
];

export function getMindmaps() {
  return _.cloneDeep(mindmaps);
}

export function getMindmapWithId(id) {
  let result = false;
  mindmaps.forEach((map) => {
    if (id === map._id) result = map;
  });
  return result;
}

export function saveMindmap(mindmap) {
  let mindmapInDb = mindmaps.find((m) => m._id === mindmap._id) || {};

  mindmapInDb.title = mindmap.title;
  mindmapInDb.category = mindmap.category;
  mindmapInDb.branches = mindmap.branches;
  console.log(mindmapInDb);

  if (!mindmapInDb._id) {
    mindmapInDb._id = Date.now().toString();
    mindmaps.push(mindmapInDb);
    console.log("Creating new");
  }

  return mindmapInDb;
}
