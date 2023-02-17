<template>

<div class="admin" style="margin:10%">      
  <div class="container">   
      
             <i class="fa fa-search-plus" style="font-size:22px;color:blue;"> </i>
            <input class="input" style="text-align: center;width:40%;" v-model="search" placeholder="Search Mobile"/>

             <div class="fixed-action-btn">
               <router-link to="/newtripsheet" >
                <i class="fas fa-plus-circle" style="font-size:40px;color:green"></i>
               </router-link>
              </div>
  
  
  <ul class="collapsible" style="margin:7%">
    <li v-for="user in filteredUsers" :key="user._id">
      <div class="collapsible-header" style="padding-right:50px">
        <i class="fa fa-truck"></i>
      </div>

        <div class="collapsible-body" style="border:1px solid black">
        <span>
<!--
        <label for="mobile">Name:</label> |   <span> {{user.name}} </span> 
          <br>
             <label for="mobile">Mobile:</label> |   <span> {{user.mobile}} </span>     
            <br>   
             <label for="mobile">Place:</label> |   <span> {{user.place}} </span>    
             <br>          
              <label for="created">Account Created:</label> | <span>{{ timestampToDate(user.account_created) }} </span>
-->

        <div>
          <img src="../../assets/swastiknew.jpg" alt="" style="display: block;  margin-left: auto;  margin-right: auto;  width: 5%;">
        
            <h4 style="text-align: center;color:blue;font-weight: bold;">SHREE GURU TRANSPORT</h4>
            <p style="text-align: center;font-size: small;line-height: 10%;">Head Office:60/1,Old Taragupet,BANGALORE-53</p>
            <p style="text-align: center;font-size: small;line-height: 10%;">Branch Office:24/4,4th Main Road,New Taragupet,BANGALORE-53</p>

                        
            <div style="line-height: 1%">
              <p class="alignleft" style="color:red;font-weight:bold;">Trip Sheet No: {{user.mobile}}</p>
              <p class="alignright" style="color:red;font-weight:bold;">Date: <span> {{timestampToDate(user.account_created)}} </span></p>
            </div> 
            <!--To Clear Above Float-->
            <div style="clear: both;"></div>
            
            <div style="line-height: 1%">
              <p class="alignleft">From Bangalore To: {{user.place}} </p>
              <p class="alignright">Vehicle No:{{user.name}}</p>
            </div> 
            <!--To Clear Above Float-->
            <div style="clear: both;"></div>
        </div>
           
                   

         
             

          <table id="customers">
           
            <tr>
              <th>NAME</th>
              <th>MOBILE NO</th>
              <th>PLACE</th>
              <th>DATE</th>
            </tr>
            <tr>
              <td><span> {{user.name}} </span> </td>
              <td><span> {{user.mobile}} </span> </td>
              <td><span> {{user.place}} </span> </td>
              <td><span> {{timestampToDate(user.account_created)}} </span> </td>
            </tr>
          </table>       
          </span>
        </div>


    </li>
  </ul>


  </div>
  </div>  
</template>

<script>
  $(document).ready(function(){
    $('.collapsible').collapsible();
  })

  import axios from 'axios'
export default {
  name: 'User',
  components: {  
  },
  data(){
    return{
      users:[],
      search:''
    }
  },
  computed:{
      filteredUsers: function(){
        return this.users.filter((user)=>{
          return user.mobile.toLowerCase().match(this.search.toLowerCase())
        })
      }
  },
   async mounted() {
    let api_url = this.$store.state.api_url
                axios.get(api_url + 'user/getusers', {
                auth_token: localStorage.getItem('jwt'),                
            })
            .then(response =>{
                this.users = response.data
            })
  },
  methods: {
     timestampToDate (timestamp) {
      timestamp = new Number(timestamp)
      let d = new Date(timestamp)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      if(month < 10){
        month = "0" + month
      }
      let day = d.getDate()
      if(day < 10){
        day = "0" + day
      }
      let hour = d.getHours()
      let minute = d.getMinutes()

      return day + '/' + month + '/' + year + ' ' + hour + ':' + minute
    }, 
  },
}

</script>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color:white}

#customers tr:hover {background-color: #ccdcf5;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #ecf8f2;
  color: rgb(21, 20, 20);
}

.alignleft {
	float: left;
}
.alignright {
	float: right;
}

</style>