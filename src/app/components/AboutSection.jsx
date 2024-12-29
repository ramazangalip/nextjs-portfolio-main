"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Yeteneklerim",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Python</li>
        <li>Django</li>
        <li>SQL</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Eğitim",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Abdulkadir Aksu Anadolu Lisesi</li>
        <li>Bingöl Üniversitesi Bilgisayar Programcılığı</li>
      </ul>
    ),
  },
  {
    title: "Sertifikalarım",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy Sıfırdan İleri Seviye Python Programlama</li>
        <li>Udemy Sıfırdan Web Geliştirme</li>
        <li>Turkcell Geleceği Yazanlar 101:HTML</li>
        <li>Turkcell Geleceği Yazanlar 201:HTML5 & CSS3</li>
        <li>BTK AKADEMİ React İle Web Programlama</li>
        <li>BTK AKADEMİ Django İle Web Geliştirme</li>
        <li>Patika .Dev Frontend Web Development</li>
        <li>BTK AKADEMİ Uygulamalarla SQL Eğitimi</li>
        <li>Udemy Flutter&Firebase E-Ticaret Admin Uygulaması</li>
        <li>Metamy Yazılım Akademisi Frontend Bootcamp</li>
        <li>Metamy Yazılım Akademisi Backend Bootcamp</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello, I am Ramazan Said Galip. I have been interested in software since 2021. So far, I have been involved in projects related to HTML5, CSS3, Bootstrap, Javascript, React, Python, Django, SQL and Flutter.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
