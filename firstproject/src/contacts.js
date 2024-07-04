import React from 'react';
const Contacts=({contacts})=>
{
return(
<div>
<h1>Contacts List</h1>
{
contacts.map((contact)=>
<div>
<h2>{contact.name}</h2>
<h3>{contact.email}</h3>
<h4>{contact.phone}</h4>
<h5>{contact.address.city}</h5>
<h6>{contact.company.catchPhrase}</h6>
</div>
)}
</div>
);
}

export default Contacts;
