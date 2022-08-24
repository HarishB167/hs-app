/*
Each mindmap contains
Title (string), Category (string),
Branches (list)
Each branch consists of title and list of strings
 */
import _ from "lodash";

const mindmaps = [
  {
    id: "1",
    title: "Django overview",
    category: "Django",
    revisions: 0,
    branches: [
      {
        id: "1",
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
        id: "2",
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
        id: "3",
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
        id: "4",
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
        id: "5",
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
        id: "6",
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
    id: "2",
    title: "Fundamentals",
    category: "Django",
    revisions: 0,
    branches: [
      {
        id: "1",
        title: "Introduction",
        content: [],
      },
      {
        id: "2",
        title: "Web development",
        content: [],
      },
      {
        id: "3",
        title: "Setting up development environment",
        content: [],
      },
      {
        id: "4",
        title: "First Django project",
        content: [],
      },
      {
        id: "5",
        title: "First Django app",
        content: [],
      },
      {
        id: "6",
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
    if (id === map.id) result = map;
  });
  return result;
}

export function saveMindmap(mindmap) {
  let mindmapInDb = mindmaps.find((m) => m.id === mindmap.id) || {};

  mindmapInDb.title = mindmap.title;
  mindmapInDb.category = mindmap.category;
  mindmapInDb.branches = mindmap.branches;
  mindmapInDb.revisions = mindmap.revisions;
  console.log(mindmapInDb);

  if (!mindmapInDb.id) {
    mindmapInDb.id = Date.now().toString();
    mindmaps.push(mindmapInDb);
    console.log("Creating new");
  }

  return mindmapInDb;
}

export function deleteMindmap(id) {
  let mindmapInDb = mindmaps.find((m) => m.id === id);
  mindmaps.splice(mindmaps.indexOf(mindmapInDb), 1);
  return mindmapInDb;
}

export function incrementRevisions(id) {
  let mindmapInDb = mindmaps.find((m) => m.id === id) || {};
  mindmapInDb.revisions = parseInt(mindmapInDb.revisions) + 1;
  return mindmapInDb;
}
