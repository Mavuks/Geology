<template>
    <div class="list row">
        <div class="col-md-5">
            <h4>Taxon</h4>

            <tr>
             <select v-model="parameter" class="form-control form-control-sm" >
                <option disabled value="">Please select one</option>
                  <option>ID</option>
                  <option>Name</option>
                  <option>C</option>
              </select>

                <button v-on:click = "getTaxonById" v-on:change="appendQueryToUrl">Otsi</button>

            <input type="text" v-model="search" v-on:change="appendQueryToUrl" placeholder="Otsing">
            </tr>
                      <button :disabled="pageNumber === 0"  @click="prevPage">
            Previous
          </button>
          <button :disabled="pageNumber >= pageCount -1"  @click="nextPage">
            Next
          </button>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" >ID</th>
                  <th scope="col" >Taxon</th>
                  <th scope="col" >Parent taxon</th>
                </tr>
              </thead>
              <tbody v-for="(taxon, index) in paginatedData" :key="index">
                <td>{{taxon.id}}</td>
                <td>{{taxon.taxon}}</td>
                <td>{{taxon.parent__taxon}}</td>

                <td>   <router-link :to="{
                            name: 'taxon-details',
                            params: {taxon: taxon, id: taxon.id }
                        }">Detailid
                        </router-link>
               </td>
              </tbody>
            </table>
            <tr>
              <th>
                {{pageNumber + 1 }} Of {{pageCount}}
              </th>
            </tr>

        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>


<script>
import http from "../http-common";
import GeologyDataService from "../services/GeologyDataService";


export default {
  name: "TaxonList",
  data() {

    return {
      pageNumber: 0,
      taxons: [],
      search: null,
      parameter: "ID"
    };
  },

  props:{
    listData:{
      type:Array,
      required:true
    },
    size:{
      type:Number,
      required:false,
      default: 10
    }
   },
  methods: {

      appendQueryToUrl() {
          this.$router.push({query: {id: this.search}})
      },

      nextPage(){
        this.pageNumber++;
        },
      prevPage(){
        this.pageNumber--;
        },

    retrieveTaxonToList() {
      http
        .get("/taxon/?paginate_by=25")
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
          console.log(this.taxons.length);

        })
        .catch(e => {
          console.log(e);
        });
    },

      getTaxonById(){

        console.log(this.search)
        GeologyDataService.get(this.search)
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },


    refreshList() {
      this.retrieveTaxonToList();
    },

  },

  mounted() {
    this.retrieveTaxonToList();
    },

  computed: {

    pageCount(){
        let l = this.taxons.length,
          s = this.size;

      return Math.ceil(l/s);
      },

    paginatedData(){
        const start = this.pageNumber * this.size,
          end = start + this.size;
    return this.taxons.slice(start, end);
      }



    }

};
</script>