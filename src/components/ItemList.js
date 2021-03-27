import React, { useState } from 'react';
import Item from './Item';


function ItemList(props) {
  const [items, setItems] = useState([
    {
      name: "There are no items on the list yet.",
      contactEmail: "hello@world.com", 
      contactNumber: "98765432",
      date: "10/10/2020",
      found: false
    }, 
    {
      name: "There are no items on the list yet.",
      contactEmail: "hello@world.com", 
      contactNumber: "243984793272",
      date: "10/10/2021",
      found: true
    }
  ]);

  /*
  const getItems = async () => {
    let response = await fetch(process.env.API_LINK + '/items/${page_id}');
    if (response.ok) {
      var res = await response.json();
      var resItems = await res.items;

      var tmpItems = []
      for (const resItem in resItems) {
        tmpItems.push({
          name: resItem.name,
          contactEmail: resItem.contact_email,
          contactNumber: resItem.contact_number, 
          date: resItem.date
        });
      }

      setItems(tmpItems);
    }
  };
  */

  return (
    <div>
      {items.map(item => {
        return (
          <Item item={item} />
        )
      })}
    </div>
  );
}

export default ItemList;