import Header from '@/components/Header'
import React from 'react'
import Banner from './_component/Banner'
import Services from './_component/Services'
import Footer from '@/components/Footer'
import Dispensary from './_component/Dispensary'
import Comment from './_component/Comment'
const HomePage = () => {
  return (
    <>
    <div>
    <Header/>
    <Banner/>
    <Services/>
    
    <Dispensary/>
    <Comment/>
  {/* CHOOSE YOUR WEED */}
  <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:py-24 mb:py-7">
    <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.7px]">CHOOSE
      YOUR WEED</strong>
    {/* menu */}
    <div className="flex mb:flex-col md:flex-row md:items-center mb:gap-y-8 md:gap-y-0 lg:gap-x-[40px] lg:mt-16 lg:mb-0.5 mb:my-6">
      <span className="lg:text-2xl mb:text-base lg:tracking-[-0.5px]">Filter by Interest</span>
      <ul className="*:md:h-[48px] overflow-x-scroll lg:mt-0 mb:-mt-[7px] hidden_scroll_x *:border flex whitespace-nowrap *:grid *:place-items-center *:px-5 *:py-2 *:rounded-[100px] lg:gap-x-[24px] mb:gap-x-4 *:lg:text-base *:mb:text-sm *:cursor-pointer *:duration-200">
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] bg-[#F2F6F4] text-[#05422C] hover:border-black border-black">
          Flowers</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Mushrooms</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Concentrate</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Edibles</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Shop All Weed</li>
      </ul>
    </div>
    <div className="grid lg:py-16 lg:mt-[30px] lg:grid-cols-[276px_276px_276px_276px] mb:grid-cols-[159px_159px] border-t justify-between lg:gap-y-8 mb:gap-y-[29px] mb:pt-10">
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  
      mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-4 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">CONCENTRATES</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">Mix And Match Shatter/Budder
              28g (4 X 7G)</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal <br className="lg:hidden" /> Ahi Tuna + Master
              Tuna</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Ahi Tuna + Master
              Tuna</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">Mix And Match Shatter/Budder
              28g (4 X 7G)</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END CHOOSE YOUR WEED */}
  {/* HOW TO ORDER */}
  <div className="w-full relative flex items-center flex-col lg:mt-[160px] mb:mt-[167px] lg:pb-16 bg-[#01100B]">
    {/* FEFER A FRIENDS */}
    <div className="lg:w-[1200px] mb:w-[342px] mb:h-[268px] lg:h-[342px] lg:-mt-7 grid place-items-center rounded-3xl -translate-y-1/2 
    lg:bg-gradient-to-r mb:bg-[#346654] from-[#05422C] to-[#F2BC1B]">
      <div className="lg:w-[960px] lg:translate-x-0 mb:-translate-x-2.5 lg:h-[150px] mb:h-[188px] flex lg:flex-row mb:flex-col justify-between lg:items-center mb:items-start">
        <section className="flex lg:h-full mb:h-1/2 flex-col text-white justify-between lg:translate-y-0 mb:-translate-y-[1.6px]">
          <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.7px]">REFER
            A FRIENDS</strong>
          <div className="flex items-center gap-x-6 lg:text-[32px] mb:text-[20px]">
            <span>And get</span> <span className="text-[#F2BC1B] font-semibold tracking-[-1.5px]">$30!</span>
          </div>
        </section>
        <button className="bg-[#17AF26] lg:text-lg lg:w-[207px] mb:w-[165px] mb:h-[56px] lg:h-[64px] text-white rounded-[100px]">Refer
          Here</button>
      </div>
    </div>
    {/* --TEXT-- */}
    <div className="lg:w-[1200px] mb:-mt-[70px] mb:w-[342px] lg:-translate-y-11 lg:-mt-[6px] flex flex-col gap-y-1 items-center">
      <div className="lg:w-[948px] text-center">
        <strong className="lg:text-[64px] text-white mb:text-[32px] lg:leading-[70px] mb:leading-[38px] lg:tracking-[-4.5px] mb:tracking-[-1.5px]">HOW
          TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA</strong>
      </div>
      <div className="lg:w-[790px] mb:w-full lg:mt-5 mb:mt-3.5 text-[#9D9EA2] lg:text-base mb:text-sm text-center">
        <p>Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across
          multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis
          products online.</p>
      </div>
    </div>
    {/* LIST SERVICE */}
    <div className="lg:w-[1130px] lg:translate-x-4 mb:translate-x-[-1px] lg:-mt-1 mb:mt-3 py-8 grid lg:grid-cols-[548px_548px] mb:grid-cols-[159px_159px] 
