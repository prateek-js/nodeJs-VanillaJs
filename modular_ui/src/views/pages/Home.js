// --------------------------------
//  Define Data Sources
// --------------------------------

var getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting response', err)
   }
}

let Home = {
   render : async () => {
       let view =  /*html*/`
       <div class="container searchContainer">
            <div class="search card card-body">
                <h3>Search GitHub </h3>
                <p class="lead">Enter a language or description to Search</p>
                <div class="input-container">
                    <input type="text" id="searchUser" class="form-control" placeholder="Search for Language or description...">
                    <select class="custom-select">
                        <option selected="">Language</option>
                        <option value="1">Description</option>
                    </select>
                    <button type="button" class="btn btn-secondary" (onClick)="getPostsList()">Search</button>
                </div>
            </div>
        </div>
        `
       return view
   }
   , after_render: async () => {
   }

}

export default Home;