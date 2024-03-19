import React from "react";
// import classnames from "classnames";
import Head from "next/head";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

import { PageBanner } from "../../components/Banner";
import { BannerCTA } from "../../components/CallToActionBanner";
// import { Heading } from "../../components/Heading";
// import { ResearchCard } from "../../components/ResearchCard";
// import Stack from "../../components/Stack";

// import styles from "./index.module.scss";

export interface ResearchCardProps {
  title: string;
  reference: string;
  referenceHref: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  referenceHref,
  reference,
}) => (
  <ul>
    <li>
      {title},{" "}
      <Link href={referenceHref} target="_blank">
        {reference}
      </Link>
    </li>
  </ul>
);

const Papers = [
  {
    title: "Computer-based assessments with randomization and instant feedback",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="PrairieLearn: Mastery-based online problem solving with adaptive scoring and recommendations driven by machine learning"
          reference="M. West, G. L. Herman, and C. Zilles. ASEE 2015."
          referenceHref="https://peer.asee.org/24575"
        />
        <ResearchCard
          title="Algorithmic grading strategies for computerized drawing assessments"
          reference="M. Silva and M. West. ASEE 2017."
          referenceHref="https://peer.asee.org/algorithmic-grading-strategies-for-computerized-drawing-assessments"
        />
        <ResearchCard
          title="Predicting the difficulty of automatic item generators on exams from their difficulty on homeworks"
          reference="B. Chen, M. West, and C. Zilles. L@S 2019."
          referenceHref="http://dx.doi.org/10.1145/3330430.3333647"
        />

        <ResearchCard
          title="Reducing difficulty variance in randomized assessments"
          reference="P. Sud, M. West, and C. Zilles. ASEE 2019."
          referenceHref="https://peer.asee.org/reducing-difficulty-variance-in-randomized-assessments"
        />

        <ResearchCard
          title="A quantitative analysis of when students choose to grade questions on computerized exams with multiple attempts"
          reference="A. Verma, T. Bretl, M. West, and C. Zilles. L@S 2020."
          referenceHref="http://dx.doi.org/10.1145/3386527.3406740"
        />

        <ResearchCard
          title="Caches as an example of machine-gradable exam questions for complex engineering systems"
          reference="S. Mahmood, M. Zhao, O. Khan and G. Herman. FIE 2020."
          referenceHref="https://ieeexplore.ieee.org/document/9273822"
        />

        <ResearchCard
          title="A simple and efficient markup tool to generate drawing-based online assessments"
          reference="N. Nytko, M. West, and M. Silva. ASEE 2020."
          referenceHref="https://peer.asee.org/a-simple-and-efficient-markup-tool-to-generate-drawing-based-online-assessments"
        />

        <ResearchCard
          title="Integrating diverse learning tools using the PrairieLearn platform"
          reference="M. West, N. Walters, M. Silva, T. Bretl, and C. Zilles. SIGCSE 2021"
          referenceHref="https://cssplice.github.io/SIGCSE21/proc/SPLICE2021_SIGCSE_paper_10.pdf"
        />

        <ResearchCard
          title="How much deadline flexibility on formative assessments should we be giving to our students?"
          reference="C. Zhao, M. West, and M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/43372"
        />

        <ResearchCard
          title="A's for All (as time and interest allow)"
          reference="D. Garcia. A. Fox, C. Zilles, M. West, M. Silva, N. Terrell, S. Russell, E. Ambrosio, and F. Shakir. SIGCSE 2023"
          referenceHref="https://doi.org/10.1145/3545945.3569847"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Retrieval practice and second-chance testing",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Frequent mastery testing with second-chance exams leads to enhanced student learning in undergraduate STEM"
          reference="J. Morphew, M. Silva, G. Herman, and M. West. Applied Cognitive Psychology 2019."
          referenceHref="https://doi.org/10.1002/acp.3605"
        />

        <ResearchCard
          title="Second-chance testing course policies and student behavior"
          reference="G. Herman, K. Varghese, and C. Zilles. FIE 2019."
          referenceHref="https://ieeexplore.ieee.org/document/9028490"
        />

        <ResearchCard
          title="Comparison of grade replacement and weighted averages for second-chance exams"
          reference="G. Herman, Z. Cai, T. Bretl, C. Zilles, and M. West. ICER 2020."
          referenceHref="https://dl.acm.org/doi/10.1145/3372782.3406260"
        />

        <ResearchCard
          title="Students perceptions and behavior related to second-chance testing"
          reference="C. Emeka, T. Bretl, G. Herman, M. West, and C. Zilles. FIE 2021."
          referenceHref="https://ieeexplore.ieee.org/document/9637173"
        />

        <ResearchCard
          title="Determining the best policies for second-chance tests for STEM students"
          referenceHref="https://peer.asee.org/43019"
          reference="C. Emeka, D. Smith, C. Zilles, M. West, G. L. Herman, and T. Bretl. ASEE 2023."
        />

        <ResearchCard
          title="Second-chance testing as a means of reducing students' test anxiety and improving outcomes"
          referenceHref="https://peer.asee.org/44207"
          reference="C. Emeka, C. Zilles, M. West, G. Herman, and T. Bretl. ASEE 2023."
        />

        <ResearchCard
          title="Investigating the effects of testing frequency on programming performance and students' behavior"
          referenceHref="https://doi.org/10.1145/3545945.3569821"
          reference="D. Smith, C. Emeka, M. Fowler, M. West, and C. Zilles. ASEE 2023."
        />

        <ResearchCard
          title="First try, no (autograder) warm up: motivating quality coding submissions"
          referenceHref="https://peer.asee.org/43714"
          reference="L. Butler and G. Herman. ASEE 2023."
        />
      </React.Fragment>
    ),
  },

  {
    title: "Computer-based testing facilities",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Computerized testing: A vision and initial experiences"
          reference="C. Zilles, R. T. Deloatch, J. Bailey, B. B. Khattar, W. Fagen, C. Heeren, D. Mussulman, and M. West. ASEE 2015."
          referenceHref="https://peer.asee.org/computerized-testing-a-vision-and-initial-experiences"
        />

        <ResearchCard
          title="Student behavior in selecting an exam time in a computer-based testing facility"
          reference="C. Zilles, M. West, and D. Mussulman. ASEE 2015."
          referenceHref="https://peer.asee.org/student-behavior-in-selecting-an-exam-time-in-a-computer-based-testing-facility"
        />

        <ResearchCard
          title="Modeling student scheduling preferences in a computer-based testing facility"
          reference="M. West and C. Zilles. L@S 2016."
          referenceHref="http://dx.doi.org/10.1145/2876034.2893441"
        />

        <ResearchCard
          title="Measuring revealed student scheduling preferences using constrained discrete choice models"
          reference="J. Bailey, M. West, and C. Zilles. ASEE 2017"
          referenceHref="https://peer.asee.org/measuring-revealed-student-scheduling-preferences-using-constrained-discrete-choice-models"
        />

        <ResearchCard
          title="Student and instructor experiences with a computer-based testing facility"
          reference="C. Zilles, M. West, D. Mussulman, and C. Sacris. EDULEARN 2018."
          referenceHref="https://library.iated.org/view/ZILLES2018STU"
        />

        <ResearchCard
          title="Making testing less trying: Lessons learned from operating a computer-based testing facility"
          reference="C. Zilles, M. West, D. Mussulman, and T. Bretl. FIE 2018."
          referenceHref="https://www.computer.org/csdl/proceedings-article/fie/2018/08658551/18j8XOToevm"
        />

        <ResearchCard
          title="Using a computer-based testing facility to improve student learning in a programming languages and compilers course"
          reference="T. Nip, E. Gunter, G. Herman, J. Morphew, and M. West. SIGCSE 2018."
          referenceHref="https://dl.acm.org/doi/10.1145/3159450.3159500"
        />

        <ResearchCard
          title="Every university should have a computer-based testing facility"
          reference="C. Zilles, M. West, G. Herman, and T. Bretl. CSEDU 2019."
          referenceHref="https://zilles.cs.illinois.edu/papers/zilles_csedu_cbtf_2019.pdf"
        />

        <ResearchCard
          title="Computerized exam reviews: In-person and individualized feedback to students after a computerized exam"
          reference="W. L. Chang, M. West, C. Zilles, D. Mussulman, and C. Sacris. ASEE 2020."
          referenceHref="https://peer.asee.org/computerized-exam-reviews-in-person-and-individualized-feedback-to-students-after-a-computerized-exam"
        />

        <ResearchCard
          title="One solution to addressing assessment logistical problems: An experience setting up and operating an in-person testing center"
          reference="K. Downey, K. Miller, M. Silva, and C. Zilles. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630902"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Investigating cheating during computer-based testing",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Do performance trends suggest wide-spread collaborative cheating on asynchronous exams?"
          reference="B. Chen, M. West, and C. Zilles. L@S 2017."
          referenceHref="https://dl.acm.org/doi/10.1145/3051457.3051465"
        />

        <ResearchCard
          title="How much randomization is needed to deter collaborative cheating on asynchronous exams?"
          reference="B. Chen, M. West, and C. Zilles. L@S 2018."
          referenceHref="https://dl.acm.org/doi/10.1145/3231644.3231664"
        />

        <ResearchCard
          title="Analyzing the decline of student scores over time in self‐scheduled asynchronous exams"
          reference="B. Chen, M. West, and C. Zilles. Journal of Engineering Education, 2019."
          referenceHref="https://eric.ed.gov/?id=EJ1254087"
        />

        <ResearchCard
          title="Learning to cheat: Quantifying changes in score advantage of unproctored assessments over time"
          reference="B. Chen, S. Azad, M. Fowler, M. West, and C. Zilles. L@S 2020."
          referenceHref="https://dl.acm.org/doi/10.1145/3386527.3405925"
        />

        <ResearchCard
          title="Measuring the score advantage on asynchronous exams in an undergraduate CS course"
          reference="M. Silva, C. Zilles, and M. West. SIGCSE 2020."
          referenceHref="https://doi.org/10.1145/3328778.3366859"
        />

        <ResearchCard
          title="Are we fair? Quantifying score impacts of computer science exams with randomized question pools"
          reference="M. Fowler, D. Smith, C. Emeka, M. West and C. Zilles. SIGCSE 2022."
          referenceHref="https://dl.acm.org/doi/10.1145/3478431.3499388"
        />

        <ResearchCard
          title="Comparing student outcomes in online vs. in-person sections of an on-campus computer science course"
          reference="R. Gulati, M. West, C. Zilles, and  M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/43276"
        />

        <ResearchCard
          title="Comparing the security of three proctoring regimens for Bring-Your-Own-Device exams"
          reference="R. Gulati, M. West, C. Zilles, and  M. Silva. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630809"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Auto-grading open-ended questions",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="A validated scoring rubric for Explain-in-Plain-English questions"
          reference="B. Chen, S. Azad, R. Haldar, M. West, and C. Zilles. SIGCSE 2020."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3328778.3366879"
        />

        <ResearchCard
          title="Autograding Explain in Plain English questions using NLP"
          reference="M. Fowler, B. Chen, S. Azad, M. West, and C. Zilles. SIGCSE 2021."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3408877.3432539"
        />

        <ResearchCard
          title="Peer-grading Explain in plain English questions: A Bayesian calibration method for categorical answers"
          reference="B. Chen, M. West, and C. Zilles. SIGCSE 2022."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3478431.3499409"
        />

        <ResearchCard
          title="Am I wrong, or is the autograder wrong? Effects of AI grading mistakes on learnings"
          reference="T. Li, S. Hsu, M. Fowler, Z. Zhang, C. Zilles, and K. Karahalios. ICER 2023."
          referenceHref="https://doi.org/10.1145/3568813.3600124"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Computer-based collaborative learning",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="An analytic comparison of student-scheduled and instructor-scheduled collaborative learning in online contexts"
          reference="G. Herman, Y. Jiang, Y. Jiang, S. Poulsen, M. West, and M. Silva. ASEE 2022."
          referenceHref="https://peer.asee.org/41212"
        />

        <ResearchCard
          title="Developing tools, pedagogies, and policies for computer-based collaborative learning activities"
          reference="M. Fong, L. Butler, A. Alawini, G. Herman, and M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/42700"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Open Educational Resources (OER)",
    contents: (
      <React.Fragment>
        <ResearchCard
          title='"I don’t gamble to make my livelihood”: Understanding the incentives for, needs of, and motivations surrounding open educational resources in computing'
          reference="M. Fowler, D. Smith, B. Chen, and C. Zilles. ICER 2023."
          referenceHref="https://dl.acm.org/doi/10.1145/3568813.3600136"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Applications in CS1 courses",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Reevaluating the relationship between explaining, tracing, and writing skills in CS1 in a replication study"
          reference="M. Fowler, D. Smith, M. Hassan, S. Poulsen, M. West, and C. Zilles. Computer Science Education 2022."
          referenceHref="https://doi.org/10.1080/08993408.2022.2079866"
        />

        <ResearchCard
          title="Discovering, autogenerating, and evaluating distractors for Python Parsons problems in CS1"
          reference="D. Smith and C. Zilles. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569801"
        />

        <ResearchCard
          title="On Students' Ability to resolve their own tracing errors through code execution"
          reference="M. Hassan and C. Zilles. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3478431.3499400"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Application in Discrete Math and Algorithms courses",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Evaluating Proof Blocks Problems as Exam Questions"
          reference="S. Poulsen, M. Viswanathan, G. Herman, and M. West. ICER 2021."
          referenceHref="https://doi.org/10.1145/3446871.3469741"
        />

        <ResearchCard
          title="Proof Blocks: autogradable scaffolding activities for learning to write proofs"
          reference="S. Poulsen, M. Viswanathan, G. Herman, and M. West. ITiCSE 2022."
          referenceHref="https://doi.org/10.1145/3502718.3524774"
        />

        <ResearchCard
          title="Reevaluating the relationship between explaining, tracing, and writing skills in CS1 in a replication study"
          reference="M. Fowler, D. Smith, M. Hassan, S. Poulsen, M. West, and C. Zilles. Computer Science Education 2022."
          referenceHref="https://doi.org/10.1080/08993408.2022.2079866"
        />

        <ResearchCard
          title="Benchmarking partial credit grading algorithms for Proof Blocks problems"
          reference="S. Poulsen, S. Kulkarni, G. Herman, and M. West. AIED 2022."
          referenceHref="https://link.springer.com/book/10.1007/978-3-031-11647-6"
        />

        <ResearchCard
          title="Using context-free grammars to scaffold and automate feedback in precise mathematical writing"
          reference="J. Xia and C. Zilles. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569728"
        />

        <ResearchCard
          title="Efficiency of learning from Proof Blocks versus writing proofs"
          reference="S. Poulsen, Y. Gerner, B. Cosman, M. West, and G. Herman. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569797"
        />

        <ResearchCard
          title="Efficient feedback and partial credit grading for Proof Blocks problems"
          reference="S. Poulsen, S. Kulkarni, G. Herman, and M. West. AIED 2023."
          referenceHref="https://doi.org/10.1007/978-3-031-36272-9_41"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Application in Database Systems courses",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Insights from student solutions to SQL homework problems"
          reference="S. Poulsen, L. Butler, A. Alawini, and G. Herman. ITiCSE 2020."
          referenceHref="https://doi.org/10.1145/3341525.3387391"
        />

        <ResearchCard
          title="Analyzing student SQL solutions via hierarchical clustering and sequence alignment scores"
          reference="S. Yang,  G. Herman, and A. Alawini. DataEd 2022."
          referenceHref="https://doi.org/10.1145/3531072.3535319"
        />
      </React.Fragment>
    ),
  },
];

export default function Research() {
  return (
    <React.Fragment>
      <Head>
        <title>Case Studies | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Case Studies"
        subtitle="Collection of educational research and case studies using PrairieLearn"
      />

      <div className="container-fluid py-4">
        <div className="container-md">
          <Accordion alwaysOpen>
            {Papers.map((faq, i) => (
              <Accordion.Item key={i.toString()} eventKey={i.toString()}>
                <Accordion.Header>
                  <strong>{faq.title}</strong>
                </Accordion.Header>
                <Accordion.Body>{faq.contents}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="container-md">
          <h4 className="h4">Contribute to this page</h4>
          <p>
            Do you have a paper that should be included on this page? Please
            send us the appropriate information at{" "}
            <a href="mailto:hello@prairielearn.com">hello@prairielearn.com</a>.
          </p>
        </div>
      </div>

      <BannerCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
        href="https://us.prairielearn.com/pl/course_instance/4970"
      />
    </React.Fragment>
  );
}
