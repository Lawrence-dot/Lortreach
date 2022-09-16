import type { NextPage } from "next";
import React, { RefObject, useRef, useState } from "react";
import Card, { TCard, TCards } from "../Components/Card";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cardType } from "../Components/Card";
import Count, { times } from "../Components/Count";
import { Dots, cardTabs, MailBox, Circle } from "../Components/Eclipse";
import Faq, { FaqQuestions, faqType } from "../Components/Faq";

const Home: NextPage = () => {
  const [filtered, setFiltered] = useState<cardType[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchFilter, setsearchFilter] = useState<faqType[]>([]);
  const searchRef: RefObject<HTMLInputElement> = useRef(null);
  var text: string = searchRef.current?.value.toLocaleLowerCase() as string;

  const tabHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    let tabLists: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".tabLink");
    let thisLink: HTMLLIElement = e.target as HTMLLIElement;
    var linkName: string = thisLink.innerText;
    tabLists.forEach((link) => {
      link.classList.remove("active");
    });

    thisLink.classList.add("active");
    console.log(linkName);

    const filt: cardType[] = cardTabs.filter((each) => {
      return each.name.includes(`${linkName.slice(0, 3)}`);
    });
    setFiltered(filt);
  };

  const searchFaq = () => {
    setSearching(text.length > 1 ? true : false);
    let searchFilter: faqType[] = FaqQuestions.filter((faq) => {
      return faq.question.toLocaleLowerCase().includes(`${text}`);
    });
    setsearchFilter(searchFilter);
    setSearching(true);
  };

  const toggleSearch = () => {
    let search: HTMLInputElement = searchRef.current as HTMLInputElement;
    !searching && (search.value = "");
    setSearching(!searching);
  };

  const trendCards: JSX.Element[] = TCards.map((cards, index) => {
    return (
      <TCard
        eth={cards.eth}
        name={cards.name}
        percent={cards.percent}
        src={cards.src}
        key={index}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title className=""> Lotreach </title>
        <link rel="icon" href="logo.ico" />
      </Head>

      <div className="faangSection flex flex-wrap justify-center pt-2 sm:pt-3 pb-10 container-m">
        <Dots />
        <div className="w-full xl:w-fit block">
          <div className="pldSection">
            <div className="faangTexts sm:text-left sm:mr-16">
              <p className="text-primary mt-7 md:mt-3 mb-4 text-xl sm:text-2xl">
                {" "}
                Plan, Build and Deliver.{" "}
              </p>
              <h2 className="font-bold my-4 text-3xl lg:text-4xl sm:text-4xl">
                Effectively get the best <br className="hidden xl:block" />{" "}
                website developement <br /> service from professionals.
              </h2>
              <p className="text-md sm:text-xl my-3">
                Connect your ETH wallet to hire professional website developers.{" "}
                <br className="hidden lg:block" />
                Sit back and relax while we get the job complete.
              </p>
            </div>
            <div className="faangBtn my-4">
              <button className="btn py-1 my-3 px-2 border rounded-md hover:border-black hover:text-black">
                {" "}
                Hire Professionals{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex mx-auto xl:mr-auto xl:ml-0 justify-center xl:w-2/5 faangTabs text-white">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1295: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide key={"dkj"}>
              <Card
                name="FAANG Section"
                src="/images/tab1.jpg"
                total={321}
                active={200}
                key="k8kkkk"
                eth={4.01}
              />
            </SwiperSlide>
            <SwiperSlide key={"llo"}>
              <Card
                name="Second Section"
                src="/images/tab2.jpg"
                total={291}
                active={90}
                key="kk0"
                eth={3.2}
              />
            </SwiperSlide>
            <SwiperSlide key={"kwef"}>
              <Card
                name="Third Section"
                src="/images/tab1.jpg"
                total={321}
                active={200}
                key="kkkk99k"
                eth={5.1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="counterSection py-1 container-m">
        <div className="flex flex-wrap items-center gap-y-6 justify-center py-16">
          {times.map((each, index) => {
            return (
              <Count
                start={each.start}
                end={each.end}
                text={each.text}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="featureSection relative py-2 container-m" id="features">
      <Circle />
        <div className="featureHeader mb-5 text-center">
          <p> What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            {" "}
            Our Features
          </h2>
        </div>
       
        <div className="featureContent flex flex-wrap justify-center">
          <div className="featureImg rounded-md">
            <Image
              src={"/images/feature.jpg"}
              alt="feature"
              height={290}
              width={320}
            />
          </div>

          <div className="featureInfo sm:w-96 lg:ml-10 mt-2 flex flex-col">
            <div className="infoFeat my-2 flex">
              '
              <div className="featureIcon bg-[#F4F5F7] p-2 rounded-full">
                <AiOutlineCalendar size={"1.4em"} />
              </div>
              <div className="fContent mx-3">
                <h2 className="font-semibold text-xl">Sticking to the Plan</h2>
                <p>
                  {" "}
                  We avoid delays using every possible means to satisfy our
                  clients.
                </p>
              </div>
            </div>

            <div className="infoFeat my-2 flex">
              '
              <div className="featureIcon bg-[#F4F5F7] p-2 rounded-full">
                <FiMapPin size={"1.4em"} />
              </div>
              <div className="fContent mx-3 text-xl">
                <h2 className="font-semibold">All-round the Globe</h2>
                <p>
                  {" "}
                  Our developers are close or with your range. We aim at
                  providing services all-round the globe.
                </p>
              </div>
            </div>

            <div className="infoFeat my-2 flex">
              '
              <div className="featureIcon bg-[#F4F5F7] p-2 rounded-full">
                <BsGraphUp size={"1.4em"} />
              </div>
              <div className="fContent mx-3 text-xl">
                <h2 className="font-semibold">Delivery</h2>
                <p>
                  {" "}
                  Relyng on us for the success of your business goals is
                  something we don’t take for granted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="discountSection py-3 bg-gray-100 container-m"
        id="discounts"
      >
        <Circle />
        <div className="discount-body py-5">
          <div className="discountHead">
            <h2 className="text-primary text-center text-3xl sm:text-4xl font-bold">
              Discount Sales
            </h2>
          </div>

          <div className="discountTabs my-4">
            <div className="tabPanel mb-4 flex justify-center">
              <ul className="tabList my-2">
                <li className="tabLink active text-md sm:text-lg md:text-xl" onClick={tabHandler}>
                  {" "}
                  All{" "}
                </li>
                <li className="tabLink" onClick={tabHandler}>
                  {" "}
                  Analysis{" "}
                </li>
                <li className="tabLink" onClick={tabHandler}>
                  {" "}
                  Web3{" "}
                </li>
                <li className="tabLink" onClick={tabHandler}>
                  {" "}
                  Ecommerce{" "}
                </li>
                <li className="tabLink" onClick={tabHandler}>
                  {" "}
                  Gaming{" "}
                </li>
              </ul>
            </div>

            <div className="panelTabs block mx-auto mt-4">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  940: {
                    slidesPerView: 3,
                  },
                  2000: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
              >
                {filtered?.length < 1
                  ? cardTabs.map((tab, index) => {
                      return (
                        <SwiperSlide className="block mx-auto" key={index}>
                          <Card
                            name={tab.name}
                            src={tab.src}
                            eth={tab.eth}
                            active={tab.active}
                            total={tab.total}
                            key={index}
                          />
                        </SwiperSlide>
                      );
                    })
                  : filtered?.map((tab, index) => {
                      return (
                        <SwiperSlide key={"wc"}>
                          <Card
                            name={tab.name}
                            src={tab.src}
                            eth={tab.eth}
                            active={tab.active}
                            total={tab.total}
                            key={index}
                          />
                        </SwiperSlide>
                      );
                    })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="trendingSection py-5 container-m" id="trending">
        <div className="trendingHeading text-center">
          <p> Most sort after</p>
          <h2 className="text-3xl sm:text-4xl text-center text-primary font-bold">
            Trending Tracks
          </h2>
        </div>

        <div className="trendingBody">
          <div className="tContainer my-5 flex flex-wrap justify-center">
            {trendCards}
          </div>
        </div>
      </div>

      <div className="faqSection py-5 container-m" id="faqs">
        <div className="faqHeading my-5 text-center">
          <p> Quick answers to your question</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="faqCard block mx-auto py-5 px-5">
          <div className="search px-2 flex justify-end my-5">
            <input
              onChange={searchFaq}
              style={{
                visibility: `${searching ? "visible" : "hidden"}`,
                height: `${searching ? "35px" : "0px"}`,
                opacity: `${searching ? "1" : "0"}`,
              }}
              className="border-b-2 border-primary mx-auto"
              placeholder="Search for any Question....."
              type="text"
              ref={searchRef}
            />
            <span
              className="block w-8 pointer text-bold text-primary"
              onClick={toggleSearch}
            >
              {searching ? <FaTimes /> : <FiSearch />}
            </span>
          </div>

          <div className="fcardQuest py-3 px-5">
            {!searching || text === "" ? (
              FaqQuestions.map((faq, index) => {
                return (
                  <Faq
                    question={faq.question}
                    answer={faq.answer}
                    key={index}
                  />
                );
              })
            ) : searching && searchFilter.length >= 1 ? (
              searchFilter.map((faq, index) => {
                return (
                  <Faq
                    question={faq.question}
                    answer={faq.answer}
                    key={index}
                  />
                );
              })
            ) : (
              <div>
                <p className="text-center font-bold text-red-700 text-3xl">
                  {" "}
                  No Results Found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="notifySection py-7 sm:py-4 container-m">
        <div className="notifyCard mx-auto bg-primary">
          <div className="flex flex-wrap flex-col sm:flex-row justify-center py-4 sm:py-3">
            <div className="mx-auto sm:ml-auto sm:w-16">
              <MailBox />
            </div>

            <div className="sm:w-72 mt-5 mx-auto sm:mr-auto sm:ml-0">
              <h2 className="text-2xl text-center sm:text-left px-5 sm:text-2xl font-bold text-white">
                Get Notified On Our Latest Services.
              </h2>

              <div className="mx-auto flex sm:px-5 justify-center sm:justify-start">
                <input
                  className="px-1 w-40 sm:w-64 py-1 rounded-sm sm:p-1 bg-[#F4F5F7] mt-2"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <button className="susBtn bg-[#18191F] text-md sm:text-lg px-3 text-white">
                  Suscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
