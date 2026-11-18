import React from "react";
import Head from "next/head";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

import { PageBanner } from "../../components/Banner";
import { BannerCTA } from "../../components/CallToActionBanner";

export interface ResearchCardProps {
  title: string;
  reference: string;
  referenceHref: string;
}

interface ResearchSearchContextValue {
  category: string;
  query: string;
}

const ResearchSearchContext = React.createContext<ResearchSearchContextValue>({
  category: "",
  query: "",
});

const normalizeSearchText = (value: string) => value.trim().toLocaleLowerCase();

const paperMatchesSearch = (
  title: string,
  reference: string,
  category: string,
  query: string,
) =>
  normalizeSearchText(`${title} ${reference} ${category}`).includes(
    normalizeSearchText(query),
  );

export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  referenceHref,
  reference,
}) => {
  const { category, query } = React.useContext(ResearchSearchContext);

  if (!paperMatchesSearch(title, reference, category, query)) {
    return null;
  }

  return (
    <ul>
      <li>
        {title},{" "}
        <Link href={referenceHref} target="_blank">
          {reference}
        </Link>
      </li>
    </ul>
  );
};

const categoryMatchesSearch = (
  contents: React.ReactElement<{ children?: React.ReactNode }>,
  category: string,
  query: string,
) => {
  if (
    !query ||
    normalizeSearchText(category).includes(normalizeSearchText(query))
  ) {
    return true;
  }

  return React.Children.toArray(contents.props.children).some(
    (child) =>
      React.isValidElement<ResearchCardProps>(child) &&
      paperMatchesSearch(
        child.props.title,
        child.props.reference,
        category,
        query,
      ),
  );
};

