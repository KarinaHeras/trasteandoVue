Vue.component('user-item',
            {
            props: ['user'],
            template: `<li class="nameList">{{ user.name }} lives in {{ user.address.city }}</li>`
        })


Vue.component('user-list', {
    props:['users'],
    template: `
    <ul>
        <user-item
        v-for="(user, index) in users"
        :user="user">
        </user-item>
    </ul>
    `
})

const endpoint = 'https://jsonplaceholder.typicode.com/users'

function getUsers(url){
    const users = fetch(url).then(function(response){
        return response.json()
    })
    return users    
}

async function callAndPaint(){
    const myUsers = await getUsers(endpoint)
    console.log(myUsers)
    const app = new Vue({
        el: '#app',
        data: {
            users: myUsers
        },
        template: `
            <user-list :users="users"> </user-list>
            `
    })
}
callAndPaint()

//[{ name: 'User 1'} , {name: 'User 2' }]// getUsers(endpoint)

    

    

