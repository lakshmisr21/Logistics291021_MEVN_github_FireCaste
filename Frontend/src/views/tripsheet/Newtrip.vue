<template>
    <div style="margin:15%; padding-bottom:0px">
      <h1>NEW - <span>TRIPSHEET</span></h1>
       <form @submit.prevent="submit">
        <input type="text" v-model="tripsheetno" placeholder="Enter Tripsheet Number" />
      <input type="text" v-model="slno" placeholder="Enter Serial Number"/>
      <br>  
          <br>
      <button @click="create" class="btn green">CREATE</button>
      <br>
        <br>
           <footer >                         
                  <router-link to="/tripsheet">Cancel ?</router-link>            
        </footer>
    
      </form>
    </div>
   
    
    </template>
    
<script>
import axios from 'axios'
export default{
  name:'newtripsheet',
  data(){
    return{
      tripsheetno:'',
      slno:''
    }
  },
  methods: {
    create(){
      let URL = this.$store.state.api_url
      axios.post(URL + 'tripsheet/newtripsheet',{
        tripsheetno:this.tripsheetno,
        slno:this.slno
      }).then(respoonse=>{
        console.log(respoonse)
        this.$router.push('/tripsheet')
      }).catch(err=>{
        console.log(err)
      })
    }
  },
}
</script>