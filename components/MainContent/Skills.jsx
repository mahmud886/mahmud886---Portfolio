import React from 'react';

import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiFigma,
  SiSketch,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiMailchimp, SiSlack, SiClickup, SiJira, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiAdobephotoshop,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Skills
      </h2>
      {/* List */}
      <div className="space-y-3">
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Tools:</span>
          </dt>
          <dd>
            <ul>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiFigma size={20}/>
                Figma
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiSketch size={20}/>
                Sketch
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiAdobephotoshop size={20}/>
                Photoshop
              </li>
            </ul>
          </dd>
        </dl>
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 dark:text-neutral-500">Development:</span>
          </dt>
          <dd>
            <ul>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiHtml5 size={20}/>
                HTML
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiCss3 size={20}/>
                CSS
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiTailwindcss size={20}/>
                Tailwind CSS
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiJavascript size={20}/>
                Javascript
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiReact size={20}/>
                React
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiNextdotjs size={20}/>
                NextJs
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiNodedotjs size={20}/>
                NodeJs
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiExpress size={20}/>
                Exprees.js
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiMongodb size={20}/>
                MongoDB
              </li>
            </ul>
          </dd>
        </dl>
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 dark:text-neutral-500">Collaboration:</span>
          </dt>
          <dd>
            <ul>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiGithub size={20}/>
                GitHub
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiMailchimp size={20}/>
                Mailchimp
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiSlack size={20}/>
                Slack
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiClickup size={20}/>
                ClickUp
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                <SiJira size={20}/>
                Jira
              </li>
            </ul>
          </dd>
        </dl>
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Expertise:</span>
          </dt>
          <dd>
            <ul>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                UI/UX Design
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Design Systems
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Custom Illustrations
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Responsive Design
              </li>
            </ul>
          </dd>
        </dl>
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 dark:text-neutral-500">Soft Skills:</span>
          </dt>
          <dd>
            <ul>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Strong communication
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Problem-solving
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Attention to detail
              </li>
              <li
                className="me-1 after:content-[','] mt-1 inline-flex items-center gap-1 text-sm text-gray-800 dark:text-neutral-200">
                Time management
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      {/* End List */}
    </div>
  );
};

export default Skills;