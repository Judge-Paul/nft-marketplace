import React from "react";
import ArtBG from "../assets/category-images/Art.png"
import CollectiblesBG from "../assets/category-images/Collectibles.png"
import MusicBG from "../assets/category-images/Music.png"
import PhotographyBG from "../assets/category-images/Photography.png"
import VideoBG from "../assets/category-images/Video.png"
import UtilityBG from "../assets/category-images/Utility.png"
import SportBG from "../assets/category-images/Sport.png"
import VirtualWordsBG from "../assets/category-images/Virtual-Worlds.png"
import { HiOutlinePaintBrush, HiOutlineSwatch, HiOutlineMusicalNote, HiOutlineCamera, HiOutlineVideoCamera } from "react-icons/hi2"
import { FaMagic } from "react-icons/fa"
import { IoFootball, IoPlanetOutline } from "react-icons/io5"
import CategoryCard from "./cards/CategoryCard";

export default function Category() {
    return (
        <div className="px-8 sm:px-32 mt-20 mb-20 lg:mb-36">
            <h4 className="text-3xl text-white md:text-[2.5rem] font-bold mb-20">
                Browse Categories
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
                <CategoryCard backgroundImage={ArtBG} icon={<HiOutlinePaintBrush />} name="Art" />
                <CategoryCard backgroundImage={CollectiblesBG} icon={<HiOutlineSwatch />} name="Collectibles" />
                <CategoryCard backgroundImage={MusicBG} icon={<HiOutlineMusicalNote />} name="Music" />
                <CategoryCard backgroundImage={PhotographyBG} icon={<HiOutlineCamera />} name="Photography" />
                <CategoryCard backgroundImage={VideoBG} icon={<HiOutlineVideoCamera />} name="Video" />
                <CategoryCard backgroundImage={UtilityBG} icon={<FaMagic />} name="Utility" />
                <CategoryCard backgroundImage={SportBG} icon={<IoFootball />} name="Sport" />
                <CategoryCard backgroundImage={VirtualWordsBG} icon={<IoPlanetOutline />} name="Virtual Worlds" />
            </div>
        </div>
    )
}