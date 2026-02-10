
export const resumeLatex = `
\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{graphicx}
\\usepackage{multicol}
\\documentclass{article}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{fontawesome}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}
\\usepackage{enumitem}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\classesList}[4]{
    \\item\\small{
        {#1 #2 #3 #4 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.001\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

% ---------- Header (SAME FONT AS YOUR ORIGINAL) ----------
\\begin{center}
    {\\Huge \\scshape Narra Srujan} \\\\ \\vspace{10pt}
    \\small
    \\raisebox{-0.1\\height}\\faPhone\\ \\underline{+91-9493416047} 
    ~
    \\href{mailto:sonusrujan76@gmail.com}
    {\\raisebox{-0.2\\height}\\faEnvelope\\ \\underline{sonusrujan76@gmail.com}} 
    ~ ~
    \\href{https://www.linkedin.com/in/srujan-rathna-shalem-narra-8a4a202b2/}
    {\\raisebox{-0.2\\height}\\faLinkedin\\ \\underline{N.Srujan}}
\\end{center}

\\vspace{-2pt}



  %-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Vellore Institute Of Technology, Chennai}{Aug 2021 -- Jul 2025}
      {Bachelor of Technology in Computer Science: CGPA: 7.49}{Chennai, India}
      
  \\resumeSubHeadingListEnd
  
             
%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Airbus India Private Limited}{Jun 2025 -- Dec 2025}
      {Cloud Intern}{Bangalore, India}
      \\resumeItemListStart
        \\resumeItem{Developed a Camera Calibration Platform using Flask and React, reducing manual calibration time by 40\\% through automated X, Y, Z plot generation and WebRTC streaming.}
        \\resumeItem{Engineered a People Anonymization Tool using YOLO and OpenCV, achieving 98\\% detection accuracy for human subjects and automating secure storage in Azure Blob Storage.}
        \\resumeItem{Built scalable FastAPI backends, improving API response times by 25\\% for internal tracking tools, documented via Swagger for 100\\% team transparency.}
        \\resumeItem{Automated deployment pipelines using Jenkins CI/CD, decreasing production build errors by 15\\% on Azure Virtual Machines.}
        \\resumeItem{Optimized cloud resource access using Azure RBAC, ensuring zero security breaches during the handling of sensitive internal media assets.}
      \\resumeItemListEnd

    \\resumeSubheading
      {Global Software Solutions Pvt Ltd.}{Aug 2023 -- Dec 2023}
      {Cloud DevOps Intern}{Chennai, India}
      \\resumeItemListStart
        \\resumeItem{Managed cloud infrastructure and CI/CD processes within Azure DevOps, implementing automation scripts that reduced manual deployment overhead by 20\\%.}
        \\resumeItem{Streamlined cloud operations by monitoring system performance and assisting in the migration of legacy services to containerized environments.}
        \\resumeItem{Gained hands-on experience in Infrastructure as Code (IaC) and automated resource provisioning to ensure robust environment consistency.}
      \\resumeItemListEnd
      
    \\resumeSubheading
      {G3 Technologies}{Apr 2022 -- May 2022}
      {Cloud DevOps Intern}{Chennai, India}
      \\resumeItemListStart
        \\resumeItem{Developed responsive front-end components using React.js, improving user engagement by 15\\% via optimized UI/UX flows.}
        \\resumeItem{Integrated RESTful APIs using Node.js and Express, reducing data retrieval latency by 30\\% through SQL optimization.}
        \\resumeItem{Collaborated on JWT-based authentication implementation, decreasing unauthorized access attempts by 20\\%.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd
 
%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
    
    \\resumeProjectHeading
        {\\textbf{Camera Calibration Platform (Airbus)} $|$ \\emph{Flask, Angular, React, WebRTC, RTSP, FFmpeg, Azure, Jenkins, CI/CD}}{}
        \\resumeItemListStart
            \\resumeItem{Built an end-to-end internal tool for mono camera calibration, multi-camera calibration, and floor-map calibration.}
            \\resumeItem{Implemented checkerboard/Charuco board detection, alignment guidance with dynamic rectangular overlays, and automated coverage plot generation.}
            \\resumeItem{Integrated WebRTC, RTSP, FFmpeg, and Indexing to enable real-time video streaming and sample image capture workflows.}
            \\resumeItem{Developed the complete backend using Flask with accurate computation of X, Y, Z calibration plots and final result generation.}
            \\resumeItem{Built the frontend initially in Angular and later migrated to React; handled full API integration across all workflows.}
            \\resumeItem{Automated sample image storage and calibration data handling using Azure Blob Storage; deployed the system using Virtual Machines, Cosmos DB, and Azure DNS.}
            \\resumeItem{Documented and validated APIs using Swagger and followed industry-level backend code quality checks.}
            \\resumeItem{Configured CI/CD pipelines using Jenkins and pushed production-ready builds after multiple successful GitHub PRs.}
        \\resumeItemListEnd

    \\resumeProjectHeading
        {\\textbf{People Anonymisation Tool (Airbus)} $|$ \\emph{Python, React, YOLO, Azure (Blob Storage, Cosmos DB), Prefect}}{}
        \\resumeItemListStart
            \\resumeItem{Developed an internal anonymisation tool for Airbus to detect and anonymise people in images and videos stored in Azure Blob Storage or referenced via Cosmos DB.}
            \\resumeItem{Implemented automated workflows to blur or blackout human subjects in media files and save anonymised outputs to separate, secure Blob Storage containers.}
            \\resumeItem{Used YOLO pretrained models for high-accuracy person detection in both images and video frames.}
            \\resumeItem{Built the backend entirely in Python and developed the user-facing dashboard using React.}
            \\resumeItem{Integrated Prefect to run periodic tasks, automate anonymisation pipelines, and ensure scalable processing.}
        \\resumeItemListEnd
        
    \\resumeProjectHeading
        {\\textbf{Human Detection \& Movement Tracking Tool (Airbus)} $|$ \\emph{Python, YOLO, OpenCV, Azure (Blob Storage, Virtual Machines, Cosmos DB)}}{}}
        \\resumeItemListStart
            \\resumeItem{Developed an internal tool for Airbus to detect humans in media files and display the real-time count of people present in each frame.}
            \\resumeItem{Implemented movement-path tracking by drawing trajectory lines that represent the person’s motion across frames.}
            \\resumeItem{Utilized YOLO pretrained models for precise person detection and OpenCV for tracking and frame-by-frame visualisation.}
            \\resumeItem{Developed the backend entirely in Python to process uploaded media files and generate tracking-enhanced outputs.}
            \\resumeItem{Deployed the tool on the Azure cloud using services like Blob Storage, Virtual Machines, and Cosmos DB for scalable and secure processing.}
        \\resumeItemListEnd

    \\resumeProjectHeading
        {\\textbf{CodeCommerce} $|$ \\emph{Node.js, MongoDB, Express.js, React.js}}{}
        \\resumeItemListStart
            \\resumeItem{Developed a fully functional e-commerce platform with a consumer-friendly interface.}
            \\resumeItem{Implemented secure authentication and designed an admin panel for efficient product management.}
            \\resumeItem{Ensured responsive front-end layouts and seamless API integrations for a robust user experience.}
        \\resumeItemListEnd

    \\resumeProjectHeading
        {\\textbf{Blood Bank with Integration of Cloud} $|$ \\emph{HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB, Azure}}{}
        \\resumeItemListStart
            \\resumeItem{Developed and deployed a cloud-based platform connecting blood donors and recipients.}
            \\resumeItem{Implemented CI/CD pipelines using Git, reducing deployment time by 40\\%.}
            \\resumeItem{Utilized Docker and Kubernetes for scalable and consistent application environments.}
            \\resumeItem{Ensured security best practices and comprehensive documentation.}
        \\resumeItemListEnd
    \\resumeSubHeadingListEnd


%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
    \\textbf{Cloud Platforms: }{Microsoft Azure, AWS, Google Cloud Platform}\\\\
     \\textbf{Languages: }{Python, JavaScript, HTML5, CSS, C++, Java} \\\\
     \\textbf{Infrastructure as Code (Iac): }{Terraform} \\\\
     \\textbf{Tools: }{ Git, Docker, Postman, AWS EC2, Kubernetes}\\\\
     \\textbf{Continuous Intergration/ Continuous Deployment: }{CI/CD Pipelines, GitHub Actions, GitLab CI, Jenkins} \\\\
     \\textbf{Framework & Database: }{ React.js, React Native, Node.js, MongoDB, SQL, Express.js, Spring Boot}\\\\
     \\textbf{Course work}{: Object-Oriented Programming, DBMS, Operating Systems, Data Structures and Algorithms} \\\\
     \\textbf{ARM Templates, Agile Methodolgy  }\\\\

    }}

   \\resumeItemListEnd

\\section{Certifications}

\\vspace{-2pt}
\\textbf{\\href{https://drive.google.com/file/d/1uWuXyi6MG0TLh2K6_Vea8ej8HCsGPFKK/view?usp=sharing}{\\underline{Java Full Stack Developer; IAMNEO}}} \\href{https://drive.google.com/file/d/1uWuXyi6MG0TLh2K6_Vea8ej8HCsGPFKK/view?usp=sharing}{\\includegraphics[width=0.3cm]{logo.png}}\\\\

\\textbf{\\href{https://drive.google.com/file/d/1TMs6RtJJWr1y0NvvDKsrclmIjkb0V4Xy/view?usp=sharing}{\\underline {Google Cloud Computing: Foundations}}} \\href{https://drive.google.com/file/d/1TMs6RtJJWr1y0NvvDKsrclmIjkb0V4Xy/view?usp=sharing}{\\includegraphics[width=0.3cm]{logo.png}}\\\\

\\textbf{\\href{https://drive.google.com/file/d/1UXzZHqhg1y-kp_qyq6FOcTpkEeFmJAXa/view?usp=sharing}{\\underline{Microsoft Azure Fundamentals AZ-900}}} \\href{https://drive.google.com/file/d/1UXzZHqhg1y-kp_qyq6FOcTpkEeFmJAXa/view?usp=sharing}{\\includegraphics[width=0.3cm]{logo.png}}\\\\

\\textbf{\\href{https://drive.google.com/file/d/1IJQ70a_4frpKxQdcvrNQonnW_MV7scOs/view?usp=sharing}{\\underline{Microsoft Azure Administrator AZ-104}}} \\href{https://drive.google.com/file/d/1IJQ70a_4frpKxQdcvrNQonnW_MV7scOs/view?usp=sharing}{\\includegraphics[width=0.3cm]{logo.png}}\\\\
\\vspace{5pt}

\\resumeSubHeadingListEnd
       

\\end{document}
`;
