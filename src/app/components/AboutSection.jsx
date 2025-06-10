"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { getLinkedInCertifications } from "../services/api";
import { CalendarIcon, BuildingOfficeIcon, AcademicCapIcon, DocumentCheckIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCertifications = async () => {
      const certs = await getLinkedInCertifications();
      setCertifications(certs);
    };
    fetchCertifications();
  }, []);

  const TAB_DATA = [
    {
      title: "Yeteneklerim",
      id: "skills",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">HTML5</p>
              <p className="text-[#ADB7BE]">CSS3</p>
              <p className="text-[#ADB7BE]">Bootstrap</p>
              <p className="text-[#ADB7BE]">Javascript</p>
              <p className="text-[#ADB7BE]">React</p>
            </div>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Backend & Mobile</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">Python</p>
              <p className="text-[#ADB7BE]">Django</p>
              <p className="text-[#ADB7BE]">SQL</p>
              <p className="text-[#ADB7BE]">Flutter</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Eğitim",
      id: "education",
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <AcademicCapIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Bingöl Üniversitesi</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">Bilgisayar Programcılığı</p>
              <div className="flex items-center gap-2 text-[#ADB7BE] text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>2024 - Devam Ediyor</span>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <AcademicCapIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Abdulkadir Aksu Anadolu Lisesi</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">Lise Eğitimi</p>
              <div className="flex items-center gap-2 text-[#ADB7BE] text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>2021-2024</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Deneyim",
      id: "experience",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <BuildingOfficeIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Germen UPS</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">Mobile Developer Intern</p>
              <div className="flex items-center gap-2 text-[#ADB7BE] text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>Ocak 2025 - Mart 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <BuildingOfficeIcon className="h-5 w-5 text-primary-500" />
              <h3 className="text-xl font-semibold text-white">Alternativkraft GmbH</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[#ADB7BE]">Frontend Developer Intern</p>
              <div className="flex items-center gap-2 text-[#ADB7BE] text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>Mart 2025 - Haziran 2025</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sertifikalarım",
      id: "certifications",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
              <div className="flex items-center gap-2">
                <DocumentCheckIcon className="h-5 w-5 text-primary-500" />
                <p className="text-[#ADB7BE]">{cert}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} unoptimized/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello, I am Ramazan Said Galip. I have been interested in software since 2021. So far, I have been involved in projects related to HTML5, CSS3, Bootstrap, Javascript, React, Python, Django, SQL and Flutter.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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
