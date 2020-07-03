<template>
  <div>
    <h4>Taxon Detailid</h4>
          <td>   <router-link :to="{
                            name: 'taxon',

                        }">Tagasi
                        </router-link>
               </td>
     <table class="table table-striped">

          <tbody>
            <tr>
              <td>Id</td>
              <td>{{taxon.id}} </td>
            </tr>
            <tr>
              <td>Taxon</td>
              <td>{{taxon.taxon}} </td>
            </tr>
             <tr>
              <td>Taxon full name</td>
              <td>{{taxon.taxon_full_name}} </td>
            </tr>
             <tr>
              <td>Taxon original name</td>
              <td>{{taxon.taxon_original_name}} </td>
            </tr>
             <tr>
              <td>Reference</td>
              <td>{{taxon.reference}} </td>
            </tr>
            <tr>
              <td>Parent Taxon</td>
              <td>{{taxon.parent__taxon}} </td>
            </tr>
            <tr>
              <td>Author year</td>
              <td>{{taxon.author_year}} </td>
            </tr>
            <tr>
              <td>Taxon epithet</td>
              <td>{{taxon.taxon_epithet}} </td>
            </tr>
            <tr>
              <td>owner</td>
              <td>{{taxon.owner}} </td>
            </tr>
            <tr>
              <td>fossil_group</td>
              <td>{{taxon.fossil_group}} </td>
            </tr>
            <tr>
              <td>Synonym of</td>
              <td>{{taxon.synonym_of}} </td>
            </tr>
            <tr>
              <td>synonym_of_reference_id</td>
              <td>{{taxon.synonym_of_reference_id}} </td>
            </tr>
            <tr>
              <td>hierarchy_string</td>
              <td>{{taxon.hierarchy_string}} </td>
            </tr>
            <tr>
              <td>rank</td>
              <td>{{taxon.rank}} </td>
            </tr>
            <tr>
              <td>rank_original</td>
              <td>{{taxon.rank_original}} </td>
            </tr>
            <tr>
              <td>type_taxon</td>
              <td>{{taxon.type_taxon}} </td>
            </tr>
            <tr>
              <td>type_taxon_txt</td>
              <td>{{taxon.type_taxon_txt}} </td>
            </tr>
            <tr>
              <td>stratigraphy_base</td>
              <td>{{taxon.stratigraphy_base}} </td>
            </tr>
            <tr>
              <td>stratigraphy_top</td>
              <td>{{taxon.stratigraphy_top}} </td>
            </tr>
            <tr>
              <td>in_estonia</td>
              <td>{{taxon.in_estonia}} </td>
            </tr>
            <tr>
              <td>in_baltoscandia</td>
              <td>{{taxon.in_baltoscandia}} </td>
            </tr>
            <tr>
              <td>is_fossil</td>
              <td>{{taxon.is_fossil}} </td>
            </tr>
            <tr>
              <td>is_private</td>
              <td>{{taxon.is_private}} </td>
            </tr>
            <tr>
              <td>is_valid</td>
              <td>{{taxon.is_valid}} </td>
            </tr>
            <tr>
              <td>is_fossil_group</td>
              <td>{{taxon.is_fossil_group}} </td>
            </tr>
            <tr>
              <td>sort</td>
              <td>{{taxon.sort}} </td>
            </tr>
            <tr>
              <td>taxon_id_pbdb</td>
              <td>{{taxon.taxon_id_pbdb}} </td>
            </tr>
            <tr>
              <td>taxon_id_plutof</td>
              <td>{{taxon.taxon_id_plutof}} </td>
            </tr>
            <tr>
              <td>taxon_id_eol</td>
              <td>{{taxon.taxon_id_eol}} </td>
            </tr>
            <tr>
              <td>taxon_id_nrm</td>
              <td>{{taxon.taxon_id_nrm}} </td>
            </tr>
            <tr>
              <td>remarks</td>
              <td>{{taxon.remarks}} </td>
            </tr>
            <tr>
              <td>is_authorized</td>
              <td>{{taxon.is_authorized}} </td>
            </tr>

            <tr>
              <td>user_authorized</td>
              <td>{{taxon.user_authorized}} </td>
            </tr>
            <tr>
              <td>user_added</td>
              <td>{{taxon.user_added}} </td>
            </tr>
            <tr>
              <td>date_changed</td>
              <td>{{taxon.date_changed | capitalize}} </td>
            </tr>
            <tr>
              <td>user_changed</td>
              <td>{{taxon.user_changed}} </td>
            </tr>
            <tr>
              <td>date_added</td>
              <td>{{taxon.date_added | capitalize}} </td>
            </tr>



          </tbody>

            </table>

  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: "taxon",
  props: ["taxon"],
  data(){
    return{
      taxons:[]
    }


  },
   filters:
  {
    capitalize: function(value){
    if(value){
      return  moment(String(value)).format('DD.MM.YYYY hh:mm')
    }
  }
  },

  methods: {
  },




};
</script>