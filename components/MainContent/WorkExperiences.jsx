import React from 'react';
import Image from "next/image";

const WorkExperiences = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work experience
      </h2>
      {/* Timeline */}
      <div>
        {/* Item */}
        <div className="group relative flex gap-x-5">
          {/* Icon */}
          <div
            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center border rounded-full">
              <Image src='/nexdecade.png' alt='nexdecade' width={32} height={32}/>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2023 - Present -- Nexdecade Technology
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Software Developer
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Nexdecade Technology specializes in providing innovative digital solutions and web development services.
              They deliver cutting-edge technology solutions to enhance business performance and drive digital
              transformation
            </p>
            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Developed and managed the Next.js web application for T Sports, overseeing the entire project lifecycle
                from design and structure to development and deployment. Successfully served millions of daily users
                with a 30% improvement in system efficiency.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Spearheaded the development of "Glee Glee," a streaming platform using Next.js, overseeing the entire
                project lifecycle from design and structure to development and deployment. Focused on delivering an
                engaging user experience.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Led the end-to-end development of HRM software, managing the entire project lifecycle to ensure a
                robust, user-friendly application.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Implemented secure REST APIs with a 100% success rate, improving system reliability by 20%.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Enhanced team collaboration and project efficiency, driving a 30% improvement in workflow and achieving
                a 20% increase in overall project flexibility.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Stayed up-to-date with new technologies and provided guidance to new colleagues, helping them integrate
                into the team and adapt to best practices.
              </li>
            </ul>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="group relative flex gap-x-5">
          {/* Icon */}
          <div
            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center border rounded-full">
              <Image src='/wunderman.jpg' alt='nexdecade' width={32} height={32} className='rounded-full'/>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2021 - 2023 - Wunderman Thompson Studios Dhaka
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Web Developer
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Wunderman Thompson Studios Dhaka is a creative studio that specializes in delivering high-quality digital
              content and innovative solutions. They focus on crafting engaging experiences through design, technology,
              and strategy, helping brands connect with their audiences and achieve their marketing goals.
            </p>
            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Produced over 300 HTML email templates and 100+ HTML5 and JavaScript animations. Supported digital
                assets across various platforms, including social media, display advertising, eCommerce, websites, and
                mobile apps. Ensured compatibility with 90+ devices, contributing to successful projects with major
                clients like Dell and Microsoft.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Crafted website assets featuring responsive hero designs and GSAP.js animations, resulting in a visually
                engaging user experience and a 20% increase in engagement. Designed and developed responsive homepages,
                landing pages, and email concepts, leading to a 25% boost in user interaction.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Designed on-brand creative solutions, including HTML5 OA banners, responsive email templates, social
                media graphics, and animated GIF banners. These efforts contributed to a 30% increase in brand
                visibility and engagement.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Collaborated with cross-functional teams to deliver responsive designs, ensuring creativity, usability,
                and adherence to standards. Achieved a 25% improvement in design efficiency and alignment with technical
                and brand standards.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Contributed to the development of team management tools for software projects, enhancing collaboration
                and productivity. Implemented efficient processes that improved project timelines by 15% and overall
                team efficiency by 20%.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Managed multiple projects simultaneously, demonstrating exceptional teamwork skills. Maintained a 100%
                track record for effective collaboration and efficiency in a team-oriented environment.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Collaborated with clients to assess requirements for enhanced functionality, fostering communication
                with engineers to implement improvements. Resulted in a 27% increase in client satisfaction.
              </li>
            </ul>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="group relative flex gap-x-5">
          {/* Icon */}
          <div
            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center border rounded-full">
              <Image src='/kaizen.png' alt='nexdecade' width={32} height={32} className='rounded-full'/>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2020 - 2021 Kaizen IT Ltd.
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Web Developer
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Kaizen IT specializes in delivering innovative IT solutions, including custom software development, web
              and mobile application development, and IT consulting. They are dedicated to enhancing business efficiency
              and driving digital transformation through high-quality, tailored solutions.
            </p>
            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Delivered high-quality design solutions using wireframes, visual and graphic designs, flow diagrams,
                storyboards, site maps, and prototypes, achieving a 100% success rate in project execution.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Implemented website layouts and user interfaces with React, Node, Express, and MongoDB, ensuring a
                flawless integration rate of 100%.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Designed UI elements and tools such as navigation menus, search boxes, tabs, and widgets, resulting in a
                25% improvement in user interaction and engagement.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Conducted thorough testing of UI elements, including web and mobile page layouts, designs, and target
                links, achieving 100% accuracy to ensure flawless user experiences.
              </li>
            </ul>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="group relative flex gap-x-5">
          {/* Icon */}
          <div
            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center border rounded-full">
              <Image src='/oxdora.png' alt='nexdecade' width={32} height={32} className='rounded-full'/>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2020 - 2021 Oxdora I Tech
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Web Developer
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Oxdora I Tech is a dynamic startup focused on providing cutting-edge software solutions and digital
              services. They specialize in developing custom applications and websites tailored to meet the unique needs
              of businesses and drive innovation.
            </p>
            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Designed and built the official website and portfolio for Oxdora Software, achieving a 100% success
                rate.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Developed various projects, including Poricharika Web Application and DorjaBD Web Application, resulting
                in a 20% improvement in client satisfaction.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Managed client relationships and provided effective training to marketing agents, leading to a 30%
                increase in their performance.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Stayed current with the latest front-end development trends and best practices, maintaining 100%
                awareness of emerging industry advancements to ensure optimal project integration.
              </li>
            </ul>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        {/*<div className="group relative flex gap-x-5">*/}
        {/*  /!* Icon *!/*/}
        {/*  <div*/}
        {/*    className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">*/}
        {/*    <div className="relative z-10 size-6 flex justify-center items-center">*/}
        {/*      <svg className="shrink-0 size-6 text-gray-800 dark:text-neutral-200"*/}
        {/*           xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"*/}
        {/*           stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">*/}
        {/*        <path d="M12 12h.01"/>*/}
        {/*        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>*/}
        {/*        <path d="M22 13a18.15 18.15 0 0 1-20 0"/>*/}
        {/*        <rect width={20} height={14} x={2} y={6} rx={2}/>*/}
        {/*      </svg>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* End Icon *!/*/}
        {/*  /!* Right Content *!/*/}
        {/*  <div className="grow pb-8 group-last:pb-0">*/}
        {/*    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">*/}
        {/*      2010 - 2011*/}
        {/*    </h3>*/}
        {/*    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">*/}
        {/*      Freelance Graphic Designer*/}
        {/*    </p>*/}
        {/*    <ul className="list-disc ms-6 mt-3 space-y-1.5">*/}
        {/*      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">*/}
        {/*        Worked with a diverse range of clients, delivering tailored design solutions.*/}
        {/*      </li>*/}
        {/*      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">*/}
        {/*        Developed and maintained strong client relationships through effective communication and project*/}
        {/*        management.*/}
        {/*      </li>*/}
        {/*      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">*/}
        {/*        Utilized tools such as Notion for project tracking, Mailchimp for email marketing designs, Slack*/}
        {/*        for team collaboration, and GitHub for version control and project sharing.*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*  /!* End Right Content *!/*/}
        {/*</div>*/}
        {/* End Item */}
      </div>
      {/* End Timeline */}
    </div>
  );
};

export default WorkExperiences;