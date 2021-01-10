---
title: Multiple choice
summary: Allow students to select from multiple options.
---

![](figSimpleQuestion.png)


## Simple example: creating a unique question

A simple implementation of this example only requires writing the `question.html` file. Note that the input parameters, such as the ball mass $m$, the angle $\theta$, the height $h$, the initial velocity $v_0$ and the distance $d$, have fixed values.
Consequently, the correct answer is also fixed.

```html src=simple/question.html
contents
```

This question uses the attribute `none-of-the-above="true"` in the `pl-multiple-choice` element. This attribute adds the option "None of the above" as an alternative among the other options defined by the `pl-answer` tags. The answer "None of the above" will be true (replacing the correct answer) with $50\%$ probability.

Unfortunately, this implementation only creates one unique version of the question, with the same set of parameters and answers.

## More powerful example: creating a question generator

To add variability, we generate the parameters $m$, $\theta$, $h$, $v_0$ and $d$ as python code in `server.py`. Note that these parameters now appear using templating in the `question.html` file. For example, `{{param.m}}` will be replaced by a numerical value for the mass $m$.

```html src=complex/question.html
contents
```

In addition, because the input parameters change, the correct answers and distractors should change accordingly. As such, we also use templating to add the numerical values in `pl-answers`.

Below is an example for the python function `generate` that defines the question parameters:

```python src=complex/server.py
contents
```

The input parameters $m$, $\theta$, $h$, $v_0$ and $d$ are generated using python random functions and stored in the
`data["params"]` dictionary. The choice of using the attribute `none-of-the-above` is selected at random as well. Finally, the correct answer and distractors are computed using the input parameters, and stored in the
`data["params"]` dictionary.

This question generator is now capable of creating many different versions of the same question.

<!--
![](figComplexQuestion.png) -->

## More randomization!

Feeling adventurous? We can add even more variation to this question generator,
by creating the image dynamically using `pl-drawing`, and providing two options for the problem statement, via `{{params.question_text}}`.

```html src=advanced/question.html
contents
```

Let us take a look at one instance of this fully randomized question:

![](figAdvancedQuestion.png)

In addition of the randomized input parameters, the image is dynamically created such that the orientation of the arrow is consistent with the provided angle $\theta$. The image could be easily adapted such that the height of the cliff would also vary with the value of the parameter $h$. Moreover, this question provides the time that takes for the ball to hit the ground, and asks to determine the position where the ball lands. This is an option added in `server.py`, in addition to the original question that asks for the time given the distance. Below in a possible implementation for the python function `generate`:

```python src=advanced/server.py
contents
```
