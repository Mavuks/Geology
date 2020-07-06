<template>
    <div class="list row">
        <div class="col-md-5">
            <h4>Taxon</h4>
              <table>
                <thead>
                  <tr>
                    <th scope="col" >Fltering</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <select v-model="filtering" class="form-control form-control-sm"  >
                    <option value = "iexact" >exact</option>
                    <option value= "icontains">Contains</option>
                    <option value= "istartswith">Startswith</option>
                    <option>6</option>
              </select>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Taxon</th>
                    <th scope="col" >Parent taxon</th>
                    <th scope="col" >Author</th>
                  </tr>
                </thead>
                <tbody class="border border-dark">
                  <tr>
                    <th> <input type="text" v-model="id" v-on:change="appendQueryToUrl" placeholder="Id"></th>
                    <th><input type="text" v-model="name" v-on:change="appendQueryToUrl" placeholder="Taxon"></th>
                    <th> <input type="text" v-model="parent_taxon" v-on:change="appendQueryToUrl" placeholder="Taxon Parent"></th>
                    <th> <input type="text" v-model="author" v-on:change="appendQueryToUrl" placeholder="Author"></th>

                                <button v-on:click = "getTaxon" class="btn btn-light" >Otsi</button>
                  </tr>
                </tbody>
              </table>


            <button  class="btn btn-dark"  :disabled="pageNumber === 0"  @click="prevPage">
              Previous
            </button>
            <button  class="btn btn-dark"  :disabled="pageNumber >= pageCount -1"  @click="nextPage">
              Next
            </button>


            <table class="table table-striped border border-dark " >
              <thead class="thead-dark">
                <tr>
                  <th scope="col" >ID</th>
                  <th scope="col" >Taxon</th>
                  <th scope="col" >Parent taxon</th>
                  <th scope="col" >Author</th>
                  <th scope="col" >Details</th>
                </tr>
              </thead>
              <tbody v-for="(taxon, index) in paginatedData" :key="index">
                <td>{{taxon.id}}</td>
                <td>{{taxon.taxon}}</td>
                <td>{{taxon.parent__taxon}}</td>
                <td>{{taxon.author_year}}</td>

                <td>   <router-link :to="{
                            name: 'taxon-details',
                            params: {taxon: taxon, id: taxon.id }
                        }">Details
                        </router-link>
               </td>
              </tbody>

            </table>

            <tr>
              <th>
                {{pageNumber + 1 }} out of {{pageCount}}
              </th>
            </tr>


        </div>
        <div>
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
      id: '',
      name: '',
      parent_taxon: '',
      author: '',
      parameter: "ID",
      numberInPage : 0,
      filtering : "exact"


    };
  },

  props:{

    size:{
      type:Number,
      required:false,
      default: 34
    }
   },
  methods: {

      appendQueryToUrl() {
        if(this.id !== ''){
          this.$router.push({query: {id: this.id}})
        }else if(this.name !== ''){

            this.$router.push({query: {taxon: this.name}})
        }
        else if(this.parent_taxon !== ''){

            this.$router.push({query: {parent_taxon: this.parent_taxon}})

        }else if(this.author !== ''){

            this.$router.push({query: {author: this.author}})
        }else{
            this.$router.replace('/taxon/')
          }

      },

      nextPage(){
        this.pageNumber++;
        },
      prevPage(){
        this.pageNumber--;
        },

    retrieveTaxonToList() {
      http
        .get("/taxon/")
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
          console.log(this.taxons.length);

        })
        .catch(e => {
          console.log(e);
        });
    },

      getTaxon(){
        console.log(this.filtering)
        if(this.id !== ""){
        GeologyDataService.getById(this.id)
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

        }
                else if(this.name !== ""){

          GeologyDataService.getByName(this.name, this.filtering)
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        }
          else if(this.parent_taxon !== ""){

        GeologyDataService.getByTaxonParent(this.parent_taxon, this.filtering)
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        }
          else if(this.author !== ""){
        GeologyDataService.getByAuthor(this.author, this.filtering)
        .then(response => {
          this.taxons = response.data.results;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        }


        else{
          this.retrieveTaxonToList();
        }
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
      console.log(this.size)
        const start = this.pageNumber * this.size,
          end = start + this.size;
    return this.taxons.slice(start, end);
      }



    }

};
</script>