import http from "../http-common";


class PrefixService {
    getAll() {
        return http.get("/prefix");
    }

    // get(id) {
    //     return http.get(`/prefixes/${id}`);
    // }

    // create(data) {
    //     return http.post("/prefixes", data);
    // }

    // update(id, data) {
    //     return http.put(`/prefixes/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/prefixes/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/prefixes`);
    // }

    // findByTitle(title) {
    //     return http.get(`/prefixes?title=${title}`);
    // }
}

export default new PrefixService();