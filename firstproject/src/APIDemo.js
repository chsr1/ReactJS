import React from 'react';
import Contacts from './contacts';

class APIDemo extends React.Component
{
state={
contacts:[]
}

componentDidMount()
{
fetch("http://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then((data)=>{
this.setState({contacts:data})
})
.catch(console.log)
}
render()
{
return(
<div>
<Contacts contacts={this.state.contacts}/>
</div>
);
}
}

export default APIDemo;