lg:auto-rows-[300px] mb:auto-rows-[312px] justify-between lg:gap-y-[65px] mb:gap-y-[31px] mb:gap-x-[24px] lg:gap-x-0">
      {'{'}/*  {/* item */} */{'}'}
      <div className="grid lg:grid-rows-[144px_auto] mb:grid-rows-[64px_auto] text-white text-center justify-start lg:gap-y-[26px] mb:gap-y-3.5">
        <div className="relative">
          <span className="absolute lg:top-0 mb:top-[-1px] lg:left-[23.3%] mb:left-[0.7%] lg:w-[40px] lg:h-[40px] mb:w-[28px] mb:h-[28px] rounded-[50%] bg-[#F2BC1B] text-black grid place-items-center">1</span>
          <img src="../Images/register_icon.png" className="mb:w-10 mb:h-14 lg:w-auto lg:h-auto lg:mt-3 mx-auto" alt="" />
        </div>
        <div className="flex flex-col lg:gap-y-[26px] mb:gap-y-4">
          <span className="lg:text-2xl mb:text-lg lg:tracking-[-0.3px] mb:tracking-[0.1px]">REGISTER</span>
          <p className="lg:text-base lg:font-medium mb:font-light mb:text-[14px] opacity-60 whitespace-normal lg:tracking-[-0.15px]">Sign up for an account with us.This is quick and simple. We don't require any more details from you than the bare minimum needed for you to place an order and get your product delivered.</p>
        </div>
      </div>
      {'{'}/*  {/* item */} */{'}'}
      <div className="grid lg:grid-rows-[144px_auto] mb:grid-rows-[64px_auto] text-white text-center justify-start lg:gap-y-[26px] mb:gap-y-3.5">
        <div className="relative">
          <span className="absolute lg:top-0 mb:top-[-1px] lg:left-[23.3%] lg:w-[40px] lg:h-[40px] mb:w-[28px] mb:h-[28px] rounded-[50%] bg-[#F2BC1B] text-black grid place-items-center">1</span>
          <img src="../Images/bag-tag.png" className="mb:w-16 mb:h-16 lg:w-auto lg:h-auto mx-auto" alt="" />
        </div>
        <div className="flex flex-col lg:gap-y-[26px] mb:gap-y-4">
          <span className="lg:text-2xl mb:text-lg tracking-[-0.3px]">SHOP</span>
          <p className="lg:text-base lg:font-medium mb:font-light mb:text-[14px] opacity-60 whitespace-normal lg:tracking-[-1px]">Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.</p>
        </div>
      </div>
      {'{'}/*  {/* item */} */{'}'}
      <div className="grid lg:grid-rows-[144px_auto] mb:grid-rows-[64px_auto] text-white text-center justify-start lg:gap-y-[26px] mb:gap-y-4">
        <div className="relative">
          <span className="absolute lg:top-0 mb:top-[-1px] lg:left-[23.3%] mb:left-[0.7%] lg:w-[40px] lg:h-[40px] mb:w-[28px] mb:h-[28px] rounded-[50%] bg-[#F2BC1B] text-black grid place-items-center">1</span>
          <img src="../Images/credit-card.png" className="mb:w-16 mb:h-16 lg:w-auto lg:h-auto mx-auto" alt="" />
        </div>
        <div className="flex flex-col lg:gap-y-[26px] mb:gap-y-4">
          <span className="lg:text-2xl mb:text-lg">MAKE PAYMENT</span>
          <p className="lg:text-base lg:font-medium mb:font-light mb:text-[14px] opacity-60 whitespace-normal lg:tracking-[-0.15px]">Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.</p>
        </div>
      </div>
      {'{'}/*  {/* item */} */{'}'}
      <div className="grid lg:grid-rows-[144px_auto] mb:grid-rows-[64px_auto] text-white text-center justify-start lg:gap-y-[26px] mb:gap-y-4">
        <div className="relative">
          <span className="absolute top-0 lg:left-[23.3%] lg:w-[40px] lg:h-[40px] mb:w-[28px] mb:h-[28px] rounded-[50%] bg-[#F2BC1B] text-black grid place-items-center">1</span>
          <img src="../Images/wavy-check.png" className="mb:w-16 mb:h-16 lg:w-auto lg:h-auto mx-auto" alt="" />
        </div>
        <div className="flex flex-col lg:gap-y-[26px] mb:gap-y-4">
          <span className="lg:text-2xl mb:text-lg">RELAX</span>
          <p className="lg:text-base lg:font-medium mb:font-light mb:text-[14px] opacity-60 whitespace-normal lg:tracking-[-0.15px]">Your product will be packaged discretely and shipped by <br className="lg:hidden" /> Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.</p>
        </div>
      </div>
    </div>
    {/* BTN */}
    <div className="lg:w-[260px] mb:w-[165px] mb:h-[56px] lg:tracking-0 mb:tracking-[0.5px] lg:mt-[47px] mb:mt-[50px] mb-[51px] lg:h-[64px] rounded-[100px] bg-[#17AF26] lg:text-base grid place-items-center">
      Refer Here
    </div>
  </div>
  {/* END HOW TO ORDER */}
  {/* ***** */}
  {/* WHAT MAKE */}
  <div className="w-full flex justify-center lg:mt-[118px] mb:mt-[77.5px]">
    <div className="lg:w-[1200px] mb:w-[342px] flex flex-col">
      {/* TEXT */}
      <div className="lg:w-[789px] flex flex-col">
        <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[38px] lg:tracking-[-4.6px] mb:tracking-[-1.8px]">WHAT
          MAKES US THE <br className="lg:hidden" /> <strong className="text-[#F2BC1B]">#1</strong> ONLINE MARIJUANA DISPENSARY IN CANADA?</strong>
        <p className="text-[#717378] lg:my-6 lg:text-base mb:text-[14px] my-4">When it comes to what makes us the foremost online
          marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this
          information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the
          rest.</p>
      </div>
      {/* BOX */}
      <div className="w-full lg:mt-10 mb:mt-4 lg:grid mb:flex mb:flex-col lg:grid-cols-[379px_379px_379px] lg:justify-between lg:gap-y-10 *:mb:mb-6 *:lg:mb-0">
        {'{'}/*  {/* item */} */{'}'}
        <div className="lg:order-none order-1">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-1.5 justify-between lg:p-[32px] mb:px-3.5 mb:pb-3.5 rounded-xl border">
            <img className="w-[56px] py-[18px] lg:translate-y-0 translate-y-[3px] px-1 h-[80px]" src="../Images/cskh_icon.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:text-2xl mb:text-lg lg:tracking-[-0.5px]">CUSTOMER SERVICE</span>
              <p className="text-[#717378] lg:-mt-1.5 -mt-[6.5px] lg:text-[14px] mb:text-[12px]">Whether it is answering any questions you have
                before making a purchase, helping out with the buying process itself or taking your feedback under
                consideration, we are proud to provide high quality customer service that makes you – the customer – the
                most important person in the transaction.</p>
            </div>
          </div>
        </div>
        {'{'}/*  {/* item */} */{'}'}
        <div className="lg:order-none order-2">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-1.5 justify-between lg:p-[32px] mb:px-3.5 mb:pb-3.5 rounded-xl border">
            <img className="w-[56px] py-[15px] lg:translate-y-0 translate-y-[3px] px-1 h-[80px]" src="../Images/cskh_icon_1.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:text-2xl mb:text-lg">SECURITY</span>
              <p className="text-[#717378] lg:-mt-1.5 mb:tracking-[0.08px] -mt-[7px] lg:text-[14px] mb:text-[12px]">When it comes to security, we only keep what
                details
                are necessary for you to have an account with us and make an order. When it comes to shipping your mail
                order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is
                your
                business only.</p>
            </div>
          </div>
        </div>
        {/* item */}
        <div className="lg:order-none order-4">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-1.5 justify-between lg:p-[32px] mb:px-4 mb:pb-3.5 rounded-xl border">
            <img className="lg:w-[56px] mb:w-[62px] lg:translate-y-0 lg:translate-x-0 -translate-x-1 translate-y-0.5 py-4 px-1 h-[80px]" src="../Images/cskh_icon_2.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:text-2xl mb:text-lg">BEST VALUE</span>
              <p className="text-[#717378] lg:-mt-1.5 -mt-[6.8px] lg:text-[14px] mb:text-[12px]">We are continually adjusting what we supply and
                our
                prices to ensure that we maintain an optimal balance of affordable and quality for our products. We
                invest
                in the best quality strains that we can find and are always on the lookout for new, affordable and high
                quality weed products.</p>
            </div>
          </div>
        </div>
         {/* item */} 
        <div className="lg:order-none order-3">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-[2.5px] justify-between lg:pt-[32px] lg:px-[32px] lg:pb-[95px] mb:px-4 mb:pb-3.5 rounded-xl border">
            <img className="w-[56px] py-4 lg:translate-x-0 translate-x-[-2px] px-1 h-[80px]" src="../Images/cskh_icon_3.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:text-[24px] lg:tracking-[-0.5px] mb:text-lg  mt-1">DELIVERY INSURANCE</span>
              <p className="text-[#717378] lg:-mt-1 -mt-[6.7px] lg:text-[14px] mb:text-[12px]">If your mail order marijuana becomes lost, stolen,
                or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post
                Xpress shipping on all orders over $120</p>
            </div>
          </div>
        </div>
        {'{'}/*  {/* item */} */{'}'}
        <div className="lg:order-none order-6">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-[2px] justify-between lg:p-[32px] mb:px-4 mb:pb-3.5 rounded-xl border">
            <img className="w-[56px] py-4 px-1 lg:translatet-y-0 translate-y-0.5 h-[80px]" src="../Images/cskh_icon_4.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:text-[24px] lg:tracking-[-0.5px] mb:text-lg mt-1">HIGHEST QUALITY</span>
              <p className="text-[#717378] lg:-mt-1 -mt-1.5 lg:text-[14px] mb:text-[12px]">All of our cannabis products are tested to ensure
                that they are the highest quality possible. We work with expert suppliers and are always revising what
                makes a quality cannabis product to ensure that we have only the best available.
              </p>
            </div>
          </div>
        </div>
        {'{'}/*  {/* item */} */{'}'}
        <div className="lg:order-none order-5">
          <div className="flex flex-col lg:gap-y-8 mb:gap-y-[2.5px] justify-between lg:pt-[32px] lg:px-[32px] lg:pb-[95px] mb:px-4 mb:pb-3.5 border rounded-xl">
            <img className="w-[56px] lg:py-4 py-5 lg:translate-y-0 translate-y-1 px-1 h-[80px]" src="../Images/cskh_icon_5.png" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="font-medium lg:tracking-[-0.5px] mt-1 lg:text-[24px] mb:text-lg">TRUST</span>
              <p className="text-[#717378] lg:-mt-1 -mt-2 lg:text-[14px] mb:text-[12px]">With over 15 years in the weed business, you can
                rest assured that you will be taken care of. You can guarantee that we have your best interests in mind.
                Feel free to check out our reviews.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END WHAT MAKE */}
  {/* ****** */}
  {/* RECENTY */}
  <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:mt-[20.5px] lg:pt-24 mb:pt-[39px]">
    <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.8px]">RECENTLY ADDED</strong>
    {/* menu */}
    <div className="relative flex mb:flex-col md:flex-row md:items-center mb:gap-y-6 md:gap-y-0 lg:gap-x-[40px] lg:mt-16 mb:my-6">
      <span className="lg:text-2xl mb:text-base lg:tracking-[-0.5px]">Filter by Interest</span>
      <ul className="*:md:h-[48px] overflow-x-scroll hidden_scroll_x *:border flex whitespace-nowrap *:grid *:place-items-center lg:text-base mb:text-sm *:px-5 *:py-2 *:rounded-[100px] lg:gap-x-[24px] mb:gap-x-4 *:cursor-pointer *:duration-200">
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] bg-[#F2F6F4] text-[#05422C] hover:border-black border-black">
          Flowers</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Mushrooms</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Concentrate</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Edibles</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Shop All Weed</li>
      </ul>
      <a className="lg:text-base absolute right-0 text-[#17AF26] mb:text-sm underline">Show All</a>
    </div>
    <div className="grid lg:pt-16 lg:pb-[120px] lg:mt-[7px] mb:pb-[61px] lg:grid-cols-[276px_276px_276px_276px] mb:grid-cols-[159px_159px] border-y justify-between lg:gap-y-8 mb:gap-y-[29px] mb:pt-8">
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  
      mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-4 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">CONCENTRATES</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">Mix And Match Shatter/Budder
              28g (4 X 7G)</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal Watermelon Zkittles
              + Purple Gushers</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* item 1 */}
      <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
        {/* img */}
        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
          <img className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]" src="../Images/product_5.png" alt="" />
          <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">Out
            Of Stock</button>
          <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">$60 ounce</section>
        </div>
        {/* about */}
        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
          <div className="flex flex-col gap-y-2 items-center">
            <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">FLOWER</strong>
            <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">2 Oz Deal <br className="lg:hidden" /> Ahi Tuna + Master
              Tuna</strong>
            <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <strong>4.6/5</strong>
              </div>
              <div className="flex gap-x-2">
                <strong>135</strong>
                <span className="text-[#C8C9CB]">Reviews</span>
              </div>
            </section>
            <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
              Sativa 100%
            </section>
          </div>
          <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
            <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
              <span className=" text-[#EB2606]">$ 80.00</span><span>/ gram</span>
            </div>
            <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
              <button>28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
            <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END RECENTY */}
  {/* ****** */}
  {/* ########### */}
  <div className="pt-[63px] mx-auto lg:w-[1200px] mb:w-[342px] grid lg:grid-cols-[379px_379px_379px] lg:gap-y-0 mb:gap-y-6 lg:justify-between">
    {'{'}/*  {/* item */} */{'}'}
    <div>
      <div className="flex flex-col lg:gap-y-[34px] mb:gap-y-[26px] border rounded-xl lg:p-8 mb:p-6">
        <div className="w-full lg:h-[240px] mb:h-[164px] border-none bg-[#F2F6F4] grid place-items-center">
          <img src="../Images/indica.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-[18px]">
          <strong className="lg:text-[32px] mb:text-2xl lg:tracking-[-2px] mb:tracking-[-1.3px]">Indica</strong>
          <p className="text-[14px] text-[#717378] leading-[21px] lg:tracking-0 tracking-[-0.06px]">This type of cannabis is commonly
            taken
            by those who want to
            sink into a state of total relaxation in every
            limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing
            effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people
            who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.</p>
        </div>
        <a className="lg:text-base text-[#17AF26] mb:text-sm underline tracking-[-0.5px] tracking-[0.1px]">Shop Indica</a>
      </div>
    </div>
    {'{'}/*  {/* item */} */{'}'}
    <div>
      <div className="flex flex-col lg:gap-y-[33px] mb:gap-y-6 border rounded-xl lg:p-8 mb:p-6">
        <div className="w-full lg:h-[240px] h-[164px] border-none bg-[#F2F6F4] grid place-items-center">
          <img src="../Images/sativa.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-[17px] lg:mt-0.5">
          <strong className="lg:text-[32px] mb:text-2xl lg:tracking-[-2px] mb:tracking-[-1px]">Sativa</strong>
          <p className="text-[14px] text-[#717378] leading-[21px]">Contrary to the deep all-body
            relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of
            creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how
            and
            where you will feel the effects. Given its stimulating nature, it is recommended to use this during the
            day.
          </p>
        </div>
        <a className="lg:text-base text-[#17AF26] mb:text-sm underline tracking-[-0.5px]">Shop Indica</a>
      </div>
    </div>
    {'{'}/*  {/* item */} */{'}'}
    <div>
      <div className="flex flex-col lg:gap-y-[33px] mb:gap-y-[26px] border rounded-xl lg:p-8 mb:p-6">
        <div className="w-full lg:h-[240px] h-[164px] border-none bg-[#F2F6F4] grid place-items-center">
          <img src="../Images/hybrids.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-[17px] lg:mt-0.5">
          <strong className="lg:text-[32px] mb:text-2xl lg:tracking-[-2px] tracking-[-1px]">Hybrids</strong>
          <p className="text-[14px] tracking-[-0.01px] text-[#717378] leading-[21px]">Hybrid strains are just that - they
            combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for
            people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh
            on
            something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain
            vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily
            relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced
            (the
            best of both worlds).</p>
        </div>
        <a className="lg:text-base text-[#17AF26] mb:text-sm underline tracking-[-0.5px]">Shop Indica</a>
      </div>
    </div>
  </div>
  {/* END ########### */}
  {/* ********* */}

  
  {/* WEED EDUCATION */}
  <div className="w-full bg-[#F4F4F4] lg:pb-[300px] lg:pt-16 mb:pt-[50px] mb:pb-[236.5px] flex justify-center lg:mt-[100px]">
    <div className="lg:w-[1200px] mb:w-[342px] pt-20">
      <div className="lg:mb-8 mb:mb-6 flex justify-between items-center">
        <strong className="lg:text-[32px] mb:text-2xl lg:tracking-[-1.7px] tracking-[-1.05px]">WEED EDUCATION</strong>
        <a className="text-base text-[#17AF26]  underline lg:tracking-[-0.5px] tracking-[-0.8px]">Show All</a>
      </div>
      <div className="w-full lg:pt-[66px] lg:-mt-0.5 mb:mt-14 lg:gap-y-0 gap-y-[23px] border-t grid lg:grid-cols-[379px_379px_379px] lg:justify-between *:rounded-xl">
         {/* item */} 
        <div className="flex flex-col">
          <img className="w-full h-[240px] border-none bg-[#F2F6F4]" src="../Images/web_edu_1.png" alt="" />
          <div>
            <span className="block text-sm text-[#717378] font-light mt-6">January 24, 2023</span>
            <h4 className="text-[24px] text-[#1A1E26] -tracking-[0.5px] font-medium mt-2.5 mb-2">
              12 Mistakes To Avoid When Buying Cannabis Online
            </h4>
            <p className="text-[16px] leading-[24px] text-[#717378] mb-8">
              Buying cannabis online can be a great way to get your hands on the
              products you need without leaving the comfort of your home. But …
            </p>
            <a href="" className="text-[#17AF26] underline">Read More</a>
          </div>
        </div>

        <div className="flex flex-col">
          <img className="w-full border-none h-[240px] bg-[#F2F6F4]" src="../Images/web_edu_2.png" alt="" />
          <div>
            <span className="block text-sm text-[#717378] font-light mt-6">January 24, 2023</span>
            <h4 className="text-[24px] text-[#1A1E26] -tracking-[0.5px] font-medium mt-2.5 mb-2">
              How To Store Cannabis and <br className="hidden lg:block" /> Keep it Fresh and Potent?
            </h4> 
            <p className="text-[16px] leading-[24px] text-[#717378] mb-8">
              Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana
              programme, legal adult-use weed, or both. Most ...
            </p>
            <a href="" className="text-[#17AF26] underline">Read More</a>
          </div>
        </div>

        <div className="flex flex-col">
          <img className="w-full border-none h-[240px] bg-[#F2F6F4]" src="../Images/web_edu_3.png" alt="" />
          <div>
            <span className="block text-sm text-[#717378] font-light mt-6">January 19, 2023</span>
            <h4 className="text-[24px] text-[#1A1E26] -tracking-[0.5px] font-medium mt-2.5 mb-2">
              The Ultimate Guide to Checking the Quality of Cannabis - 10 Industry Leading Tips
            </h4>
            <p className="text-[16px] leading-[24px] text-[#717378] mb-8">
              Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence.
              It is essential to understand what quality cannabis means, …
            </p>
            <a href="" className="text-[#17AF26] underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>

<Footer/>

 
</div>

    </>
  )
}

export default HomePage
