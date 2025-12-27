import { useState } from "react";
import EmpoweringWealth from "../assets/img/empowering-wealth-creation-in-web3.png";
import Idle from "../assets/img/idle-xrp-to-yield-machine.png";
import Hexly from "../assets/img/hexly-now-live.png";
import StakeSmart from "../assets/img/stake-smart.png";
import Solve3 from "../assets/img/solve3.png";

import Chips from "../components/ui/Chips";
import PostCard from "../components/layout/postCard";
import { postData, sideBarPost } from "../data/posts";

const BannerStyles = "w-full rounded-2xl md:rounded-4xl";


export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const openStyle = "hidden xl:flex";

  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-16"></div>
        <Chips />

        <div className="flex py-4 gap-4 w-full">
          <div className="flex flex-col gap-6 min-w-6/8 h-screen overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-6">
                  <img src={EmpoweringWealth} alt="" className={BannerStyles} />
                  
                  <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
                    {postData.firstSet.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      source={pData.source}
                      postedSince={pData.postedSince}
                      category={pData.category}
                      buttonText={pData.buttonText}
                    />
                    ))}
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <img src={Idle} alt="" className={BannerStyles} />
                  
                  <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
                    {postData.secondSet.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      source={pData.source}
                      postedSince={pData.postedSince}
                      category={pData.category}
                      buttonText={pData.buttonText}
                    />
                    ))}
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <img src={Hexly} alt="" className={BannerStyles} />
                  
                  <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
                    {postData.thirdSet.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      source={pData.source}
                      postedSince={pData.postedSince}
                      category={pData.category}
                      buttonText={pData.buttonText}
                    />
                    ))}
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <img src={StakeSmart} alt="" className={BannerStyles} />
                  
                  <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
                    {postData.fourthSet.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      source={pData.source}
                      postedSince={pData.postedSince}
                      category={pData.category}
                      buttonText={pData.buttonText}
                    />
                    ))}
                  </div>
              </div>

              <div className="flex flex-col gap-6">
                  <img src={Solve3} alt="" className={BannerStyles} />
                  
                  <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
                    {postData.fifthSet.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      source={pData.source}
                      postedSince={pData.postedSince}
                      category={pData.category}
                      buttonText={pData.buttonText}
                    />
                    ))}
                  </div>
              </div>
          </div>




          <div className={`fixed xl:static top-0 right-0 z-80 xl:z-0 h-screen
                          w-80 xl:w-fit bg-black/40
                          transition-transform duration-300 ease-out
                          xl:translate-x-0
                          ${sideBarOpen ? "translate-x-0" : "translate-x-full"}
                          xl:flex`}>
              
              <button
                onClick={() => setSideBarOpen(false)}
                className="flex xl:hidden absolute right-4 top-4 cursor-pointer rounded-lg border border-white/5 hover:border-white/5 bg-black-alt p-2 leading-3.5 text-white/60 hover:text-white transition"
                aria-label="Close sidebar"
              >
                ✕
              </button>


              <div className="flex flex-col gap-2 h-full overflow-y-auto scrollbar-hide px-4 xl:px-0 py-4 xl:py-0">
                  <p className="flex w-fit items-center select-none h-fit py-2 px-4 font-medium rounded-full bg-btn-bg transition-colors">
                    Featured
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    {sideBarPost.featuredPost.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      buttonText={pData.buttonText}
                      showMetaData= {false}
                      showCategory= {false}
                    />
                    ))}
                  </div>



                  <p className="flex w-fit items-center select-none h-fit py-2 px-4 font-medium rounded-full bg-btn-bg transition-colors">
                    Web3 Jobs
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    {sideBarPost.web3Jobs.map((pData) => (
                    <PostCard 
                      key={pData.title}
                      img={pData.img}
                      title={pData.title}
                      description={pData.description}
                      buttonText={pData.buttonText}
                      showMetaData= {false}
                      showCategory= {false}
                    />
                    ))}
                  </div>
              </div>

          </div>
        </div>


        {/* Sidebar nudge */}
        {!sideBarOpen && (
          <button
            onClick={() => setSideBarOpen(true)}
            className="
              fixed right-0 top-1/2 -translate-y-1/2 z-40
              xl:hidden
              w-4 h-20
              rounded-l-lg
              bg-black-alt hover:bg-black-alt/80
              transition
            "
            aria-label="Open sidebar"
          />
        )}

        {sideBarOpen && (
        <div
          onClick={() => setSideBarOpen(false)}
          className="fixed inset-0 z-60 bg-black/80 backdrop-blur-xs xl:hidden"
        />
      )}


    </div>
  )
}