
export default function MaterialsHome() {
  return (
     <div className="w-full h-full bg-gradient-to-r from-neutral-200 via-amber-300 to-rose-400 clip-path-polygon p-16">
     <div className="flex flex-col md:flex-row md:flex-wrap h-full items-center justify-end gap-6 my-40">
       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
           Messages
         </h5>
         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         &quot;Discover transformative messages that inspire growth and deepen
           your faith. Explore wisdom & find purpose in our inspiring
           content.&quot;
         </p>
         <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Read more
         </a>
       </div>

       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
           Podcasts
         </h5>
         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         &quot;Unlock insights and inspiration through captivating podcasts.
           Expand your mind with enriching audio journeys. Tune in and grow.&quot;
         </p>
         <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Read more
         </a>
       </div>

       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
           Articles
         </h5>
         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         &quot;Enriching articles that ignite curiosity and inspire growth
           through captivating reads. Explore and expand your horizons.&quot;
         </p>
         <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Read more
         </a>
       </div>
     </div>
   </div>
  )
}
