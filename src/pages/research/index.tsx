import React from "react";
import classnames from "classnames";
import Head from "next/head";

import { PageBanner } from "../../components/Banner";
import { DemoCourseCTA } from "../../components/DemoCourse";
import { Heading } from "../../components/Heading";
import { ResearchCard } from "../../components/ResearchCard";
import Stack from "../../components/Stack";

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

      <div className={classnames("container-fluid py-4", styles.container)}>
        <div className="container-md">
          <Stack spacing={5}>
            <Stack spacing={4}>
              <Heading>
                Mastery learning, randomized assessments and instant feedback
              </Heading>

              <ResearchCard
                title="Introducing PrairieLearn"
                referenceHref="https://peer.asee.org/prairielearn-mastery-based-online-problem-solving-with-adaptive-scoring-and-recommendations-driven-by-machine-learning"
                reference="M. West, G. L. Herman, and C. Zilles, 'PrairieLearn: Mastery-based online problem solving with adaptive scoring and recommendations driven by machine learning', ASEE 2015."
              >
                This paper introduces PrairieLearn, an online assessment system
                designed to facilitate learning to mastery. The objectives of
                this system are to: (1) enable students to practice solving
                randomized problem variants repeatedly until mastery, (2)
                incentivize students to repeat questions until mastery is
                achieved, and (3) provide immediate feedback about their current
                mastery level to the student. The results from using
                PrairieLearn over several semester in a large engineering course
                include gains in student mastery, improved student satisfaction
                when compared to other existing assessment systems and high
                instructor satisfaction.
              </ResearchCard>

              <ResearchCard
                title="Improving learning via frequent testing: a CS study case"
                reference="T. Nip, E. Gunter, G. Herman, J. Morphew, M. West, 'Using a Computer-based Testing Facility to Improve Student Learning in a Programming Languages and Compilers Course, (SIGCSE  2018)."
                referenceHref="https://dl.acm.org/doi/10.1145/3159450.3159500"
              >
                Research studies have shown that frequent testing improves
                learning, with bigger impact than rehearsal strategies such as
                re-reading a textbook or re-watching lectures. This study
                presents a quasi-experimental study to examine the effect of
                using frequent, automated examinations in an advanced computer
                science course: in the first semester students were given
                traditional paper-based exams, and in the following semester
                students took frequent computer-based tests, while other aspects
                of the course were held constant. It was observed a significant
                change in the distribution of students&apos; grades with fewer
                students failing the final examination, and proportionately more
                students earning grades of B and C.
              </ResearchCard>

              <ResearchCard
                title="Improving learning via frequent testing: a ME study case"
                reference="Morphew J., Silva M., Herman G., West M., 'Frequent mastery testing with second-chance exams leads to enhanced student learning in undergraduate STEM', Applied Cognitive Psychology 2019."
                referenceHref="https://doi.org/10.1002/acp.3605"
              >
                This study compares final exam performance from two different
                semesters in a mechanical engineering course, the first offering
                including two midterms and a final exam, and the other with
                seven bi-weekly quizzes and the same final exam. The bi-weekly
                quizzes were auto-graded and offered at a computer-based testing
                facility where students had immediate feedback of their
                performance. Results indicated that students who completed seven
                short assessments over the course of the semester scored higher
                on the final exam than students who completed two longer
                mid-term examinations, and they were twice as likely to receive
                a perfect score.
              </ResearchCard>

              <ResearchCard
                title="Estimating exam difficulty"
                reference="B. Chen, M. West, and C. Zilles, 'Predicting the difficulty of automatic item generators on exams from their difficulty on homeworks', L@S 2019."
                referenceHref="http://dx.doi.org/10.1145/3330430.3333647"
              >
                To design good assessments, it is useful to have an estimate of
                the difficulty of a novel exam question before running an exam.
                This study uses a collection of a few hundred automatic item
                generators and show that their exam difficulty can be roughly
                predicted from student performance on the same generator during
                pre-exam practice. Specifically, we show that the rate that
                students correctly respond to a generator on an exam is on
                average within 5% of the correct rate for those students on
                their last practice attempt.
              </ResearchCard>

              <ResearchCard
                title="Comparing second-chance exams grading policies"
                reference="G. L. Herman, K. Varghese, and C. Zilles, 'Second-chance testing course policies and student behavior', FIE 2019."
                referenceHref="https://ieeexplore.ieee.org/document/9028490"
              >
                Second-chance testing, where students are allowed to take a
                second instance of an exam for some form of grade replacement,
                is a less expensive approximation of mastery-based learning that
                can be easily integrated into a broad range of college course
                structures. This paper analyzes three different grading
                policies, where all of them encourage the students to prepare
                adequately for the first-chance exam and review the material
                again before the second-chance exam, if they elect to take it.
                By comparing these different course policies, we show that
                grading policies have a significant effect on whether students
                take second-chance exams. The data also suggests that adding a
                second-chance exam had no effect on student performance or study
                habits for the first-chance exam.
              </ResearchCard>

              <ResearchCard
                title="Second-chance exams and impact on student learning"
                reference="G. L. Herman, Z. Cai, T. Bretl, C. Zilles, and M. West, 'Comparison of grade replacement and weighted averages for second-chance exams', ICER 2020."
                referenceHref="https://dl.acm.org/doi/10.1145/3372782.3406260"
              >
                This quasi-experimental study in a single course compares the
                effect of two grading policies for second-chance exams and the
                effect of increasing the size of the range of dates for students
                taking asynchronous exams. The first grading policy, called
                90-cap, allowed students to optionally take a second-chance exam
                that would fully replace their score on a first-chance exam
                except the second-chance exam would be capped at 90% credit. The
                second grading policy, called 90-10, combined students&apos;
                first- and second-chance exam scores as a weighted average. The
                90-10 policy significantly increased the likelihood that
                marginally competent students would take the second-chance exam.
                Further, our data suggests that students learned more under the
                90-10 policy, providing improved student learning outcomes at no
                cost to the instructor.
              </ResearchCard>

              <ResearchCard
                title="Student perceptions on second-chance exams"
                reference="C. Emeka, T. Bretl, G. Herman, M. West, C. Zilles, 'Students Perceptions and Behavior Related to Second-Chance Testing', FIE 2021."
                referenceHref="https://ieeexplore.ieee.org/document/9637173"
              >
                This study complements previous work by including interviews
                from a diverse group of 23 students that have taken courses that
                use second-chance testing. From the interviews, we sought to
                gain insight into students&apos; views and use of second-chance
                testing. We found that second-chance testing was almost
                universally viewed positively by the students and was frequently
                cited as helping to reduce test takers&apos; anxiety and boost
                their confidence. Overall, we find that the majority of students
                prepare for second-chance exams in desirable ways, but we also
                note ways in which second-chance testing can potentially lead to
                undesirable behaviors including procrastination, overreliance on
                memorization, and attempts to game the system.
              </ResearchCard>

              <ResearchCard
                title="Creating fair randomized asynchronous exams"
                reference="P. Sud, M. West, and C. Zilles, 'Reducing difficulty variance in randomized assessments', ASEE 2019."
                referenceHref="https://peer.asee.org/reducing-difficulty-variance-in-randomized-assessments"
              >
                When exams are run asynchronously, a student can potentially
                gain an advantage by receiving information about the exam from
                someone who took it earlier. Generating random exams from pools
                of problems mitigates this potential advantage, but has the
                potential to introduce unfairness if the problems in a given
                pool are of significantly different difficulty. This study
                presents an algorithm that takes a collection of problem pools
                and historical data on student performance on these problems and
                produces exams with reduced variance of difficulty (relative to
                naive random selection) while maintaining sufficient variation
                between exams to ensure security.
              </ResearchCard>

              <ResearchCard
                title="Investigating fairness in randomized asynchronous exams"
                reference="M. Fowler, D. Smith, C. Emeka, M. West and C. Zilles, 'Are We Fair? Quantifying Score Impacts of Computer Science Exams with Randomized Question Pools', SIGCSE 2022."
                referenceHref="https://dl.acm.org/doi/10.1145/3478431.3499388"
              >
                This study investigates fairness when adopting exam versioning
                and randomization to mitigate cheating during asynchronous
                online exams. It uses a Generalized Partial Credit Model (GPCM)
                Item-Response Theory (IRT) model to fit exams from a for-majors
                data structures course and non-majors CS0 course, both of which
                used randomly generated exams. For all exams, students&apos;
                estimated ability and exam score are strongly correlated (ρ ≥
                0.7), suggesting that the exams are reasonably fair. Through
                simulation, we find that most of the variance in any given
                student&apos;s simulated scores is due to chance and the worst
                of the score impacts from possibly unfair permutations is only
                around 5 percentage points on an exam.
              </ResearchCard>

              <ResearchCard
                title="Student's strategies when completing exams with immediate feedback"
                reference="A. Verma, T. Bretl, M. West, and C. Zilles, 'A quantitative analysis of when students choose to grade questions on computerized exams with multiple attempts', L@S 2020."
                referenceHref="http://dx.doi.org/10.1145/3386527.3406740"
              >
                When taking a computer-based exam using PrairieLearn, students
                have the option to receive immediate feedback on their submitted
                answer or they can defer the feedback and grade questions in
                bulk. This study analyzes data from three courses across two
                semesters, and finds that only a small minority of students used
                the deferred feedback option. Moreover, four main submission
                strategies were identified and they were correlated to
                statistically significant differences in exam scores, however it
                was not clear if some strategies improved outcomes or if
                stronger students tended to prefer certain strategies.
              </ResearchCard>

              <ResearchCard
                title="Auto-grading and immediate feedback of mechanics drawings"
                reference="M. Silva and M. West, 'Algorithmic grading strategies for computerized drawing assessments', ASEE 2017."
                referenceHref="https://peer.asee.org/algorithmic-grading-strategies-for-computerized-drawing-assessments"
              >
                This paper presents an algorithmic framework for auto-grading of
                computer-drawn mechanics diagrams including key functionality
                requirements: (1) ability to provide students with meaningful
                feedback about errors in their diagram, (2) easy to understand
                for problem authors, and require only data which is readily
                available to authors, (3) adaptable to different types of
                drawings or sketches, (4) fast to execute, and (5) robust to
                unexpected or unusual inputs.
              </ResearchCard>

              <ResearchCard
                title="Including a markup tool for drawing-based assessments in PrairieLearn"
                reference="N. Nytko, M. West, and M. Silva, 'A simple and efficient markup tool to generate drawing-based online assessments', ASEE 2020."
                referenceHref="https://peer.asee.org/a-simple-and-efficient-markup-tool-to-generate-drawing-based-online-assessments"
              >
                This paper introduces a simple HTML markup language added to
                PrairieLearn to create automated drawing-based questions,
                allowing students to draw diagrams, graphs and design solutions
                on the computer that are instantly auto-graded by the computer.
                A key advantage of this new tool over previous work is that the
                question author does not need to write any explicit programming
                code. We present results from student interaction data with the
                system, student surveys, and feedback from instructors and
                question authors.
              </ResearchCard>

              <ResearchCard
                title="Machine-graded questions for complex engineering problems"
                reference="S. Mahmood, M. Zhao, O. Khan and G. Herman, 'Caches as an example of machine-gradable exam questions for complex engineering systems', FIE 2020."
                referenceHref="https://ieeexplore.ieee.org/document/9273822"
              >
                Assessing students&apos; knowledge of complex engineering
                systems often requires administering long-form multi-part
                questions with copious extra credit. Creating and grading these
                questions can be time consuming. In this paper, we describe our
                efforts to convert multi-part pencil-and-paper questions into
                parameterized, machine-gradable questions in PrairieLearn.
                Questions were built and parameterized by creating a simulator
                for the engineering system in the back-end of PrairieLearn. A
                comparison of machine-graded PrairieLearn variants of a question
                with human-graded, pencil-and-paper variants of a question
                revealed comparable student performance and partial credit
                awarded. Students revealed an overwhelming preference for the
                machine-graded questions to the pencil-and-paper questions. This
                work provides proof-of-concept for creating meaningful, complex
                assessments in PrairieLearn.
              </ResearchCard>
            </Stack>

            <Stack spacing={4}>
              <Heading>
                Creating robust and randomized assessments to reduce cheating
              </Heading>
              <ResearchCard
                title="Performance trends on asynchronous exams"
                reference="B. Chen, M. West, and C. Zilles, 'Do performance trends suggest wide-spread collaborative cheating on asynchronous exams?', L@S 2017."
                referenceHref="https://dl.acm.org/doi/10.1145/3051457.3051465"
              >
                Using a data set from 29,492 asynchronous exams in CBTF, we
                observed correlations between when a student chooses to take
                their exam within the exam period and their score on the exam.
                Somewhat surprisingly, instead of increasing throughout the exam
                period, which might be indicative of widespread collaborative
                cheating, we find that exam scores decrease throughout the exam
                period. While this could be attributed to weaker students
                putting off exams, this effect holds even when accounting for
                student ability as measured by a synchronous exam taken during
                the same semester.
              </ResearchCard>

              <ResearchCard
                title="Understanding the performance trends during asynchronous exams"
                reference="B. Chen, M. West, and C. Zilles, 'Analyzing the decline of student scores over time in self‐scheduled asynchronous exams', Journal of Engineering Education, 2019."
                referenceHref="https://eric.ed.gov/?id=EJ1254087"
              >
                This study presents a hypothesis that the average exam scores
                decline over the exam period in asynchronous testing is
                primarily due to self-selection effects, where weaker students
                tend to choose exam times later in the exam period, while
                stronger students are more likely to choose earlier times. We
                used data from 31,673 exams over four semesters from six
                undergraduate engineering and computing courses that had both
                synchronous and asynchronous exams. We analyzed student exam
                time choice and asynchronous exam scores, using synchronous exam
                scores in the same course as a control variable. We conclude
                that self-selection effects are primarily responsible for exam
                score declines over time, that exam time selection is unlikely
                to be a useful target for interventions to improve performance,
                and that there is no evidence for widespread collaborative
                cheating in the dataset used in this research.
              </ResearchCard>

              <ResearchCard
                title="How much randomization is needed to reduce cheating?"
                reference="B. Chen, M. West, and C. Zilles, 'How much randomization is needed to deter collaborative cheating on asynchronous exams?', L@S 2018."
                referenceHref="https://dl.acm.org/doi/10.1145/3231644.3231664"
              >
                This paper investigates randomization on asynchronous exams as a
                defense against collaborative cheating. Collaborative cheating
                occurs when one student (the information producer) takes the
                exam early and passes information about the exam to other
                students (the information consumers) that are taking the exam
                later. Using a dataset from 425 students, we identified 5.5% of
                students (on average) as information consumers. These
                information consumers had a significant advantage (13% on
                average) when every student was given the same exam problem but
                that advantage dropped to almost negligible levels (2-3%) when
                students were given a random problem from a pool of two or four
                problems.
              </ResearchCard>

              <ResearchCard
                title="Measuring score advantage during unproctored exams"
                reference="B. Chen, S. Azad, M. Fowler, M. West, and C. Zilles, 'Learning to cheat: Quantifying changes in score advantage of unproctored assessments over time', L@S 2020."
                referenceHref="https://dl.acm.org/doi/10.1145/3386527.3405925"
              >
                This study investigates the score advantage of unproctored exams
                versus proctored exams using a within-subjects design for 510
                students in a CS1 course with 5 proctored exams and 4
                unproctored exams. We found that students scored 3.3 percentage
                points higher on questions on unproctored exams than on
                proctored exams. More interestingly, however, we discovered that
                this score advantage on unproctored exams grew steadily as the
                semester progressed, from around 0 percentage points at the
                start of semester to around 7 percentage points by the end,
                indicating that students were &quot;learning to cheat&quot;. The
                data suggests that both more individuals are cheating and the
                average benefit of cheating is increasing over the course of the
                semester.
              </ResearchCard>

              <ResearchCard
                title="Cheating effect in computer-based testing"
                reference="Silva M., Zilles C., West M., 'Measuring the score advantage on asynchronous exams in an undergraduate CS course', SIGCSE 2020."
                referenceHref="https://doi.org/10.1145/3328778.3366859"
              >
                This was a controlled crossover experiment designed to measure
                the score advantage that students have when taking the quizzes
                asynchronously at a computer-based testing facility (i.e.,
                students could select a time to take the exam in a period of 4
                days) compared to synchronous quizzes (when all students took
                the quiz during lecture time). The results indicated that when
                students took exams asynchronously their scores were, on
                average, only 3% higher.
              </ResearchCard>
            </Stack>

            <Stack spacing={4}>
              <Heading>Computer-based testing facilities (CBTF)</Heading>

              <ResearchCard
                title="A vision for computer-based testing"
                reference="C. Zilles, R. T. Deloatch, J. Bailey, B. B. Khattar, W. Fagen, C. Heeren, D. Mussulman, and M. West, 'Computerized testing: A vision and initial experiences', ASEE 2015."
                referenceHref="https://peer.asee.org/computerized-testing-a-vision-and-initial-experiences"
              >
                This paper describes our first experience building a
                computerized testing lab and running the bulk of a 200-student
                class&apos;s exams using computerized testing. It discusses the
                mechanics of operating the testing lab, the work required by the
                instructor to enable this approach, and the student response,
                which has been strongly positive: 75% prefer computerized
                testing, 12% prefer traditional written exams, and 13% had no
                preference.
              </ResearchCard>

              <ResearchCard
                title="Students and instructors perceptions regarding computer-based testing"
                reference="C. Zilles, M. West, D. Mussulman, and C. Sacris, 'Student and instructor experiences with a computer-based testing facility', (EDULEARN 2018)."
                referenceHref="https://library.iated.org/view/ZILLES2018STU"
              >
                In this work we explore how the large-scale introduction of
                computer-based testing has impacted students and instructors.
                Specifically we discuss the results of multiple rounds of
                surveys completed by students and faculty.
              </ResearchCard>

              <ResearchCard
                title="Lessons learned after running a CBTF for 4 years"
                reference="C. Zilles, M. West, D. Mussulman, and T. Bretl, 'Making testing less trying: Lessons learned from operating a computer-based testing facility', FIE 2018."
                referenceHref="https://www.computer.org/csdl/proceedings-article/fie/2018/08658551/18j8XOToevm"
              >
                This paper discusses five main aspects of the CBTF: 1) basic
                operations; 2) precautions taken to maintain secure exam
                environments; 3) support of students that require testing
                accommodations like extra time and/or a distraction-reduced
                environment; 4) policies to handle exceptional circumstances
                with minimal intervention by faculty; and 5) cost of operating
                the CBTF and how it compares to traditional exams and online
                services.
              </ResearchCard>

              <ResearchCard
                title="Every university should have a computer-based testing facility"
                reference="C. Zilles, M. West, G. Herman, and T. Bretl, 'Every university should have a computer-based testing facility', (CSEDU 2019)."
                referenceHref="https://zilles.cs.illinois.edu/papers/zilles_csedu_cbtf_2019.pdf"
              >
                This paper summarizes research studies performed over several
                years in a broad collection of STEM-oriented classes using a
                computer based-testing facility, indicating improved quality of
                assessment, ability to test computational skills, and reduced
                recurring burden of creating assessments. We find the CBTF to be
                secure, cost-effective, and well liked by faculty, who choose to
                use it semester after semester. We believe that there are many
                institutions that would similarly benefit from having a
                Computer-Based Testing Facility.
              </ResearchCard>

              <ResearchCard
                title="Review sessions post-exam hosted at CBTF"
                reference="W. L. Chang, M. West, C. Zilles, D. Mussulman, and C. Sacris, 'Computerized exam reviews: In-person and individualized feedback to students after a computerized exam', ASEE 2020."
                referenceHref="https://peer.asee.org/computerized-exam-reviews-in-person-and-individualized-feedback-to-students-after-a-computerized-exam"
              >
                Two major concerns reported by students taking computer-based
                testing are: (1) limited access to the assessment after
                completion, and (2) the lack of partial credit. To address these
                concerns, the CBTF adopted a new exam-review service to provide
                in-person feedback to students after the completion of
                computerized exams. These review sessions are conducted by
                course staff and hosted at the CBTF to ensure the integrity of
                exam problems for future use. In this paper, we present the
                design of this review system, including the scheduling
                logistics, software support, course staff training, and guidance
                to students. Detailed data from student usage is reported,
                including survey data of student affect and learning outcome
                changes after review sessions.
              </ResearchCard>
            </Stack>

            <Stack spacing={4}>
              <Heading>Scheduling of asynchronous exams in a CBTF</Heading>

              <ResearchCard
                title="How do students schedule their asynchronous exams?"
                reference="C. Zilles, M. West, and D. Mussulman, 'Student behavior in selecting an exam time in a computer-based testing facility', ASEE 2015."
                referenceHref="https://peer.asee.org/student-behavior-in-selecting-an-exam-time-in-a-computer-based-testing-facility"
              >
                This paper explores the times students choose to take an
                asynchronous exam at CBTF, when students make and change their
                reservations, and the correlation between when students choose
                to take exams and their exam performance. Among our results, we
                find that students prefer to take exams in late afternoon/early
                evening towards the end of the exam period. In addition, we find
                that students frequently re-schedule when they take exams.
                Finally, we find that there is a correlation between how early
                in the exam period a student takes an exam and their score on
                the exam.
              </ResearchCard>

              <ResearchCard
                title="Modeling students scheduling preferences"
                reference="M. West and C. Zilles, 'Modeling student scheduling preferences in a computer-based testing facility', L@S 2016."
                referenceHref="http://dx.doi.org/10.1145/2876034.2893441"
              >
                When undergraduate students are allowed to choose a time slot in
                which to take an exam from a large number of options (e.g., 40),
                the students exhibit strong preferences among the times. We
                found that students can be effectively modelled using
                constrained discrete choice theory to quantify these preferences
                from their observed behavior. The resulting models are suitable
                for load balancing when scheduling multiple concurrent exams and
                for capacity planning given a set schedule.
              </ResearchCard>

              <ResearchCard
                title="How to forecast demand at a computer-based testing facility?"
                reference="J. Bailey, M. West, and C. Zilles, 'Measuring revealed student scheduling preferences using constrained discrete choice models', ASEE 2017"
                referenceHref="https://peer.asee.org/measuring-revealed-student-scheduling-preferences-using-constrained-discrete-choice-models"
              >
                For planning and resource scheduling purposes it is important to
                be able to forecast demand, and thus it is important to
                understand what drives student preferences for particular
                scheduling time slots. This paper presents a general framework
                for measuring revealed student preferences from actual
                reservation or scheduling data. The proposed method accurately
                captures student preferences in real-world scheduling data.
              </ResearchCard>
            </Stack>

            <Stack spacing={4}>
              <Heading>Auto-grading of open-ended questions</Heading>

              <ResearchCard
                title='Validated score rubric for "Explain in plain English" questions'
                reference="B. Chen, S. Azad, R. Haldar, M. West, and C. Zilles, 'A validated scoring rubric for Explain-in-Plain-English questions', SIGCSE 2020."
                referenceHref="https://dl.acm.org/doi/abs/10.1145/3328778.3366879"
              >
                In this paper, we describe a 7-point rubric developed for
                scoring student responses to &quot;Explain in plain
                English&quot; questions, reporting four different ways to
                validate the rubric.
              </ResearchCard>

              <ResearchCard
                title='Auto-grading "Explain in plain English" questions'
                reference="M. Fowler, B. Chen, S. Azad, M. West, and C. Zilles, 'Autograding Explain in Plain English questions using NLP', SIGCSE 2021."
                referenceHref="https://dl.acm.org/doi/abs/10.1145/3408877.3432539"
              >
                Previous research suggests that &quot;Explain in Plain
                English&quot; (EiPE) code reading activities could play an
                important role in the development of novice programmers, but
                EiPE questions aren&apos;t heavily used in introductory
                programming courses because they (traditionally) required manual
                grading. We present what we believe to be the first automatic
                grader for EiPE questions and its deployment in a
                large-enrollment introductory programming course. Based on a set
                of questions deployed on a computer-based exam, we find that our
                implementation has an accuracy of 87–89%, which is similar in
                performance to course teaching assistants trained to perform
                this task and compares favorably to automatic short answer
                grading algorithms developed for other domains.
              </ResearchCard>

              <ResearchCard
                title='Peer-grading "Explain in plain English" questions'
                reference="B. Chen, M. West, and C. Zilles, 'Peer-grading Explain in plain English questions: A Bayesian calibration method for categorical answers, SIGCSE 2022."
                referenceHref="https://dl.acm.org/doi/abs/10.1145/3478431.3499409"
              >
                This paper presents the use of peer grading for &quot;Explain in
                Plain English&quot; (EipE) questions in a large enrollment
                introductory programming course, where students were asked to
                categorize other students&apos; responses. We developed a novel
                Bayesian algorithm for performing calibrated peer grading on
                categorical data, and we used a heuristic grade assignment
                method based on the Bayesian estimates. The peer-grading
                exercises served both as a way to coach students on what is
                expected from EipE questions and as a way to alleviate the
                grading load for the course staff.
              </ResearchCard>
            </Stack>

            <Stack spacing={4}>
              <h2 className="h4">Contribute to this page</h2>
              <p>
                Do you have a paper that should be included on this page? Please
                send us the appropriate information at{" "}
                <a href="mailto:hello@prairielearn.com">
                  hello@prairielearn.com
                </a>
                .
              </p>
            </Stack>
          </Stack>
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
