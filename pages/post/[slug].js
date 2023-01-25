import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import DPage from "../../components/main/DPage";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../../redux/slice/postsSlice";
import parse from "html-react-parser";

function Slug() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { singlePost } = useSelector((state) => state.posts);
  console.log(slug);
  useEffect(() => {
    dispatch(getSinglePost(slug));
  }, [slug]);

  return (
    <Layout>
      <div>
        {singlePost.data && <DPage post={singlePost.data} />}
        {/* {singlePost.data && parse(singlePost.data.content)} */}
      </div>
    </Layout>
  );
}

export default Slug;
