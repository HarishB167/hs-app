import http from "./httpService";

export async function getApps() {
  const result = await http.get("/apps/");
  return result.data;
}

export async function getApp(id) {
  const result = await http.get("/apps/" + id + "/");
  return result.data;
}

export async function saveApp(app) {
  if (app.id) {
    const result = await http.put(`/apps/${app.id}/`, app);
    return result.data;
  } else {
    const result = await http.post("/apps/", app);
    return result.data;
  }
}

export async function deleteApp(id) {
  const result = await http.delete("/apps/" + id);
  return result.data;
}

export default {
  getApps,
  getApp,
  saveApp,
  deleteApp,
};
