var randomUsers = new Vue({
  el: '#randomUsersApp',
  data: {
  "users": [{
    name:{
      title:"",
      first:"",
      last:""
    },

    location:{
      state:""
    },

    email:"",
    dob:{
      date:"",
      age:""
    },
    picture:{
      large:"",
      thumbnail:""

    }


  }]
},

methods: {
  fetchUsers(){
    fetch('https://randomuser.me/api/')
    .then(function(response) {return response.json() })
    .then(json => {randomUsers.users = json.results });
  },

  submitFunction(event){
    this.fetchUsers();
  }


},

created(){
  this.fetchUsers();
}
})
