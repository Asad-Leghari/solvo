import Articles from "@/components/blogs/articles";
import HeroSectionBlogs from "@/components/blogs/single-blog/hero-section";
import { Grid } from "@mui/material";
import React from "react";
import BlogDetails from "@/components/blogs/single-blog/blog-details";

const SingleBlogPage = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      width={"100%"}
      flexWrap={"nowrap"}
      bgcolor={"#99DEEB"}
      size={12}
    >
      <HeroSectionBlogs />
      <div className="w-full bg-white flex flex-col items-center justify-center rounded-2xl !py-8">
        <div className="!px-[20px] md:!px-[60px]  xl:!px-[300px]">
          <BlogDetails />
        </div>
        {/* <div className="!my-10 w-full h-7 bg-[#fef7ff]" /> */}
        <div className="!px-[20px] md:!px-[60px]  xl:!px-[300px]">
          <Articles />
        </div>
      </div>
    </Grid>
  );
};

export default SingleBlogPage;
