import React, { useState } from "react";
export interface faqType {
  question: string;
  answer: string;
}

export const FaqQuestions: faqType[] = [
  {
    question: "What is Lortrech?",
    answer:
      "A platform you can hire professional developers for the growth of your business organization. You get to hire developers with high response towards helping you achieve you business goals.",
  },
  {
    question: "How do i connect my Wallet?",
    answer:
      "A platform you can hire professional developers for the growth of your business organization. You get to hire developers with high response towards helping you achieve you business goals.",
  },
  {
    question: "What will developers get paid",
    answer:
      "A platform you can hire professional developers for the growth of your business organization. You get to hire developers with high response towards helping you achieve you business goals.",
  },
  {
    question: "How do i get refund when not satisfied?",
    answer:
      "A platform you can hire professional developers for the growth of your business organization. You get to hire developers with high response towards helping you achieve you business goals.",
  },
];

function Faq(props: faqType) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleFaq = () => {
    setOpen(!open);
  };

  return (
    <div className="faqQuestion my-5">
      <div className="quest flex pointer" onClick={toggleFaq}>
        <h2 className="text-sm md:text-xl my-auto font-semibold">
          {" "}
          {props.question}{" "}
        </h2>
        <span className="faqicon ml-auto mb-auto text-primary text-3xl">
          {!open ? (
            <i className="plus flex content-start">+</i>
          ) : (
            <i className="minus">-</i>
          )}
        </span>
      </div>
      <div className="faqAnswer border-l-2 border-primary mt-2 mr-2">
        <p
          className="ml-2 text-sm sm:text-xl ansText"
          style={{
            visibility: `${open ? "visible" : "hidden"}`,
            height: `${open ? "80px" : "0px"}`,
            opacity: `${open ? "1" : "0"}`,
            overflowX: "auto",
          }}
        >
          {" "}
          {props.answer}{" "}
        </p>
      </div>
      <br className={`${open ? "block" : "hidden"}`} />
      <hr />
    </div>
  );
}

export default Faq;
