import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { ResearchCard } from "../../components/ResearchCard";
import { Heading } from "../../components/Heading";

import styles from "./index.module.scss";

export default function Assessment() {
  return (
    <React.Fragment>
      <Head>
        <title>Case Studies | PrairieLearn</title>
      </Head>
      <PageBanner
        title="Case Studies"
        subtitle="Collection of educational research and case studies using PrairieLearn"
      />

      <div className={classnames("container-fluid py-4")}>
        <div className={classnames("container-md py-4", styles.container)}>
          <Heading>Mastery learning</Heading>

          <div className="row my-3">
            <ResearchCard
              title="Introducing PrairieLearn"
              body="This paper introduces PrairieLearn, an online assessment system designed to facilitate learning to mastery. 
              The objectives of this system are to: (1) enable students to practice solving randomized problem variants repeatedly until mastery,
              (2) incentivize students to repeat questions until mastery is achieved, and (3) provide immediate feedback about their current mastery 
              level to the student. The results from using PrairieLearn over several semester in a large engineering course include gains in student 
              mastery, improved student satisfaction when compared to other existing assessment systems and high instructor satisfaction."
              reference="M. West, G. L. Herman, and C. Zilles, 
              'PrairieLearn: Mastery-based online problem solving with adaptive scoring and recommendations driven by machine learning', ASEE 2015."
              paperHref="https://peer.asee.org/prairielearn-mastery-based-online-problem-solving-with-adaptive-scoring-and-recommendations-driven-by-machine-learning"
            />
          </div>

          <div className="row my-3">
            <ResearchCard
              title="Estimating exam difficulty"
              body="To design good assessments, it is useful to have an estimate of the difficulty of a novel exam question before running an exam. 
              This study uses a collection of a few hundred automatic item generators and show that their exam difficulty can be roughly predicted 
              from student performance on the same generator during pre-exam practice. Specifically, we show that the rate that students correctly 
              respond to a generator on an exam is on average within 5% of the correct rate for those students on their last practice attempt."
              reference="B. Chen, M. West, and C. Zilles, 'Predicting the difficulty of automatic item generators on exams from their difficulty on homeworks', 
              L@S 2019."
              paperHref="http://dx.doi.org/10.1145/3330430.3333647"
            />
          </div>

          <div className="row my-3">
            <ResearchCard
              title="Creating fair randomized asynchronous exams"
              body="When exams are run asynchronously, a student can potentially gain an advantage by receiving information about the exam 
              from someone who took it earlier. Generating random exams from pools of problems mitigates this potential advantage, 
              but has the potential to introduce unfairness if the problems in a given pool are of significantly different difficulty. 
              This study presents an algorithm that takes a collection of problem pools and historical data on student performance on these 
              problems and produces exams with reduced variance of difficulty (relative to naive random selection) while maintaining sufficient 
              variation between exams to ensure security."
              reference="P. Sud, M. West, and C. Zilles, 'Reducing difficulty variance in randomized assessments', ASEE 2019."
              paperHref="https://peer.asee.org/reducing-difficulty-variance-in-randomized-assessments"
            />
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className={classnames("container-md py-4", styles.container)}>
          <Heading>Frequent testing and low-state assessments</Heading>

          <div className="row my-3">
            <ResearchCard
              title="Improving overall performance by adding frequent testing with immediate feedback"
              body="This study compares final exam performance from two different semesters,
              one with two midterms and a final exam, and the other with seven bi-weekly quizzes and the same final exam. 
              The bi-weekly quizzes were auto-graded and offered at a computer-based testing facility where students had immediate feedback of their performance. 
              Results indicated that students who completed seven short assessments over the course of the semester scored higher on 
              the final exam than students who completed two longer mid-term examinations, and they were twice as likely to receive a perfect score."
              reference="Morphew J., Silva M., Herman G., West M., 'Frequent mastery testing with second-chance exams leads to enhanced student learning in undergraduate STEM', Applied Cognitive Psychology 2019."
              paperHref="https://doi.org/10.1002/acp.3605"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title=""
              body="coming soon"
              reference="T. Nip, E. Gunter, G. Herman, J. Morphew, M. West, 'Using a Computer-based Testing Facility to Improve Student 
              Learning in a Programming Languages and Compilers Course, (SIGCSE  2018)."
              paperHref="https://dl.acm.org/doi/10.1145/3159450.3159500"
            />
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className={classnames("container-md py-4", styles.container)}>
          <Heading>
            Creating robust and randomized assessments to reduce cheating
          </Heading>

          <div className="row my-3">
            <ResearchCard
              title="Cheating effect in computer-based testing"
              body="This was a controlled crossover experiment designed to
                measure the score advantage that students have when taking the quizzes asynchronously 
                at a computer-based testing facility (i.e., students could select a time to take the exam 
                in a period of 4 days) compared to synchronous quizzes (when all students took the quiz during lecture time). 
              The results indicated that when students took exams asynchronously their scores were, on average, only 3% higher."
              reference="Silva M., Zilles C., West M., 'Measuring the score advantage on asynchronous exams in an undergraduate CS course', SIGCSE 2020."
              paperHref="https://doi.org/10.1145/3328778.3366859"
            />
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className={classnames("container-md py-4", styles.container)}>
          <Heading>Computer-based testing facilities (CBTF)</Heading>

          <div className="row my-4">
            <ResearchCard
              title="A vision for computer-based testing"
              body="This paper describes our first experience building a computerized testing lab and running
              the bulk of a 200-student class’s exams using computerized testing. It
              discusses the mechanics of operating the testing lab, the work required by the instructor to enable
              this approach, and the student response, which has been strongly positive: 75% prefer computerized testing, 12% prefer
              traditional written exams, and 13% had no preference."
              reference="C. Zilles, R. T. Deloatch, J. Bailey, B. B. Khattar, W. Fagen, C. Heeren, D. Mussulman, and M. West, 
              'Computerized testing: A vision and initial experiences', ASEE 2015."
              paperHref="https://peer.asee.org/computerized-testing-a-vision-and-initial-experiences"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title="Students and instructors perceptions regarding computer-based testing"
              body="In this work we explore how the large-scale introduction of computer-based testing has impacted students and instructors. 
              Specifically we discuss the results of multiple rounds of surveys completed by students and faculty."
              reference="C. Zilles, M. West, D. Mussulman, and C. Sacris, 'Student and instructor experiences with a computer-based testing facility', (EDULEARN 2018)."
              paperHref="https://library.iated.org/view/ZILLES2018STU"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title="Lessons learned after running a CBTF for 4 years"
              body="This paper discusses five main aspects of the CBTF: 1) basic operations; 2) precautions taken to maintain secure 
              exam environments; 3) support of students that require testing accommodations like extra time and/or a distraction-reduced environment; 
              4) policies to handle exceptional circumstances with minimal intervention by faculty; and 5) cost of operating the CBTF and how it 
              compares to traditional exams and online services."
              reference="C. Zilles, M. West, D. Mussulman, and T. Bretl, 'Making testing less trying: Lessons learned from operating a computer-based 
              testing facility', FIE 2018."
              paperHref="https://www.computer.org/csdl/proceedings-article/fie/2018/08658551/18j8XOToevm"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title="Every university should have a computer-based testing facility"
              body="This paper summarizes research studies performed over several years in a broad collection of STEM-oriented classes 
              using a computer based-testing facility, indicating improved quality of assessment, ability to test computational skills, 
              and reduced recurring burden of creating assessments. We find the CBTF to be secure, cost-effective, and well liked by faculty,
              who choose to use it semester after semester. We believe that there are many institutions that would similarly 
              benefit from having a Computer-Based Testing Facility."
              reference="C. Zilles, M. West, G. Herman, and T. Bretl, 'Every university should have a computer-based testing facility', (CSEDU 2019)."
              paperHref="https://zilles.cs.illinois.edu/papers/zilles_csedu_cbtf_2019.pdf"
            />
          </div>
        </div>
      </div>

      <div className={classnames("container-fluid py-4")}>
        <div className={classnames("container-md py-4", styles.container)}>
          <Heading>Scheduling of asynchronous exams in a CBTF</Heading>

          <div className="row my-4">
            <ResearchCard
              title="How do students schedule their asynchronous exams?"
              body="coming soon"
              reference="C. Zilles, M. West, and D. Mussulman, 'Student behavior in selecting an exam time in a 
              computer-based testing facility', ASEE 2015."
              paperHref="https://peer.asee.org/student-behavior-in-selecting-an-exam-time-in-a-computer-based-testing-facility"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title="Modeling students scheduling preferences"
              body="coming soon"
              reference="M. West and C. Zilles, 'Modeling student scheduling preferences in a computer-based testing facility', L@S 2016."
              paperHref="http://dx.doi.org/10.1145/2876034.2893441"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title="How to forecast demand at a computer-based testing facility?"
              body="For planning and resource scheduling purposes it is important to be able to forecast demand, and thus it is important to understand 
              what drives student preferences for particular scheduling time slots. This paper presents a general framework for measuring revealed student preferences 
              from actual reservation or scheduling data. The proposed method accurately captures student preferences in real-world scheduling data."
              reference="J. Bailey, M. West, and C. Zilles, 'Measuring revealed student scheduling preferences using 
              constrained discrete choice models', ASEE 2017"
              paperHref="https://peer.asee.org/measuring-revealed-student-scheduling-preferences-using-constrained-discrete-choice-models"
            />
          </div>

          <div className="row my-4">
            <ResearchCard
              title=""
              body="coming soon"
              reference="S. Poulsen, C. J. Anderson, and M. West, 'The relationship between course scheduling and student performance', (CSEDM 2020) "
              paperHref=""
            />
          </div>
        </div>
      </div>

      <DemoCourseCTA
        title="View demo course!"
        subtitle="Explore the demo course to see how this all comes together"
        buttonLabel="Demo course"
      />
    </React.Fragment>
  );
}
