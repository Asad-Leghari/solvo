"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface ActiveLastBreadcrumbProps {
  blogTitle: string;
  blogId: string;
}

export default function ActiveLastBreadcrumb(props: ActiveLastBreadcrumbProps) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link className="font-bold" href={`/blogs/${props.blogId}`}>
          {props.blogTitle}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
