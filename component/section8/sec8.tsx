import React from "react";

export type QnaData = {
  question: string;
  answer: string;
};

function Sectioneight() {
  const QnaTrait: QnaData[] = [
    {
      question: "What type of businesses can use Ooulet ?",
      answer:
        "Ooulet is best suited for business owners who do most or all of their business online. In addition, if your business model relies on frequent repeat purchases from customers, Ooulet's add-on features can help customers make those purchases more easily and faster, thus boosting customer loyalty and reducing the number of abandoned carts.",
    },
    {
      question: "Can I link my existing domain name to Ooulet?",
      answer:
        "Yes, you can choose to link an existing domain that you have with your Ooulet store for free. To know more about linking an existing domain,",
    },
    {
      question: " Can I ask your team to build my website?",
      answer:
        " Yes, Our Website experts can build your website for you at an additional cost. Please contact support at support@.chat.ooulet.com for more information.",
    },
    {
      question: "Can I disable Cash On Delivery payment method?",
      answer:
        "Yes, Your Ooulet website is very flexible, you can manage your payment methods from the setting options.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "You can choose to accept payments from your customers via OouletPay and accept online payments. With OouletPay, we offer multiple payment methods to your customers such as UPI, Credit/Debit card.",
    },
    {
      question: "What happens when I reject an order?",
      answer:
        "In case of paid order, the order will be cancelled and amount will be refunded back to the customer. Also customer will be notified about the same.",
    },
    {
      question: "Can I upgrade my Ooulet Plan later?",
      answer:
        " Yes, please reach out to our support on support@chat.ooulet.com. Our team will help you upgrade your plan.",
    },
    {
      question: "Can I open multiple businesses from one number?",
      answer:
        "No, at this moment, we only support one business per number. But we have multi-business support in our priority list. We will update this section when it is available.",
    },
  ];

  return (
    <div className=" flex flex-col gap-10 py-20">
      <div className="flex flex-col justify-center items-center gap-4 xl:mx-auto mx-4">
        <h2 className="text-[#1C1A1A] text-[32px] font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-[#3C3C3C] text-base font-medium text-center md:max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non sem ultricies, volutpat felis non, imperdiet leo. Praesent ipsum
          leo.
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:max-w-[1280px] mx-4 xl:mx-auto flex-wrap gap-5 justify-center items-center">
        {QnaTrait.map((items: QnaData, index: number) => (
          <details
            key={index}
            className="nomarker border md:w-[42%] w-full rounded-[20px] flex justify-start items-center gap-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]"
          >
            <summary className="px-8 py-6 flex gap-12 justify-between items-center">
              <p className="text-[#3C3C3C] text-xs  sm:text-base lg:text-sm font-bold xl:max-w-[400px]">
                {items.question}
              </p>
              <p className="closed h-6 w-6 text-3xl flex justify-center items-center cursor-pointer">
                +
              </p>
              <p className="opened hidden h-6 w-6 text-5xl justify-center items-center cursor-pointer">
                -
              </p>
            </summary>
            <p className="px-8 text-[#3C3C3C] text-xs  sm:text-base lg:text-sm font-medium pb-6 xl:max-w-[500px]">
              {items.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Sectioneight;
