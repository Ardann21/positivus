import React from "react";
import jane from "../assets/jane.png";
import a from "../assets/aa.png";
import icon from "../assets/icon-green.png";
const BlogMain = () => {
  return (
    <>
      <div className="flex justify-between border-b border-b-black mt-12 mx-4 md:mx-13">
        <div className="flex items-center mb-5 gap-3">
          <img className=" h-10 md:h-17 w-auto" src={jane} alt="" />
          <div>
            <h1 className="text-[15px] md:text-2xl text-left">Sarah Kim</h1>
            <p className="text-[10px] md:text-[15px] text-left">
              Content Creatot
            </p>
          </div>
        </div>
        <div>
          <img className="h-23 w-auto" src={a} alt="" />
        </div>
      </div>

      <div className=" md:max-w-[1040px] mx-3 md:mx-auto mt-12 flex flex-col gap-12">
        <div className="">
          <p className="text-left md:text-2xl font-bold ">
            In the ever-evolving digital landscape, businesses are faced with an
            important question: should they invest in pay-per-click (PPC)
            advertising or focus on organic marketing strategies? While both
            approaches have their merits, choosing the right one depends on your
            goals, budget, and timeline. Let’s dive into the strengths,
            challenges, and real-world applications of PPC and organic marketing
            to help you make an informed decision.
          </p>
        </div>
        <div className="mt-13">
          <h1 className="text-left text-4xl font-bold mb-3">
            The Challenge of Standing Out Online
          </h1>
          <p className="text-left mt-2">
            Every day, millions of businesses compete for visibility online,
            making it increasingly difficult to capture the attention of
            potential customers. Organic search results are highly sought after,
            but earning a top spot on Google takes time and consistent effort.
            Meanwhile, PPC ads promise instant visibility but can quickly drain
            your budget if not executed effectively.
          </p>
          <p className="text-left mt-2">
            For small businesses with limited resources, this dilemma can feel
            like an impossible balancing act. Do you play the long game with
            organic strategies or opt for quick wins with PPC?
          </p>
        </div>
        <div className="mt-13">
          <h1 className="text-left text-4xl font-bold mb-3">
            Comparing PPC and Organic Marketing
          </h1>
          <p className="text-left ">
            Pay-per-click (PPC) and organic marketing each offer distinct
            advantages and challenges, making them effective for different
            business needs. PPC is designed to deliver immediate results by
            securing top placements on search engines or social media platforms,
            providing businesses with instant visibility. It allows for precise
            targeting based on factors like demographics, behavior, and
            location, offering flexibility to start small and scale as needed.
            However, PPC can become expensive quickly, particularly in
            competitive industries, and its results are short-lived since
            traffic stops when the campaign ends.
          </p>
          <p className="text-left mt-2">
            In contrast, organic marketing focuses on building a strong,
            sustainable presence through strategies like search engine
            optimization (SEO) and content creation. This approach builds trust
            and credibility over time, delivering consistent traffic without the
            need for ongoing ad spend. While the results can take longer to
            materialize and are less immediate than PPC, organic marketing
            provides long-term benefits that make it a valuable strategy for
            sustained growth.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-13">
          <div className="border-l-6 border-l-[#B9FF66]">
            <h1 className=" ml-3 text-left text-4xl font-bold mb-3">
              Striking the Right Balance
            </h1>
            <p className=" ml-3 text-left md:text-2xl ">
              "PPC and organic marketing aren't rivals—they're teammates. The
              best strategies combine both to create a holistic approach to
              growth," says a digital marketing expert.
            </p>
          </div>
          <p className="text-left mt-2">
            For instance, a business might use PPC to generate quick traffic for
            a new product launch while building long-term organic authority
            through SEO and blogging. Combining these strategies ensures you're
            reaching your audience now while laying the groundwork for future
            success.
          </p>
          <p className="text-left mt-2">
            For small businesses with limited resources, this dilemma can feel
            like an impossible balancing act. Do you play the long game with
            organic strategies or opt for quick wins with PPC?
          </p>

          <h1 className="text-left text-4xl font-bold mb-3 md:w-200 mt-13">
            By the Numbers: Facts About PPC and Organic Marketing
          </h1>
        </div>
      </div>

      <div className="mx-2 md:max-w-[1440px] md:mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-7 md:gap-4">
          {/* This one was flex-2/3, which is also not standard. I'll make it take up more space. */}
          <div className="md:w-[35%]">
            {" "}
            {/* Approximately 2/3 or adjust as needed */}
            <div className="flex flex-col p-13 gap-2 border shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] border-black rounded-2xl">
              <p className="text-left">Businesses earn an average of</p>
              <h1 className="font-bold text-left text-xl md:text-3xl">
                $2 for every $1 spent
              </h1>
              <p className="text-left">on PPC advertising</p>
            </div>
          </div>
          {/* This one was flex-1/3 */}
          <div className="md:w-[65%]">
            {" "}
            {/* Approximately 1/3 or adjust as needed */}
            <div className="flex flex-col p-13 h-full bg-[#B9FF66] gap-2 rounded-2xl">
              <p className="font-bold text-xl md:text-3xl text-left">
                41% of clicks
              </p>
              <p className="text-left">
                on search engines go to the top three organic results, showing
                the importance of ranking highly.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-7 md:gap-4 mt-7">
          {/* This one was flex-2/5 */}
          <div className="md:w-[65%] ">
            {" "}
            {/* 2/5 = 40% */}
            <div className="flex flex-col p-13 gap-2 h-full  bg-[#F3F3F3] rounded-2xl">
              <div className="flex flex-col text-left float-left my-auto">
                <div className="flex">
                  <h1>Content marketing costs:</h1>
                  <p className="font-bold text-xl md:text-3xl ml-2">
                    %62 less than paid ads
                  </p>
                </div>
                <div className="flex">
                  <h1>but generates:</h1>
                  <p className="font-bold text-xl md:text-3xl ml-2 text-left">
                    3x as many leads
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* This one was flex-3/5 */}
          <div className="md:w-[35%]">
            {" "}
            {/* 3/5 = 60% */}
            <div className="flex flex-col p-13 gap-2 bg-[#191A23] text-white rounded-2xl">
              <p className="text-left">Organic search drives</p>
              <h1 className="font-bold text-left text-xl md:text-3xl">
                <span className="text-[#B9FF66]">%53</span> of all website
                traffic,
              </h1>
              <p className="text-left">
                making it the largest single source of traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:max-w-[1040px] mx-3 md:mx-auto mt-13 flex flex-colgap-12">
        <div className="">
          <h1 className="text-left text-4xl font-bold mb-3">
            Reald-World Examples
          </h1>
          <p className="text-left ">
            PPC and organic marketing have proven effective in different
            scenarios, and real-world examples highlight their impact. A local
            restaurant, for instance, leveraged Google Ads to target the search
            term "best Italian food near me," which led to a remarkable 120%
            increase in reservations within just two weeks. Similarly, a B2B
            SaaS company focused on organic marketing by investing in SEO and
            blog content. This strategic approach helped them rank for
            competitive keywords and boosted their website traffic by 200% over
            six months. Some businesses find success by combining both
            strategies, like an e-commerce retailer that launched a targeted PPC
            campaign for seasonal sales while simultaneously optimizing product
            pages for organic search. This hybrid approach resulted in a 30%
            higher return on investment compared to relying solely on PPC
            advertising.
          </p>

          <h1 className="text-left text-4xl font-bold mb-3 mt-13">
            Key Takeaways for Your Maketing Strategy
          </h1>
          <ul className="text-left flex flex-col gap-3">
            <li>
              • PPC is ideal for short-term goals, like promoting sales, events,
              or new products.
            </li>
            <li>
              • Organic marketing is better for long-term growth, building
              trust, and creating lasting customer relationships.
            </li>
            <li>
              • A hybrid approach offers the best of both worlds, balancing
              quick wins with sustainable development.
            </li>
          </ul>

          <h1 className="text-left text-4xl font-bold mb-3 mt-13">
            Choosing the Best Strategy for Your Business
          </h1>
          <p className="text-left ">
            Ultimately, the choice between PPC and organic marketing depends on
            your specific needs. If you're working with a tight deadline or
            launching a new service, PPC can deliver immediate results. On the
            other hand, if you're focused on building a loyal audience and
            maintaining a steady flow of leads, organic marketing is your best
            bet.
          </p>
          <p className="text-left mt-5">
            By understanding the strengths and limitations of both strategies,
            you can create a marketing plan that aligns with your goals, budget,
            and target audience. Ready to take your next step? Start building a
            strategy that drives results today.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-23 gap-5 mt-22">
        <div>
          <button className="bg-[#B9FF66] py-2 px-3 mx-auto rounded-md text-4xl">
            Explore More Insights
          </button>
        </div>
        <div>
          <p className="text-center md:text-left mx-2">
            Discover expert tips, and stories to keep you ahead in <br />
            the digital landscape.
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-4 md:mx-auto mt-12 md:max-w-[1380px] mb-12 md:border md:border-black md:rounded-[70px] md:p-12">
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:shadow-none md:border-b md:border-b-black w-100%">
            <h2 className="text-2xl md:text-4xl text-left">
              10 SEO Myths You Need to Stop Believing
            </h2>
            <p className="mt-4 text-left">
              We implemented a tailored SEO strategy that boosted organic search
              rankings, leading to a 150% increase in website traffic and a 50%
              rise in online sales within six months.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none md:border-b md:border-b-black md:border-r md:border-r-black md:border-l md:border-l-black">
            <h2 className="text-2xl md:text-4xl text-left">
              Maximizing ROI with Social Media Advertising
            </h2>
            <p className="mt-4 text-left">
              Social media ads are more than just boosted posts. Explore proven
              strategies for crafting campaigns that engage audiences and
              deliver measurable returns.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)] md:shadow-none md:border-b md:border-b-black ">
            <h2 className="text-2xl md:text-4xl text-left">
              How Content Marketing Fuels Long-Term Growth
            </h2>
            <p className="mt-4 text-left">
              Content isn't just king—it's the foundation of sustainable
              business growth. Find out how blogs, videos, and more can build
              trust and drive conversions.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  ">
            <h2 className="text-2xl md:text-4xl text-left">
              The Art of A/B Testing: Perfecting Your Campaigns
            </h2>
            <p className="mt-4 text-left">
              From headlines to call-to-actions, small tweaks can make a big
              difference. Learn how to use A/B testing to refine your marketing
              strategies.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  md:border-r md:border-r-black md:border-l md:border-l-black">
            <h2 className="text-2xl md:text-4xl text-left">
              Understanding Google's Latest Algorithm Update
            </h2>
            <p className="mt-4 text-left">
              Search rankings change constantly—stay ahead by learning about the
              latest Google update and its impact on your SEO strategy.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
          <div className=" p-12 shadow-[0px_7px_0px_0px_rgba(0,_0,_0,_0.8)]  md:shadow-none  ">
            <h2 className="text-2xl md:text-4xl text-left">
              E-Commerce Fashion Brand
            </h2>
            <p className="mt-4 text-left">
              Artificial intelligence is transforming the way we target,
              analyze, and engage audiences. Discover how to leverage AI to stay
              competitive.
            </p>
            <div className="flex justify-start items-center cursor-pointer mt-4">
              <img src={icon} alt="" />
              <p className="ml-2 text-left cursor-pointer">Read article</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