const Papers = [
  {
    title: "Computer-based assessments with randomization and instant feedback",
    contents: (
      <React.Fragment>
        <ResearchCard
          title={
            "Actually achieving “A’s for All” (as time and interest allow)"
          }
          reference="D. Garcia, A. Fox, P. Lopez, M. Silva, C. Zilles, and E. Ambrosio. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770761.3777051"
        />

        <ResearchCard
          title="A generalized framework for describing question randomization"
          reference="R. Mahinpei, I. Xu, S. Wolfman, and F. Moosvi. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626253.3635599"
        />

        <ResearchCard
          title="How much deadline flexibility on formative assessments should we be giving to our students?"
          reference="C. Zhao, M. West, and M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/43372"
        />

        <ResearchCard
          title="A’s for All (as time and interest allow)"
          reference="D. Garcia, A. Fox, S. Russell, E. Ambrosio, N. Terrell, M. Silva, M. West, C. Zilles, and F. Shakir. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569847"
        />

        <ResearchCard
          title="Integrating diverse learning tools using the PrairieLearn platform"
          reference="M. West, N. Walters, M. Silva, T. Bretl, and C. Zilles. SPLICE workshop at SIGCSE 2021."
          referenceHref="https://cssplice.github.io/SIGCSE21/proc/SPLICE2021_SIGCSE_paper_10.pdf"
        />

        <ResearchCard
          title="A quantitative analysis of when students choose to grade questions on computerized exams with multiple attempts"
          reference="A. Verma, T. Bretl, M. West, and C. Zilles. L@S 2020."
          referenceHref="http://dx.doi.org/10.1145/3386527.3406740"
        />

        <ResearchCard
          title="Caches as an example of machine-gradable exam questions for complex engineering systems"
          reference="S. Mahmood, M. Zhao, O. Khan, and G. Herman. FIE 2020."
          referenceHref="https://ieeexplore.ieee.org/document/9273822"
        />

        <ResearchCard
          title="A simple and efficient markup tool to generate drawing-based online assessments"
          reference="N. Nytko, M. West, and M. Silva. ASEE 2020."
          referenceHref="https://peer.asee.org/a-simple-and-efficient-markup-tool-to-generate-drawing-based-online-assessments"
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
          title="Algorithmic grading strategies for computerized drawing assessments"
          reference="M. Silva and M. West. ASEE 2017."
          referenceHref="https://peer.asee.org/algorithmic-grading-strategies-for-computerized-drawing-assessments"
        />

        <ResearchCard
          title="PrairieLearn: Mastery-based online problem solving with adaptive scoring and recommendations driven by machine learning"
          reference="M. West, G. L. Herman, and C. Zilles. ASEE 2015."
          referenceHref="https://peer.asee.org/24575"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Retrieval practice and second-chance testing",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="How students focus their studying when offered exam re-takes"
          reference="L. Flygare, D. H. Smith, G. Herman, M. Fowler, and C. Zilles. ITiCSE 2026."
          referenceHref="https://doi.org/10.1145/3803400.3809349"
        />

        <ResearchCard
          title="Frequent testing vs. second-chance testing: An exploration"
          reference="G. Herman, K. Patel, C. Emeka, C. Zilles, and M. West. ICER 2025."
          referenceHref="https://doi.org/10.1145/3702652.3744210"
        />

        <ResearchCard
          title="Exploring different specifications grading policies"
          reference="I. dos Santos Montagner, R. C. Ferrão, C. Zilles, and M. Silva. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641554.3701925"
        />

        <ResearchCard
          title="Evaluating mastery-oriented grading in an intensive CS1 course"
          reference="I. dos Santos Montagner, R. C. Ferrão, A. Kurauchi, M. Silva, and C. Zilles. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630841"
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
          reference="D. H. Smith, C. Emeka, M. Fowler, M. West, and C. Zilles. SIGCSE 2023."
        />

        <ResearchCard
          title="First try, no (autograder) warm up: motivating quality coding submissions"
          referenceHref="https://peer.asee.org/43714"
          reference="L. Butler and G. Herman. ASEE 2023."
        />

        <ResearchCard
          title="Students’ perceptions and behavior related to second-chance testing"
          reference="C. Emeka, T. Bretl, G. Herman, M. West, and C. Zilles. FIE 2021."
          referenceHref="https://ieeexplore.ieee.org/document/9637173"
        />

        <ResearchCard
          title="Comparison of grade replacement and weighted averages for second-chance exams"
          reference="G. Herman, Z. Cai, T. Bretl, C. Zilles, and M. West. ICER 2020."
          referenceHref="https://dl.acm.org/doi/10.1145/3372782.3406260"
        />

        <ResearchCard
          title="Frequent mastery testing with second-chance exams leads to enhanced student learning in undergraduate engineering"
          reference="J. W. Morphew, M. Silva, G. Herman, and M. West. Applied Cognitive Psychology 2020 (published online 2019)."
          referenceHref="https://doi.org/10.1002/acp.3605"
        />

        <ResearchCard
          title="Second-chance testing course policies and student behavior"
          reference="G. Herman, K. Varghese, and C. Zilles. FIE 2019."
          referenceHref="https://ieeexplore.ieee.org/document/9028490"
        />
      </React.Fragment>
    ),
  },

  {
    title: "Computer-based testing centers",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Experiences with computer-based testing (CBT)"
          reference="J. Sosnowski, A. Fox, D. Garcia, F. Moosvi, M. Silva, M. West, and C. Zilles. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641555.3705092"
        />

        <ResearchCard
          title="Do centralized testing centers influence test anxiety for engineering students?"
          reference="C. Emeka, M. West, J. Sosnowski, G. Herman, C. Zilles, and M. Silva. ASEE 2025."
          referenceHref="https://doi.org/10.18260/1-2--56303"
        />

        <ResearchCard
          title="Measuring test anxiety of two computerized exam approaches"
          reference="C. Emeka, C. Zilles, J. Sosnowski, M. West, G. Herman, and M. Silva. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641554.3701964"
        />

        <ResearchCard
          title="One solution to addressing assessment logistical problems: An experience setting up and operating an in-person testing center"
          reference="K. Downey, K. Miller, M. Silva, and C. Zilles. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630902"
        />

        <ResearchCard
          title="Reflections on 10 years of operating a computer-based testing facility: Lessons learned, best practices"
          reference="J. Sosnowski, J. Baker, O. Arnold, M. Silva, D. Mussulman, C. Zilles, and M. West. ASEE 2024."
          referenceHref="https://peer.asee.org/reflections-on-10-years-of-operating-a-computer-based-testing-facility-lessons-learned-best-practices"
        />

        <ResearchCard
          title="Unpacking the influence of computer-based testing modalities on student study behaviour and performance"
          reference="R. Gulati, C. Zilles, M. West, and M. Silva. EDULEARN 2024."
          referenceHref="https://mfsilva22.github.io/pages/papers/GULATI2024UNP.pdf"
        />

        <ResearchCard
          title="Computerized exam reviews: In-person and individualized feedback to students after a computerized exam"
          reference="W. L. Chang, M. West, C. Zilles, D. Mussulman, and C. Sacris. ASEE 2020."
          referenceHref="https://peer.asee.org/computerized-exam-reviews-in-person-and-individualized-feedback-to-students-after-a-computerized-exam"
        />

        <ResearchCard
          title="Every university should have a computer-based testing facility"
          reference="C. Zilles, M. West, G. Herman, and T. Bretl. CSEDU 2019."
          referenceHref="https://zilles.cs.illinois.edu/papers/zilles_csedu_cbtf_2019.pdf"
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
          title="Measuring revealed student scheduling preferences using constrained discrete choice models"
          reference="J. Bailey, M. West, and C. Zilles. ASEE 2017."
          referenceHref="https://peer.asee.org/measuring-revealed-student-scheduling-preferences-using-constrained-discrete-choice-models"
        />

        <ResearchCard
          title="Modeling student scheduling preferences in a computer-based testing facility"
          reference="M. West and C. Zilles. L@S 2016."
          referenceHref="http://dx.doi.org/10.1145/2876034.2893441"
        />

        <ResearchCard
          title="Computerized testing: A vision and initial experiences"
          reference="C. Zilles, R. T. Deloatch, J. Bailey, B. B. Khattar, W. Fagen, C. Heeren, D. Mussulman, and M. West. ASEE 2015."
          referenceHref="https://peer.asee.org/computerized-testing-a-vision-and-initial-experiences"
        />

        <ResearchCard
          title="Student behavior in selecting an exam time in a computer-based testing facility"
          reference="C. Zilles, M. West, and D. Mussulman. ASEE 2016."
          referenceHref="https://peer.asee.org/student-behavior-in-selecting-an-exam-time-in-a-computer-based-testing-facility"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Investigating cheating during computer-based testing",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="WIP: Low effort, high grades? Benchmarking LLMs on various engineering assignments"
          reference="Y. Chen, S. Eggl, A. Alawini, M. Silva, M. Fowler, A. Umrawal, and M. Ornik. ASEE 2026."
          referenceHref="https://doi.org/10.18260/1-2--61062"
        />

        <ResearchCard
          title="A case for Bayesian grading"
          reference="C. Zilles, C. Zhao, Y. Chen, E. M. Matthews, and M. West. SIGCSE Virtual 2024."
          referenceHref="https://doi.org/10.1145/3649165.3703624"
        />

        <ResearchCard
          title="Plagiarism in the age of generative AI: Cheating method change and learning loss in an intro to CS course"
          reference="B. Chen, C. M. Lewis, M. West, and C. Zilles. L@S 2024."
          referenceHref="https://doi.org/10.1145/3657604.3662046"
        />

        <ResearchCard
          title="Comparing the security of three proctoring regimens for Bring-Your-Own-Device exams"
          reference="R. Gulati, M. West, C. Zilles, and M. Silva. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630809"
        />

        <ResearchCard
          title="Comparing student outcomes in online vs. in-person sections of an on-campus computer science course"
          reference="R. Gulati, M. West, C. Zilles, and M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/43276"
        />

        <ResearchCard
          title="Are we fair? Quantifying score impacts of computer science exams with randomized question pools"
          reference="M. Fowler, D. H. Smith, C. Emeka, M. West, and C. Zilles. SIGCSE 2022."
          referenceHref="https://dl.acm.org/doi/10.1145/3478431.3499388"
        />

        <ResearchCard
          title="Learning to cheat: Quantifying changes in score advantage of unproctored assessments over time"
          reference="B. Chen, S. Azad, M. Fowler, M. West, and C. Zilles. L@S 2020."
          referenceHref="https://dl.acm.org/doi/10.1145/3386527.3405925"
        />

        <ResearchCard
          title="Measuring the score advantage on asynchronous exams in an undergraduate CS course"
          reference="M. Silva, M. West, and C. Zilles. SIGCSE 2020."
          referenceHref="https://doi.org/10.1145/3328778.3366859"
        />

        <ResearchCard
          title="Analyzing the decline of student scores over time in self‐scheduled asynchronous exams"
          reference="B. Chen, M. West, and C. Zilles. Journal of Engineering Education, 2019."
          referenceHref="https://doi.org/10.1002/jee.20292"
        />

        <ResearchCard
          title="How much randomization is needed to deter collaborative cheating on asynchronous exams?"
          reference="B. Chen, M. West, and C. Zilles. L@S 2018."
          referenceHref="https://dl.acm.org/doi/10.1145/3231644.3231664"
        />

        <ResearchCard
          title="Do performance trends suggest wide-spread collaborative cheating on asynchronous exams?"
          reference="B. Chen, M. West, and C. Zilles. L@S 2017."
          referenceHref="https://dl.acm.org/doi/10.1145/3051457.3051465"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Autograding, AI, and open-ended questions",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Consistently good vs. occasionally great: A rubric for open-ended feedback quality from humans and machines"
          reference="B. Chen, R. Haldar, M. Fowler, M. West, and C. Zilles. arXiv, 2026."
          referenceHref="https://arxiv.org/abs/2608.21850"
        />

        <ResearchCard
          title="Using LLM to autograde diagrams"
          reference="R. C. Ferrão, I. dos Santos Montagner, M. Silva, and C. Zilles. ITiCSE 2026."
          referenceHref="https://doi.org/10.1145/3803401.3811979"
        />

        <ResearchCard
          title="Exploring intentional ambiguity to exploit generative AI grading"
          reference="J. Gao, L. Flygare, and C. Zilles. AIED 2026."
          referenceHref="https://doi.org/10.1007/978-3-032-29788-4_59"
        />

        <ResearchCard
          title="You don’t need a data center to Explain in Plain English! Comparing open-source and proprietary LLMs for EiPE grading"
          reference="E. Jiang and M. Fowler. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770762.3772560"
        />

        <ResearchCard
          title="Automated grading of handwritten mathematics using vision-capable LLMs"
          reference="J. Levine, M. Aenlle, C. Zilles, M. West, and M. Silva. AIED 2026."
          referenceHref="https://arxiv.org/abs/2605.19043"
        />

        <ResearchCard
          title="AI-supported grading and rubric refinement for free response questions"
          reference="C. Zhao, M. Fowler, Y. Gertner, S. Poulsen, M. West, and M. Silva. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770762.3772545"
        />

        <ResearchCard
          title="A two-stage LLM pipeline for handwritten mathematics autograding"
          reference="J. Levine, M. West, and M. Silva. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770761.3777208"
        />

        <ResearchCard
          title="Evaluating AI models for autograding Explain in Plain English questions: Challenges and considerations"
          reference="M. Fowler, C. Emeka, B. Chen, D. Smith, M. West, and C. Zilles. ACM TiiS 2025."
          referenceHref="https://doi.org/10.1145/3774752"
        />

        <ResearchCard
          title="LLM agents for verifiable question generation and grading"
          reference="J. Levine, M. West, and M. Silva. AIED 2025."
          referenceHref="https://doi.org/10.1007/978-3-031-99264-3_22"
        />

        <ResearchCard
          title="Language models are few-shot graders"
          reference="C. Zhao, M. Silva, and S. Poulsen. AIED 2025."
          referenceHref="https://doi.org/10.1007/978-3-031-98459-4_1"
        />

        <ResearchCard
          title="Autograding mathematical induction proofs with natural language processing"
          reference="C. Zhao, M. Silva, and S. Poulsen. International Journal of Artificial Intelligence in Education, 2025."
          referenceHref="https://doi.org/10.1007/s40593-025-00498-2"
        />

        <ResearchCard
          title="Expanding the horizons of autograding: Innovative questions at UBC"
          reference="J. Niu, J. Wong, C. Lake, J. Rahardjo, H. Zarkoob, O. Ola, P. Belleville, K. Mochetti, M. Allen, F. Moosvi, and S. Wolfman. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641554.3701892"
        />

        <ResearchCard
          title="Evaluating Large Language Model code generation as an autograding mechanism for “Explain in Plain English” questions"
          reference="D. H. Smith and C. Zilles. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626253.3635542"
        />

        <ResearchCard
          title="Counting the trees in the forest: Evaluating prompt segmentation for classifying code comprehension level"
          reference="D. H. Smith, M. Fowler, P. Denny, and C. Zilles. ITiCSE 2025."
          referenceHref="https://arxiv.org/abs/2503.12216"
        />

        <ResearchCard
          title="ReDefining code comprehension: Function naming as a mechanism for evaluating code comprehension"
          reference="D. H. Smith, M. Fowler, P. Denny, and C. Zilles. ITiCSE 2025."
          referenceHref="https://arxiv.org/abs/2503.12207"
        />

        <ResearchCard
          title="Am I wrong, or is the autograder wrong? Effects of AI grading mistakes on learning"
          reference="T. Li, S. Hsu, M. Fowler, Z. Zhang, C. Zilles, and K. Karahalios. ICER 2023."
          referenceHref="https://doi.org/10.1145/3568813.3600124"
        />

        <ResearchCard
          title="Peer-grading “Explain in Plain English”: A Bayesian calibration method for categorical answers"
          reference="B. Chen, M. West, and C. Zilles. SIGCSE 2022."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3478431.3499409"
        />

        <ResearchCard
          title="Autograding Explain in Plain English questions using NLP"
          reference="M. Fowler, B. Chen, S. Azad, M. West, and C. Zilles. SIGCSE 2021."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3408877.3432539"
        />

        <ResearchCard
          title="How should we ‘Explain in Plain English’? Voices from the community"
          reference="M. Fowler, B. Chen, and C. Zilles. ICER 2021."
          referenceHref="https://doi.org/10.1145/3446871.3469738"
        />

        <ResearchCard
          title="Strategies for deploying unreliable AI graders in high-transparency high-stakes exams"
          reference="S. Azad, B. Chen, M. Fowler, M. West, and C. Zilles. AIED 2020."
          referenceHref="https://doi.org/10.1007/978-3-030-52237-7_2"
        />

        <ResearchCard
          title="A validated scoring rubric for Explain-in-Plain-English questions"
          reference="B. Chen, S. Azad, R. Haldar, M. West, and C. Zilles. SIGCSE 2020."
          referenceHref="https://dl.acm.org/doi/abs/10.1145/3328778.3366879"
        />

        <ResearchCard
          title="An R autograder for PrairieLearn"
          reference="D. Eddelbuettel and A. Barbehenn. arXiv, 2020."
          referenceHref="https://arxiv.org/abs/2003.06500"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Computer-based collaborative learning",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Implementing a tool for structured roles in hybrid collaborative learning environments"
          reference="C. Zhao, Y. Chen, K. Feng, G. Herman, M. West, and M. Silva. ASEE 2025."
          referenceHref="https://peer.asee.org/56751"
        />

        <ResearchCard
          title="Exploring computing students' sense of belonging before and after a collaborative learning course"
          reference="M. Fong, S. Huang, A. Alawini, M. Silva, and G. Herman. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630850"
        />

        <ResearchCard
          title="Board 254: Developing tools, pedagogies, and policies for computer-based collaborative learning activities"
          reference="M. Fong, L. Butler, A. Alawini, G. Herman, and M. Silva. ASEE 2023."
          referenceHref="https://peer.asee.org/42700"
        />

        <ResearchCard
          title="An analytic comparison of student-scheduled and instructor-scheduled collaborative learning in online contexts"
          reference="G. Herman, Y. Jiang, Y. Jiang, S. Poulsen, M. West, and M. Silva. ASEE 2022."
          referenceHref="https://peer.asee.org/41212"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Open Educational Resources (OER)",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Enabling open educational resource adoption through integrated sharing in PrairieLearn"
          reference="S. Poulsen, G. Herman, M. Silva, M. Fowler, D. Smith, L. Porter, N. Ritschel, C. Zilles, and M. West. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770762.3772503"
        />

        <ResearchCard
          title="“I don’t gamble to make my livelihood”: Understanding the incentives for, needs of, and motivations surrounding open educational resources in computing"
          reference="M. Fowler, D. H. Smith IV, B. Chen, and C. Zilles. ICER 2023."
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
          title="On generating and validating erroneous examples in CS1 using LLMs"
          reference="Y. Chen, C. Zhao, J. Levine, K. Feng, M. Fowler, and M. Silva. AIED 2026."
          referenceHref="https://doi.org/10.1007/978-3-032-29760-0_14"
        />

        <ResearchCard
          title="Exploring LLMs for generating erroneous examples in CS1"
          reference="Y. Chen, C. Zhao, K. Feng, J. Zhang, V. Malhotra, and M. Silva. SIGCSE 2026."
          referenceHref="https://doi.org/10.1145/3770761.3777210"
        />

        <ResearchCard
          title="A complete redesign of CS1 for engineering students"
          reference="Y. Chen, C. Zhao, K. Feng, M. Beckman, and M. Silva. ASEE 2025."
          referenceHref="https://peer.asee.org/55349"
        />

        <ResearchCard
          title="On teaching novices computational thinking by utilizing large language models within assessments"
          reference="M. Hassan, Y. Chen, P. Denny, and C. Zilles. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641554.3701906"
        />

        <ResearchCard
          title="Dynamic, randomizable, autogradable visual programming simulations for Python using PrairieLearn"
          reference="N. Chulo, G. Classon, A. Chiu, D. Garcia, A. Fox, and N. Norouzi. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641555.3705169"
        />

        <ResearchCard
          title="An interactive tool for randomized autogradable graph assessments"
          reference="E. Hasanov, D. Ahluwalia, D. Garcia, N. Norouzi, and A. Fox. SIGCSE 2025."
          referenceHref="https://doi.org/10.1145/3641555.3705123"
        />

        <ResearchCard
          title="Evaluating how novices utilize debuggers and code execution to understand code"
          reference="M. Hassan, G. Zeng, and C. Zilles. ICER 2024."
          referenceHref="https://doi.org/10.1145/3632620.3671126"
        />

        <ResearchCard
          title="Discovering, autogenerating, and evaluating distractors for Python Parsons problems in CS1"
          reference="D. Smith and C. Zilles. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569801"
        />

        <ResearchCard
          title="On students’ ability to resolve their own tracing errors through code execution"
          reference="M. Hassan and C. Zilles. SIGCSE 2022."
          referenceHref="https://doi.org/10.1145/3478431.3499400"
        />

        <ResearchCard
          title="Reevaluating the relationship between explaining, tracing, and writing skills in CS1 in a replication study"
          reference="M. Fowler, D. Smith, M. Hassan, S. Poulsen, M. West, and C. Zilles. Computer Science Education 2022."
          referenceHref="https://doi.org/10.1080/08993408.2022.2079866"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Applications in embedded systems and software engineering",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Investigating the impact of automated code quality feedback in an embedded systems course"
          reference="R. C. Ferrão, I. dos Santos Montagner, R. Azevedo, M. Silva, and C. Zilles. Koli Calling 2025."
          referenceHref="https://doi.org/10.1145/3769994.3770035"
        />

        <ResearchCard
          title="Embedded-check: A code quality tool for automatic firmware verification"
          reference="R. C. Ferrão, I. dos Santos Montagner, M. Silva, C. Zilles, and R. Azevedo. ITiCSE 2024."
          referenceHref="https://doi.org/10.1145/3649217.3653577"
        />

        <ResearchCard
          title="Micro-specialization as a solution to open-ended project"
          reference="R. C. Ferrão, I. dos Santos Montagner, M. Silva, C. Zilles, and R. Azevedo. SIGCSE Virtual 2024."
          referenceHref="https://doi.org/10.1145/3649409.3691077"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Applications in engineering, mathematics, and data science",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Teaching machine learning with repeated practice and rapid feedback in PrairieLearn"
          reference="F. Fund and F. Moosvi. SIGCSE Virtual 2026 (accepted)."
          referenceHref="https://sigcsevirtual2026.acm.org/track/sigcse-virtual-2026-papers"
        />

        <ResearchCard
          title="Paper or silicon: Assessing student understanding in a computer-based testing environment using PrairieLearn"
          reference="J. Ardister, G. Recktenwald, and S. Roccabianca. ASEE 2024."
          referenceHref="https://doi.org/10.18260/1-2--47828"
        />

        <ResearchCard
          title="Effects of integrating computational tools into an introductory engineering mechanics course"
          reference="W. Chang, S. Ok, M. West, S. Hilgenfeldt, and M. Silva. ASEE 2024."
          referenceHref="https://peer.asee.org/effects-of-integrating-computational-tools-into-an-introductory-engineering-mechanics-course"
        />

        <ResearchCard
          title="Measuring the impact of a computational linear algebra course on students’ exam performance in a subsequent numerical methods course"
          reference="H. Chen, M. West, S. Hilgenfeldt, and M. Silva. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569778"
        />

        <ResearchCard
          title="Innovating and modernizing a linear algebra class through teaching computational skills"
          reference="M. Silva, P. Hieronymi, M. West, N. Nytko, A. Deshpande, J. Chuang, and S. Hilgenfeldt. ASEE 2022."
          referenceHref="https://peer.asee.org/40766"
        />

        <ResearchCard
          title="A case study of early performance prediction and intervention in a computer science course"
          reference="M. Silva, E. Shaffer, N. Nytko, and J. Amos. ASEE 2020."
          referenceHref="https://doi.org/10.18260/1-2--33977"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Applications in Discrete Math and Algorithms courses",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Disentangling the learning gains from reading a book chapter and completing Proof Blocks problems"
          reference="S. Poulsen, Y. Gertner, H. Chen, B. Cosman, M. West, and G. Herman. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630831"
        />

        <ResearchCard
          title="Solving Proof Block problems using Large Language Models"
          reference="S. Poulsen, S. Sarsa, J. Prather, J. Leinonen, B. Becker, A. Hellas, P. Denny, and B. Reeves. SIGCSE 2024."
          referenceHref="https://doi.org/10.1145/3626252.3630928"
        />

        <ResearchCard
          title="Using context-free grammars to scaffold and automate feedback in precise mathematical writing"
          reference="J. Xia and C. Zilles. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569728"
        />

        <ResearchCard
          title="Efficiency of learning from Proof Blocks versus writing proofs"
          reference="S. Poulsen, Y. Gertner, B. Cosman, M. West, and G. Herman. SIGCSE 2023."
          referenceHref="https://doi.org/10.1145/3545945.3569797"
        />

        <ResearchCard
          title="Efficient feedback and partial credit grading for Proof Blocks problems"
          reference="S. Poulsen, S. Kulkarni, G. Herman, and M. West. AIED 2023."
          referenceHref="https://doi.org/10.1007/978-3-031-36272-9_41"
        />

        <ResearchCard
          title="Proof Blocks: autogradable scaffolding activities for learning to write proofs"
          reference="S. Poulsen, M. Viswanathan, G. Herman, and M. West. ITiCSE 2022."
          referenceHref="https://doi.org/10.1145/3502718.3524774"
        />

        <ResearchCard
          title="Benchmarking partial credit grading algorithms for Proof Blocks problems"
          reference="S. Poulsen, S. Kulkarni, G. Herman, and M. West. AIED 2022."
          referenceHref="https://doi.org/10.1007/978-3-031-11647-6_34"
        />

        <ResearchCard
          title="Evaluating Proof Blocks Problems as Exam Questions"
          reference="S. Poulsen, M. Viswanathan, G. Herman, and M. West. ICER 2021."
          referenceHref="https://doi.org/10.1145/3446871.3469741"
        />
      </React.Fragment>
    ),
  },
  {
    title: "Applications in Database Systems courses",
    contents: (
      <React.Fragment>
        <ResearchCard
          title="Uncovering patterns of SQL errors in student assignments: A comparative analysis of different assignment types"
          reference="S. Yang, Z. Li, G. Herman, K. Cunningham, and A. Alawini. FIE 2023."
          referenceHref="https://doi.org/10.1109/FIE58773.2023.10343207"
        />

        <ResearchCard
          title="Comparison of student learning outcomes among SQL problem-solving patterns"
          reference="S. Yang, G. Herman, and A. Alawini. FIE 2023."
          referenceHref="https://doi.org/10.1109/FIE58773.2023.10343395"
        />

        <ResearchCard
          title="Mining SQL problem-solving patterns using advanced sequence processing algorithms"
          reference="S. Yang, G. Herman, and A. Alawini. DataEd 2023."
          referenceHref="https://doi.org/10.1145/3596673.3596973"
        />

        <ResearchCard
          title="Analyzing student SQL solutions via hierarchical clustering and sequence alignment scores"
          reference="S. Yang, G. Herman, and A. Alawini. DataEd 2022."
          referenceHref="https://doi.org/10.1145/3531072.3535319"
        />

        <ResearchCard
          title="Insights from student solutions to MongoDB homework problems"
          reference="R. Alkhabaz, S. Poulsen, M. Chen, and A. Alawini. ITiCSE 2021."
          referenceHref="https://doi.org/10.1145/3430665.3456308"
        />

        <ResearchCard
          title="Analyzing patterns in student SQL solutions via Levenshtein edit distance"
          reference="S. Yang, Z. Wei, G. Herman, and A. Alawini. L@S 2021."
          referenceHref="https://doi.org/10.1145/3430895.3460979"
        />

        <ResearchCard
          title="A Quantitative analysis of student solutions to graph database queries"
          reference="M. Chen, S. Poulsen, R. Alkhabaz, and A. Alawini. SIGCSE 2021."
          referenceHref="https://doi.org/10.1145/3408877.3439700"
        />

        <ResearchCard
          title="Insights from student solutions to SQL homework problems"
          reference="S. Poulsen, L. Butler, A. Alawini, and G. Herman. ITiCSE 2020."
          referenceHref="https://doi.org/10.1145/3341525.3387391"
        />
      </React.Fragment>
    ),
  },
];

