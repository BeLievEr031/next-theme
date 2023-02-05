import { CSSProperties } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Contentcard1 from "../components/cards/Leftcard";
import Hero from "../components/main/Hero";
import OpinionC from "../components/cards/OpinionC";
import Plays from "../components/main/Plays";
import Entertainment from "../components/main/Entertainment";
import State from "../components/main/State";
import CategoryN from "../components/main/CategoryN";
import CityN from "../components/main/CityN";
import HealthN from "../components/main/HealthN";
import World from "../components/main/World";
import Automobile from "../components/main/Automobile";
import Business from "../components/main/Business";
import Astrology from "../components/main/Astrology";
import LatestN from "../components/main/LatestN";
import DetailsP from "../components/cards/DetailsP";
import DPage from "../components/main/DPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../redux/slice/categorySlice";
import { fetchBreakingNews, fetchPosts } from "../redux/slice/postsSlice";
import ClockLoader from "react-spinners/ClockLoader";
import { store } from "../redux/store";
// import Automobile from '../components/main/Automobile'

// import Business from '../components/main/Business'
// import Astrology from '../components/main/Astrology'
// import LatestN from '../components/main/LatestN'

export default function Home(props) {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const { data: posts } = useSelector((state) => state.posts);
  const { breakingNew } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchCategories(1, 42, 1));
    dispatch(fetchBreakingNews(12));
    dispatch(fetchPosts(1, 25));
  }, []);

  return (
    <>
      {categories.length > 0 && breakingNew.length > 0 && posts.length > 0 ? (
        <Layout>
          <div className="container m-auto px-3 " id="scroll">
            <Hero />
            {/* <OpinionC /> */}
            <Plays />
            {categories.length >= 7 && <Entertainment />}
            {/* <State /> Oneline */}
            <CategoryN />
            {/* Oneline */}
            {/* <CityN />  */}
            {/* Oneline */}
            {categories.length >= 14 && <HealthN />}
            <World />
           
            {categories.length >= 21 && <Automobile />}
            {categories.length >= 28 && <Business />}
            {categories.length >= 35 && <Astrology />}
           

            <LatestN />
          </div>
        </Layout>
      ) : (
        <div className="flex h-screen w-screen items-center justify-center">
         loading....
        </div>
      )}
    </>
  );
}
