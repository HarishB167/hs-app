import http from "./httpService";

export async function getMindmaps() {
  const result = await http.get("/mindmaps/");
  return result.data;
}

export async function getMindmap(id) {
  const result = await http.get("/mindmaps/" + id);
  return result.data;
}

export async function saveMindmap(mindmap) {
  if (mindmap.id) {
    const result = await http.put(`/mindmaps/${mindmap.id}/`, mindmap);
    return result.data;
  } else {
    const result = await http.post("/mindmaps/", mindmap);
    return result.data;
  }
}

export async function deleteMindmap(id) {
  const result = await http.delete("/mindmaps/" + id);
  return result.data;
}

export async function incrementRevisions(id, revisions) {
  const result = await http.patch(`/mindmaps/${id}/`, {
    revisions: revisions,
  });
}

export default {
  getMindmaps,
  getMindmap,
  saveMindmap,
  deleteMindmap,
};