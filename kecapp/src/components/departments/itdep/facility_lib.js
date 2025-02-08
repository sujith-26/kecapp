import React, { useEffect } from "react";
import IT from "./it";

const FacilityLib = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
          entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-90');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const libraryData = [
    { label: "Total area", value: "232 sq.m" },
    { label: "No. of Volumes", value: "1790" },
    { label: "No. of Titles", value: "1380" },
    { label: "No. of Project Report CD", value: "107" },
    { label: "Value of Books", value: "Rs. 10.63 lakhs" },
    { label: "Number of Journals", value: "24" },
    { label: "Value of Journals", value: "Rs.77,925 /-" },
    { label: "Working Hours", value: "8.40 am to 4.30 pm" }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
      <IT />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-indigo-900 animate-pulse">
          Facilities - Laboratories & Library
        </h1>

        <div className="space-y-20">
          {[
            {
              title: "System Software Laboratory",
              content: "The objective of system software lab is to make students familiarized with various operating systems (open source) particularly Linux and debian distributions like Fedora and Ubuntu. This lab is used for conducting a practical classes in courses like Data Structures & Analysis algorithms, C Programming, Java programming .Various software projects in languages like C, C++, and Java & Python are also done in this laboratory. Since high end projector is available, this lab is utilized for conducting project reviews ,Training programs ,One credit & value added courses in this laboratory .More over Mat lab software is available in this lab for learning & doing projects. This lab is equipped with 38 personal computers of high end configuration..",
              img: "path/to/image1.jpg"
            },
            {
              title: "RDBMS Laboratory",
              content: "In this lab there are 38 personal computers with high end configuration & 3 printers. This lab is utilized for conducting practical classes in courses like DBMS, OS & Machine Learning. This lab is prominently used for enabling the students to gain hands on experience in App Development, SQL queries. This lab is also utilized for conducting project reviews, one credit courses and doing projects. More over presentations like Ph.D. Viva voce, project & Paper Presentation done by the students are conducted in this lab.",
              img: "path/to/image2.jpg"
            },
            {
              title: "Network Laboratory",
              content: "Network laboratory provides hands-on experience to various concepts studied by the undergraduate and postgraduate students related to Computer and Communication Networks. This lab is also an emphasis on experimental research in communication networking, in recent years there have also been contributions to networks and network security. This lab helps to explain the importance of data communications and the Internet in supporting business communications and daily activities. Also explains how communication works in data networks and Internet. This lab helps to recognize the different internetworking devices and their functions and also explain the role of protocols in networking. It is equipped with with latest configuration PC's, well connected server and client structured systems to support the study of the concepts and protocols of networking and for the effective implementation of the routing protocols. The students are trained in the laboratory to enhance their practical knowledge and to provide solutions to real time issues. Open source tools like NS2, NS3 and Wireshark are used to simulate and study the performance of various network scenarios which impart latest practical skills to students.",
              img: "path/to/image3.jpg"
            },
            {
              title: "Enterprise Computing Laboratory",
              content: "This Enterprise Computing Laboratory is equipped with high end HP desktop machines for enterprise application development, data analytics and cloud projects. This Lab has 73 Intel i3 machines with 10 GB RAM, exclusively dedicated for faculty members and students to take up research and strengthen their knowledge in various application development and research.",
              img: "path/to/image4.jpg"
            },
            {
              title: "Cyber Security Laboratory",
              content: "A cyber security laboratory at Kongu engineering college provides students with a practical learning environment to enhance their understanding of cybersecurity concepts. Equipped with cutting-edge technology and software, these labs offer hands-on experiences in analyzing and securing computer systems. Students can simulate cyber attacks, practice ethical hacking, and develop skills in identifying and mitigating vulnerabilities. The lab fosters a dynamic learning atmosphere where students gain the practical expertise necessary for tackling real-world cyber threats, preparing them for careers in the rapidly evolving field of cybersecurity.",
              img: "path/to/image5.jpg"
            },
            {
              title: "Project Laboratory",
              content: "The Information Technology (IT) project laboratory within the department is a specialized facility dedicated to fostering practical skills and innovation in the field. It is equipped with cutting-edge technology, including computers, servers, networking tools, and software development environments. This space serves as a hub for students to engage in hands-on projects, collaborate on software development, and explore emerging technologies. In the IT project laboratory, students have the opportunity to work on real-world projects that span various domains such as software engineering, IoT, data science, and network administration. The environment encourages teamwork, problem-solving, and creativity, providing a bridge between theoretical knowledge acquired in classrooms and its practical application in the dynamic IT industry. Guided by experienced faculty, students use the laboratory to gain practical experience in designing and implementing solutions to complex IT challenges. The lab's emphasis on experiential learning enhances students' readiness for the demands of the Information Technology sector, preparing them for successful careers in the rapidly evolving technological landscape.",
              img: "path/to/image6.jpg"
            },
          ].map((section, index) => (
            <div 
              key={index}
              className="animate-section opacity-0 translate-y-20 scale-90 transition-all duration-700 ease-out"
            >
              <div className="border-l-4 border-indigo-600 pl-6 mb-6">
                <h2 className="text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-300">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 hover:text-gray-900 transition-colors duration-300">
                {section.content}
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={section.img}
                  alt={section.title}
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}

          <div className="animate-section opacity-0 translate-y-20 scale-90 transition-all duration-700 ease-out">
            <div className="border-l-4 border-indigo-600 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-300">
                Library (Common to CSE & IT)
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[libraryData.slice(0, 4), libraryData.slice(4)].map((column, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {column.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          {item.label}
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-8 relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="path/to/image7.jpg"
                  alt="Library"
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityLib;