const gallery = {
     name: "gallery",
     title: "Gallery",
     type: "document",
     fields: [
       {
         name: "title",
         title: "Title",
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
     ]
   }

export default gallery;