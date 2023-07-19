const week = {
     name: "week",
     title: "Weekly",
     type: "document",
     fields: [
       {
         name: "name",
         title: "Name",
         type: "string",
       },
       {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "name" }
       },
       {
        title: 'Date',
        name: 'date',
        type: 'date'
      },
       {
         name: "image",
         title: "Image",
         type: "image",
         options: { hotspot: true },
         fields: [
           {
             name: "alt",
             title: "Alt",
             type: "string"
           }
         ]
       },
       {
         name: "url",
         title: "URL",
         type: "url"
       },
       {
         name: "content",
         title: "Content",
         type: "array",
         of: [{ type: "block" }]
       }
     ]
   }
   
   export default week