export default function Research() {
  const [query, setQuery] = React.useState("");
  const normalizedQuery = normalizeSearchText(query);
  const visiblePapers = Papers.map((paper, index) => ({
    ...paper,
    originalIndex: index,
  })).filter((paper) =>
    categoryMatchesSearch(paper.contents, paper.title, normalizedQuery),
  );

  return (
    <React.Fragment>
      <Head>
        <title>Research | PrairieLearn</title>
      </Head>

      <PageBanner
        title="Research"
        subtitle="Educational research and case studies using PrairieLearn"
      />

      <div className="container-fluid py-4">
        <div className="container-md">
          <label className="form-label" htmlFor="research-search">
            Search publications
          </label>
          <input
            className="form-control mb-4"
            id="research-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic, author, or venue"
            type="search"
            value={query}
          />

          {visiblePapers.length > 0 ? (
            <Accordion
              alwaysOpen
              defaultActiveKey={
                normalizedQuery
                  ? visiblePapers.map((paper) => paper.originalIndex.toString())
                  : undefined
              }
              key={normalizedQuery || "all-publications"}
            >
              {visiblePapers.map((paper) => {
                const eventKey = paper.originalIndex.toString();

                return (
                  <Accordion.Item key={eventKey} eventKey={eventKey}>
                    <Accordion.Header>
                      <strong>{paper.title}</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ResearchSearchContext.Provider
                        value={{
                          category: paper.title,
                          query: normalizedQuery,
                        }}
                      >
                        {paper.contents}
                      </ResearchSearchContext.Provider>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          ) : (
            <p>No publications match your search.</p>
          )}
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
