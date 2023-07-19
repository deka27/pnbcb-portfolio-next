const member = {
     name: "member",
     title: "Members",
     type: "document",
     fields: [
       {
         name: "name",
         title: "Name",
         type: "string"
       },
       {
        name: "position",
        title: "Position",
        type: "string"
      },
       {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "title", maxLength: 96 }
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
         name: "content",
         title: "Content",
         type: "array",
         of: [
           { type: "block" }
         ]
       }
     ]
   }
   
   export default member;