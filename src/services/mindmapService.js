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
  const m = {
    title: mindmap.title,
    numberInStock: mindmap.numberInStock,
    dailyRentalRate: mindmap.dailyRentalRate,
    genre: mindmap.genreId,
  };
  if (mindmap.id) {
    const result = await http.put(`/mindmaps/${mindmap.id}/`, m);
    return result.data;
  } else {
    const result = await http.post("/mindmaps/", m);
    return result.data;
  }
}

export async function deleteMindmap(id) {
  const result = await http.delete("/mindmaps/" + id);
  return result.data;
}

export default {
  getMindmaps,
  getMindmap,
  deleteMindmap,
};
