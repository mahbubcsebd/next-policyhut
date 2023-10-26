// /* eslint-disable no-undef */
// /* eslint-disable eqeqeq */
// import BlogDetails from '@/components/blog-details/BlogDetails';
// import blogs from '@/data/blogs';

import BlogDetails from "@/components/blog/BlogDetails";
import Banner from "@/components/global/Banner";

// export async function generateMetadata({ params }) {
//     const blogid = params.id;

//     const filterblog = blogs.filter((blog) => blog.id == blogid);

//     const originalBlog = filterblog[0];

//     return {
//         title: originalBlog.title,
//     };
// }

// const page = ({ params }) => {
//     const blogid = params.id;

//     const filterblog = blogs.filter((blog) => blog.id == blogid);

//     const originalBlog = filterblog[0];
//     return (
//         <div id="blog-details-page" className="blog-details-page">
//             <div className="blog-details-page-area">
//                 {/* <Banner text="Blog" title={originalBlog.title} /> */}
//                 <BlogDetails originalBlog={originalBlog} />
//             </div>
//         </div>
//     );
// };

// export default page;


const page = () => {
  return (
      <div className="blogDetailsPage">
          <Banner />
          <BlogDetails />
      </div>
  );
}

export default page
