import http from "./httpService";

export async function getMindmaps() {
  const result = await http.get("/mindmaps/");
  return result.data;
}

export async function getMindmap(id) {
  const result = await http.get("/mindmaps/" + id + "/");
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

export async function createBranch(mindmapId, branch) {
  const result = await http.post(`/mindmaps/${mindmapId}/branches/`, branch);
  return result.data;
}

export async function editBranch(mindmapId, branch) {
  const result = await http.put(
    `/mindmaps/${mindmapId}/branches/${branch.sort_number}/`,
    branch
  );
  return result.data;
}

export async function deleteBranch(mindmapId, branch) {
  const result = await http.delete(
    `/mindmaps/${mindmapId}/branches/${branch.sort_number}/`
  );
}

export async function createBranchContent(
  mindmapId,
  branchSortNumber,
  branchContentLine
) {
  const result = await http.post(
    `/mindmaps/${mindmapId}/branches/${branchSortNumber}/branchline/`,
    branchContentLine
  );
  return result.data;
}

export async function editBranchContent(
  mindmapId,
  branchSortNumber,
  branchContentLine
) {
  const result = await http.put(
    `/mindmaps/${mindmapId}/branches/${branchSortNumber}/branchline/${branchContentLine.sort_number}/`,
    branchContentLine
  );
  return result.data;
}

export async function deleteBranchContent(
  mindmapId,
  branchSortNumber,
  branchContentLine
) {
  const result = await http.delete(
    `/mindmaps/${mindmapId}/branches/${branchSortNumber}/branchline/${branchContentLine.sort_number}/`
  );
}

export default {
  getMindmaps,
  getMindmap,
  saveMindmap,
  deleteMindmap,
};
