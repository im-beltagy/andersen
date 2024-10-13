"use client";

import HeroFull from "@/sections/about-us/hero-full";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import HomeTrust from "../home/trust";
import HomeWorkedWith from "../home/worked-with";
import Section9 from "@/sections/project-cases/sectionContactForm/Section9";
import Image from "next/image";

function View(): React.JSX.Element {
  const matches = useMediaQuery("(max-width:900px)");

  const [visited, setVisited] = useState(null);
  const handleClick = (index: any) => {
    setVisited(index);
  };
  const content = [
    "In today’s ever-changing mobile app development landscape, customer requirements have been changing at lightning speed. In such cases, delivering a high-quality app that meets customers’ expectations becomes a major challenge. So, how to develop a user-friendly, high-performing app? The answer is Agile mobile app development.",
    "According to a Zippia report, over 71 percent of U.S. companies use Agile development. This methodology offers a dynamic approach that differentiates it from traditional application development techniques. Agile development can help you build the highest quality software product with increased customer satisfaction. ",
    "Unlike the conventional software development approach, Agile methodology embraces adaptability, flexibility, and a customer-centric approach that allows developers to quickly adjust to customers’ feedback and changing market demands. These features can help you deliver top-notch mobile applications on time and within budget.",
    "In this article, we will explore how Agile development methodology works, its benefits, various Agile frameworks, best practices, and much more.",
    "Let’s get started.",
  ];
  const phases = [
    {
      title: "Requirement analysis",
      desc: [
        "At this stage, the team identifies and analyzes the app requirements. They consider business goals, user needs, and current market trends. The development team involves all the stakeholders and takes their inputs regarding the app features, functionalities, and outcomes. This information serves as the foundation for subsequent app development phases.",
      ],
    },
    {
      title: "Design",
      desc: [
        "In the design stage, the team creates a comprehensive design plan, including the app’s visual and functional aspects. It’s a critical phase that shapes the app’s look and functionality.",
        "This phase involves the following key activities:",
      ],
      ul: [
        {
          bold: "User interface (UI) design",
          normal:
            " This involves creating the visual elements and layout of the app, including screens, icons, buttons, and navigation.",
        },
        {
          bold: "User experience (UX) design",
          normal:
            "  UX design provides a smooth and seamless user experience, ensuring the app is intuitive and efficient.",
        },
        {
          bold: "Technical design",
          normal:
            "  The team also creates a design roadmap for the technical aspects of the app, including features, functionalities, system architecture, data models, APIs, and required third-party integrations.",
        },
        {
          bold: "Interaction design",
          normal:
            "  The team focuses on defining how the users will interact with the app and how it will respond to user inputs.",
        },
      ],
    },
    {
      title: "Development",
      desc: [
        "The development phase, also known as the “implementation phase,” is a critical stage in Agile mobile app development. The development phase is an iterative process divided into short cycles called sprints.",
        "Each sprint lasts 2-4 weeks, focusing on specific features and functionalities defined during the design phase. The development phase also involves daily stand-up meetings, known as scrums, where the team members provide work updates. This helps identify and remove any bottlenecks to ensure the project progresses smoothly.",
      ],
    },
    {
      title: "Testing",
      desc: [
        "Testing is an integral part of the Agile mobile app development methodology. Testing starts from the early development stages and continues through each sprint. Agile methodology emphasizes automated testing to streamline the testing process.",
        "The tests verify user experience, functionality, performance, and other critical aspects of the application. Regular testing ensures stability and functionality as new features are added.",
        "The various tests involved in Agile methodology include:",
      ],
      ul: [
        {
          bold: "Unit testing",
          normal:
            "Testing individual components separately to ensure they function correctly",
        },
        {
          bold: "Integration testing",
          normal: "Ensuring different modules or components interact smoothly",
        },
        {
          bold: "Functional testing",
          normal:
            "Verifying if the app functions as expected based on the requirements",
        },
        {
          bold: "Performance testing",
          normal:
            "Assessing the app’s performance (speed, responsiveness, and resource usage) under different conditions",
        },
        {
          bold: "Security testing",
          normal:
            "  Identifying security vulnerabilities under different circumstances and ensuring data protection",
        },
        {
          bold: "Regression testing",
          normal:
            " Verifying existing features and functions aren’t affected due to upgrades or new changes",
        },
      ],
    },
    {
      title: "Deployment",
      desc: [
        "The deployment phase involves releasing the app on various platforms for users to download and install. At this stage, the quality assurance team performs the final test to ensure the app is fully functional and performing as expected.",
        "If any code defect or bug appears, the development team addresses it swiftly. User training, establishing the release schedule, and communication channels also occur during this stage. Once all these activities conclude, the app is released for production.",
      ],
    },
    {
      title: "Review",
      desc: [
        "The review phase starts once the application is deployed and available for users. This phase involves evaluating app performance and user feedback to identify the areas for improvement. The development team aims to enhance functionality and performance through effective reviews, ensuring the app meets user expectations. ",
      ],
    },
  ];
  const lastContent = [
    {
      link: "Why choose Agile methodology for mobile app development?",
      image: "/assets/agile-2.jpg",
      title: "Why choose Agile methodology for mobile app development",
      mainDesc:
        "From large enterprises to start-ups, almost every business uses Agile approach as it breaks down the mobile app development process into smaller and more manageable tasks. This approach enables the development team to quickly adapt to evolving market demands. Let’s look at the key reasons to adopt Agile development methodology.",
      subTitles: [
        {
          title: "Excellent product quality",
          desc: [
            "Testing is an integral part of the Agile development methodology, ensuring high-quality mobile applications. Developers conduct tests at the end of each iteration, allowing prompt removal of bugs or code errors.",
            "Moreover, regular retrospectives in Agile development allow teams to reflect on their work, identify areas for improvement, and implement necessary changes in future iterations. Besides, the client is involved throughout the development process, enabling the team to incorporate any changes during the development phase itself.",
          ],
        },
        {
          title: "Faster time-to-market",
          desc: [
            "Agile development follows the iterative approach that helps develop and release a basic version of the app. This version can be enhanced through subsequent iterations, allowing immediate feedback and constant fine-tuning. This approach eliminates the need for major changes at the end of the project. The Agile model reduces the overall development time, thus ensuring faster time-to-market and better performance.",
          ],
        },
        {
          title: "Lower cost of development",
          desc: [
            "The Agile development model ensures efficient use of resources by dividing work into multiple, priority-driven sprints. This approach saves time that might otherwise be spent on less important aspects. Regular testing and frequent iterations help in spotting errors and fixing them early, avoiding costly, time-consuming fixes later in the project.",
            "Additionally, the Agile method allows the development team to accommodate changes at any point in the development process. Collectively, these factors contribute to a substantial reduction in development costs.",
          ],
        },
        {
          title: "Better control",
          desc: [
            "The Agile development method provides an adaptable framework, allowing project managers to immediately respond to changes. Agile’s rapid, iterative cycles provide continuous feedback, resulting in early identification and rectification of issues before they escalate.",
            "Besides, regular communication and stakeholders’ participation ensure the product is developed in alignment with the customer requirements. This alignment enables project managers to make informed decisions and streamline the development process. As a result, the Agile method offers project managers better control over the project.",
          ],
        },
        {
          title: "Increased customer satisfaction",
          desc: [
            "Unlike traditional development methodologies, where the customer is involved only during the planning phase, the Agile method allows the customer to be a part of the decision-making process throughout the development process. This inclusion helps in developing a software product that perfectly aligns with the customer’s requirements. Given the customer’s involvement at each stage, the development team can make modifications based on their feedback. Additionally, the Agile method substantially trims down development time, further enhancing customer satisfaction.",
          ],
        },
        {
          title: "Better flexibility to changes",
          desc: [
            "Implementing the Agile mobile app development method enhances flexibility in project management. With its iterative and incremental development, the Agile method allows easy accommodation of changes at any stage of the project, making it more flexible than the conventional methodologies.",
            "Moreover, in the Agile method, the planning and development evolve as the project progresses, making it easier to implement new changes.",
          ],
        },
      ],
    },
    {
      link: "Effective Agile frameworks for mobile app development",
      image: "/assets/agile-3.jpg",
      title: "Effective Agile frameworks for mobile app development",
      mainDesc:
        "Let’s explore some of the most popular and effective Agile frameworks for mobile app development.",
      subTitles: [
        {
          title: "Scrum",
          desc: [
            "Scrum is the most widely used Agile framework that divides projects into short, manageable modules called ‘Sprints.’ Each sprint typically lasts for 2 to 4 weeks. This flexible framework is the most suitable for projects where the outcome isn’t clearly defined. A lot of improvements take place as the project evolves and results become clearer as the project nears completion.",
            "A small, cross-functional team works collaboratively toward deliverables defined at the beginning of each sprint. The Scrum Master leads the team members within a sprint and organizes daily meetings to discuss any bottlenecks and scopes for improvement, ensuring smooth completion of the task within the stipulated time.",
          ],
        },
        {
          title: "Kanban",
          desc: [
            "Kanban is another common Agile framework for developing software products. It focuses on visualizing the workflow and is the most suitable when you want transparency at each stage of the project. In Kanban, you can divide the project into various workflows and monitor the progress by tracking the current status of the particular task.",
            "Work items are represented visually on a Kanban board, featuring workflow columns, providing a clear overview of the status. These workflows might be labeled as “In Progress,” “Completed,” or “Under Review,” indicating different stages from the beginning to completion.",
            "A key feature of Kanban is the ability to set a limit for “Work in progress.” This allows control over the number of tasks each team member handles simultaneously, helping managers in optimizing resource allocation and preventing team members from burnout.",
          ],
        },
        {
          title: "Lean",
          desc: [
            "Lean is an Agile framework that works on the principle of maximizing value and minimizing waste. This framework aims to eliminate unnecessary things that do not add value to the project, making the development processes leaner and more efficient.",
            "Lean framework works on continuous improvement, resulting in better quality software products, faster development, and satisfied customers. This framework also aims to avoid overwhelming the pipeline with too many tasks at a time, which can slow down the work and degrade the quality.",
          ],
        },
        {
          title: "Extreme programming (XP)",
          desc: [
            "Extreme programming is an Agile software development approach that aims to continuously improve product quality. The development team and the customer are actively involved in building the product. The customer provides regular feedback and suggestions that the developers incorporate right away. Once done, the developers move on to the next iterations, following a similar pattern.",
            "Collaboration is key in this Agile framework as it helps to quickly identify and resolve any misunderstandings or requirements change during the development process. This collaboration results in a product that perfectly matches the customer’s needs.",
            "Another important aspect of XP includes breaking down complex projects into smaller, manageable tasks and focusing on frequent releases of working software. By adopting this Agile framework, development teams can deliver high-quality code and meet customers’ evolving requirements more efficiently.",
          ],
        },
        {
          title: "Adaptive Project Framework (APF)",
          desc: [
            "As the name states, APF is an approach to managing projects that focuses on adaptability and flexibility. In today’s constantly changing technological landscape, you may need to modify your strategy midway and adopt a new plan due to client preferences or evolving market situations.",
            "In this Agile framework, you adapt a more dynamic and iterative approach rather than following a rigid plan from the beginning to the end. This flexibility allows the development team to regularly reassess the project’s goals, priorities, and requirements, enabling them to adapt to changing circumstances.",
            "A key principle of the Adaptive Project Framework is stakeholder collaboration. This principle involves all relevant stakeholders, such as clients, the development team, and the users, in the decision-making process. By incorporating their inputs and feedback, the project team can deliver a product that meets the client’s expectations.",
          ],
        },
      ],
    },
    {
      link: "7 Best practices for implementing Agile methodologies in mobile app development",
      image: "/assets/agile-4.jpg",
      title:
        "7 Best practices for implementing Agile methodologies in mobile app development",
      mainDesc:
        "To successfully implement Agile mobile app development, consider these top seven best practices.",
      subTitles: [
        {
          title: "Collaborate with the customer",
          desc: [
            "Customers are at the forefront of Agile mobile app development, and involving them at every stage of the development process is essential. This collaboration helps gain valuable insights and ensures the app aligns with customer expectations and evolving market demands.",
          ],
        },
        {
          title: "Focus on teamwork",
          desc: [
            "Building a successful mobile application requires effective teamwork. Designers, developers, testers, quality assurance engineers, and other stakeholders must collaborate and take ownership of their work to ensure project success.",
          ],
        },
        {
          title: " Hold daily stand-up meetings ",
          desc: [
            "Daily stand-up meetings, a part of Agile methodologies, are brief meetings to discuss tasks, track progress, and identify and remove any obstacles. These meetings foster transparency and alignment with the project goal.",
          ],
        },
        {
          title: "Use burndown charts for sprints",
          desc: [
            "Employing a burndown chart for sprints is a perfect way to manage work and track progress efficiently. The burndown chart visually represents the amount of work remaining against the amount of time. This representation helps the team to assess if they are on track or falling behind the deadline. The burndown chart also helps to forecast the team’s ability to complete the remaining work within the sprint timeframe. ",
          ],
        },
        {
          title: "Establish a communication guideline",
          desc: [
            "In Agile mobile app development methodology, the focus is always on providing the best user experience. Understanding the need and expectations of the end users helps in creating user-friendly, intuitive applications. The design team needs to gain insights into user needs, behaviors, and pain points to build a successful app that enhances user satisfaction and contributes to overall business success.",
          ],
        },
        {
          title: "Test throughout the development process",
          desc: [
            "Extensive testing is critical in Agile project management to build a high-quality mobile application that aligns with the business requirement and exceeds users’ expectations from the very first day.",
            "Testing the application after each sprint helps identify and fix problems as they arise. By incorporating testing throughout the development process, the team can deliver a high-quality app that performs well under all conditions and provides an excellent user experience.",
          ],
        },
        {
          title: "Establish a communication guideline",
          desc: [
            "Establishing a communication guideline facilitates effective collaboration and exchange of information within the team. These guidelines involve defining communication protocol, setting up expectations, and ensuring everyone follows it. A communication guideline fosters seamless coordination and timely resolution of issues, reduces miscommunication, and improves the overall efficiency of the development process.",
          ],
        },
      ],
    },
  ];
  const sideNavigate = [
    "How does Agile mobile app development work?",
    "Why choose Agile methodology for mobile app development?",
    "Effective Agile frameworks for mobile app development",
    "7 Best practices for implementing Agile methodologies in mobile app development",
    "Conclusion ",
  ];
  const conclusion = {
    title: "Conclusion",
    desc: [
      "Agile methodology has revolutionized the mobile app development process. From excellent product quality to customer satisfaction and faster time to market, the Agile development process offers many advantages. The iterative and collaborative approach in Agile development enables the development team to adapt to evolving customer requirements. ",
      "With Agile methodology, developers can receive regular feedback for continuous improvement, resulting in superior quality apps that deliver an exceptional user experience.",
      "Turing’s mobile app development services can help transform your applications. We offer world-class teams and industry experts that follow Agile methodology and use cutting-edge technologies to build next-gen apps, exceeding our client’s expectations. Partner with Turing and join 900+ Fortune 500 companies and fast-scaling startups that trust Turing.",
    ],
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0f0f0f",
          minHeight: { xs: "115vh", sm: "130vh", md: "100vh" },
          color: "#fff",
          padding: "40px",
        }}
      >
        <Box sx={{ top: "80px", position: "relative" }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Grid item md={11}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: "46px",
                        xs: "30px",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    Agile Methodologies: A Key to Successful Mobile App
                    Development
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography
                    sx={{
                      backgroundColor: "#262626",
                      padding: "10px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Application and cloud
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography
                    sx={{
                      backgroundColor: "#262626",
                      padding: "10px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Leadership and productivity
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography
                    sx={{
                      backgroundColor: "#262626",
                      padding: "10px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Talent onboarding and operations
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/assets/agile.avif"
                alt="agile"
                width={600}
                height={400}
                style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ padding: "40px", bgcolor: "#f8f8f8" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={4}
            sx={{ height: "100%", position: "sticky", top: "0" }}
            className={matches ? "none" : ""}
          >
            <Box sx={{ width: "90%" }}>
              <Typography
                sx={{ textAlign: "center", fontSize: "25px", mt: "15px" }}
              >
                Table of Contents
              </Typography>
              {sideNavigate?.map((nav, index) => (
                <a
                  onClick={() => handleClick(index)}
                  key={index}
                  style={{
                    fontSize: "18px",
                    display: "block",
                    margin: "20px 0",
                    textDecoration: "none",
                    color: "#000",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  href={`#${nav}`} // Add href to scroll to corresponding sections
                  className={visited === (index as never) ? "link" : ""} // Toggle class based on the visited state
                >
                  {nav}
                </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={11}>
                {content?.map((item, index) => (
                  <Typography key={index} sx={{ fontSize: "18px", my: "20px" }}>
                    {item}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={12} md={11}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "25px",
                      md: "35px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  How does Agile mobile app development work?
                </Typography>
                <Image
                  src="/assets/agile-dev.jpg"
                  alt="agile-dev"
                  width={700}
                  height={500}
                  style={{objectFit: "contain"}}
                />
                <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                  How does Agile mobile app development work?
                </Typography>
                <Typography sx={{ mt: "25px", fontSize: "20px" }}>
                  The Agile mobile app development methodology includes six
                  stages, often called Agile phases. Let’s look at each one of
                  them.
                </Typography>
              </Grid>
              <Grid item xs={12} md={11}>
                {phases.map((phase, index) => (
                  <Box key={index} sx={{ my: "50px" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                      Phase {index + 1} : {phase?.title}
                    </Typography>
                    <Box sx={{ fontSize: "14px", my: "10px" }}>
                      {phase?.desc.map((desc, index) => (
                        <Typography
                          key={index}
                          sx={{ fontSize: "18px", my: "20px" }}
                        >
                          {desc}
                        </Typography>
                      ))}
                    </Box>
                    <Box>
                      <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                        {phase?.ul?.map((test, index) => (
                          <li
                            key={index}
                            style={{
                              fontSize: "14px",
                              margin: "10px 0",
                              display: "list-item",
                              alignItems: "center",
                            }}
                          >
                            <Typography sx={{ fontWeight: "600" }}>
                              {test?.bold}:
                            </Typography>
                            <Typography>{test?.normal}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                ))}
              </Grid>
              {/* <Grid item md={11}>
                <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                  Why choose Agile methodology for mobile app development?
                </Typography>
                <Image
                  src="/assets/agile-2.jpg"
                  alt="agile-dev"
                  width={700}
                  height={500}
                />
                <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                  Why choose Agile methodology for mobile app development?
                </Typography>
                <Typography sx={{ mt: "25px", fontSize: "20px" }}>
                  From large enterprises to start-ups, almost every business
                  uses Agile approach as it breaks down the mobile app
                  development process into smaller and more manageable tasks.
                  This approach enables the development team to quickly adapt to
                  evolving market demands. Let’s look at the key reasons to
                  adopt Agile development methodology.
                </Typography>
              </Grid> */}
              {lastContent?.map((content, index) => (
                <Grid id={content?.link} item xs={12} md={11} key={index}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "25px",
                        md: "35px",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    {content?.title}
                  </Typography>
                  <Image
                    src={content?.image}
                    alt="agile-dev"
                    width={700}
                    height={500}
                    style={{objectFit: "contain"}}
                  />
                  <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                    {content?.title}
                  </Typography>

                  <Typography sx={{ fontSize: "18px", mt: "35px" }}>
                    {content?.mainDesc}
                  </Typography>

                  {content?.subTitles.map((sub, index) => (
                    <div key={index}>
                      <Typography sx={{ mt: "30px", fontSize: "25px" }}>
                        {sub?.title !== "Conclusion" ? index + 1 + "." : ""}{" "}
                        {sub?.title}
                      </Typography>
                      {sub?.desc?.map((d, descIndex) => (
                        <Typography
                          key={descIndex}
                          sx={{ fontSize: "18px", my: "20px" }}
                        >
                          {d}
                        </Typography>
                      ))}
                    </div>
                  ))}
                </Grid>
              ))}
              <Grid id="Conclusion" item md={11}>
                <Typography sx={{ mt: "30px", fontSize: "25px" }}>
                  {conclusion?.title}
                </Typography>

                {conclusion?.desc?.map((con, index) => (
                  <div key={index}>
                    <Typography
                      key={index}
                      sx={{ fontSize: "18px", my: "20px" }}
                    >
                      {con}
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default View;
