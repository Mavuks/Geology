import http from "../http-common";

class GeologyDataService {

  get(id) {
    return http.get(`/taxon/${id}`);
  }
  getByPagePaginate(pageLimit) {
    return http.get(`/taxon/?paginate_by=${pageLimit}`);
  }



}

export default new GeologyDataService();