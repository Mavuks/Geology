import http from "../http-common";

class GeologyDataService {

  getById(id) {
    return http.get(`/taxon/${id}`);
  }

  getByName(name, filter) {
    return http.get(`/taxon?taxon__${filter}=${name}`);
  }
  getByAuthor(name, filter) {
    return http.get(`/taxon?author_year__${filter}=${name}`);
  }
  getByTaxonParent(name, filter) {
    return http.get(`/taxon?parent__taxon__${filter}=${name}`);
  }
  getByPagePaginate(pageLimit) {
    return http.get(`/taxon/?paginate_by=${pageLimit}`);
  }



}

export default new GeologyDataService();