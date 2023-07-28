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
        name: "department",
        title: "Department",
        type: "string",
        options: {
          list: [
          { title: 'Church Departments', value: 'a' },
          { title: 'Deacon Board', value: 'b' },
          { title: 'Baptist Youth Fellowship', value: 'c' },
          { title: 'Women Baptist fellowship', value: 'd' },
          { title: 'Sunday school', value: 'e' },
          { title: 'Hospitality', value: 'f' },
          { title: 'Editor board', value: 'g' },
          { title: 'Media', value: 'h' },
          { title: 'Sound system', value: 'i' },
          { title: 'Worship Team', value: 'j' },
          {title: 'Pastor', value: 'aa' },
          { title: 'Associate Pastor', value: 'ab' },
        ]
        }
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