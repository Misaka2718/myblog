---
title: 解析数论导引
createTime: 2026/01/21
permalink: /basic-numbertheory/
---

Tom M. Apostol

to Analytic Introduction Number Theory

![](images/77ceee4e62a0c4366fa7bf774bb7389650f0bef8c471a06f97f8389986e3e9ec.jpg)

# Undergraduate Texts in Mathematics

Editors

F. W. Gehring P. R. Halmos

Advisory Board C. DePrima I. Herstein J. Kiefer W. LeVeque

Tom M. Apostol

# Introduction to Analytic Number Theory

Springer-Verlag New York Heidelberg Berlin 1976

# Library of Congress Cataloging in Publication Data

Apostol, Tom M.

Introduction to analytic number theory.

(Undergraduate texts in mathematics)

Evolved from a course (Mathema tics 160) offered at the California Institute of Technology during the last 25 years."

Bibliography: p. 329

Includes index.

1. Numbers, Theory of. 2. Arithmetic functions.

3. Numbers, Prime. I. Title.

QA241.A6 512.73 75-37697

All rights reserved.

No part of this book may be translated or reproduced in any form without written permission from Springer-Verlag.

$\circledcirc$ 1976 by Springer-Verlag New York Inc.

Printed in the United States of America

ISBN 0-387-90163-9 Springer-Verlag New York

ISBN 3-540-90163-9 Springer-Verlag Berlin Heidelberg

# Preface

This is the fi rst volume of a two-volume textbook1 which evolved from a course (Mathematics 160) offered at the California Institute of Technology during the last 25 years. It provides an introduction to analytic number theory suitable for undergraduates with some background in advanced calculus, but with no previous knowledge of number theory. Actually, a great deal of the book requires no calculus at all and could profitably be studied by sophisticated high school students.

Number theory is such a vast and rich field that a one-year course cannot do justice to all its parts. The choice of topics included here is intended to provide some variety and some depth. Problems which have fascinated generations of professional and amateur mathematicians are discussed together with some of the techniques for solving them.

One of the goals of this course has been to nurture the intrinsic interest that many young mathematics students seem to have in number theory and to open some doors for them to the current periodical literature. It has been gratifying to note that many of the students who have taken this course during the past 25 years have become professional mathematicians, and some have made notable contributions of their own to number theory. To all of them this book is dedicated.

# Contents

# Historical Introduction

# Chapter 1 The Fundamental Theorem of Arithmetic

1.1 Introduction 13   
1.2 Divisibility 14   
1.3 Greatest common divisor 14   
1.4 Prime numbers 16   
1.5 The fundamental theorem of arithmetic 17   
1.6 The series of reciprocals of the primes 18   
1.7 The Euclidean algorithm 19   
1.8 The greatest common divisor of more than two numbers 20   
Exercises for Chapter 1 21

# Chapter 2 Arithmetical Functions and Dirichlet Multiplication

2.1 Introduction 24   
2.2 The Möbius function $\mu ( n )$ 24   
2.3 The Euler totient function $\varphi ( n )$ 25   
2.4 A relation connecting $\varphi$ and $\mu$ 26   
2.5 A product formula for $\varphi ( n )$ 27   
2.6 The Dirichlet product of arithmetical functions 29   
2.7 Dirichlet inverses and the Möbius inversion formula 30   
2.8 The Mangoldt function $\Lambda ( n )$ 32   
2.9 Multiplicative functions 33   
2.10 Multiplicative functions and Dirichlet multiplication 35   
2.11 The inverse of a completely multiplicative function 36   
2.12 Liouville's function A(n) 37   
2.13 The divisor functions $\pmb { \sigma _ { x } ( n ) }$ 38   
2.14 Generalized convolutions 39   
2.15 Formal power series 41   
2.16 The Bell series of an arithmetical function 42   
2.17 Bell series and Dirichlet multiplication 44   
2.18 Derivatives of arithmetical functions 45   
2.19 The Selberg identity 46   
Exercises for Chapter 2 46

# Chapter 3 Averages of Arithmetical Functions

3.1 Introduction 52   
3.2 The big oh notation. Asymptotic equality of functions 53   
3.3 Euler's summation formula 54   
3.4 Some elementary asymptotic formulas 55   
3.5 The average order of $d ( n )$ 57   
3.6 The average order of the divisor functions ${ \pmb \sigma } _ { \alpha } ( n )$ 60   
3.7 The average order of $\varphi ( n )$ 61   
3.8 An application to the distribution of lattice points visible from the origin 62   
3.9 The average order of $\mu ( n )$ and of $\Lambda ( n )$ 64   
3.10 The partial sums of a Dirichlet product 65   
3.11 Applications to $\mu ( n )$ and $\Lambda ( n )$ 66   
3.12 Another identity for the partial sums of a Dirichlet product 69   
Exercises for Chapter 3 70

# Chapter 4 Some Elementary Theorems on the Distribution of Prime Numbers

4.1 Introduction 74   
4.2 Chebyshev's functions $\psi ( x )$ and $\vartheta ( x )$ 75   
4.3 Relations connecting $\vartheta ( x )$ and $\pi ( x )$ 76   
4.4 Some equivalent forms of the prime number theorem 79   
4.5 Inequalities for $\pi ( n )$ and $p _ { n }$ 82   
4.6 Shapiro's Tauberian theorem 85   
4.7 Applications of Shapiro's theorem 88   
4.8 An asymptotic formula for the partial sums $\sum _ { p \leq x } \left( 1 / p \right)$ 89   
4.9 The partial sums of the Mobius function 91   
4.10 Brief sketch of an elementary proof of the prime number theorem 98   
4.11 Selberg's asymptotic formula 99   
Exercises for Chapter 4 101

# Chapter 5

# Congruences

5.1 Definition and basic properties of congruences 106   
5.2 Residue classes and complete residue systems .109   
5.3 Linear congruences 110   
5.4 Reduced residue systems and the Euler-Fermat theorem 113   
5.5 Polynomial congruences modulo $p$ Lagrange's theorem 114   
5.6 Applications of Lagrange's theorem 115   
5.7 Simultaneous linear congruences. The Chinese remainder theorem 117   
5.8 Applications of the Chinese remainder theorem 118   
5.9 Polynomial congruences with prime power moduli 120   
5.10 The principle of cross-classification 123   
5.11 A decomposition property of reduced residue systems 125   
Exercises for Chapter 5 126

# Chapter 6 Finite Abelian Groups and Their Characters

6.1 Definitions 129   
6.2 Examples of groups and subgroups 130   
6.3 Elementary properties of groups 130   
6.4 Construction of subgroups 131   
6.5 Characters of finite abelian groups 133   
6.6 The character group 135   
6.7 The orthogonality relations for characters 136   
6.8 Dirichlet characters 137   
6.9 Sums involving Dirichlet characters 140   
6.10 The nonvanishing of $L ( 1 , \chi )$ for real nonprincipal x 141   
Exercises.for Chapter 6 143

# Chapter 7 Dirichlet's Theorem on Primes in Arithmetic Progressions

7.1 Introduction 146   
7.2 Dirichlet's theorem for primes of the form $4 n - 1$ and $4 n + 1$ 147   
7.3 The plan of the proof of Dirichlet's theorem 148   
7.4 Proof of Lemma 7.4 150   
7.5 Proof of Lemma 7.5 151   
7.6 Proof of Lemma 7.6 152   
7.7 Proof of Lemma 7.8 153   
7.8 Proof of Lemma 7.7 153   
7.9 Distribution of primes in arithmetic progressions 154   
Exercises for Chapter 7 155

# Chapter 8 Periodic Arithmetical Functions and Gauss Sums

8.1 Functions periodic modulo $k$ 157   
8.2 Existence of finite Fourier series for periodic arithmetical functions 158   
8.3 Ramanujan's sum and generalizations 160   
8.4 Multiplicative properties of the sums $s _ { k } ( n )$ 162   
8.5 Gauss sums associated with Dirichlet characters 165   
8.6 Dirichlet characters with nonvanishing Gauss sums 166   
8.7 Induced moduli and primitive characters 167   
8.8 Further properties of induced moduli  168   
8.9 The conductor of a character 171   
8.10 Primitive characters and separable Gauss sums 171   
8.11 The finite Fourier series of the Dirichlet characters 172   
8.12 Pólya's inequality for the partial sums of primitive characters 173   
Exercises for Chapter 8 175

# Chapter 9 Quadratic Residues and the Quadratic Reciprocity Law

9.1 Quadratic residues 178   
9.2 Legendre's symbol and its properties 179   
9.3 Evaluation of $( - 1 | p )$ and $( 2 | p )$ 181   
9.4 Gauss' lemma 182   
9.5 The quadratic reciprocity law 185   
9.6 Applications of the reciprocity law 186   
9.7 The Jacobi symbol 187   
9.8 Applications to Diophantine equations 190   
9.9 Gauss sums and the quadratic reciprocity law 192   
9.10 The reciprocity law for quadratic Gauss sums 195   
9.11 Another proof of the quadratic reciprocity law 200   
Exercises for Chapter 9 201

# Chapter 10 Primitive Roots

10.1 The exponent of a number mod m. Primitive roots 204   
10.2 Primitive roots and reduced residue systems 205   
10.3 The nonexistence of primitive roots mod $2 ^ { \alpha }$ for $\alpha \geq 3$ 206   
10.4 The existence of primitive roots mod $p$ for odd primes $p$ 206   
10.5 Primitive roots and quadratic residues 208   
10.6 The existence of primitive roots mod $p ^ { \alpha }$ 208   
10.7 The existence of primitive roots mod $2 p ^ { \alpha }$ 210   
10.8 The nonexistence of primitive roots in the remaining cases 211   
10.9 The number of primitive roots mod m 212   
10.10 The index calculus 213   
10.11 Primitive roots and Dirichlet characters 218   
10.12 Real-valued Dirichlet characters mod $p ^ { \alpha }$ 220   
10.13 Primitive Dirichlet characters mod $p ^ { \alpha }$ 221   
Exercises for Chapter 10 222

# Chapter 11 Dirichlet Series and Euler Products

11.1 Introduction 224   
11.2 The half-plane of absolute convergence of a Dirichlet series 225   
11.3 The function defined by a Dirichlet series 226   
11.4 Multiplication of Dirichlet series 228   
11.5 Euler products 230   
11.6 The half-plane of convergence of a Dirichlet series 232   
11.7 Analytic properties of Dirichlet series 234   
11.8 Dirichlet series with nonnegative coefficients 236   
11.9 Dirichlet series expressed as exponentials of Dirichlet series 238   
11.10 Mean value formulas for Dirichlet series 240   
11.11 An integral formula for the coeficients of a Dirichlet series 242   
11.12 An integral formula for the partial sums of a Dirichlet series 243   
Exercises for Chapter 11 246

# Chapter 12 The Functions $\zeta ( s )$ and $L ( s , \chi )$

12.1 Introduction 249   
12.2 Properties of the gamma function 250   
12.3 Integral representation for the Hurwitz zeta function 251   
12.4 A contour integral representation for the Hurwitz zeta function 253   
12.5 The analytic continuation of the Hurwitz zeta function 254   
12.6 Analytic continuation of $\zeta ( s )$ and $L ( s , \chi )$ 255   
12.7 Hurwitz's formula for $\zeta ( s , a )$ 256   
12.8 The functional equation for the Riemann zeta function 259   
12.9 A functional equation for the Hurwitz zeta function 261   
12.10 The functional equation for $L$ -functions 261   
12.11 Evaluation of $\zeta ( - n , a )$ 264   
12.12 Properties of Bernoulli numbers and Bernoull polynomials 265   
12.13 Formulas for $L ( 0 , \chi )$ 268   
12.14 Approximation of $\zeta ( s , a )$ by finite sums 268   
12.15 Inequalities for $| \zeta ( s , a ) |$ 270   
12.16 Inequalities for $| \zeta ( s ) |$ and $| L ( s , \chi ) |$ 272   
Exercises for Chapter 12 273

# Chapter 13 Analytic Proof of the Prime Number Theorem

13.1 The plan of the proof 278   
13.2 Lemmas 279   
13.3 A contour integral representation for $\psi _ { 1 } ( x ) / x ^ { 2 }$ 283   
13.4 Upper bounds for $| \zeta ( s ) |$ and $| \zeta ^ { \prime } ( s ) |$ near the line $\sigma = 1$ 284   
13.5 The nonvanishing of $\zeta ( s )$ on the line $\sigma = 1$ 286   
13.6 Inequalities for $| 1 / \zeta ( s ) |$ and $| \zeta ^ { \prime } ( s ) / \zeta ( s ) |$ 287   
13.7 Completion of the proof of the prime number theorem 289   
13.8 Zero-free regions for $\zeta ( s )$ 291   
13.9 The Riemann hypothesis 293   
13.10 Application to the divisor function 294   
13.11 Application to Euler's totient 297   
13.12 Extension of Polya's inequality for character sums 299   
Exercises for Chapter 13 300

# Chapter 14 Partitions

14.1 Introduction 304   
14.2 Geometric representation of partitions 307   
14.3 Generating functions for partitions 308   
14.4 Euler's pentagonal-number theorem 311   
14.5 Combinatorial proof of Euler's pentagonal-number theorem 313   
14.6 Euler's recursion formula for $p ( n )$ 315   
14.7 An upper bound for $p ( n )$ 316   
14.8 Jacobi's triple product identity 318   
14.9 Consequences of Jacobi's identity 321   
14.10 Logarithmic differentiation of generating functions 322   
14.11 The partition identities of Ramanujan 324   
Exercises for Chapter 14 325

# Bibliography 329

# Index of Special Symbols 333

Index 335

# Historical Introduction

The theory of numbers is that branch of mathematics which deals with properties of the whole numbers,

also called the counting numbers, or positive integers.

The positive integers are undoubtedly man's first mathematical creation. It is hardly possible to imagine human beings without the ability to count, at least within a limited range. Historical record shows that as early as 5700 Bc the ancient Sumerians kept a calendar, so they must have developed some form of arithmetic.

By 2500 Bc the Sumerians had developed a number system using 60 as a base. This was passed on to the Babylonians, who became highly skilled calculators. Babylonian clay tablets containing elaborate mathematical tables have been found, dating back to 2000 Bc.

When ancient civilizations reached a level which provided leisure time to ponder about things, some people began to speculate about the nature and properties of numbers. This curiosity developed into a sort of numbermysticism or numerology, and even today numbers such as 3, 7, 11, and 13 are considered omens of good or bad luck.

Numbers were used for keeping records and for commercial transactions for over 5000 years before anyone thought of studying numbers themselves in a systematic way. The first scientific approach to the study of integers, that is, the true origin of the theory of numbers, is generally attributed to the Greeks. Around 600 Bc Pythagoras and his disciples made rather thorough studies of the integers. They were the first to classfy integers in various ways:

Even numbers: 2, 4, 6, 8, 10, 12, 14, 16, ..   
Odd numbers:  1, 3, 5, 7, 9, 11, 13, 15, ...   
Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,71,73,79,83,89,97,...   
Composite numbers: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ...

A prime number is a number greater than 1 whose only divisors are 1 and the number itself. Numbers that are not prime are called composite, except that the number 1 is considered neither prime nor composite.

The Pythagoreans also linked numbers with geometry. They introduced the idea of polygonal numbers: triangular numbers, square numbers, pentagonal numbers, etc. The reason for this geometrical nomenclature is clear when the numbers are represented by dots arranged in the form of triangles, squares, pentagons, etc., as shown in Figure I.1.

![](images/4c1902166c99eecf63fcc6d94ce7581df496b78fc7e51504c016ccb5fe144830.jpg)  
Figure I.1

Another link with geometry came from the famous Theorem of Pythagoras which states that in any right triangle the square of the length of the hypotenuse is the sum of the squares of the lengths ofthe two legs (see Figure I.2). . The Pythagoreans were interested in right triangles whose sides are integers, as in Figure I.3. Such triangles are now called Pythagorean triangles. The corresponding triple of numbers $( x , y , z )$ representing the lengths of the sides is called a Pythagorean triple.

![](images/59348c3642f443d1f2102090377e2e74d444d1ef9fd2780f3fc3e3690aebf6f5.jpg)  
Figure 1.2

A Babylonian tablet has been found, dating from about 1700 Bc, which contains an extensive list of Pythagorean triples, some of the numbers being quite large. The Pythagoreans were the first to give a method for determining infinitely many triples. In modern notation it can be described as follows: Let $\pmb { n }$ be any odd number greater than 1, and let

$$
\begin{array} { r } { x = n , \qquad y = \frac { 1 } { 2 } ( n ^ { 2 } - 1 ) , \qquad z = \frac { 1 } { 2 } ( n ^ { 2 } + 1 ) . } \end{array}
$$

The resulting triple $( x , y , z )$ will always be a Pythagorean triple with $z = y$ $^ { + 1 , }$ Here are some examples:

<table><tr><td>x</td><td>3</td><td>5 7</td><td>9 11 13</td></tr><tr><td>4</td><td>12</td><td>24 40 60</td><td>15 17 19 84 112 144 180</td></tr><tr><td>y</td><td></td><td></td><td></td></tr><tr><td>Z</td><td>513</td><td>25 41 61</td><td>85 113 145 181</td></tr></table>

There are other Pythagorean triples besides these; for example:

In these examples we have $z = y + 2 .$ Plato (430-349 Bc) found a method for determining all these triples; in modern notation they are given by the formulas

$$
x = 4 n , \qquad y = 4 n ^ { 2 } - 1 , \qquad z = 4 n ^ { 2 } + 1 .
$$

Around 300 Bc an important event occurred in the history of mathematics. The appearance of Euclid's Elements, a collection of 13 books, transformed mathematics from numerology into a deductive science. Euclid was the first to present mathematical facts along with rigorous proofs of these facts.

![](images/f06c4e7bc3ef8141844e4c8ba32d900088198c73ebacfc37cc4871be84291dc9.jpg)  
Figure 1.3

Three of the thirteen books were devoted to the theory of numbers (Books VII, IX, and X). In Book IX Euclid proved that there are infinitely many primes. His proof is still taught in the classroom today. In Book X he gave a method for obtaining all Pythagorean triples although he gave no proof that his method did, indeed, give them all. The method can be summarized by the formulas

$$
x = t ( a ^ { 2 } - b ^ { 2 } ) , \qquad y = 2 t a b , \qquad z = t ( a ^ { 2 } + b ^ { 2 } ) ,
$$

where $t , a ,$ and $b$ , are arbitrary positive integers such that $a > b , a$ and $b$ have no prime factors in common, and one of $a$ or $b$ is odd, the other even.

Euclid also made an important contribution to another problem posed by the Pythagoreans—that of finding all perfect numbers. The number 6 was called a perfect number because $6 = 1 + 2 + 3$ , the sum of all its proper divisors (that is, the sum of all divisors less than 6). Another example of a perfect number is 28 because $2 8 = 1 + 2 + 4 + 7 + 1 4 ,$ and 1, 2, 4, 7, and 14 are the divisors of 28 less than 28. The Greeks referred to the proper divisors of a number as its "parts." They called 6 and 28 perfect numbers because in each case the number is equal to the sum of all its parts.

In Book IX, Euclid found all even perfect numbers. He proved that an even number is perfect if it has the form

$$
2 ^ { p - 1 } ( 2 ^ { p } - 1 ) ,
$$

where both $p$ and $2 ^ { p } - 1$ are primes.

Two thousand years later, Euler proved the converse of Euclid's theorem. That is, every even perfect number must be of Euclid's type. For example, for 6 and 28 we have

$$
6 = 2 ^ { 2 - 1 } ( 2 ^ { 2 } - 1 ) = 2 \cdot 3 \qquad \mathrm { a n d } \ 2 8 = 2 ^ { 3 - 1 } ( 2 ^ { 3 } - 1 ) = 4 \cdot 7 .
$$

The first fi ve even perfect numbers are

Perfect numbers are very rare indeed. At the present time (1975) only 24 perfect numbers are known. They correspond to the following values of $p$ in Euclid's formula:

2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281,   
3217, 4253, 4423, 9689, 9941, 11,213, 19,937.

Numbers of the form $2 ^ { p } - 1$ where $p$ is prime, are now called Mersenne numbers and are denoted by $M _ { p }$ in honor of Mersenne, who studied them in 1644. It is known that $M _ { p }$ is prime for the 24 primes listed above and composite for all other values of $p \leq 2 5 7$ , except possibly for

$$
\begin{array} { r } { p = { 1 5 7 } , { 1 6 7 } , { 1 9 3 } , { 1 9 9 } , { 2 2 7 } , { 2 2 9 } ; } \end{array}
$$

for these it is not yet known whether $M _ { p }$ is prime or composite.

No odd perfect numbers are known; it is not even known if any exist. But if any do exist they must be very large; in fact, greater than $1 0 ^ { 5 0 }$ (see Hagis [29]).

We turn now to a brief description of the history of the theory of numbers since Euclid's time.

After Euclid in 300 Bc no significant advances were made in number theory until about AD 250 when another Greek mathematician, Diophantus of Alexandria, published 13 books, six of which have been preserved. This was the first Greek work to make systematic use of algebraic symbols. Although his algebraic notation seems awkward by present-day standards, Diophantus was able to solve certain algebraic equations involving two or three unknowns. Many of his problems originated from number theory and it was natural for him to seek integer solutions of equations. Equations to be solved with integer values of the unknowns are now called Diophantine equations, and the study of such equations is known as Diophantine analysis. The equation $x ^ { 2 } + y ^ { 2 } = z ^ { 2 }$ for Pythagorean triples is an example of a Diophantine equation.

After Diophantus, not much progress was made in the theory of numbers until the seventeenth century, although there is some evidence that the subject began to fourish in the Far East—especially in India—in the period between AD 500 and AD 1200.

In the seventeenth century the subject was revived in Western Europe, largely through the efforts of a remarkable French mathematician, Pierre de Fermat (1601-1665), who is generally acknowledged to be the father of modern number theory. Fermat derived much of his inspiration from the works of Diophantus. He was the first to discover really deep properties of the integers. For example, Fermat proved the following surprising theorems:

Every integer is either a triangular number or a sum of 2 or 3 triangular numbers; every integer is either a square or a sum of 2, 3, or 4 squares; every integer is either a pentagonal number or the sum of 2, 3, 4, or 5 pentagonal numbers, and so on.

Fermat also discovered that every prime number of the form $4 n + 1$ such as 5, 13, 17, 29, 37, 41, etc., is a sum of two squares. For example,

$$
{ \begin{array} { r l r l } { 5 = 1 ^ { 2 } + 2 ^ { 2 } , } & { } & { 1 3 = 2 ^ { 2 } + 3 ^ { 2 } , } & { } & { 1 7 = 1 ^ { 2 } + 4 ^ { 2 } , } & { } \end{array} } \ 2 9 = 2 ^ { 2 } + 5 ^ { 2 } ,
$$

Shortly after Fermat's time, the names of Euler (1707–1783), Lagrange (1736–1813), Legendre (1752–1833), Gauss (1777-1855), and Dirichlet (1805-1859) became prominent in the further development of the subject. The first textbook in number theory was published by Legendre in 1798. Three years later Gauss published $D$ isquisitiones Arithmeticae, a book which transformed the subject into a systematic and beautiful science. Although he made a wealth of contributions to other branches of mathematics, as well as to other sciences, Gauss himself considered his book on number theory to be his greatest work.

In the last hundred years or so since Gauss's time there has been an intensive development of the subject in many different directions. It would be impossible to give in a few pages a fair cross-section of the types of problems that are studied in the theory of numbers. The field is vast and some parts require a profound knowledge of higher mathematics. Nevertheless, there are many problems in number theory which are very easy to state. Some of these deal with prime numbers, and we devote the rest of this introduction to such problems.

The primes less than 100 have been listed above. A table listing all primes less than 10 million was published in 1914 by an American mathematician, D. N. Lehmer [43]. There are exactly 664,579 primes less than 10 million, or about $6 \%$ . More recently D. H. Lehmer (the son of D. N. Lehmer) calculated the total number of primes less than 10 billion; there are exactly 455,052,512 such primes, or about $4 \%$ , although all these primes are not known individually (see Lehmer [41]).

A close examination of a table of primes reveals that they are distributed in a very irregular fashion. The tables show long gaps between primes. For example, the prime 370,261 is followed by 111 composite numbers. There are no primes between 20,831,323 and 20,831,533. It is easy to prove that arbitrarily large gaps between prime numbers must eventually occur.

On the other hand, the tables indicate that consecutive primes, such as 3 and 5, or 101 and 103, keep recurring. Such pairs of primes which differ only by 2 are known as twin primes. There are Over 1000 such pairs below 100,000 and over 8000 below 1,000,000. The largest pair known to date (see Williams and Zarnke [76]) is $7 6 \cdot 3 ^ { 1 3 9 } - 1$ and $7 6 \cdot 3 ^ { 1 3 9 } + 1$ Many mathematicians think there are infinitely many such pairs, but no one has been able to prove this as yet.

One of the reasons for this irregularity in distribution of primes is that no simple formula exists for producing all the primes. Some formulas do yield many primes. For example, the expression

$$
x ^ { 2 } - x + 4 1
$$

gives a prime for $x = 0 , 1 , 2 , \ldots , 4 0 .$ whereas

$$
x ^ { 2 } - 7 9 x + 1 6 0 1
$$

gives a prime for $x = 0 , 1 , 2 , \ldots , 7 9$ . However, no such simple formula can give a prime for all $\boldsymbol { x }$ , even if cubes and higher powers are used. In fact, in 1752 Goldbach proved that no polynomial in $x$ with integer coeficients can be prime for all $x _ { i }$ , or even for all suficiently large $x$

Some polynomials represent infinitely many primes. For example, as $x$ runs through the integers 0, 1, 2, 3, . . . , the linear polynomial

$$
2 x + 1
$$

gives all the odd numbers hence infinitely many primes. Also, each of the polynomials

$$
4 x + 1 \qquad \mathrm { a n d } \qquad 4 x + 3
$$

represents infinitely many primes. In a famous memoir [15] published in 1837, Dirichlet proved that, if $\pmb { a }$ and $b$ are positive integers with no prime factor in common, the polynomial

$$
a x + b
$$

gives infinitely many primes as $x$ runs through all the positive integers. This result is now known as Dirichlet's theorem on the existence of primes in a given arithmetical progression.

To prove this theorem, Dirichlet went outside the realm of integers and introduced tools of analysis such as limits and continuity. By so doing he laid the foundations for a new branch of mathematics called analytic number theory, in which ideas and methods of real and complex analysis are brought to bear on problems about the integers.

It is not known if there is any quadratic polynomial $a x ^ { 2 } + b x + c$ with $a \neq 0$ which represents infinitely many primes. However, Dirichlet [16] used his powerful analytic methods to prove that, if $a , 2 b$ , and $c$ have no prime factor in common, the quadratic polynomial in two variables

$$
a x ^ { 2 } + 2 b x y + c y ^ { 2 }
$$

represents infinitely many primes as $x$ and $y$ run through the positive integers.

Fermat thought that the formula $2 ^ { 2 ^ { n } } + 1$ would always give a prime for $n = 0 , 1 , 2 , \ldots$ These numbers are called Fermat numbers and are denoted by $F _ { n }$ . The first fi ve are

$$
F _ { 0 } = 3 , \qquad F _ { 1 } = 5 , \qquad F _ { 2 } = 1 7 , \qquad F _ { 3 } = 2 5 7 \qquad \mathrm { a n d } \ F _ { 4 } = 6 5 , 5 3 7 ,
$$

and they are all primes. However, in 1732 Euler found that $F _ { 5 }$ is composite; in fact,

$$
F _ { 5 } = 2 ^ { 3 2 } + 1 = ( 6 4 1 ) ( 6 , 7 0 0 , 4 1 7 ) .
$$

These numbers are also of interest in plane geometry. Gauss proved that if $F _ { \pi }$ is a prime, say $F _ { n } = p ;$ , then a regular polygon of $p$ sides can be constructed with straightedge and compass.

Beyond $F _ { 5 }$ , no further Fermat primes have been found. In fact, for $5 \leq$ $n \leq 1 6$ each Fermat number $F _ { n }$ is composite. Also, $F _ { n }$ is known to be composite for the following further isolated values of $\pmb { n }$ :

n = 18,19,21,23,25, 26,27, 30,32, 36,38, 39, 42,52,55,58,63,73,77, 81,17,125,144,150,207,226,228,260,267,268,284,316,452, and 1945.

The greatest known Fermat composite, $F _ { 1 9 4 5 }$ , has more than $1 0 ^ { 5 8 2 }$ digits, a number larger than the number of letters in the Los Angeles and New York telephone directories combined (see Robinson [59] and Wrathall [77]).

It was mentioned earlier that there is no simple formula that gives all the primes. In this connection, we should mention a result discovered in 1947 by an American mathematician, W. H. Mills [50]. He proved that there is some number $A$ , greater than 1 but not an integer, such that

Here $[ A ^ { 3 ^ { x } } ]$ means the greatest integer $\leq A ^ { 3 ^ { \frac { x } { s } } }$ . Unfortunately, no one knows what $A$ is equal to.

The foregoing results illustrate the irregularity of the distribution of the prime numbers. However, by examining large blocks of primes one finds that their average distribution seems to be quite regular. Although there is no end to the primes, they become more widely spaced, on the average, as we go further and further in the table. The question of the diminishing frequency of primes was the subject of much speculation in the early nineteenth century. To study this distribution, we consider a function, denoted by $\pi ( x ) ,$ , which counts the number of primes $\leq x$ . Thus,

$\pi ( x ) =$ the number of primes $p$ satisfying $2 \leq p \leq x$

Here is a brief table of this function and its comparison with $x / 1 0 \mathbf { g } \ x ,$ where log $\pmb { x }$ is the natural logarithm of $x .$

<table><tr><td>X</td><td>π(x) x/1logx</td><td></td><td>x π(x) logx</td></tr><tr><td>10</td><td>4</td><td>4.3</td><td>0.93</td></tr><tr><td>10{$</td><td>25</td><td>21.7</td><td>1.15</td></tr><tr><td>103</td><td>168</td><td>144.9</td><td>1.16</td></tr><tr><td>104</td><td>1,229</td><td>1,086</td><td>1.11</td></tr><tr><td>105</td><td>9,592</td><td>8,686</td><td>1.10</td></tr><tr><td>106</td><td>78,498</td><td>72,464</td><td>1.08</td></tr><tr><td>107</td><td>664,579</td><td>621,118</td><td>1.07</td></tr><tr><td>108</td><td>5,761,455</td><td>5,434,780</td><td>1.06</td></tr><tr><td>109</td><td>50,847,534</td><td>48,309,180</td><td>1.05</td></tr><tr><td>1010</td><td>455,052,512</td><td>434,294,482</td><td>1.048</td></tr></table>

By examining a table like this for $x \leq 1 0 ^ { 6 }$ , Gauss [24] and Legendre [40] proposed independently that for large $\pmb { x }$ the ratio

$$
\pi ( x ) \left/ { \frac { x } { \log x } } \right.
$$

was nearly 1 and they conjectured that this ratio would approach 1 as $x$ approaches $\infty$ . Both Gauss and Legendre attempted to prove this statement but did not succeed. The problem of deciding the truth or falsehood of this conjecture attracted the attention of eminent mathematicians for nearly 100 years.

In 1851 the Russian mathematician Chebyshev [9] made an important step forward by proving that if the ratio did tend to a limit, then this limit must be 1. However he was unable to prove that the ratio does tend to a limit.

In 1859 Riemann [58] attacked the problem with analytic methods, using a formula discovered by Euler in 1737 which relates the prime numbers to the function

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } }
$$

for real $s > 1$ . Riemann considered complex values of s and outlined an ingenious method for connecting the distribution of primes to properties of the function $\zeta ( s )$ , The mathematics needed to justify all the details of his method had not been fully developed and Riemann was unable to completely settle the problem before his death in 1866.

Thirty years later the necessary analytic tools were at hand and in 1896 J. Hadamard [28] and C. J. de la Vallee Poussin [71] independently and almost simultaneously succeeded in proving that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log x } { x } } = 1 .
$$

This remarkable result is called the prime number theorem, and its proof was one of the crowning achievements of analytic number theory.

In 1949, two contemporary mathematicians, Atle Selberg [62] and Paul Erdös [19] caused a sensation in the mathematical world when they discovered an elementary proof of the prime number theorem. Their proof, though very intricate, makes no use of $\zeta ( s )$ nor of complex function theory and in principle is accessible to anyone familiar with elementary calculus.

One of the most famous problems concerning prime numbers is the so-called Goldbach conjecture. In 1742, Goldbach [26] wrote to Euler suggesting that every even number $\geq 4$ is a sum of two primes. For example

$$
\begin{array} { c c c } { { 4 = 2 + 2 , } } & { { 6 = 3 + 3 , } } & { { 8 = 3 + 5 , } } \\ { { } } & { { 1 0 = 3 + 7 = 5 + 5 , } } & { { 1 2 = 5 + 7 . } } \end{array}
$$

This conjecture is undecided to this day, although in recent years some progress has been made to indicate that it is probably true. Now why do mathematicians think it is probably true if they haven't been able to prove it? First of all, the conjecture has been verified by actual computation for all even numbers less than $3 3 \times 1 0 ^ { 6 }$ . It has been found that every even number greater than 6 and less than $3 3 \times 1 0 ^ { 6 }$ is, in fact, not only the sum of two odd primes but the sum of two distinct odd primes (see Shen [66]). But in number theory verification of a few thousand cases is not enough evidence to convince mathematicians that something is probably true. For example, all the odd primes fall into two categories, those of the form $4 n + 1$ and those of the form $4 n + 3$ Let $\pi _ { 1 } ( x )$ denote all the primes $\leq x$ that are of the form $4 n + 1$ , and let $\pi _ { 3 } ( x )$ denote the number that are of the form $4 n + 3$ It is known that there are infinitely many primes of both types. By computation it was found that $\pi _ { 1 } ( x ) \leq \pi _ { 3 } ( x )$ for all $x < 2 6 , 8 6 1$ . But in 1957, J. Leech [39] found that for $x = 2 6 { , } 8 6 1$ we have $\pi _ { 1 } ( x ) = 1 4 7 3$ and $\pi _ { 3 } ( x ) = 1 4 7 2 \ /$ so the inequality was reversed. In 1914, Littlewood [49] proved that this inequality reverses back and forth infinitely often. That is, there are infi nitely many $x$ for which $\pi _ { 1 } ( x ) < \pi _ { 3 } ( x )$ and also infinitely many $x$ for which $\pi _ { 3 } ( x ) < \pi _ { 1 } ( x )$ Con-jectures about prime numbers can be erroneous even if they are verified by computation in thousands of cases.

Therefore, the fact that Goldbach's conjecture has been verified for all even numbers less than $3 3 \times 1 0 ^ { 6 }$ is only a tiny bit of evidence in its favor.

Another way that mathematicians collect evidence about the truth of a particular conjecture is by proving other theorems which are somewhat similar to the conjecture. For example, in 1930 the Russian mathematician Schnirelmann [61] proved that there is a number $M$ such that every number $\pmb { n }$ from some point on is a sum of $M$ or fewer primes:

$$
n = p _ { 1 } + p _ { 2 } + \cdots + p _ { M } { \mathrm { ( f o r ~ s u f f i c i e n t l y ~ l a r g e ~ } } n ) .
$$

If we knew that $M$ were equal to 2 for all even $\pmb { n }$ , this would prove Goldbach's conjecture for all suficiently large n. In 1956 the Chinese mathematician Yin Wen-Lin [78] proved that $M \leq 1 8$ . That is, every number n from some point on is a sum of 18 or fewer primes. Schnirelmann's result is considered a giant step toward a proof of Goldbach's conjecture. It was the first real progress made on this problem in nearly 200 years.

A much closer approach to a solution of Goldbach's problem was made in 1937 by another Russian mathematician, I. M. Vinogradov [73], who proved that from some point on every odd number is the sum of three primes :

$$
n = p _ { 1 } + p _ { 2 } + p _ { 3 } \qquad ( n \mathrm { o d d } , n \mathrm { s u f f c i e n t l y } \mathrm { l a r g e } ) .
$$

In fact, this is true for all odd n greater than $3 ^ { 3 ^ { 1 5 } }$ (see Borodzkin [5]). To date, this is the strongest piece of evidence in favor of Goldbach's conjecture. For one thing, it is easy to prove that Vinogradov's theorem is a consequence of Goldbach's statement. That is, if Goldbach's conjecture is true, then it is easy to deduce Vinogradov's statement. The big achievement of Vinogradov was that he was able to prove his result without using Goldbach's statement. Unfortunately, no one has been able to work it the other way around and prove Goldbach's statement from Vinogradov's.

Another piece of evidence in favor of Goldbach's conjecture was found in 1948 by the Hungarian mathematician Rényi [57] who proved that there is a number $M$ such that every suficiently large even number n can be written as a prime plus another number which has no more than $M$ prime factors:

$$
n = p + A
$$

where $\pmb { A }$ has no more than $M$ prime factors (n even, n suficiently large). If we knew that $M = 1$ then Goldbach's conjecture would be true for all sufficiently large $\pmb { n }$ In 1965 A. A. Buhstab [6] and A. I. Vinogradov [72] proved that $M \leq 3 .$ , and in 1966 Chen Jing-run [10] proved that $M \leq 2$

We conclude this introduction with a brief mention of some outstanding unsolved problems concerning prime numbers.

1. (Goldbach's problem). Is there an even number ${ > } 2$ which is not the sum of two primes?   
2. Is there an even number $> 2$ which is not the difference of two primes?   
3. Are there infinitely many twin primes?   
4. Are there infinitely many Mersenne primes, that is, primes of the form $2 ^ { p } - 1$ where $p$ is prime?   
5. Are there infinitely many composite Mersenne numbers?   
6. Are there infinitely many Fermat primes, that is, primes of the form $2 ^ { 2 ^ { n } } + 1 2$   
7. Are there infinitely many composite Fermat numbers?   
8. Are there infi nitely many primes of the form $x ^ { 2 } + 1$ , where $x$ is an integer? (It is known that there are infinitely many of the form $x ^ { 2 } + y ^ { 2 }$ , and of the form $x ^ { 2 } + y ^ { 2 } + 1$ , and of the form $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } + 1 )$   
9. Are there infinitely many primes of the form $x ^ { 2 } + k , ( k { \mathrm { ~ g i v e n } } ) ?$   
10. Does there always exist at least one prime between $n ^ { 2 }$ and $( n + 1 ) ^ { 2 }$ for every integer $n \geq 1 2$   
11. Does there always exist at least one prime between $n ^ { 2 }$ and $n ^ { 2 } + n$ for every integer $n > 1 2$   
12. Are there infinitely many primes whose digits (in base 10) are all ones? (Here are two examples: 11 and 11,111,111,111,111,111,111,111.)

The professional mathematician is attracted to number theory because of the way all the weapons of modern mathematics can be brought to bear on its problems. As a matter of fact, many important branches of mathematics had their origin in number theory. For example, the early attempts to prove the prime number theorem stimulated the development of the theory of functions of a complex variable, especially the theory of entire functions. Attempts to prove that the Diophantine equation $x ^ { n } + y ^ { n } = z ^ { n }$ has no nontrivial solution if $n \geq 3$ (Fermat's conjecture) led to the development of algebraic number theory, one of the most active areas of modern mathematical research. Even though Fermat's conjecture is still undecided, this seems unimportant by comparison to the vast amount of valuable mathematics that has been created as a result of work on this conjecture. Another example is the theory of partitions which has been an important factor in the development of com binatorial analysis and in the study of modular functions.

There are hundreds of unsolved problems in number theory. New problems arise more rapidly than the old ones are solved, and many of the old ones have remained unsolved for centuries. As the mathematician Sierpinski once said, ". .. the progress of our knowledge of numbers is advanced not only by what we already know about them, but also by realizing what we yet do not know about them."

Note. Every serious student of number theory should become acquainted with Dickson's three-volume History of the Theory of Numbers [13], and LeVeque's six-volume Reviews in Number Theory [45]. Dickson's History gives an encyclopedic account of the entire literature of number theory up until 1918. LeVeque's volumes reproduce all the reviews in Volumes 1-44 of Mathematical Reviews (1940-1972) which bear directly on questions commonly regarded as part of number theory. These two valuable collections provide a history of virtually all important discoveries in number theory from antiquity until 1972.

# The Fundamental Theorem of Arithmetic

# 1.1 Introduction

This chapter introduces basic concepts of elementary number theory such as divisibility, greatest common divisor, and prime and composite numbers. The principal results are Theorem 1.2, which establishes the existence of the greatest common divisor of any two integers, and Theorem 1.10 (the fundamental theorem of arithmetic), which shows that every integer greater than 1 can be represented as a product of prime factors in only one way (apart from the order of the factors). Many of the proofs make use of the following property of integers.

The principle of induction If $Q$ is a set of integers such that

(a) $1 \in Q$ ,d (b) $n \in { \cal Q }$ implies $n + 1 \in Q .$ ,d

# then

(c) all integers $\geq 1$ belong to $Q$

There are, of course, alternate formulations of this principle. For example, in statement (a), the integer 1 can be replaced by any integer $k _ { \mathrm { : } }$ provided that the inequality $\geq 1$ is replaced by $\geq k$ in (c). Also, (b) can be replaced by the statement $1 , 2 , 3 , \ldots , n \in Q$ implies $( n + 1 ) \in Q$

We assume that the reader is familiar with this principle and its use in proving theorems by induction. We also assume familiarity with the following principle, which is logically equivalent to the principle of induction.

The well-ordering principle If $\pmb { A }$ is $\pmb { a }$ nonempty set of positive integers, then A contains a smallest member.

Again, this principle has equivalent formulations. For example, "positive integers'" can be replaced by "integers $\geq k$ for some $k$ "

# 1.2 Divisibility

Notation In this chapter, small latin letters $a , b , c , d , n $ , etc., denote integers;   
they can be positive, negative, or zero.

Definition of divisibility We say $d$ divides n and we write $d | n$ whenever $n = c d$ for some c. We also say that $\pmb { n }$ is a multiple of $d _ { i }$ that $d$ is a divisor of $\pmb { n }$ , or that $d$ is a factor of $n$ If $d$ does not divide $\pmb { n }$ we write $d \gamma n$ .

Divisibility establishes a relation between any two integers with the following elementary properties whose proofs we leave as exercises for the reader. (Unless otherwise indicated, the letters $a , b , d , m , n$ in Theorem 1.1 represent arbitrary integers.)

Theorem 1.1 Divisibility has the following properties :

(a) $n | n$   
(b) $d | n$ and n|m implies d|m   
(c) $d | n$ and d|m implies $d | ( a n + b m )$   
(d) $d | n$ implies ad an   
(e)d) ad|an and $a \neq 0$ implies $d | n$   
(f) $1 \mid n$   
(g) $n | 0$   
(h) $0 | n$ implies $n = 0$   
(i) $d | n$ and $n \neq 0$ implies $| d | \leq | n |$   
(j) $d | n$ and $n | d$ implies $| d | = | n |$   
(k) $d | n$ and $d \neq 0$ implies $( n / d ) | n$

(reflexive property) (transitive property) (linearity property) (multiplication property) (cancellation law) (1 divides every integer) (every integer divides zero) (zero divides only zero) (compurison property)

Note. If $d \vert n$ then $n / d$ is called the divisor conjugate to $d$

# 1.3 Greatest common divisor

If $d$ divides two integers $^ { a }$ and $b$ then $d$ is called a common divisor of $a$ and $b$ - Thus, I is a common divisor of every pair of integers $^ { a }$ and $b$ . We prove now that every pair of integers $a$ and $b$ has a common divisor which can be expressed as a linear combination of $a$ and $b$

Theorem 1.2 Given any two integers a and $b$ , there is a common divisor d of a and b of the form

$$
d = a x + b y ,
$$

where $x$ and $y$ are integers. Moreover, every common divisor of $a$ and $b$ divides this $d .$

PRooF. First we assume that ${ a \geq 0 }$ and $b \geq 0 .$ . We use induction on n, where $n = a + b$ . If $n = 0$ then $a = b = 0$ and we can take $d \ b = 0$ with $x = y = 0$ Assume, then, that the theorem has been proved for 0, 1, 2, ..., $n - 1$ . By symmetry, we can assume $a \geq b$ . If $b = 0$ take $d = a ,$ , $x = 1$ ,d $y = 0$ If $b \geq 1$ apply the theorem to $a - b$ and $b _ { \cdot }$ Since $( a - b ) + b =$ $a = n - b \leq n - 1$ , the induction assumption is applicable and there is a common divisor $d$ of $a - b$ and $b$ of the form $d = ( a - b ) x + b y$ . This $d$ also divides $( a - b ) + b = a \operatorname { s o } d$ is a common divisor of $\pmb { a }$ and $b$ and we have $d = a x + ( y - x ) b$ , a linear combination of ${ \pmb a }$ and $b$ . To complete the proof we need to show that every common divisor divides $d .$ But a common divisor divides $\pmb { a }$ and $b$ and hence, by linearity, divides $d .$

If $a < 0$ or $b < 0$ (or both), we can apply the result just proved to $\left. a \right.$ and $| b |$ . Then there is a common divisor $d$ of $| a |$ and $| b |$ of the form

$$
d = | a | x + | b | y .
$$

If $a < 0 , | a | x = - a x = a ( - x ) .$ Similarly, if $b < 0 , | b | y = b ( - y ) .$ Hence d is again a linear combination of $a$ and $b$

Theorem 1.3 Given integers a and $b$ , there is one and only one number d with the following properties:

$$
\begin{array} { l l l } { { d \geq 0 } } & { { } } & { { ( d i s n o n n e g a t i v e ) } } \\ { { d | a a n d d | b } } & { { } } & { { ( d i s a c o m m o n d i v i s o r o f a a n d b ) } } \\ { { e | a a n d e | b i m p l i e s e | d } } & { { } } & { { ( e v e r y c o m m o n d i v i s o r d i v i d e s d ) . } } \end{array}
$$

PRooF. By Theorem 1.2 there is at least one $d$ satisfying conditions (b) and (c). Also, $- d$ satisfies these conditions. But if $d ^ { \prime }$ satisfies (b) and (c), then $d | d ^ { \prime }$ and $d ^ { \prime } | d ,$ so $| d | = | d ^ { \prime } |$ . Hence there is exactly one $d \geq 0$ satisfying (b) and (c). □

Note. In Theorem 1.3, $d = 0$ if, and only if, $a = b = 0$ Otherwise $d \ge 1$

Definition The number $d$ of Theorem 1.3 is called the greatest common divisor $( { \bf g } { \bf c } \mathbf { d } )$ of $a$ and $b$ and is denoted by $( a , b )$ or by $a D b$ . If $( a , b ) = 1$ then $\pmb { a }$ and $b$ are said to be relatively prime.

The notation aDb arises from interpreting the gcd as an operation performed on $a$ and $b$ . However, the most common notation in use is $( a , b )$ and this is the one we shall adopt, although in the next theorem we also use the notation aDb to emphasize the algebraic properties of the operation $D$

1: The fundamental theorem of arithmetic

Theorem 1.4 The gcd has the following properties:

$$
\begin{array} { r l } & { ( a , b ) = ( b , a ) } \\ & { a D b = b D a } \\ & { ( a , ( b , c ) ) = ( ( a , b ) , c ) } \\ & { a D ( b D c ) = ( a D b ) D c } \\ & { ( a c , b c ) = \lvert c \rvert ( a , b ) } \\ & { ( c a ) D ( c b ) = \lvert c \rvert ( a D b ) \quad \quad ( d i s t r i b u t i v e \ l a w ) } \\ & { ( a , 1 ) = ( 1 , a ) = 1 , \quad \quad ( a , 0 ) = ( 0 , a ) = \lvert a \rvert . } \\ & { a D 1 = 1 D a = 1 , \quad \quad a D 0 = 0 D a = \lvert a \rvert . } \end{array}
$$

PRooF. We prove only (c). Proofs of the other statements are left as exercises for the reader.

Let $d = ( a , b )$ and let $e = ( a c , b c )$ . We wish to prove that $e = | c | d$ Write $d = a x + b y$ . Then we have

$$
c d = a c x + b c y .
$$

Therefore $c d | e$ because cd divides both ac and bc. Also, Equation (1) shows that $e | c d$ because $e \vert a c$ and $e | b c \rrangle$ . Hence $| e | = | c d |$ or $e = | c | d$ 团

Theorem 1.5 Euclid's lemma. If a|bc and if (a, b) = 1, then a|c.

PROOF. Since $( a , b ) = 1$ we can write $1 = a x + b y$ . Therefore $c = a c x + b c y .$ But $\mathbf { \mu } _ { a \mid a c x }$ and $\mathbf { \delta } _ { a \mid b c y }$ , sO $a | c$ -

# 1.4 Prime numbers

Definition An integer n is called prime if $n > 1$ and if the only positive divisors of $\pmb { n }$ are 1 and $n$ If $n > 1$ and if $\pmb { n }$ is not prime, then n is called composite.

ExamPLes The prime numbers less than 100 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97.

Notation Prime numbers are usually denoted by $p , p ^ { \prime } , p _ { i } , q , q ^ { \prime } , q _ { i }$

Theorem 1.6 Every integer $n > 1$ is either $\pmb { a }$ prime nunber or a product of prime numbers.

ProoF. We use induction on n. The theorem is clearly true for $n = 2 .$ Assume it is true for every integer $< n$ . Then if $\pmb { n }$ is not prime it has a positive divisor $d \neq 1 , d \neq n .$ Hence $n = c d ,$ where $c \neq n$ . But both $c$ and $d$ are $< n$ and ${ > } 1$ so each of $c$ , $d$ is a product of prime numbers, hence so is $\pmb { n }$ □

Theorem 1.7 Euclid. There are infinitely many prime numbers.

EucLiD's ProoF. Suppose there are only a finite number, say P1, P2, · · . , Pn. Let $N = 1 + p _ { 1 } p _ { 2 } \cdots p _ { n }$ .Now $N > 1$ so either $N$ is prime or $N$ is a product of primes. Of course $N$ is not prime since it exceeds each $p _ { i }$ . Moreover, no $p _ { i }$ divides $N$ (if $p _ { i } | N$ then $p _ { i }$ divides the difference $N - p _ { 1 } p _ { 2 } \cdots p _ { n } = 1 )$ This contradicts Theorem 1.6.

Theorem 1.8 If a prime $p$ does not divide $^ { a }$ , then $( p , a ) = 1$

ProoF. Let d = (p, a), Then d|p so d = 1 or d = p. But d|a so d ≠p because $p \chi a$ . Hence $d = 1$ .

Theorem 1.9 If $^ { a }$ prime $p$ divides $a b$ , then $p | a \ o r \ p | b$ . More generally, if $\pmb { a }$ prime p divides a product $a _ { 1 } \cdots a _ { n }$ , then $p$ divides at least one of the factors.

PROOF. Assume $p | a b$ and that $p \chi a .$ We shall prove that ${ \pmb p } | b$ . By Theorem 1.8, $( p , a ) = 1$ so, by Euclid's lemma, ${ \pmb p } | b$

To prove the more general statement we use induction on $\pmb { n }$ , the number of factors. Details are left to the reader.

# 1.5 The fundamental theorem of arithmetic

Theorem 1.10 Fundamental theorem of arithmetic. Every integer $n > 1$ can be represented as a product of prime factors in only one way, apart from the order of the factors.

PRooF. We use induction on $\pmb { n }$ . The theorem is true for $n = 2$ . Assume, then, that it is true for all integers greater than 1 and less than $\pmb { n }$ . We shall prove it is also true for $\pmb { n }$ . If $\pmb { n }$ is prime there is nothing more to prove. Assume, then, that $\pmb { n }$ is composite and that $\pmb { n }$ has two factorizations, say

$$
n = p _ { 1 } p _ { 2 } \cdot \cdot \cdot p _ { s } = q _ { 1 } q _ { 2 } \cdot \cdot \cdot q _ { t } .
$$

We wish to show that $s = t$ and that each $p$ equals some $\pmb q$ Since $p _ { 1 }$ divides the product $q _ { 1 } q _ { 2 } \cdots q _ { t }$ it must divide at least one factor. Relabel $q _ { 1 } , q _ { 2 } , \ldots , q _ { t }$ so that ${ p } _ { 1 } \{ q _ { 1 }$ .Then $p _ { 1 } = q _ { 1 }$ since both $p _ { 1 }$ and $\pmb { q } _ { 1 }$ are primes. In (2) we may cancel $p _ { 1 }$ on both sides to obtain

$$
n / p _ { 1 } = p _ { 2 } \cdots p _ { s } = q _ { 2 } \cdots q _ { t } .
$$

If $s > 1$ or $t > 1$ then $1 < n / p _ { 1 } < n$ The induction hypothesis tells us that the two factorizations of $n / p _ { 1 }$ must be identical, apart from the order of the factors. Therefore $s = t$ and the factorizations in (2) are also identical, apart from order. This completes the proof.

Note. In the factorization of an integer n, a particular prime p may occur more than once. If the distinct prime factors of $n$ are $p _ { 1 } , \ldots , p _ { r }$ and if $p _ { i }$ occurs as a factor $a _ { i }$ times, we can write

$$
n = { p _ { 1 } } ^ { a _ { 1 } } \cdots { p _ { r } } ^ { a _ { r } }
$$

1: The fundamental theorem of arithmetic

or, more briefly,

$$
n = \prod _ { i = 1 } ^ { r } { p _ { i } } ^ { a _ { i } } .
$$

This is called the factorization of $n$ into prime powers. We can also express 1 in this form by taking each exponent $\pmb { a } _ { i }$ to be 0.

Theorem 1.11 If $n = \prod _ { i = 1 } ^ { r } p _ { i } ^ { a _ { i } }$ , the set of positive divisors of n is the set of numbers of the form $\prod _ { i = 1 } ^ { r } p _ { i } ^ { c _ { i } }$ , where $0 \leq c _ { i } \leq a _ { i }$ for $i = 1 , 2 , \ldots , r .$

PROOF. Exercise.

Note. If we label the primes in increasing order, thus:

$$
p _ { 1 } = 2 , \qquad p _ { 2 } = 3 , \qquad p _ { 3 } = 5 , \ldots , \qquad p _ { n } = { \mathrm { t h e ~ } } n { \mathrm { t h ~ p r i m e } } ,
$$

every positive integer $\pmb { n }$ (including 1) can be expressed in the form

$$
n = \prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { a _ { i } }
$$

where now each exponent $a _ { i } \geq 0 .$ The positive divisors of n are all numbers of the form

$$
\prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { c _ { i } }
$$

where $0 \leq c _ { i } \leq a _ { i }$ . The products are, of course, fi nite.

Theorem 1.12 If two positive integers a and $b$ have the factorizations

$$
a = \prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { a _ { i } } , \qquad b = \prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { b _ { i } } ,
$$

then their gcd has the factorization

$$
( a , b ) = \prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { c _ { i } }
$$

where each $c _ { i } = \operatorname* { m i n } \left\{ a _ { i } , b _ { i } \right\}$ , the smaller of $a _ { i }$ and $\pmb { b } _ { i }$ .

PROOF. Let $d = \prod _ { i = 1 } ^ { \infty } p _ { i } ^ { c _ { i } }$ . Since $c _ { i } \leq a _ { i }$ and $c _ { i } \leq b _ { i }$ we have $d | a$ and $d | b$ so $d$ is a common divisor of $a$ and $b$ . Let $e$ be any common divisor of $^ a$ and $b$ , and write $e = \prod _ { i = 1 } ^ { \infty } { p _ { i } } ^ { e _ { i } }$ .Then $e _ { i } \leq a _ { i }$ and $e _ { i } \leq b _ { i }$ so $e _ { i } \leq c _ { i }$ . Hence $e \vert d _ { \colon }$ so $d$ is the gcd of $^ { a }$ and $b$ □

# 1.6 The series of reciprocals of the primes

# Theorem 1.13 The infinite series $\sum \limits _ { n = 1 } ^ { \infty } 1 / p _ { n }$ diverges.

Proor. The following short proof of this theorem is due to Clarkson [11]. We assume the series converges and obtain a contradiction. If the series

converges there is an integer $k$ such that

$$
\sum _ { m = k + 1 } ^ { \infty } \frac { 1 } { p _ { m } } < \frac { 1 } { 2 } .
$$

Let $Q = p _ { 1 } \cdots p _ { k }$ , and consider the numbers $1 + n Q$ for $n = 1 , 2 , . . .$ . None of these is divisible by any of the primes $p _ { 1 } , \ldots , p _ { k }$ . Therefore, all the prime factors of $1 + n Q$ occur among the primes $p _ { k + 1 } , p _ { k + 2 } , . . . .$ Therefore for each $r \geq 1$ we have

$$
\sum _ { n = 1 } ^ { r } { \frac { 1 } { 1 + n Q } } \leq \sum _ { t = 1 } ^ { \infty } { \binom { \infty } { m = k + 1 } } { \frac { 1 } { p _ { m } } } { \biggr ) } ^ { t } ,
$$

since the sum on the right includes among its terms all the terms on the left. But the right-hand side of this inequality is dominated by the convergent geometric series

$$
\sum _ { t = 1 } ^ { \infty } \left( { \frac { 1 } { 2 } } \right) ^ { t } .
$$

Therefore the series $\textstyle \sum _ { n = 1 } ^ { \infty } 1 / ( 1 + n Q )$ has bounded partial sums and hence converges. But this is a contradiction because the integral test or the limit comparison test shows that this series diverges.

Note. The divergence of the series $\sum 1 / p _ { n }$ was first proved in 1737 by Euler [20] who noted that it implies Euclid's theorem on the existence of infinitely many primes.

In a later chapter we shall obtain an asymptotic formula which shows that the partial sums $\sum \limits _ { k = 1 } ^ { n } 1 / p _ { k }$ tend to infinity like log(log n).

# 1.7 The Euclidean algorithm

Theorem 1.12 provides a practical method for computing the gcd $( a , b )$ when the prime-power factorizations of $^ { a }$ and $b$ are known. However, considerable calculation may be required to obtain these prime-power factorizations and it is desirable to have an alternative procedure that requires less computation. There is a useful process, known as Euclid's algorithm, which does not require the factorizations of $\pmb { a }$ and $b$ . This process is based on successive divisions and makes use of the following theorem.

Theorem 1.14 The division algorithm. Given integers a and $b$ with $b > 0 ,$ there exists a unique pair of integers $q$ and $r$ such that

$$
a = b q + r , ~ w i t h \ : 0 \leq r < b .
$$

Moreover, $r = 0 \ i f ,$ and only $i f , b | a .$ ,

Note. We say that $q$ is the quotient and $r$ the remainder obtained when $b$ is divided into $a$

PROOF. Let $s$ be the set of nonnegative integers given by

This is a nonempty set of nonnegative integers so it has a smallest member, say a − bq. Let r = a — bq. Then a = bq + r and r ≥ 0. Now we show that $r < b$ . Assume $r \geq b$ .Then $0 \leq r - b < r$ .But $r - b \in S$ since $r - b =$ $a - b ( q + 1 ) $ . Hence $r - b$ is a member of $s$ smaller than its smallest member, $r .$ This contradiction shows that $r < b ,$ .The pair $q , r$ is unique, for if there were another such pair, say $q ^ { \prime } , r ^ { \prime }$ ,then $b q + r = b q ^ { \prime } + r ^ { \prime }$ sO $b ( q - q ^ { \prime } ) = r ^ { \prime } - r .$ Hence $b | ( \boldsymbol { r } ^ { \prime } - \boldsymbol { r } )$ If $r ^ { \prime } - r \neq 0$ this implies $b \leq | \boldsymbol { r } - \boldsymbol { r } ^ { \prime } |$ , a contradiction. Therefore $\boldsymbol { r } ^ { \prime } = \boldsymbol { r }$ and $q ^ { \prime } = q$ . Finally, it is clear that $r = 0$ if, and only if, $b \vert a .$ □

Note. Although Theorem 1.l4 is an existence theorem, its proof actually gives us a method for computing the quotient $q$ and the remainder $\pmb { r } .$ We subtract from $a$ (or add to $a$ ) enough multiples of $b$ until it is clear that we have obtained the smallest nonnegative number of the form $a \sim b x$

Theorem 1.15 The Euclidean algorithm. Given positive integers a and $b$ , where $b$ X a. Let $r _ { 0 } = a$ , $r _ { 1 } = b$ , and apply the division algorithm repeatedly to obtain a set of remainders $r _ { 2 } , r _ { 3 } , . . . , r _ { n } , r _ { n + 1 }$ defined successively by the relations

$$
\begin{array} { r l } { r _ { 0 } = r _ { 1 } q _ { 1 } + r _ { 2 } , } & { \quad 0 < r _ { 2 } < r _ { 1 } , } \\ { r _ { 1 } = r _ { 2 } q _ { 2 } + r _ { 3 } , } & { \quad 0 < r _ { 3 } < r _ { 2 } , } \\ { \quad } & { \quad \vdots } \\ { r _ { n - 2 } = r _ { n - 1 } q _ { n - 1 } + r _ { n } , } & { \quad 0 < r _ { n } < r _ { n - 1 } , } \\ { r _ { n - 1 } = r _ { n } q _ { n } + r _ { n + 1 } , } & { \quad r _ { n + 1 } = 0 . } \end{array}
$$

Then $r _ { n }$ , the last nonzero remainder in this process, is $( a , b ) ,$ , the gcd of a and $b$

ProoF. There is a stage at which $r _ { n + 1 } = 0$ because the $r _ { i }$ are decreasing and nonnegative. The last relation, $r _ { n - 1 } = r _ { n } q _ { n }$ shows that $r _ { n } | r _ { n - 1 }$ . The next to last shows that $r _ { n } \{ r _ { n - 2 }$ . By induction we see that $r _ { \pi }$ divides each $r _ { i }$ . In particular $r _ { n } \{ r _ { 1 } = b$ and $r _ { n } | r _ { 0 } = a ,$ so $r _ { n }$ is a common divisor of $\pmb { a }$ and $b$ Now let $d$ be any common divisor of $a$ and $b$ . The definition of $r _ { 2 }$ shows that $d | r _ { 2 }$ . The next relation shows that $d | r _ { 3 }$ . By induction, $d$ divides each $r _ { i }$ sO $d | r _ { n }$ . Hence $r _ { n }$ is the required gcd. □

# 1.8 The greatest common divisor of more than two numbers

The greatest common divisor of three integers $a , b , c$ is denoted by $( a , b , c )$ and is defined by the relation

$$
( a , b , c ) = ( a , ( b , c ) ) .
$$

By Theorem 1.4(b) we have $( a , ( b , c ) ) = ( ( a , b ) , c )$ so the gcd depends only on $a , b , c$ and not on the order in which they are written.

Similarly, the gcd of $\pmb { n }$ integers $a _ { 1 } , \ldots , a _ { n }$ is defined inductively by the relation

$$
( a _ { 1 } , \ldots , a _ { n } ) = ( a _ { 1 } , ( a _ { 2 } , \ldots , a _ { n } ) ) .
$$

Again, this number is independent of the order in which the $a _ { i }$ appear.

If $d = ( a _ { 1 } , \ldots , a _ { n } )$ it is easy to verify that $d$ divides each of the $a _ { i }$ and that every common divisor divides $d$ . Moreover, $d$ is a linear combination of the $a _ { i }$ . That is, there exist integers $x _ { 1 } , \ldots , x _ { n }$ such that

$$
( a _ { 1 } , \ldots , a _ { n } ) = a _ { 1 } x _ { 1 } + \cdots + a _ { n } x _ { n } .
$$

If $d = 1$ the numbers are said to be relatively prime. For example, 2, 3, and 10 are relatively prime.

$\mathbb { I f } ( a _ { i } , a _ { j } ) = 1$ whenever $i \neq j$ the numbers $a _ { 1 } , \ldots , a _ { n }$ are said to be relatively prime in pairs. If $a _ { 1 } , \ldots , a _ { n }$ are relatively prime in pairs then $( a _ { 1 } , \ldots , a _ { n } ) = 1$ However, the example (2, 3, 10) shows that the converse is not necessarily true.

# Exercises for Chapter 1

In these exercises lower case latin letters $a , b , c , \ldots , x , y , z$ represent integers.

Prove each of the statements in Exercises 1 through 6.

1.If $\mathbf { \alpha } \left. a , b \right. = 1$ and if $c | a$ and $d \vert b$ , then $\langle c , d \rangle = 1$ -

2.If $( a , b ) = ( a , c ) = 1$ , then $( a , b c ) = 1$

$^ { 3 , }$ If $( a , b ) = 1$ , then $( a ^ { n } , b ^ { k } ) = 1$ for all $n \geq 1 , k \geq 1 .$

4. If $( a , b ) = 1$ , then $( a + b , a - b )$ is either 1 or 2.

5.If $( a , b ) = 1$ , then $( a + b , a ^ { 2 } - a b + b ^ { 2 } )$ is either 1 or 3.

6. If $( a , b ) = 1$ and if $d | ( a + b )$ then $( a , d ) = ( b , d ) = 1$

7. A rational number $a / b$ with $( a , b ) = 1$ is called a reduced fraction. If the sum of two reduced fractions is an integer, say $\ ( a / b ) + \left( c / d \right) = n$ , prove that $| b | = | d |$ .

8. An integer is called squarefree if it is not divisible by the square of any prime. Prove that for every $n \geq 1$ there exist uniquely determined $a > 0$ and $b > 0$ such that $n = a ^ { 2 } b$ where $b$ is squarefree.

9. For each of the following statements, either give a proof or exhibit a counter example.

(a) If $b ^ { 2 } | n$ and $a ^ { 2 } \left| n \right.$ and $a ^ { 2 } \leq b ^ { 2 }$ , then $a | b$ (b) If $b ^ { 2 }$ is the largest square divisor of $n$ then $a ^ { 2 } | { n }$ implies $a | b$ -

10. Given $x$ and $y _ { \ast }$ , let $m = a x + b y$ , $n = c x + d y$ where $a d - b c = \pm 1$ . Prove that $( m , n ) = ( x , y )$

11. Prove that $n ^ { 4 } + 4$ is composite if $n > 1$ -

In Exercises 12, 13, and $1 4 , a , b , c , m , n$ denote positive integers.

12. For each of the following statements either give a proof or exhibit a counter example.

(a) If $a ^ { n } | b ^ { n }$ then $a | b$ - (b) If $n ^ { n } | m ^ { m }$ then $n | m$ (c) If $a ^ { n } | 2 b ^ { n }$ and $n > 1$ then $a | b$

13. If $\left( a , b \right) = 1$ and $\{ a / b \} ^ { m } = n$ prove that $b = 1$ (b) If $\pmb { n }$ is not the mth power of a positive integer, prove that $n ^ { 1 / m }$ is irrational.

14.If $( a , b ) = 1$ and $a b = c ^ { n }$ , prove that $a = x ^ { n }$ and $b = y ^ { n }$ for some $x$ and $y$ [Hint: Consider $d = ( a , c ) .$

15. Prove that every $n \geq 1 2$ is the sum of two composite numbers.

16. Prove that if $2 ^ { n } - 1$ is prime, then $n$ is prime.

17. Prove that if $2 ^ { n } + 1$ is prime, then $n$ is a power of 2.

18.If $m \neq n$ compute the gcd $( a ^ { 2 ^ { m } } + 1 , a ^ { 2 ^ { n } } + 1 )$ in terms of $a$ [Hint: Let $A _ { n } = a ^ { 2 ^ { n } } + 1$ and show that $A _ { n } | ( A _ { m } - 2 )$ if $m > n .$ ]id:)

19. The Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, ... is defined by the recursion formula $a _ { n + 1 } = a _ { n } + a _ { n - 1 }$ , with $a _ { 1 } = a _ { 2 } = 1$ . Prove that $( a _ { n } , a _ { n + 1 } ) = 1$ for each $\pmb { n }$ ,

20. Let $d = ( 8 2 6 , 1 8 9 0 )$ . Use the Euclidean algorithm to compute $d$ , then express $d$ as a linear combination of 826 and 1890.

21. The least common multiple (lcm) of two integers $a$ and $b$ is denoted by $[ a , b ]$ or by $a M b$ , and is defined as follows:

$$
{ \begin{array} { l } { [ a , b ] = | a b | / ( a , b ) \quad { \mathrm { i f ~ } } a \neq 0 { \mathrm { ~ a n d ~ } } b \neq 0 , } \\ { [ a , b ] = 0 \quad { \mathrm { i f ~ } } a = 0 { \mathrm { ~ o r ~ } } b = 0 . } \end{array} }
$$

Prove that the lcm has the following properties:

$$
\begin{array} { r l } & { \mathrm { I f } a = \prod _ { i = 1 } ^ { \infty } p _ { i } ^ { a _ { * } } \mathrm { a n d } b = \prod _ { i = 1 } ^ { \infty } p _ { i } ^ { b _ { i } } \mathrm { t h e n } [ a , b ] = \prod _ { i = 1 } ^ { \infty } p _ { i } ^ { c _ { 1 } } , \mathrm { w h e r e } c _ { i } = \operatorname* { m a x } \{ a _ { i } , b _ { i } \} . } \\ & { ( a D b ) M c = ( a M c ) D ( b M c ) . } \\ & { ( a M b ) D c = ( a D c ) M ( b D c ) . } \end{array}
$$

( $D$ and $M$ are distributive with respect to each other)

22. Prove that $( a , b ) = ( a + b , [ a , b ] )$

23. The sum of two positive integers is 5264 and their least common multiple is 200,340. Determine the two integers.

24. Prove the following multiplicative property of the gcd :

$$
( a h , b k ) = ( a , b ) ( h , k ) \biggl ( \frac { a } { ( a , b ) } , \frac { k } { ( h , k ) } \biggr ) \biggl ( \frac { b } { ( a , b ) } , \frac { h } { ( h , k ) } \biggr ) .
$$

In particular this shows that $( a h , b k ) = ( a , k ) ( b , h )$ whenever $( a , b ) = ( h , k ) = 1$

Prove each of the statements in Exercises 25 through 28. All integers are positive.

25. If $\left\{ a , b \right\} = 1$ there exist $x > 0$ and $y > 0$ such that $a x - b y = 1$

26.If $( a , b ) = 1$ and $x ^ { a } = y ^ { b }$ then $x = n ^ { b }$ and $y = n ^ { a }$ for some $n$ [Hint : Use Exercises 25 and 13.]

27.(a) If $( a , b ) = 1$ then for every $n > a b$ there exist positive $x$ and $y$ such that $\pmb { n } =$ $a x + b y$ , (b) If $( a , b ) = 1$ there are no positive $x$ and $y$ such that $a b = a x + b y$ (d:

28.If $a > 1$ then $( a ^ { m } - 1 , a ^ { n } - 1 ) = a ^ { ( m , n ) } - 1 .$

29. Given $n > 0$ , let $s$ be a set whose elements are positive integers $\leq 2 n$ such that if $a$ and $b$ are in $s$ and $a \neq b$ then $a \times b$ . What is the maximum number of integers that $s$ can contain? $[ H i n t : S$ can contain at most one of the integers $1 , 2 , 2 ^ { 2 } , 2 ^ { 3 } , \ldots$ at most one of 3 $\left. \begin{array} { r l r } \end{array} \right. , 3 \cdot 2 , 3 \cdot 2 ^ { 2 } , \ldots$ , etc.]

30.If $n > 1$ prove that the sum

$$
\sum _ { k \mathop { = } 1 } ^ { n } { \frac { 1 } { k } }
$$

is not an integer.

# 2 Arithet Ml Ficio d

# 2.1 Introduction

Number theory, like many other branches of mathematics, is often concerned with sequences of real or complex numbers. In number theory such sequences are called arithmetical functions.

Definition A real- or complex-valued function defined on the positive integers is called an arithmetical function or a number-theoretic function.

This chapter introduces several arithmetical functions which play an important role in the study of divisibility properties of integers and the distribution of primes. The chapter also discusses Dirichlet multiplication, a concept which helps clarify interrelationships between various arithmetical functions.

We begin with two important examples, the Möbius function $\mu ( n )$ and the Euler totient function $\varphi ( n )$

# 2.2 The Möbius function $\mu ( n )$

Definition The Möbius function $\mu$ is defi ned as follows:

$$
\mu ( 1 ) = 1 ;
$$

If $n > 1$ , write $n = { p _ { 1 } } ^ { a _ { 1 } } \ldots { p _ { k } } ^ { a _ { k } }$ .Then

$$
\begin{array} { r l } & { \mu ( n ) = ( - 1 ) ^ { k } \mathrm { i f } a _ { 1 } = a _ { 2 } = \dots = a _ { k } = 1 , } \\ & { \mu ( n ) = 0 \mathrm { o t h e r w i s e } . } \end{array}
$$

Note that $\mu ( n ) = 0$ if and only if $\pmb { n }$ has a square factor $> 1$

Here is a short table of values of $\mu ( n )$ :

$$
\begin{array} { r l }  n \colon { \mathrm { ~ \small ~ { ~ \small ~ 1 ~ } ~ { ~ 2 ~ } ~ { ~ 3 ~ } ~ { ~ 4 ~ } ~ { ~ 5 ~ } ~ { ~ 6 ~ } ~ { ~ 7 ~ } ~ { ~ 8 ~ } ~ { ~ 9 ~ } ~ { ~ 1 0 ~ } ~ { ~ } ~ } } \\  \mu ( n ) \colon { \mathrm { ~ \small ~ { ~ \small ~ 1 ~ } ~ { ~ - 1 ~ } ~ { ~ - 1 ~ } ~ { ~ 0 ~ } ~ { ~ - 1 ~ } ~ { ~ 1 ~ } ~ { ~ - 1 ~ } ~ { ~ 0 ~ } ~ { ~ 0 ~ } ~ { ~ 1 ~ } ~ { ~ } ~ } } \end{array}
$$

The Möbius function arises in many different places in number theory. One of its fundamental properties is a remarkably simple formula for the divisor sum $\sum _ { d \mid n } \mu ( d ) ,$ ,extended over the positive divisors of n. In this formula, $[ x ]$ denotes the greatest integer $\leq x .$

Theorem 2.1 If $\mathbf { { \dot { n } } \geq 1 }$ we have

$$
\sum _ { d \mid n } \mu ( d ) = { \Bigg [ } { \frac { 1 } { n } } { \Bigg ] } = { \Bigg \{ } 1 \quad i f n = 1 { \mathrm { , } }
$$

Proor. The formula is clearly true if $n = 1$ . Assume, then, that $n > 1$ and write $n = { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { k } } ^ { a _ { k } }$ . In the sum $\sum _ { d | n } \mu ( d )$ the only nonzero terms come from $d = 1$ and from those divisors of $\pmb { n }$ which are products of distinct primes. Thus

$$
\begin{array} { l } { \displaystyle \sum _ { d \mid n } \mu ( d ) = \mu ( 1 ) + \mu ( p _ { 1 } ) + \dots + \mu ( p _ { k } ) + \mu ( p _ { 1 } p _ { 2 } ) + \dots + \mu ( p _ { k - 1 } p _ { k } ) } \\ { \displaystyle \qquad + \dots + \mu ( p _ { 1 } p _ { 2 } \dotsm p _ { k } ) } \\ { \displaystyle = 1 + \binom { k } { 1 } ( - 1 ) + \binom { k } { 2 } ( - 1 ) ^ { 2 } + \dots + \binom { k } { k } ( - 1 ) ^ { k } = ( 1 - 1 ) ^ { k } = 0 . } \end{array}
$$

# 2.3 The Euler totient function $\varphi ( n )$

Definition If $n \geq 1$ the Euler totient $\varphi ( n )$ is defined to be the number of positive integers not exceeding $\pmb { n }$ which are relatively prime to $\pmb { n }$ ; thus,

$$
\varphi ( n ) = \sum _ { k \ : = 1 } ^ { n } 1 ,
$$

where the' indicates that the sum is extended over those $k$ relatively prime to $\pmb { n }$

Here is a short table of values of $\varphi ( n )$ :

$$
\begin{array} { r } { n : \quad 1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6 \quad 7 \quad 8 \quad 9 \quad 1 0 \neq 1 } \\ { \varphi ( n ) : \quad 1 \quad 1 \quad 2 \quad 2 \quad 4 \quad 2 \quad 6 \quad 4 \quad 6 \quad 4 \quad 4 } \end{array}
$$

A in the case of $\mu ( n )$ there isasimple formula for the divisor sum $\sum _ { d \mid n } \varphi ( d ) .$

# 2: Arithmetical functions and Dirichlet multiplication

Theorem 2.2 If $n \geq 1$ we have

$$
\sum _ { d \mid n } \varphi ( d ) = n .
$$

PROOF. Let $s$ denote the set $\left\{ 1 , 2 , \ldots , n \right\}$ . We distribute the integers of $s$ into disjoint sets as follows. For each divisor $d$ of $\pmb { n }$ ,let

$$
A ( d ) = \{ k { : } ( k , n ) = d , 1 \leq k \leq n \} .
$$

That is, $A ( d )$ contains those elements of $s$ which have the gcd $d$ with $\pmb { n } .$ The sets $A ( d )$ form a disjoint collection whose union is $s$ Therefore if $f ( d )$ denotes the number of integers in $A ( d )$ we have

$$
\sum _ { d \mid n } f ( d ) = n .
$$

But $( k , n ) = d$ if and only if $( k / d , n / d ) = 1$ and $0 < k \leq n$ if and only if $0 < k / d \leq n / d .$ Therefore, if we let $q = k / d$ , there is a one-to-one correspondence between the elements in $A ( d )$ and those integers $q$ satisfying $0 < q \leq n / d _ { \cdot }$ , $( q , n / d ) = 1$ . The number of such $\pmb q$ is $\varphi ( n / d )$ . Hence $f ( d ) = \varphi ( n / d )$ and (2) becomes

$$
\sum _ { d | n } \varphi ( n / d ) = n .
$$

But this is equivalent to the statement $\sum _ { d \mid n } \varphi ( d ) = n$ because when $d$ runs through all divisors of n so does $n / d$ . This completes the proof.

# 2.4 A relation connecting $\varphi$ and $\mu$

The Euler totient is related to the Möbius function through the following formula:

Theorem 2.3 If $n \geq 1$ we have

$$
\varphi ( n ) = \sum _ { d \mid n } \mu ( d ) { \frac { n } { d } } .
$$

PRooF. The sum (1) defi ning $\varphi ( n )$ can be rewritten in the form

$$
\varphi ( n ) = \sum _ { k = 1 } ^ { n } { \Bigg [ } { \frac { 1 } { ( n , k ) } } { \Bigg ] } ,
$$

where now $k$ runs through all integers $\leq n .$ Now we use Theorem 2.1 with n replaced by $( n , k )$ to obtain

$$
\varphi ( n ) = \sum _ { k = 1 } ^ { n } \sum _ { d \mid ( n , k ) \atop d \mid k } \mu ( d ) = \sum _ { k = 1 } ^ { n } \sum _ { d \mid n } \mu ( d ) .
$$

For a fixed divisor $d$ of $n$ we must sum over al those $k$ in the range $1 \leq k \leq n$ which are multiples of $d$ If we write $k = q d$ then $1 \leq k \leq n$ if and only if $1 \leq q \leq n / d$ . Hence the last sum for $\varphi ( n )$ can be written as

$$
\varphi ( n ) = \sum _ { d \mid n } \sum _ { q = 1 } ^ { n / d } \mu ( d ) = \sum _ { d \mid n } \mu ( d ) \sum _ { q = 1 } ^ { n / d } 1 = \sum _ { d \mid n } \mu ( d ) { \frac { n } { d } } .
$$

This proves the theorem.

# 2.5 A product formula for $\varphi ( n )$

The sum for $\varphi ( n )$ in Theorem 2.3 can also be expressed as a product extended over the distinct prime divisors of $n$

Theorem 2.4 For $n \geq 1$ we have

$$
\varphi ( n ) = n \prod _ { p \mid n } { \Bigg ( } 1 - { \frac { 1 } { p } } { \Bigg ) } .
$$

PROOF. For $n = 1$ the product is empty since there are no primes which divide 1. In this case it is understood that the product is to be assigned the value 1.

Suppose, then, that $n > 1$ and let $p _ { 1 } , \ldots , p _ { r }$ be the distinct prime divisors of $\pmb { n }$ . The product can be written as

$$
\begin{array} { l } { \displaystyle \prod _ { p | n } \biggl ( 1 - \frac { 1 } { p } \biggr ) = \prod _ { i = 1 } ^ { r } \biggl ( 1 - \frac { 1 } { p _ { i } } \biggr ) } \\ { = 1 - \sum \frac { 1 } { p _ { i } } + \sum \frac { 1 } { p _ { i } p _ { j } } - \sum \frac { 1 } { p _ { i } p _ { j } p _ { k } } + \dots + \frac { ( - 1 ) ^ { r } } { p _ { 1 } p _ { 2 } \dotsm p _ { r } } . } \end{array}
$$

On the right, in a term such as $\sum 1 / p _ { i } p _ { j } p _ { k }$ it is understood that we consider all possible products $p _ { i } p _ { j } p _ { k }$ of distinct prime factors of $\pmb { n }$ taken three at a time. Note that each term on the right of (4) is of the form $\pm 1 / d$ where $d$ is a divisor of $\pmb { n }$ which is either 1 or a product of distinct primes. The numerator $\pm 1$ is exactly $\mu ( d )$ Since $\mu ( d ) = 0$ if $d$ is divisible by the square of any $p _ { i }$ we see that the sum in (4) is exactly the same as

$$
\sum _ { d \mid n } { \frac { \mu ( d ) } { d } } .
$$

This proves the theorem.

Many properties of $\varphi ( n )$ can be easily deduced from this product formula. Some of these are listed in the next theorem.

# 2: Arithmetical functions and Dirichlet multiplication

Theorem 2.5 Euler's totient has the following properties:

(a) $\varphi ( p ^ { \alpha } ) = p ^ { \alpha } - p ^ { \alpha - 1 }$ for prime $p$ and $\alpha \geq 1$ .   
(b) $\varphi ( m n ) = \varphi ( m ) \varphi ( n ) ( d / \varphi ( d ) )$ , where $d = ( m , n )$   
(c) $\varphi ( m n ) = \varphi ( m ) \varphi ( n ) i f ( m , n ) = 1 .$ ,   
(d) $a | b$ implies $\varphi ( a ) | \varphi ( b )$   
(e) $\varphi ( n )$ is even for $n \geq 3 .$ Moreover, if n has $r$ distinct odd prime factors, then $2 ^ { r } \lvert \varphi ( n )$

PRooF. Part (a) follows at once by taking $n = p ^ { \alpha }$ in (3). To prove part (b) we write

$$
{ \frac { \varphi ( n ) } { n } } = \prod _ { p \mid n } { \Bigg ( } 1 - { \frac { 1 } { p } } { \Bigg ) } .
$$

Next we note that each prime divisor of mn is either a prime divisor of $m$ or of ${ \pmb n } _ { : }$ , and those primes which divide both $m$ and $\pmb { n }$ also divide $( m , n )$ . Hence

$$
\frac { \varphi ( m n ) } { m n } = \prod _ { p \mid m n } \left( 1 - \frac { 1 } { p } \right) = \frac { \prod _ { p \mid m } \left( 1 - \frac { 1 } { p } \right) \prod _ { p \mid n } \left( 1 - \frac { 1 } { p } \right) } { \prod _ { p \mid m , n } \left( 1 - \frac { 1 } { p } \right) } = \frac { \frac { \varphi ( m ) } { m } \frac { \varphi ( n ) } { n } } { \frac { \varphi ( d ) } { d } } ,
$$

for which we get (b). Part (c) is a special case of (b).

Next we deduce (d) from (b). Since $a | b$ we have $b = a c$ where $1 \leq c \leq b$ If $c = b$ then $a = 1$ and part (d) is trivially satisfied. Therefore, assume $c < b$ . From (b) we have

$$
\varphi ( b ) = \varphi ( a c ) = \varphi ( a ) \varphi ( c ) { \frac { d } { \varphi ( d ) } } = d \varphi ( a ) { \frac { \varphi ( c ) } { \varphi ( d ) } } ,
$$

where $d = ( a , c )$ . Now the result follows by induction on $b$ .For $b = 1$ it holds trivially. Suppose, then, that (d) holds for all integers $< b$ .Then it holds for c so $\varphi ( d ) | \varphi ( c )$ since $d | c .$ Hence the right member of (5) is a multiple of $\varphi ( a )$ which means $\varphi ( a ) | \varphi ( b )$ . This proves (d).

Now we prove (e). If $n = 2 ^ { \alpha }$ , $\alpha \geq 2 ,$ part (a) shows that $\varphi ( n )$ is even. If $\pmb { n }$ has at least one odd prime factor we write

$$
\varphi ( n ) = n \prod _ { p \mid n } { \frac { p - 1 } { p } } = { \frac { n } { \prod _ { p \mid n } p } } \prod _ { p \mid n } ( p - 1 ) = c ( n ) \prod _ { p \mid n } ( p - 1 ) ,
$$

where $c ( n )$ is an integer. The product multiplying $c ( n )$ is even so $\varphi ( n )$ is even. Moreover, each odd prime $p$ contributes a factor 2 to this product, so $2 ^ { r } | \varphi ( n )$ if $\pmb { n }$ has $r$ distinct odd prime factors. □

# 2.6 The Dirichlet product of arithmetical functions

In Theorem 2.3 we proved that

$$
\varphi ( n ) = \sum _ { d \mid n } \mu ( d ) { \frac { n } { d } } .
$$

The sum on the right is of a type that occurs frequently in number theory. These sums have the form

$$
\sum _ { d \mid n } f ( d ) g { \binom { n } { d } }
$$

where $f$ and $\pmb { g }$ are arithmetical functions, and it is worthwhile to study some properties which these sums have in common. We shall find later that sums of this type arise naturally in the theory of Dirichlet series. It is fruitful to treat these sums as a new kind of multiplication of arithmetical functions, a point of view introduced by E. T. Bell [4] in 1915.

Definition If $f$ and $g$ are two arithmetical functions we define their Dirichlet product (or Dirichlet convolution) to be the arithmetical function $h$ defined by the equation

$$
h ( n ) = \sum _ { d \mid n } f ( d ) g { \binom { n } { d } } .
$$

Notation We write $f * g$ for $h$ and $( f * g ) ( n )$ for $h ( n )$ . The symbol $N$ will be used for the arithmetical function for which $N ( n ) = n$ for all $\pmb { n }$ . In this notation, Theorem 2.3 can be stated in the form

$$
\varphi = \mu * N .
$$

The next theorem describes algebraic properties of Dirichlet multiplication.

Theorem 2.6 Dirichlet multiplication is commutative and associative. That is, for any arithmetical functions $f , g , k$ we have

$$
\begin{array} { c } { { f * g = g * f \qquad ( c o m m u t a t i v e l a w ) } } \\ { { ( f * g ) * k = f * ( g * k ) \qquad ( a s s o c i a t i v e l a w ) . } } \end{array}
$$

ProoF. First we note that the definition of $f * g$ can also be expressed as follows:

$$
( f * g ) ( n ) = \sum _ { a \cdot b = n } f ( a ) g ( b ) ,
$$

where $^ { a }$ and $b$ vary over all positive integers whose product is $\pmb { n } .$ This makes the commutative property self-evident.

To prove the associative property we let $A = g * k$ and consider $f * A =$ $f * ( g * k )$ .We have

$$
\begin{array} { l } { { ( f * A ) ( n ) = \displaystyle \sum _ { a \cdot d = n } f ( a ) A ( d ) = \sum _ { a \cdot d = n } f ( a ) \sum _ { b \cdot c = d } g ( b ) k ( c ) } } \\ { { = \displaystyle \sum _ { a \cdot b \cdot c = n } f ( a ) g ( b ) k ( c ) . } } \end{array}
$$

In the same way, if we let $B = f * g$ and consider $B * k$ we are led to the same formula for $( B * k ) ( n )$ .Hence $f * A = B * k$ which means that Dirichlet multiplication is associative. □

We now introduce an identity element for this multiplication.

Definition The arithmetical function $I$ given by

$$
I ( n ) = { \Bigg [ } { \frac { 1 } { n } } { \Bigg ] } = { \Bigg \{ } _ { 0 } ^ { 1 } \quad { \mathrm { i f ~ } } n = 1 { \mathrm { , ~ } } 
$$

is called the identity function.

Theorem 2.7 For all f we have I × f = f × I = f.

PRooF. We have

$$
( f * I ) ( n ) = \sum _ { d \mid n } f ( d ) I { \binom { n } { d } } = \sum _ { d \mid n } f ( d ) { \binom { d } { n } } = f ( n )
$$

since $[ d / n ] = 0$ if $d < n$

# 2.7 Dirichlet inverses and the Möbius inversion formula

Theorem 2.8 If $\boldsymbol { \mathscr { f } }$ is an arithmetical function with $f ( 1 ) \neq 0$ there is a unique arithmetical function $f ^ { - 1 }$ , called the Dirichlet inverse of f, such that

$$
f * f ^ { - 1 } = f ^ { - 1 } * f = I .
$$

Moreover, $f ^ { - 1 }$ is given by the recursion formulas

$$
f ^ { - 1 } ( 1 ) = \frac { 1 } { f ( 1 ) } , \qquad f ^ { - 1 } ( n ) = \frac { - 1 } { f ( 1 ) } \sum _ { \stackrel { d \mid n } { d < n } } f \biggl ( \frac { n } { d } \biggr ) f ^ { - 1 } ( d ) \quad f o r \ : n > 1 .
$$

PROOF. Given $f ,$ we shall show that the equation $( f * f ^ { - 1 } ) ( n ) = I ( n )$ has a unique solution for the function values $f ^ { - 1 } ( n )$ For $n = 1$ we have to solve the equation

$$
( f * f ^ { - 1 } ) ( 1 ) = I ( 1 )
$$

which reduces to

$$
f ( 1 ) f ^ { - 1 } ( 1 ) = 1 .
$$

Since $f ( 1 ) \neq 0$ there is one and only one solution, namely $f ^ { - 1 } ( 1 ) = 1 / f ( 1 ) .$ Assume now that the function values $f ^ { - 1 } ( k )$ have been uniquely determined for all $k < n$ . Then we have to solve the equation $( f * f ^ { - 1 } ) ( n ) = I ( n ) .$

$$
\sum _ { d \mid n } f { \binom { n } { d } } f ^ { - 1 } ( d ) = 0 .
$$

This can be written as

$$
f ( 1 ) f ^ { - 1 } ( n ) + \sum _ { \stackrel { d \mid n } { d < n } } f \left( { \frac { n } { d } } \right) f ^ { - 1 } ( d ) = 0 .
$$

If the values $f ^ { - 1 } ( d )$ are known for all divisors $d < n .$ , there is a uniquely determined value for $f ^ { - 1 } ( n ) ,$ namely,

$$
f ^ { - 1 } ( n ) = { \frac { - 1 } { f ( 1 ) } } \sum _ { \underset { d < n } { d | n } } f { \binom { n } { d } } f ^ { - 1 } ( d ) ,
$$

since $f ( 1 ) \neq 0$ . This establishes the existence and uniqueness of $f ^ { - 1 }$ by induction. □

Note. We have $( f * g ) ( 1 ) = f ( 1 ) g ( 1 ) .$ Hence, if $f ( 1 ) \neq 0$ and $g ( 1 ) \neq 0$ then $( f * g ) ( 1 ) \neq 0$ This fact, along with Theorems 2.6, 2.7, and 2.8, tells us that, in the language of group theory, the set of all arithmetical functions $f$ with $f ( 1 ) \neq 0$ forms an abelian group with respect to the operation $^ *$ , the identity element being the function $\pmb { I }$ . The reader can easily verify that

$$
( f * g ) ^ { - 1 } = f ^ { - 1 } * g ^ { - 1 } \quad { \mathrm { i f ~ } } f ( 1 ) \neq 0 { \mathrm { ~ a n d ~ } } g ( 1 ) \neq 0 .
$$

Definition We define the unit function $u$ to be the arithmetical function such that $u ( n ) = 1$ for all $\pmb { n }$ .

Theorem 2.1 states that $\begin{array} { r } { \sum _ { d \mid n } \mu ( d ) = I ( n ) . } \end{array}$ In the notation of Dirichlet multiplication this becomes

$$
\mu * u = I .
$$

Thus $\pmb { u }$ and $\mu$ are Dirichlet inverses of each other:

$$
u = \mu ^ { - 1 } \qquad \mathrm { a n d } \qquad \mu = u ^ { - 1 } .
$$

This simple property of the Möbius function, along with the associative property of Dirichlet multiplication, enables us to give a simple proof of the next theorem.

# 2: Arithmetical functions and Dirichlet multiplication

Theorem 2.9 Möbius inversion formula. The equation

$$
f ( n ) = \sum _ { d \mid n } g ( d )
$$

implies

$$
g ( n ) = \sum _ { d \mid n } f ( d ) \mu { \Biggr ( } { \frac { n } { d } } { \Biggr ) } .
$$

Conversely, (7) implies (6).

PRoor. Equation (6) states that $f = g * u$ . Multiplication by $\mu$ gives $f * \mu =$ $( g * u ) * \mu = g * ( u * \mu ) = g * I = g ,$ , which is (7). Conversely, multiplication of $f * \mu = g$ by $\pmb { u }$ gives (6). □

The Möbius inversion formula has already been illustrated by the pair of

formulas in Theorem

$$
\begin{array} { r l } { \xrightarrow { \infty } 2 . 2 \mathrm { a n d } 2 . 3 : } & { { } \xrightarrow { \infty } \mathrm { w } ( \lambda ) \binom { \infty } { \lambda } = \phi ( \lambda ) } \\ { \dot { n } = \displaystyle \sum _ { d \mid n } \varphi ( d ) , } & { { } ~ \phi ( n ) = \displaystyle \sum _ { d \mid n } \phi ( \lambda ) \binom { \infty } { \lambda } . } \end{array}
$$

# 2.8 The Mangoldt function $\Lambda ( n )$

We introduce next Mangoldt's function $\Lambda$ which plays a central role in the distribution of primes.

Definition For every integer $n \geq 1$ we define

Here is a short table of values of $\Lambda ( n )$ :

$$
\begin{array} { r c c c c c c c c c c c c c c c c c c } { { n : } } & { { 1 } } & { { 2 } } & { { 3 } } & { { 4 } } & { { 5 } } & { { 6 } } & { { 7 } } & { { 8 } } & { { 9 } } & { { \cdots } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } } & { { } }  \end{array}
$$

The proof of the next theorem shows how this function arises naturally from the fundamental theorem of arithmetic.

Theorem 2.10 If $n \geq 1$ we have

$$
\log n = \sum _ { d \mid n } \Lambda ( d ) .
$$

PRooF. The theorem is true if $n = 1$ since both members are 0. Therefore, assume that $n > 1$ and write

$$
n = \prod _ { k = 1 } ^ { r } p _ { k } ^ { a _ { k } } .
$$

Taking logarithms we have

$$
\log n = \sum _ { k = 1 } ^ { r } a _ { k } \log p _ { k } .
$$

Now consider the sum on the right of (8). The only nonzero terms in the sum come from those divisors $d$ of the form ${ p _ { k } } ^ { m }$ for $m = 1 , 2 , \ldots , a _ { k }$ and $k =$ $1 , 2 , \ldots , r .$ Hence

$$
\sum _ { d \mid n } \Lambda ( d ) = \sum _ { k = 1 } ^ { r } \sum _ { m = 1 } ^ { a _ { k } } \Lambda ( p _ { k } { } ^ { m } ) = \sum _ { k = 1 } ^ { r } \sum _ { m = 1 } ^ { a _ { k } } \log p _ { k } = \sum _ { k = 1 } ^ { r } a _ { k } \log p _ { k } = \log n ,
$$

which proves (8).

Now we use Möbius inversion to express $\Lambda ( n )$ in terms of the logarithm.

Theorem 2.11 I ${ \boldsymbol { r } } _ { n } \geq 1$ we have

$$
\Lambda ( n ) = \sum _ { d | n } \mu ( d ) \mathrm { l o g } { \frac { n } { d } } = - \sum _ { d | n } \mu ( d ) \mathrm { l o g } d .
$$

PRooF. Inverting (8) by the Möbius inversion formula we obtain

$$
\begin{array} { l } { { \Lambda ( n ) = \displaystyle \sum _ { d | n } \mu ( d ) \log \frac { n } { d } = \log n \sum _ { d | n } \mu ( d ) - \sum _ { d | n } \mu ( d ) \log d } } \\ { ~ } \\ { { = I ( n ) \mathrm { l o g } n - \sum _ { d | n } \mu ( d ) \mathrm { l o g } d . } } \end{array}
$$

Since $I ( n ) { \log { n } } = 0$ for all $\pmb { n }$ the proof is complete.

# 2.9 Multiplicative functions

We have already noted that the set of all arithmetical functions $f$ with $f ( 1 ) \neq 0$ forms an abelian group under Dirichlet multiplication. In this section we discuss an important subgroup of this group, the so-called multiplicative functions.

Definition An arithmetical function $f$ is called multiplicative if $f$ is not identically zero and if

$$
f ( m n ) = f ( m ) f ( n ) \quad { \mathrm { w h e n e v e r } } \left( m , n \right) = 1 .
$$

A multiplicative function $f$ is called completely multiplicative if we also have

$$
f ( m n ) = f ( m ) f ( n ) \quad { \mathrm { f o r ~ a l l ~ } } m , n .
$$

ExAMPLE 1 Let $f _ { \alpha } ( n ) = n ^ { \alpha }$ where $\pmb { \alpha }$ is a fixed real or complex number. This function is completely multiplicative. In particular, the unit function $u = f _ { 0 }$

# 2: Arithmetical functions and Dirichlet multiplication

is completely multiplicative. We denote the function $f _ { \alpha }$ by $N ^ { \alpha }$ and call it the power function.

ExAMPLE 2 The identity function $I ( n ) = [ 1 / n ]$ is completely multiplicative.

ExAMPLE 3 The Möbius function is multiplicative but not completely multiplicative. This is easily seen from the definition of $\mu ( n )$ . Consider two relatively prime integers m and $\pmb { n } .$ . If either m or $\pmb { n }$ has a prime-square factor then so does mn, and both $\mu ( m n )$ and $\mu ( m ) \mu ( n )$ are zero. If neither has a square factor write $m = { p _ { 1 } } \cdots { p _ { s } }$ and $n = q _ { 1 } \cdots q _ { t }$ where the $p _ { i }$ and $\pmb { q _ { i } }$ are distinct primes. Then $\mu ( m ) = ( - 1 ) ^ { s }$ , $\mu ( n ) = ( - 1 ) ^ { t }$ and $\mu ( m n ) = ( - 1 ) ^ { s + t } = \mu ( m ) \mu ( n ) .$ This shows that $\mu$ is multiplicative. It is not completely multiplicative since $\mu ( 4 ) = 0$ but $\mu ( 2 ) \mu ( 2 ) = 1$ .

ExAMPLE 4 The Euler totient $\varphi ( n )$ is multiplicative. This is part (c) of Theorem 2.5. It is not completely multiplicative since $\varphi ( 4 ) = 2$ whereas $\varphi ( 2 ) \varphi ( 2 ) = 1$

ExAMPLE 5 The ordinary product fg of two arithmetical functions $f$ and $\pmb { g }$ is defined by the usual formula

$$
( f g ) ( n ) = f ( n ) g ( n ) .
$$

Similarly, the quotient $f / g$ is defi ned by the formula

$$
{ \bigg ( } { \frac { f } { g } } { \bigg ) } ( n ) = { \frac { f ( n ) } { g ( n ) } } \qquad { \mathrm { w h e n e v e r ~ } } g ( n ) \neq 0 .
$$

If $f$ and $\pmb { g }$ are multiplicative, so are $f g$ and $f / g$ If $f$ and $\pmb { g }$ are completely multiplicative, so are $f g$ and $f / g$ ,

We now derive some properties common to all multiplicative functions.

Theorem 2.12 If f is multiplicative then $f ( 1 ) = 1$

PROOF. We have $f ( n ) = f ( 1 ) f ( n )$ since $( n , 1 ) = 1$ for all $\pmb { n }$ . Since $f$ is not identically zero we have $f ( n ) \neq 0$ for some n, s $\ o { f ( 1 ) } = 1$ □

Note. Since $\Lambda ( 1 ) = 0$ , the Mangoldt function is not multiplicative.

Theorem 2.13 Given $f w i t h f ( 1 ) = 1 .$ Then:

(a) $f$ is multiplicative $i f ,$ and only if,

$$
f ( p _ { 1 } { } ^ { a _ { 1 } } \cdot \cdot \cdot p _ { r } { } ^ { a _ { r } } ) = f ( p _ { 1 } { } ^ { a _ { 1 } } ) \cdot \cdot \cdot f ( p _ { r } { } ^ { a _ { r } } )
$$

for all primes $p _ { i }$ and all integers $a _ { i } \geq 1$

(b) Iff is multiplicative, then $f$ is completely multiplicative if, and only if,

$$
f ( p ^ { a } ) = f ( p ) ^ { a }
$$

for all primes $p$ and all integers $a \ge 1$

Proor. The proof follows easily from the definitions and is left as an exercise for the reader.

# 2.10 Multiplicative functions and Dirichlet multiplication

Theorem 2.14 If f and $g$ are muliplicative, so is their Dirichlet product $f * g$

PRooF. Let $h = f * g$ and choose relatively prime integers $m$ and n. Then

$$
h ( m n ) = \sum _ { c \mid m n } f ( c ) g \biggl ( \frac { m n } { c } \biggr ) .
$$

Now every divisor $c$ of mn can be expressed in the form $c = a b$ where $a ! m$ and $b | n$ . Moreover, $( a , b ) = 1$ , $( m / a , n / b ) = 1 _ { ; }$ , and there is a one-to-one correspondence between the set of products ab and the divisors $c$ of mn. Hence

$$
h ( m n ) = \sum _ { \stackrel { a \ v { j } \ v { m } } { b \ v { i } \ v { n } } } f ( a b ) g \biggl ( { \frac { m n } { a b } } \biggr ) = \sum _ { \stackrel { a \ v { j } \ v { m } } { b \ v { i } \ v { n } } } f ( a ) f ( b ) g \biggl ( { \frac { m } { a } } \biggr ) g \biggl ( { \frac { n } { b } } \biggr )
$$

$$
= \sum _ { a \vert m } f ( a ) g \biggl ( { \frac { m } { a } } \biggr ) \sum _ { b \vert n } f ( b ) g \biggl ( { \frac { n } { b } } \biggr ) = h ( m ) h ( n ) .
$$

This completes the proof.

Warning. The Dirichlet product of two completely multiplicative functions need not be completely multiplicative.

A slight modifcation of the foregoing proof enables us to prove:

Theorem 2.15 If both g and f $\dot { * } g$ are multiplicative, then f is also multiplicative.

PRoor. We shall assume that $f$ is not multiplicative and deduce that $f * g$ is also not multiplicative. Let $h = f * g$ . Since $f$ is not multiplicative there exist positive integers $\pmb { m }$ and $\pmb { n }$ with $( m , n ) = 1$ such that

$$
f ( m n ) \neq f ( m ) f ( n ) .
$$

We choose such a pair m and $\pmb { n }$ for which the product mn is as small as possible. If $m n = 1$ then $f ( 1 ) \neq ^ { * } f ( 1 ) f ( 1 )$ $f ( 1 ) \neq 1$ .Since $h ( 1 ) = f ( 1 ) g ( 1 ) =$ $f ( 1 ) \neq 1$ , this shows that $h$ is not multiplicative.

If mn $> 1$ , then we have $f ( a b ) = f ( a ) f ( b )$ for all positive integers $\pmb { a }$ and $b$ with $( a , b ) = 1$ and $a b < m n$ . Now we argue as in the proof of Theorem 2.14,

except that in the sum defining $h ( m n )$ we separate the term corresponding to $a = m , b = n .$ We then have

$$
\begin{array} { l } { { { h ( m n ) = \displaystyle \sum _ { a \mid m } f ( a b ) g \bigg ( \frac { m n } { a b } \bigg ) + f ( m n ) g ( 1 ) = \sum _ { a \mid m } f ( a ) f ( b ) g \bigg ( \frac { m } { a } \bigg ) g \bigg ( \frac { n } { b } \bigg ) + f ( m n ) } } } \\ { { { \mathrm { } _ { a b < m n } ^ { b \mid n } } } } \\ { { { = \sum _ { a \mid m } f ( a ) g \bigg ( \frac { m } { a } \bigg ) \sum _ { b \mid n } f ( b ) g \bigg ( \frac { n } { b } \bigg ) - f ( m ) f ( n ) + f ( m n ) } } } \\ { { { = h ( m ) h ( n ) - f ( m ) f ( n ) + f ( m n ) . } } } \end{array}
$$

Since $f ( m n ) \neq f ( m ) f ( n )$ this shows that $h ( m n ) \neq h ( m ) h ( n )$ so $h$ is not multiplicative. This contradiction completes the proof. □

Theorem 2.16 If $g$ is multiplicative, so is $g ^ { - 1 }$ , its Dirichlet inverse.

PRooF. This follows at once from Theorem 2.15 since both $\pmb { g }$ and $g * g ^ { - 1 } = I$ are multiplicative. (See Exercise 2.34 for an alternate proof.)

Note. Theorems 2.14 and 2.16 together show that the set of multiplicative functions is a subgroup of the group of all arithmetical functions $f$ with $f ( 1 ) \neq 0$

# 2.11 The inverse of a completely multiplicative function

The Dirichlet inverse of a completely multiplicative function is especially easy to determine.

Theorem 2.17 Let $f$ be multiplicative. Then $f$ is completely multiplicative if, and only $i f ,$ (id:)

$$
f ^ { - 1 } ( n ) = \mu ( n ) f ( n ) ~ f o r ~ a l l ~ n \geq 1 .
$$

PRooF. Let $g ( n ) = \mu ( n ) f ( n )$ If $f$ is completely multiplicative we have

$$
( g * f ) ( n ) = \sum _ { d \mid n } \mu ( d ) f ( d ) f \biggl ( { \frac { n } { d } } \biggr ) = f ( n ) \sum _ { d \mid n } \mu ( d ) = f ( n ) I ( n ) = I ( n )
$$

since $f ( 1 ) = 1$ and $I ( n ) = 0$ for $n > 1$ Hence $g = f ^ { - 1 }$

Conversely, assume $f ^ { - 1 } ( n ) = \mu ( n ) f ( n ) .$ To show that $f$ is completely multiplicative it suices to prove that $f ( p ^ { a } ) = f ( p ) ^ { a }$ for prime powers. The equation $f ^ { - 1 } ( n ) = \mu ( n ) f ( n )$ implies that

$$
\sum _ { d \mid n } \mu ( d ) f ( d ) f { \binom { n } { d } } = 0 \qquad { \mathrm { f o r ~ a l l ~ } } n > 1 .
$$

Hence, taking $n = p ^ { a }$ we have

$$
\mu ( 1 ) f ( 1 ) f ( p ) ^ { a } + \mu ( p ) f ( p ) f ( p ^ { a - 1 } ) = 0 ,
$$

from which we find $f ( p ^ { a } ) = f ( p ) f ( p ^ { a - 1 } )$ . This implies $f ( p ^ { a } ) = f ( p ) ^ { a }$ so $f$ is completely multiplicative. □

ExAMPLE The inverse of Euler's $\varphi$ function. Since $\varphi = \mu * N$ we have $\varphi ^ { - 1 } = \mu ^ { - 1 } \ast N ^ { - 1 }$ . But $N ^ { - 1 } = \mu N$ since $N$ is completely multiplicative, so

$$
\varphi ^ { - 1 } = \mu ^ { - 1 } \ast \mu N = u \ast \mu N .
$$

Thus

$$
\varphi ^ { - 1 } ( n ) = \sum _ { d \mid n } d \mu ( d ) .
$$

The next theorem shows that

$$
\varphi ^ { - 1 } ( n ) = \prod _ { p \mid n } ( 1 - p ) .
$$

Theorem 2.18 If f is multiplicative we have

$$
\sum _ { d \mid n } \mu ( d ) f ( d ) = \prod _ { p \mid n } ( 1 - f ( p ) ) .
$$

PROOF. Let

$$
g ( n ) = \sum _ { d \mid n } \mu ( d ) f ( d ) .
$$

Then $g$ is multiplicative, so to determine $g ( n )$ it suffices to compute $g ( p ^ { a } )$ . But

$$
g ( p ^ { a } ) = \sum _ { d \{ p ^ { a } } \atop d \cdot p ^ { a }  \mu ( d ) f ( d ) = \mu ( 1 ) f ( 1 ) + \mu ( p ) f ( p ) = 1 - f ( p ) .
$$

Hence

$$
g ( n ) = \prod _ { p \mid n } g ( p ^ { a } ) = \prod _ { p \mid n } ( 1 - f ( p ) ) .
$$

# 2.12 Liouville's function $\lambda ( n )$

An important example of a completely multiplicative function is Liouville's function $\lambda$ , which is defined as follows.

Definition We define $\lambda ( 1 ) = 1$ , and if $n = p _ { 1 } ^ { a _ { 1 } } \cdot \cdot \cdot p _ { \star } ^ { a _ { k } }$ we define

$$
\lambda ( n ) = ( - 1 ) ^ { a _ { 1 } + \cdots + a _ { k } } .
$$

# 2: Arithmetical functions and Dirichlet multiplication

The definition shows at once that $\lambda$ is completely multiplicative. The next theorem describes the divisor sum of $\lambda$ ,

Theorem 2.19 For every $n \geq 1$ we have

$$
\sum _ { d \mid n } \lambda ( d ) = \left\{ \begin{array} { l l } { { 1 } } & { { i f n i s a s q u a r e , } } \\ { { 0 } } & { { o t h e r w i s e . } } \end{array} \right.
$$

Also, $\lambda ^ { - 1 } ( n ) = | \mu ( n ) |$ for all n.

PRoOF. Let $\begin{array} { r } { g ( n ) = \sum _ { d \mid n } \lambda ( d ) } \end{array}$ . Then $\pmb { g }$ is multiplicative, so to determine $g ( n )$ we need only compute $g ( p ^ { a } )$ for prime powers. We have

$$
\begin{array} { c } { { g ( p ^ { a } ) = \displaystyle \sum _ { d \mid p ^ { a } } \lambda ( d ) = 1 + \lambda ( p ) + \lambda ( p ^ { 2 } ) + \cdot \cdot \cdot + \lambda ( p ^ { a } ) } } \\ { { \mathrm { } } } \\ { { = 1 - 1 + 1 - \cdot \cdot \cdot + ( - 1 ) ^ { a } = \left\{ 0 \begin{array} { l l } { { 0 } } & { { \mathrm { i f ~ } a \mathrm { ~ i s ~ o d d } , } } \\ { { 1 } } & { { \mathrm { i f ~ } a \mathrm { ~ i s ~ e v e n } . } } \end{array} \right. } } \end{array}
$$

Hence if $\begin{array} { r } { n = \prod _ { i = 1 } ^ { k } p _ { i } ^ { a _ { i } } } \end{array}$ we have $\begin{array} { r } { g ( n ) = \prod _ { i = 1 } ^ { k } g ( p _ { i } ^ { \alpha _ { i } } ) } \end{array}$ If any exponent $a _ { \mathrm { i } }$ is odd then $g ( p _ { i } ^ { ~ a _ { i } } ) = 0 \ s _ { 0 } g ( n ) = 0 .$ If all the exponents $a _ { i }$ are even then $g ( p _ { i } ^ { a _ { i } } ) = 1$ for all $i$ and $g ( n ) = 1$ . This shows that $g ( n ) = 1$ if $\pmb { n }$ is a square, and $g ( n ) = 0$ otherwise. Also, $\lambda ^ { - 1 } ( n ) = \mu ( n ) \lambda ( n ) = \mu ^ { 2 } ( n ) = | \mu ( n ) |$ . □

# 2.13 The divisor functions $\sigma _ { \alpha } ( n )$

Definition For real or complex $\pmb { \alpha }$ and any integer $n \geq 1$ we define

$$
\sigma _ { \alpha } ( n ) = \sum _ { d \mid n } d ^ { \alpha } ,
$$

the sum of the ath powers of the divisors of $\pmb { n }$

The functions $\sigma _ { \alpha } \Im 0$ defined are called divisor functions. They are multiplicative because $\sigma _ { \alpha } = u * N ^ { \alpha }$ , the Dirichlet product of two multiplicative functions

When $\alpha = 0 , \sigma _ { 0 } ( n )$ is the number of divisors of $\pmb { n }$ ; this is often denoted by $d ( n )$ ,

When $\alpha = 1 , \sigma _ { 1 } ( n )$ is the sum of the divisors of $\pmb { n }$ ; this is often denoted by $\sigma ( n ) .$ ,d

Since $\sigma _ { \alpha }$ is multiplicative we have

$$
\sigma _ { \alpha } ( { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { k } } ^ { a _ { k } } ) = \sigma _ { \alpha } ( { p _ { 1 } } ^ { a _ { 1 } } ) \cdot \cdot \cdot \sigma _ { \alpha } ( { p _ { k } } ^ { a _ { k } } ) .
$$

To compute $\sigma _ { \alpha } ( p ^ { a } )$ we note that the divisors of a prime power $p ^ { \alpha }$ are

$$
1 , p , p ^ { 2 } , \ldots , p ^ { a } ,
$$

hence

$$
\begin{array} { l r } { \displaystyle \sigma _ { \alpha } ( p ^ { a } ) = 1 ^ { \alpha } + p ^ { \alpha } + p ^ { 2 \alpha } + \cdots + p ^ { a \alpha } = \frac { p ^ { \alpha ( a + 1 ) } - 1 } { p ^ { \alpha } - 1 } } & { \mathrm { i f ~ } \alpha \neq 0 } \\ { \displaystyle = a + 1 } & { \mathrm { i f ~ } \alpha = 0 . } \end{array}
$$

The Dirichlet inverse of $\pmb { \sigma } _ { \pmb { \alpha } }$ can also be expressed as a linear combination of the ath powers of the divisors of $\pmb { n }$ .

Theorem 2.20 For $n \geq 1$ we have

$$
{ \sigma _ { \alpha } } ^ { - 1 } ( n ) = \sum _ { d \mid n } d ^ { \alpha } \mu ( d ) \mu { \left( \frac { n } { d } \right) } .
$$

PROoF. Since $\sigma _ { \alpha } = N ^ { \alpha } * u$ and $N ^ { \alpha }$ is completely multiplicative we have

$$
\sigma _ { \alpha } { } ^ { - 1 } = ( \mu N ^ { \alpha } ) * u ^ { - 1 } = ( \mu N ^ { \alpha } ) * \mu .
$$

# 2.14 Generalized convolutions

Throughout this section $F$ denotes a real or complex-valued function defined on the positive real axis $( 0 , + \infty )$ such that $F ( x ) = 0$ for $0 < x < 1$ Sums of the type

$$
\sum _ { n \leq x } \alpha ( n ) F { \binom { x } { n } }
$$

arise frequently in number theory. Here $\pmb { \alpha }$ is any arithmetical function. The sum defines a new function $G$ on $( 0 , + \infty )$ which also vanishes for $0 < x < 1$ . We denote this function $G$ by $\alpha \circ F$ . Thus,

$$
( \alpha \circ F ) ( x ) = \sum _ { n \leq x } \alpha ( n ) F { \binom { x } { n } } .
$$

If $F ( x ) = 0$ for all nonintegral $x _ { i }$ , the restriction of $F$ to the integers is an arithmetical function and we find that

$$
( \alpha \circ F ) ( m ) = ( \alpha * F ) ( m )
$$

for all integers $m \geq 1$ , so the operation o can be regarded as a generalization of the Dirichlet convolution $\pmb { * }$

The operation $\circ$ is, in general, neither commutative nor associative. However, the following theorem serves as a useful substitute for the associative law.

Theorem 2.21 Associative property relating  and $\ast$ . For any arithmetical functions $\pmb { \alpha }$ and $\beta$ we have

$$
\alpha \circ ( \beta \circ F ) = ( \alpha * \beta ) \circ F .
$$

# 2: Arithmetical functions and Dirichlet multiplication

PROOF. For $x > 0$ we have

$$
\begin{array} { l } { \{ \alpha \circ ( \beta \circ F ) \} ( x ) = \displaystyle \sum _ { n \leq x } \alpha ( n ) \sum _ { m \leq x / n } \beta ( m ) F \bigg ( \frac { x } { m n } \bigg ) = \sum _ { m n \leq x } \alpha ( n ) \beta ( m ) F \bigg ( \frac { x } { m n } \bigg ) } \\ { = \displaystyle \sum _ { k \leq x } \bigg ( \sum _ { n \mid k } \alpha ( n ) \beta \bigg ( \frac { k } { n } \bigg ) \bigg ) F \bigg ( \frac { x } { k } \bigg ) = \sum _ { k \leq x } ( \alpha \ast \beta ) ( k ) F \bigg ( \frac { x } { k } \bigg ) } \\ { = \{ ( \alpha \ast \beta ) \circ F \} ( x ) . } \end{array}
$$

This completes the proof.

Next we note that the identity function $I ( n ) = [ 1 / n ]$ for Dirichlet convolution is also a left identity for the operation o. That is, we have

$$
( I \circ F ) ( x ) = \sum _ { n \leq x } { \bigg [ } { \frac { 1 } { n } } { \bigg ] } F { \bigg ( } { \frac { x } { n } } { \bigg ) } = F ( x ) .
$$

Now we use this fact along with the associative property to prove the following inversion formula.

Theorem 2.22 Generalized inversion formula. $H \alpha$ has a Dirichlet inverse $\alpha ^ { - 1 }$ , then the equation

$$
G ( x ) = \sum _ { n \leq x } \alpha ( n ) F { \Biggl ( } { \frac { x } { n } } { \Biggr ) }
$$

implies

$$
F ( x ) = \sum _ { n \leq x } \alpha ^ { - 1 } ( n ) G { \biggl ( } { \frac { x } { n } } { \biggr ) } .
$$

Conversely, (11) implies (10).

PROOF. If $G = \alpha \circ F$ then

$$
\alpha ^ { - 1 } \circ G = \alpha ^ { - 1 } \circ ( \alpha \circ F ) = ( \alpha ^ { - 1 } \ast \alpha ) \circ F = I \circ F = F .
$$

Thus (10) implies (11). The converse is similarly proved.

The following special case is of particular importance.

Theorem 2.23 Generalized Möbius inversion formula. If $\pmb { \alpha }$ is completely multiplicative we have

$$
G ( x ) = \sum _ { n \leq x } \alpha ( n ) F { \binom { x } { n } } i f , a n d o n l y i f , F ( x ) = \sum _ { n \leq x } \mu ( n ) \alpha ( n ) G { \binom { x } { n } } .
$$

PRooF. In this case $\alpha ^ { - 1 } ( n ) = \mu ( n ) \alpha ( n )$

# 2.15 Formal power series

In càlculus an infinite series of the form

$$
\sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { n } = a ( 0 ) + a ( 1 ) x + a ( 2 ) x ^ { 2 } + \cdot \cdot \cdot + a ( n ) x ^ { n } + \cdot \cdot \cdot
$$

is called a power series in $\boldsymbol { x }$ .Both $_ x$ and the coefficients $a ( n )$ are real or complex numbers. To each power series there corresponds a radius of convergence $r \geq 0$ such that the series converges absolutely if $| x | < r$ and diverges if $| x | > r$ (The radius $r$ can $b e + \infty .$ )

In this section we consider power series from a different point of view. We call them formal power series to distinguish them from the ordinary power series of calculus. In the theory of formal power series $_ x$ is never assigned a numerical value, and questions of convergence or divergence are not of interest.

The object of interest is the sequence of coefficients

$$
( a ( 0 ) , a ( 1 ) , \ldots , a ( n ) , \ldots ) .
$$

All that we do with formal power series could also be done by treating the sequence of coefficients as though it were an infinite-dimensional vector with components $a ( 0 ) , a ( 1 ) , .$ . . But for our purposes it is more convenient to display the terms as coefficients of a power series as in (12) rather than as components of a vector as in (13). The symbol $x ^ { n }$ is simply a device for locating the position of the nth coeficient $a ( n )$ . The coefficient $a ( 0 )$ is called the constant coefficient of the series.

We operate on formal power series algebraically as though they were convergent power series. If $A ( x )$ and $B ( x )$ are two formal power series, say

$$
A ( x ) = \sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { n } \qquad { \mathrm { a n d ~ } } B ( x ) = \sum _ { n = 0 } ^ { \infty } b ( n ) x ^ { n } ,
$$

we define:

Equality: $A ( x ) = B ( x )$ means that $a ( n ) = b ( n )$ for all $n \geq 0$ Sum: $\begin{array} { r } { A ( x ) + B ( x ) = \sum _ { n = 0 } ^ { \infty } ( a ( n ) + b ( n ) ) x ^ { n } . } \end{array}$ ( Product: $\begin{array} { r } { A ( x ) B ( x ) = \sum _ { n = 0 } ^ { \infty } c ( n ) x ^ { n } } \end{array}$ where

$$
c ( n ) = \sum _ { k = 0 } ^ { n } a ( k ) b ( n - k ) .
$$

The sequence $\{ c ( n ) \}$ determined by (14) is called the Cauchy product of the sequences $\{ a ( n ) \}$ and $\{ b ( n ) \}$ .

The reader can easily verify that these two operations satisfy the commutative and associative laws, and that multiplication is distributive with respect

to addition. In the language of modern algebra, formal power series form a ring. This ring has a zero element for addition which we denote by 0,

$$
0 = \sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { n } , { \mathrm { ~ w h e r e ~ } } a ( n ) = 0 { \mathrm { ~ f o r ~ a l l ~ } } n \geq 0 ,
$$

and an identity element for multiplication which we denote by 1,

$$
1 = \sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { n } , { \mathrm { ~ w h e r e ~ } } a ( 0 ) = 1 { \mathrm { ~ a n d ~ } } a ( n ) = 0 { \mathrm { ~ f o r ~ } } n \geq 1 .
$$

A formal power series is called a formal polynomial if all its coeicients are 0 from some point on.

For each formal power series $\textstyle A ( x ) = \sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { n }$ with constant coefficient $a ( 0 ) \neq 0$ thereisauniquelydeterminedformalpower series $\begin{array} { r } { B ( x ) = \sum _ { n = 0 } ^ { \infty } b ( n ) x ^ { n } } \end{array}$ such that $A ( x ) B ( x ) = 1$ . Its coefficients can be determined by solving the infinite system of equations

$$
\begin{array} { l } { { a ( 0 ) b ( 0 ) = 1 } } \\ { { a ( 0 ) b ( 1 ) + a ( 1 ) b ( 0 ) = 0 , } } \\ { { a ( 0 ) b ( 2 ) + a ( 1 ) b ( 1 ) + a ( 2 ) b ( 0 ) = 0 , } } \\ { { \ \vdots } } \\ { { \ } } \end{array}
$$

in succession for $b ( 0 ) , b ( 1 ) , b ( 2 ) , \dots$ The series $B ( x )$ is called the inverse of $A ( x )$ and is denoted by $A ( x ) ^ { - 1 }$ or by $1 / A \{ x \}$

The special series

$$
A ( x ) = 1 + \sum _ { n = 1 } ^ { \infty } a ^ { n } x ^ { n }
$$

is called a geometric series. Here $a$ is an arbitrary real or complex number. Its inverse is the formal polynomial

$$
B ( x ) = 1 - a x .
$$

In other words, we have

$$
{ \frac { 1 } { 1 - a x } } = 1 + \sum _ { n = 1 } ^ { \infty } a ^ { n } x ^ { n } .
$$

# 2.16 The Bell series of an arithmetical function

E. T. Bell used formal power series to study properties of multiplicative arithmetical functions.

Definition Given an arithmetical function $f$ and a prime $p$ , we denote by

$f _ { p } ( x )$ the formal power series

$$
f _ { p } ( x ) = \sum _ { n = 0 } ^ { \infty } f ( p ^ { n } ) x ^ { n }
$$

and call this the Bell series of $f$ modulo $p$

Bell series are especially useful when $f$ is multiplicative.

Theorem 2.24 Uniqueness theorem. Let $f$ and $g$ be multiplicative functions. Then $f = g$ if, and only if,

$$
f _ { p } ( x ) = g _ { p } ( x ) ~ f o r ~ a l l ~ p r i m e s ~ p .
$$

PROOF. If $f = g$ then $f ( p ^ { n } ) = g ( p ^ { n } )$ for all $p$ and all $n \geq 0$ so $f _ { p } ( x ) = g _ { p } ( x ) .$ (id: Conversely, if $f _ { p } ( x ) = g _ { p } ( x )$ for all $p$ then $f ( p ^ { n } ) = g ( p ^ { n } )$ for all $n \geq 0 .$ Since $f$ and $\pmb { g }$ are multiplicative and agree at all prime powers they agree at all the positive integers, so $f = g$ □

It is easy to determine the Bell series for some of the multiplicative functions introduced earlier in this chapter.

ExAMPLE 1 Möbius function $\mu$ Since $\mu ( p ) = - 1$ and $\mu ( p ^ { n } ) = 0$ for $n \geq 2$ we have

$$
\mu _ { p } ( x ) = 1 - x .
$$

ExAMPLE 2 Euler's totient $\varphi$ . Since $\varphi ( p ^ { n } ) = p ^ { n } - p ^ { n - 1 }$ for $n \geq 1$ we have

$$
\begin{array} { l } { \displaystyle \varphi _ { p } ( x ) = 1 + \sum _ { n = 1 } ^ { \infty } ( p ^ { n } - p ^ { n - 1 } ) x ^ { n } = \sum _ { n = 0 } ^ { \infty } p ^ { n } x ^ { n } - x \sum _ { n = 0 } ^ { \infty } p ^ { n } x ^ { n } } \\ { = ( 1 - x ) \sum _ { n = 0 } ^ { \infty } p ^ { n } x ^ { n } = \displaystyle \frac { 1 - x } { 1 - p x } . } \end{array}
$$

ExAMPLE 3 Completely multiplicative functions. If f is completely multiplicative then $f ( p ^ { n } ) = f ( p ) ^ { n }$ for all $n \geq 0$ so the Bell series $f _ { p } ( x )$ is a geometric series,

$$
f _ { p } ( x ) = \sum _ { n = 0 } ^ { \infty } f ( p ) ^ { n } x ^ { n } = { \frac { 1 } { 1 - { \overline { { f ( p ) x } } } } } .
$$

In particular we have the following Bell series for the identity function I, the unit function $\pmb { u }$ , the power function $N ^ { \alpha }$ , and Liouville's function λ:

$$
\left. \begin{array} { c } { { I _ { p } ( x ) = 1 . } } \\ { { \stackrel { \displaystyle \sim } { \dots } } } \\ { { u _ { p } ( x ) = \displaystyle \sum _ { n = 0 } ^ { \infty } x ^ { n } = \frac { 1 } { 1 - x } . } } \end{array} \right.
$$

$$
N _ { p } ^ { \alpha } ( x ) = 1 + \sum _ { n = 1 } ^ { \infty } p ^ { \alpha n } x ^ { n } = { \frac { 1 } { 1 - p ^ { \alpha } x } } .
$$

$$
\lambda _ { p } ( x ) = \sum _ { n = 0 } ^ { \infty } ( - 1 ) ^ { n } x ^ { n } = { \frac { 1 } { 1 + x } } .
$$

# 2.17 Bell series and Dirichlet multiplication

The next theorem relates multiplication of Bell series to Dirichlet multiplication.

Theorem 2.25 For any two arithmetical functions $f$ and $g$ let $h = f * g$ . Then for every prime $p$ we have

$$
h _ { p } ( x ) = f _ { p } ( x ) g _ { p } ( x ) .
$$

PRooF. Since the divisors of $p ^ { n }$ are $1 , p , p ^ { 2 } , \ldots , p ^ { n }$ we have

$$
h ( p ^ { n } ) = \sum _ { d \mid p ^ { n } } f ( d ) g \biggl ( { \frac { p ^ { n } } { d } } \biggr ) = \sum _ { k = 0 } ^ { n } f ( p ^ { k } ) g ( p ^ { n - k } ) .
$$

This completes the proof because the last sum is the Cauchy product of the sequences $\{ f ( p ^ { n } ) \}$ and $\{ g ( p ^ { n } ) \}$ . □

ExAMPLE 1 Since $\mu ^ { 2 } ( n ) = \lambda ^ { - 1 } ( n )$ the Bell series of $\mu ^ { 2 }$ modulo $p$ is

$$
\mu _ { p } ^ { 2 } ( x ) = \frac { 1 } { \lambda _ { p } ( x ) } = 1 + x .
$$

ExAMPLE 2 Since $\sigma _ { \ast } = N ^ { \alpha } \ast u$ the Bell series of $\pmb { \sigma } _ { \pmb { \alpha } }$ modulo $p$ is

$$
( \sigma _ { x } ) _ { p } ( x ) = N _ { p } ^ { \alpha } ( x ) u _ { p } ( x ) = \frac { 1 } { 1 - p ^ { \alpha } x } \cdot \frac { 1 } { 1 - x } = \frac { 1 } { 1 - \sigma _ { a } ( p ) x + p ^ { \alpha } x ^ { 2 } } .
$$

ExaMPLE 3 This example illustrates how Bell series can be used to discover identities in volving arithmetical functions. Let

$$
f ( n ) = 2 ^ { \operatorname { v } ( n ) } ,
$$

where $\nu ( 1 ) = 0$ and $\nu ( n ) = k$ if $n = { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { k } } ^ { a _ { k } }$ . Then fis multiplicative and its Bell series modulo $p$ is

$$
f _ { p } ( x ) = 1 + \sum _ { n = 1 } ^ { \infty } 2 ^ { v ( p ^ { n } ) } x ^ { n } = 1 + \sum _ { n = 1 } ^ { \infty } 2 x ^ { n } = 1 + { \frac { 2 x } { 1 - x } } = { \frac { 1 + x } { 1 - x } } .
$$

Hence

$$
f _ { p } ( x ) = \mu _ { p } ^ { 2 } ( x ) u _ { p } ( x )
$$

which implies $f = \mu ^ { 2 } * u _ { : }$ or

$$
2 ^ { v ( n ) } = \sum _ { d \mid n } \mu ^ { 2 } ( d ) .
$$

# 2.18 Derivatives of arithmetical functions

Definition For any arithmetical function $f$ we defi ne its derivative $f ^ { \prime }$ to be the arithmetical function given by the equation

$$
f ^ { \prime } ( n ) = f ( n ) { \log } n \quad { \mathrm { f o r ~ } } n \geq 1 .
$$

ExAMPLEs Since $I ( n ) \log n = 0$ for all $\pmb { n }$ we have $I ^ { \prime } = 0$ Since $u ( n ) = 1$ for all $\pmb { n }$ we have $u ^ { \prime } ( n ) = \log n$ . Hence, the formula $\sum _ { d \mid n } \Lambda ( d ) = \log n$ can be written as

$$
\Lambda * u = u ^ { \prime } .
$$

This concept of derivative shares many of the properties of the ordinary derivative discussed in elementary calculus. For example, the usual rules for differentiating sums and products also hold if the products are Dirichlet products.

Theorem 2.26 If f and $g$ are arithmetical functions we have:

(a) $( f + g ) ^ { \prime } = f ^ { \prime } + g ^ { \prime }$ ,   
(b) $( f * g ) ^ { \prime } = f ^ { \prime } * g + f * g ^ { \prime } .$   
(c) $( f ^ { - 1 } ) ^ { \prime } = - f ^ { \prime } * ( f * f ) ^ { - 1 }$ , provided that $f ( 1 ) \neq 0$

Proor. The proof of (a) is immediate. Of course, it is understood that $f + g$ is the function for which $( f + g ) ( n ) = f ( n ) + g ( n )$ for all $\pmb { n }$

To prove (b) we use the identity log $n = \log d + \log ( n / d )$ to write

$$
\begin{array} { l } { { ( f * g ) ^ { \prime } ( n ) = \displaystyle \sum _ { d \mid n } f ( d ) g \biggl ( \frac { n } { d } \biggr ) \log n } } \\ { { \qquad = \displaystyle \sum _ { d \mid n } f ( d ) \log d g \biggl ( \frac { n } { d } \biggr ) + \sum _ { d \mid n } f ( d ) g \biggl ( \frac { n } { d } \biggr ) \log \biggr ( \frac { n } { d } \biggr ) } } \\ { { \qquad = ( f ^ { \prime } * g ) ( n ) + ( f * g ^ { \prime } ) ( n ) . } } \end{array}
$$

# 2: Arithmetical functions and Dirichlet multiplication

To prove (c) we apply part (b) to the formula $I ^ { \prime } = 0$ , remembering that $I = f * f ^ { - 1 }$ . This gives us

$$
0 = ( f * f ^ { - 1 } ) ^ { \prime } = f ^ { \prime } * f ^ { - 1 } + f * ( f ^ { - 1 } ) ^ { \prime }
$$

SO

$$
f * ( f ^ { - 1 } ) ^ { \prime } = - f ^ { \prime } * f ^ { - 1 } .
$$

Multiplication by $f ^ { - 1 }$ now gives us

$$
( f ^ { - 1 } ) ^ { \prime } = - ( f ^ { \prime } \ast f ^ { - 1 } ) \ast f ^ { - 1 } = - f ^ { \prime } \ast ( f ^ { - 1 } \ast f ^ { - 1 } ) .
$$

But $f ^ { - 1 } * f ^ { - 1 } = ( f * f ) ^ { - 1 } { \bf 5 } 0$ (c) is proved.

# 2.19 The Selberg identity

Using the concept of derivative we can quickly derive a formula of Selberg which is sometimes used as the starting point of an elementary proof of the prime number theorem.

Theorem 2.27 The Selberg identity. For $n \geq 1$ we have

$$
\Lambda ( n ) \mathrm { l o g } n + \sum _ { d | n } \Lambda ( d ) \Lambda \bigg ( \frac { n } { d } \bigg ) = \sum _ { d | n } \mu ( d ) \mathrm { l o g } ^ { 2 } \frac { n } { d } .
$$

PRooF. Equation (15) states that $\Lambda * u = u ^ { \prime }$ . Differentiation of this equation gives us

$$
\Lambda ^ { \prime } * u + \Lambda * u ^ { \prime } = u ^ { \prime \prime }
$$

or, since $u ^ { \prime } = \Lambda * u$ ,

$$
\Lambda ^ { \prime } * u + \Lambda * ( \Lambda * u ) = u ^ { \prime \prime } .
$$

Now we multiply both sides by $\mu = u ^ { - 1 }$ to obtain

$$
\Lambda ^ { \prime } + \Lambda * \Lambda = u ^ { \prime \prime } * \mu .
$$

This is the required identity.

# Exercises for Chapter 2

1. Find all integers $\pmb { n }$ such that

$$
\varphi ( n ) = n / 2 , \qquad \quad ( \mathfrak { b } ) \ \varphi ( n ) = \varphi ( 2 n ) , \qquad \quad ( \mathfrak { c } ) \ \varphi ( n ) = 1 2 .
$$

2. For each of the following statements either give a proof or exhibit a counter example.

(a) If $( m , n ) = 1$ then $( \varphi ( m ) , \varphi ( n ) ) = 1 .$ ,   
(b) If $\pmb { n }$ is composite, then $( n , \varphi ( n ) ) > 1$   
(c) If the same primes divide $m$ and $\pmb { n } .$ ,then $n \varphi ( m ) = m \varphi ( n ) .$

3. Prove that

$$
{ \frac { n } { \varphi ( n ) } } = \sum _ { d \mid n } { \frac { \mu ^ { 2 } ( d ) } { \varphi ( d ) } } .
$$

4. Prove that $\varphi ( n ) > n / 6$ for all $\pmb { n }$ with at most 8 distinct prime factors.

5. Define $\nu ( 1 ) = 0 ,$ , and for $n > 1$ let $\nu ( n )$ be the number of distinct prime factors of n. Let $f = \mu * \nu$ and prove that $f ( n )$ is either 0 or 1.

6. Prove that

$$
\sum _ { d ^ { 2 } \mid n } \mu ( d ) = \mu ^ { 2 } ( n )
$$

and, more generally,

$$
\sum _ { d ^ { k } \mid n } \mu ( d ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f } } m ^ { k } \mid n { \mathrm { ~ f o r ~ s o m e } } m > 1 , } \\ { 1 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

The last sum is extended over all positive divisors $d$ of $\pmb { n }$ whose kth power also divide $\pmb { n }$

7. Let $\mu ( p , d )$ denote the value of the Mobius function at the gcd of $p$ and $d$ Prove that for every prime $p$ we have

$$
\sum _ { d \mid n } \mu ( d ) \mu ( p , d ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n = 1 { \mathrm { , } } } \\ { 2 } & { { \mathrm { i f ~ } } n = p ^ { a } , a \geq 1 { \mathrm { , } } } \\ { 0 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

8. Prove that

$$
\sum _ { d | n } \mu ( d ) \log ^ { m } d = 0
$$

if $m \geq 1$ and $\pmb { n }$ has more than $\pmb { m }$ distinct prime factors. [Hint: Induction.]

9.If $x$ is real, $x \ge 1$ , let $\varphi ( x , n )$ denote the number of positive integers $\leq x$ that are relatively prime to $\pmb { n }$ [Note that $\varphi ( n , n ) = \varphi ( n ) . ]$ Prove that

$$
\varphi ( x , n ) = \sum _ { d \mid n } \mu ( d ) { \Bigg [ } { \frac { x } { d } } { \Bigg ] } \qquad { \mathrm { a n d ~ } } \sum _ { d \mid n } \varphi { \Bigg ( } { \frac { x } { d } } , { \frac { n } { d } } { \Bigg ) } = [ x ] .
$$

In Exercises 10, 11, and 12, $d ( n )$ denotes the number of positive divisors of $\pmb { n }$

10. Prove that $\textstyle \prod _ { t \mid n } t = n ^ { d ( n ) / 2 }$

11. Prove that $d ( n )$ is odd if, and only if, $\pmb { n }$ is a square.

12. Prove that $\begin{array} { r } { \sum _ { t \mid n } d ( t ) ^ { 3 } = ( \sum _ { t \mid n } d ( t ) ) ^ { 2 } , } \end{array}$

13. Product form of the Möbius inversion formula. If $f ( n ) > 0$ for all $\pmb { n }$ and if $a ( n )$ is real, $a ( 1 ) \neq 0$ prove that

$$
g ( n ) = \prod _ { d \mid n } f ( d ) ^ { a ( n / d ) } { \mathrm { ~ i f , ~ a n d ~ o n l y ~ i f , ~ } } f ( n ) = \prod _ { d \mid n } g ( d ) ^ { b ( n / d ) } ,
$$

where $b = a ^ { - 1 }$ , the Dirichlet inverse of $\pmb { a }$

# 2: Arithmetical functions and Dirichlet multiplication

14. Let $f ( x )$ be defi ned for all rational $x$ in $0 \leq x \leq 1$ and let

$$
F ( n ) = \sum _ { k = 1 } ^ { n } f { \binom { k } { n } } , \qquad F ^ { * } ( n ) = \sum _ { k = 1 \atop ( k , n ) = 1 } ^ { n } f { \binom { k } { n } } .
$$

(a) Prove that $F ^ { * } = \mu * F$ , the Dirichlet product of $\mu$ and $F$

(b) Use (a) or some other means to prove that $\mu ( n )$ is the sum of the primitive nth roots of unity:

$$
\mu ( n ) = \sum _ { \stackrel { k = 1 } { ( k , n ) = 1 } } ^ { n } e ^ { 2 \pi \mathrm { i } k / n } .
$$

15. Let ${ \varphi _ { k } ( n ) }$ denote the sum of the kth powers of the numbers $\leq n$ and relatively prime to $\pmb { n }$ . Note that $\varphi _ { 0 } ( n ) = \varphi ( n )$ . Use Exercise 14 or some other means to prove that

$$
\sum _ { d \mid n } { \frac { \varphi _ { k } ( d ) } { d ^ { k } } } = { \frac { 1 ^ { k } + \cdots + n ^ { k } } { n ^ { k } } } .
$$

16. Invert the formula in Exercise 15 to obtain, for $n > 1$ ,

$$
\varphi _ { 1 } ( n ) = { \frac { 1 } { 2 } } n \varphi ( n ) , \qquad \mathrm { a n d } \qquad \varphi _ { 2 } ( n ) = { \frac { 1 } { 3 } } n ^ { 2 } \varphi ( n ) + { \frac { n } { 6 } } \prod _ { p \mid n } ( 1 - p ) .
$$

Derive a corresponding formula for $\varphi _ { 3 } ( n ) .$

17. Jordan's totient $J _ { k }$ is a generalization of Euler's totient defined by

$$
J _ { k } ( n ) = n ^ { k } \prod _ { p \mid n } { ( 1 - p ^ { - k } ) } .
$$

(a) Prove that

$$
J _ { k } ( n ) = \sum _ { d \mid n } \mu ( d ) { \binom { n } { d } } ^ { k } \qquad \mathrm { a n d } \qquad n ^ { k } = \sum _ { d \mid n } J _ { k } ( d ) .
$$

(b) Determine the Bell series for $J _ { k }$

18. Prove that every number of the form $2 ^ { a - 1 } ( 2 ^ { a } - 1 )$ is perfect if $2 ^ { a } \sim 1$ is prime.

19. Prove that if $\pmb { n }$ is even and perfect then $n = 2 ^ { a - 1 } ( 2 ^ { a } - 1 )$ for some $a \ge 2$ It is not known if any odd perfect numbers exist. It is known that there are no odd perfect numbers with less than 7 prime factors.

20. Let $P ( n )$ be the product of the positive integers which are $\leq n$ and relatively prime to $\pmb { n }$ . Prove that

$$
P ( n ) = n ^ { \varphi ( n ) } \prod _ { d \mid n } \left( { \frac { d ! } { d ^ { d } } } \right) ^ { \mu ( n / d ) } .
$$

21.Let $f ( n ) = [ { \sqrt { n } } ] - [ { \sqrt { n - 1 } } ]$ . Prove that $f$ is multiplicative but not completely multiplicative.

22. Prove that

$$
\sigma _ { 1 } ( n ) = \sum _ { d \mid n } \varphi ( d ) \sigma _ { 0 } { \binom { n } { d } } ,
$$

and derive a generalization involving ${ \pmb \sigma } _ { \pmb { \alpha } } ( { \pmb n } ) .$ (More than one generalization is possible.)

23. Prove the following statement or exhibit a counter example. If $f$ is multiplicative, then $\begin{array} { r } { F ( n ) = \prod _ { d \mid n } f ( d ) } \end{array}$ is multiplicative.

24. Let $A ( x )$ and $B ( x )$ be formal power series. If the product $A ( x ) B ( x )$ is the zero series, prove that at least one factor is zero. In other words, the ring of formal power series has no zero divisors.

25. Assume $f$ is multiplicative. Prove that:

(a) $f ^ { - 1 } ( n ) = \mu ( n ) f ( n )$ for every squarefree $\pmb { n }$ (b) $f ^ { - 1 } ( p ^ { 2 } ) = f ( p ) ^ { 2 } - f ( p ^ { 2 } )$ for every prime $p$

26. Assume $f$ is multiplicative. Prove that $f$ is completely multiplicative if, and only if, $f ^ { - 1 } ( p ^ { a } ) = 0$ for all primes $p$ and all integers $a \ge 2$

27.(a) If $f$ is completely multiplicative, prove that

$$
f \cdot ( g * h ) = ( f \cdot g ) * ( f \cdot h )
$$

for all arithmetical functions $\pmb { g }$ and $h _ { \ell }$ where $f \cdot g$ denotes the ordinary product, $( f \cdot g ) ( n ) = f ( n ) g ( n ) .$

(b) If $f$ is multiplicative and if the relation in (a) holds for $g = \mu$ and $h = \mu ^ { - 1 }$ , prove that $f$ is compietely multiplicative.

28. (a) If $f$ is completely multiplicative, prove that

$$
( f \cdot g ) ^ { - 1 } = f \cdot g ^ { - 1 }
$$

for every arithmetical function $\pmb { g }$ with $g ( 1 ) \neq 0$

(b) If $f$ is multiplicative and the relation in (a) holds for $g = \mu ^ { - 1 }$ , prove that $f$ is completely multiplicative.

29. Prove that there is a multiplicative arithmetical function $\pmb { g }$ such that

$$
\sum _ { k \mathop { = } 1 } ^ { n } f ( ( k , n ) ) = \sum _ { d | n } f ( d ) g { \binom { n } { d } }
$$

for every arithmetical function $f .$ Here $( k , n )$ is the gcd of $\pmb { n }$ and $k$ . Use this identity to prove that

$$
\sum _ { k = 1 } ^ { n } ( k , n ) \mu ( ( k , n ) ) = \mu ( n ) .
$$

30. Let $f$ be multiplicative and let $\pmb { g }$ be any arithmetical function. Assume that

$$
f ( p ^ { n + 1 } ) = f ( p ) f ( p ^ { n } ) - g ( p ) f ( p ^ { n - 1 } )
$$

Prove that for each prime $p$ the Bell series for $f$ has the form

$$
f _ { p } ( x ) = { \frac { 1 } { 1 - f ( p ) x + g ( p ) x ^ { 2 } } } .
$$

Conversely, prove that (b) implies (a).

# 2: Arithmetical functions and Dirichlet multiplication

31. (Continuation of Exercise 30.) If $g$ is completely multiplicative prove that statement (a) of Excrcise 30 implies

$$
f ( m ) f ( n ) = \sum _ { d | \{ m , n \} } g ( d ) f { \binom { m n } { d ^ { 2 } } } ,
$$

where the sum is extended over the positive divisors of the gcd $( m , n )$ [Hint: Consider first the case $m = p ^ { a } , n = p ^ { b } . ]$

32. Prove that

$$
\sigma _ { \alpha } ( m ) \sigma _ { \alpha } ( n ) = \sum _ { d | ( m , n ) } d ^ { \alpha } \sigma _ { \alpha } \biggl ( \frac { m n } { d ^ { 2 } } \biggr ) .
$$

33. Prove that Liouyille's function is given by the formula

$$
\lambda ( n ) = \sum _ { d ^ { 2 } | n } \mu { \binom { n } { d ^ { 2 } } } .
$$

34. This exercise describes an alternate proof of Theorem 2.16 which states that the Dirichlet inverse of a multiplicative function is multiplicative. Assume $g$ is multiplicative and let $f = g ^ { - 1 }$ -

(a) Prove that if $p$ is prime then for $k \geq 1$ we have

$$
f ( p ^ { k } ) = - \sum _ { t = 1 } ^ { k } g ( p ^ { t } ) f ( p ^ { k - t } ) .
$$

(b) Let $h$ be the uniquely determined multiplicative function which agrees with $f$ at the prime powers. Show that $h * g$ agrees with the identity function $I$ at the prime powers and deduce that $h * g = I$ . This shows that $\boldsymbol { f } = h$ SO $f$ is multiplicative.

35.If $f$ and ${ \pmb g }$ are multiplicative and if $a$ and $b$ are positive integers with $a \geq b .$ prove that the function $h$ given by

$$
h ( n ) = \sum _ { d ^ { a } \mid n } f { \biggl ( } { \frac { n } { d ^ { a } } } { \biggr ) } g { \biggl ( } { \frac { n } { d ^ { b } } } { \biggr ) }
$$

is also multiplicative. The sum is extended over those divisors $d$ of $\pmb { n }$ for which $d ^ { \alpha }$ divides $\pmb { n }$

MÖBIUS FUNCTIONS OF ORDER $k$ .

If $k \geq 1$ we define $\mu _ { k }$ , the Möbius function of order $k$ , as follows:

$$
\begin{array} { r l r } & { \mu _ { k } ( 1 ) = 1 , } \\ & { \mu _ { k } ( n ) = 0 \mathrm { ~ i f ~ } p ^ { k + 1 } | n \mathrm { ~ f o r ~ s o m e ~ p r i m e ~ } p , } \\ & { \mu _ { k } ( n ) = ( - 1 ) ^ { r } \mathrm { ~ i f ~ } n = { p _ { 1 } } ^ { k } \cdot \cdot \cdot { p _ { r } } ^ { k } \displaystyle \prod _ { i > r } { p _ { i } } ^ { a _ { i } } , \qquad 0 \le a _ { i } < k , } \\ & { \mu _ { k } ( n ) = 1 \mathrm { ~ o t h e r w i s e . } } \end{array}
$$

In other words, $\mu _ { k } ( n )$ vanishes if $\pmb { n }$ is divisible by the $( k + 1 ) { \mathsf { s t } }$ power of some prime; otherwise, $\mu _ { k } ( n )$ is 1 unless the prime factorization of $n$ contains the

kth powers of exactly $r$ distinct primes, in which case $\mu _ { \ k } ( n ) = ( - 1 ) ^ { r }$ . Note that $\mu _ { 1 } = \mu _  $ , the usual Möbius function.

Prove the properties of the functions $\mu _ { k }$ described in the following exercises.

36. If $k \geq 1$ then $\mu _ { k } ( n ^ { k } ) = \mu ( n )$ -

37. Each function $\mu _ { k }$ is multiplicative.

38.If $k \geq 2$ we have

$$
\mu _ { k } ( n ) = \sum _ { d ^ { k } \mid n } \mu _ { k - 1 } { \binom { n } { d ^ { k } } } \mu _ { k - 1 } { \binom { n } { d } } .
$$

39.If $k \geq 1$ we have

$$
| \mu _ { k } ( n ) | = \sum _ { d ^ { k + 1 } | n } \mu ( d ) .
$$

40. For each prime $p$ the Bell series for ${ \mu } _ { k }$ is given by

$$
( \mu _ { k } ) _ { p } ( x ) = { \frac { 1 - 2 x ^ { k } + x ^ { k + 1 } } { 1 - x } } .
$$

# 3 Averages of Arithmetical Functions

# 3.1 Introduction

The last chapter discussed various identities satisfied by arithmetical functions such as $\mu ( n ) , \varphi ( n ) , \Lambda ( n ) ,$ and the divisor functions $\pmb { \sigma _ { \alpha } ( n ) } .$ We now inquire about the behavior of these and other arithmetical functions $f ( n )$ for large values of $n$

For example, consider $d ( n ) .$ , the number of divisors of $\pmb { n }$ . This function takes on the value 2 infinitely often (when n is prime) and it also takes on arbitrarily large values when $\pmb { n }$ has a large number of divisors. Thus the values of $d ( n )$ fluctuate considerably as $\pmb { n }$ increases.

Many arithmetical functions fluctuate in this manner and it is often difficult to determine their behavior for large n. Sometimes it is more fruitful to study the arithmetic mean

$$
\tilde { f } ( n ) = \frac { 1 } { n } \sum _ { k = 1 } ^ { n } f ( k ) .
$$

Averages smooth out fluctuations so it is reasonable to expect that the mean values $\tilde { f } ( n )$ might behave more regularly than $f ( n ) .$ . This is indeed the case for the divisor function $d ( n ) .$ We will prove later that the average $\tilde { d } ( n )$ grows like log $n$ for large $\pmb { n }$ ; more precisely,

$$
\operatorname* { l i m } _ { n \to \infty } { \frac { \tilde { d } ( n ) } { \log n } } = 1 .
$$

This is described by saying that the average order of $d ( n )$ is log n.

To study the average of an arbitrary function $f$ we need a knowledge of its partial sums $\sum _ { k = 1 } ^ { n } f ( k )$ Sometimes it is convenient to replace the

upper index n by an arbitrary positive real number $x$ and to consider instead sums of the form

$$
\sum _ { k \leq x } f ( k ) .
$$

Here it is understood that the index $k$ varies from 1 to $[ x ]$ , the greatest integer $\leq x$ . If $0 < x < 1$ the sum is empty and we assign it the value 0. Our goal is to determine the behavior of this sum as a function of ${ \pmb x } .$ , especially for large $x$

For the divisor function we will prove a result obtained by Dirichlet in 1849, which is stronger than (1), namely

$$
\sum _ { k \le x } d ( k ) = x \log x + ( 2 C - 1 ) x + O ( \sqrt { x } )
$$

for all $x \ge 1$ . Here $C$ is Euler's constant, defined by the equation

$$
C = \operatorname* { l i m } _ { n \to \infty } { \biggl ( } 1 + { \frac { 1 } { 2 } } + { \frac { 1 } { 3 } } + \cdots + { \frac { 1 } { n } } - \log n { \biggr ) } .
$$

The symbol $O ( \sqrt { x } )$ represents an unspecifed function of $\boldsymbol { x }$ which grows no faster than some constant times $\sqrt { x }$ . This is an example of the "big oh" notation which is defined as follows.

3.2 The big oh notation. Asymptotic equality of functions

Definition If $g ( x ) > 0$ for all $x \ge a$ , we write

$$
f ( x ) = O ( g ( x ) ) { \mathrm { ( r e a d : } } ^ { * \epsilon } f ( x ) { \mathrm { i s ~ b i g ~ o h ~ o f ~ } } g ( x ) ^ { \prime \prime } )
$$

to mean that the quotient $f ( x ) / g ( x )$ is bounded for $x \ge a$ ; that is, there exists a constant $M > 0$ such that

$$
| f ( x ) | \leq M g ( x ) \quad { \mathrm { f o r ~ a l l ~ } } x \geq a .
$$

An equation of the form

$$
f ( x ) = h ( x ) + O ( g ( x ) )
$$

means that $f ( x ) - h ( x ) = O ( g ( x ) ) ,$ We note that $f ( t ) = O ( g ( t ) )$ for $t \geq a$ implies $\textstyle { \int _ { a } ^ { x } f ( t ) d t = O ( \int _ { a } ^ { x } g ( t ) d t ) }$ for $x \geq a$ ,

# Definition If

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { f ( x ) } { g ( x ) } } = 1
$$

we say that $f ( x )$ is asymptotic to $g ( x )$ as $x \to \infty$ , and we write

$$
f ( x ) \sim g ( x ) \mathrm { a s } x  \infty .
$$

For example, Equation (2) implies that

$$
\sum _ { k \leq x } d ( k ) \sim x \log x \quad { \mathrm { a s ~ } } x \to \infty .
$$

In Equation (2) the term $x \log x$ is called the asymptotic value of the sum; the other two terms represent the error made by approximating the sum by its asymptotic value. If we denote this error by $E ( x ) .$ , then (2) states that

$$
E ( x ) = ( 2 C - 1 ) x + O ( { \sqrt { x } } ) .
$$

This could also be written $E ( x ) = O ( x ) ,$ an equation which is correct but which does not convey the more precise information in (4). Equation (4) tells us that the asymptotic value of $E ( x )$ is $( 2 C - 1 ) x$ .

# 3.3 Euler's summation formula

Sometimes the asymptotic value of a partial sum can be obtained by comparing it with an integral. A summation formula of Euler gives an exact expression for the error made in such an approximation. In this formula $[ t ]$ denotes the greatest integer $\leq t$

Theorem 3.1 Euler's summation formula. If f has a continuous derivative $f ^ { \prime }$ on the interval $[ y , x ]$ , where $0 < y < x _ { \cdot }$ ,then

$$
\begin{array} { l } { \displaystyle \sum _ { y < n \leq x } f ( n ) = \int _ { y } ^ { x } f ( t ) d t + \int _ { y } ^ { x } ( t - [ t ] ) f ^ { \prime } ( t ) d t } \\ { \displaystyle + f ( x ) ( [ x ] - x ) - f ( y ) ( [ y ] - y ) . } \end{array}
$$

PROOF. Let $m = [ y ] , k = [ x ]$ . For integers $\pmb { n }$ and $n \mathrm { ~ - ~ } 1 \mathrm { i n } \left[ y , x \right]$ we have

$$
\begin{array} { l l l } { \displaystyle \int _ { n - 1 } ^ { n } [ t ] f ^ { \prime } ( t ) d t = \int _ { n - 1 } ^ { n } ( n - 1 ) f ^ { \prime } ( t ) d t = ( n - 1 ) \{ f ( n ) - f ( n - 1 ) \} } \\ { \displaystyle \qquad = \{ n f ( n ) - ( n - 1 ) f ( n - 1 ) \} - f ( n ) . } \end{array}
$$

Summing from $n = m + 1$ to $n = k$ we find

$$
\begin{array} { l } { \displaystyle \int _ { m } ^ { k } [ t ] f ^ { \prime } ( t ) d t = \sum _ { n = m + 1 } ^ { k } \{ n f ( n ) - ( n - 1 ) f ( n - 1 ) \} - \sum _ { y < n \leq x } f ( n ) } \\ { = k f ( k ) - m f ( m ) - \displaystyle \sum _ { y < n \leq x } f ( n ) , } \end{array}
$$

hence

$$
\begin{array} { r } { \displaystyle \sum _ { y < n \leq x } f ( n ) = - \int _ { m } ^ { k } [ t ] f ^ { \prime } ( t ) d t + k f ( k ) - m f ( m ) } \\ { = - \displaystyle \int _ { y } ^ { x } [ t ] f ^ { \prime } ( t ) d t + k f ( x ) - m f ( y ) . } \end{array}
$$

Integration by parts gives us

$$
\int _ { y } ^ { x } f ( t ) d t = x f ( x ) - y f ( y ) - \int _ { y } ^ { x } t f ^ { \prime } ( t ) d t ,
$$

and when this is combined with (6) we obtain (5).

# 3.4 Some elementary asymptotic formulas

The next theorem gives a number of asymptotic formulas which are easy consequences of Euler's summation formula. In part (a) the constant $C$ is Euler's constant defined in (3). In part (b), $\zeta ( s )$ denotes the Riemann zeta function which is defined by the equation

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } } \quad { \mathrm { i f ~ } } s > 1 ,
$$

and by the equation

$$
\zeta ( s ) = \operatorname* { l i m } _ { x \to \infty } \left( \sum _ { n \leq x } { \frac { 1 } { n ^ { s } } } - { \frac { x ^ { 1 - s } } { 1 - s } } \right) { \mathrm { i f ~ } } 0 < s < 1 .
$$

![](images/fc858114e2d7bda7dcb464d8f29a3a028efa428799b57c95709c61ce7f579340.jpg)

Theorem 3.2 If $x \ge 1$ we have:

(a) $\sum _ { n \leq x } { \frac { 1 } { n } } = \log x + C + O { \biggl ( } { \frac { 1 } { x } } { \biggr ) } .$   
(b) $\sum _ { n \leq x } { \frac { 1 } { n ^ { s } } } = { \frac { x ^ { 1 - s } } { 1 - s } } + \zeta ( s ) + O ( x ^ { - s } ) i f s > 0 , s \neq 1 .$   
(c) $\sum _ { n > x } { \frac { 1 } { n ^ { s } } } = O ( x ^ { 1 - s } ) \quad i f s > 1 .$   
(d) $\sum _ { n \leq x } n ^ { x } = { \frac { x ^ { \alpha + 1 } } { \alpha + 1 } } + O ( x ^ { \alpha } ) \quad i f \alpha \geq 0 .$

x\$ }\$ \$\rac{}\$ x

PRooF. For part (a) we take $f ( t ) = 1 / t$ in Euler's summation formula to obtain

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } \displaystyle \frac 1 n = \int _ { 1 } ^ { x } \displaystyle \frac { d t } { t } - \int _ { 1 } ^ { x } \displaystyle \frac { t - [ t ] } { t ^ { 2 } } d t + 1 - \displaystyle \frac { x - [ x ] } { x } } \\ { = \log x - \int _ { 1 } ^ { x } \displaystyle \frac { t - [ t ] } { t ^ { 2 } } d t + 1 + O \biggl ( \displaystyle \frac 1 x \biggr ) } \\ { = \log x + 1 - \int _ { 1 } ^ { \infty } \displaystyle \frac { t - [ t ] } { t ^ { 2 } } d t + \int _ { x } ^ { \infty } \displaystyle \frac { t - [ t ] } { t ^ { 2 } } d t + O \biggl ( \displaystyle \frac 1 x \biggr ) . } \end{array}
$$

The improper integral $\int _ { 1 } ^ { \infty } ( t - [ t ] ) t ^ { - 2 } d t$ exists since it is dominated by $\int _ { 1 } ^ { \infty } t ^ { - 2 } \bar { d t }$ .Also,

$$
0 \leq \int _ { x } ^ { \infty } { \frac { t - [ t ] } { t ^ { 2 } } } d t \leq \int _ { x } ^ { \infty } { \frac { 1 } { t ^ { 2 } } } d t = { \frac { 1 } { x } }
$$

so the last equation becomes

$$
\sum _ { n \leq x } { \frac { 1 } { n } } = \log x + 1 - \int _ { 1 } ^ { \infty } { \frac { t - [ t ] } { t ^ { 2 } } } d t + O { \binom { 1 } { x } } .
$$

This proves (a) with

$$
C = 1 - \int _ { 1 } ^ { \infty } { \frac { t - [ t ] } { t ^ { 2 } } } d t .
$$

Letting $x \to \infty$ in (a) we find that

$$
\operatorname* { l i m } _ { x \to \infty } { \biggl ( } \sum _ { n \leq x } { \frac { 1 } { n } } - \log x { \biggr ) } = 1 - \int _ { 1 } ^ { \infty } { \frac { t - [ t ] } { t ^ { 2 } } } d t ,
$$

so $C$ is also equal to Euler's constant.

To prove part (b) we use the same type of argument with $f ( x ) = x ^ { - s } ;$ , where $s > 0 , s \neq 1 ,$ Euler's summation formula gives us

$$
\begin{array} { c } { { \displaystyle \sum _ { n \leq x } \displaystyle \frac { 1 } { n ^ { s } } = \int _ { 1 } ^ { x } \displaystyle \frac { d t } { t ^ { s } } - s \int _ { 1 } ^ { x } \displaystyle \frac { t - [ t ] } { t ^ { s + 1 } } d t + 1 - \displaystyle \frac { x - [ x ] } { x ^ { s } } } } \\ { { = \displaystyle \frac { x ^ { 1 - s } } { 1 - s } - \displaystyle \frac { 1 } { 1 - s } + 1 - s \int _ { 1 } ^ { \infty } \displaystyle \frac { t - [ t ] } { t ^ { s + 1 } } d t + { \cal O } ( x ^ { - s } ) . } } \end{array}
$$

Therefore

$$
\sum _ { n \leq x } { \frac { 1 } { n ^ { s } } } = { \frac { x ^ { 1 - s } } { 1 - s } } + C ( s ) + O ( x ^ { - s } ) ,
$$

where

$$
C ( s ) = 1 - { \frac { 1 } { 1 - s } } - s \int _ { 1 } ^ { \infty } { \frac { t - [ t ] } { t ^ { s + 1 } } } d t .
$$

If $s > 1$ , the left member of (7) approaches $\zeta ( s )$ as $x \to \infty$ and the terms $x ^ { 1 - s }$ and $x ^ { - s }$ both approach 0. Hence $C ( s ) = \zeta ( s )$ if $s > 1$ . If $0 < s < 1$ , $x ^ { - s } \to 0$ and (7) shows that

$$
\operatorname* { l i m } _ { x \to \infty } \left( \sum _ { n \leq x } { \frac { 1 } { n ^ { s } } } - { \frac { x ^ { 1 - s } } { 1 - s } } \right) = C ( s ) .
$$

Therefore $C ( s )$ is also equal to $\zeta ( s )$ if $0 < s < 1$ This proves (b).

To prove (c) we use (b) with $s > 1$ to obtain

$$
\sum _ { n > x } { \frac { 1 } { n ^ { s } } } = \zeta ( s ) - \sum _ { n \leq x } { \frac { 1 } { n ^ { s } } } = { \frac { x ^ { 1 - s } } { s - 1 } } + O ( x ^ { - s } ) = O ( x ^ { 1 - s } )
$$

since $x ^ { - s } \leq x ^ { 1 - s }$

Finally, to prove (d) we use Euler's summation formula once more with $f ( t ) = t ^ { \alpha }$ to obtain

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } n ^ { \alpha } = \int _ { 1 } ^ { x } t ^ { \alpha } d t + \alpha \int _ { 1 } ^ { x } t ^ { \alpha - 1 } ( t - [ t ] ) d t + 1 - ( x - [ x ] ) x ^ { \alpha } } \\ { \displaystyle \qquad = \frac { x ^ { \alpha + 1 } } { \alpha + 1 } - \frac { 1 } { \alpha + 1 } + O \biggl ( \alpha \int _ { 1 } ^ { x } t ^ { \alpha - 1 } d t \biggr ) + O ( x ^ { \alpha } ) } \\ { \displaystyle \qquad = \frac { x ^ { \alpha + 1 } } { \alpha + 1 } + O ( x ^ { \alpha } ) . } \end{array}
$$

# 3.5 The average order of $d ( n )$

In this section we derive Dirichlet's asymptotic formula for the partial sums of the divisor function $d ( n )$

Theorem 3.3 For all $x \ge 1$ we have

$$
\sum _ { n \leq x } d ( n ) = x \log x + ( 2 C - 1 ) x + O ( { \sqrt { x } } ) ,
$$

where $C$ is Euler's constant.

PROOF. Since $\begin{array} { r } { d ( n ) = \sum _ { d \mid n } 1 } \end{array}$ we have

$$
\sum _ { n \leq x } d ( n ) = \sum _ { n \leq x } \sum _ { d \mid n } 1 .
$$

This is a double sum extended over $n$ and $d$ Since ${ d \vert n }$ we can write $n = q d$ and extend the sum over all pairs of positive integers $q , d$ with $q d \leq x$ Thus,

$$
\sum _ { n \leq x \atop n \leq x } d ( n ) = \ \sum _ { q , d \atop q d \leq x } 1 .
$$

This can be interpreted as a sum extended over certain lattice points in the ${ \pmb q } { \pmb d }$ -plane, as suggested by Figure 3.1. (A lattice point is a point with integer coordinates.) The lattice points with $q d = n$ lie on a hyperbola, so the sum in (9) counts the number of lattice points which lie on the hyperbolas corresponding to $n = 1 , 2 , \ldots , [ x ]$ . For each fixed $d \leq x$ we can count first those

# 3:Averages of arithmetical functions

![](images/2d727f42d5ab5f265f0a85c3bdbe42ef57f529b3619e508f7da406465daa19c8.jpg)  
Figure 3.1

lattice points on the horizontal line segment $1 \leq q \leq x / d ,$ and then sum over all $d \leq x .$ . Thus (9) becomes

$$
\sum _ { n \leq x } d ( n ) = \sum _ { d \leq x } \sum _ { q \leq x / d } 1 .
$$

Now we use part (d) of Theorem 3.2 with $\alpha = 0$ to obtain

$$
\sum _ { q \leq x / d } 1 = \frac { x } { d } + O ( 1 ) .
$$

Using this along with Theorem 3.2(a) we find

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } d ( n ) = \sum _ { d \leq x } \left\{ \frac { x } { d } + O ( 1 ) \right\} = x \sum _ { d \leq x } \frac 1 d + O ( x ) } \\ { \displaystyle \qquad = x \left\{ \log x + C + O \Bigl ( \frac 1 x \Bigr ) \right\} + O ( x ) = x \log x + O ( x ) . } \end{array}
$$

This is a weak version of (8) which implies

$$
\sum _ { n \leq x } d ( n ) \sim x \log x \quad { \mathrm { a s ~ } } x \to \infty
$$

and gives log $n$ as the average order of $d ( n )$

To prove the more precise formula (8) we return to the sum (9) which counts the number of lattice points in a hyperbolic region and take advantage of the symmetry of the region about the line $q = d$ . The total number of lattice points in the region is equal to twice the number below the line $q = d$

3.5: The average order of $d ( n )$

![](images/049440531883529baecb15e8ac65c80353c3e71bc0925da2f3dcc05cd3da51e9.jpg)  
Figure 3.2

plus the number on the bisecting line segment. Referring to Figure 3.2 we see that

$$
\sum _ { n \leq x } d ( n ) = 2 \sum _ { d \leq { \sqrt { x } } } \left\{ \left[ { \frac { x } { d } } \right] - d \right\} + [ { \sqrt { x } } ] .
$$

Now we use the relation $[ y ] = y + O ( 1 )$ and parts (a) and (d) of Theorem 3.2 to obtain

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } d ( n ) = 2 \sum _ { d \leq \sqrt { x } } \left\{ \frac { x } { d } - d + O ( 1 ) \right\} + O ( \sqrt { x } ) } \\ { \displaystyle \qquad = 2 x \sum _ { d \leq \sqrt { x } } \frac { 1 } { d } - 2 \sum _ { d \leq \sqrt { x } } d + O ( \sqrt { x } ) } \\ { \displaystyle \qquad = 2 x \left\{ \log \sqrt { x } + C + O \biggl ( \frac { 1 } { \sqrt { x } } \biggr ) \right\} - 2 \left\{ \frac { x } { 2 } + O ( \sqrt { x } ) \right\} + O ( \sqrt { x } ) } \\ { \displaystyle \qquad = x \log x + ( 2 C - 1 ) x + O ( \sqrt { x } ) . } \end{array}
$$

This completes the proof of Dirichlet's formula.

Note. The error term $O ( \sqrt { x } )$ can be improved. In 1903 Voronoi proved that the error is $O ( x ^ { 1 / 3 } \log { x } )$ ; in 1922 van der Corput improved this to $O ( x ^ { 3 3 / 1 0 0 } )$ .The best estimate to date is $O ( x ^ { ( 1 2 / 3 7 ) + \varepsilon } )$ for every $\varepsilon > 0$ obtained by Kolesnik [35] in 1969. The determination of the infi mum of all $\theta$ such that the error term is $O ( x ^ { \theta } )$ is an unsolved problem known as Dirichlet's divisor problem. In 1915 Hardy and Landau showed that inf $\theta \ge 1 / 4$

# 3.6 The average order of the divisor functions $\pmb { \sigma _ { \alpha } ( n ) }$

The case $\alpha = 0$ was considered in Theorem 3.3. Next we consider real $\alpha > 0$ and treat the case $\alpha = 1$ separately.

Theorem 3.4 For all $x \ge 1$ we have

$$
\sum _ { n \leq x } \sigma _ { 1 } ( n ) = { \frac { 1 } { 2 } } \zeta ( 2 ) x ^ { 2 } + O ( x \log x ) .
$$

Note. It can be shown that $\zeta ( 2 ) = \pi ^ { 2 } / 6$ . Therefore (11) shows that the average order of $\sigma _ { 1 } ( n )$ is $\pi ^ { 2 } n / 1 2$

ProoF. The method is similar to that used to derive the weak version of Theorem 3.3. We have

$$
\begin{array} { r l } & { \displaystyle \sum _ { n \leq x } \sigma _ { 1 } ( n ) = \sum _ { n \leq x } \sum _ { q \mid n } q = \ \sum _ { q , d } q = \ \sum _ { d \leq x } \sum _ { q \leq x \mid d } q } \\ & { \quad \quad \quad = \ \displaystyle \sum _ { d \leq x } \left\{ \frac { 1 } { 2 } \left( \frac { x } { \bar { d } } \right) ^ { 2 } + O \left( \frac { x } { \bar { d } } \right) \right\} = \frac { x ^ { 2 } } { 2 } \sum _ { d \leq x } \frac { 1 } { d ^ { 2 } } + O \biggl ( x \sum _ { d \leq x } \frac { 1 } { d } \biggr ) } \\ & { \quad \quad \quad = \frac { x ^ { 2 } } { 2 } \left\{ - \frac { 1 } { x } + \zeta ( 2 ) + O \biggl ( \frac { 1 } { x ^ { 2 } } \biggr ) \right\} + O ( x \log x ) = \frac { 1 } { 2 } \zeta ( 2 ) x ^ { 2 } + O ( x \log x ) , } \end{array}
$$

where we have used parts (a) and (b) of Theorem 3.2.

Theorem 3.5 If $x \ge 1$ and $\alpha > 0$ , $\alpha \neq 1$ , we have

$$
\mathop { \sum _ { n \leq x } } _ { n \leq x } \sigma _ { \alpha } ( n ) = { \frac { \zeta ( \alpha + 1 ) } { \alpha + 1 } } x ^ { \alpha + 1 } + O ( x ^ { \beta } ) ,
$$

where $\beta = \operatorname* { m a x } \{ 1 , \alpha \}$

PRooF. This time we use parts (b) and (d) of Theorem 3.2 to obtain

$$
\begin{array} { r l } { \underset { n \leq s } { \sum } \sigma _ { \mathfrak { s } } ( n ) = \underset { n \leq s \leq u ( n ) } { \sum } \varphi ^ { 2 } = \underset { \textnormal { d } \leq s } { \sum } \underset { \ell \leq s } { \sum } \ q ^ { 2 } } \\ & { = \underset { \textnormal { d } \leq s } { \sum } \Bigg \{ \frac { 1 } { \alpha + 1 } \left( \frac { x } { \alpha } \right) ^ { 2 + 1 } + O \left( \frac { x ^ { \alpha } } { \alpha ^ { 2 } } \right) \Bigg \} = \frac { x ^ { \alpha + 1 } } { \alpha + 1 } \underset { \alpha \leq \pi } { \sum } \frac { 1 } { \alpha ^ { \alpha - 1 } } + O \bigg ( x ^ { 2 } \underset { \textnormal { d } \leq x } { \sum } \frac { 1 } { \alpha ^ { \alpha } } \bigg ) } \\ & { = \frac { x ^ { \alpha + 1 } } { \alpha + 1 } \left\{ \underset { \ell \leq \pi } { \sum ^ { \alpha } } + \zeta ( \alpha + 1 ) + O ( x ^ { - \alpha - 1 } ) \right\} } \\ & { \quad + O \bigg ( x ^ { \alpha } \underset { \textnormal { d } \leq \pi } { \sum ^ { \alpha + s } } + \zeta ( \alpha ) + O ( x ^ { - \alpha } ) \Bigg \} \bigg ) } \\ & { = \frac { \zeta ( \alpha + 1 ) } { \alpha + 1 } x ^ { \alpha + 1 } + O ( x ) + O ( x ^ { n } ) = \frac { \zeta ( \alpha + 1 ) } { \alpha + 1 } x ^ { \alpha + 1 } + O ( x ^ { \beta } ) } \end{array}
$$

where $\beta = \operatorname* { m a x } \{ 1 , \alpha \}$

To find the average order of $\sigma _ { \alpha } ( n )$ for negative $\pmb { \mathfrak { X } }$ we write $\alpha = - \beta ,$ where $\beta > 0$ ,

Theorem 3 $. 6 I f \beta > 0$ let $\delta = \operatorname* { m a x } \{ 0 , 1 - \beta \}$ . Then if $x > 1$ we have

$$
\begin{array} { l } { { \displaystyle \sum _ { n \leq x } \sigma _ { - \beta } ( n ) = \zeta ( \beta + 1 ) x + O ( x ^ { \delta } ) \quad i f \beta \neq 1 , } } \\ { { } } \\ { { = \zeta ( 2 ) x + O ( \log x ) \quad i f \beta = 1 . } } \end{array}
$$

PROOF. We have

$$
\begin{array} { r l } & { \displaystyle \sum _ { n \leq x } \sigma _ { - \beta } ( n ) = \sum _ { n \leq x } \sum _ { d \mid n } \frac { 1 } { d ^ { \beta } } = \displaystyle \sum _ { d \leq x } \frac { 1 } { d ^ { \beta } } \sum _ { q \leq x / d } 1 } \\ & { \quad \quad \quad = \displaystyle \sum _ { d \leq x } \frac { 1 } { d ^ { \beta } } \left\{ \frac { x } { d } + O ( 1 ) \right\} = x \displaystyle \sum _ { d \leq x } \frac { 1 } { d ^ { \beta + 1 } } + O \biggl ( \sum _ { d \leq x } \frac { 1 } { d ^ { \beta } } \biggr ) . } \end{array}
$$

The last term is $O ( \log x )$ if $\beta = 1$ and $O ( x ^ { \delta } )$ if $\beta \neq 1$ Since

$$
x \sum _ { d \leq x } { \frac { 1 } { d ^ { \beta + 1 } } } = { \frac { x ^ { 1 - \beta } } { - \beta } } + \zeta ( \beta + 1 ) x + O ( x ^ { - \beta } ) = \zeta ( \beta + 1 ) x + O ( x ^ { 1 - \beta } )
$$

this completes the proof.

# 3.7 The average order of $\varphi ( n )$

The asymptotic formula for the partial sums of Euler's totient involves the sum of the series

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { 2 } } } .
$$

This series converges absolutely since it is dominated by $\sum _ { n = 1 } ^ { \infty } n ^ { - 2 }$ .In a later chapter we will prove that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { 2 } } } = { \frac { 1 } { \zeta ( 2 ) } } = { \frac { 6 } { \pi ^ { 2 } } } .
$$

Assuming this result for the time being we have

$$
\begin{array} { c } { { \displaystyle \sum _ { n \leq x } \frac { \mu ( n ) } { n ^ { 2 } } = \sum _ { n = 1 } ^ { \infty } \frac { \mu ( n ) } { n ^ { 2 } } - \sum _ { n > x } \frac { \mu ( n ) } { n ^ { 2 } } } } \\ { { = \displaystyle \frac { 6 } { \pi ^ { 2 } } + O \biggl ( \sum _ { n > x } \frac { 1 } { n ^ { 2 } } \biggr ) = \frac { 6 } { \pi ^ { 2 } } + O \biggl ( \frac { 1 } { x } \biggr ) } } \end{array}
$$

by part (c) of Theorem 3.2. We now use this to obtain the average order of $\varphi ( n ) .$

Theorem 3.7 For $x > 1$ we have

$$
\sum _ { n \leq x } \varphi ( n ) = { \frac { 3 } { \pi ^ { 2 } } } x ^ { 2 } + O ( x \log x ) ,
$$

so the average order of $\varphi ( n )$ is $3 n / \pi ^ { 2 }$ .

ProoF. The method is similar to that used for the divisor functions. We start with the relation

$$
\varphi ( n ) = \sum _ { d \mid n } \mu ( d ) { \frac { n } { d } }
$$

and obtain

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } \varphi ( n ) = \sum _ { n \leq x } \sum _ { i = 1 } ^ { n } \mu ( d ) \frac { n } { d } = \sum _ { q , d } \mu ( d ) q = \sum _ { i \leq x } \mu ( d ) \sum _ { q \leq x / d } } q  \\ { \displaystyle = \sum _ { i \leq x } \mu ( d ) \left\{ \frac { 1 } { 2 } \left( \frac { x } { d } \right) ^ { 2 } + O \left( \frac { x } { d } \right) \right\} } \\ { \displaystyle = \frac { 1 } { 2 } x ^ { 2 } \sum _ { d \leq x } \frac { \mu ( d ) } { d ^ { 2 } } + O \left( x \sum _ { d \leq x } \frac { 1 } { d } \right) } \\ { \displaystyle = \frac { 1 } { 2 } x ^ { 2 } \left\{ \frac { 6 } { \pi ^ { 2 } } + O \left( \frac { 1 } { x } \right) \right\} + O ( x \log x ) = \frac { 3 } { \pi ^ { 2 } } x ^ { 2 } + O ( x \log x ) . } \end{array}
$$

# 3.8 An application to the distribution of lattice points visible from the origin

The asymptotic formula for the partial sums of $\varphi ( n )$ has an interesting application to a theorem concerning the distribution of lattice points in the plane which are visible from the origin.

Definition Two lattice points $P$ and $Q$ are said to be mutually visible if the line segment which joins them contains no lattice points other than the endpoints $P$ and $Q$

Theorem 3.8 Two lattice points $( a , b )$ and $( m , n )$ are mutually visible $i f ,$ and only $i f .$ , $a - m$ and $b - n$ are relatively prime.

PRooF. It is clear that $( a , b )$ and $( m , n )$ are mutually visible if and only if $( a - m , b - n )$ is visible from the origin. Hence it sufices to prove the theorem when $( m , n ) = ( 0 , 0 )$

Assume $( a , b )$ is visible from the origin, and let $\boldsymbol { d } = ( a , b )$ . We wish to prove that $d = 1$ . If $d > 1$ then $a = d a ^ { \prime } , b = d b ^ { \prime }$ and the lattice point $( a ^ { \prime } , b ^ { \prime } )$ is on the line segment joining $( 0 , 0 )$ to $( a , b )$ . This contradiction proves that $d = 1$ .

3.8: An application to the distribution of lattice points visible from the origin

Conversely, assume $( a , b ) = 1$ If a lattice point $( a ^ { \prime } , b ^ { \prime } )$ is on the line segment joining (0, 0) to $( a , b )$ we have

$$
a ^ { \prime } = t a , b ^ { \prime } = t b , \mathrm { w h e r e } 0 < t < 1 .
$$

Hence $t$ is rational, $\ s 0 \ t \approx r / s$ where $r , s$ are positive integers with $( r , s ) = 1$ Thus

$$
s a ^ { \prime } = a r \qquad \mathrm { a n d } \qquad s b ^ { \prime } = b r ,
$$

sO $s | a r , s | b r$ But $( s , r ) = 1 \ s \circ \ s | a , \ s | b$ Hence $s = 1$ since $( a , b ) = 1$ . This contradicts the inequality $0 < t < 1$ . Therefore the lattice point $\left( a , b \right)$ is visible from the origin. □

There are infinitely many lattice points visible from the origin and it is natural to ask how they are distributed in the plane.

Consider a large square region in the $x y \cdot$ -plane defined by the inequalities

$$
| x | \leq r , \qquad | y | \leq r .
$$

Let $N ( r )$ denote the number of lattice points in this square, and let $N ^ { \prime } ( r )$ denote the number which are visible from the origin. The quotient $N ^ { \prime } ( r ) / N ( r )$ measures the fraction of those lattice points in the square which are visible from the origin. The next theorem shows that this fraction tends to a limit as $r  \infty$ . We call this limit the density of the lattice points visible from the origin.

Theorem 3.9 The set of lattice points visible from the origin has density $6 / \pi ^ { 2 }$ .

ProoF. We shall prove that

$$
\operatorname * { l i m } _ { r \to \infty } \frac { N ^ { \prime } ( r ) } { N ( r ) } = \frac { 6 } { \pi ^ { 2 } } .
$$

The eight lattice points nearest the origin are all visible from the origin. (See Figure 3.3.) By symmetry, we see that $N ^ { \prime } ( r )$ is equal to 8, plus 8 times the number of visible points in the region

$$
\{ ( x , y ) : 2 \leq x \leq r , \quad 1 \leq y \leq x \} ,
$$

(the shaded region in Figure 3.3). This number is

$$
N ^ { \prime } ( r ) = 8 + 8 \sum _ { { 2 \leq n \leq r \atop ( m , n ) = 1 } } \sum _ { 1 \leq m < n } 1 = 8 \sum _ { 1 \leq n \leq r } \varphi ( n ) .
$$

Using Theorem 3.7 we have

$$
N ^ { \prime } ( r ) = \frac { 2 4 } { \pi ^ { 2 } } r ^ { 2 } + O ( r \log r ) .
$$

3: Averages of arithmetical functions

![](images/45da99e2c16ce2d10d94e498fd3aec402583c90929b9b7bb74cc26ae20d8090a.jpg)  
Figure 3.3

But the total number of lattice points in the square is

$$
N ( r ) = ( 2 [ r ] + 1 ) ^ { 2 } = ( 2 r + O ( 1 ) ) ^ { 2 } = 4 r ^ { 2 } + O ( r )
$$

SO

$$
\frac { N ^ { \prime } ( r ) } { N ( r ) } = \frac { \displaystyle \frac { 2 4 } { \pi ^ { 2 } } r ^ { 2 } + O ( r \log r ) } { \displaystyle 4 r ^ { 2 } + O ( r ) } = \frac { \displaystyle \frac { 6 } { \pi ^ { 2 } } + O \biggl ( \frac { \log r } { r } \biggr ) } { \displaystyle 1 + O \biggl ( \frac { 1 } { r } \biggr ) } .
$$

Hence as $r  \infty$ we find $N ^ { \prime } ( r ) / N ( r ) \to 6 / \pi ^ { 2 }$

Note. The result of Theorem 3.9 is sometimes described by saying that a lattice point chosen at random has probability $6 / \pi ^ { 2 }$ of being visible from the origin. Or, if two integers a and b are chosen at random, the probability that they are relatively prime is ${ \bf 6 } / \pi ^ { 2 }$ .

# 3.9 The average order of $\mu ( n )$ and of $\Lambda ( n )$

The average orders of $\mu ( n )$ and $\Lambda ( n )$ are considerably more dimicult to determine than those of $\varphi ( n )$ and the divisor functions. It is known that $\mu ( n )$ has average order 0 and that $\Lambda ( n )$ has average order I. That is,

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x } } \sum _ { n \leq x } \mu ( n ) = 0
$$

and

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x } } \sum _ { n \leq x } \Lambda ( n ) = 1 ,
$$

but the proofs are not simple. In the next chapter we will prove that both these results are equivalent to the prime number theorem,

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log x } { x } } = 1 ,
$$

where $\pi ( x )$ is the number of primes $\leq x$

In this chapter we obtain some elementary identities involving $\mu ( n )$ and $\Lambda ( n )$ which will be used later in studying the distribution of primes. These will be derived from a general formula relating the partial sums of arbitrary arithmetical functions $f$ and $g$ with those of their Dirichlet product $f * g$

# 3.10 The partial sums of a Dirichlet product

Theorem 3.10 If $h = f \ast g$ ,let

$$
H ( x ) = \sum _ { n \leq x } h ( n ) , \qquad F ( x ) = \sum _ { n \leq x } f ( n ) , \qquad a n d G ( x ) = \sum _ { n \leq x } g ( n ) .
$$

Then we have

$$
H ( x ) = \sum _ { n \leq x } f ( n ) G { \binom { x } { n } } = \sum _ { n \leq x } g ( n ) F { \binom { x } { n } } .
$$

ProoF. We make use of the associative law (Theorem 2.21) which relates the operations $^ { \circ }$ and $\ast$ . Let

$$
U ( x ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f ~ } } 0 < x < 1 , } \\ { 1 } & { { \mathrm { i f ~ } } x \geq 1 . } \end{array} \right. }
$$

Then $F = f \circ U , G = g \circ U $ , and we have

$$
\begin{array} { r } { f \circ G = f \circ ( g \circ U ) = ( f \ast g ) \circ U = H , } \\ { g \circ F = g \circ ( f \circ U ) = ( g \ast f ) \circ U = H . } \end{array}
$$

This completes the proof.

If $g ( n ) = 1$ for all $n$ then $G ( x ) = [ x ]$ , and (14) gives us the following corollary:

Theorem 3.11 $\begin{array} { r } { I f F ( x ) = \sum _ { n \leq x } f ( n ) } \end{array}$ we have

$$
\sum _ { n \leq x } \sum _ { d \mid n } f ( d ) = \sum _ { n \leq x } f ( n ) { \binom { - x } { n } } = \sum _ { n \leq x } F { \binom { x } { n } } .
$$

# 3.11 Applications to $\mu ( n )$ and $\Lambda ( n )$

Now we take $f ( n ) = \mu ( n )$ and $\Lambda ( n )$ in Theorem 3.11 to obtain the following identities which will be used later in studying the distribution of primes.

Theorem 3.12 For $x \ge 1$ we have

$$
\sum _ { n \leq x } \mu ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = 1
$$

and

$$
\sum _ { n \leq x } \Lambda ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = \log { [ x ] } ! .
$$

PRooF. From (15) we have

$$
\sum _ { n \leq x } \mu ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = \sum _ { n \leq x } \sum _ { d \mid n } \mu ( d ) = \sum _ { n \leq x } { \Bigg [ } { \frac { 1 } { n } } { \Bigg ] } = 1
$$

and

$$
\sum _ { n \leq x } \Lambda ( n ) { \biggl [ } { \frac { x } { n } } { \biggr ] } = \sum _ { n \leq x } \sum _ { d \mid n } \Lambda ( d ) = \sum _ { n \leq x } \log n = \log [ x ] ! .
$$

Note. The sums in Theorem 3.12 can be regarded as weighted averages of the functions $\mu ( n )$ and $\Lambda ( n )$

In Theorem 4.16 we will prove that the prime number theorem follows from the statement that the series

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n } }
$$

converges and has sum 0. Using (16) we can prove that this series has bounded partial sums.

Theorem 3.13 For all $x \ge 1$ we have

$$
\left| \sum _ { n \leq x } { \frac { \mu ( n ) } { n } } \right| \leq 1 ,
$$

with equality holding only if $x < 2$

PROOF. If $x < 2$ there is only one term in the sum, $\mu ( 1 ) = 1$ . Now assume that $x \ge 2$ . For each real $y$ let $\{ y \} = y - [ y ]$ . Then

$$
1 = \sum _ { n \leq x } \mu ( n ) { \biggl [ } { \frac { x } { n } } { \biggr ] } = \sum _ { n \leq x } \mu ( n ) { \biggr ( } { \frac { x } { n } } - { \biggl \{ } { \frac { x } { n } } { \biggr \} } { \biggr ) } = x \sum _ { n \leq x } { \frac { \mu ( n ) } { n } } - \sum _ { n \leq x } \mu ( n ) { \biggr \{ } { \frac { x } { n } } { \biggr \} } .
$$

Since $0 \leq \{ y \} < 1$ this implies

$$
\begin{array} { l } { { \displaystyle x \left| \sum _ { n \leq x } \frac { \mu ( n ) } { n } \right| = \left| 1 + \sum _ { n \leq x } \mu ( n ) \biggr \{ \frac { x } { n } \biggr \} \right| \leq 1 + \sum _ { n \leq x } \biggl \{ \frac { x } { n } \biggr \} } } \\ { { \qquad = 1 + \{ x \} + \sum _ { 2 \leq n \leq x } \biggl \{ \frac { x } { n } \biggr \} < 1 + \{ x \} + [ x ] - 1 = x . } } \end{array}
$$

Dividing by $x$ we obtain (18) with strict inequality.

We turn next to identity (17) of Theorem 3.12,

$$
\sum _ { n \leq x } \Lambda ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = \log [ x ] ! ,
$$

and use it to determine the power of a prime which divides a factorial.

Theorem 3.14 Legendre's identity. For every $x \ge 1$ we have

$$
[ x ] ! = \prod _ { p \leq x } p ^ { \alpha ( p ) }
$$

where the product is extended over all primes $\leq x ,$ , and

$$
\alpha ( p ) = \sum _ { m = 1 } ^ { \infty } \biggl [ \frac { x } { p ^ { m } } \biggr ] .
$$

Note. The sum for $\alpha ( p )$ is finite since $[ x / p ^ { m } ] = 0$ for $p > x$

PROOF. Since $\Lambda ( n ) = 0$ unless $\pmb { n }$ is a prime power, and $\Lambda ( p ^ { m } ) = 1 0 \mathsf { g } p .$ we have

$$
\log [ x ] ! = \sum _ { n \leq x } \Lambda ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = \sum _ { p \leq x } \sum _ { m = 1 } ^ { \infty } { \Bigg [ } { \frac { x } { p ^ { m } } } { \Bigg ] } \log p = \sum _ { p \leq x } \alpha ( p ) \log p ,
$$

where $\alpha ( p )$ is given by (20). The last sum is also the logarithm of the product in (19), so this completes the proof. □

Next we use Euler's summation formula to determine an asymptotic formula for $\mathbf { l o g } [ x ] ! .$

Theorem 3.15 If $x \ge 2$ we have

$$
\log [ x ] ! = x \log x - x + O ( \log x ) ,
$$

and hence

$$
\sum _ { n \leq x } \Lambda ( n ) \left[ { \frac { x } { n } } \right] = x \log x - x + O ( \log x ) .
$$

PROOF. Taking $f ( t ) = \log t$ in Euler's summation formula (Theorem 3.1) we obtain

$$
\begin{array} { r } { \displaystyle \sum _ { n \leq x } \log n = \int _ { 1 } ^ { x } \log t d t + \int _ { 1 } ^ { x } \frac { t - [ t ] } { t } d t - ( x - [ x ] ) \mathrm { l o g } x } \\ { = x \log x - x + 1 + \displaystyle \int _ { 1 } ^ { x } \frac { t - [ t ] } { t } d t + O ( \log x ) . } \end{array}
$$

This proves (21) since

$$
\int _ { 1 } ^ { x } \frac { t - [ t ] } { t } d t = O \biggl ( \int _ { 1 } ^ { x } \frac { 1 } { t } d t \biggr ) = O ( \log x ) ,
$$

and (22) follows from (17).

The next theorem is a consequence of (22).

Theorem 3.16 For $x \ge 2$ we have

$$
\sum _ { p \leq x } \left[ { \frac { x } { p } } \right] \log p = x \log x + O ( x ) ,
$$

where the sum is extended over all primes $\leq x .$

PROOF. Since $\Lambda ( n ) = 0$ unless $\pmb { n }$ is a prime power we have

$$
\sum _ { n \leq x } \left[ { \frac { x } { n } } \right] \Lambda ( n ) = \sum _ { \begin{array} { l } { p } \\ { p ^ { m } \leq x } \end{array} } \sum _ { n = 1 } ^ { \infty } \left[ { \frac { x } { p ^ { m } } } \right] \Lambda ( p ^ { m } ) .
$$

Now ${ p ^ { m } } \leq x$ implies $p \leq x .$ Also, $[ x / p ^ { m } ] = 0$ if $p > x$ so we can write the last sum as

$$
\sum _ { p \leq x } \sum _ { m = 1 } ^ { \infty } { \left[ \frac { x } { p ^ { m } } \right] } { \log p } = \sum _ { p \leq x } { \left[ \frac { x } { p } \right] } { \log p } + \sum _ { p \leq x } \sum _ { m = 2 } ^ { \infty } { \left[ \frac { x } { p ^ { m } } \right] } { \log p } .
$$

Next we prove that the last sum is $O ( x )$ . We have

$$
\begin{array} { r l } { \displaystyle \sum _ { p \leq x } \log p \sum _ { m = 2 } ^ { \infty } \biggl [ \frac { x } { p ^ { m } } \biggr ] \leq \displaystyle \sum _ { p \leq x } \log p \sum _ { m = 2 } ^ { \infty } \frac { x } { p ^ { m } } = x \sum _ { p \leq x } \log p \sum _ { m = 2 } ^ { \infty } \biggl ( \frac { 1 } { p } \biggr ) ^ { m } } & { } \\ { = x \sum _ { p \leq x } \log p \cdot \frac { 1 } { p ^ { 2 } } \cdot \frac { 1 } { 1 - \frac { 1 } { p } } = x \sum _ { p \leq x } \frac { \log p } { p ( p - 1 ) } } & { } \\ { \leq x \sum _ { n = 2 } ^ { \infty } \frac { \log n } { n ( n - 1 ) } = O ( x ) . } \end{array}
$$

Hence we have shown that

$$
\sum _ { n \leq x } { \binom { x } { n } } \Lambda ( n ) = \sum _ { p \leq x } { \sqrt { \frac { x } { p } } } \left] { \log p } + O ( x ) , \right.
$$

which, when used with (22), proves (23).

Equation (23) will be used in the next chapter to derive an asymptotic formula for the partial sums of the divergent series $\sum ( 1 / p )$

# 3.12 Another identity for the partial sums of a Dirichlet product

We conclude this chapter with a more general version of Theorem 3.10 that will be used in Chapter 4 to study the partial sums of certain Dirichlet products.

As in Theorem 3.10 we write

$$
F ( x ) = \sum _ { n \leq x } f ( n ) , \qquad G ( x ) = \sum _ { n \leq x } g ( n ) , \qquad { \mathrm { a n d ~ } } H ( x ) = \sum _ { n \leq x } ( f * g ) ( n )
$$

so that

$$
H ( x ) = \sum _ { n \leq x } \sum _ { d \mid n } f ( d ) g { \binom { n } { d } } = \sum _ { q , d \atop q d \leq x } f ( d ) g ( q ) .
$$

Theorem 3.17 If a and $b$ are positive real numbers such that $a b = x$ ,then

$$
\sum _ { q , d \atop q d \leq x } f ( d ) g ( q ) = \sum _ { n \leq a } f ( n ) G { \binom { x } { n } } + \sum _ { n \leq b } g ( n ) F { \binom { x } { n } } - F ( a ) G ( b ) .
$$

![](images/1e0e079c907075a11c62350d8b7c9abb94ad4c8b1c5f82db93443e53fb6d1182.jpg)  
Figure 3.4

PROOF. The sum $H ( x )$ on the left of (24) is extended over the lattice points in the hyperbolic region shown in Figure 3.4. We split the sum into two parts, one over the lattice points in $A \cup B$ and the other over those in $B \cup C$ The lattice points in $B$ are covered twice, so we have

$$
H ( x ) = \sum _ { d \leq a } \sum _ { q \leq x / d } f ( d ) g ( q ) + \sum _ { q \leq b } \sum _ { d \leq x / q } f ( d ) g ( q ) - \sum _ { d \leq a } \sum _ { q \leq b } f ( d ) g ( q ) ,
$$

which is the same as (24).

Note. Taking $a = 1$ and $b = 1$ , respectively, we obtain the two equations in Theorem 3.10, since $f ( 1 ) = F ( 1 )$ and $g ( 1 ) = G ( 1 ) .$ d:

# Exercises for Chapter 3

1. Use Euler's summation formula to deduce the following for $x \ge 2$ :

()) $\sum _ { n \leq x } { \frac { \log n } { n } } = { \frac { 1 } { 2 } } \log ^ { 2 } x + A + O { \biggl ( } { \frac { \log x } { x } } { \biggr ) } ,$ wh $\pmb { A }$ (b) $\sum _ { 2 \leq n \leq x } { \frac { 1 } { n \log n } } = \log ( \log x ) + B + O { \biggl ( } { \frac { 1 } { x \log x } } { \biggr ) } ,$ $B$ i  ntan.

$\mathfrak { L } _ { \mathfrak { n } }$ If $x \ge 2$ prove that

$$
\sum _ { n \leq x } { \frac { d ( n ) } { n } } = { \frac { 1 } { 2 } } \log ^ { 2 } x + 2 C \log x + O ( 1 ) ,
$$

$\pmb { 3 } .$ If $x \ge 2$ and $\alpha > 0 , \alpha \neq 1$ , prove that

$$
\sum _ { n \leq x } { \frac { d ( n ) } { n ^ { \alpha } } } = { \frac { x ^ { 1 - \alpha } \log x } { 1 - \alpha } } + \zeta ( \alpha ) ^ { 2 } + O ( x ^ { 1 - \alpha } ) .
$$

4.If $x \ge 2$ prove that:

(a) $\sum _ { n \leq x } \mu ( n ) { \binom { x } { n } } ^ { 2 } = { \frac { x ^ { 2 } } { \zeta ( 2 ) } } + O ( x \log x ) .$ (b) $\sum _ { n \leq x } { \frac { \mu ( n ) } { n } } \left[ { \frac { x } { n } } \right] = { \frac { x } { \zeta ( 2 ) } } + O ( \log x ) .$

5.If $x \ge 1$ prove that:

$$
\begin{array} { l } { \displaystyle \sum _ { n \leq x } \varphi ( n ) = \frac { 1 } { 2 } \displaystyle \sum _ { n \leq x } \mu ( n ) \ \Bigg [ \frac { x } { n } \Bigg ] ^ { 2 } + \frac { 1 } { 2 } . } \\ { \displaystyle \sum _ { n \leq x } \frac { \varphi ( n ) } { n } = \displaystyle \sum _ { n \leq x } \frac { \mu ( n ) } { n } \Bigg [ \frac { x } { n } \Bigg ] . } \end{array}
$$

These formulas, together with those in Exercise 4, show that, for $x \ge 2$ ,

$$
\sum _ { n \leq x } \varphi ( n ) = { \frac { 1 } { 2 } } { \frac { x ^ { 2 } } { \zeta ( 2 ) } } + O ( x \log x ) { \mathrm { ~ a n d ~ } } \sum _ { n \leq x } { \frac { \varphi ( n ) } { n } } = { \frac { x } { \zeta ( 2 ) } } + O ( \log x ) .
$$

6. If $x \ge 2$ prove that

$$
\sum _ { n \leq x } { \frac { \varphi ( n ) } { n ^ { 2 } } } = { \frac { 1 } { \zeta ( 2 ) } } { \log { x } } + { \frac { C } { \zeta ( 2 ) } } - A + O \biggl ( { \frac { \log { x } } { x } } \biggr ) ,
$$

where $C$ is Euler's constant and

$$
A = \sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) \mathrm { l o g } n } { n ^ { 2 } } } .
$$

7. In a later chapter we will rove that $\smash { \sum _ { n = 1 } ^ { \infty } \mu ( n ) n ^ { - \alpha } = 1 / \zeta ( \alpha ) }$ if $\alpha > 1$ . Assuming this, prove that for $x \ge 2$ and $\alpha > 1 , \alpha \neq 2$ we have

$$
\sum _ { n \leq x } { \frac { \varphi ( n ) } { n ^ { \alpha } } } = { \frac { x ^ { 2 - x } } { 2 - \alpha } } { \frac { 1 } { \zeta ( 2 ) } } + { \frac { \zeta ( \alpha - 1 ) } { \zeta ( \alpha ) } } + O ( x ^ { 1 - \alpha } \log x ) .
$$

8.If $\alpha \leq 1$ and $x \ge 2$ prove that

$$
\sum _ { n \leq x } { \frac { \varphi ( n ) } { n ^ { \alpha } } } = { \frac { x ^ { 2 - \alpha } } { 2 - \alpha } } { \frac { 1 } { \zeta ( 2 ) } } + O ( x ^ { 1 - \alpha } \log x ) .
$$

9. In a later chapter we will prove that the infinite product $\prod _ { p } { ( 1 - p ^ { - 2 } ) } .$ extended over a primes, converges to the value $1 / \zeta ( 2 ) = 6 / \pi ^ { 2 }$ . Assuming this result, prove that

$$
{ \frac { \sigma ( n ) } { n } } < { \frac { n } { \varphi ( n ) } } < { \frac { \pi ^ { 2 } } { 6 } } { \frac { \sigma ( n ) } { n } } \quad { \mathrm { i f ~ } } n \geq 2 .
$$

[Hint: Use the formula $\begin{array} { r } { \varphi ( n ) = n \prod _ { p \mid n } { ( 1 - p ^ { - 1 } ) } } \end{array}$ and the relation

$$
1 + x + x ^ { 2 } + \cdots = { \frac { 1 } { 1 - x } } = { \frac { 1 + x } { 1 - x ^ { 2 } } } \quad { \mathrm { w i t h ~ } } x = { \frac { 1 } { p } } .
$$

(b) If $x \ge 2$ prove that

$$
\sum _ { n \leq x } { \frac { n } { \varphi ( n ) } } = O ( x ) .
$$

10. If $x \ge 2$ prove that

$$
\sum _ { n \leq x } { \frac { 1 } { \varphi ( n ) } } = O ( \log x ) .
$$

11. Let $\begin{array} { r } { \varphi _ { 1 } ( n ) = n \sum _ { d \mid n } | \mu ( d ) | / d , } \end{array}$ d

(a) Prove that $\varphi _ { 1 }$ is muttiplicative and that $\begin{array} { r } { \varphi _ { \mathrm { f } } ( n ) = n \prod _ { p \mid n } { ( 1 + p ^ { - 1 } ) } } \end{array}$ (b) Prove that

$$
\varphi _ { 1 } ( n ) = \sum _ { d ^ { 2 } \mid n } \mu ( d ) \sigma { \binom { n } { \bar { d } ^ { 2 } } }
$$

where the sum is over those divisors of $\pmb { n }$ for which $d ^ { 2 } | _ { n }$ -

(c) Prove that

$$
\sum _ { n \leq x } \varphi _ { 1 } ( n ) = \sum _ { d \leq { \sqrt { x } } } \mu ( d ) S { \biggl ( } { \frac { x } { \bar { d } ^ { 2 } } } { \biggr ) } , { \mathrm { w h e r e ~ } } S ( x ) = \sum _ { k \leq x } \sigma ( k ) ,
$$

then use Theorem 3.4 to deduce that, for $x \ge 2 .$ ,

$$
\sum _ { n \leq x } \varphi _ { 1 } ( n ) = { \frac { \zeta ( 2 ) } { 2 \zeta ( 4 ) } } x ^ { 2 } + O ( x \log x ) .
$$

As in Exercise 7, you may assume the result $\smash { \sum _ { n = 1 } ^ { \infty } \mu ( n ) n ^ { - \alpha } = 1 / \zeta ( \alpha ) }$ for $\alpha > 1$

12. For real $s > 0$ and integer $k \geq 1$ find an asymptotic formula for the partial sums

$$
\sum _ { \stackrel { n \leq x } { ( n , k ) = 1 } } { \frac { 1 } { n ^ { s } } } .
$$

with an error term that tends to 0 as $x \to \infty$ . Be sure to include the case $s = 1$

# PROPERTIES OF THE GREATEST-INTEGER FUNCTION

For each real $x$ the symbol $[ x ]$ denotes the greatest integer $\leq x .$ . Exercises 13 through 26 describe some properties of the greatest-integer function. In these exercises $x$ and $y$ denote real numbers, $\pmb { n }$ denotes an integer.

13. Prove each of the following statements :

(a) If $x = k + y$ where $k$ is an integer and $0 \leq y < 1$ , then $k = [ x ]$ -   
(b) $[ x + n ] = [ x ] + n .$ (id:)   
(c) $\begin{array} { l l } { [ - x ] = \left\{ { \begin{array} { l l } { - [ \bar { x } ] } & { \mathrm { i f ~ } x = [ x ] , } \\ { - [ x ] - 1 } & { \mathrm { i f ~ } x \not = [ x ] . } \end{array} } \right. } \\ { [ x / n ] = [ [ x ] / n ] } & { \mathrm { i f ~ } n \geq 1 . } \end{array}$   
(d)

14. If $0 < y < 1$ , what are the possible values of $[ x ] - [ x - y ] ?$

15. The number $\{ x \} = x - [ x ]$ is called the fractional part of $x$ . It satisfies the inequalities $0 \leq \{ x \} < 1$ , with. $\{ x \} = 0$ if, and only if, $x$ is an integer. What are the possible values of $\{ x \} + \{ - x \} \ Y$

16. (a) Prove that $[ 2 x ] - 2 [ x ]$ is either 0 or 1. (b) Prove that $[ 2 x ] + [ 2 y ] \geq [ x ] + [ y ] + [ x + y ] .$

17. Prove that $[ x ] + [ x + { \textstyle { \frac { 1 } { 2 } } } ] = [ 2 x ]$ and, more generally,

$$
\sum _ { k = 0 } ^ { n - 1 } \left[ x + { \frac { k } { n } } \right] = [ n x ] .
$$

18. Let $\begin{array} { r } { f ( x ) = x - [ x ] - \frac { 1 } { 2 } } \end{array}$ Prove that

$$
\sum _ { k = 0 } ^ { n - 1 } f { \biggl ( } x + { \frac { k } { n } } { \biggr ) } = f ( n x )
$$

and deduce that

$$
\left| \sum _ { n = 1 } ^ { m } f { \Bigg ( } 2 ^ { n } x + { \frac { 1 } { 2 } } { \Bigg ) } \right| \leq 1
$$

19. Given positive odd integers $h$ and $k , ( h , k ) = 1$ , let $a = ( k - 1 ) / 2 , b = ( h - 1 ) / 2 .$

(a) Prove that $\begin{array} { r } { \sum _ { r = 1 } ^ { a } \left[ h r / k \right] + \sum _ { r = 1 } ^ { b } \left[ k r / h \right] = a b . } \end{array}$ Hint. Lattice points. (b) Obtain a corresponding result if $( h , k ) = d$

20. If $\pmb { n }$ is a positive integer prove that $[ { \sqrt { n } } + { \sqrt { n + 1 } } ] = [ { \sqrt { 4 n + 2 } } ] .$

21. Determine all positive integers n such that $[ { \sqrt { n } } ]$ divides $\pmb { n }$

22.If $\pmb { n }$ is a positive integer, prove that

$$
\left[ { \frac { 8 n + 1 3 } { 2 5 } } \right] - \left[ { \frac { n - 1 2 - \left[ { \frac { n - 1 7 } { 2 5 } } \right] } { 3 } } \right]
$$

is independent of n.

23. Prove that

$$
\sum _ { n \leq x } \lambda ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = [ { \sqrt { x } } ] .
$$

24. Prove that

$$
\sum _ { n \leq x } { \left[ \sqrt [ ] { \frac { x } { n } } \right] } = \sum _ { n \leq \sqrt { x } } { \left[ \frac { x } { n ^ { 2 } } \right] } .
$$

25. Prove that

$$
\sum _ { k = 1 } ^ { n } { \bigg [ } { \frac { k } { 2 } } { \bigg ] } = { \bigg [ } { \frac { n ^ { 2 } } { 4 } } { \bigg ] }
$$

and that

$$
\sum _ { k = 1 } ^ { n } { \sqrt { \frac { k } { 3 } } } { \Bigg ] } = { \Bigg [ } { \frac { n ( n - 1 ) } { 6 } } { \Bigg ] } .
$$

26.If $a = 1 , 2 , \ldots , 7$ prove that there exists an integer $b$ (depending on $a$ ) such that

$$
\sum _ { k \mathop { = } 1 } ^ { n } \left[ { \frac { k } { a } } \right] = { \biggl [ } { \frac { ( 2 n + b ) ^ { 2 } } { 8 a } } { \biggr ] } .
$$

# 4 Se

# 4.1 Introduction

If $x > 0$ let $\pi ( x )$ denote the number of primes not exceeding $x$ Then $\pi ( x ) \to \infty$ as $x \to \infty$ since there are infinitely many primes. The behavior of $\pi ( x )$ as a function of $x$ has been the object of intense study by many celebrated mathematicians ever since the eighteenth century. Inspection of tables of primes led Gauss (1792) and Legendre (1798) to conjecture that $\pi ( x )$ is asymptotic to $x / 1 { \tt o g } x$ , that is,

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log x } { x } } = 1 .
$$

This conjecture was first proved in 1896 by Hadamard [28] and de la Vallée Poussin [71] and is known now as the prime number theorem.

Proofs of the prime number theorem are often classified as analytic or elementary, depending on the methods used to carry them out. The proof of Hadamard and de la Vallée Poussin is analytic, using complex function theory and properties of the Riemann zeta function. An elementary proof was discovered in 1949 by A. Selberg and P. Erdös. Their proof makes no use of the zeta function nor of complex function theory but is quite intricate. At the end of this chapter we give a brief outline of the main features of the elementary proof. In Chapter 13 we present a short analytic proof which is more transparent than the elementary proof.

This chapter is concerned primarily with elementary theorems on primes. In particular, we show that the prime number theorem can be expressed in several equivalent forms.

For example, we will show that the prime number theorem is equivalent to the asymptotic formula

$$
\sum _ { n \leq x } \Lambda ( n ) \sim x \quad { \mathrm { a s ~ } } x \to \infty .
$$

The partial sums of the Mangoldt function $\Lambda ( n )$ define a function introduced by Chebyshev in 1848.

# 4.2 Chebyshev's functions $\psi ( x )$ and $\vartheta ( x )$

Definition For $x > 0$ we define Chebyshev's $\psi$ -function by the formula

$$
\psi ( x ) = \sum _ { n \leq x } \Lambda ( n ) .
$$

Thus, the asymptotic formula in (1) states that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \psi ( x ) } { x } } = 1 .
$$

Since $\Lambda ( n ) = 0$ unless $n$ is a prime power we can write the definition of $\psi ( x )$ as follows:

$$
\psi ( x ) = \sum _ { n \leq x } \Lambda ( n ) = \sum _ { \stackrel { m = 1 } { p ^ { m } \leq x } } ^ { \infty } \sum _ { p } \Lambda ( p ^ { m } ) = \sum _ { m = 1 } ^ { \infty } \sum _ { p \leq x ^ { 1 / m } } \log p .
$$

The sum on m is actually a i nite sum. In fact, the sum on $p$ is empty if $x ^ { 1 / m } < 2$ , that is, if $( 1 / m ) \mathrm { l o g } x < \mathrm { l o g } 2 .$ or if

$$
m > { \frac { \log x } { \log 2 } } = \log _ { 2 } x .
$$

Therefore we have

$$
\psi ( x ) = \sum _ { m \leq \log _ { 2 } x } \sum _ { p \leq x ^ { 1 / m } } { \log p } .
$$

This can be written in a slightly different form by introducing another function of Chebyshev.

Definition If $x > 0$ we define Chebyshev's O-function by the equation

$$
\vartheta ( x ) = \sum _ { p \leq x } { \log p } ,
$$

where $p$ runs over all primes $\leq x$ .

4: Some elementary theorems on the distribution of prime numbers

The last formula for $\psi ( x )$ can now be restated as follows:

$$
\psi ( x ) = \sum _ { m \leq \log 2 x } \vartheta ( x ^ { 1 / m } ) .
$$

The next theorem relates the two quotients $\psi ( x ) / x$ and $\vartheta ( x ) / x$

Theorem 4.1 For $x > 0$ we have

$$
0 \leq { \frac { \psi ( x ) } { x } } - { \frac { \vartheta ( x ) } { x } } \leq { \frac { ( \log x ) ^ { 2 } } { 2 { \sqrt { x } } \log 2 } } .
$$

Note. This inequality implies that

$$
\operatorname* { l i m } _ { x \to \infty } \left( { \frac { \psi ( x ) } { x } } - { \frac { \vartheta ( x ) } { x } } \right) = 0 .
$$

In other words, if one of $\psi ( x ) / x$ or $\vartheta ( x ) / x$ tends to a limit then so does the other, and the two limits are equal.

PROOF. From (3) we find

$$
0 \leq \psi ( x ) - \vartheta ( x ) = \sum _ { 2 \leq m \leq \log 2 ^ { x } } \vartheta ( x ^ { 1 / m } ) .
$$

But from the definition of $\vartheta ( x )$ we have the trivial inequality

$$
\vartheta ( x ) \leq \sum _ { p \leq x } { \log x \leq x \log x }
$$

SO

$$
\begin{array} { c } { { 0 \leq \psi ( x ) - \vartheta ( x ) \leq \displaystyle \sum _ { \tiny \begin{array} { c } { { 2 \leq m \leq \log x } } \\ { { 2 \leq m \leq \log x } } \end{array} } x ^ { 1 / m } \log ( x ^ { 1 / m } ) \leq ( \log _ { 2 } x ) \sqrt { x } \log \sqrt { x } } } \\ { { = \displaystyle \frac { \log x } { \log 2 } \cdot \frac { \sqrt { x } } { 2 } \log x = \displaystyle \frac { \sqrt { x } ( \log x ) ^ { 2 } } { 2 \log 2 } . } } \end{array}
$$

Now divide by $x$ to obtain the theorem.

# 4.3 Relations connecting $\vartheta ( x )$ and $\pi ( x )$

In this section we obtain two formulas relating $\vartheta ( x )$ and $\pi ( x )$ . These will be used to show that the prime number theorem is equivalent to the limit relation

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \vartheta ( x ) } { x } } = 1 .
$$

Both functions $\pi ( x )$ and $\vartheta ( x )$ are step functions with jumps at the primes; $\pi ( x )$ has a jump 1 at each prime $p$ , whereas $\mathcal { A } ( x )$ has a jump of log $p$ at $p$ . Sums

involving step functions of this type can be expressed as integrals by means of the following theorem.

Theorem 4.2 Abel's identity. For any arithmetical fiunction $a ( n )$ let

$$
A ( x ) = \sum _ { n \leq x } a ( n ) ,
$$

where $A ( x ) = 0 i f x < 1 .$ Assume f has a continuous derivative on the interval $[ y , x ]$ , where $0 < y < x$ . Then we have

$$
\sum _ { y < n \leq x } a ( n ) f ( n ) = A ( x ) f ( x ) - A ( y ) f ( y ) - \int _ { y } ^ { x } A ( t ) f ^ { \prime } ( t ) d t .
$$

PRoOF. Let $k = [ x ]$ and $m = [ y ]$ , so that $A ( x ) = A ( k )$ and $A ( y ) = A ( m )$ Then

$$
\begin{array} { r l } { \underset { \mathrm { e } \to \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) { \mathbb { I } } ( \hat { \omega } - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } t ) ^ { 2 } ( t ) - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) { \mathbb { I } } ( \hat { \omega } - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } t ) ( t - 1 ) { \mathbb { I } } ( \hat { \omega } ) } \\ { = } & { \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) { \mathbb { I } } ( \hat { \omega } - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } t ) ( t + 1 ) } \\ & { = - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) ( t ) { \mathbb { I } } ( \hat { \omega } - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } t ) ( t - 1 ) + \underset { - \infty } { \overset { \operatorname* { m i n } } { \operatorname { m i n } } } ( t ) ( t - 4 ) { \mathbb { I } } ( \hat { \omega } - \underset { - \infty } { \overset { \operatorname* { m i n } } { \operatorname { m i n } } } t ) ( t - 1 ) } \\ & { = - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) { \mathbb { I } } ( \hat { \omega } ) \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) ( t - 1 ) } \\ &  = - \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) { \mathbb { I } } ( \hat { \omega } ) \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) + \underset { - \infty } { \overset { \sum } { \operatorname* { m i n } } } ( t ) ( t \end{array}
$$

ALTERNATE PRooF. A shorter proof of (4) is available to those readers familiar with Riemann-Stieltjes integration. (See [2], Chapter 7.) Since $A ( x )$ is a step function with jump $f ( n )$ at each integer $n$ the sum in (4) can be expressed as a Riemann-Stieltjes integral,

$$
\sum _ { y < n \leq x } a ( n ) f ( n ) = \int _ { y } ^ { x } f ( t ) d A ( t ) .
$$

4: Some elementary theorems on the distribution of prime numbers

Integration by parts gives us

$$
\begin{array} { l } { { \displaystyle \sum _ { y < n \leq x } a ( n ) f ( n ) = f ( x ) A ( x ) - f ( y ) A ( y ) - \int _ { y } ^ { x } A ( t ) d f ( t ) } } \\ { { \mathrm { } } } \\ { { \displaystyle = f ( x ) A ( x ) - f ( y ) A ( y ) - \int _ { y } ^ { x } A ( t ) f ^ { \prime } ( t ) d t . } } \end{array}
$$

Note. Since $A ( t ) = 0$ if $t < 1$ , when $y < 1$ Equation (4) takes the form

$$
\sum _ { n \leq x } a ( n ) f ( n ) = A ( x ) f ( x ) - \int _ { 1 } ^ { x } A ( t ) f ^ { \prime } ( t ) d t .
$$

It should also be noted that Euler's summation formula can easily be deduced from (4). In fact, if $a ( n ) = 1$ for all $n \geq 1$ we find $A ( x ) = [ x ]$ and (4) implies

$$
\sum _ { y < n \leq x } f ( n ) = f ( x ) [ x ] - f ( y ) [ y ] - \int _ { y } ^ { x } [ t ] f ^ { \prime } ( t ) d t .
$$

Combining this with the integration by parts formula

$$
\int _ { y } ^ { x } t f ^ { \prime } ( t ) d t = x f ( x ) - y f ( y ) - \int _ { y } ^ { x } f ( t ) d t
$$

we immediately obtain Euler's summation formula (Theorem 3.1).

Now we use (4) to express $\vartheta ( x )$ and $\pi ( x )$ in terms of integrals.

Theorem 4.3 For $x \ge 2$ we have

$$
\vartheta ( x ) = \pi ( x ) \log x - \int _ { 2 } ^ { x } { \frac { \pi ( t ) } { t } } d t
$$

and

$$
\pi ( x ) = { \frac { \vartheta ( x ) } { \log x } } + \int _ { 2 } ^ { x } { \frac { \vartheta ( t ) } { t \log ^ { 2 } t } } d t .
$$

PROOF. Let $a ( n )$ denote the characteristic function of the primes; that is,

$$
a ( n ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ p r i m e , } } } \\ { 0 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

Then we have

$$
\pi ( x ) = \sum _ { p \leq x } 1 = \sum _ { 1 < n \leq x } a ( n ) \qquad { \mathrm { a n d ~ } } \vartheta ( x ) = \sum _ { p \leq x } \log p = \sum _ { 1 < n \leq x } a ( n ) \log n .
$$

Taking. $f ( x ) = \log x$ in (4) with $y = 1$ we obtain

$$
\vartheta ( x ) = \sum _ { 1 < n \leq x } a ( n ) \log n = \pi ( x ) \log x - \pi ( 1 ) \log 1 - \int _ { 1 } ^ { x } { \frac { \pi ( t ) } { t } } d t ,
$$

which proves (6) since $\pi ( t ) = 0$ for $t < 2$

Next, let $b ( n ) = a ( n )$ 1og $n$ and write

$$
\pi ( x ) = \sum _ { 3 / 2 < n \leq x } b ( n ) { \frac { 1 } { \log n } } , \qquad \vartheta ( x ) = \sum _ { n \leq x } b ( n ) .
$$

Taking $f ( x ) = 1 / { \log { x } }$ in (4) with $y = 3 / 2$ we obtain

$$
\pi ( x ) = \frac { \vartheta ( x ) } { \log { x } } - \frac { \vartheta ( 3 / 2 ) } { \log { 3 / 2 } } + \int _ { 3 / 2 } ^ { x } \frac { \vartheta ( t ) } { t \log ^ { 2 } { t } } d t ,
$$

which proves (7) since $\mathcal { A } ( t ) = 0$ if $t < 2$

# 4.4 Some equivalent forms of the prime number theorem

Theorem 4.4 The following relations are logically equivalent:

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log x } { x } } = 1 .
$$

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \vartheta ( x ) } { x } } = 1 .
$$

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \psi ( x ) } { x } } = 1 .
$$

ProoF. From (6) and (7) we obtain, respectively,

$$
\frac { \vartheta ( x ) } { x } = \frac { \pi ( x ) \log x } { x } - \frac { 1 } { x } \int _ { 2 } ^ { x } \frac { \pi ( t ) } { t } d t
$$

and

$$
{ \frac { \pi ( x ) \mathrm { l o g ~ } x } { x } } = { \frac { \vartheta ( x ) } { x } } + { \frac { \log x } { x } } \int _ { 2 } ^ { x } { \frac { \vartheta ( t ) d t } { t \log ^ { 2 } t } } .
$$

To show that (8) implies (9) we need only show that (8) implies

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x } } \int _ { 2 } ^ { x } { \frac { \pi ( t ) } { t } } d t = 0 .
$$

Bu )impies ${ \frac { \pi ( t ) } { t } } = O { \biggl ( } { \frac { 1 } { \log t } } { \biggr ) } { \mathrm { f o r ~ } } t \geq 2$ 50

$$
{ \frac { 1 } { x } } \int _ { 2 } ^ { x } { \frac { \pi ( t ) } { t } } d t = O { \biggl ( } { \frac { 1 } { x } } \int _ { 2 } ^ { x } { \frac { d t } { \log t } } { \biggr ) } .
$$

4: Some elementary theorems on the distribution of prime numbers

Now

$$
\int _ { 2 } ^ { x } { \frac { d t } { \log t } } = \int _ { 2 } ^ { \sqrt { x } } { \frac { d t } { \log t } } + \int _ { { \sqrt { x } } } ^ { x } { \frac { d t } { \log t } } \leq { \frac { \sqrt { x } } { \log 2 } } + { \frac { x - { \sqrt { x } } } { \log { \sqrt { x } } } }
$$

SO

$$
\frac { 1 } { x } \int _ { z } ^ { x } \frac { d t } { \log t } \to 0 \quad \mathrm { a s ~ } x \to \infty .
$$

This shows that (8) implies (9).

To show that (9) implies (8) we need only show that (9) implies

$$
\operatorname* { l i m } _ { x \to x } { \frac { \log x } { x } } \int _ { 2 } ^ { x } { \frac { \vartheta ( t ) d t } { t \log ^ { 2 } t } } = 0 .
$$

But (9) implies $\mathcal { A } ( t ) = O ( t )$ so

$$
{ \frac { \log x } { x } } \int _ { 2 } ^ { x } { \frac { \operatorname { \mathcal { S } } ( t ) d t } { t \log ^ { 2 } t } } = O { \left( { \frac { \log x } { x } } \int _ { 2 } ^ { x } { \frac { d t } { \log ^ { 2 } t } } \right) } .
$$

Now

$$
\int _ { 2 } ^ { x } { \frac { d t } { \log ^ { 2 } t } } = \int _ { 2 } ^ { \sqrt { x } } { \frac { d t } { \log ^ { 2 } t } } + \int _ { { \sqrt { x } } } ^ { x } { \frac { d t } { \log ^ { 2 } t } } \leq { \frac { \sqrt { x } } { \log ^ { 2 } 2 } } + { \frac { x - { \sqrt { x } } } { \log ^ { 2 } { \sqrt { x } } } }
$$

hence

$$
{ \frac { \log x } { x } } \int _ { 2 } ^ { x } { \frac { d t } { \log ^ { 2 } t } } \to 0 \quad { \mathrm { a s ~ } } x \to \infty .
$$

This proves that (9) implies (8), so (8) and (9) are equivalent. We know already, from Theorem 4.1, that (9) and (10) are equivalent. □

The next theorem relates the prime number theorem to the asymptotic value of the nth prime.

Theorem 4.5 Let $p _ { n }$ denote the nth prime. Then the following asymptotic relations are logically equivalent :

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log x } { x } } = 1 .
$$

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \pi ( x ) \log \pi ( x ) } { x } } = 1 .
$$

$$
\operatorname* { l i m } _ { n \to \infty } { \frac { p _ { n } } { n \log n } } = 1 .
$$

PRoor. We show that (1 1) implies (12), (12) implies (13), (13) implies (12), and (12) implies (11).

Assume (11) holds. Taking logarithms we obtain

$$
\operatorname* { l i m } _ { x \to \infty } \left[ \log \pi ( x ) + \log \log x - \log x \right] = 0
$$

or

$$
\operatorname* { l i m } _ { x \to \infty } \left[ \log x { \Bigg ( } { \frac { \log \pi ( x ) } { \log x } } + { \frac { \log \log x } { \log x } } - 1 { \Bigg ) } \right] = 0 .
$$

Since log $x \to \infty$ as $x \to \infty$ it follows that

$$
\operatorname* { l i m } _ { x \to \infty } { \left( { \frac { \log \pi ( x ) } { \log x } } + { \frac { \log \log x } { \log x } } - 1 \right) } = 0
$$

from which we obtain

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \log \pi ( x ) } { \log x } } = 1 .
$$

This, together with (11), gives (12).

Now assume (12) holds. If $x = p _ { n }$ then $\pi ( x ) = n$ and

$$
\pi ( x ) { \mathrm { l o g ~ } } \pi ( x ) = n \log n
$$

so (12) implies

$$
\operatorname* { l i m } _ { n \to \infty } { \frac { n \log n } { p _ { n } } } = 1 .
$$

Thus, (12) implies (13).

Next, assume (13) holds. Given $_ x$ , define $n$ by the inequalities

$$
p _ { n } \leq x < p _ { n + 1 } ,
$$

so that $n = \pi ( x )$ . Dividing by $\pmb { n }$ log $\pmb { n }$ we get

$$
\frac { p _ { n } } { n \log n } \leq \frac { x } { n \log n } < \frac { p _ { n + 1 } } { n \log n } = \frac { p _ { n + 1 } } { ( n + 1 ) \log ( n + 1 ) } \frac { ( n + 1 ) \log ( n + 1 ) } { n \log n } .
$$

Now let $n  \infty$ and use (13) to get

$$
\operatorname* { l i m } _ { n \to \infty } { \frac { x } { n \log n } } = 1 , \qquad \operatorname { o r } \operatorname* { l i m } _ { x \to \infty } { \frac { x } { \pi ( x ) \log \pi ( x ) } } = 1 .
$$

Therefore, (13) implies (12).

Finally, we show that (12) implies (11). Taking logarithms in (12) we obtain

$$
\operatorname* { l i m } _ { x \to \infty } ( \log \pi ( x ) + \log \log \pi ( x ) - \log x ) = 0
$$

or

$$
\operatorname* { l i m } _ { x \to \infty } \left[ \log \pi ( x ) \biggl ( 1 + \frac { \log \log \pi ( x ) } { \log \pi ( x ) } - \frac { \log x } { \log \pi ( x ) } \biggr ) \right] = 0 .
$$

4: Some elementary theorems on the distribution of prime numbers

Since log $\pi ( x )  \infty$ it follows that

$$
\operatorname* { l i m } _ { x \to \infty } \left( 1 + { \frac { \log \log \pi ( x ) } { \log \pi ( x ) } } - { \frac { \log x } { \log \pi ( x ) } } \right) = 0
$$

or

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { \log x } { \log \pi ( x ) } } = 1 .
$$

This, together with (12), gives (11).

# 4.5 Inequalities for $\pi ( n )$ and $p _ { n }$

The prime number theorem states that $\pi ( n ) \sim n / \log n$ as $n \to \infty$ . The inequalities in the next theorem show that $n / 1 0 { \bf g } n$ is the correct order of magnitude of $\pi ( n )$ . Although better inequalities can be obtained with greater effort (see [60]) the following theorem is of interest because of the elementary nature of its proof.

Theorem 4.6 For every integer $n \geq 2$ we have

$$
{ \frac { 1 } { 6 } } { \frac { n } { \log n } } < \pi ( n ) < 6 { \frac { n } { \log n } } .
$$

PRooF. We begin with the inequalities

$$
2 ^ { n } \leq { \binom { 2 n } { n } } < 4 ^ { n } ,
$$

where ${ \binom { 2 n } { n } } = { \frac { ( 2 n ) ! } { n ! n ! } }$ is a binomial coefficient. The rightmost inequality follows from the relation

$$
4 ^ { n } = ( 1 + 1 ) ^ { 2 n } = \sum _ { k = 0 } ^ { 2 n } { \binom { 2 n } { k } } > { \binom { 2 n } { n } } ,
$$

and the other one is easily verifed by induction. Taking logarithms in (15) we find

$$
n \log 2 \leq \log ( 2 n ) ! - 2 \log n ! < n \log 4 .
$$

But Theorem 3.14 implies that

$$
\log n ! = \sum _ { p \leq n } \alpha ( p ) \log p
$$

where the sum is extended over primes and $x ( p )$ is given by

$$
\alpha ( p ) = \ \sum _ { m = 1 } ^ { \left[ \log n \right] } { \left[ \frac { n } { p ^ { m } } \right] } .
$$

Hence

$$
\log ( 2 n ) ! - 2 \log n ! = \sum _ { p \leq 2 n } \ \sum _ { m = 1 } ^ { \left[ { \frac { \log 2 n } { \log p } } \right] } \left\{ \left[ { \frac { 2 n } { p ^ { m } } } \right] - 2 { \left[ { \frac { n } { p ^ { m } } } \right] } \right\} \log p .
$$

Since $[ 2 x ] - 2 [ x ]$ is either 0 or 1 the leftmost inequality in (16) implies

$$
n \log 2 \leq \sum _ { p \leq 2 n } \left( \sum _ { m = 1 } ^ { \left\lceil \log 2 n \right\rceil } 1 \right) \log p \leq \sum _ { p \leq 2 n } \log 2 n = \pi ( 2 n ) \log 2 n .
$$

This gives us

$$
\pi ( 2 n ) \geq { \frac { n \log 2 } { \log 2 n } } = { \frac { 2 n } { \log 2 n } } { \frac { \log 2 } { 2 } } > { \frac { 1 } { 4 } } { \frac { 2 n } { \log 2 n } }
$$

since log $2 > 1 / 2$ . For odd integers we have

$$
\pi ( 2 n + 1 ) \geq \pi ( 2 n ) > { \frac { 1 } { 4 } } { \frac { 2 n } { \log 2 n } } > { \frac { 1 } { 4 } } { \frac { 2 n } { 2 n + 1 } } { \frac { 2 n + 1 } { \log ( 2 n + 1 ) } } \geq { \frac { 1 } { 6 } } { \frac { 2 n + 1 } { \log ( 2 n + 1 ) } }
$$

since $2 n / ( 2 n + 1 ) \geq 2 / 3$ . This, together with (18), gives us

$$
\pi ( n ) > { \frac { 1 } { 6 } } { \frac { n } { \log n } }
$$

for all $n \geq 2$ , which proves the ieftmost inequality in (14).

To prove the other inequality we return to (17) and extract the term corresponding to $m = 1$ . The remaining terms are nonnegative so we have

$$
\log ( 2 n ) ! - 2 \log n ! \geq \sum _ { p \leq 2 n } { \biggl \{ } { \bigg [ } { \frac { 2 n } { p } } { \bigg ] } - 2 { \bigg [ } { \frac { n } { p } } { \bigg ] } { \biggr \} } \log p .
$$

For those primes $p$ in the interyal $n < p \leq 2 n$ we have $[ 2 n / p ] - 2 [ n / p ] = 1$ sO

$$
\log ( 2 n ) ! - 2 \log n ! \geq \sum _ { n < p \leq 2 n } \log p = \vartheta ( 2 n ) - \vartheta ( n ) .
$$

Hence (16) implies

$$
\begin{array} { r } { \vartheta ( 2 n ) - \vartheta ( n ) < n \log 4 . } \end{array}
$$

In particular, if $\pmb { n }$ is a power of 2, this gives

$$
\begin{array} { r } { \vartheta ( 2 ^ { r + 1 } ) - \vartheta ( 2 ^ { r } ) < 2 ^ { r } \log 4 = 2 ^ { r + 1 } \log 2 . } \end{array}
$$

Summing on $r = 0 , 1 , 2 , \ldots , k .$ , the sum on the left telescopes and we ind

$$
\begin{array} { r } { \vartheta ( 2 ^ { k + 1 } ) < 2 ^ { k + 2 } \log 2 . } \end{array}
$$

Now we choose $k$ so that $2 ^ { k } \leq n < 2 ^ { k + 1 }$ and we obtain

$$
\mathcal { S } ( n ) \leq \mathcal { S } ( 2 ^ { k + 1 } ) < 2 ^ { k + 2 } \log 2 \leq 4 n \log 2 .
$$

4: Some elementary theorems on the distribution of prime numbers

But if $0 < \alpha < 1$ we have

$$
( \pi ( n ) - \pi ( n ^ { x } ) ) \mathrm { l o g } n ^ { x } < \sum _ { n ^ { x } < p \leq n } \mathrm { l o g } p \leq 4 n \mathrm { l o g } 2 ,
$$

hence

$$
\begin{array} { l } { \displaystyle \pi ( n ) < \frac { 4 n \log 2 } { \alpha \log n } + \pi ( n ^ { \alpha } ) < \frac { 4 n \log 2 } { \alpha \log n } + n ^ { \alpha } } \\ { = \displaystyle \frac { n } { \log n } \biggl ( \frac { 4 \log 2 } { \alpha } + \frac { \log n } { n ^ { 1 - \alpha } } \biggr ) . } \end{array}
$$

Now if $c > 0$ and $x \ge 1$ the function $f ( x ) = x ^ { - c } \log .$ $x$ attains its maximum at $x = e ^ { 1 / c }$ s0 $n ^ { - c } \log n \leq 1 / ( c e )$ for $n \geq 1$ . Taking $\alpha = 2 / 3$ in the last inequality for $\pi ( n )$ we find

$$
\pi ( n ) < { \frac { n } { \log n } } \left( 6 \log 2 + { \frac { 3 } { e } } \right) < 6 { \frac { n } { \log n } } .
$$

This completes the proof.

Theorem 4.6 can be used to obtain upper and lower bounds on the size of the nth prime.

Theorem 4.7 For $n \geq 1$ the nth prime $p _ { n }$ satisfes the inequalities

$$
{ \frac { 1 } { 6 } } n \log n < p _ { n } < 1 2 { \bigg ( } n \log n + n \log { \frac { 1 2 } { e } } { \bigg ) } .
$$

PROOF. If $k = p _ { n }$ then $k \geq 2$ and $n = \pi ( k )$ . From (14) we have

$$
n = \pi ( k ) < 6 \frac { k } { \log k } = 6 \frac { p _ { n } } { \log p _ { n } }
$$

hence

$$
p _ { n } > { \frac { 1 } { 6 } } n \log p _ { n } > { \frac { 1 } { 6 } } n \log n .
$$

This gives the lower bound in (19).

To obtain the upper bound we again use (14) to write

$$
n = \pi ( k ) > { \frac { 1 } { 6 } } { \frac { k } { \log k } } = { \frac { 1 } { 6 } } { \frac { p _ { n } } { \log p _ { n } } } ,
$$

from which we find

$$
p _ { n } < 6 n \log p _ { n } .
$$

Since log $x \leq ( 2 / e ) \sqrt { x }$ if $x \ge 1$ we have log $p _ { n } \leq ( 2 / e ) \sqrt { p _ { n } }$ , so (20) implies

$$
\sqrt { p _ { n } } < \frac { 1 2 } { e } n .
$$

Therefore

$$
{ \frac { 1 } { 2 } } \log p _ { n } < \log n + \log { \frac { 1 2 } { e } }
$$

which, when used in (20), gives us

$$
p _ { n } < 6 n \biggl ( 2 \log n + 2 \log \frac { 1 2 } { e } \biggr ) .
$$

This proves the upper bound in (19).

Note. The upper bound in (19) shows once more that the series

$$
\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { p _ { n } } }
$$

diverges, by comparison with $\textstyle \sum _ { n = 2 } ^ { \infty } 1 / ( n \log n )$

# 4.6 Shapiro's Tauberian theorem

We have shown that the prime number theorem is equivalent to the asymptotic formula

$$
{ \frac { 1 } { x } } \sum _ { n \leq x } \Lambda ( n ) \sim 1 \quad { \mathrm { a s ~ } } x \to \infty .
$$

In Theorem 3.15 we derived a related asymptotic formula,

$$
\sum _ { n \leq x } \Lambda ( n ) { \biggl [ } { \frac { x } { n } } { \biggr ] } = x \log x - x + O ( \log x ) .
$$

Both sums in (21) and (22) are weighted averages of the function $\Lambda ( n ) .$ Each term $\Lambda ( n )$ is multiplied by a weight factor $1 / x$ in (21) and by $[ x / n ]$ in (22).

Theorems relating different weighted averages of the same function are called Tauberian theorems. We discuss next a Tauberian theorem proved in 1950 by H. N. Shapiro [64]. It relates sums of the form $\sum _ { n \leq x } a ( n )$ with those of the form $\sum _ { n \leq x } a ( n ) [ x / n ]$ for nonnegative $a ( n )$ -

Theorem 4.8 Let $\{ a ( n ) \}$ be $^ { a }$ nonnegative sequence such that

$$
\sum _ { n \leq x } a ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = x \log x + O ( x ) \ f o r \ a l l \ x \geq 1 .
$$

4: Some elementary theorems on the distribution of prime numbers

Then:

(a) For $x \ge 1$ we have

$$
\sum _ { n \leq x } { \frac { a ( n ) } { n } } = \log x + O ( 1 ) .
$$

(In other words, dropping the square brackets in (23) leads to a correct result.)

(b) There is a constant $B > 0$ such that

$$
\sum _ { n \leq x } a ( n ) \leq B x \quad f o r \ a l l \ x \geq 1 .
$$

(c) There is a constant $A > 0$ and an $x _ { 0 } > 0$ such that

$$
\sum _ { n \leq x } a ( n ) \geq A x f o r a l l x \geq x _ { 0 } .
$$

PROOF. Let

$$
S ( x ) = \sum _ { n \leq x } a ( n ) , \qquad T ( x ) = \sum _ { n \leq x } a ( n ) { \binom { x } { n } } .
$$

First we prove (b). To do this we establish the inequality

$$
S ( x ) - S { \binom { x } { 2 } } \leq T ( x ) - 2 T { \binom { x } { 2 } } .
$$

We write

$$
\begin{array} { l } { \displaystyle { T ( x ) - 2 T \bigg ( \frac { x } { 2 } \bigg ) = \sum _ { n \leq x } \bigg [ \frac { x } { n } \bigg ] a ( n ) - 2 \sum _ { n \leq x / 2 } \bigg [ \frac { x } { 2 n } \bigg ] a ( n ) } } \\ { \displaystyle { = \sum _ { n \leq x / 2 } \bigg ( \bigg [ \frac { x } { n } \bigg ] - 2 \bigg [ \frac { x } { 2 n } \bigg ] \bigg ) a ( n ) + \sum _ { x / 2 < n \leq x } \bigg [ \frac { x } { n } \bigg ] a ( n ) . } } \end{array}
$$

Since $[ 2 y ] - 2 [ y ]$ is either 0 or $\pmb { \downarrow }$ , the first sum is nonnegative, so

$$
T ( x ) - 2 T { \bigg ( } { \frac { x } { 2 } } { \bigg ) } \geq \sum _ { x / 2 < n \leq x } { \bigg [ } { \frac { x } { n } } { \bigg ] } a ( n ) = \sum _ { x / 2 < n \leq x } a ( n ) = S ( x ) - S { \bigg ( } { \frac { x } { 2 } } { \bigg ) } .
$$

This proves (24). But (23) implies

$$
T ( x ) - 2 T { \Bigg ( } { \frac { x } { 2 } } { \Bigg ) } = x \log x + O ( x ) - 2 { \Bigg ( } { \frac { x } { 2 } } \log { \frac { x } { 2 } } + O ( x ) { \Bigg ) } = O ( x ) .
$$

Hence (24) implies $S ( x ) - S ( x / 2 ) = O ( x )$ This means that there is some constant $K > 0$ such that

$$
S ( x ) - S { \bigg ( } { \frac { x } { 2 } } { \bigg ) } \leq K x \quad { \mathrm { f o r ~ a l l ~ } } x \geq 1 .
$$

Replace x successively by $x / 2 , x / 4 ,$ ..to get

$$
\begin{array} { l } { { S { \left( \frac { x } { 2 } \right) } - S { \left( \frac { x } { 4 } \right) } \le K \frac 1 2 , } } \\ { { S { \left( \frac { x } { 4 } \right) } - S { \left( \frac { x } { 8 } \right) } \le K \frac { x } { 4 } , } } \end{array}
$$

etc. Note that $S ( x / 2 ^ { n } ) = 0$ when $2 ^ { n } > x$ . Adding these inequalities we get

$$
S ( x ) \leq K x { \biggl ( } 1 + { \frac { 1 } { 2 } } + { \frac { 1 } { 4 } } + \cdots { \biggr ) } = 2 K x .
$$

This proves (b) with $B = 2 K$ .

Next we prove (a). We write $[ x / n ] = ( x / n ) + O ( 1 )$ and obtain

$$
\begin{array} { l } { \displaystyle { T ( x ) = \sum _ { n \leq x } \biggl [ \frac { x } { n } \biggl ] a ( n ) = \sum _ { n \leq x } \biggl ( \frac { x } { n } + O ( 1 ) \biggr ) a ( n ) = x \sum _ { n \leq x } \frac { a ( n ) } { n } + O \biggl ( \sum _ { n \leq x } a ( n ) \biggr ) } } \\ { \displaystyle { \quad = x \sum _ { n \leq x } \frac { a ( n ) } { n } + O ( x ) , } } \end{array}
$$

by part (b). Hence

$$
\sum _ { n \leq x } { \frac { a ( n ) } { n } } = { \frac { 1 } { x } } T ( x ) + O ( 1 ) = \log x + O ( 1 ) .
$$

This proves (a).

Finally, we prove (c). Let

$$
A ( x ) = \sum _ { n \leq x } { \frac { a ( n ) } { n } } .
$$

Then (a) can be written as follows:

$$
A ( x ) = \log x + R ( x ) ,
$$

where $R ( x )$ is the error term. Since $R ( x ) = O ( 1 )$ we have $| R ( x ) | \leq M$ for some $M > 0$

Choose $\pmb { \alpha }$ to satisfy $0 < \alpha < 1$ (we shall specify $\pmb { \alpha }$ more exactly in a moment) and consider the difference

$$
A ( x ) - A ( \alpha x ) = \sum _ { \alpha x < n \leq x } { \frac { a ( n ) } { n } } = \sum _ { n \leq x } { \frac { a ( n ) } { n } } - \sum _ { n \leq \alpha x } { \frac { a ( n ) } { n } } .
$$

If $x \ge 1$ and $\mathfrak { x x } \geq 1$ we can apply the asymptotic formula for $A ( x )$ to write

$$
\begin{array} { r l } & { A ( x ) - A ( \alpha x ) = \log x + R ( x ) - ( \log \alpha x + R ( \alpha x ) ) } \\ & { \qquad = - \log \alpha + R ( x ) - R ( \alpha x ) } \\ & { \qquad \geq - \log \alpha - \vert R ( x ) \vert - \vert R ( \alpha x ) \vert \geq - \log \alpha - 2 M . } \end{array}
$$

4: Some elementary theorems on the distribution of prime numbers

Now choose $\pmb { \alpha }$ so that $- \log { \alpha } - 2 M = 1$ . This requires log $\alpha = - 2 M - 1 ;$ ,d 0r $\alpha = e ^ { - 2 M - 1 }$ . Note that $0 < \alpha < 1$ . For thiss $\pmb { \alpha } .$ we have the inequality

$$
A ( x ) - A ( \alpha x ) \geq 1 \quad { \mathrm { i f ~ } } x \geq 1 / \alpha .
$$

But

$$
A ( x ) - A ( \alpha x ) = \sum _ { \alpha x < n \leq x } { \frac { a ( n ) } { n } } \leq { \frac { 1 } { \alpha x } } \sum _ { n \leq x } a ( n ) = { \frac { S ( x ) } { \alpha x } } .
$$

Hence

$$
{ \frac { S ( x ) } { \alpha x } } \geq 1 \quad { \mathrm { i f ~ } } x \geq 1 / \alpha .
$$

Therefore $S ( x ) \geq \alpha x$ if $x \geq 1 / \alpha ,$ which proves (c) with $A = \alpha$ and $x _ { 0 } = 1 / \alpha$

# 4.7 Applications of Shapiro's theorem

Equation (22) implies

$$
\sum _ { n \leq x } \Lambda ( n ) { \Biggl [ } { \frac { x } { n } } { \Biggr ] } = x \log x + O ( x ) .
$$

Since $\Lambda ( n ) \geq 0$ we can apply Shapiro's theorem with $a ( n ) = \Lambda ( n )$ to obtain:

Theorem 4.9 For all $x \ge 1$ we have

$$
\sum _ { n \leq x } { \frac { \Lambda ( n ) } { n } } = \log x + O ( 1 ) .
$$

Also, there exist positive constants $c _ { 1 }$ and $c _ { 2 }$ such that

$$
\psi ( x ) \leq c _ { 1 } x f o r a l l x \geq 1
$$

and

$$
\psi ( x ) \geq c _ { 2 } x f o r a l l s u f f c i e n t l y l a r g e x .
$$

Another application can be deduced from the asymptotic formula

$$
\sum _ { p \leq x } { \left[ { \frac { x } { p } } \right] } { \log p = x \log x + O ( x ) }
$$

proved in Theorem 3.16. This can be written in the form

$$
\sum _ { n \leq x } \Lambda _ { 1 } ( n ) { \biggl [ } { \frac { x } { n } } { \biggr ] } = x \log x + O ( x ) ,
$$

4.8: An asymptotic formula for the partial sums $\sum _ { p \leq x } ( 1 / p )$

where $\Lambda _ { 1 }$ is the function defined as follows:

$$
\Lambda _ { 1 } ( n ) = { \left\{ \begin{array} { l l } { \log p } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ a ~ p r i m e ~ } } p , } \\ { 0 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

Since $\Lambda _ { 1 } ( n ) \geq 0$ , Equation (26) shows that the hypothesis of Shapiro's theorem is satisfied with $a ( n ) = \Lambda _ { 1 } ( n ) ,$ Since $\begin{array} { r } { \Re ( x ) = \sum _ { n \leq x } \Lambda _ { 1 } ( n ) , } \end{array}$ part (a) of Shapiro's theorem gives us the following asymptotic formula.

Theorem 4.10 For all $x \ge 1$ we have

$$
\sum _ { p \leq x } { \frac { \log p } { p } } = \log x + O ( 1 ) .
$$

Also, there exist positive constants $c _ { 1 }$ and $c _ { 2 }$ such that

$$
\mathfrak { d } ( x ) \le c _ { 1 } x f o r a l l x \ge 1
$$

and

$$
\begin{array} { r } { \mathfrak { H } ( x ) \geq c _ { 2 } x \quad f o r \ a l l \ s u f f c i e n t l y \ l a r g e \ x . } \end{array}
$$

In Theorem 3.11 we proved that

$$
\sum _ { n \leq x } f ( n ) { \Bigg [ } { \frac { x } { n } } { \Bigg ] } = \sum _ { n \leq x } F { \Bigg ( } { \frac { x } { n } } { \Bigg ) }
$$

for any arithmetical function $f ( n )$ with partial sums $\begin{array} { r } { F ( x ) = \sum _ { n \leq x } f ( n ) . } \end{array}$ Since $\begin{array} { r } { \dot { \psi } ( x ) = \sum _ { n \leq x } \Lambda ( n ) } \end{array}$ and $\begin{array} { r } { \Re ( x ) = \sum _ { n \leq x } \Lambda _ { 1 } ( n ) } \end{array}$ the asymptotic formulas in (22) and (26) can be expressed directly in terms of $\psi ( x )$ and $\mathfrak { s } ( x ) .$ .We state these as a formal theorem.

Theorem 4.11 For all $x \geqslant 1$ we have

$$
\sum _ { n \leq x } \psi { \Biggl ( } { \frac { x } { n } } { \Biggr ) } = x \log x - x + O ( \log x )
$$

and

$$
\sum _ { n \leq x } 9 { \binom { x } { n } } = x \log x + O ( x ) .
$$

# 4.8 An asymptotic formula for the partial sums $\sum _ { p \leq x } \left( 1 / p \right)$

In Chapter 1 we proved that the series $\sum ( 1 / p )$ diverges. Now we obtain an asymptotic formula for its partial sums. The result is an application of Theorem 4.10, Equation (27).

4: Some elementary theorems on the distribution of prime numbers

Theorem 4.12 There is a constant $\pmb { A }$ such that

$$
\sum _ { p \leq x } { \frac { 1 } { p } } = \log \log x + A + O { \bigg ( } { \frac { 1 } { \log x } } { \bigg ) } f o r a l l x \geq 2 .
$$

PRoOF. Let

$$
A ( x ) = \sum _ { p \leq x } { \frac { \log p } { p } }
$$

and let

$$
a ( n ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ p r i m e , } } } \\ { 0 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

Then

$$
\sum _ { p \leq x } { \frac { 1 } { p } } = \sum _ { n \leq x } { \frac { a ( n ) } { n } } \qquad { \mathrm { a n d ~ } } A ( x ) = \sum _ { n \leq x } { \frac { a ( n ) } { n } } \log n .
$$

Therefore if we take $f ( t ) = 1 / 1 0 \mathrm { g } t$ in Theorem 4.2 we find, since $A ( t ) = 0$ for $t < 2 ,$ ,d)

$$
\sum _ { p \leq x } { \frac { 1 } { p } } = { \frac { A ( x ) } { \log x } } + \int _ { 2 } ^ { x } { \frac { A ( t ) } { t \cdot \log ^ { 2 } t } } d t .
$$

From (27) we have $A ( x ) = \log x + R ( x ) ,$ where $R ( x ) = O ( 1 )$ Using this on the right of (30) we find

$$
\begin{array} { c } { { \displaystyle \sum _ { p \leq x } \displaystyle \frac { 1 } { p } = \displaystyle \frac { \log x + { \cal O } ( 1 ) } { \log x } + \int _ { 2 } ^ { x } \displaystyle \frac { \log t + { \cal R } ( t ) } { t \log ^ { 2 } t } d t } } \\ { { = 1 + { \cal O } \biggl ( \displaystyle \frac { 1 } { \log x } \biggr ) + \int _ { 2 } ^ { x } \displaystyle \frac { d t } { t \log t } + \int _ { 2 } ^ { x } \displaystyle \frac { { \cal R } ( t ) } { t \log ^ { 2 } t } d t . } } \end{array}
$$

Now

$$
\int _ { 2 } ^ { x } { \frac { d t } { t \log t } } = \log \log x - \log \log 2
$$

and

$$
\int _ { 2 } ^ { s } \frac { R ( t ) } { t \log ^ { 2 } t } d t = \int _ { 2 } ^ { \infty } \frac { R ( t ) } { t \log ^ { 2 } t } d t - \int _ { x } ^ { \infty } \frac { R ( t ) } { t \log ^ { 2 } t } d t ,
$$

the existence of the improper integral being assured by the condition $R ( t ) =$ $O ( 1 ) .$ But

$$
\int _ { x } ^ { \infty } { \frac { R ( t ) } { t \log ^ { 2 } t } } d t = O { \biggl ( } \int _ { x } ^ { \infty } { \frac { d t } { t \log ^ { 2 } t } } { \biggr ) } = O { \biggl ( } { \frac { 1 } { \log x } } { \biggr ) } .
$$

Hence Equation (31) can be written as follows :

$$
\sum _ { p \leq x } { \frac { 1 } { p } } = \log \log x + 1 - \log \log 2 + \int _ { 2 } ^ { \infty } { \frac { R ( t ) } { t \log ^ { 2 } t } } d t + O { \biggl ( } { \frac { 1 } { \log x } } { \biggr ) } .
$$

This proves the theorem with

$$
A = 1 - \log \log 2 + \int _ { 2 } ^ { \infty } \frac { R ( t ) } { t \log ^ { 2 } t } d t .
$$

4.9 The partial sums of the Möbius function

Definition If $x \geq 1$ we define

$$
M ( x ) = \sum _ { n \leq x } \mu ( n ) .
$$

The exact order of magnitude of $M ( x )$ is not known. Numerical evidence suggests that

$$
| M ( x ) | < { \sqrt { x } } \quad { \mathrm { i f ~ } } x > 1 ,
$$

but this inequality, known as Mertens' conjecture, has not been proved nor disproved. The best $o$ -result obtained to date is

$$
M ( x ) = O ( x \delta ( x ) )
$$

where $\delta ( x ) = \exp \{ - A \log ^ { 3 / 5 } x ( \log \log x ) ^ { - 1 / 5 } \}$ for some positive constant $\pmb { A }$ (A proof is given in Walfisz [75].)

In this section we prove that the weaker statement

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { M ( x ) } { x } } = 0
$$

is equivalent to the prime number theorem. First we relate $M ( x )$ to another weighted average of $\mu ( n )$

Definition If $x \ge 1$ we define

$$
H ( x ) = \sum _ { n \leq x } \mu ( n ) { \log n } .
$$

The next theorem shows that the behavior of $M ( x ) / x$ is determined by that of $H ( x ) / ( x \log x )$

Theorem 4.13 We have

$$
\operatorname* { l i m } _ { x \to \infty } \left( { \frac { M ( x ) } { x } } - { \frac { H ( x ) } { x \log x } } \right) = 0 .
$$

4: Some elementary theorems on the distribution of prime numbers

PRooF. Taking $f ( t ) = \log t$ in Theorem 4.2 we obtain

$$
H ( x ) = \sum _ { n \leq x } \mu ( n ) { \mathrm { l o g ~ } } n = M ( x ) { \mathrm { l o g ~ } } x - \int _ { 1 } ^ { x } { \frac { M ( t ) } { t } } d t .
$$

Hence if $x > 1$ we have

$$
{ \frac { M ( x ) } { x } } - { \frac { H ( x ) } { x \log x } } = { \frac { 1 } { x \log x } } \int _ { 1 } ^ { x } { \frac { M ( t ) } { t } } d t .
$$

Therefore to prove the theorem we must show that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x \log x } } \int _ { 1 } ^ { x } { \frac { M ( t ) } { t } } d t = 0 .
$$

But we have the trivial estimate $M ( x ) = O ( x )$ so

$$
\int _ { 1 } ^ { x } \frac { M ( t ) } { t } d t = O \biggl ( \int _ { 1 } ^ { x } d t \biggr ) = O ( x ) ,
$$

from which we obtain (33), and hence (32).

Theorem 4.14 The prime number theorem implies

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { M ( x ) } { x } } = 0 .
$$

ProoF. We use the prime number theorem in the form $\psi ( x ) \sim x$ and prove that $H ( x ) / ( x \log x ) \to 0$ as $x \to \infty$ . For this purpose we shall require the identity

$$
- H ( x ) = - \sum _ { n \leq x } \mu ( n ) \log n = \sum _ { n \leq x } \mu ( n ) \psi { \Biggr ( } { \frac { x } { n } } { \Biggr ) } .
$$

To prove (34) we begin with Theorem 2.11, which states that

$$
\Lambda ( n ) = - \sum _ { d | n } \mu ( d ) \log d
$$

and apply Möbius inversion to get

$$
- \mu ( n ) \mathrm { l o g } n = \sum _ { d \mid n } \mu ( d ) \Lambda \biggl ( \frac { n } { d } \biggr ) .
$$

Summing over all $n \leq x$ and using Theorem 3.10 with $f = \mu , g = \Lambda ,$ we obtain (34).

Since $\psi ( x ) \sim x ,$ if $\varepsilon > 0$ is given there is a constant $A > 0$ such that

$$
\left| { \frac { \psi ( x ) } { x } } - 1 \right| < \varepsilon \quad { \mathrm { w h e n e v e r ~ } } x \geq A .
$$

In other words, we have

$$
| \psi ( x ) - x | < \varepsilon x \quad { \mathrm { w h e n e v e r ~ } } x \geq A .
$$

Choose $x > A$ and split the sum on the right of (34) into two parts,

$$
\sum _ { n \leq y } + \sum _ { y < n \leq x } ,
$$

where $y = [ x / A ]$ . In the fi rst sum we have $n \leq y \ s o \ n \leq x / A$ ,and hence $x / n \geq A$ . Therefore we can use (35) to write

$$
\left| \psi { \binom { x } { n } } - { \frac { x } { n } } \right| < \varepsilon { \frac { x } { n } } \quad { \mathrm { i f ~ } } n \leq y .
$$

Thus,

$$
\begin{array} { r l } & { \displaystyle \sum _ { n \leq y } \mu ( n ) \psi \biggl ( \frac { x } { n } \biggr ) = \displaystyle \sum _ { n \leq y } \mu ( n ) \biggl ( \frac { x } { n } + \psi \biggl ( \frac { x } { n } \biggr ) - \frac { x } { n } \biggr ) } \\ & { \qquad \quad = x \displaystyle \sum _ { n \leq y } \frac { \mu ( n ) } { n } + \displaystyle \sum _ { n \leq y } \mu ( n ) \biggl ( \psi \biggl ( \frac { x } { n } \biggr ) - \frac { x } { n } \biggr ) , } \end{array}
$$

SO

$$
\begin{array} { r l } & { \bigg | \displaystyle \sum _ { n \leq y } \mu ( n ) \psi \bigg ( \frac { x } { n } \bigg ) \bigg | \leq x \bigg | \displaystyle \sum _ { n \leq y } \frac { \mu ( n ) } { n } \bigg | + \displaystyle \sum _ { n \leq y } \bigg | \psi \bigg ( \frac { x } { n } \bigg ) - \frac { x } { n } \bigg | } \\ & { \phantom { \bigg | } < x + \varepsilon \displaystyle \sum _ { n \leq y } \frac { x } { n } < x + \varepsilon x ( 1 + \log y ) } \\ & { \phantom { \bigg | } < x + \varepsilon x + \varepsilon x \log x . } \end{array}
$$

In the second sum we have $y < n \leq x \ s o \ n \geq y + 1 .$ Hence

$$
\frac { x } { n } \leq \frac { x } { y + 1 } < A
$$

because

$$
y \leq \frac { x } { A } < y + 1 .
$$

The inequality $( x / n ) < A$ implies $\psi ( x / n ) \leq \psi ( A )$ Therefore the second sum is dominated by $x \psi ( A )$ . Hence the full sum in (34) is dominated by

$$
( 1 + \varepsilon ) x + \varepsilon x \log x + x \psi ( A ) < ( 2 + \psi ( A ) ) x + \varepsilon x \log x
$$

if $\varepsilon < 1$ . In other words, given any $\varepsilon$ such that $0 < \varepsilon < 1$ we have

$$
| H ( x ) | < ( 2 + \psi ( A ) ) x + \varepsilon x \log x \quad { \mathrm { i f ~ } } x > A ,
$$

or

$$
{ \frac { | H ( x ) | } { x \log x } } < { \frac { 2 + \psi ( A ) } { \log x } } + \varepsilon .
$$

4: Some elementary theorems on the distribution of prime numbers

Now choose $B > A$ so that $x > B$ implies $( 2 + \psi ( A ) ) / 1 0 { \bf g } x < \varepsilon$ Then for $x > B$ we have

$$
\frac { | H ( x ) | } { x \log x } < 2 \varepsilon ,
$$

which shows that $H ( x ) / ( x \log x ) \to 0$ as $x \to \infty$

We turn next to the converse of Theorem 4.14 and prove that the relation

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { M ( x ) } { x } } = 0
$$

implies the prime number theorem. First we introduce the "little oh" notation.

Definition The notation

$$
f ( x ) = o ( g ( x ) ) \quad { \mathrm { a s ~ } } x \to \infty \qquad { \mathrm { ( r e a d : ~ } } f ( x ) { \mathrm { ~ i s ~ l i t t l e } }
$$

means that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { f ( x ) } { g ( x ) } } = 0 .
$$

An equation of the form

$$
f ( x ) = h ( x ) + o ( g ( x ) ) \quad { \mathrm { a s ~ } } x \to \infty
$$

means that $f ( x ) - h ( x ) = o ( g ( x ) )$ as $x \to \infty$

Thus, (36) states that

$$
M ( x ) = o ( x ) \quad { \mathrm { a s ~ } } x \to \infty ,
$$

and the prime number theorem, expressed in the form $\psi ( x ) \sim x ,$ , can also be written as

$$
\psi ( x ) = x + o ( x ) \quad { \mathrm { a s ~ } } x \to \infty .
$$

More generally, an asymptotic relation

$$
f ( x ) \sim g ( x ) \quad { \mathrm { a s ~ } } x \to \infty
$$

is equivalent to

$$
f ( x ) = g ( x ) + o ( g ( x ) ) \quad { \mathrm { a s ~ } } x \to \infty .
$$

We also note that $f ( x ) = O ( 1 )$ implies $f ( x ) = o ( x )$ as $x \to \infty$ .

# Theorem 4.15 The relation

$$
M ( x ) = o ( x ) \quad a s x  \infty
$$

implies $\psi ( x ) \sim x a s x  x$ .

PRooF. First we express $\psi ( x )$ by a formula of the type

$$
\psi ( x ) = x - \sum _ { \stackrel { q , d } { q d \leq x } } \mu ( d ) f ( q ) + O ( 1 )
$$

and then use (37) to show that the sum is $o ( x )$ as $x \to \infty$ . The function $f$ in (38) is given by

$$
f ( n ) = \sigma _ { 0 } ( n ) - \log n - 2 C ,
$$

where $C$ is Euler's constant and $\sigma _ { 0 } ( n ) = d ( n )$ is the number of divisors of $\pmb { n }$ To obtain (38) we start with the identities

$$
[ x ] = \sum _ { n \leq x } 1 , \psi ( x ) = \sum _ { n \leq x } \Lambda ( n ) , 1 = \sum _ { n \leq x } \left[ { \frac { 1 } { n } } \right]
$$

and express each summand as a Dirichlet product involving the Möbius function,

$$
1 = \sum _ { d \mid n } \mu ( d ) \sigma _ { 0 } { \binom { n } { d } } , \qquad \Lambda ( n ) = \sum _ { d \mid n } \mu ( d ) \log { \frac { n } { d } } , \qquad { \bigg [ } { \frac { 1 } { n } } { \bigg ] } = \sum _ { d \mid n } \mu ( d ) .
$$

Then

$$
\begin{array} { r l } { [ x ] - \psi ( x ) - 2 C = } & { \displaystyle \sum _ { n \leq x } \left\{ 1 - \Lambda ( n ) - 2 C \biggl \lfloor \displaystyle \frac { 1 } { n } \biggr \} \right\} } \\ & { = \displaystyle \sum _ { n \leq x } \displaystyle \sum _ { d = 1 } \mu ( d ) \biggr \} \sigma _ { 0 } \binom { n } { d } - \log \frac { n } { d } - 2 C \biggr \} } \\ & { = \displaystyle \sum _ { q , d } \mu ( d )  { \langle \sigma _ { 0 } ( q ) - \log q - 2 C \rangle } } \\ & { = \displaystyle \sum _ { q , d } \mu ( d ) f ( q ) . } \end{array}
$$

This implies (38). Therefore the proof of the theorem will be complete if we show that

$$
\sum _ { q , d \atop q d \leq x } \mu ( d ) f ( q ) = o ( x ) \quad { \mathrm { a s ~ } } x \to \infty .
$$

For this purpose we use Theorem 3.17 to write

$$
\sum _ { q , d \atop q d \leq x } \mu ( d ) f ( q ) = \sum _ { n \leq b } \mu ( n ) F \left( { \frac { x } { n } } \right) + \sum _ { n \leq a } f ( n ) M \left( { \frac { x } { n } } \right) - F ( a ) M ( b )
$$

where $^ { a }$ and $b$ are any positive numbers such that $a b = x$ and

$$
F ( x ) = \sum _ { n \leq x } f ( n ) .
$$

4: Some elementary theorems on the distribution of prime numbers

We show next that $F ( x ) = O ( { \sqrt { x } } )$ by using Dirichlet's formula (Theorem 3.3)

$$
\sum _ { n \leq x } \sigma _ { 0 } ( n ) = x \log x + ( 2 C - 1 ) x + O ( { \sqrt { x } } )
$$

together with the relation

$$
\sum _ { n \leq x } \log n = \log [ x ] ! = x \log x - x + O ( \log x ) .
$$

These give us

$$
\begin{array} { r l } & { F ( x ) = \displaystyle \sum _ { n \leq x } \sigma _ { 0 } ( n ) - \sum _ { n \leq x } \log n - 2 C \displaystyle \sum _ { n \leq x } 1 } \\ & { \quad = x \log x + ( 2 C - 1 ) x + O ( \sqrt { x } ) - ( x \log x - x + O ( \log x ) ) } \\ & { \quad \quad - 2 C x + O ( 1 ) } \\ & { \quad = O ( \sqrt { x } ) + O ( \log x ) + O ( 1 ) = O ( \sqrt { x } ) . } \end{array}
$$

Therefore there is a constant $B > 0$ such that

$$
| F ( x ) | \leq B { \sqrt { x } } \quad { \mathrm { f o r ~ a l l ~ } } x \geq 1 .
$$

Using this in the first sum on the right of (40) we obtain

$$
{ \Bigg | } \sum _ { n \geq b } \mu ( n ) F { \binom { x } { n } } { \Bigg | } \leq B \sum _ { n \leq b } { \sqrt { \frac { x } { n } } } \leq A { \sqrt { x b } } = { \frac { A x } { \sqrt { a } } }
$$

for some constant $A > B > 0$

Now let $\varepsilon > 0$ be arbitrary and choose $a > 1$ such that

$$
\frac { A } { \sqrt { a } } < \varepsilon .
$$

Then (41) becomes

$$
\left| \sum _ { n \leq b } \mu ( n ) F { \Bigg ( } { \frac { x } { n } } { \Bigg ) } \right| < \varepsilon x
$$

for all $x \ge 1 .$ Note that $a$ depends on e and not on $x$

Since $M ( x ) = O ( x )$ as $x \to \infty$ , for the same ε there exists $c > 0$ (depending only on ε) such that

$$
x > c { \mathrm { ~ i m p l i e s } } { \frac { | M ( x ) | } { x } } < { \frac { \varepsilon } { K } } ,
$$

where $K$ is any positive number. (We will specify $K$ presently.) The second sum on the right of (40) satisfies

$$
\left| \sum _ { n \leq a } f ( n ) M { \binom { x } { n } } \right| \leq \sum _ { n \leq a } \left| f ( n ) \right| { \frac { \varepsilon } { K } } { \frac { x } { n } } = { \frac { \varepsilon x } { K } } \sum _ { n \leq a } { \frac { | f ( n ) | } { n } }
$$

provided $x / n > c$ for all $n \leq a ,$ . Therefore (43) holds if $x > a c$ . Now take

$$
K = \sum _ { n \leq a } { \frac { | f ( n ) | } { n } } .
$$

Then (43) implies

$$
\left| \sum _ { n \leq a } f ( n ) M { \left( { \frac { x } { n } } \right) } \right| < \varepsilon x \quad { \mathrm { p r o v i d e d ~ } } x > a c .
$$

The last term on the right of (40) is dominated by

$$
\left| F ( a ) M ( b ) \right| \leq A \sqrt { a } \left| M ( b ) \right| < A \sqrt { a } b < \varepsilon \sqrt { b } \sqrt { a } b = \varepsilon \sqrt { x } b < \varepsilon x
$$

provided that ${ \sqrt { x } } > a$ or $x > a ^ { 2 }$ . Combining this with (44) and (42) we find that (40) implies

$$
\Big | \sum _ { \pmb { q } , d } \mu ( d ) f ( \pmb { q } ) \Big | < 3 \varepsilon x
$$

provided $x > a ^ { 2 }$ and $x > a c$ where $a$ and $c$ depend only on e. This proves (39). □

Theorem 4.16 If

$$
A ( x ) = \sum _ { n \leq x } { \frac { \mu ( n ) } { n } }
$$

the relation

$$
A ( x ) = o ( 1 ) \quad a s x  \infty
$$

implies the prime number theorem. In other words, the prime number theorem is a consequence of the statement that the series

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n } }
$$

converges and has sum 0.

Note. It can also be shown (see [3]) that the prime number theorem implies convergence of this series to 0, so (45) is actually equivalent to the prime number theorem.

PRooF. We will show that (45) implies $M ( x ) = o ( x )$ . By Abel's identity we have

$$
M ( x ) = \sum _ { n \leq x } \mu ( n ) = \sum _ { n \leq x } { \frac { \mu ( n ) } { n } } n = x A ( x ) - \int _ { 1 } ^ { x } A ( t ) d t ,
$$

$$
{ \frac { M ( x ) } { x } } = A ( x ) - { \frac { 1 } { x } } \int _ { 1 } ^ { x } A ( t ) \ d t .
$$

4: Some elementary theorems on the distribution of prime numbers

Therefore, to complete the proof it suffices to show that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x } } \int _ { 1 } ^ { x } A ( t ) d t = 0 .
$$

Now if $\varepsilon > 0$ is given there exists a $c$ (depending only on e) such that $| A ( x ) |$ $< \varepsilon$ if $x \ge c$ Since $| A ( x ) | \leq 1$ for all $x \ge 1$ we have

$$
\left| { \frac { 1 } { x } } \int _ { 1 } ^ { x } A ( t ) ~ d t \right| \leq \left| { \frac { 1 } { x } } \int _ { 1 } ^ { c } A ( t ) ~ d t \right| + \left| { \frac { 1 } { x } } \int _ { c } ^ { x } A ( t ) ~ d t \right| \leq { \frac { c - 1 } { x } } + { \frac { \varepsilon ( x - c ) } { x } } .
$$

Letting $x \to \infty$ we find

$$
\operatorname* { l i m } _ { x \to \infty } \left| { \frac { 1 } { x } } \int _ { 1 } ^ { x } A ( t ) d t \right| \leq \varepsilon ,
$$

and since ε is arbitrary this proves (46).

# 4.10 Brief sketch of an elementary proof of the prime number theorem

This section gives a very brief sketch of an elementary proof of the prime number theorem. Complete details can be found in [31] or in [46]. The key to this proof is an asymptotic formula of Selberg which states that

$$
\psi ( x ) \mathrm { l o g } \ x + \sum _ { n \leq x } \Lambda ( n ) \psi \left( { \frac { x } { n } } \right) = 2 x \log x + O ( x ) .
$$

The proof of Selberg's formula is relatively simple and is given in the next section. This section outlines the principal steps used to deduce the prime number theorem from Selberg's formula.

First, Selberg's formula is cast in a more convenient form which involves the function

$$
\sigma ( x ) = e ^ { \tau x } \psi ( e ^ { x } ) - 1 .
$$

Selberg's formula implies an integral inequality of the form

$$
| \sigma ( x ) | x ^ { 2 } \leq 2 \int _ { 0 } ^ { \cdot x } \int _ { 0 } ^ { y } | \sigma ( u ) | ~ d u ~ d y + O ( x ) ,
$$

and the prime number theorem is equivalent to showing that $\sigma ( x )  0$ as $x \to \infty$ . Therefore, if we let

$$
C = \operatorname* { l i m } _ { x \to \infty } \operatorname* { s u p } _ { | \sigma ( x ) | } ,
$$

the prime number theorem is equivalent to showing that $C = 0 .$ This is proved by assuming that $C > 0$ and obtaining a contradiction as follows. From the definition of $C$ we have

$$
| \sigma ( x ) | \leq C + g ( x ) ,
$$

where $g ( x )  0$ as $x \to \infty$ . If $C > 0$ this inequality, together with (47), gives another inequality of the same type,

$$
| \sigma ( x ) | \leq C ^ { \prime } + h ( x ) ,
$$

where $0 < C ^ { \prime } < C$ and $h ( x ) \to 0$ as $x \to \infty$ . The deduction of (49) from (47) and (48) is the lengthiest part of the proof. Letting $x \to \infty$ in (49) we fi nd that $C \leq C ^ { \prime }$ , a contradiction which completes the proof.

# 4.11 Selberg's asymptotic formula

We deduce Selberg's formula by a method given by Tatuzawa and Iseki [68] in 1951. It is based on the following theorem which has the nature of an inversion formula.

Theorem 4.17 Let F be a real- or complex-valued function defined on $( 0 , \infty )$ , and let

$$
G ( x ) = \log x \sum _ { n \leq x } F { \binom { x } { n } } .
$$

Then

$$
F ( x ) \log { x } + \sum _ { n \leq x } F { \binom { x } { n } } \Lambda ( n ) = \sum _ { d \leq x } \mu ( d ) G { \binom { x } { d } } .
$$

PRoOF. First we write $F ( x ) { \mathsf { l o g } } x$ as a sum,

$$
F ( x ) { \log { x } } = \sum _ { n \leq x } { \left[ \frac { 1 } { n } \right] } F { \binom { x } { n } } { \log { \frac { x } { n } } } = \sum _ { n \leq x } F { \binom { x } { n } } { \log { \frac { x } { n } } } \sum _ { d \mid n } \mu ( d ) .
$$

Then we use the identity of Theorem 2.11,

$$
\Lambda ( n ) = \sum _ { d | n } \mu ( d ) { \log { \frac { n } { d } } }
$$

to write

$$
\sum _ { n \leq x } F { \binom { x } { n } } \Lambda ( n ) = \sum _ { n \leq x } F { \binom { x } { n } } \sum _ { d \mid n } \mu ( d ) \log { \frac { n } { d } } .
$$

Adding these equations we find

$$
\begin{array} { l } { { F ( x ) { \log { x } } + \displaystyle \sum _ { n \leq x } F \biggl ( \frac { x } { n } \biggr ) \Lambda ( n ) = \displaystyle \sum _ { n \leq x } F \biggl ( \frac { x } { n } \biggr ) \sum _ { d \mid n } \mu ( d ) \biggl \{ \log { \frac { x } { n } } + \log { \frac { n } { d } } \biggr \} } } \\ { { = \displaystyle \sum _ { n \leq x } \displaystyle \sum _ { d \mid n } F \biggl ( \frac { x } { n } \biggr ) \mu ( d ) \log { \frac { x } { d } } } . } \end{array}
$$

4: Some elementary theorems on the distribution of prime numbers

In the last sum we write $n = q d$ to obtain

$$
\sum _ { n \leq x } \sum _ { d \mid n } F \bigg ( \frac { x } { n } \bigg ) \mu ( d ) \log \frac { x } { d } = \ \sum _ { d \leq x } \mu ( d ) \log \frac { x } { d } \sum _ { q \leq x / d } F \bigg ( \frac { x } { q d } \bigg ) = \ \sum _ { d \leq x } \mu ( d ) G \bigg ( \frac { x } { d } \bigg ) ,
$$

which proves the theorem.

Theorem 4.18 Selberg's asymptotic formula. For $x > 0$ we have

$$
\psi ( x ) \mathrm { l o g } \ x + \sum _ { n \leq x } \Lambda ( n ) \psi { \binom { x } { n } } = 2 x \log x + O ( x ) .
$$

ProoF. We apply Theorem 4.17 to the function $F _ { 1 } ( x ) = \psi ( x )$ and also to $F _ { 2 } ( x ) = x - C - 1$ where $C$ is Euler's constant. Corresponding to $F _ { 1 }$ we have

$$
G _ { 1 } ( x ) = \log x \sum _ { n \leq x } \psi \left( { \frac { x } { n } } \right) = x \log ^ { 2 } x - x \log x + O ( \log ^ { 2 } x ) ,
$$

where we have used Theorem 4.11. Corresponding to $F _ { 2 }$ we have

$$
\begin{array} { l } { { G _ { 2 } ( x ) = \log { x } \sum _ { n \leq x } F _ { 2 } \bigg ( \frac { x } { n } \bigg ) = \log { x } \sum _ { n \leq x } \left( \frac { x } { n } - C - 1 \right) } } \\ { { \ = x \log { x } \sum _ { n \leq x } \frac { 1 } { n } - ( C + 1 ) \log { x } \sum _ { n \leq x } 1 } } \\ { { \ = x \log { x } \bigg ( \log { x } + C + O \bigg ( \frac { 1 } { x } \bigg ) \bigg ) - ( C + 1 ) \log { x } ( x + O ( 1 ) ) } } \\ { { \ = x \log ^ { 2 } { x } - x \log { x } + O ( \log { x } ) . } } \end{array}
$$

Comparing the formulas for $G _ { 1 } ( x )$ and $G _ { 2 } ( \boldsymbol { x } )$ we see that $G _ { 1 } ( x ) - G _ { 2 } ( x ) =$ $O ( \log ^ { 2 } x )$ . Actually, we shall only use the weaker estimate

$$
G _ { 1 } ( x ) - G _ { 2 } ( x ) = { \cal { O } } ( \sqrt { x } ) .
$$

Now we apply Theorem 4.17 to each of $F _ { 1 }$ and $F _ { 2 }$ and subtract the two relations so obtained. The difference of the two right members is

$$
\sum _ { d \leq x } \mu ( d ) { \Biggl \{ } G _ { 1 } { \Biggl ( } { \frac { x } { d } } { \Biggr ) } - G _ { 2 } { \Biggl ( } { \frac { x } { d } } { \Biggr ) } { \Biggr \} } = O { \biggl ( } \sum _ { d \leq x } { \sqrt { \frac { x } { d } } } { \biggr ) } = O { \biggl ( } { \sqrt { x } } \sum _ { d \leq x } { \frac { 1 } { \sqrt { d } } } { \biggr ) } = O ( x )
$$

by Theorem 3.2(b). Therefore the difference of the two left members is also $O ( x )$ . In other words, we have

$$
\{ \psi ( x ) - ( x - C - 1 ) \} \log { x } + \sum _ { n \leq x } \left\{ \psi { \binom { x } { n } } - { \bigg ( } { \frac { x } { n } } - C - 1 { \bigg ) } \right\} \Lambda ( n ) = O ( x ) .
$$

Rearranging terms and using Theorem 4.9 we find that

$$
\psi ( x ) \mathrm { l o g } \ x + \sum _ { n \leq x } \psi \bigg ( \frac { x } { n } \bigg ) \Lambda ( n ) = ( x - C - 1 ) \mathrm { l o g } x \nonumber { \strut }
$$

$$
= 2 x \log x + O ( x ) .
$$

# Exercises for Chapter 4

1. Let $S = \{ 1 , 5 , 9 , 1 3 , 1 7 , . . . \}$ denote the set of all positive integers of the form $4 n + 1$ . An element $p$ of $s$ is called an S-prime if $p > 1$ and if the only divisors of $p _ { i }$ , among the elements of S, are 1 and $p$ . (For example, 49 is an S-prime.) An element $n > 1$ in S which is not an S-prime is called an S-composite.

(a) Prove that every S-composite is a product of S-primes.   
(b) Find the smallest $s .$ -composite that can be expressed in more than one way as a product of S-primes   
This example shows that unique factorization does not hold in S.

2. Consider the following finite set of integers:

$$
T = \{ 1 , 7 , 1 1 , 1 3 , 1 7 , 1 9 , 2 3 , 2 9 \} .
$$

(a) For each prime $p$ in the interval $3 0 < p < 1 0 0$ determine a pair of integers $m , n ,$ where $m \geq 0$ and $n \in T ,$ such that $p = 3 0 m + n$   
(b) Prove the following statement or exhibit a counter example: Every prime $p > 5$ can be expressed in the form $3 0 m + n$ ,where $m \geq 0$ and $n \in T .$

3. Let $f ( x ) = x ^ { 2 } + x + 4 1$ . Find the smallest integer $x \ge 0$ for which $f ( x )$ is composite.

4. Let $f ( x ) = a _ { 0 } + a _ { 1 } x + \cdot \cdot \cdot + a _ { n } x ^ { n }$ be a polynomial with integer coeficients, where $a _ { n } > 0$ and $n \geq 1$ . Prove that $f ( x )$ is composite for infinitely many integers $\boldsymbol { x }$ $^ { 5 , }$ Prove that for every $n > 1$ there exist $n$ consecutive composite numbers.

6. Prove that there do not exist polynomials $P$ and $Q$ such that

$$
\pi ( x ) = { \frac { P ( x ) } { Q ( x ) } } { \mathrm { f o r } } x = 1 , 2 , 3 , \ldots
$$

7. Let $a _ { 1 } < a _ { 2 } < \cdots < a _ { n } \leq x$ be a set of positive integers such that no $a _ { \mathrm { i } }$ divides the product of the others. Prove that $n \leq \pi ( x )$

8. Calculate the highest power of 10 that divides 1000!.

9. Given an arithmetic progression of integers

$$
h , h + k , h + 2 k , \ldots , h + n k , \ldots ,
$$

where $0 < k < 2 0 0 0 .$ If $h + n k$ is prime for $n = t , ~ t + 1 , \ldots , t + r$ prove that $r \leq 9$ . In other words, at most 10 consecutive terms of this progression can be primes.

4: Some elementary theorems on the distribution of prime numbers

10. Let $s _ { \pmb { \eta } }$ denote the nth partial sum of the series

$$
\sum _ { r = 1 } ^ { \infty } { \frac { 1 } { r ( r + 1 ) } } .
$$

Prove that for every integer $k > 1$ there exist integers $m$ and $\pmb { n }$ such that $s _ { m } \mathrm { ~ - ~ } s _ { n }$ $= 1 / k$

11. Let $s _ { n }$ denote the sum of the fi rst $\pmb { n }$ primes. Prove that for each $n$ there exists an integer whose square lies between $s _ { \pmb { \eta } }$ and $s _ { n + 1 }$

Prove each of the statements in Exercises 12 through 16. In this group of exercises you may use the prime number theorem.

12. If $a > 0$ and $b > 0 ;$ then $\pi ( a x ) / \pi ( b x ) \sim a / b$ as $x \to \infty$

13. If $0 < a < b$ , there exists an $x _ { 0 }$ such that $\pi ( a x ) < \pi ( b x )$ if $x \geq x _ { 0 }$ .

14.If $0 < a < b$ , there exists an $x _ { 0 }$ such that for $x \geq x _ { 0 }$ there is at least one prime between $_ { a x }$ and $b x$

15. Every interval $[ a , b ]$ with $0 < a < b$ , contains a rational number of the form $p / q$ , where $p$ and $q$ are primes.

16. (a) Given a positive integer $\pmb { n }$ there exists a positive integer $k$ and a prime $p$ such that $1 0 ^ { k } n < p < 1 0 ^ { k } ( n + 1 ) .$ , (b) Given $m$ integers $a _ { 1 } , \ldots , a _ { m }$ such that $0 \leq a _ { i } \leq 9$ for $i = 1 , 2 , \dots , m ,$ there exists a prime $p$ whose decimal expansion has $a _ { 1 } , \ldots , a _ { m }$ for its fi rst $m$ digits.

17. Given an integer $n > 1$ with two factorizations $n = \prod _ { i } ^ { r } p _ { i }$ and $\begin{array} { r } { n = \prod _ { i = 1 } ^ { t } q _ { i } . } \end{array}$ , where the ${ p _ { \mathrm { i } } }$ are primes (not necessarily distinct) and the $q _ { i }$ are arbitrary integers $> 1$ .Let $\pmb { \alpha }$ be a nonnegative real number.

(a) If $\pmb { \alpha } \geq 1$ prove that

$$
\sum _ { i = 1 } ^ { r } { p _ { i } ^ { \alpha } } \leq \sum _ { i = 1 } ^ { \ell } { q _ { i } ^ { \alpha } } .
$$

(b) Obtain a corresponding inequality relating these sums if $0 \leq \alpha < 1$

18. Prove that the following two relations are equivalent :

$$
\pi ( x ) = { \frac { x } { \log x } } + O { \left( { \frac { x } { \log ^ { 2 } x } } \right) } .
$$

$$
 \vartheta ( x ) = x + O { \Biggl ( } { \frac { x } { \log x } } { \Biggr ) } .
$$

19. If $x \ge 2$ , let

$$
\operatorname { L i } ( x ) = \int _ { 2 } ^ { x } { \frac { d t } { \log t } } \left( { \mathrm { t h e ~ } } l o g a r i t h m i c \ i n t e g r a l \ o f x \right) .
$$

(a) Prove that

$$
\operatorname { L i } ( x ) = { \frac { x } { \log x } } + \int _ { 2 } ^ { x } { \frac { d t } { \log ^ { 2 } t } } - { \frac { 2 } { \log 2 } } ,
$$

and that, more generally,

$$
\operatorname { L i } ( x ) = { \frac { x } { \log { x } } } \left( 1 + \sum _ { k = 1 } ^ { n - 1 } { \frac { k ! } { \log ^ { k } { x } } } \right) + n ! \int _ { 2 } ^ { x } { \frac { d t } { \log ^ { n + 1 } t } } + C _ { n } ,
$$

where $C _ { n }$ is independent of $\pmb { x }$

(b) If $x \ge 2$ prove that

$$
\int _ { 2 } ^ { x } { \frac { d t } { \log ^ { n } t } } = O { \biggl ( } { \frac { x } { \log ^ { n } x } } { \biggr ) } .
$$

20. Let $f$ be an arithmetical function such that

$$
\sum _ { p \leq x } f ( p ) \mathrm { l o g } p = ( a x + b ) \mathrm { l o g } x + c x + O ( 1 ) \quad { \mathrm { f o r ~ } } x \geq 2 .
$$

Prove that there is a constant $\pmb { A }$ (depending on $f$ ) such that, if $x \geq 2 ,$

$$
\sum _ { p \leq x } f ( p ) = a x + ( a + c ) { \biggl ( } { \frac { x } { \log x } } + \int _ { 2 } ^ { x } { \frac { d t } { \log ^ { 2 } t } } { \biggr ) } + b \log ( \log x ) + A + O { \biggl ( } { \frac { 1 } { \log x } } { \biggr ) } .
$$

21. Given two real-valued functions $s ( x )$ and $T ( x )$ such that

$$
T ( x ) = \sum _ { n \leq x } S { \biggl ( } { \frac { x } { n } } { \biggr ) } \quad { \mathrm { f o r ~ a l l ~ } } x \geq 1 .
$$

If $S ( x ) = O ( x )$ and if $c$ is a positive constant, prove that the relation

$$
S ( x ) \sim c x \quad { \mathrm { a s ~ } } x \to \infty
$$

implies

$$
T ( x ) \sim c x \log x \quad { \mathrm { a s ~ } } x \to \infty .
$$

22. Prove that Selberg's formula, as expressed in Theorem 4.18, is equivalent to each of the following relations:

$$
\psi ( x ) \mathrm { l o g } x + \sum _ { p \leq x } \psi { \binom { x } { p } } \mathrm { l o g } p = 2 x \log x + O ( x ) .
$$

$$
\vartheta ( x ) \mathrm { l o g } x + \sum _ { p \leq x } \vartheta { \binom { x } { p } } \mathrm { l o g } p = 2 x \log x + O ( x ) .
$$

23. Let $\begin{array} { r } { M ( x ) = \sum _ { n \leq x } \mu ( n ) } \end{array}$ . Prove that

$$
M ( x ) { \log x } + \sum _ { n \leq x } M { \binom { x } { n } } \Lambda ( n ) = O ( x )
$$

and that

$$
M ( x ) { \log x } + \sum _ { p \leq x } M { \binom { x } { p } } { \log p } = O ( x ) .
$$

[Hint: Theorem 4.17.]

4: Some elementary theorems on the distribution of prime numbers

24. Let $A ( x )$ be defi ned for all $x > 0$ and assume that

$$
T ( x ) = \sum _ { n \leq x } A { \binom { x } { n } } = a x \log x + b x + o { \left( { \frac { x } { \log x } } \right) } { \mathrm { a s ~ } } x \to \infty ,
$$

where $\pmb { a }$ and $b$ are constants. Prove that

$$
A ( x ) \log x + \sum _ { n \leq x } A { \binom { x } { n } } \Lambda ( n ) = 2 a x \log x + o ( x \log x ) \quad { \mathrm { a s ~ } } x \to \infty .
$$

Verify that Selberg's formula of Theorem 4.18 is a special case.

25. Prove that the prime number theorem in the form $\psi ( x ) \sim x$ implies Selberg's asymptotic formula in Theorem 4.18 with an error term $o ( x \mid \mathbf { o g } x )$ as $\mathbf { x } \to \infty$ .

26. In 1851 Chebyshev proved that if $\psi ( x ) / x$ tends to a limit $\mathbf { a s } \ \mathbf { x }  \ \infty$ then this limit equals 1. This exercise outlines a simple proof of this result based on the formula

$$
\sum _ { n \leq x } \psi { \biggl ( } { \frac { x } { n } } { \biggr ) } = x \log x + O ( x )
$$

which follows from Theorem 4.11.

(a) Let $\delta = \operatorname* { l i m } \operatorname* { s u p } ( \psi ( x ) / x ) .$ Given $\varepsilon > 0$ choose $N = N ( \varepsilon )$ so that $x \ge N$ implies $\pmb { x }  \infty$ $\psi ( x ) \leq ( \delta + \varepsilon ) x .$ . Split the sum in (50) into two parts, one with $n \leq x / N$ the other with $n > x / N$ , and estimate each part to obtain the inequality

$$
\sum _ { n \leq x } \psi \binom { x } { n } \leq ( \delta + \varepsilon ) x \log x + x \psi ( N ) .
$$

Comparing this with (50), deduce that $\delta \geq 1$

(b) Let $\gamma = \operatorname* { l i m } \operatorname* { i n f } ( \psi ( x ) / x )$ and use an argument similar to that in (a) to deduce that ${ \pmb x } \to \infty$ $\gamma \leq 1$ . Therefore, if $\psi ( x ) / x$ has a limit as $x \to \infty$ then $\gamma = \delta = 1$

In Exercises 27 through 30, let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } a ( n ) } \end{array}$ where $a ( n )$ satisfies

$$
a ( n ) \geq 0 \quad { \mathrm { f o r ~ a l l ~ } } n \geq 1 ,
$$

and

$$
\sum _ { n \leq x } A { \binom { x } { n } } = \sum _ { n \leq x } a ( n ) { \binom { x } { n } } = a x \log x + b x + o { \left( { \frac { x } { \log x } } \right) } { \mathrm { ~ a s ~ } } x \to \infty .
$$

When $a ( n ) = \Lambda ( n )$ these relations hold with $a = 1$ and $b = - 1$ The following exercises show that (51) and (52), together with the prime number theorem, $\psi ( x ) \sim x ,$ imply $A ( x ) \sim a x$ . This should be compared with Theorem 4.8 (Shapiro's Tauberian theorem) which assumes only (51) and the weaker condition $\textstyle \sum _ { n \leq x } A ( x / n ) = a x \log x + O ( x )$ and concludes that $C x \leq A ( x )$ $\le B x$ for some positive constants $C$ and $B$

# 27. Prove that

$$
\sum _ { n \leq x } A { \binom { x } { n } } \Lambda ( n ) = \sum _ { n \leq { \sqrt { x } } } A { \binom { x } { n } } \Lambda ( n ) + \sum _ { n \leq { \sqrt { x } } } \psi { \binom { x } { n } } a ( n ) + O ( x )
$$

and use this to deduce the relation

$$
\frac { A ( x ) } { x } + \frac { 1 } { x \log { x } } \sum _ { n \leq \sqrt { x } } A \bigg ( \frac { x } { n } \bigg ) \Lambda ( n ) + \frac { 1 } { x \log { x } } \sum _ { n \leq \sqrt { x } } \psi \bigg ( \frac { x } { n } \bigg ) a ( n ) = 2 a + o ( 1 ) .
$$

28. Let $\alpha = \operatorname* { l i m } _ { x \to \infty } \operatorname { i n f } ( A ( x ) / x )$ and let $\beta = \operatorname* { l i m } _ { x \to \infty } \operatorname { s u p } ( A ( x ) / x ) .$

(a) Choose any $\varepsilon > 0$ and use the fact that

$$
A { \Bigg ( } { \frac { x } { t } } { \Bigg ) } < ( \beta + \varepsilon ) { \frac { x } { t } } \qquad { \mathrm { a n d ~ } } \psi { \Bigg ( } { \frac { x } { t } } { \Bigg ) } < ( 1 + \varepsilon ) { \frac { x } { t } }
$$

for all sufficiently large $x / t$ to deduce, from Exercise 27(b), that

$$
\alpha + \frac { \beta } { 2 } + \frac { a } { 2 } + \frac { \varepsilon } { 2 } + \frac { a \varepsilon } { 2 } > 2 a .
$$

Since e is arbitrary this implies

$$
\alpha + \frac { \beta } { 2 } + \frac { a } { 2 } \geq 2 a .
$$

[Hint: Let $x \to \infty$ in such a way that $A ( x ) / x \to \alpha . ]$

(b) By a similar argument, prove that

$$
\beta + \frac { \alpha } { 2 } + \frac { a } { 2 } \leq 2 a
$$

and deduce that $\alpha = \beta = a$ In other words, $A ( x ) \sim a x { \mathrm { ~ a s ~ } } x \to \infty$

29. Take $a ( n ) = 1 + \mu ( n )$ and verify that (52) is satisfied with $a = 1$ and $b = 2 C - 1$ , where $C$ is Euler's constant. Show that the result of Exercise 28 implies

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { 1 } { x } } \sum _ { n \leq x } \mu ( n ) = 0 .
$$

This gives an alternate proof of Theorem 4.14.

30. Suppose that, in Exercise 28, we do not assume the prime number theorem. Instead, let

$$
\gamma = \operatorname * { l i m } _ { x \to \infty } \operatorname * { i n f } _ { x } \frac { \psi ( x ) } { x } , \delta = \operatorname * { l i m } _ { x \to \infty } \operatorname * { s u p } \frac { \psi ( x ) } { x } .
$$

(a) Show that the argument suggested in Exercise 28 leads to the inequalities

$$
\alpha + \frac { \beta } { 2 } + \frac { a \delta } { 2 } \geq 2 a , \qquad \beta + \frac { \alpha } { 2 } + \frac { a \gamma } { 2 } \leq 2 a .
$$

(b) From the inequalities in part (a) prove that

$$
a \gamma \leq \alpha \leq \beta \leq a \delta .
$$

This shows that among all numbers $a ( n )$ satisfying (51) and (52) with a fixed ${ \pmb a }$ , the most widely separated limits of indetermination,

$$
\operatorname* { l i m } _ { x \to \infty } \operatorname* { i n f } _ { x } { \frac { A ( x ) } { \operatorname { a n d } \operatorname* { l i m } _ { x \to \infty } \operatorname* { s u p } { \frac { A ( x ) } { x } } } } ,
$$

occur when $a ( n ) = a \Lambda ( n )$ . Hence to deduce $A ( x ) \sim a x$ from (51) and (52) it suffices to treat only the special case $a ( n ) = a \Lambda ( n )$

# 5 Congruences

# 5.1 Definition and basic properties of congruences

Gauss introduced a remarkable notation which simplifes many problems concerning divisibility of integers. In so doing he created a new branch of number theory called the theory of congruences, the foundations of which are discussed in this chapter.

Unless otherwise indicated, small latin and Greek letters will denote integers (positive, negative, or zero).

Definition Given integers $a , b , m$ with $m > 0$ .We say that $a$ is congruent to $^ { b }$ modulo $^ { m }$ , and we write

$$
a \equiv b { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } ,
$$

if $m$ divides the difference $a - b$ . The number $m$ is called the modulus of the congruence.

In other words, the congruence (1) is equivalent to the divisibility relation

$$
m | ( a - b ) .
$$

In particular, ${ a \equiv 0 }$ (mod m) if, and only if, $m | a$ . Hence $a \equiv b$ (mod m) if, and only if, $a - b \equiv 0$ (mod m). If m $Y \left( a - b \right)$ we write $a$ ≠ $b$ (mod m) and say that $a$ and $b$ are incongruent mod m.

# EXAMPLES

1. $1 9 \equiv 7$ (mod 12), $1 \equiv - 1$ (mod 2), $3 ^ { 2 } \equiv - 1$ (mod 5).   
2. n is even if, and only if, $n \equiv 0$ (mod 2).   
3. $\pmb { n }$ is odd if, and only if, $n \equiv 1$ (mod 2).   
4. $a \equiv b$ (mod 1) for every $a$ and $b$   
5.If ${ a \equiv b }$ (mod $m$ ) then ${ a \equiv b }$ (mod $d$ when $d | m , d > 0$

The congruence symbol $\equiv$ was chosen by Gauss to suggest analogy with the equals sign $=$ . The next two theorems show that congruences do indeed possess many of the formal properties of equations.

Theorem 5.1 Congruence is an equivalence relation. That is, we have:

(a) $a \equiv a$ (mod m) (reflexivity) (b) $a \equiv b$ (mod $m )$ implies $b \equiv a$ (mod m) (symmetry) (c) ${ a \equiv b }$ (mod $m$ ) and $b \equiv c$ (mod m) imply $a \equiv c$ (mod m) (transitivity).

ProoF. The proof follows at once from the following properties of divisibility:

(a) $m | 0 .$ ,d   
(b) $\operatorname { I f } m | ( a - b )$ then $m | ( b - a )$   
(c) If $m | ( a - b )$ and $m | ( b - c )$ then $m | ( a - b ) + ( b - c ) = a - c .$

Theorem 5.2 If ${ a \equiv b }$ (mod $m$ ) and $\alpha \equiv \beta$ (mod $m$ ), then we have:

(a) $a x + \alpha y \equiv b x + \beta y$ (mod m) for all integers $x$ and y.   
(b) $a x \equiv b \beta$ (mod m).   
(c) $\alpha ^ { n } \equiv b ^ { n }$ (mod m) for every positive integer n.   
(d) $f ( a ) \equiv f ( b )$ (mod m) for every polynomial $f$ with integer coeffcients.

PROOF.(a) Since $m | ( a - b )$ and $m | ( \alpha - \beta )$ we have

$$
m | x ( a - b ) + y ( \alpha - \beta ) = ( a x + \alpha y ) - ( b x + \beta y ) .
$$

)Note that $a \alpha - b \beta = \alpha ( a - b ) + b ( \alpha - \beta ) \equiv 0$ (mod m) by part (a).

(c) Take ${ \mathfrak { X } } = a$ and $\beta = b$ in part (b) and use induction on $\pmb { n }$ (d) Use part (c) and induction on the degree of $f .$

Theorem 5.2 tells us that two congruences with the same modulus can be added, subtracted, or multiplied, member by member, as though they were equations. The same holds true for any finite number of congruences with the same modulus.

Before developing further properties of congruences we give two examples to illustrate their usefulness.

ExAMPLE 1 Test for divisibility by 9. An integer $n > 0$ is divisible by 9 if, and only if, the sum of its digits in its decimal expansion is divisibie by 9. This property is easily proved using congruences. If the digits of $n$ in decimal notation are $a _ { 0 } , a _ { 1 } , \ldots , a _ { k }$ , then

$$
n = a _ { 0 } + 1 0 a _ { 1 } + 1 0 ^ { 2 } a _ { 2 } + \cdots + 1 0 ^ { \tt A } a _ { k } .
$$

Using Theorem 5.2 we have, modulo 9,

$$
1 0 \equiv 1 , 1 0 ^ { 2 } \equiv 1 , . . . , 1 0 ^ { k } \equiv 1 { \pmod { 9 } }
$$

sO

$$
n \equiv a _ { 0 } + a _ { 1 } + \cdots + a _ { k } { \mathrm { ~ ( m o d ~ } } 9 ) .
$$

Note that all these congruences hold modulo 3 as well, so a number is divisible by 3 if, and only if, the sum of its digits is divisible by 3.

ExAMPLE 2 The Fermat numbers $F _ { n } = 2 ^ { 2 ^ { n } } + 1$ were mentioned in the Historical Introduction. The first five are primes:

$$
F _ { 0 } = 3 , \qquad F _ { 1 } = 5 , \qquad F _ { 2 } = 1 7 , \qquad F _ { 3 } = 2 5 7 , \qquad \mathrm { a n d } \ F _ { 4 } = 6 5 , 5 3 7 .
$$

We now show that $F _ { 5 }$ is divisible by 641 without explicitly calculating $F _ { 5 }$ . To do this we consider the successive powers $2 ^ { 2 ^ { n } }$ modulo 641. We have

$$
2 ^ { 2 } = 4 , \qquad 2 ^ { 4 } = 1 6 , \qquad 2 ^ { 8 } = 2 5 6 , \qquad 2 ^ { 1 6 } = 6 5 , 5 3 6 \equiv 1 5 4 ( \mathrm { m o d } 6 4 1 ) ,
$$

SO

$$
2 ^ { 3 2 } \equiv ( 1 5 4 ) ^ { 2 } = 2 3 , 7 1 6 \equiv 6 4 0 \equiv - 1 { \pmod { 6 4 1 } } .
$$

Therefore ${ \cal F } _ { 5 } = 2 ^ { 3 2 } + 1 \equiv 0$ (mod 641), so $F _ { 5 }$ is composite.

We return now to general properties of congruences. Common nonzero factors cannot always be cancelled from both members of a congruence as they can in equations. For example, both members of the congruence

$$
4 8 \equiv 1 8 { \pmod { 1 0 } }
$$

are divisible by 6, but if we cancel the common factor 6 we get an incorrect result, $\ell \equiv 3$ (mod 10). The next theorem shows that a common factor can be cancelled if the modulus is also divisible by this factor.

Theorem 5.3 If $c > 0$ then

$$
a \equiv b { \pmod { m } } i f , a n d o n l y i f , a c \equiv b c { \pmod { m c } } .
$$

PROoF. We have $m | ( b - a )$ if, and only if, $c m | c ( b - a )$

The next theorem describes a cancellation law which can be used when the modulus is not divisible by the common factor.

Theorem 5.4 Cancellation law. $I f a c \equiv b c$ (mod m) and if $d = ( m , c )$ then

$$
a \equiv b { \bigg ( } { \bmod { \frac { m } { d } } } { \bigg ) } .
$$

In other words, a common factor $c$ can be cancelled provided the modulus is divided by $d = \{ m , c \}$ In particular, a common factor which is relatively prime to the modulus can always be cancelled.

PROOF. Since $a c \equiv b c$ (mod m) we have

$$
m | c ( a - b ) \qquad \mathrm { s o } { \frac { m } { d } } \left| { \frac { c } { d } } ( a - b ) . \right.
$$

But $\quad ( m / d , c / d ) = 1$ , hence $m / d | ( a - b ) .$

Theorem 5.5 Assume $a \equiv b { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } . { \mathrm { ~ } } I f d | m a n d d | a t h e n d | b .$

ProoF. It sufices to assume that $d > 0$ If $d | m$ then $a \equiv b { \pmod { m } }$ implies $a \equiv b$ (mod d). But if $d | a$ then $a \equiv 0$ (mod $d$ ) o $b \equiv 0$ (mod d). □

Theorem 5.6 If ${ a \equiv b }$ (mod m) then $( a , m ) = ( b , m )$ . In other words, numbers which are congruent mod m have the same gcd with m.

PROOF. Let $d = ( a , m )$ and $e = ( b , m )$ Then $d \vert m$ and $d \{ a \ s \mathbf { o } \ d \} b$ ;hence $d | e ,$ Similarly, $e | m , e | b , s 0 e | a$ ; hence $e | d .$ Therefore $d = e$ □

Theorem 5.7 If $a \equiv b$ (mod m) and if $0 \leq | b - a | < m$ ,then $a = b$

PROOF. Since $m | ( a - b )$ we have $m \leq | a - b |$ unless $a - b = 0$

Theorem 5.8 We have $a \equiv b$ (mod m) $i f ,$ and only $i f$ , a and b give the same remainder when divided by m.

PROOF. Write $a = m q + r ,$ $b = m Q + R ,$ where $0 \leq r < m$ and $0 \leq R < m$ . Then $a - b \equiv r - R$ (mod $m _ { \ l }$ )and $0 \le | r - R | < m$ Now use Theorem 5.7. □

Theorem 5.9 If ${ a \equiv b }$ (mod m) and $a \equiv b$ (mod $\pmb { n }$ ) where $( m , n ) = 1$ , then ${ a \equiv b }$ (mod mn).

PRooF. Since both m and $\pmb { n }$ divide $a - b$ so does their product since $( m , n ) = 1$ . □

# 5.2 Residue classes and complete residue systems

Definition Consider a fixed modulus $m > 0$ . We denote by $\hat { a }$ the set of all integers $x$ such that $x \equiv a$ (mod m) and we call $\hat { a }$ the residue class $\pmb { a }$ modulo m.

Thus, $\hat { a }$ consists of all integers of the form $a + m q$ where $q = 0 , \pm 1 _ { \mathrm { : } }$ , $\pm 2 , \ldots$

The following properties of residue classes are easy consequences of this definition.

# Theorem 5.10 For a given modulus m we have:

(a) $\hat { a } = \hat { b } i f ,$ and only if, ${ a \equiv b }$ (mod m).   
(b) Two integers $x$ and $y$ are in the same residue class if, and only if, $x \equiv y$ (mod m).   
(c) The m residue classes 1, 2, .., $\hat { m }$ are disjoint and their union is the set of all integers.

ProoF. Parts (a) and (b) follow at once from the definition. To prove (c) we note that the numbers $0 , \ 1 , \ 2 , \ldots , m - \ 1$ are incongruent modulo $_ m$ (by Theorem 5.7). Hence by part (b) the residue classes

$$
\widehat { 0 , 1 , 2 , \dots , m - 1 }
$$

are disjoint. But every integer $x$ must be in exactly one of these classes because $x = q m + r$ where $0 \leq r < m _ { \mathrm { : } }$ $x \equiv r$ (mod $m ^ { \cdot }$ ) and hence $\boldsymbol { x } \in \hat { \boldsymbol { r } } .$ Since $\hat { 0 } = \hat { m }$ this proves (c). □

Definition A set of m representatives, one from each of the residue classes ${ \hat { 1 } } , { \hat { 2 } } , \dots , { \hat { m } }$ , is called a complete residue system modulo m.

ExaMPLes Any set consisting of m integers, incongruent mod $m$ , is a complete residue system mod $_ m$ . For example,

$$
\begin{array} { c } { { \{ 1 , 2 , \ldots , m \} ; \qquad \{ 0 , 1 , 2 , \ldots , m - 1 \} ; } } \\ { { \{ 1 , m + 2 , 2 m + 3 , 3 m + 4 , \ldots , m ^ { 2 } \} . } } \end{array}
$$

Theorem 5.11 Assume $( k , m ) = 1 . I f \{ a _ { 1 } , . . . , a _ { m } \}$ is $a$ complete residue system modulo m, so is $\{ k a _ { 1 } , \ldots , k a _ { m } \}$ -

PROOF. If $k a _ { i } \equiv k a _ { j }$ (mod $m _ { , } ^ { \prime }$ then $a _ { i } \equiv a _ { j }$ (mod $m$ )since $( k , ~ m ) = 1$ . Therefore no two elements in the set $\{ k a _ { 1 } , \ldots , k a _ { m } \}$ are congruent modulo $\pmb { m }$ - Since there are m elements in this set it forms a complete residue system. □

# 5.3 Linear congruences

Polynomial congruences can be studied in much the same way that polynomial equations are studied in algebra. Here, however, we deal with polynomials $f ( x )$ with integer coeficients so that the values of these polynomials will be integers when $x$ is an integer. An integer $x$ satisfying a polynomial congruence

$$
f ( x ) \equiv 0 { \pmod { m } }
$$

is called a solution of the congruence. Of course, if $x \equiv y$ (mod m) then $f ( x ) \equiv f ( y )$ (mod m) so every congruence having one solution has infinitely many. Therefore we make the convention that solutions belonging to the same residue class will not be counted as distinct. And when we speak of the number of solutions of a congruence such as (2) we shall mean the number of incongruent solutions, that is, the number of solutions contained in the set $\left\{ 1 , 2 , \ldots , m \right\}$ or in any other complete residue system modulo m. Therefore every polynomial congruence modulo m has at most m solutions.

ExAMPLE 1 The linear congruence $2 x \equiv 3$ (mod 4) has no solutions, since $2 x - 3$ is odd for every $_ x$ and therefore cannot be divisible by 4.

ExAMpLE 2 The quadratic congruence $x ^ { 2 } \equiv 1$ (mod 8) has exactly four solutions given by $x \equiv 1$ , 3, 5, 7 (mod 8).

The theory of linear congruences is completely described by the next three theorems.

Theorem 5.12 Assume $( a , m ) = 1$ . Then the linear congruence

$$
a x \equiv b { \pmod { m } }
$$

has exactly one solution.

PRoor. We need only test the numbers $1 , 2 , \ldots , m$ , since they constitute a complete residue system. Therefore we form the products a, $2 a , \ldots , m a .$ , Since $( a , m ) = 1$ these numbers also constitute a complete residue system. Hence exactly one of these products is congruent to $b$ modulo m. That is, there is exactly one $x$ satisfying (3). □

Although Theorem 5.12 tells us that the linear congruence (3) has a unique solution if $\{ a , m \} = 1$ , it does not tell us how to determine this solution except by testing all the numbers in a complete residue system. There are more expeditious methods known for determining the solution; some of them are discussed later in this chapter.

Note. If $( a , m ) = 1$ the unique solution of the congruence $a x \equiv 1$ (mod m) is called the reciprocal of $a$ modulo m. If $\pmb { a } ^ { \prime }$ is the reciprocal of $a$ then $b a ^ { \prime }$ is the solution of (3).

Theorem 5.13 Assume $( a , m ) = d$ Then the linear congruence

$$
a x \equiv b { \pmod { m } }
$$

has solutions if, and only $i f , d \vert b$ -

ProoF. If a solution exists then $d \vert b$ since $d | m$ and $d | a |$ Conversely, if $d | b$ the congruence

$$
{ \frac { a } { d } } x \equiv _ { d } ^ { b } \left( { \bmod { \frac { m } { d } } } \right)
$$

has a solution since $( a / d , m / d ) = 1$ , and this solution is also a solution of (4).

Theorem 5.14 Assume $( a , \ m ) = d$ and suppose that $d \vert b$ . Then the linear congruence

$$
a x \equiv b { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } }
$$

has exactly $d$ solutions modulo m. These are given $b y$

$$
t , t + { \frac { m } { d } } , t + 2 { \frac { m } { d } } , \ldots , t + ( d - 1 ) { \frac { m } { d } } ,
$$

where $t$ is the solution, unique modulo m/d, of the linear congruence

$$
{ \frac { a } { d } } x \equiv _ { d } ^ { b } { \pmod { \frac { m } { d } } } .
$$

ProoF. Every solution of (7) is also a solution of (5). Conversely, every solution of (5) satisfies (7). Now the $d$ numbers listed in (6) are solutions of (7) hence of (5). No two of these are congruent modulo m since the relations

$$
t + r { \frac { m } { d } } \equiv t + s { \frac { m } { d } } { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } , { \mathrm { w i t h ~ } } 0 \leq r < d , 0 \leq s < d
$$

imply

$$
r \frac { m } { d } \equiv s \frac { m } { d } ~ ( \mathrm { m o d } ~ m ) , ~ \mathrm { a n d ~ h e n c e } ~ r \equiv s ~ ( \mathrm { m o d } ~ d ) .
$$

But $0 \leq | r - s | < d \ s \mathbf { o } \ r = s .$

It remains to show that (5) has no solutions except those listed in (6). If $y$ is a solution of (5) then $a y \equiv a t$ (mod m) so $y \equiv t$ (mod m/d). Hence $y = t + k m / d$ for some $k$ . But $k \equiv r$ (mod $d )$ for some $r$ satisfying $0 \leq r < d$ Therefore

$$
k { \frac { m } { d } } \equiv r { \frac { m } { d } } { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } \qquad { \mathrm { s o ~ } } y \equiv t + r { \frac { m } { d } } { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } .
$$

Therefore $y$ is congruent modulo m to one of the numbers in (6). This completes the proof. □

In Chapter 1 we proved that the gcd of two numbers $a$ and $b$ is a linear combination of $a$ and $b$ . The same result can be deduced as a consequence of Theorem 5.14.

Theorem 5.15 If $( a , b ) = d$ there exist integers $x$ and y such that

$$
a x + b y = d .
$$

PRooF. The linear congruence $a x \equiv d { \mathrm { ~ ( m o d ~ } } b { \mathrm { ) } }$ has a solution. Hence there is an integer $y$ such that $d - a x = b y$ . This gives us $a x + b y = d ,$ as required.

Note. Geometrically, the pairs $( x , y )$ satisfying (8) are lattice points lying on a straight line. The $x$ -coordinate of each of these points is a solution of the congruence $a x \equiv d { \mathrm { ~ } } ( \mod b )$ d:

# 5.4 Reduced residue systems and the Euler-Fermat theorem

Definition By a reduced residue system modulo m we mean any set of $\varphi ( m )$ integers, incongruent modulo $^ { m }$ , each of which is relatively prime to m.

Note. $\varphi ( m )$ is Euler's totient, introduced in Chapter 2.

Theorem 5.16 If $\{ a _ { 1 } , a _ { 2 } , . . . , a _ { \varphi ( m ) } \}$ is a reduced residue system modulo m and $i f ( k , m ) = 1$ , then $\{ k a _ { 1 } , k a _ { 2 } , \ldots , k a _ { \varphi ( m ) } \}$ is also a reduced residue system modulo m.

ProoF. No two of the numbers $k a _ { i }$ are congruent modulo m. Also, since $( a _ { i } , m ) = ( k , m ) = 1$ we have $( k a _ { i } , m ) = 1$ so each $k a _ { i }$ is relatively prime to $_ m$ □

Theorem 5.17 Euler-Fermat theorem. Assume $( a , m ) = 1$ . Then we have

$$
a ^ { \varphi ( m ) } \equiv 1 { \pmod { m } } .
$$

PROOF. Let $\{ b _ { 1 } , b _ { 2 } , . . . , b _ { \varphi ( m ) } \}$ be a reduced residue system modulo $_ m$ Then $\{ a b _ { 1 } , a b _ { 2 } , \ldots , a b _ { \varphi ( m ) } \}$ is also a reduced residue system. Hence the product of all the integers in the first set is congruent to the product of those in the second set. Therefore

$$
b _ { 1 } \cdots b _ { \varphi ( m ) } \equiv a ^ { \varphi ( m ) } b _ { 1 } \cdots b _ { \varphi ( m ) } { \mathrm { ~ ( m o d ~ } } m ) .
$$

Each $b _ { i }$ is relatively prime to m so we can cancel each $b _ { i }$ to obtain the theorem.

Theorem 5.18 If a prime $p$ does not divide a then

$$
a ^ { p - 1 } \equiv 1 { \pmod { p } } .
$$

PRooF. This is a corollary of the foregoing theorem since $\varphi ( p ) = p - 1 .$ □

Theorem 5.19 Little Fermat theorem. For any integer a and any prime $p$ we have

$$
a ^ { p } \equiv a { \mathrm { ~ } } ( { \mathrm { m o d ~ } } p ) .
$$

PROOF. If $p \not \in a$ this is Theoren $1 5 . 1 8 . \ : \mathrm { I f } \ : p \ : | a$ then both $a ^ { p }$ and $^ { a }$ are congruent to 0 mod $p$ , □

The Euler-Fermat theorem can be used to calculate the solutions of a linear congruence.

Theorem 5.20 If $( a , m ) = 1$ the solution (unique mod $^ { m }$ ) of the linear congruence

$$
a x \equiv b { \pmod { m } }
$$

is given by

$$
x \equiv b a ^ { \varphi ( m ) - 1 } { \pmod { m } } .
$$

PRooF. The number $x$ given by (10) satisfies (9) because of the Euler-Fermat theorem. The solution is unique mod m since $( a , m ) = 1$ . □

ExAMPLE 1 Solve the congruence $5 x \equiv 3$ (mod 24).

Solution

Since $( 5 , 2 4 ) = 1$ there is a unique solution. Using (10) we find

$$
x \equiv 3 \cdot 5 ^ { \varphi ( 2 4 ) - 1 } \equiv 3 \cdot 5 ^ { 7 } { \pmod { 2 4 } }
$$

since $\varphi ( 2 4 ) = \varphi ( 3 ) \varphi ( 8 ) = 2 \cdot 4 .$ Modulo 24 we have ${ 5 ^ { 2 } \equiv 1 }$ ,and

$$
5 ^ { 4 } \equiv 5 ^ { 6 } \equiv 1 , \qquad 5 ^ { 7 } \equiv 5 , \qquad \mathrm { s o } ~ x \equiv 1 5 ~ ( \mathrm { m o d } ~ 2 4 ) .
$$

ExAMPLE 2 Solve the congruence $2 5 x \equiv 1 5$ (mod 120).

Solution

Since $d = ( 2 5 , 1 2 0 ) = 5$ and $d \vert 1 5$ the congruence has exactly five solutions modulo 120. To find them we divide by 5 and solve the congruence $5 x \equiv 3$ (mod 24). Using Example 1 and Theorem 5.14 we find that the five solutions are given by $x = 1 5 + 2 4 k .$ , $k = 0 _ { ; }$ 1,2,3, 4,or

$$
x \equiv 1 5 , 3 9 , 6 3 , 8 7 , 1 1 1 ~ ( \mathrm { m o d } ~ 1 2 0 ) .
$$

# 5.5 Polynomial congruences modulo $p$ . Lagrange's theorem

The fundamental theorem of algebra states that for every polynomial $f$ of degree $n \geq 1$ the equation $f ( x ) = 0$ has $\pmb { n }$ solutions among the complex numbers. There is no direct analog of this theorem for polynomial congruences. For example, we have seen that some linear congruences have no solutions, some have exactly one solution, and some have more than one. Thus, even in this special case, there appears to be no simple relation between the number of solutions and the degree of the polynomial. However, for congruences modulo a prime we have the following theorem of Lagrange.

Theorem 5.21 (Lagrange). Given a prime $p$ ,let

$$
f ( x ) = c _ { 0 } + c _ { 1 } x + \cdot \cdot \cdot + c _ { n } x ^ { n }
$$

beapolynomial ofdegree n with integer coeffi cients such that $c _ { n } \not \equiv 0 { \mathrm { ~ } } ( \mathrm { m o d ~ } p )$ Then the polynomial congruence

$$
f ( x ) \equiv 0 { \pmod { p } }
$$

has at most n solutions.

Note. This result is not true for composite moduli. For example, the quadratic congruence $x ^ { 2 } \equiv 1$ (mod 8) has 4 solutions.

PRooF. We use induction on $\pmb { n }$ , the degree of $f .$ When $n = 1$ the congruence is linear:

$$
c _ { 1 } x + c _ { 0 } \equiv { \pmod { p } } .
$$

Since $c _ { 1 } \not \equiv 0 \ ( \mathrm { m o d } \ p )$ we have $( c _ { 1 } , p ) = 1$ and there is exactly one solution. Assume, then, that the theorem is true for polynomials of degree $n - 1$ Assume also that the congruence (1l) has $n + 1$ incongruent solutions modulo $p$ say

$$
x _ { 0 } , x _ { 1 } , \ldots , x _ { n } ,
$$

where $f ( x _ { k } ) \equiv 0 { \pmod { p } }$ for each $k = 0 , 1 , \ldots , n .$ We shall obtain a contradiction. We have the algebraic identity

$$
f ( x ) - f ( x _ { 0 } ) = \sum _ { r = 1 } ^ { n } c _ { r } ( x ^ { r } - { x _ { 0 } } ^ { r } ) = ( x - x _ { 0 } ) g ( x )
$$

where $g ( x )$ is a polynomial of degree $n - 1$ with integer coeficients and with leading coefficient $c _ { n }$ . Thus we have

$$
f ( x _ { k } ) - f ( x _ { 0 } ) = ( x _ { k } - x _ { 0 } ) g ( x _ { k } ) \equiv 0 { \pmod { p } } ,
$$

since $f ( x _ { k } ) \equiv f ( x _ { 0 } ) \equiv 0$ (mod p). But $x _ { k } - x _ { 0 } \not \equiv 0 { \pmod { p } }$ if $k \neq 0$ so we must have $g ( x _ { k } ) \equiv 0$ (mod $p$ ) for each $k \neq 0$ . By this means that the congruence $g ( x ) \equiv 0$ (mod $p )$ has $\pmb { n }$ incongruent solutions modulo $p _ { : }$ contradicting our induction hypothesis. This completes the proof. □

# 5.6 Applications of Lagrange's theorem

Theorem 5.2 $\ ? f f ( x ) = c _ { 0 } + c _ { 1 } x + \cdot \cdot \cdot + c _ { n } x ^ { n }$ is a polynomial of degree n with integer coefficients, and if the congruence

$$
f ( x ) \equiv 0 { \pmod { p } }
$$

has more than n solutions, where $p$ is prime, then every coefficient of $f$ is divisible by $p$

Proor. If there is some coeficient not divisible by $p$ , let $c _ { k }$ be the one with largest index. Then $k \leq n$ and the congruence

$$
c _ { 0 } + c _ { 1 } x + \cdot \cdot \cdot + c _ { k } x ^ { k } \equiv 0 { \pmod { p } }
$$

has more than $k$ solutions so, by Lagrange's theorem, $p | c _ { k }$ , a contradiction.

Now we apply Theorem 5.22 to a particular polynomial.

Theorem 5.23 For any prime $p$ all the coefficients of the polynomial

$$
f ( x ) = ( x - 1 ) ( x - 2 ) \cdots ( x - p + 1 ) - x ^ { p - 1 } + 1
$$

are divisible by $p$

PROOF. Let $g ( x ) = ( x - 1 ) ( x - 2 ) \cdot \cdot \cdot ( x - p + 1 )$ . The roots of $g$ are the numbers $1 , 2 , \ldots , p - 1$ , hence they satisfy the congruence

$$
g ( x ) \equiv 0 { \pmod { p } } .
$$

By the Euler-Fermat theorem, these numbers also satisfy the congruence $h ( { \boldsymbol { x } } ) \equiv 0$ (mod p), where

$$
h ( x ) = x ^ { p - 1 } - 1 .
$$

The difference $f ( x ) = g ( x ) - h ( x )$ has degree $p - 2$ but the congruence $f ( x ) \equiv 0$ (mod $p ^ { \prime }$ has $p - 1$ solutions, 1, $2 , \ldots , p \texttt { - l }$ . Therefore, by Theorem 5.22, each coeficient of $f ( x )$ is divisible by $p$ □

We obtain the next two theorems by considering two particular coefficients of the polynomial $f ( x )$ in Theorem 5.23.

Theorem 5.24 Wilson's theorem. For any prime $p$ we have

$$
( p - 1 ) ! \equiv - 1 { \pmod { p } } .
$$

ProoF. The constant term of the polynomial $f ( x )$ in Theorem 5.23 is $( p - 1 ) ! + 1$ □

Note. The converse of Wilson's theorem also holds. That is, if $n > 1$ and $( n - 1 ) ! \equiv - 1$ (mod n), then $n$ is prime. (See Exercise 5.7.)

Theorem 5.25 Wolstenholme's theorem. For any prime $p \geq 5$ we have

$$
\sum _ { k = 1 } ^ { p - 1 } { \frac { ( p - 1 ) ! } { k } } \equiv 0 { \mathrm { ~ } } ( { \mathrm { m o d ~ } } p ^ { 2 } ) .
$$

ProoF. The sum in question is the sum of the products of the numbers 1, $2 , \ldots , p - 1$ taken $p - 2$ at a time. This sum is also equal to the coeicient of $- x$ in the polynomial

$$
g ( x ) = ( x - 1 ) ( x - 2 ) \cdots ( x - p + 1 ) .
$$

In fact, $g ( x )$ can be written in the form

$$
g ( x ) = x ^ { p - 1 } - S _ { 1 } x ^ { p - 2 } + S _ { 2 } x ^ { p - 3 } - \cdot \cdot \cdot + S _ { p - 3 } x ^ { 2 } - S _ { p - 2 } x + ( p - 1 ) ! ,
$$

where the coeficient $S _ { k }$ is the $k$ th elementary symmetric function of the roots, that is, the sum of the products of the numbers $1 , 2 , \ldots , p - 1 ;$ ,taken $k$ at a time. Theorem 5.23 shows that each of the numbers $S _ { 1 } , S _ { 2 } , \ldots , S _ { p ^ { - 2 } }$ is divisible by $p$ . We wish to show that $S _ { p - 2 }$ is divisible by $p ^ { 2 }$ -

The product for $g ( x )$ shows that $g ( p ) = ( p - 1 ) !$ so

$$
( p - 1 ) ! = p ^ { p - 1 } - S _ { 1 } p ^ { p - 2 } + \cdot \cdot \cdot + S _ { p - 3 } p ^ { 2 } - S _ { p - 2 } p + ( p - 1 ) ! .
$$

Canceling $\left( p - 1 \right) !$ and reducing the equation mod $p ^ { 3 }$ we find, since $p > 5 .$

$$
p S _ { p - 2 } \equiv 0 { \pmod { p ^ { 3 } } } ,
$$

and hence $S _ { p - 2 } \equiv 0$ (mod $p ^ { 2 ^ { \cdot } }$ ), as required.

# 5.7 Simultaneous linear congruences. The Chinese remainder theorem

A system of two or more linear congruences need not have a solution, even though each individual congruence has a solution. For example, there is no $x$ which simultaneously satisfies $x \equiv 1$ (mod 2) and $x \equiv 0$ (mod 4), even though each of these separately has solutions. In this example the moduli 2 and 4 are not relatively prime. We shall prove next that any system of two or more linear congruences which can be solved separately with unique solutions can also be solved simultaneously if the moduli are relatively prime in pairs. We begin with a special case.

Theorem 5.26 Chinese remainder theorem. Assume $m _ { 1 } , \ldots , m _ { r }$ are positive integers, relatively prime in pairs:

$$
( m _ { i } , m _ { k } ) = 1 \quad i f i \neq k .
$$

Let $b _ { 1 } , \ldots , b _ { r }$ be arbitrary integers. Then the system of congruences

$$
\begin{array} { c } { { x \equiv b _ { 1 } { \pmod { m _ { 1 } } } } } \\ { { \vdots } } \\ { { x \equiv b _ { r } { \pmod { m _ { r } } } } } \end{array}
$$

has exactly one solution modulo the product $m _ { 1 } \cdots m _ { r }$

PROOF. Let $M = m _ { 1 } \cdot \cdot \cdot m _ { r }$ and let $M _ { k } = M / m _ { k }$ .Then $( M _ { k } , m _ { k } ) = 1$ so each $M _ { k }$ has a unique reciprocal $M _ { k } ^ { \prime }$ modulo $m _ { k }$ . Now let

$$
x = b _ { 1 } M _ { 1 } M _ { 1 } ^ { \prime } + b _ { 2 } M _ { 2 } M _ { 2 } ^ { \prime } + \cdot \cdot \cdot + b _ { r } M _ { r } M _ { r } ^ { \prime } .
$$

Consider each term in this sum modulo $m _ { k }$ . Since $M _ { i } \equiv 0$ (mod $m _ { k } )$ if $i \neq k$ we have

$$
x \equiv b _ { k } M _ { k } M _ { k } ^ { \prime } \equiv b _ { k } ( \mathrm { m o d } m _ { k } ) .
$$

Hence $x$ satisfies every congruence in the system. But it is easy to show that the system has only one solution mod $M$ . In fact, if $x$ and $y$ are two solutions of the system we have $x \equiv y$ (mod $m _ { k }$ ) for each $k$ and, since the $m _ { k }$ are relatively prime in pairs, we also have $x \equiv y$ (mod $M _ { ☉ }$ . This completes the proof.

The following extension is now easily deduced.

Theorem 5.27 Assume $m _ { 1 } , \ldots , m _ { r }$ are relatively prime in pairs. Let $b _ { 1 } , \ldots ,$ $b _ { r }$ be arbitrary integers and let $a _ { 1 } , \ldots , a _ { r } s a t i s f y$

$$
( a _ { k } , m _ { k } ) = 1 f o r k = 1 , 2 , . . . , r .
$$

Then the linear system of congruences

$$
\begin{array} { c } { { a _ { 1 } x \equiv b _ { 1 } ~ ( \mathrm { m o d } ~ m _ { 1 } ) } } \\ { { \vdots } } \\ { { a _ { r } x \equiv b _ { r } ~ ( \mathrm { m o d } ~ m _ { r } ) } } \end{array}
$$

has exactly one solution modulo $m _ { 1 } m _ { 2 } \cdots m _ { r }$

PROOF. Let $a _ { k } ^ { \prime }$ denote the reciprocal of $a _ { k }$ modulo $m _ { k }$ . This exists since $( a _ { k } , m _ { k } ) = 1$ . Then the congruence $a _ { k } x \equiv b _ { k }$ (mod $m _ { k , \cdot }$ ) is equivalent to the congruence $x \equiv b _ { k } a _ { k } ^ { \prime }$ (mod $m _ { k }$ ). Now apply Theorem 5.26. □

# 5.8 Applications of the Chinese remainder theorem

The first application deals with polynomial congruences with composite moduli.

Theorem 5.28Let f be a polynomial with integer cofcients, et $m _ { 1 } , m _ { 2 } , . . . ,$ $m _ { r }$ be positive integers relatively prime in pairs, and let $m = m _ { 1 } m _ { 2 } \cdot \cdot \cdot m _ { r }$ Then the congruence

$$
f ( x ) \equiv 0 { \pmod { m } }
$$

has a solution $i f ,$ and only if, each of the congruences

$$
f ( x ) \equiv 0 { \pmod { m _ { i } } } \qquad ( i = 1 , 2 , \ldots , r )
$$

has a solution. Moreover, if $v ( m )$ and $\nu ( m _ { i } )$ denote the number of solutions of (12) and (13), respectively, then

$$
\nu ( m ) = \nu ( m _ { 1 } ) \nu ( m _ { 2 } ) \cdot \cdot \cdot \nu ( m _ { r } ) .
$$

PROOF. If $f ( a ) \equiv 0$ (mod $m ]$ then $f ( a ) \equiv 0 { \pmod { m _ { i } } }$ for each i. Hence every solution of (12) is also a solution of (13).

Conversely, let $a _ { i }$ be a solution of (13). Then by the Chinese remainder theorem there exists an integer $a$ such that

$$
a \equiv a _ { i } ( \mathrm { m o d } m _ { i } ) \mathrm { f o r } i = 1 , 2 , . . . , r ,
$$

SO

$$
f ( a ) \equiv f ( a _ { i } ) \equiv 0 { \mathrm { ~ ( m o d ~ } } m _ { i } ) .
$$

Since the moduli are relatively prime in pairs we also have $f ( a ) \equiv 0$ (mod m).   
Therefore if each of the congruences in (13) has a solution, so does (12).

We also know, by Theorem 5.26, that each r-tuple of solutions (a1, · . ., a,) of the congruences in (13) gives rise to a unique integer a mod m satisfying (15). As each $a _ { i }$ runs through the $\nu ( m _ { i } )$ solutions of (1 3) the number of integers $a$ which satisfy (15) and hence (13) is $\nu ( m _ { 1 } ) \cdots \nu ( m _ { r } ) .$ This proves (14). □

Note. If m has the prime power decomposition

$$
m = p _ { 1 } ^ { \alpha _ { 1 } } \cdot \cdot \cdot p _ { r } ^ { \alpha _ { r } }
$$

we can take $m _ { i } = p _ { i } ^ { \alpha _ { i } }$ in Theorem 5.28 and we see that the problem of solving a polynomial congruence for a composite modulus is reduced to that for prime power moduli. Later we will show that the problem can be reduced further to polynomial congruences with prime moduli plus a set of linear congruences. (See Section 5.9.)

The next application of the Chinese remainder theorem concerns the set of lattice points visible from the origin. (See Section 3.8.)

Theorem 5.29 The set of lattice points in the plane visible from the origin contains arbitrarily large square gaps. That is, given any integer $k > 0$ there exists a lattice point $( a , b )$ such that none of the lattice points

$$
( a + r , b + s ) , 0 < r \leq k , 0 < s \leq k ,
$$

is visible from the origin.

PROOF. Let $p _ { 1 } , p _ { 2 } , \ldots .$ , be the sequence of primes. Given $k > 0$ consider the $k \times k$ matrix whose entries in the first row consist of the first $k$ primes, those in the second row consist of the next $k$ primes, and so on. Let $m _ { i }$ be the product of the primes in the ith row and let $M _ { i }$ be the product of the primes in the ith column. Then the numbers $m _ { i }$ are relatively prime in pairs, as are the $M _ { i }$ .

Next consider the set of congruences

$$
\begin{array} { c } { x \equiv - 1 { \pmod { m _ { 1 } } } } \\ { x \equiv - 2 { \pmod { m _ { 2 } } } } \\ { \vdots } \\ { x \equiv - k { \pmod { m _ { k } } } . } \end{array}
$$

This system has a solution $a$ which is unique mod $m _ { 1 } \cdots m _ { k }$ . Similarly, the system

$$
\begin{array} { c } { { y \equiv - 1 { \pmod { M _ { 1 } } } } } \\ { { \vdots } } \\ { { y \equiv - k { \pmod { M _ { k } } } } } \end{array}
$$

las a solution $b$ which is unique mod $M _ { 1 } \cdot \cdot \cdot M _ { k } = m _ { 1 } \cdot \cdot \cdot m _ { k }$

Now consider the square with opposite vertices at $( a , b )$ and $( a + k , b + k ) .$ (id:) Any lattice point inside this square has the form

$$
( a + r , b + s ) , \mathrm { w h e r e } \ 0 < r < k , 0 < s < k ,
$$

and those with $r = k$ or $s = k$ lie on the boundary of the square. We now show that no such point is visible from the origin. In fact,

$$
a \equiv - r ( \mathrm { m o d } m _ { r } ) \qquad \mathrm { a n d } b \equiv - s ( \mathrm { m o d } M _ { s } )
$$

so the prime in the intersection of row $r$ and column $\pmb { S }$ divides both $a + r$ and $b + s$ Hence $a + r$ and $b + s$ are not relatively prime, and therefore the lattice point $( a + r , b + s )$ is not visible from the origin. □

# 5.9 Polynomial congruences with prime power moduli

Theorem 5.28 shows that the problem of solving a polynomial congruence

$$
f ( x ) \equiv 0 { \pmod { m } }
$$

can be reduced to that of solving a system of congruences

$$
f ( x ) \equiv 0 \ ( \mathrm { m o d } \ p _ { i } ^ { \alpha _ { i } } ) \qquad ( i = 1 , 2 , \ldots , r ) ,
$$

where $m = { p _ { 1 } } ^ { \alpha _ { 1 } } \cdot \cdot \cdot { p _ { r } } ^ { \alpha _ { r } }$ . In this section we show that the problem can be further reduced to congruences with prime moduli plus a set of linear congruences.

Let $f$ be a polynomial with integer coeficients, and suppose that for some prime $p$ and some $\alpha \geq 2$ the congruence

$$
f ( x ) \equiv 0 { \pmod { p ^ { \alpha } } }
$$

has a solution, say $x = a ,$ where $^ { a }$ is chosen so that it lies in the interval

$$
0 \leq a < p ^ { a } .
$$

This solution also satisfies each of the congruences $f ( x ) \equiv 0$ (mod $p ^ { \beta } .$ ) for each $\beta < \alpha$ . In particular, $a$ satisfies the congruence

$$
f ( x ) \equiv 0 { \pmod { p ^ { \alpha - 1 } } } .
$$

Now divide $a$ by $p ^ { \pmb { x } - 1 }$ and write

$$
a = q p ^ { \alpha - 1 } + r , { \mathrm { ~ w h e r e ~ } } 0 \leq r < p ^ { \alpha - 1 } .
$$

The remainder $r$ determined by (18) is said to be generated by $\pmb { a }$ Since $r \equiv a$ (mod $p ^ { \alpha - 1 }$ ) the number $r$ is also a solution of (17). In other words, every solution $a$ of congruence (16) in the interval $0 \leq a < p ^ { \alpha }$ generates a solution $r$ of congruence (17) in the interval $0 \leq r < p ^ { \alpha - 1 }$

Now suppose we start with a solution $r$ of (17) in the interval $0 \leq r < p ^ { \alpha - 1 }$ and ask whether there is a solution $a$ of (16) in the interval $0 \leq a < p ^ { \alpha }$ which generates $r$ . If so, we say that $r$ can be lifted from $p ^ { \alpha - 1 }$ to $p ^ { \alpha }$ . The next theorem shows that the possibility of $r$ being lifted depends on $f ( r )$ mod $p ^ { \alpha }$ and on the derivative $f ^ { \prime } ( r ) { \bmod { p } }$

Theorem 5.30 Assume $\alpha \geq 2$ and let $r$ be a solution of the congruence

$$
f ( x ) \equiv 0 { \pmod { p ^ { \alpha - 1 } } }
$$

lying in the interval $0 \leq r < p ^ { \alpha - 1 }$ .

(a) Assume $f ^ { \prime } ( r ) \neq 0$ (mod $p$ ). Then r can be lifted in a unique way from $p ^ { \alpha - 1 } t o p ^ { \alpha }$ . That is, there is a unique a in the interval $0 \leq a < p ^ { \alpha }$ which generates r and which satisfies the congruence

$$
f ( x ) \equiv 0 { \pmod { p ^ { \alpha } } } .
$$

(b) Assume $f ^ { \prime } ( r ) \equiv 0$ (mod $p \mathrm { \large / }$ ). Then we have two possibilities:

$( \mathsf { b } _ { 1 } ) \ I f f ( r ) \equiv 0$ (mod $p ^ { \alpha } ,$ ,d $r$ can be lifted from $p ^ { \alpha - 1 }$ to $p ^ { \alpha }$ in $p$ distinct ways.

$( { \mathsf { b } } _ { 2 } ) ~ I f ~ f ( r ) \not \equiv 0 ~ ( { \mathrm { m o d } } ~ p ^ { \alpha } ) ,$ r cannot be lifted from $p ^ { \alpha - 1 } t o p ^ { \alpha }$

PROOF. If $\pmb { n }$ is the degree of $f$ we have the identity (Taylor's formula)

$$
f ( x + h ) = f ( x ) + f ^ { \prime } ( x ) h + \frac { f ^ { \prime \prime } ( x ) } { 2 ! } h ^ { 2 } + \cdots + \frac { f ^ { ( n ) } ( x ) } { n ! } h ^ { n }
$$

for every $x$ and $h$ . We note that each polynomial $f ^ { ( k ) } ( x ) / k !$ has integer coefficients. (The reader should verify this.) Now take $x = r$ in (21), where $r$ is a solution of (19) in the interval $0 \leq r < p ^ { a - 1 }$ , and let $h = q p ^ { \alpha - 1 }$ where $q$ is an integer to be specified presently. Since $\alpha \geq 2$ the terms in (21) involving $h ^ { 2 }$ and higher powers of $h$ are integer multiples of $p ^ { \mathfrak { a } }$ . Therefore (21) gives us the congruence

$$
f ( r + q p ^ { \alpha - 1 } ) \equiv f ( r ) + f ^ { \prime } ( r ) q p ^ { \alpha - 1 } \ ( \mathrm { m o d } \ p ^ { \alpha } ) .
$$

Since $r$ satisfies (19) we can write $f ( r ) = k p ^ { a - 1 }$ for some integer $k _ { i }$ and the last congruence becomes

$$
f ( r + q p ^ { \alpha - 1 } ) \equiv \{ q f ^ { \prime } ( r ) + k \} p ^ { \alpha - 1 } ~ ( \mathrm { m o d } ~ p ^ { \alpha } ) .
$$

Now let

$$
a = r + q p ^ { \alpha - 1 } .
$$

Then $a$ satisfies congruence (20)i, and only if, $q$ satisfies the linear congruence

$$
q f ^ { \prime } ( r ) + k \equiv 0 { \pmod { p } } .
$$

If $f ^ { \prime } ( r ) \not \equiv 0 \ ( \mathrm { m o d } \ p )$ this congruence has a unique solution $q$ mod $p$ , and if we choose $q$ in the interval $0 \leq q < p$ then the number $a$ given by (22) will satisfy (20) and will lie in the interval $0 \leq a < p ^ { \alpha } .$

On the other hand, if $f ^ { \prime } ( r ) \equiv 0$ (mod $p$ ) then (23) has a solution $q$ if, and only if, $p | k ,$ that is, if and only if $f ( r ) \equiv 0$ (mod $p ^ { \alpha } )$ . If $p \nmid k$ there is no choice of $q$ to make $a$ satisfy (20). But if $p | k$ then the $p$ values $q = 0 , 1 , \ldots ,$ , $p - 1$ give $p$ solutions $a$ of (20) which generate $r$ and lie in the interval $0 \leq a < p ^ { \alpha }$ . This completes the proof. □

The proof of the foregoing theorem also describes a method for obtaining solutions of congruence (20) if solutions of (19) are known. By applying the method repeatedly the problem is ultimately reduced to that of solving the congruence

$$
f ( x ) \equiv 0 { \pmod { p } } .
$$

If (24) has no solutions, then (20) has no solutions. If (24) has solutions, we choose one, call it $r$ , which lies in the interval $0 \leq r < p$ . Corresponding to $r$ there will be 0, 1, or $p$ solutions of the congruence

$$
f ( x ) \equiv 0 { \pmod { p ^ { 2 } } }
$$

depending on the numbers $f ^ { \prime } ( r )$ and $k = f ( r ) / p$ If $p \nmid k$ and $p | f ^ { \prime } ( r )$ then $r$ cannot be lifted to a solution of (25). In this case we begin anew with a different solution $r .$ If no $r$ can be lifted then (25) has no solution.

If $p | k$ for some $r$ , we examine the linear congruence

$$
q f ^ { \prime } ( r ) + k \equiv 0 { \pmod { p } } .
$$

This has 1 or $p$ solutions $q$ according as $p \nmid f ^ { \prime } ( r ) \operatorname { o r } p \mid f ^ { \prime } ( r )$ For each solution $q$ the number $a = r + q p$ gives a solution of (25). For each solution of (25) a similar procedure can be used to find all solutions of

$$
f ( \pmb { x } ) \equiv 0 \ ( \mathbf { m o d } \ p ^ { 3 } ) ,
$$

and so on, until all solutions of (20) are obtained.

# 5.10 The principle of cross-classification

Some problems in number theory can be dealt with by applying a general combinatorial theorem about sets called the principle of cross-classification. This is a formula which counts the number of elements of a finite set S which do not belong to certain prescribed subsets $S _ { 1 } , \ldots , S _ { n }$ .

Notation If $T$ is $a$ subset of $s$ we write $N ( T )$ for the number of elements of $T .$ We denote by $s - T$ the set of those elements of $s$ which are not in T. Thus,

$$
S - \bigcup _ { i = 1 } ^ { n } S _ { i }
$$

consists of those elements of $s$ which are not in any of the subsets $S _ { 1 } , \ldots , S _ { n }$ . For brevity we write $S _ { i } S _ { j }$ , $S _ { i } S _ { j } S _ { k } , \ldots$ , for the intersections $S _ { i } \cap S _ { j }$ , $S _ { i } \cap S _ { j } \cap S _ { k }$ ,..., respectively.

Theorem 5.31 Principle of cross-classification. $I f S _ { 1 } , \ldots , S _ { n }$ are given subsets of $a$ finite set S, then

$$
\begin{array} { l } { { { \cal N } \bigg ( S - \displaystyle \bigcup _ { i = 1 } ^ { n } S _ { i } \bigg ) = N ( S ) - \displaystyle \sum _ { 1 \leq i \leq n } N ( S _ { i } ) + \displaystyle \sum _ { 1 \leq i < j \leq n } N ( S _ { i } S _ { j } ) } } \\ { { - \displaystyle \sum _ { 1 \leq i < j < k \leq n } N ( S _ { i } S _ { j } S _ { k } ) + \dots + ( - 1 ) ^ { n } N ( S _ { 1 } S _ { 2 } \dots S _ { n } ) . } } \end{array}
$$

PROOF. If $T \subseteq S$ let $N _ { r } ( T )$ denote the number of elements of $T$ which are not in any of the first $r$ subsets $S _ { 1 } , \ldots , S _ { r }$ ,with $N _ { \mathfrak { d } } ( T )$ being simply $N ( T )$ d The elements enumerated by $N _ { r - 1 } ( T )$ fall into two disjoint sets, those which are not in $S _ { r }$ and those which are in $S _ { r }$ . Therefore we have

$$
N _ { r - 1 } ( T ) = N _ { r } ( T ) + N _ { r - 1 } ( T S _ { r } ) .
$$

Hence

$$
N _ { r } ( T ) = N _ { r - 1 } ( T ) - N _ { r - 1 } ( T S _ { r } ) .
$$

Now take $T = S$ and use (26) to express each term on the right in terms of $N _ { r - 2 }$ . We obtain

$$
\begin{array} { r l } & { N _ { r } ( S ) = \{ N _ { r - 2 } ( S ) - N _ { r - 2 } ( S S _ { r - 1 } ) \} - \{ N _ { r - 2 } ( S _ { r } ) - N _ { r - 2 } ( S _ { r } S _ { r - 1 } ) \} } \\ & { \qquad = N _ { r - 2 } ( S ) - N _ { r - 2 } ( S _ { r - 1 } ) - N _ { r - 2 } ( S _ { r } ) + N _ { r - 2 } ( S _ { r } S _ { r - 1 } ) . } \end{array}
$$

Applying (26) repeatedly we finally obtain

$$
N _ { r } ( S ) = N _ { 0 } ( S ) - \underset { i = 1 } { \overset { r } { \sum } } N _ { 0 } ( S _ { i } ) + \underset { 1 \leq i < j \leq r } { \sum } N _ { 0 } ( S _ { i } S _ { j } ) - \dots + ( - 1 ) ^ { r } N _ { 0 } ( S _ { 1 } \cdot \cdot \cdot S _ { r } ) .
$$

When $r = n$ this gives the required formula.

ExAMPLE The product formula for Euler's totient can be derived from the cross-classification principle. Let $p _ { 1 } , \ldots , p _ { r }$ denote the distinct prime divisors of $n$ .Let $S = \{ 1 , 2 , \dots , n \}$ and let $S _ { k }$ be the subset of $s$ consisting of those integers divisible by $p _ { k }$ . The numbers in $s$ relatively prime to $\pmb { n }$ are those in none of the sets $S _ { 1 } , \ldots , S _ { r }$ , so

$$
\varphi ( n ) = N { \Biggl ( } S - \bigcup _ { k = 1 } ^ { r } S _ { k } { \Biggr ) } .
$$

If $d | n$ there are $n / d$ multiples of $d$ in the set S. Hence

$$
N ( S _ { i } ) = { \frac { n } { p _ { i } } } , N ( S _ { i } S _ { j } ) = { \frac { n } { p _ { i } p _ { j } } } , \ldots , N ( S _ { 1 } \cdot \cdot \cdot S _ { r } ) = { \frac { n } { p _ { 1 } \cdots p _ { r } } } ,
$$

so the cross-classification principle gives us

$$
{ \begin{array} { l } { \displaystyle \varphi ( n ) = n - \sum _ { i = 1 } ^ { n } { \frac { n } { p _ { i } } } + \sum _ { 1 \leq i < j \leq r } { \frac { n } { p _ { i } p _ { j } } } - \cdots + ( - 1 ) ^ { r } { \frac { n } { p _ { 1 } \cdots p _ { r } } } } \\ { \displaystyle = n \sum _ { d | n } { \frac { \mu ( d ) } { d } } = n \prod _ { p | n } { \Bigg ( } 1 - { \frac { 1 } { p } } { \Bigg ) } . } \end{array} }
$$

The next application of the cross-classification principle counts the number of elements in a reduced residue system mod $k$ which belong to a given residue class $r$ mod $d .$ where $d | k$ and $( r , d ) = 1$

Theorem 5.32 Given integers $r$ ,id $d$ and $k$ such that $d | k , d > 0 , k \geq 1$ and $( r , d ) = 1$ . Then the number of elements in the set

$$
S = \{ r + t d : t = 1 , 2 , . . . , k / d \}
$$

which are relatively prime to $k$ is $\varphi ( k ) / \varphi ( d )$

PRooF. If a prime $p$ divides $k$ and $r + t d$ then $p \chi d ,$ otherwise $p | r _ { : }$ , contradicting the hypothesis $( r , d ) = 1$ . Therefore, the primes which divide $k$ and elements of $s$ are those which divide $k$ but do not divide d. Call them $p _ { 1 } , \ldots , p _ { m }$ and let

$$
k ^ { \prime } = p _ { 1 } p _ { 2 } \cdots p _ { m } .
$$

Then the elements of $s$ relatively prime to $k$ are those not divisible by any of these primes. Let

$$
S _ { i } = \{ x : x \in S { \mathrm { ~ a n d ~ } } p _ { i } | x \} \qquad ( i = 1 , 2 , \ldots , m ) .
$$

If $x \in S _ { i }$ and $x = r + t d$ then $r + t d \equiv 0$ (mod $p _ { i } )$ . Since $p _ { i } \nmid d$ there is a unique $t$ mod $p _ { i }$ with this property, therefore exactly one $t$ in each of the intervals $[ 1 , p _ { i } ] , [ p _ { i } + 1 , 2 p _ { i } ] , \ldots , [ ( q - 1 ) p _ { i } + 1 , q p _ { i } ]$ where $q p _ { i } = k / d$ -

Therefore

$$
N ( S _ { i } ) = \frac { k / d } { p _ { i } } .
$$

Similarly,

$$
N ( S _ { i } S _ { j } ) = \frac { k / d } { p _ { i } p _ { j } } , \ldots , N ( S _ { 1 } \cdot \cdot \cdot S _ { m } ) = \frac { k / d } { p _ { 1 } \cdot \cdot \cdot p _ { m } } .
$$

Hence by the cross-classification principle the number of integers in $s$ which are relatively prime to $k$ is

$$
N \bigg ( S - \bigcup _ { i = 1 } ^ { m } S _ { i } \bigg ) = \frac { k } { d } \sum _ { \delta \mid k ^ { \prime } } \frac { \mu ( \delta ) } { \delta } = \frac { k } { d } \prod _ { p \mid k ^ { \prime } } \bigg ( 1 - \frac { 1 } { p } \bigg ) = \frac { k \prod _ { p \mid k } \bigg ( 1 - \frac { 1 } { p } \bigg ) } { d \prod _ { p \mid d } \bigg ( 1 - \frac { 1 } { p } \bigg ) } = \frac { \varphi ( k ) } { \varphi ( d ) } .
$$

# 5.11 A decomposition property of reduced residue systems

As an application of the foregoing theorem we discuss a property of reduced residue systems which will be used in a later chapter. We begin with a numerical example.

Let $s$ be a reduced residue system mod 15, say

$$
S = \{ 1 , 2 , 4 , 7 , 8 , 1 1 , 1 3 , 1 4 \} .
$$

We display the 8 elements of S in a $4 \times 2$ matrix as follows:

$$
\left[ \begin{array} { l l } { 1 } & { 2 } \\ { 4 } & { 8 } \\ { 7 } & { 1 1 } \\ { 1 3 } & { 1 4 } \end{array} \right] .
$$

Note that each row contains a reduced residue system mod 3, and the numbers in each column are congruent to each other mod 3. This example illustrates a general property of reduced residue systems described in the following theorem.

Theorem 5.33 Let $S$ be a reduced residue system mod $k$ , and let $d > 0$ be a . divisor of $k$ . Then we have the following decompositions of S:

(a) S is the union of $\varphi ( k ) / \varphi ( d )$ disjoint sets, each of which is a reduced residue system mod $d$   
(b) $s$ is the union of $\varphi ( d )$ disjoint sets, each of which consists of $\varphi ( k ) / \varphi ( d )$ numbers congruent to each other mod $d$

Note. In the foregoing example, $k = 1 5$ and $d = 3$ . The rows of the matrix represent the disjoint sets of part (a), and the columns represent the disjoint sets of part (b). If we apply the theorem to the divisor $d = 5$ we obtain the decomposition given by the matrix

$$
{ \left[ \begin{array} { l l l l } { 1 } & { 2 } & { 4 } & { 8 } \\ { 1 1 } & { 7 } & { 1 4 } & { 1 3 } \end{array} \right] } .
$$

Each row is a reduced residue system mod 5 and each column consists of numbers congruent to each other mod 5.

PRooF. First we prove that properties (a) and (b) are equivalent. If (b) holds we can display the $\varphi ( k )$ elements of $s$ as a matrix, using the $\varphi ( d )$ disjoint sets of (b) as columns. This matrix has $\varphi ( k ) / \varphi ( d )$ rows. Each row contains a reduced system mod $d .$ , and these are the disjoint sets required for part (a). Similarly, it is easy to verify that (a) implies (b).

Now we prove (b). Let $S _ { d }$ be a given reduced residue system mod $d _ { \mathrm { { ; } } }$ and suppose $\boldsymbol { r } \in S _ { d }$ . We will prove that there are at least $\varphi ( k ) / \varphi ( d )$ integers $\pmb { n }$ in $s _ { \mathrm { { \scriptscriptstyle m } } }$ ,d distinct mod $k .$ such that $n \equiv r$ (mod $d$ ). Since there are $\varphi ( d )$ values of $r$ in $S _ { d }$ and $\varphi ( k )$ integers in S, there can't be more than $\varphi ( k ) / \varphi ( d )$ such numbers $\pmb { n }$ , so this will prove part (b).

The required numbers $\pmb { n }$ will be selected from the residue classes mod $k$ represented by the following $k / d$ integers:

$$
r , r + d , r + 2 d , . . . , r + \frac { k } { d } d .
$$

These numbers are congruent to each other mod $d$ and they are incongruent mod $k$ . Since $( r , d ) = 1$ , Theorem 5.32 shows that $\varphi ( k ) / \varphi ( d )$ of them are relatively prime to $k _ { : }$ , so this completes the proof. (For a different proof based on group theory see [1].) □

# Exercises for Chapter 5

1. Let $s$ be a set of $n$ integers (not necessarily distinct). Prove that some nonempty subset of S has a sum which is divisible by $n$

2. Prove that $5 n ^ { 3 } + 7 n ^ { 5 } \equiv 0$ (mod 12) for ll integers $n$

3. (a) Find all positive integers $n$ for which $n ^ { 1 3 } \equiv n$ (mod 1365). (b) Find all positive integers $n$ for which $n ^ { 1 7 } \equiv n$ (mod 4080).

4. (a) Prove that $\varphi ( n ) \equiv 2$ (mod 4) when $n = 4$ and when $n = p ^ { a }$ where $p$ is a prime, $p \equiv 3$ (mod 4). (b) Find all $n$ for which $\varphi ( n ) \equiv 2 { \pmod { 4 } } .$

5. A yardstick divided into inches is again divided into 70 equal parts. Prove that among the four shortest divisions two have left endpoints corresponding to 1 and 19 inches. what are the right endpoints of the other two?

6. Find all $x$ which simultaneously satisfy the system of congruences

$$
x \equiv 1 { \pmod { 3 } } , \qquad x \equiv 2 { \pmod { 4 } } , \qquad x \equiv 3 { \pmod { 5 } } .
$$

7. Prove the converse of Wilson's theorem: $I f ( n - 1 ) ! + 1 \equiv 0$ (mod n),then n is prime $i f n > 1$

$\clubsuit$ Find all positive integers $\pmb { n }$ for which $( n - 1 ) ! + 1$ is a power of $n$

9.1f $p$ is an odd prime, let $q = ( p  1 ) / 2$ . Prove that

$$
( q ! ) ^ { 2 } + ( - 1 ) ^ { 4 } \equiv 0 { \pmod { p } } .
$$

This gives $\pmb q$ ! as an explicit solution to the congruence $x ^ { 2 } + 1 \equiv 0$ (mod p) when $p \equiv 1 { \pmod { 4 } } .$ and it shows that $q ! \equiv \pm 1 { \pmod { p } }$ if $p \equiv 3$ (mod 4). No simple general rule is known for determining the sign.

10.If $p$ is odd, $p > 1$ , prove that

$$
1 ^ { 2 } 3 ^ { 2 } 5 ^ { 2 } \cdot \cdot \cdot ( p - 2 ) ^ { 2 } \equiv \big ( - 1 ) ^ { ( p + 1 ) / 2 } { \pmod { p } }
$$

and

$$
2 ^ { 2 } 4 ^ { 2 } 6 ^ { 2 } \cdot \cdot \cdot ( p - 1 ) ^ { 2 } \equiv \big ( - 1 ) ^ { ( p + 1 ) / 2 } \ \big ( \mathrm { m o d } \ p \big ) .
$$

11. Let $p$ be a prime, $p \geq 5$ , and write

$$
1 + { \frac { 1 } { 2 } } + { \frac { 1 } { 3 } } + \cdots + { \frac { 1 } { p } } = { \frac { r } { p s } } .
$$

Prove that $p ^ { 3 } | ( r - s )$

12. If $p$ is a prime, prove that

$$
{ \binom { n } { p } } \equiv \left[ { \frac { n } { p } } \right] { \pmod { p } } .
$$

Also, if $p ^ { \alpha } | [ n / p ]$ prove that

$$
p ^ { \alpha } | \binom { n } { p } .
$$

13. Let $a , b , n$ be positive integers such that $n$ divides $a ^ { n } - b ^ { n }$ . Prove that $n$ also divides $( a ^ { n } - b ^ { n } ) / ( a - b ) .$

14. Let $a , b$ , and $x _ { 0 }$ be positive integers and defi ne

$$
x _ { n } = a x _ { n - 1 } + b \quad { \mathrm { f o r ~ } } n = 1 , 2 , \ldots
$$

Prove that not all the $x _ { n }$ can be primes.

15. Let $n , \ r , \ a$ denote positive integers. The congruence ${ n ^ { 2 } } \equiv n$ (mod $1 0 ^ { a }$ implies $n ^ { \star } \equiv n$ (mod $1 0 ^ { a } )$ for all $r$ . Find all values of $\boldsymbol { r }$ such that $n ^ { \prime } \equiv n$ (mod $1 0 ^ { a } ,$ implies ${ n ^ { 2 } } \equiv n$ (mod $1 0 ^ { \alpha }$

16. Let $n , a , d$ be given integers with $( a , d ) = 1$ . Prove that there exists an integer m such that $m \equiv a$ (mod $d$ and $( m , n ) = 1$

17. Let $f$ be an integer-valued arithmetical function such that

$$
f ( m + n ) \equiv f ( n ) { \pmod { m } }
$$

for all $m \geq 1$ , $n \geq 1 .$ Let $g ( n )$ be the number of values (including repetitions) of $f ( 1 ) , f ( 2 ) , \ldots , f ( n _ { \cdot }$ divisible by ${ \mathfrak { n } } _ { \mathfrak { s } }$ and let $h ( n )$ be the number of these values relatively prime to n. Prove that

$$
h ( n ) = n \sum _ { d | n } \mu ( d ) { \frac { g ( d ) } { d } } .
$$

18. Given an odd integer $n > 3$ let $k$ and $t$ be the smallest positive integers such that both $k n + 1$ and tn are squares. Prove that $n$ is prime if, and only if, both $k$ and $t$ are greater than $n / 4$

19. Prove that each member of the set of $n - 1$ consecutive integers

$$
n ! + 2 , n ! + 3 , \ldots , n ! + n
$$

is divisible by a prime which does not divide any other member of the set.

20. Prove that for any positive integers $\pmb { n }$ and $k$ , there exists a set of n consecutive integers such that each member of this set is divisible by $k$ distinct prime factors no one of which divides any other member of the set.

21. Let $n$ be a positive integer which is not a square. Prove that for every integer $^ { a }$ relatively prime to $n$ there exist integers $\boldsymbol { x }$ and $y$ satisfying

$$
a x \equiv y { \pmod { n } } \quad { \mathrm { w i t h ~ } } 0 < x < { \sqrt { n } } { \mathrm { ~ a n d ~ } } 0 < | y | < { \sqrt { n } } .
$$

22. Let $p$ be a prime, $p \equiv 1 { \pmod { 4 } } .$ let $q = ( p - 1 ) / 2$ , and let $a = q !$ .

(a) Prove that there exist positive integers $\boldsymbol { x }$ and $y$ satisfying $0 < x < { \sqrt { p } }$ and $0 < y < { \sqrt { p } }$ such that

$$
a ^ { 2 } x ^ { 2 } - y ^ { 2 } \equiv 0 { \pmod { p } } .
$$

(b) For the $x$ and $y$ in part (a), prove that $p = x ^ { 2 } + y ^ { 2 }$ . This shows that every prime $p \equiv 1$ (mod 4) is the sum of two squares.

(c) Prove that no prime $p \equiv 3$ (mod 4) is the sum of two squares.

# Finite Abelian Groups and Their Characters 6

# 6.1 Definitions

In Chapter 2 we had occasion to mention groups but made no essential use of their properties. Now we wish to discuss some elementary aspects of group theory in more detail. In Chapter 7 our discussion of Dirichlet's theorem on primes in arithmetical progressions will require a knowledge of certain arithmetical functions called Dirichlet characters. Although the study of Dirichlet characters can be undertaken without any knowledge of groups, the introduction of a minimal amount of group theory places the theory of Dirichlet characters in a more natural setting and simplifes some of the discussion.

Definition Postulates for a group. A group $\pmb { G }$ is a nonempty set of elements together with a binary operation, which we denote by ·, such that the following postulates are satisfied :

(a) Closure. For every $a$ and $b$ in $\pmb { G }$ ,d $a \cdot b$ is also in $\pmb { G }$   
(b) Associativity. For every $a , b , c$ in $\pmb { G }$ we have $( a \cdot b ) \cdot c = a \cdot ( b \cdot c ) .$ id   
(c) Existence of identity. There is a unique element $e$ in $G$ , called the identity, such that $a \cdot e = e \cdot a = a$ for every $a$ in $\pmb { G }$   
(d) Existence of inverses. For every $a$ in $\pmb { G }$ there is a unique element $b$ in $\pmb { G }$ such that $a \cdot b = b \cdot a = e$ . This $b$ is denoted by $a ^ { - 1 }$ and is called the inverse of $a$

Note. We usually omit the dot and write ab for $a \cdot b$

Defnition Abelian group. A group $\pmb { G }$ is calied abelian if every pair of elements commute; that is, if $a b = b a$ for all $a$ and $b$ in $\pmb { G }$

6: Finite abelian groups and their characters

Definition Finite group. A group $\pmb { G }$ is called finite if $\pmb { G }$ is a finite set. In this case the number of elements in $G$ is called the order of $G$ and is denoted by $| G |$

Definition Subgroup. A nonempty subset $\pmb { G } ^ { \prime }$ of a group $G$ which is itself a group, under the same operation, is called·a subgroup of $\pmb { G }$

# 6.2 Examples of groups and subgroups

ExAmPLE 1 Trivial subgroups. Every group $\pmb { G }$ has at least two subgroups, $\pmb { G }$ itself and the set $\{ e \}$ consisting of the identity element alone.

ExAmPLe 2 Integers under addition. The set of all integers is an abelian group with $+$ as the operation and 0 as the identity. The inverse of $\pmb { n }$ is $- \pmb { n }$

ExAmPLE 3 Complex numbers under multiplication. The set of all non-zero complex numbers is an abelian group with ordinary multiplication of complex numbers as the operation and 1 as the identity. The inverse of $z$ is the reciprocal $1 / z$ . The set of all complex numbers of absolute value I is a subgroup.

ExAmPLE 4 The nth roots of unity. The groups in Examples 2 and 3 are infinite groups. An example of a finite group is the set $\{ 1 , \varepsilon , \varepsilon ^ { 2 } , \ldots , \varepsilon ^ { n - 1 } \} _ { \mathrm { { ; } } }$ , where $\varepsilon = e ^ { 2 \pi i / n }$ and the operation $\cdot$ is ordinary multiplication of complex numbers. This group, of order $\pmb { n }$ , is called the group of nth roots of unity. It is a subgroup of both groups in Example 3.

# 6.3 Elementary properties of groups

The following elementary theorems concern an arbitrary group $\pmb { G }$ . Unless otherwise stated, $\pmb { G }$ is not required to be abelian nor finite.

Theorem 6.1 Cancellation laws. If elements $a , b , c$ in $G$ satisfy

$$
a c = b c o r c a = c b ,
$$

then $a = b$

ProoF. In the first case multiply each member on the right by $c ^ { - 1 }$ and use associativity. In the second case multiply on the left by $c ^ { - 1 }$ - □

Theorem 6.2 Properties of inverses. In any group $\pmb { G }$ we have:

(a) $e ^ { - 1 } = e$   
(b) For every a in $G$ $( a ^ { - 1 } ) ^ { - 1 } = a .$ (id:)   
(c) For all a and $b$ in $G , ( a b ) ^ { - 1 } = b ^ { - 1 } a ^ { - 1 }$ . (Note reversal of order.)   
(d) For all $a$ and $b$ in $G$ the equation $a x = b$ has the unique solution $x =$ $a ^ { - 1 } b$ ; the equation $y a = b$ has the unique solution $y = b a ^ { - 1 }$ .

PROOF.

(a) Since $e e = e e ^ { - 1 }$ we cancel $e$ to obtain $e = e ^ { - 1 }$ . (b) Since $a a ^ { - 1 } = e$ and inverses are unique, $\pmb { a }$ is the inverse of $a ^ { - 1 }$ (c) By associativity we have

$$
( a b ) ( b ^ { - 1 } a ^ { - 1 } ) = a ( b b ^ { - 1 } ) a ^ { - 1 } = a e a ^ { - 1 } = a a ^ { - 1 } = e
$$

so $b ^ { - 1 } a ^ { - 1 }$ is the inverse of ab.

(d) Again by associativity we have

$$
a ( a ^ { - 1 } b ) = ( a a ^ { - 1 } ) b = b \qquad { \mathrm { a n d ~ } } ( b a ^ { - 1 } ) a = b ( a ^ { - 1 } a ) = b .
$$

The solutions are unique because of the cancellation laws.

Definition Powers of an element. If $a \in G$ we define $a ^ { n }$ for any integer $\pmb { n }$ by the following relations:

$$
a ^ { 0 } = e , \qquad a ^ { n } = a a ^ { n - 1 } , \qquad a ^ { - n } = ( a ^ { - 1 } ) ^ { n } \quad \mathrm { f o r ~ } n > 0 .
$$

The following laws of exponents can be proved by induction. We omit the proofs.

Theorem 6.3 If $\ b { a } \in \ b { G }$ , any two powers of a commute, and for all integers m and $\pmb { n }$ we have

$$
a ^ { m } a ^ { n } = a ^ { m + n } = a ^ { n } a ^ { m } a { n } d ( a ^ { m } ) ^ { n } = a ^ { m n } = ( a ^ { n } ) ^ { m } .
$$

Moreover, if a and $b$ commute we have

$$
a ^ { n } b ^ { n } = ( a b ) ^ { n } .
$$

Theorem ${ \bf 6 . 4 }$ Subgroup criterion. $I f G ^ { \prime }$ is a nonempty subset of a group $G _ { \ast }$ , then $G ^ { \prime }$ is a subgroup $i f ,$ and only if, $G ^ { \prime }$ satisfies group postulates (a) and (d):

(a) Closure: If a, $b \in G ^ { \prime }$ ,then $a b \in G ^ { \prime }$ (d) Existence of inverse. If $a \in G ^ { \prime }$ , then $\ b { a } ^ { - 1 } \in \ b { G } ^ { \prime }$ .

PRooF. Every subgroup $\pmb { G } ^ { \prime }$ certainly has these properties. Conversely, if $\mathbf { G } ^ { \prime }$ satisfies (a) and (d) it is easy to show that $\pmb { G } ^ { \prime }$ also satisfies postulates (b) and (c). Postulate (b), associativity, holds in $G ^ { \prime }$ because it holds for all elements in $G$ To prove that (c) holds in $\pmb { G } ^ { \prime }$ we note that there is an element $\pmb { a }$ in $\pmb { G } ^ { \prime }$ (since $\pmb { G } ^ { \prime }$ is nonempty) whose inverse $\boldsymbol { a } ^ { - 1 } \in G ^ { \prime }$ (by (d)) hence $a a ^ { - 1 } \in G ^ { \prime }$ by (a). But $a a ^ { - 1 }$ ${ \bf \Gamma } = e \ s _ { 0 } e \in G ^ { \prime }$ , □

# 6.4 Construction of subgroups

A subgroup of a given group $\pmb { G }$ can always be constructed by choosing any element $\pmb { a }$ in $\pmb { G }$ and forming the set of all its powers $a ^ { n } , n = 0 , \pm 1 , \pm 2 , . . .$ This set clearly satisfies postulates (a) and (d) so is a subgroup of $\pmb { G }$ . It is called the cyclic subgroup generated by $\pmb { a }$ and is denoted by $\langle a \rangle$

6: Finite abelian groups and their characters

Note that $\langle a \rangle$ is abelian, even if $G$ is not. If $a ^ { n } = e$ for some positive integer $\pmb { n }$ there will be a smallest $n > 0$ with this property and the subgroup $\langle a \rangle$ will be a finite group of order $\pmb { n }$ ,

$$
\langle a \rangle = \{ a , a ^ { 2 } , \ldots , a ^ { n - 1 } , a ^ { n } = e \} .
$$

The integer $\pmb { n }$ is also called the order of the element a. An example of a cyclic subgroup of order $n$ is the group of nth roots of unity mentioned in Section 6.2.

The next theorem shows that every element of a finite group has finite order.

Theorem 6.5 If $\textbf { G }$ is finite and $a \in G ,$ then there is a positive integer $n \leq | G |$ such that $a ^ { n } = e$

PROOF. Let $g = | G |$ . Then at least two of the following $g + 1$ elements of $\textbf { G }$ must be equal :

$$
e , a , a ^ { 2 } , \ldots , a ^ { g } .
$$

Suppose that $\boldsymbol { a } ^ { r } = \boldsymbol { a } ^ { s }$ where $0 \leq s < r \leq g .$ Then we have

$$
e = a ^ { r } ( a ^ { s } ) ^ { - 1 } = a ^ { r - s } .
$$

This proves the theorem with $n = r - s .$

As noted in Section 6.2, every group $\textbf { G }$ has two trivial subgroups, $\{ e \}$ and $\textbf { G }$ itself. When $\textbf { G }$ is a finite abelian group there is a simple process for constructing an increasing collection of subgroups intermediate to $\{ e \}$ and $G$ The process, which will be described in Theorem 6.8, s based on the following observation.

If $\pmb { G } ^ { \prime }$ is a subgroup of a fi nite group $G _ { i }$ , then for any element $a$ in $G$ there is an integer $\pmb { n }$ such that $a ^ { n } \in G ^ { \prime }$ . If $a$ is already in $\mathbf { G } ^ { \prime }$ we simply take $n = 1$ If $a \notin G ^ { \prime }$ we can take $\pmb { n }$ to be the order of $a$ since $a ^ { n } = e \in G ^ { \prime }$ . However, there may be a smaller positive power of $a$ which lies in $G ^ { \prime }$ . By the well-ordering principle there is a smallest positive integer $\pmb { n }$ such that $a ^ { n } \in G ^ { \prime }$ . We call this integer the indicator of $a$ in $\pmb { G } ^ { \prime }$

Theorem 6.6 Let $G ^ { \prime }$ be a subgroup of a finite abelian group $G$ , where $G ^ { \prime } \neq G$ Choose an element a in $G , a \notin G ^ { \prime }$ , and let $h$ be the indicator of $a$ in $\mathbf { \vec { G } } ^ { \prime }$ . Then the set of products

$$
G ^ { \prime \prime } = \{ x a ^ { k } ; x \in G ^ { \prime } { \mathrm { ~ } } a n d { \mathrm { ~ } } k = 0 , 1 , 2 , \ldots , h - 1 \}
$$

is a subgroup of $\pmb { G }$ which contains $\mathbf { G } ^ { \prime }$ . Moreover, the order of $G ^ { \prime \prime }$ is $h$ times that of $\mathbf { G } ^ { \prime }$

$$
\left| G ^ { \prime \prime } \right| = h \left| G ^ { \prime } \right| .
$$

PROOF. To show $G ^ { \prime \prime }$ is a subgroup we use the subgroup criterion. First we test closure. Choose two elements in $G ^ { \prime \prime }$ , say $x a ^ { k }$ and $y a ^ { j } ,$ where x, $y \in G ^ { \prime }$ and $0 \leq k < h , 0 \leq j < h .$ Since $G$ is abelian the product of the elements is

$$
( x y ) a ^ { k + j } .
$$

Now $k + j = q h + r$ where $0 \leq r < h$ Hence

$$
a ^ { k + j } = a ^ { q h + r } = a ^ { q h } a ^ { r } = z a ^ { r } ,
$$

where $z = a ^ { q h } = ( a ^ { h } ) ^ { q } \in G ^ { \prime }$ since $a ^ { n } \in G ^ { \prime }$ . Therefore the element in (1) is $( x y z ) a ^ { r } = w a ^ { r }$ where $w \in G ^ { \prime }$ and $0 \leq r < h .$ . This proves that $\mathbf { G } ^ { \prime \prime }$ satisfies the closure postulate.

Next we show that the inverse of each element in $G ^ { \prime \prime }$ is also in $G ^ { \prime \prime }$ . Choose an arbitrary element in $\mathbf { \vec { { \mathbf { u } } } } ^ { \prime \prime }$ , say $x a ^ { k }$ If $k = 0$ then the inverse is $x ^ { - 1 }$ which is in $G ^ { \prime \prime }$ . If $0 < k < h$ the inverse is the element

$$
y a ^ { h - k } , \mathrm { w h e r e } y = x ^ { - 1 } ( a ^ { h } ) ^ { - 1 } ,
$$

which again is in $G ^ { \prime \prime }$ . This shows that $G ^ { \prime \prime }$ is indeed a subgroup of $G$ .Clearly $\mathbf { G } ^ { \prime \prime }$ contains $\mathbf { \vec { G } } ^ { \prime }$

Next we determine the order of $G ^ { \prime \prime }$ . Let $m = | G ^ { \prime } |$ . As $_ { x }$ runs through the m elements of $\mathbf { G } ^ { \prime }$ and $k$ runs through the $h$ integers $0 , 1 , 2 , \ldots , h - 1$ we obtain mh products $x a ^ { k }$ . If we show that all these are distinct, then $G ^ { \prime \prime }$ has order mh. Consider two of these products, say $x a ^ { k }$ and $y a ^ { j }$ and assume that

$$
x a ^ { k } = y a ^ { j } \quad { \mathrm { w i t h ~ } } 0 \leq j \leq k < h .
$$

Then $\boldsymbol { a } ^ { k - j } = \boldsymbol { x } ^ { - 1 } \boldsymbol { y }$ and $0 \leq k - j < h .$ Since $x ^ { - 1 } y \in G ^ { \prime }$ we must have $a ^ { k - j }$ in $\pmb { G } ^ { \prime }$ so $k = j$ and hence $x = y$ . This completes the proof. □

# 6.5 Characters of finite abelian groups

Definition Let $\textbf { G }$ be an arbitrary group. A complex-valued function $f$ defined on $G$ is called a character of $\textbf { G }$ if $f$ has the multiplicative property

$$
f ( a b ) = f ( a ) f ( b )
$$

for all $a , b$ in $\textbf { G }$ , and if $f ( c ) \neq 0$ for some $c$ in $G$

Theorem 6.7 If f is a character of a finite group $\textbf { G }$ with identity element $e$ , then $f ( e ) = 1$ and each function value $f ( a )$ is a root of unity. Infact, if $\mathbf { \boldsymbol { a } } ^ { n } = \mathbf { \boldsymbol { e } }$ then $f ( a ) ^ { n } = 1$

PROOF. Choose $c$ in $\pmb { G }$ such that $f ( c ) \neq 0 .$ Since $c e = c$ we have

$$
f ( c ) f ( e ) = f ( c )
$$

so $f ( e ) = 1 { \mathrm { , } }$ If $a ^ { n } = e$ then $f ( a ) ^ { n } = f ( a ^ { n } ) = f ( e ) = 1 .$

6: Finite abelian groups and their characters

ExamPLE Every group G has at least one character, namely the function which is identically 1 on G. This is called the principal character. The next theorem tells us that there are further characters if $G$ is abelian and has finite order $> 1$ .

Theorem 6.8 A finite abelian group Gof order n has exactly n distinct characters.

Proor. In Theorem 6.6 we learned how to construct, from a given subgroup $G ^ { \prime } \neq G$ , a new subgroup $G ^ { \prime \prime }$ containing $G ^ { \prime }$ and at least one more element $\pmb { a }$ not in $\mathbf { G } ^ { \prime }$ . We use the symbol $\langle G ^ { \prime } ; a \rangle$ to denote the subgroup $G ^ { \prime \prime }$ constructed in Theorem 6.6. Thus

$$
\left. G ^ { \prime } ; a \right. = \left\{ x a ^ { k } ; x \in G ^ { \prime } { \mathrm { ~ a n d ~ } } 0 \leq k < h \right\}
$$

where $h$ is the indicator of $\pmb { a }$ in $G ^ { \prime }$ .

Now we apply this construction repeatedly, starting with the subgroup $\{ e \}$ which we denote by $G _ { 1 }$ . If $G _ { 1 } \neq G$ we let ${ \pmb a } _ { 1 }$ be an element of $\textbf { G }$ other than $e$ and define $\begin{array} { r } { G _ { 2 } = \langle G _ { 1 } ; a _ { 1 } \rangle } \end{array}$ . If $G _ { 2 } \neq G$ let ${ \pmb a } _ { 2 }$ be an element of $\textbf { G }$ which is not in $G _ { 2 }$ and define $G _ { 3 } = \langle G _ { 2 } ; a _ { 2 } \rangle$ . Continue the process to obtain a finite set of elements ${ \pmb a } _ { 1 }$ $\mathbf { \Phi } _ { 1 } , \mathbf { \Phi } _ { a _ { 2 } } , \dots , \mathbf { \Phi } _ { a _ { t } }$ and a corresponding set of subgroups $G _ { 1 }$ , $G _ { 2 } , \ldots , G _ { t + 1 }$ such that

$$
\boldsymbol { G } _ { r + 1 } = \langle \boldsymbol { G } _ { r } ; \boldsymbol { a } _ { r } \rangle
$$

with

$$
G _ { 1 } \subset G _ { 2 } \subset \cdot \cdot \cdot \subset G _ { t + 1 } = G .
$$

The process must terminate in a finite number of steps since the given group $\textbf { G }$ is finite and each $G _ { r + 1 }$ contains more elements than its predecessor $G _ { r }$ - We consider such a chain of subgroups and prove the theorem by induction, showing that if it is true for $G _ { r }$ it must also be true for $G _ { r + 1 }$

It is clear that there is only one character for $G _ { 1 }$ , namely the function which is identically 1. Assume, therefore, that $G _ { r }$ has order $m$ and that there are exactly $m$ distinct characters for $G _ { r }$ . Consider $G _ { r + 1 } = \langle G _ { r } ; a _ { r } \rangle$ and let $h$ be the indicator of $a _ { r }$ in $G _ { r }$ , that is, the smallest positive integer such that ${ \mathfrak { a } } _ { r } ^ { \ h } \in G _ { r }$ . We shall show that there are exactly $h$ different ways to extend each character of $G _ { r }$ to obtain a character of $G _ { r + 1 }$ , and that each character of $G _ { r + 1 }$ is the extension of some character of $G _ { r }$ . This will prove that $G _ { r + 1 }$ has exactly mh characters, and since mh is also the order of $G _ { r + 1 }$ this will prove the theorem by induction on $r$

A typical element in $G _ { r + 1 }$ has the form

$$
x a _ { r } ^ { \ k } , \quad { \mathrm { w h e r e ~ } } x \in G _ { r } { \mathrm { ~ a n d ~ } } 0 \leq k < h .
$$

Suppose for the moment that it is possible to extend a character $f$ of $G _ { r }$ to $G _ { r + 1 }$ . Call this extension $\tilde { f }$ and let us see what can be said about $\tilde { f } ( x a _ { r } ^ { \ k } )$ . The multiplicative property requires

$$
\tilde { f } ( x a _ { r } ^ { \ k } ) = \tilde { f } ( x ) \tilde { f } ( a _ { r } ) ^ { k } .
$$

But $x \in G _ { r } \operatorname { s o } { \tilde { f } } ( x ) = f ( x )$ and the foregoing equation implies

$$
\tilde { f } ( x a _ { r } { } ^ { k } ) = f ( x ) \tilde { f } ( a _ { r } ) ^ { k } .
$$

This tells us that $\tilde { f } ( x a _ { r } ^ { \ k } )$ is determined as soon as $\tilde { f } ( a _ { r } )$ is known.

What are the possible values for $\tilde { f } ( a _ { r } ) \smash { : }$ Let $c = { a _ { r } } ^ { h }$ Since $c \in G _ { r }$ we have $\tilde { f } ( c ) = f ( c ) ,$ and since $\tilde { f }$ is multiplicative we also ha ve $\tilde { f } ( c ) = \tilde { f } ( a _ { r } ) ^ { h }$ Hence

$$
\tilde { f } ( a _ { r } ) ^ { h } = f ( c ) ,
$$

so $\tilde { f } ( a _ { r } )$ is one of the hth roots of $f ( c ) .$ Therefore there are at most $h$ choices for $\tilde { f } ( a _ { r } )$

These observations tell us how to define $\tilde { f } . \tilde { \mathrm { I f } } f$ is a given character of $G _ { r }$ , we choose one of the hth roots of $f ( c ) ,$ where $c = { a _ { r } } ^ { h }$ , and define $\tilde { f } ( a _ { r } )$ to be this root. Then we define f on the rest of $G _ { r + 1 }$ by the equation

$$
\tilde { f } ( x a _ { r } ^ { \ k } ) = f ( x ) \tilde { f } ( a _ { r } ) ^ { k } .
$$

The $h$ choices for $\tilde { f } ( a _ { r } )$ are all different so this gives us $h$ different ways to define $\tilde { f } ( x a _ { r } ^ { \ k } )$ . Now we verify that the function $\tilde { f } \mathbf { s } \mathbf { o }$ defi ned has the required multiplicative property. From (2) we find

$$
\begin{array} { c l l } { { \tilde { f } ( x a _ { r } { } ^ { k } \cdot y a _ { r } { } ^ { j } ) = \tilde { f } ( x y \cdot a _ { r } { } ^ { k + j } ) = f ( x y ) \tilde { f } ( a _ { r } ) { } ^ { k + j } } } & { { } } & { { } } \\ { { } } & { { = f ( x ) f ( y ) \tilde { f } ( a _ { r } ) ^ { k } \tilde { f } ( a _ { r } ) ^ { j } } } & { { } } \\ { { } } & { { = \tilde { f } ( x a _ { r } { } ^ { k } ) \tilde { f } ( y a _ { r } { } ^ { j } ) , } } & { { } } \end{array}
$$

$\operatorname { s o } \tilde { f }$ is a character of $G _ { r + 1 }$ . No two of the extensions $\tilde { f }$ and $\tilde { \pmb g }$ can be identical on $G _ { r + 1 }$ because the functions $f$ and $\pmb { g }$ which they extend would then be identical on $G _ { r }$ . Therefore each of the m characters of $G _ { r }$ can be extended in $h$ different ways to produce a character of $G _ { r + 1 }$ . Moreover, if $\varphi$ is any character of $G _ { r + 1 }$ then its restriction to $G _ { r }$ is also a character of $G _ { r }$ , so the extension process produces all the characters of $G _ { r + 1 }$ . This completes the proof.  □

# 6.6 The character group

In this section $G$ is a finite abelian group of order $\pmb { n }$ . The principal character of $G$ is denoted by $f _ { 1 }$ . The others, denoted by $f _ { 2 } , f _ { 3 } , \ldots , f _ { n }$ , are called nonprincipal characters. They have the property that $f ( a ) \neq 1$ for some $a$ in $G$

Theorem 6.9 If multiplication of characters is defined by the relation

$$
( f _ { i } f _ { j } ) ( a ) = f _ { i } ( a ) f _ { j } ( a )
$$

for each $a$ in $G$ , then the set of characters of $G$ forms an abelian group of order n. We denote this group by $\hat { G }$ The identity element of $\hat { G }$ is the principal character $f _ { 1 }$ . The inverse of fi is the reciprocal $1 / f _ { i }$ .

Proor. Verification of the group postulates is a straightforward exercise and we omit the details.

6: Finite abelian groups and their characters

Note. For each character $f$ we have $| f ( a ) \} = 1$ . Hence the reciprocal $1 / f ( a )$ is equal to the complex conjugate ${ \overline { { f ( a ) } } } ,$ Thus, the function $\bar { f }$ defi ned by ${ \ddot { f } } ( a ) = { \overline { { f ( a ) } } }$ is also a character of $G$ . Moreover, we have

$$
\bar { f } ( a ) = \frac { 1 } { f ( a ) } = f ( a ^ { - 1 } )
$$

for every $a$ in $G$

# 6.7 The orthogonality relations for characters

Let $G$ be a finite abelian-group of order $\pmb { n }$ with elements $a _ { 1 } , a _ { 2 } , \ldots , a _ { n } .$ , and let $f _ { 1 } , f _ { 2 } , \ldots , f _ { n }$ be the characters of $G$ ,with $f _ { 1 }$ the principal character.

Notation We denote by $A = A ( G )$ the $n \times n$ matrix $[ a _ { i j } ]$ whose element $a _ { i j }$ in the ith row and jth column is

$$
a _ { i j } = f _ { i } ( a _ { j } ) .
$$

We will prove that the matrix $\pmb { A }$ has an inverse and then use this fact to deduce the so-called orthogonality relations for characters. First we determine the sum of the entries in each row of $A$ -

Theorem 6.10 The sum of the entries in the ith row of A is given by

$$
\sum _ { r = 1 } ^ { n } f _ { i } ( a _ { r } ) = \left\{ \begin{array} { l l } { n } & { i f f _ { i } i s t h e p r i n c i p a l c h a r a c t e r ( i = 1 ) , } \\ { 0 } & { o t h e r w i s e . } \end{array} \right.
$$

PROOF. Let $s$ denote the sum in question. $\mathbb { H } f _ { i } = f _ { 1 }$ each term of the sum is 1 and $S = n ,$ If $f _ { i } \neq f _ { 1 }$ , there is an element $b$ in $G$ for which $f _ { i } ( b ) \neq 1$ . As $a _ { r }$ runs through the elements of $G$ so does the product ba,. Hence

$$
S = \sum _ { r = 1 } ^ { n } f _ { i } ( b a _ { r } ) = f _ { i } ( b ) \sum _ { r = 1 } ^ { n } f _ { i } ( a _ { r } ) = f _ { i } ( b ) S .
$$

Therefore $S ( 1 - f _ { i } ( b ) ) = 0 .$ Since $f _ { i } ( b ) \neq 1$ it follows that $s = 0$

Now we use this theorem to show that $A$ has an inverse.

Theorem 6.11 Let $A ^ { * }$ denote the conjugate transpose of the matrix A. Then we have

$$
A A ^ { * } = n I ,
$$

where $\pmb { I }$ is the $n \times n$ identity matrix. Hence $n ^ { - 1 } A ^ { * }$ is the inverse of A.

PROOF. Let $B = A A ^ { * }$ . The entry $b _ { i j }$ in the ith row and jth column of $B$ is given by

$$
b _ { i j } = \sum _ { r = 1 } ^ { n } f _ { i } ( a _ { r } ) { \bar { f } } _ { j } ( a _ { r } ) = \sum _ { r = 1 } ^ { n } ( f _ { i } { \bar { f } } _ { j } ) ( a _ { r } ) = \sum _ { r = 1 } ^ { n } f _ { k } ( a _ { r } ) ,
$$

where $f _ { k } = f _ { i } \bar { f } _ { j } = f _ { i } / f _ { j }$ . Now $f _ { i } / f _ { j } = f _ { 1 }$ if, and only if, $i = j ,$ Hence by Theorem 6.10 we have

$$
b _ { i j } = { \left\{ \begin{array} { l l } { n } & { { \mathrm { ~ i f ~ } } i = j , } \\ { 0 } & { { \mathrm { ~ i f ~ } } i \neq j . } \end{array} \right. }
$$

In other words, $B = n I$ -

Next we use the fact that a matrix commutes with its inverse to deduce the orthogonality relations for characters.

Theorem 6.12 Orthogonality relations for characters. We have

$$
\sum _ { r = 1 } ^ { n } { \bar { f } } _ { r } ( a _ { i } ) f _ { r } ( a _ { j } ) = { \left\{ \begin{array} { l l } { n } & { i f \ a _ { i } = a _ { j } , } \\ { 0 } & { i f \ a _ { i } \not = a _ { j } . } \end{array} \right. }
$$

PRooF. The relation $A A ^ { * } = n I$ implies $A ^ { * } A = n I$ . But the element in the ith row and jth column of $A ^ { * } A$ is the sum on the left of (3). This completes the proof. □

Note. Since $\bar { f } _ { r } ( a _ { i } ) = f _ { r } ( a _ { i } ) ^ { - 1 } = f _ { r } ( a _ { i } ^ { - 1 } ) .$ the general term of the sum in (3) is equal to $f _ { r } ( a _ { i } ^ { \mathrm { ~ - ~ } 1 } ) f _ { r } ( a _ { j } ) = f _ { r } ( a _ { i } ^ { \mathrm { ~ - ~ } 1 } a _ { j } )$ . Therefore the orthogonality relations can also be expressed as follows:

$$
\sum _ { r = 1 } ^ { n } f _ { r } ( a _ { i } ^ { \scriptscriptstyle - 1 } a _ { j } ) = { \left\{ \begin{array} { l l } { n } & { { \mathrm { i f } } a _ { i } = a _ { j } , } \\ { 0 } & { { \mathrm { i f } } a _ { i } \not = a _ { j } . } \end{array} \right. }
$$

When $a _ { i }$ is the identity element $e$ we obtain:

Theorem 6.13 The sum of the entries in the jth column of $A$ is given by

$$
\sum _ { r = 1 } ^ { n } f _ { r } ( a _ { j } ) = \left\{ \begin{array} { l l } { n } & { i f ~ a _ { j } = e , } \\ { 0 } & { o t h e r w i s e . } \end{array} \right.
$$

# 6.8 Dirichlet characters

The foregoing discussion dealt with characters of an arbitrary finite abelian group $G$ . Now we specialize $\pmb { G }$ to be the group of reduced residue classes modulo a fixed positive integer $k$ . First we prove that these residue classes do, indeed, form a group if multiplication is suitably defined.

We recall that a reduced residue system modulo $k$ is a set of $\varphi ( k )$ integers $\{ a _ { 1 } , a _ { 2 } , \ldots , a _ { \varphi ( k ) } \}$ incongruent modulo $k _ { i }$ , each of which is relatively prime to

6: Finite abelian groups and their characters $k .$ For each integer $a$ the corresponding residue class $\hat { a }$ is the set of all integers congruent to $a$ modulo $k$ :

$$
\hat { a } = \{ { \bf x } \colon { \bf x } \equiv a ~ ( { \bf m o d } ~ k ) \} .
$$

Multiplication of residue classes is defined by the relation

$$
{ \widehat { \pmb { a } } } \cdot { \widehat { \pmb { b } } } = { \widehat { \pmb { a } } } { \widehat { \pmb { b } } } .
$$

That is, the product of two residue classes $\hat { a }$ and $\hat { b }$ is the residue class of the product ab.

Theorem 6.14 With multiplication defined by (5), the set of reduced residue classes modulo $k$ is $\pmb { a }$ finite abelian group of order $\varphi ( k )$ . The identity is the residue class 1. The inverse of $\hat { a }$ is the residue class $\hat { b }$ where $a b \equiv 1$ (mod $k )$

ProoF. The closure property is automatically satisfied because of the way multiplication of residue classes was defined. The class I is clearly the identity element. If $( a , k ) = 1$ there is a unique $b$ such that $a b \equiv 1$ (mod $k$ ). Hence the inverse of $\hat { a }$ is $\widehat { b }$ Finally, it is clear that the group is abelian and that its order is $\varphi ( k )$ - □

Definition Dirichlet characters. Let $G$ be the group of reduced residue classes modulo $k$ . Corresponding to each character $f$ of $G$ we define an arithmetical function ${ \chi = \chi _ { f } }$ as follows:

$$
\begin{array} { l l } { { \chi ( n ) = f ( \hat { n } ) } } & { { \mathrm { i f } ( n , k ) = 1 , } } \\ { { \chi ( n ) = 0 } } & { { \mathrm { i f } ( n , k ) > 1 . } } \end{array}
$$

The function $\mathbb { X }$ is called a Dirichlet character modulo $k$ . The principal character $\mathbb { \chi } _ { 1 }$ is that which has the properties

$$
\chi _ { 1 } ( n ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { ~ i f ~ } } ( n , k ) = 1 , } \\ { 0 } & { { \mathrm { ~ i f ~ } } ( n , k ) > 1 . } \end{array} \right. }
$$

Theorem 6.15 There are $\varphi ( k )$ distinct Dirichlet characters modulo $k$ , each of which is completely multiplicative and periodic with period $k$ . That is, we have

$$
\chi ( m n ) = \chi ( m ) \chi ( n ) f o r a l l m , n
$$

and

$$
\chi ( n + k ) = \chi ( n ) \quad f o r \ : a l l \ : n .
$$

Conversely, if $\chi$ is completely multiplicative and periodic with period $k ,$ and if $\chi ( n ) = 0$ if $( n , k ) > 1$ ,then $\chi$ is one of the Dirichlet characters mod $k$

PRooF. There are $\varphi ( k )$ characters $f$ for the group $G$ of reduced residue classes modulo $k$ , hence $\varphi ( k )$ characters $\chi _ { f }$ modulo $k$ . The multiplicative property (6) of $\chi _ { f }$ follows from that of $f$ when both $m$ and $\pmb { n }$ are relatively prime to $k$ If one of m or $\pmb { n }$ is not relatively prime to $k$ then neither is mn, hence both members of (6) are zero. The periodicity property follows from the fact that $\chi _ { f } ( n ) = f ( \hat { n } )$ and that $a \equiv b$ (mod $k$ ) implies $( a , k ) = ( b , k ) .$

To prove the converse we note that the function $f$ defined on the group $\pmb { G }$ by the equation

$$
f ( { \hat { n } } ) = \chi ( n ) \quad { \mathrm { i f ~ } } ( n , k ) = 1
$$

is a character of $G$ $\chi$ is a Dirichlet character mod $k$ -

ExAMPLE When $k = 1$ or $k = 2$ then $\varphi ( k ) = 1$ and the only Dirichlet character is the principal character $\mathbb { \chi } _ { 1 }$ .For $k \geq 3$ , there are at least two Dirichlet characters since $\varphi ( k ) \geq 2$ The following tables display all the Dirichlet characters for $k = 3$ ,4 and 5.

<table><tr><td rowspan="8">1 23 n</td><td></td><td>n 1</td><td>2</td><td>3</td><td>4 5</td></tr><tr><td></td><td>x₁(n) 1</td><td>1</td><td>1</td><td>1 0</td></tr><tr><td>1 2 34 n</td><td>x2(n) 1</td><td>-1</td><td>-1</td><td>1 0</td></tr><tr><td>x₁(n) 1 0 1 0 0</td><td>x3(n) 1</td><td>i</td><td>-i</td><td>-1 0</td></tr><tr><td>x2(n) 1 0 -1</td><td>x4(n) 1</td><td>-i</td><td>i -1</td><td>0</td></tr><tr><td>k = 3, φ(k) = 2 k = 4, φ(k) = 2</td><td></td><td>k = 5, φ(k) = 4</td><td></td><td></td></tr></table>

To fil these tables we use the fact that $\chi ( n ) ^ { \varphi ( k ) } = 1$ whenever $( n , k ) = 1$ , ${ \mathsf { s o } } \chi ( n )$ is a $\varphi ( k )$ th root of unity. We also note that if $\chi$ is a character mod $k$ so is the complex conjugate $\vec { \chi }$ This information sufi ces to complete the tables for $k = 3$ and $k = 4$

When $k = 5$ we have $\varphi ( 5 ) = 4$ so the possible values of $\chi ( n )$ are $\pm 1$ and $\pm i$ when $( n , 5 ) = 1$ . Also, $\chi ( 2 ) \chi ( 3 ) = \chi ( 6 ) = \chi ( 1 ) = 1$ sO $\chi ( 2 )$ and $\chi ( 3 )$ are reciprocals. Since $\chi ( 4 ) = \chi ( 2 ) ^ { 2 }$ this information suffices to fill the table for $k = 5$ . As a check we can use Theorems 6.10 and 6.13 which tell us that the sum of the entries is O in each row and column except for the fi rst. The following tables display all the Dirichlet characters mod 6 and 7.

$$
\small \begin{array} { c c c c c c c c c c c c c c } { \frac { n } { \gamma _ { 1 } ( n ) } } & { 1 } & { 2 } & { 3 } & { 4 } & { 5 } & { 6 } & { \frac { n } { \chi _ { 1 } ( n ) } } & { 2 } & { 3 } & { 4 } & { 5 } & { 6 } & { 7 } \\ { \frac { \gamma _ { 1 } ( n ) } { \chi _ { 1 } ( n ) } } & { 1 } & { 0 } & { 0 } & { 0 } & { 1 } & { 0 } & { \frac { \chi _ { 1 } ( n ) } { \chi _ { 1 } ( n ) } } & { 1 } & { 1 } & { 1 } & { 1 } & { 0 } \\ { \frac { \gamma _ { 2 } ( n ) } { k } } & { 1 } & { 0 } & { 0 } & { 0 } & { - 1 } & { 0 } & { \chi _ { 2 } ( n ) } & { 1 } & { 1 } & { - 1 } & { 1 } & { - 1 } & { - 1 } & { 0 } \\ & & { 6 } & { 6 , \varphi ( k ) } & { 2 } & & { \chi _ { 3 } ( n ) } & { 1 } & { \omega ^ { 2 } } & { \omega } & { - \omega } & { - \omega ^ { 2 } } & { - 1 } & { 0 } & { \omega = e ^ { n / 3 } } \\ & & & { \chi _ { 4 } ( n ) } & { 1 } & { \omega ^ { 2 } } & { - \omega } & { - \omega } & { \omega ^ { 2 } } & { 1 } & { 0 } & & & \\ & & { \chi _ { 5 } ( n ) } & { 1 } & { - \omega } & { \omega ^ { 2 } } & { \omega ^ { 2 } } & { - \omega } & { 1 } & { 0 } & & & \\ & & & { \chi _ { 6 } ( n ) } & { 1 } & { - \omega } & { - \omega ^ { 2 } } & { \omega ^ { 2 } } & { \omega } & { - 1 } & { 0 } & & \end{array}
$$

$$
k = 7 , \varphi ( k ) = 6
$$

6: Finite abelian groups and their characters

In our discussion of Dirichlet's theorem on primes in an arithmetic progression we shall make use of the follwing orthogonality relation for characters modulo $k$

Theorem 6.16 Let $\chi _ { 1 } , \ldots , \chi _ { \varphi ( k ) }$ denote the $\varphi ( k )$ Dirichlet characters modulo $k$ Let m and n be two integers, with $( n , k ) = 1$ . Then we have

$$
\sum _ { r = 1 } ^ { \varphi ( k ) } \chi _ { r } ( m ) \overline { { { \chi } } } _ { r } ( n ) = \left\{ \begin{array} { l l } { { \varphi ( k ) } } & { { i f m \equiv n ( \bmod k ) , } } \\ { { 0 } } & { { i f m \not \equiv n ( \bmod k ) . } } \end{array} \right.
$$

PROOF. If $( m , k ) = 1$ take $a _ { i } = { \hat { n } }$ and $a _ { j } = \hat { m }$ in the orthogonality relations of Theorem 6.12 and note that $\hat { m } = \hat { n }$ if, and only if, $m \equiv n$ (mod $k$ ). If $( m , k ) > 1$ each term in the sum vanishes and $m \not \equiv n { \pmod { k } }$ □

# 6.9 Sums involving Dirichlet characters

This section discusses certain sums which occur in the proof of Dirichlet's theorem on primes in arithmetical progressions.

The first theorem refers to a nonprincipal character x mod $k$ but the proof is also valid if $\chi$ is any arithmetical function that is periodic with period $k$ and has bounded partial sums.

Theorem 6.17 Let $\chi$ be any nonprincipal character modulo $k$ , and let $f$ be a nonnegative function which has $^ { a }$ continuous negative derivative $f ^ { \prime } ( x )$ for all $x \geq x _ { 0 }$ . Then if $y \ge x \ge x _ { 0 }$ we have

$$
\sum _ { x < n \leq y } \chi ( n ) f ( n ) = O ( f ( x ) ) .
$$

If, in addition, $f ( x )  0$ as $x \to \infty$ , then the infinite series

$$
\sum _ { n = 1 } ^ { \infty } \chi ( n ) f ( n )
$$

converges and we have, for $x \geq x _ { 0 }$ ,

$$
\sum _ { n \leq x } \chi ( n ) f ( n ) = \sum _ { n = 1 } ^ { \infty } \chi ( n ) f ( n ) + O ( f ( x ) ) .
$$

PRooF. Let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } \chi ( n ) . } \end{array}$ Since $\boldsymbol { \chi }$ is nonprincipal we have

$$
A ( k ) = \sum _ { n = 1 } ^ { k } \chi ( n ) = 0 .
$$

By periodicity it follo ws that $A ( n k ) = 0$ for $n = 2 , 3 , \ldots$ hence $| A ( x ) | < \varphi ( k )$ for all $x$ . In other words, $A ( x ) = O ( 1 )$

Now we use Abel's identity (Theorem 4.2) to express the sum in (7) as an integral. This gives us

$$
\begin{array} { r l } { \displaystyle \sum _ { x < n \leq y } \chi ( n ) f ( n ) = f ( y ) A ( y ) - f ( x ) A ( x ) - \displaystyle \int _ { x } ^ { y } A ( t ) f ^ { \prime } ( t ) d t } \\ { = { \cal O } ( f ( y ) ) + { \cal O } ( f ( x ) ) + { \cal O } \biggl ( \displaystyle \int _ { x } ^ { y } ( - f ^ { \prime } ( t ) ) d t \biggr ) = { \cal O } ( f ( x ) ) . } \end{array}
$$

This proves (7). If $f ( x )  0$ as $x \to \infty$ then (7) shows that the series

$$
\sum _ { n = 1 } ^ { \infty } \chi ( n ) f ( n )
$$

converges because of the Cauchy convergence criterion. To prove (8) we simply note that

$$
\sum _ { n = 1 } ^ { \infty } \chi ( n ) f ( n ) = \sum _ { n \leq x } \chi ( n ) f ( n ) + \operatorname* { l i m } _ { y \to \infty } \sum _ { x < n \leq y } \chi ( n ) f ( n ) .
$$

Because of (7) the limit on the right is $O ( f ( x ) )$ . This completes the proof.

Now weapplyTheorem 6.17 successively with $f ( x ) = 1 / x , f ( x ) = ( \log x ) / x ,$ and $f ( x ) = 1 / { \sqrt { x } }$ for $x \ge 1$ to obtain:

Theorem 6.18 If x is any nonprincipal character mod $k$ and if $x \ge 1$ we have

$$
\sum _ { n \leq x } { \frac { \chi ( n ) } { n } } = \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { n } } + O { \biggl ( } { \frac { 1 } { x } } { \biggr ) } ,
$$

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \log n } { n } } = \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) \log n } { n } } + O { \biggl ( } { \frac { \log x } { x } } { \biggr ) } ,
$$

$$
\sum _ { n \leq x } { \frac { \chi ( n ) } { \sqrt { n } } } = \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { \sqrt { n } } } + O { \biggl ( } { \frac { 1 } { \sqrt { x } } } { \biggr ) } .
$$

# 6.10 The nonvanishing of $L ( 1 , \chi )$ for real nonprincipal x

We denote by $L ( 1 , \chi )$ the sum of the series in (9). Thus,

$$
L ( 1 , \chi ) = \sum _ { n = 1 } ^ { \infty } \frac { \chi ( n ) } { n } .
$$

In the proof of Dirichlet's theorem we need to know that $L ( 1 , \chi ) \neq 0$ when $\chi$ is a nonprincipal character. We prove this here for real nonprincipal characters. First we consider the divisor sum of $\chi ( n )$

6: Finite abelian groups and their characters

Theorem 6.19 Let x be any real-valued character mod $k$ and let

$$
A ( n ) = \sum _ { d \mid n } \chi ( d ) .
$$

Then $A ( n ) \geq 0$ for all $n$ , and $A ( n ) \geq 1$ if $\pmb { n }$ is a square.

PRooF. For prime powers we have

$$
A ( p ^ { a } ) = \sum _ { t = 0 } ^ { a } \chi ( p ^ { t } ) = 1 + \sum _ { t = 1 } ^ { a } \chi ( p ) ^ { t } .
$$

Since $\mathbb { X }$ is real-valued the only possible values for $\chi ( p )$ are 0, 1 and −1. If $\chi ( p ) = 0$ then $A ( p ^ { a } ) = 1$ ; if $\chi ( p ) = 1$ then $A ( p ^ { a } ) = a + 1$ ; and if $\chi ( p ) = - 1$ then

$$
A ( p ^ { a } ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f ~ } } a { \mathrm { ~ i s ~ o d d , } } } \\ { 1 } & { { \mathrm { i f ~ } } a { \mathrm { ~ i s ~ e v e n . } } } \end{array} \right. }
$$

In any case, $A ( p ^ { a } ) \geq 1$ if $a$ is even.

Now if $n = { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { r } } ^ { a _ { r } }$ then $A ( n ) = A ( p _ { 1 } { } ^ { a _ { 1 } } ) \cdot \cdot \cdot A ( p _ { r } { } ^ { a _ { r } } )$ since $A$ is multiplicative. Each factor $A ( p _ { i } ^ { a _ { i } } ) \geq 0$ hence $A ( n ) \geq 0$ Also, if $\pmb { n }$ is a square then each exponent $a _ { i }$ is even, so each factor $A ( p _ { i } ^ { a _ { i } } ) \geq 1$ hence $A ( n ) \geq 1$ This proves the theorem. □

Theorem 6.20 For any real-valued nonprincipal character $\mathbb { X }$ mod $k ,$ ,let

$$
A ( n ) = \sum _ { d \mid n } \chi ( d ) \qquad a n d B ( x ) = \sum _ { n \leq x } { \frac { A ( n ) } { \sqrt { n } } } .
$$

Then we have:

(a) $B ( x )  \infty$ as $x \to \infty$ (b) $B ( x ) = 2 \sqrt { x } L ( 1 , \chi ) + O ( 1 ) \quad f o r \ a l l \ x \geq 1 .$

Therefore $L ( 1 , \chi ) \neq 0$

PRooF. To prove part (a) we use Theorem 6.19 to write

$$
B ( x ) \geq \sum _ { \stackrel { n \leq x } { n = m ^ { 2 } } } { \frac { 1 } { \sqrt { n } } } = \sum _ { m \leq { \sqrt { x } } } { \frac { 1 } { m } } .
$$

The last sum tends to $\infty \ \mathrm { { a s } } \ x  \infty$ since the harmonic series $\sum 1 / m$ diverges. To prove part (b) we write

$$
B ( x ) = \sum _ { n \leq x } { \frac { 1 } { \sqrt { n } } } \sum _ { d \mid n } \chi ( d ) = \sum _ { q , d \atop q d \leq x } { \frac { \chi ( d ) } { \sqrt { q d } } } .
$$

Now we invoke Theorem 3.17 which states that

$$
\sum _ { q , d \atop q d \leq x } f ( d ) g ( q ) = \sum _ { n \leq a } f ( n ) G { \binom { x } { n } } + \sum _ { n \leq b } g ( n ) F { \binom { x } { n } } - F ( a ) G ( b )
$$

where $a b = x .$ , $\begin{array} { r } { F ( x ) = \sum _ { n \leq x } f ( n ) , } \end{array}$ and $\begin{array} { r } { G ( x ) = \sum _ { n \leq x } g ( n ) . } \end{array}$ We take $a = b =$ $\sqrt { x }$ and let $f ( n ) = \chi ( n ) / \sqrt { n } , g ( n ) = 1 / \sqrt { n }$ to obtain

$$
B ( x ) = \sum _ { \stackrel { q , d } { q , d } } \frac { \chi ( d ) } { \sqrt { q d } } \ = \ \sum _ { n \leq \sqrt { x } } \frac { \chi ( n ) } { \sqrt { n } } G \bigg ( \frac { x } { n } \bigg ) + \sum _ { n \leq \sqrt { x } } \frac { 1 } { \sqrt { n } } F \bigg ( \frac { x } { n } \bigg ) - F ( \sqrt { x } ) G ( \sqrt { x } ) .
$$

By Theorem 3.2 we have

$$
G ( x ) = \sum _ { n \leq x } { \frac { 1 } { \sqrt { n } } } = 2 { \sqrt { x } } + A + O { \biggl ( } { \frac { 1 } { \sqrt { x } } } { \biggr ) }
$$

where $A$ is a constant, and by Theorem 6.18, Equation (11), we have

$$
F ( x ) = \sum _ { n \leq x } { \frac { \chi ( n ) } { \sqrt { n } } } = B + O { \biggl ( } { \frac { 1 } { \sqrt { x } } } { \biggr ) } ,
$$

where $\begin{array} { r } { B = \sum _ { n = 1 } ^ { \infty } \chi ( n ) / \sqrt { n } . } \end{array}$ Since $F ( \sqrt { x } ) G ( \sqrt { x } ) = 2 B x ^ { 1 / 4 } + { \cal O } ( 1 ) ,$ Equation (12) gives us

$$
\begin{array} { l } { { \displaystyle B ( x ) = \sum _ { n \leq \sqrt { x } } \frac { \chi ( n ) } { \sqrt { n } } \left\{ 2 \sqrt { \frac { x } { n } } + A + O \biggl ( \sqrt { \frac { n } { x } } \biggr ) \right\} } } \\ { { + \displaystyle \sum _ { n \leq \sqrt { x } } \frac { 1 } { \sqrt { n } } \left\{ B + O \biggl ( \sqrt { \frac { n } { x } } \biggr ) \right\} - 2 B x ^ { 1 / 4 } + O ( 1 ) } } \end{array}
$$

$$
= 2 \sqrt { x } \sum _ { n \leq \sqrt { x } } \frac { \chi ( n ) } { n } + A \sum _ { n \leq \sqrt { x } } \frac { \chi ( n ) } { \sqrt { n } } + O \bigg ( \frac { 1 } { \sqrt { x } } \sum _ { n \leq \sqrt { x } } | \chi ( n ) | \bigg )
$$

$$
\begin{array} { l } { { + \displaystyle B \sum _ { n \leq \sqrt { x } } \frac { 1 } { \sqrt { n } } + \cal { O } \biggl ( \frac { 1 } { \sqrt { x } } \sum _ { n \leq \sqrt { x } } 1 \biggr ) - 2 B x ^ { 1 / 4 } + \cal { O } ( 1 ) } } \\ { { = 2 \sqrt { x } L ( 1 , \chi ) + \cal { O } ( 1 ) . } } \end{array}
$$

This proves part (b). Now it is clear that parts (a) and (b) together imply that $L ( 1 , \chi ) \neq 0$ .

# Exercises for Chapter 6

1. Let $\pmb { G }$ be a set of nth roots of a nonzero complex number. If $\pmb { G }$ is a group under multiplication, prove that $G$ is the group of nth roots of unity.

2. Let $G$ be a finite group of order $n$ with identity element e. If $a _ { 1 } , \ldots , a _ { n }$ are $\pmb { n }$ elements of $G .$ , not necessarily distinct, prove that there are integers $p$ and $q$ with $1 \leq p \leq q \leq n$ such that $a _ { p } a _ { p + 1 } \cdot \cdot \cdot a _ { q } = e$

6: Finite abelian groups and their characters

3. Let $\pmb { G }$ be the et of all! $2 \times 2$ matices ${ \binom { a \quad b } { c \quad d } } .$ where $a , b , c , d$ are integers with $a d - b c = 1$ . Prove that $\pmb { G }$ is a group under matrix multiplication. This group is sometimes called the modular group.

4. Let $G = \langle a \rangle$ be a cyclic group generated by $\pmb { a }$ . Prove that every subgroup of $G$ is cyclic. (It is not assumed that $\pmb { G }$ is fi nite.)

5. Let $\pmb { G }$ be a finite group of order $n$ and let $\pmb { G } ^ { \prime }$ be a subgroup of order m. Prove that $m | n$ (Lagrange's theorem). Deduce that the order of every element of $G$ divides $\pmb { n }$

6. Let $\pmb { G }$ be a group of order 6 with identity element e. Prove that either $\pmb { G }$ is cyclic, or else there are two elements $\pmb { a }$ and $b$ in $\pmb { G }$ such that

$$
G = \{ a , a ^ { 2 } , a ^ { 3 } , b , a b , a ^ { 2 } b \} ,
$$

with $a ^ { 3 } = b ^ { 2 } = e$ . Which of these elements is ba?

7. A group table for a finite group $G = \{ a _ { 1 } , \ldots , a _ { n } \}$ of order $n$ is an $n \times n$ matrix whose $i j$ -entry is $a _ { i } a _ { j }$ . If $a _ { i } a _ { j } = e$ prove that $a _ { j } a _ { i } = e$ . In other words, the identity element is symmetrically located in the group table. Deduce that if $\pmb { n }$ is even the equation $x ^ { 2 } = e$ has an even number of solutions.

8. Generalizing Exercise 7, let $f ( p )$ denote the number of solutions of the equation $x ^ { p } = e$ where $p$ is a prime divisor of $\pmb { n }$ , the order of $\pmb { G }$ . Prove that $p | f ( p )$ (Cauchy's theorem). [Hint : Consider the set $s$ of ordered $p$ tuples $( a _ { 1 } , \ldots , a _ { p } )$ such that $a _ { i } \in G$ and $a _ { 1 } \cdots a _ { p } = e$ . There are $n ^ { p - 1 } p$ -tuples in S. Call two such $p { \cdot }$ -tuples equivalent if one is a cyclic permutation of the other. Show that $f ( p )$ equivalence classes contain exactly one member and that each of the others contains exactly $p$ members. Count the number of members of $s$ in two ways and deduce that $p | f ( p ) . ]$

9. Let $\pmb { G }$ be a fi nite group of order n. Prove that $n$ is odd if, and only if, each element of $\pmb { G }$ is a square. That is, for each $^ { a }$ in $G$ there is an element $b$ in $\pmb { G }$ such that $a = b ^ { 2 }$ -

10. State and prove a generalization of Exercise 9 in which the condition $^ { * } n$ is odd " is replaced by $^ { * } n$ is relatively prime to $k ^ { \dag \mathnormal { \prime } }$ for some $k \geq 2$

11. Let $\pmb { G }$ be a fi nite group of order $n ,$ and let $s$ be a subset containing more than $n / 2$ elements of G. Prove that for each $g$ in $\pmb { G }$ there exist elements $\pmb { a }$ and $\pmb { b }$ in $s$ such that $a b = g .$ (id:)

12. Let $\pmb { G }$ be a group and let $s$ be a subset of $\pmb { n }$ distinct elements of $\pmb { G }$ with the property that $a \in S$ implies $a ^ { - 1 } \notin S$ Consider the $n ^ { 2 }$ products (not necessarily distinct) of the form $a b$ , where $a \in S$ and $b \in S .$ Prove that at most $n ( n - 1 ) / 2$ of these products belong to $s$

13. $\operatorname { L e t } f _ { 1 } , \ldots , f _ { m }$ be the characters of a finite group $\pmb { G }$ of order $m _ { \parallel }$ , and let $\pmb { a }$ be an element of $G$ of order $\pmb { n } .$ . Theorem 6.7 shows that each number $f _ { r } ( a )$ is an nth root of unity. Prove that every nth root of unity occurs equally often among the numbers $f _ { 1 } ( a ) ,$ , $f _ { 2 } ( a ) , \ldots , f _ { m } ( a ) .$ [Hint: Evaluate the sum

$$
\sum _ { r = 1 } ^ { m } \sum _ { k = 1 } ^ { n } f _ { r } ( a ^ { k } ) e ^ { - 2 \pi i k / n }
$$

in two ways to determine the number of times $e ^ { 2 \pi i / \pi }$ occurs.]

14. Construct tables showing the values of all the Dirichlet characters mod $k$ for $k = 8 , 9$ , and 10.

15. Let $\chi$ be any nonprincipal character mod $k$ . Prove that for all integers $a < b$ we have

$$
{ \Bigg | } \sum _ { n = a } ^ { b } \chi ( n ) { \Bigg | } \leq { \frac { 1 } { 2 } } \varphi ( k ) .
$$

16. If $\chi$ is a real-valued character mod $k$ then $\chi ( n ) = \pm 1$ or O for each $\pmb { n }$ , so the sum

$$
S = \sum _ { n \mathop { = } 1 } ^ { k } n \chi ( n )
$$

is an integer. This exercise shows that $1 2 S \equiv 0 { \pmod { k } } .$

(a) If $( a , k ) = 1$ prove that $a \chi ( a ) S \equiv S { \mathrm { ~ } } ( { \mathrm { m o d } } k ) .$   
(b) Write $k = 2 ^ { \alpha } q$ where $q$ is odd. Show that there is an integer a with $( a , k ) = 1$ such that $a \equiv 3$ (mod 2%) and $a \equiv 2 { \pmod { q } }$ . Then use (a) to deduce that $1 2 S \equiv 0 { \pmod { k } } .$

17. An arithmetical function $f$ is called periodic mod $k$ if $k > 0$ and $f ( m ) = f ( n )$ whenever $m \equiv n$ (mod $k$ ). The integer $k$ is called a period of $f .$

(a) If $f$ is periodic mod $k ,$ prove that $f$ has a smallest positive period $k _ { 0 }$ and that $k _ { 0 } \vert k$ ,   
(b) Let $f$ be periodic and completely multiplicative, and let $k$ be the smallest positive period of $f .$ Prove that $f ( n ) = 0$ if $( n , k ) > 1$ . This shows that $f$ is a Dirichlet character mod $k$

18. (a) Let $f$ be a Dirichlet character mod $k$ If $k$ is squarefree, prove that $k$ is the smallest positive period of $f .$ (b) Give an example of a Dirichlet character mod $k$ for which $k$ is not the smallest positive period of $f .$

# 7 Dirichlet's Theorem on Primes in Arithmetical Progressions

# 7.1 Introduction

The arithmetic progression of odd numbers $1 , 3 , 5 , \ldots , 2 n + 1 , \ldots$ contains infinitely many primes. It is natural to ask whether other arithmetic progressions have this property. An arithmetic progression with first term $h$ and common difference $k$ consists of all numbers of the form

$$
k n + h , n = 0 , 1 , 2 , \ldots
$$

If $h$ and $k$ have a common factor $d _ { i }$ , each term of the progression is divisible by $d$ and there can be no more than one prime in the progression if $d > 1$ In other words, a necessary condition for the existence of infinitely many primes in the arithmetic progression (1) is that $( h , k ) = 1 ,$ Dirichlet was the first to prove that this condition is also sufficient. That is, if $( h , k ) = 1$ the arithmetic progression (1) contains infinitely many primes. This result, now known as Dirichlet's theorem, will be proved in this chapter.

We recall that Euler_ proved the existence of infinitely many primes by showing that the series $\sum { p ^ { - 1 } }$ , extended over all primes, diverges. Dirichlet's idea was to prove a corresponding statement when the primes are restricted to lie in the given progression (1). In a famous memoir [15] published in 1837 Dirichlet carried out this plan by ingenious analytic methods. The proof was later simplified by several authors. The version given in this chapter is based on a proof published in 1950 by Harold N. Shapiro [65] and deals with the series $\sum { p ^ { - 1 } }$ log $p$ rather than $\sum p ^ { - 1 }$

First we show that for certain special progressions it is easy to prove Dirichiet's theorem by a modification of Euclid's proof of the infinitude of primes.

# 7.2 Dirichlet's theorem for primes of the form $4 n \mathrm { ~ - ~ } 1$ and $4 n + 1$

Theorem 7.1 There are infi nitely many primes of the form $4 n - 1$

Proor. We argue by contradiction. Assume there are only a finite number of such primes, let $p$ be the largest, and consider the integer

$$
N = 2 ^ { 2 } \cdot 3 \cdot 5 \cdot \cdot \cdot p - 1 .
$$

The product $3 \cdot 5 \cdots p$ contains all the odd primes $\leq p$ as factors. Since $N$ is of the form $4 n - 1$ it cannot be prime because $N > p$ .No prime $\le p$ divides $N .$ , so all the prime factors of $N$ must exceed $p$ . But all of the prime factors of $N$ cannot be of the form $4 n + 1$ because the product of two such numbers is again of the same form, Hence some prime factor of $N$ must be of the form $4 n - 1$ . This is a contradiction. □

A different type of argument can be used for primes of the form $4 n + 1$

Theorem 7.2 There are infi nitely many primes of the form $4 n + 1$

PROOF. Let $N$ be any integer ${ > } 1$ . We will show that there is a prime $p > N$ such that $p \equiv 1$ (mod 4). Let

$$
m = ( N ! ) ^ { 2 } + 1 .
$$

Note that m is odd, $m > 1$ . Let $p$ be the smallest prime factor of $m$ . None of the numbers $2 , 3 , \ldots , N$ divides m, so $p > N$ . Also, we have

$$
( N ! ) ^ { 2 } \equiv - 1 { \pmod { p } } .
$$

Raising both members to the $( p - 1 ) / 2$ power we find

$$
( N ! ) ^ { p - 1 } \equiv ( - 1 ) ^ { ( p - 1 ) / 2 } { \pmod { p } } .
$$

But $( N ! ) ^ { p - 1 } \equiv 1 { \pmod { p } }$ by the Euler-Fermat theorem, so

$$
( - 1 ) ^ { ( p - 1 ) / 2 } \equiv 1 { \pmod { p } } .
$$

Now the difference $( - 1 ) ^ { ( p - 1 ) / 2 } - 1$ is either 0 or $- 2 ,$ , and it cannot be −2, because it is divisible by $p$ , so it must be 0. That is,

$$
( - 1 ) ^ { ( p - 1 ) / 2 } = 1 .
$$

But this means that $( p - 1 ) / 2$ is even, so $p \equiv 1$ (mod 4). In other words, we have shown that for each integer $N > 1$ there is a prime $p > N$ such that $p \equiv 1$ (mod 4). Therefore there are infinitely many primes of the form $4 n + 1$ □

Simple arguments like those just given for primes of the form $4 n - 1$ and $4 n + 1$ can also be adapted to treat other special arithmetic progressions, such as $5 n - 1 , 8 n - 1 , 8 n - 3$ and $8 n + 3$ (see Sierpinski [67]), but no one has yet found such a simple argument that works for the general progression $k n + h$

# 7.3 The plan of the proof of Dirichlet's theorem

In Theorem 4.10 we derived the asymptotic formula

$$
\sum _ { p \leq x } { \frac { \log p } { p } } = \log x + O ( 1 ) ,
$$

where the sum is extended over all primes $p \leq x$ . We shall prove Dirichlet's theorem as a consequence of the following related asymptotic formula.

Theorem $7 . 3 \ : I f k > 0$ and $( h , k ) = 1$ we have, for all $x > 1$ ,

$$
\sum _ { \stackrel { p \leq x } { p \equiv h ( \mathrm { m o d } k ) } } { \frac { \log p } { p } } = { \frac { 1 } { \varphi ( k ) } } \log x + O ( 1 ) ,
$$

where the sum is extended over those primes $p \leq x$ which are congruent to $h$ mod $k$ .

Since log $x \to \infty$ as $x \to \infty$ this relation implies that there are infinitely many primes $p \equiv h$ (mod $k$ ), hence infinitely many in the progression $n k + h , n = 0 , 1 , 2 , . . .$

Note that the principal term on the right of (3) is independent of h. Therefore (3) not only implies Dirichlet's theorem but it also shows that the primes in each of the $\varphi ( k )$ reduced residue classes mod $k$ make the same contribution to the principal term in (2).

The proof of Theorem 7.3 wil be presented through a sequence of lemmas which we have collected together in this section to reveal the plan of the proof. Throughout the chapter we adopt the following notation.

The positive integer $k$ represents a fixed modulus, and $h$ is a fixed integer relatively prime to $k$ . The $\varphi ( k )$ Dirichlet characters mod $k$ are denoted by

$$
\chi _ { 1 } , \chi _ { 2 } , \ldots , \chi _ { \varphi ( k ) }
$$

with $\mathbb { \chi } _ { 1 }$ denoting the principal character. For $\chi \neq \chi _ { 1 }$ we write $L ( 1 , \chi )$ and $L ^ { \prime } ( 1 , \chi )$ for the sums of the following series :

$$
\begin{array} { l } { { \displaystyle { \cal L } ( 1 , \chi ) = \sum _ { n = 1 } ^ { \infty } \frac { \chi ( n ) } { n } , } } \\ { { \displaystyle { \cal L } ^ { \prime } ( 1 , \chi ) = - \sum _ { n = 1 } ^ { \infty } \frac { \chi ( n ) \mathrm { l o g } n } { n } . } } \end{array}
$$

The convergence of each of these series was shown in Theorem 6.18. Moreover, in Theorem 6.20 we proved that $L ( 1 , \chi ) \neq 0$ if $\chi$ is real-valued. The symbol $p$ denotes a prime, and $\sum p \leq x$ denotes a su extended over allprimes $p \leq x$

Lemma 7.4 For $x > 1$ we have

$$
\sum _ { \stackrel { p \leq x } { p \equiv h ( \bmod k ) } } \frac { \log p } { p } = \frac { 1 } { \varphi ( k ) } \log x + \frac { 1 } { \varphi ( k ) } \sum _ { r = 2 } ^ { \varphi ( k ) } \bar { \chi } _ { r } ( h ) \sum _ { p \leq x } \frac { \chi _ { r } ( p ) \log p } { p } + O ( 1 ) .
$$

It is clear that Lemma 7.4 will imply Theorem 7.3 if we show that

$$
\sum _ { p \leq x } { \frac { \chi ( p ) \log p } { p } } = O ( 1 )
$$

for each $\chi \neq \chi _ { 1 }$ . The next lemma expresses this sum in a form which is not extended over primes.

Lemma 7.5 For $x > 1$ and $\chi \neq \chi _ { 1 }$ we have

$$
\sum _ { p \leq x } { \frac { \chi ( p ) | \mathrm { l o g } p } { p } } = - L ^ { \prime } ( 1 , \chi ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } + O ( 1 ) .
$$

Therefore Lemma 7.5 will imply (4) if we show that

$$
\sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } = O ( 1 ) .
$$

This, in turn, wil be deduced from the following lemma.

Lemma 7.6 For $x > 1$ and $\chi \neq \chi _ { 1 }$ we have

$$
L ( 1 , \chi ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } = O ( 1 ) .
$$

If $L ( 1 , \chi ) \neq 0$ we can cancel $L ( 1 , \chi )$ in (6) to obtain (5). Therefore, the proof of Dirichlet's theorem depends ultimately on the nonvanishing of $L ( 1 , \chi )$ for all $\chi \neq \chi _ { \mathtt { i } }$ . As already remarked, this was proved for real $\chi \neq \chi _ { 1 }$ in Theorem 6.20, so it remains to prove that $L ( 1 , \chi ) \neq 0$ for all $\chi \neq \chi _ { 1 }$ which take complex as well as real values.

For this purpose we let $N ( k )$ denote the number of nonprincipal characters $\chi$ mod $k$ such that $L ( 1 , \chi ) = 0$ If $L ( 1 , \chi ) = 0$ then $L ( 1 , \bar { \chi } ) = 0$ and $\chi \neq \bar { \chi }$ since $\chi$ is not real. Therefore the characters $\chi$ for which $L ( 1 , \chi ) = 0$ occur in conjugate pairs, so $N ( k )$ is even. Our goal is to prove that $N ( k ) = 0$ and this will be deduced from the following asymptotic formula.

7: Dirichlet's theorem on primes in arithmetic progressions

Lemma 7.7 For $x > 1$ we have

$$
\sum _ { \stackrel { p \leq x } { p \equiv 1 \ ( \mathrm { m o d } k ) } } \frac { \log p } { p } = \frac { 1 - N ( k ) } { \varphi ( k ) } \log x + O ( 1 ) .
$$

If $N ( k ) \neq 0$ then $N ( k ) \ge 2$ since $N ( k )$ is even, hence the coefficient of log $x$ in (7) is negative and the right member $\to - \infty$ as $x \to \infty$ . This is a contradiction since allthe terms on the left are positive. Therefore Lemma 7.7 implies that $N ( k ) = 0 ,$ The proof of Lemma 7.7, in turn, will be based on the following asymptotic formula.

Lemma $7 . 8 ~ I f \chi \neq \chi _ { 1 }$ and $L ( 1 , \chi ) = 0$ we have

$$
L ^ { \prime } ( 1 , \chi ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } = \log x + O ( 1 ) .
$$

# 7.4 Proof of Lemma 7.4

To prove Lemma 7.4 we begin with the asymptotic formula mentioned earlier,

$$
\sum _ { p \leq x } { \frac { \log p } { p } } = \log x + O ( 1 )
$$

and extract those terms in the sum arising from primes $p \equiv h { \mathrm { ~ } } ( { \mathrm { m o d ~ } } k )$ . The extraction is done with the aid of the orthogonality relation for Dirichlet characters, as expressed in Theorem 6.16 :

$$
\sum _ { r = 1 } ^ { \varphi ( k ) } \chi _ { r } ( m ) \tilde { \chi } _ { r } ( n ) = \left\{ \begin{array} { l l } { \varphi ( k ) } & { \mathrm { i f } \ m \equiv n \ ( \mathrm { m o d } \ k ) , } \\ { 0 } & { \mathrm { i f } \ m \not \equiv n \ ( \mathrm { m o d } \ k ) . } \end{array} \right.
$$

This is valid for $( n , k ) = 1$ . We take $m = p$ and $n = h$ where $( h , k ) = 1$ , then multiply both members by $p ^ { - 1 } \log p$ and sum over all $p \leq x$ to obtain

$$
\sum _ { \substack { p \leq x \ r = 1 } } \chi _ { r } ( p ) \bar { \chi } _ { r } ( h ) \frac { \log \ p } { p } = \varphi ( k ) \sum _ { \substack { p \leq x } \atop p \equiv h \ ( \mathrm { m o d } k ) } \frac { \log \ p } { p } .
$$

In the sum on the left we isolate those terms involving only the principal character $\chi _ { 1 }$ and rewrite (8) in the form

$$
\varphi ( k ) \sum _ { \stackrel { p \leq x } { p \equiv h ( \bmod k ) } } \frac { \log p } { p } = \bar { \chi } _ { 1 } ( h ) \sum _ { p \leq x } \frac { \chi _ { 1 } ( p ) \log p } { p } + \sum _ { r = 2 } ^ { \varphi ( k ) } \bar { \chi } _ { r } ( h ) \sum _ { p \leq x } \frac { \chi _ { r } ( p ) \log p } { p } .
$$

Now $\bar { \chi } _ { 1 } ( h ) = 1$ and $\chi _ { 1 } ( p ) = 0$ unless $( p , k ) = 1$ , in which case $\chi _ { 1 } ( p ) = 1$ Hence the first term on the right of (9) is given by

$$
\sum _ { \stackrel { p \leq x } { ( p , k ) = 1 } } \frac { \log p } { p } = \sum _ { p \leq x } \frac { \log p } { p } - \sum _ { p \leq x } \frac { \log p } { p } = \sum _ { p \leq x } \frac { \log p } { p } + O ( 1 ) ,
$$

since there are only a finite number of primes which divide $k$ Combining (10) with (9) we obtain

$$
\varphi ( k ) \sum _ { \stackrel { p \leq x } { p \equiv h ( \bmod k ) } } \frac { \log p } { p } = \sum _ { p \leq x } \frac { \log p } { p } + \sum _ { r = 2 } ^ { \varphi ( k ) } \bar { \chi } _ { r } ( h ) \sum _ { p \leq x } \frac { \chi _ { r } ( p ) \log p } { p } + O ( 1 ) .
$$

Using (2) and dividing by $\varphi ( k )$ we obtain Lemma 7.4.

# 7.5 Proof of Lemma 7.5

We begin with the sum

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } ,
$$

where $\Lambda ( n )$ is Mangoldt's function, and express this sum in two ways. First we note that the definition of $\Lambda ( n )$ gives us

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = \sum _ { \stackrel { p \leq x } { p ^ { a } \leq x } } \sum _ { a = 1 } ^ { \infty } { \frac { \chi ( p ^ { a } ) \log p } { p ^ { a } } } .
$$

We separate the terms with $a = 1$ and write

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = \sum _ { p \leq x } { \frac { \chi ( p ) \log p } { p } } + \sum _ { p \leq x } \sum _ { a = 2 } ^ { \infty } { \frac { \chi ( p ^ { a } ) \log p } { p ^ { a } } } .
$$

The second sum on the right is majorized by

$$
\sum _ { p } \log p \sum _ { a = 2 } ^ { \infty } { \frac { 1 } { p ^ { a } } } = \sum _ { p } { \frac { \log p } { p ( p - 1 ) } } < \sum _ { n = 2 } ^ { \infty } { \frac { \log n } { n ( n - 1 ) } } = O ( 1 ) ,
$$

so (11) gives us

$$
\sum _ { p \leq x } { \frac { \chi ( p ) \log p } { p } } = \sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } + O ( 1 ) .
$$

Now we recall that $\begin{array} { r } { \Lambda ( n ) = \sum _ { d \mid n } \mu ( d ) \log ( n / d ) , } \end{array}$ hence

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = \sum _ { n \leq x } { \frac { \chi ( n ) } { n } } \sum _ { d \mid n } \mu ( d ) \log { \frac { n } { d } } .
$$

In the last sum we write $n = c d$ and use the multiplicative property of x to obtain

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = \sum _ { d \leq x } { \frac { \mu ( d ) \chi ( d ) } { d } } \sum _ { c \leq x / d } { \frac { \chi ( c ) \log c } { c } } .
$$

Since $x / d \geq 1$ , in the sum over $c$ we may use formula (10) of Theorem 6.18 to obtain

$$
\sum _ { c \leq x / d } { \frac { \chi ( c ) \log c } { c } } = - L ^ { \prime } ( 1 , \chi ) + O \biggl ( { \frac { \log x / d } { x / d } } \biggr ) .
$$

7: Dirichlet's theorem on primes in arithmetic progressions

Equation (13) now becomes

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = - L ^ { \prime } ( 1 , \chi ) \sum _ { d \leq x } { \frac { \mu ( d ) \chi ( d ) } { d } } + O { \biggl ( } \sum _ { d \leq x } { \frac { 1 } { d } } { \frac { \log x / d } { x / d } } { \biggr ) } .
$$

The sum in the $o$ -term is

$$
{ \frac { 1 } { x } } \sum _ { d \leq x } ( \log x - \log d ) = { \frac { 1 } { x } } { \bigg ( } [ x ] \log x - \sum _ { d \leq x } \log d { \bigg ) } = O ( 1 )
$$

since

$$
\sum _ { d \leq x } \log d = \log [ x ] ! = x \log x + O ( x ) .
$$

Therefore (14) becomes

$$
\sum _ { n \leq x } { \frac { \chi ( n ) \Lambda ( n ) } { n } } = - L ^ { \prime } ( 1 , \chi ) \sum _ { d \leq x } { \frac { \mu ( d ) \chi ( d ) } { d } } + O ( 1 )
$$

which, with (12), proves Lemma 7.5.

# 7.6 Proof of Lemma 7.6

We use the generalized Möbius inversion formula proved in Theorem 2.23 which states that if $\pmb { \alpha }$ is completely multiplicative we have

$$
G ( x ) = \sum _ { n \leq x } \alpha ( n ) F { \binom { x } { n } } \quad { \mathrm { i f , a n d ~ o n l y ~ i f , } } F ( x ) = \sum _ { n \leq x } \mu ( n ) \alpha ( n ) G { \binom { x } { n } } .
$$

We take $\alpha ( n ) = \chi ( n )$ and $F ( x ) = x$ to obtain

$$
x = \sum _ { n \leq x } \mu ( n ) \chi ( n ) G { \Biggl ( } { \frac { x } { n } } { \Biggr ) }
$$

where

$$
G ( x ) = \sum _ { n \leq x } \chi ( n ) { \frac { x } { n } } = x \sum _ { n \leq x } { \frac { \chi ( n ) } { n } } .
$$

By Equation (9) of Theorem 6.18 we can write $G ( x ) = x L ( 1 , \chi ) + O ( 1 ) .$ (id: Using this in (16) we find

$$
x = \sum _ { n \leq x } \mu ( n ) \chi ( n ) { \Biggl \{ } { \frac { x } { n } } L ( 1 , \chi ) + O ( 1 ) { \Biggr \} } = x L ( 1 , \chi ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } + O ( x ) .
$$

Now we divide by $x$ to obtain Lemma 7.6.

# 7.7 Proof of Lemma 7.8

We prove Lemma 7.8 and then use it to prove Lemma 7.7. Once again we make use of the generalized Möbius inversion formula (15). This time we take $F ( x ) = x$ log $\boldsymbol { x }$ to obtain

$$
x \log x = \sum _ { n \leq x } \mu ( n ) \chi ( n ) G { \biggl ( } { \frac { x } { n } } { \biggr ) }
$$

where

$$
G ( x ) = \sum _ { n \leq x } \chi ( n ) { \frac { x } { n } } \log { \frac { x } { n } } = x \log x \sum _ { n \leq x } { \frac { \chi ( n ) } { n } } - x \sum _ { n \leq x } { \frac { \chi ( n ) \log n } { n } } .
$$

Now we use formulas (9) and (10) of Theorem 6.18 to get

$$
\begin{array} { l } { { G ( x ) = x \log x \biggl \{ L ( 1 , \chi ) + O \biggl ( \displaystyle \frac { 1 } { x } \biggr ) \biggr \} + x \biggl \{ L ^ { \prime } ( 1 , \chi ) + O \biggl ( \displaystyle \frac { \log x } { x } \biggr ) \biggr \} } } \\ { { = x L ^ { \prime } ( 1 , \chi ) + O ( \log x ) } } \end{array}
$$

since we are assuming that $L ( 1 , \chi ) = 0 $ Hence (17) gives us

$$
\begin{array} { l } { { \displaystyle x \log x = \sum _ { n \leq x } \mu ( n ) \chi ( n ) \Biggl \{ \frac { x } { n } L ^ { \prime } ( 1 , \chi ) + O \biggl ( \log \frac { x } { n } \biggr ) \Biggr \} } } \\ { { \displaystyle \qquad = x L ^ { \prime } ( 1 , \chi ) \sum _ { n \leq x } \frac { \mu ( n ) \chi ( n ) } { n } + O \biggl ( \sum _ { n \leq x } ( \log x - \log n ) \biggr ) . } } \end{array}
$$

We have already noted that the $o$ -term on the right is $O ( x )$ (see the proof of Lemma 7.5). Hence we have

$$
x \log x = x L ^ { \prime } ( 1 , \chi ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi ( n ) } { n } } + O ( x ) ,
$$

and when we divide by $_ x$ we obtain Lemma 7.8.

# 7.8 Proof of Lemma 7.7

We use Lemma 7.4 with $h \simeq 1$ to get

$$
\sum _ { \stackrel { p \leq x } { p \equiv 1 ( \mathrm { \bf ~ m o d } \ast ) } } \frac { \log p } { p } = \frac { 1 } { \varphi ( k ) } \log x + \frac { 1 } { \varphi ( k ) } \sum _ { r = 2 } ^ { \varphi ( k ) } \sum _ { p \leq x } \frac { \chi _ { r } ( p ) \log p } { p } + O ( 1 ) .
$$

In the sum over $p$ on the right we use Lemma 7.5 which states that

$$
\sum _ { p \leq x } { \frac { \chi _ { r } ( p ) \mathrm { l o g } p } { p } } = - L ^ { \prime } ( 1 , \chi _ { r } ) \sum _ { n \leq x } { \frac { \mu ( n ) \chi _ { r } ( n ) } { n } } + O ( 1 ) .
$$

If $L ( 1 , \chi _ { r } ) \neq 0$ , Lemma 7.6 shows that the right member of (18) is $O ( 1 )$ . But if $L ( 1 , \chi _ { r } ) = 0$ then Lemma 7.8 implies

$$
- { \cal L } ^ { \prime } ( 1 , \chi _ { r } ) \sum _ { n \leq x } \frac { \mu ( n ) \chi _ { r } ( n ) } { n } = - \log x + O ( 1 ) .
$$

Therefore the sum on the right of (18) is

$$
{ \frac { 1 } { \varphi ( k ) } } \left\{ - N ( k ) \log x + O ( 1 ) \right\} ,
$$

so (18) becomes

$$
\sum _ { \stackrel { p \leq x } { p \equiv 1 \ ( \mathrm { m o d } k ) } } \frac { \mathrm { l o g } \ p } { p } = \frac { 1 - N ( k ) } { \varphi ( k ) } \mathrm { l o g } \ x + O ( 1 ) .
$$

This proves Lemma 7.7 and therefore also Theorem 7.3.

As remarked earlier, Theorem 7.3 implies Dirichlet's theorem:

Theorem 7.9 If $k > 0$ and $( h , k ) = 1$ there are infinitely many primes in the arithmetic progression $n k + h , n = 0 , 1 , 2 , \ldots$

7.9 Distribution of primes in arithmetic progressions

If $k > 0$ and $( a , k ) = 1$ , let

$$
\pi _ { a } ( x ) = \sum _ { \stackrel { p \leq x } { p \equiv a ( \bmod k ) } } 1 .
$$

The function $\pi _ { a } ( x )$ counts the number of primes $\leq x$ in the progression $n k + a , n = 0 , 1 , 2 , . . .$ Dirichlet's theorem shows that $\pi _ { a } ( x ) \to \infty$ as $x \to \infty$ There is also a prime number theorem for arithmetic progressions which states that

$$
\pi _ { a } ( x ) \sim { \frac { \pi ( x ) } { \varphi ( k ) } } \sim { \frac { 1 } { \varphi ( k ) } } { \frac { x } { \log x } } \quad { \mathrm { a s ~ } } x \to \infty ,
$$

if $( a , k ) = 1$ . A proof of (19) is outlined in [44].

The prime number theorem for progressions is suggested by the formula of Theorem 7.3,

$$
\sum _ { \stackrel { p \leq x } { p \equiv h ( \bmod k ) } } \frac { \log p } { p } = \frac { 1 } { \varphi ( k ) } \log x + O ( 1 ) .
$$

Since the principal term is independent of $h$ , the primes seem to be equally distributed among the $\varphi ( k )$ reduced residue classes mod $k _ { : }$ , and (19) is a precise statement of this fact.

We conclude this chapter by giving an alternate formulation of the prime number theorem for arithmetic progressions.

# Theorem 7.10 If the relation

$$
\pi _ { a } ( x ) \sim { \frac { \pi ( x ) } { \varphi ( k ) } } \quad a s x  \infty
$$

holds for every integer a relatively prime to $k$ then

$$
\pi _ { a } ( x ) \sim \pi _ { b } ( x ) \quad a s x  \infty
$$

whenever $( a , k ) = ( b , k ) = 1$ . Conversely, (21) implies (20).

PRooF. It is clear that (20) implies (21). To prove the converse we assume (21) and let $A ( k )$ denote the number of primes that divide $k$ If $x > k$ we have

$$
\begin{array} { l } { \displaystyle \pi ( x ) = \sum _ { p \leq x } 1 = A ( k ) + \sum _ { \stackrel { p \leq x } { p \nleq k } } 1 } \\ { \displaystyle \qquad } \\ { \displaystyle = A ( k ) + \sum _ { a = 1 } ^ { k } \sum _ { \stackrel { p \leq x } { p \leq x } } 1 = A ( k ) + \sum _ { a = 1 } ^ { k } \pi _ { a } ( x ) . } \\ { \displaystyle ( a , k ) = 1 \operatorname* { m } _ { p \leq a ( \bmod k ) } ^ { } } \end{array}
$$

Therefore

$$
\frac { \pi ( x ) - A ( k ) } { \pi _ { b } ( x ) } = \sum _ { a = 1 \atop ( a , k ) = 1 } ^ { k } \frac { \pi _ { a } ( x ) } { \pi _ { b } ( x ) } .
$$

By (21) each term in the sum tends to 1 as $x \to \infty$ so the sum tends to $\varphi ( k ) .$ Hence

$$
{ \frac { \pi ( x ) } { \pi _ { b } ( x ) } } - { \frac { A ( k ) } { \pi _ { b } ( x ) } } \to \varphi ( k ) \quad { \mathrm { a s ~ } } x \to \infty .
$$

But $A ( k ) / \pi _ { b } ( x ) \to 0$ so $\pi ( x ) / \pi _ { b } ( x ) \to \varphi ( k ) ,$ which proves (20).

# Exercises for Chapter 7

In Exercises 1 through 4, $h$ and $k$ are given positive integers, $( h , k ) = 1$ , and $A ( h , k )$ is the arithmetic progression $A ( h , k ) = \{ h + k x \colon x = 0 , 1 , 2 , \ldots \}$ Exercises 1 through 4 are to be solved without using Dirichlet's theorem.

1. Prove that, for every integer $n \geq 1 , A ( h , k )$ contains infinitely many numbers relatively prime to $n$   
2. Prove that $A ( h , k )$ contains an infinite subset $\{ a _ { \mathfrak { s } } , a _ { 2 } , \ldots \}$ such that $( a _ { i } , a _ { j } ) = 1$ if $i \neq j .$   
3. Prove that $A ( h , k )$ contains an infinite subset which forms a geometric progression (a set of numbers of the form $a r ^ { n } .$ $, n = 0 , 1 , 2 , \ldots )$ . This implies that $A ( h , k )$ contains infinitely many numbers having the same prime factors.

7: Dirichlet's theorem on primes in arithmetic progressions

4. Let $s$ be any infi nite subset of $A ( h , k )$ . Prove that for every positive integer $n$ there is a number in $A ( h , k )$ which can be expressed as a product of more than $\pmb { n }$ different elements of S.

5. Dirichlet's theorem implies the following statement: If $h$ and $k > 0$ are any two integers with $( h , k ) = 1$ , then there exists at least one prime number of the form $k n + h .$ Prove that this statement also implies Dirichlet's theorem.

6.If $( h , k ) = 1 , k > 0$ , prove that there is a constant $A$ (depending on $h$ and on $k$ )such that, if $x \ge 2$ ,

$$
\sum _ { p \leq x \atop p \equiv h { \pmod { k } } } { \frac { 1 } { p } } = { \frac { 1 } { \varphi ( k ) } } \log \log x + A + O { \left( { \frac { 1 } { \log x } } \right) } .
$$

7. Construct an infinite set S of primes with the following property: If $p \in S$ and $q \in S$ then $( { \textstyle \frac { 1 } { 2 } } ( p - 1 ) , { \textstyle \frac { 1 } { 2 } } ( q - 1 ) ) = ( p , q - 1 ) = ( p - 1 , q ) = 1 .$

8. Let f be an integer-coeficient polynomial of degree $n \geq 1$ with the following property : For each prime $p$ there exists a prime $q$ and an integer $m$ such that $f ( p ) = q ^ { m }$ Prove that $q = p$ , $m = n$ and $f ( x ) = x ^ { n }$ for all $x . \ [ H i n t \colon \mathbf { I f } \ q \neq p$ then $q ^ { m + 1 }$ divides $f ( p + t q ^ { m + 1 } ) - f ( p )$ for each $t = 1 , 2 , \ldots ]$

# Periodic Arithmetical Functions 8 and Gauss Sums

# 8.1 Functions periodic modulo $k$

Let $k$ be a positive integer. An arithmetical function $f$ is said to be periodic with period $k$ (or periodic modulo $k$ ) if

$$
f ( n + k ) = f ( n )
$$

for all integers $\pmb { n }$ . If $k$ is a period so is mk for any integer $m > 0 ,$ The smallest positive period of $f$ is called the findamental period.

Periodic functions have already been encountered in the earlier chapters. For example, the Dirichlet characters mod $k$ are periodic mod $k .$ A simpler example is the greatest common divisor $( n , k )$ regarded as a function of $\pmb { n }$ Periodicity enters through the relation

$$
( n + k , k ) = ( n , k ) .
$$

Another example is the exponential function

$$
f ( n ) = e ^ { 2 \pi i m n / k }
$$

where $m$ and $k$ are fixed integers. The number $e ^ { 2 \pi i m / k }$ is a kth root of unity and $f ( n )$ is its nth power. Any finite linear combination of such functions, say

$$
\sum _ { m } c ( m ) e ^ { 2 \pi i m n / k }
$$

is also periodic mod $k$ for every choice of coefficients $c ( m )$ . Our first goal is to show that every arithmetical function which is periodic mod $k$ can be expressed as a linear combination of this type. These sums are called finite Fourier series. We begin the discussion with a simple but important example known as the geometric sum.

# 8: Periodic arithmetical functions and Gauss sums

Theorem 8.1 For fixed $k \geq 1$ let

$$
g ( n ) = \sum _ { m = 0 } ^ { k - 1 } e ^ { 2 \pi i m n / k } .
$$

Then

$$
g ( n ) = { \left\{ \begin{array} { l l } { 0 } & { i f ~ k ~ \forall ~ n , } \\ { k } & { i f ~ k \mid n . } \end{array} \right. }
$$

PROOF. Since $g ( n )$ is the sum of terms in a geometric progression,

$$
g ( n ) = \sum _ { m = 0 } ^ { k - 1 } x ^ { m } ,
$$

where $x = e ^ { 2 \pi i n / k }$ , we have

$$
g ( n ) = { \left\{ \begin{array} { l l } { \displaystyle { \frac { x ^ { k } - 1 } { x - 1 } } } & { { \mathrm { i f ~ } } x \neq 1 , } \\ { \displaystyle k } & { { \mathrm { i f ~ } } x = 1 . } \end{array} \right. }
$$

But $x ^ { k } = 1$ , and $x = 1$ if and only if $k | n ,$ so the theorem is proved.

# 8.2 Existence of finite Fourier series for periodic arithmetical functions

We shall use Lagrange's polynomial interpolation formula to show that every periodic arithmetical function has a finite Fourier expansion.

Theorem 8.2 Lagrange's interpolation theorem. Let $z _ { 0 } , z _ { 1 } , \dots , z _ { k - 1 }$ be $k$ distinct complex numbers, and let $w _ { 0 } , w _ { 1 } , \dotsc , w _ { k - 1 }$ be $k$ complex numbers which need not be distinct. Then there is a unique polynomial $P ( z )$ of degree $\leq k - 1$ such that

$$
P ( z _ { m } ) = w _ { m } \quad f o r m = 0 , 1 , 2 , . . . , k - 1 .
$$

PRooF. The required polynomial $P ( z ) _ { ; }$ , called the Lagrange interpolation polynomial, can be constructed explicitly as follows. Let

$$
A ( z ) = ( z - z _ { 0 } ) ( z - z _ { 1 } ) \cdot \cdot \cdot ( z - z _ { k - 1 } )
$$

and let

$$
A _ { m } ( z ) = \frac { A ( z ) } { z - z _ { m } } .
$$

Then $A _ { m } ( z )$ is a polynomial of degree $k - 1$ with the following properties :

$$
A _ { m } ( z _ { m } ) \neq 0 , \qquad A _ { m } ( z _ { j } ) = 0 \quad { \mathrm { i f ~ } } j \neq m .
$$

Hence $A _ { m } ( z ) / A _ { m } ( z _ { m } )$ is a polynomial of degree $k - 1$ which vanishes at each $z _ { j }$ for $j \neq m$ , and has the value 1 at $z _ { m }$ . Therefore the linear combination

$$
P ( z ) = \sum _ { m = 0 } ^ { k - 1 } w _ { m } { \frac { A _ { m } ( z ) } { A _ { m } ( z _ { m } ) } }
$$

is a polynomial of degree $\leq k - 1$ with $P ( z _ { j } ) = w _ { j }$ for each $j .$ If there were another such polynomial, say $Q ( z )$ , the difference $P ( z ) - Q ( z )$ would vanish at $k$ distinct points, hence $P ( z ) = Q ( z )$ since both polynomials have degree $\leq k - 1$ □

Now we choose the numbers $z _ { 0 } , z _ { 1 } , \ldots , z _ { k - 1 }$ to be the $k$ th roots of unity and we obtain:

Theorem 8.3 Given $k$ complex numbers $w _ { 0 } , w _ { 1 } , \ldots , w _ { k - 1 }$ , there exist $k$ uniquely determined complex numbers $a _ { 0 } , a _ { 1 } , \dotsc , a _ { k - 1 }$ such that

$$
w _ { m } = \sum _ { n = 0 } ^ { k - 1 } a _ { n } e ^ { 2 \pi i m n / k }
$$

for $m \approx 0 , 1 , 2 , . . . , k - 1 .$ Moreover, the coefficients $a _ { n }$ are given by the formula

$$
a _ { n } = \frac { 1 } { k } \sum _ { m = 0 } ^ { k - 1 } w _ { m } e ^ { - 2 \pi i m n / k } \quad f o r n = 0 , 1 , 2 , \ldots , k - 1 .
$$

PROOF. Let $z _ { m } = e ^ { 2 \pi i m / k }$ . The numbers $z _ { 0 } , z _ { 1 } , \dotsc , z _ { k - 1 }$ are distinct so there is a unique Lagrange polynomial

$$
P ( z ) = \sum _ { n = 0 } ^ { k - 1 } a _ { n } z ^ { n }
$$

such that $P ( z _ { m } ) = w _ { m }$ for each $m = 0 , 1 , 2 , \ldots , k - 1 .$ This shows that there are uniquely determined numbers $a _ { n }$ satisfying (1). To deduce the formula (2) for $a _ { n }$ we multiply both sides of(1) by $e ^ { - 2 \pi i m r / k }$ where $m$ and $r$ are nonnegative integers less than $k ,$ and sum on $m$ to get

$$
\sum _ { m = 0 } ^ { k - 1 } w _ { m } e ^ { - 2 \pi i m r / k } = \sum _ { n = 0 } ^ { k - 1 } a _ { n } \sum _ { m = 0 } ^ { k - 1 } e ^ { 2 \pi i ( n - r ) m / k } .
$$

By Theorem 8.1, the sum on $m$ is 0 unless $k | ( n - r )$ . But $| n - r | \leq k - 1$ so $k | ( n - r )$ if, and only if, $n = r$ . Therefore the only nonvanishing term on the right occurs when $n = r$ and we find

$$
\sum _ { m = 0 } ^ { k - 1 } w _ { m } e ^ { - 2 \pi i m r / k } = k a _ { r } .
$$

This equation gives us (2).

Theorem 8.4 Let f be an arithmetical function which is periodic mod $k$ Then there is a uniquely determined arithmetical function $g$ , also periodic mod $k ,$ , such that

$$
f ( m ) = \sum _ { n = 0 } ^ { k - 1 } g ( n ) e ^ { 2 \pi i m n / k } .
$$

In fact, $\pmb { g }$ is given by the formula

$$
g ( n ) = { \frac { 1 } { k } } \sum _ { m = 0 } ^ { k - 1 } f ( m ) e ^ { - 2 \pi i m n / k } .
$$

PROOF. Let $w _ { m } = f ( m )$ for $m = 0 , 1 , 2 , \ldots , k - 1$ and apply Theorem 8.3 to determine the numbers $a _ { 0 } , a _ { 1 } , \dotsc , a _ { k - 1 }$ . Define the function $g$ by the relations $g ( m ) = a _ { m }$ for $m = 0 , 1 , 2 , \ldots , k - 1$ and extend the definition of $g ( m )$ to all integers m by periodicity mod $k$ . Then $f$ is related to $\pmb { g }$ by the equations in the theorem. □

Note. Since both $f$ and $g$ are periodic mod $k$ we can rewrite the sums in Theorem 8.4 as follows :

$$
f ( m ) = \sum _ { n \mathrm { m o d } k } g ( n ) e ^ { 2 \pi i m n / k }
$$

and

$$
g ( n ) = { \frac { 1 } { k } } \sum _ { m \bmod k } f ( m ) e ^ { - 2 \pi i m n / k } .
$$

In each case the summation can be extended over any complete residue system modulo $k$ . The sum in (3) is called the finite Fourier expansion off and the numbers ${ \mathfrak { g } } ( n )$ defined by (4) are called the Fourier coefficients of f.

# 8.3 Ramanujan's sum and generalizations

In Exercise 2.14(b) it is shown that the Möbius function $\mu ( k )$ is the sum of the primitive kth roots of unity. In this section we generalize this result. Specifically, let $\pmb { n }$ be a fi xed positive integer and consider the sum of the nth powers of the primitive kth roots of unity. This sum is known as Ramanujan's sum and is denoted by $c _ { \pmb { k } } ( n )$ :

$$
c _ { k } ( n ) = \sum _ { \mod { k } \atop { ( m , k ) = 1 } } e ^ { 2 \pi i m n / k } .
$$

We have already noted that this sum reduces to the Möbius function when $n = 1$

$$
\mu ( k ) = c _ { k } ( 1 ) .
$$

When $k | n$ the sum reduces to the Euler $\varphi$ function since each term is 1 and the number of terms is $\varphi ( k )$ . Ramanujan showed that $c _ { k } ( n )$ is always an integer and that it has interesting multiplicative properties. He deduced these facts from the relation

$$
c _ { k } ( n ) = \sum _ { d | ( n , k ) } d \mu { \binom { k } { d } } .
$$

This formula shows why $c _ { k } ( n )$ reduces to both $\mu ( k )$ and $\varphi ( k )$ In fact, when $n = 1$ there is only one term in the sum and we obtain $c _ { k } ( 1 ) = \mu ( k )$ And when $k | n$ we have $( n , k ) = k$ and $\begin{array} { r } { c _ { k } ( n ) = \sum _ { d \mid k } d \mu ( k / d ) = \varphi ( k ) } \end{array}$ We shall deduce (5) as a special case of a more general result (Theorem 8.5).

Formula (5) for $c _ { k } ( n )$ suggests that we study general sums of the form

$$
\sum _ { d | ( n , k ) } f ( d ) g { \binom { k } { d } } .
$$

These resemble the sums for the Dirichlet convolution $f * g$ except that we sum over a subset of the divisors of $k$ , namely those $d$ which also divide $\pmb { n }$

Denote the sum in (6) by $s _ { k } ( n )$ Since $\pmb { n }$ occurs only in the gcd $( n , k )$ we have

$$
s _ { k } ( n + k ) = s _ { k } ( n )
$$

so $s _ { k } ( n )$ is a periodic function of $\pmb { n }$ with period $k$ . Hence this sum has a finite Fourier expansion. The next theorem tells us that its Fourier coeicients are given by a sum of the same type.

Theorem 8.5 Let $\begin{array} { r } { s _ { k } ( n ) = \sum _ { d \mid ( n , k ) } f ( d ) g ( k / d ) . } \end{array}$ Then $s _ { k } ( n )$ has the finite Fourier expansion

$$
s _ { k } ( n ) = \sum _ { m \bmod k } a _ { k } ( m ) e ^ { 2 \pi i m n / k }
$$

where

$$
a _ { k } ( m ) = \sum _ { d \downarrow ( m , k ) } g ( d ) f \bigg ( \frac { k } { d } \bigg ) \frac { d } { k } .
$$

PRooF. By Theorem 8.4 the coeff ients $a _ { k } ( m )$ are given by

$$
\begin{array} { l } { \displaystyle a _ { k } ( m ) = \frac { 1 } { k } \sum _ { n \mathrm { m o d } k } s _ { k } ( n ) e ^ { - 2 \pi i n m / k } } \\ { \displaystyle \quad = \frac { 1 } { k } \sum _ { n = 1 } ^ { k } \sum _ { d | n } f ( d ) g \biggl ( \frac { k } { d } \biggr ) e ^ { - 2 \pi i n m / k } . } \end{array}
$$

Now we write $n = c d$ and note that for each fixed $d$ the index c runs from 1 to $k / d$ and we obtain

$$
a _ { k } ( m ) = \frac 1 k \sum _ { d \mid k } f ( d ) g \biggl ( \frac k d \biggr ) \sum _ { c = 1 } ^ { k / d } e ^ { - 2 \pi i c d m / k } .
$$

# 8: Periodic arithmetical functions and Gauss sums

Now we replace $d$ by $k / d$ in the sum on the right to get

$$
a _ { k } ( m ) = \frac { 1 } { k } \sum _ { d \mid \bar { k } } f \biggl ( \frac { k } { d } \biggr ) g ( d ) \sum _ { c = 1 } ^ { d } e ^ { - 2 \pi i c m / d } .
$$

But by Theorem 8.1 the sum on $c$ is 0 unless $d \vert m$ in which case the sum has the value $d .$ Hence

$$
a _ { k } ( m ) = { \frac { 1 } { k } } \sum _ { d \mid k \atop d \mid m } f { \binom { k } { d } } g ( d ) d
$$

which proves (8).

Now we specialize $f$ and $g$ to obtain the formula for Ramanujan's sum mentioned earlier.

Theorem 8.6 We have

$$
c _ { k } ( n ) = \sum _ { d | ( n , k ) } d \mu { \binom { k } { d } } .
$$

PRooF. Taking $f ( k ) = k$ and $g ( k ) = \mu ( k )$ in Theorem 8.5 we find

$$
\sum _ { d \mathop { : } ( n , k ) } d \mu \left( { \frac { k } { d } } \right) = \sum _ { m \bmod k } a _ { k } ( m ) e ^ { 2 \pi i m n / k }
$$

where

$$
a _ { k } ( m ) = \sum _ { d \mid ( m , k ) } \mu ( d ) = \left[ { \frac { 1 } { ( m , k ) } } \right] = { \biggl \{ } 1 \quad { \mathrm { i f ~ } } ( m , k ) = 1 , 
$$

Hence

$$
\sum _ { d | ( n , k ) } d \mu \left( { \frac { k } { d } } \right) = \sum _ { \stackrel { m \bmod k } { ( m , k ) = 1 } } e ^ { 2 \pi i m n / k } = c _ { k } ( n ) .
$$

8.4 Multiplicative properties of the sums $s _ { k } ( n )$

Theorem 8.7 Let

$$
s _ { k } ( n ) = \sum _ { d | ( n , k ) } f ( d ) g { \binom { k } { d } }
$$

where f and $\pmb { g }$ are multiplicative. Then we have

$$
s _ { m k } ( a b ) = s _ { m } ( a ) s _ { k } ( b ) w h e n e v e r ( a , k ) = ( b , m ) = 1 .
$$

In particular, we have

$$
s _ { m } ( a b ) = s _ { m } ( a ) \quad i f ( b , m ) = 1 ,
$$

and

$$
s _ { m k } ( a ) = s _ { m } ( a ) g ( k ) \quad i f \left( a , k \right) = 1 .
$$

PRoOF. The relations $( a , k ) = ( b , m ) = 1$ imply (see Exercise 1.24)

$$
( m k , a b ) = ( a , m ) ( k , b )
$$

with $( a , m )$ and $( b , k )$ relatively prime. Therefore

$$
s _ { m k } ( a b ) = \sum _ { d | ( m k , a b ) } f ( d ) g { \binom { m k } { d } } = \sum _ { d | ( a , m ) ( b , k ) } f ( d ) g { \binom { m k } { d } } .
$$

Writing $d = d _ { 1 } d _ { 2 }$ in the last sum we obtain

$$
\begin{array} { l } { { s _ { m k } ( a b ) = \displaystyle \sum _ { d _ { 1 } | ( a , m ) } \sum _ { d _ { 2 } | \langle b , k \rangle } f ( d _ { 1 } d _ { 2 } ) g \bigg ( \frac { m k } { d _ { 1 } d _ { 2 } } \bigg ) } } \\ { { = \displaystyle \sum _ { d _ { 1 } | ( a , m ) } f ( d _ { 1 } ) g \bigg ( \frac { m } { d _ { 1 } } \bigg ) \sum _ { d _ { 2 } | \langle b , k \rangle } f ( d _ { 2 } ) g \bigg ( \frac { k } { d _ { 2 } } \bigg ) = s _ { m } ( a ) s _ { k } ( b ) . } } \end{array}
$$

This proves (9).

Taking $k = 1$ in (9) we get

$$
s _ { m } ( a b ) = s _ { m } ( a ) s _ { 1 } ( b ) = s _ { m } ( a )
$$

since $s _ { 1 } ( b ) = f ( 1 ) g ( 1 ) = 1$ . This proves (10). Taking $b = 1$ in (9) we find

$$
s _ { m k } ( a ) = s _ { m } ( a ) s _ { k } ( 1 ) = s _ { m } ( a ) g ( k )
$$

since $s _ { k } ( 1 ) = f ( 1 ) g ( k ) = g ( k )$ This proves (11).

ExAMPLE For Ramanujan's sum we obtain the following multiplicative properties:

$$
\begin{array} { r l r l } & { c _ { m k } ( a b ) = c _ { m } ( a ) c _ { k } ( b ) } & & { \mathrm { w h e n e v e r } \ ( a , k ) = ( b , m ) = 1 , } \\ & { c _ { m } ( a b ) = c _ { m } ( a ) } & & { \mathrm { w h e n e v e r } \ ( b , m ) = 1 , } \end{array}
$$

and

$$
c _ { m k } ( a ) = c _ { m } ( a ) \mu ( k ) \qquad { \mathrm { w h e n e v e r } } ( a , k ) = 1 .
$$

Sometimes the sums $s _ { k } ( n )$ can be evaluated in terms of the Dirichlet convolution $f * g$ . In this connection we have :

Theorem 8.8 Let f be completely multiplicative, and let $g ( k ) = \mu ( k ) h ( k ) ,$ where $h$ is multiplicative. Assume that $f ( p ) \neq 0$ and $f ( p ) \neq h ( p )$ for all primes $p ,$ , and let

$$
s _ { k } ( n ) = \sum _ { d \mid ( n , k ) } f ( d ) g { \binom { k } { d } } .
$$

# 8: Periodic arithmetical functions and Gauss sums

Then we have

$$
s _ { k } ( n ) = { \frac { F ( k ) g ( N ) } { F ( N ) } } ,
$$

where $F = f * g$ and $N = k / ( n , k )$

PRoor. First we note that

$$
\begin{array} { l } { { \displaystyle F ( k ) = \sum _ { d \mid k } f ( d ) \mu \biggl ( \frac { k } { d } \biggr ) h \biggl ( \frac { k } { d } \biggr ) = \sum _ { d \mid k } f \biggl ( \frac { k } { d } \biggr ) \mu ( d ) h ( d ) = f ( k ) \sum _ { d \mid k } \mu ( d ) \frac { h ( d ) } { f ( d ) } } } \\ { { \displaystyle ~ = f ( k ) \prod _ { p \mid k } \biggl ( 1 - \frac { h ( p ) } { f ( p ) } \biggr ) . } } \end{array}
$$

Next, we write $a = ( n , k )$ so that $k = a N$ . Then we have

$$
\begin{array} { l } { { s _ { k } ( n ) = \displaystyle \sum _ { d \mid a } f ( d ) \mu \biggl ( \frac { k } { d } \biggr ) h \biggl ( \frac { k } { d } \biggr ) = \displaystyle \sum _ { d \mid a } f ( d ) \mu \biggl ( \frac { a N } { d } \biggr ) h \biggl ( \frac { a N } { d } \biggr ) } } \\ { { { } } } \\ { { { } = \displaystyle \sum _ { d \mid a } f \biggl ( \frac { a } { d } \biggr ) \mu ( N d ) h ( N d ) . } } \end{array}
$$

Now $\mu ( N d ) = \mu ( N ) \mu ( d )$ if $( N , d ) = 1$ , and $\mu ( N d ) = 0$ if $( N , d ) > 1$ , so the last equation gives us

$$
s _ { k } ( n ) = \mu ( N ) h ( N ) \sum _ { \stackrel { d \mid a } { ( N , d ) = 1 } } f \biggl ( \frac { a } { d } \biggr ) \mu ( d ) h ( d ) = f ( a ) \mu ( N ) h ( N ) \sum _ { \stackrel { d \mid a } { ( N , d ) = 1 } } \mu ( d ) \frac { h ( d ) } { f ( d ) }
$$

$$
= f ( a ) \mu ( N ) h ( N ) \prod _ { p \mid n } \left( 1 - { \frac { h ( p ) } { f ( p ) } } \right) = f ( a ) \mu ( N ) h ( N ) { \frac { \prod _ { p \mid n } \left( 1 - { \frac { h ( p ) } { f ( p ) } } \right) } { \prod _ { p \mid n } \left( 1 - { \frac { h ( p ) } { f ( p ) } } \right) } }
$$

$$
= f ( a ) \mu ( N ) h ( N ) { \frac { F ( k ) } { f ( k ) } } { \frac { f ( N ) } { F ( N ) } } = { \frac { F ( k ) \mu ( N ) h ( N ) } { F ( N ) } } = { \frac { F ( k ) g ( N ) } { F ( N ) } } .
$$

ExAmPLE For Ramanujan's sum we obtain the following simplification:

$$
c _ { k } ( n ) = \varphi ( k ) \mu ( N ) / \varphi ( N ) = { \frac { \varphi ( k ) \mu \left( { \frac { k } { ( n , k ) } } \right) } { \varphi \left( { \frac { k } { ( n , k ) } } \right) } } .
$$

# 8.5 Gauss sums associated with Dirichlet characters

Definition For any Dirichlet character $\chi$ mod $k$ the sum

$$
G ( n , \chi ) = \sum _ { m = 1 } ^ { k } \chi ( m ) e ^ { 2 \pi i m n / k }
$$

is called the Gauss sum associated with $\chi$

If $\chi = \chi _ { 1 }$ , the principal character mod $k$ , we have $\chi _ { 1 } ( m ) = 1$ if $( m , k ) = 1 _ { { \mathrm { : } } }$ ,d and $\chi _ { 1 } ( m ) = 0$ otherwise. In this case the Gauss sum reduces to Ramanujan's sum:

$$
G ( n , \chi _ { 1 } ) = \sum _ { \stackrel { m = 1 } { ( m , k ) = 1 } } ^ { k } e ^ { 2 \pi \mathrm { i } m n / k } = c _ { k } ( n ) .
$$

Thus, the Gauss sums $G ( n , \chi )$ can be regarded as generalizations of Ramanu-jan's sum. We turn now to a detailed study of their properties.

The first result is a factorization property which plays an important role in the subsequent development.

Theorem 8.9 $I f \chi$ is any Dirichlet character mod $k$ then

$$
G ( n , \chi ) = \bar { \chi } ( n ) G ( 1 , \chi ) w h e n e v e r ( n , k ) = 1 .
$$

PROOF. When $( n , k ) = 1$ the numbers nr run through a complete residue system mod $k$ with $r .$ Also, $| \chi ( n ) | ^ { 2 } = \chi ( n ) \bar { \chi } ( n ) = 1$ sO

$$
\chi ( r ) = \bar { \chi } ( n ) \chi ( n ) \chi ( r ) = \bar { \chi } ( n ) \chi ( n r ) .
$$

Therefore the sum defining $G ( n , \chi )$ can be written as follows :

$$
\begin{array} { r l r } & { } & { G ( n , \chi ) = \displaystyle \sum _ { r \mathrm { m o d } k } \chi ( r ) e ^ { 2 \pi i n r / k } = \bar { \chi } ( n ) \sum _ { r \mathrm { m o d } k } \chi ( n r ) e ^ { 2 \pi i n r / k } } \\ & { } & \\ & { } & { \qquad = \bar { \chi } ( n ) \sum _ { m \mathrm { m o d } k } \chi ( m ) e ^ { 2 \pi i m / k } = \bar { \chi } ( n ) G ( 1 , \chi ) . } \end{array}
$$

This proves the theorem.

Definition The Gauss sum $\vec { G } ( n , \chi )$ is said to be separable if

$$
G ( n , \chi ) = \bar { \chi } ( n ) G ( 1 , \chi ) .
$$

Theorem 8.9 tells us that $G ( n , \chi )$ is separable whenever $\pmb { n }$ is relatively prime to the modulus $k$ . For those integers $\pmb { n }$ not relatively prime to $k$ we have the following theorem.

Theorem 8.10 If $\chi$ is a character mod $k$ the Gauss sum $G ( n , \chi )$ is separable for every n $i f ,$ and only if,

$$
G ( n , \chi ) = 0 \quad w h e n e v e r \ : ( n , k ) > 1 .
$$

ProoF. Separability always holds if $( n , k ) = 1$ . But if $( n , k ) > 1$ we have $\bar { \chi } ( n ) = 0$ so Equation (12) holds if and only if $G ( n , \chi ) = 0 $ □

The next theorem gives an important consequence of separability.

Theorem 8.11 If $G ( n , \chi )$ is separable for every n then

$$
| G ( 1 , \chi ) | ^ { 2 } = k .
$$

PROOF. We have

$$
\begin{array} { l } { { | G ( 1 , \chi ) | ^ { 2 } = G ( 1 , \chi ) \overline { { { G ( 1 , \chi ) } } } = G ( 1 , \chi ) \displaystyle \sum _ { m = 1 } ^ { k } \bar { \chi } ( m ) e ^ { - 2 \pi i m / k } } } \\ { { \displaystyle \qquad = \sum _ { m = 1 } ^ { k } G ( m , \chi ) e ^ { - 2 \pi i m / k } = \sum _ { m = 1 } ^ { k } \sum _ { r = 1 } ^ { k } \chi ( r ) e ^ { 2 \pi i m r / k } e ^ { - 2 \pi i m / k } } } \\ { { \displaystyle \qquad = \sum _ { r = 1 } ^ { k } \chi ( r ) \sum _ { m = 1 } ^ { k } e ^ { 2 \pi i m ( r - 1 ) / k } = k \chi ( 1 ) = k , } } \end{array}
$$

since the last sum over $\pmb { m }$ is a geometric sum which vanishes unless $r \approx 1$

# 8.6 Dirichlet characters with nonvanishing Gauss sums

Forevery character $\chi$ mod $k$ we have seen that $G ( n , \chi )$ is separable if $( n , k ) = 1 { \mathrm { , } }$ , and that separability of $G ( n , \chi )$ is equivalent to the vanishing of $G ( n , \chi )$ for $( n , k ) > 1 ,$ , Now we describe further properties of those characters such that $G ( n , \chi ) = 0$ whenever $( n , k ) > 1$ . Actually, it is simpler to study the complementary set. The next theorem gives a necessary condition for $G ( n , \chi )$ to be nonzero for $( n , k ) > 1$

Theorem 8.12 Let $\chi$ be a Dirichlet character mod $k$ and assume that $G ( n , \chi ) \neq 0$ for some n satisfying $( n , k ) > 1$ . Then there exists a divisor $d$ of $k , d < k ,$ such that

$$
\chi ( a ) = 1 w h e n e v e r ( a , k ) = 1 a n d a \equiv 1 ( \bmod d ) .
$$

PRoor. For the given $n$ let $q = ( n , k )$ and let $d = k / q$ . Then $d | k$ and, since $q > 1$ , we have $d < k$ Choose any $\pmb { a }$ satisfying $( a , k ) = 1$ and $a \equiv 1$ (mod $d$ ) We will prove that $\chi ( a ) = 1$ ,

Since $( a , k ) = 1$ , in the sum defining $G ( n , \chi )$ we can replace the index of summation $m$ by am and we find

$$
\begin{array} { l } { { G ( n , \chi ) = \displaystyle \sum _ { m \bmod k } \chi ( m ) e ^ { 2 \pi i n m / k } = \displaystyle \sum _ { m \bmod k } \chi ( a m ) e ^ { 2 \pi i n a m / k } } } \\ { { \ } } \\ { { \ = \chi ( a ) \displaystyle \sum _ { m \bmod k } \chi ( m ) e ^ { 2 \pi i n a m / k } . } } \end{array}
$$

Since $a \equiv 1 { \pmod { d } }$ and $d = k / q$ we can write $a = 1 + ( b k / q )$ for some integer $b _ { \cdot }$ , and we have

$$
{ \frac { a n m } { k } } = { \frac { n m } { k } } + { \frac { b k n m } { q k } } = { \frac { n m } { k } } + { \frac { b n m } { q } } \equiv { \frac { n m } { k } } { \mathrm { ~ ( m o d ~ 1 ) } }
$$

since $q \{ n$ Hence $e ^ { 2 \pi i n a m / k } \ = e ^ { 2 \pi i n m / k }$ and the sum for $G ( n , \chi )$ becomes

$$
G ( n , \chi ) = \chi ( a ) \sum _ { m \bmod k } \chi ( m ) e ^ { 2 \pi i n m / k } = \chi ( a ) G ( n , \chi ) .
$$

Since $G ( n , \chi ) \neq 0$ this implies $\chi ( a ) = 1$ , as asserted.

The foregoing theorem leads us to consider those characters $\chi$ mod $k$ for which there is a divisor $d < k$ satisfying (14). These are treated next.

# 8.7 Induced moduli and primitive characters

Definition of induced modulus Let $\chi$ be a Dirichlet character mod $k$ and let $d$ be any positive divisor of $k$ . The number $d$ is called an induced modulus for $\chi$ if we have

$$
\chi ( a ) = 1 \quad { \mathrm { w h e n e v e r } } ( a , k ) = 1 { \mathrm { ~ a n d ~ } } a \equiv 1 { \mathrm { ~ ( m o d ~ } } d ) .
$$

In other words, $d$ is an induced modulus if the character $\chi$ mod $k$ acts like a character mod $d$ on the representatives of the residue class I mod $d$ which are relatively prime to $k$ . Note that $k$ itself is always an induced modulus for $\chi$ ,

Theorem 8.13 Let $\chi$ be a Dirichlet character mod $k$ . Then 1 is an induced modulus for $\chi \ : \dot { y } ,$ and onlyi $f , \chi = \chi _ { 1 }$ .

PROOF. If ${ \chi } = { \chi } _ { 1 }$ then $\chi ( a ) = 1$ for all $a$ relatively prime to $k$ . But since every $a$ satisfies $a \equiv 1$ (mod 1) the number 1 is an induced modulus.

Con versely, if 1 is an induced modulus, then $\chi ( a ) = 1$ whenever $( a , k ) = 1 { \mathrm { , } }$ , so ${ \chi } = { \chi } _ { 1 }$ since $\chi$ vanishes on the numbers not prime to $k$ □

# 8: Periodic arithmetical functions and Gauss sums

For any Dirichlet character mod $k$ the modulus $k$ itself is an induced modulus. If there are no others we cal the character primitive. That is, we have:

Definition of primitive characters A Dirichlet character $\chi$ mod $k$ is said to be primitive mod $k$ if it has no induced modulus $d < k$ . In other words, $\chi$ is primitive mod $k$ if, and only if, for every divisor $d$ of $k , 0 < d < k ,$ ,d there exists an integer $a \equiv 1$ (mod $d$ ), $\left\{ a , k \right\} = 1$ , such that $\chi ( a ) \neq 1$ .

If $k > 1$ the principal character $\chi _ { 1 }$ is not primitive since it has 1 as an induced modulus. Next we show that if the modulus is prime every nonprincipal character is primitive.

Theorem 8.14 Every nonprincipal character $\chi$ modulo a prime $p$ is $\pmb { a }$ primitive character mod $p$

PRooF. The only divisors of $p$ are 1 and $p$ so these are the only candidates for induced moduli. But if $\chi \neq \chi _ { 1 }$ the divisor 1 is not an induced modulus so $\chi$ has no induced modulus $< p$ . Hence $\chi$ is primitive. □

Now we can restate the results of Theorems 8.10 through 8.12 in the terminology of primitive characters.

Theorem 8.15 Let $\chi$ be a primitive Dirichlet character mod k. Then we have:

(a) $G ( n , \chi ) = 0$ for every n with $( n , k ) > 1$ (b) $G ( n , \chi )$ is separable for every n. (c) $| G ( 1 , \chi ) | ^ { 2 } = k .$ (

PROOF. If $G ( n , \chi ) \neq 0$ for some n with $( n , k ) > 1$ then Theorem 8.12 shows that $\chi$ has an induced modulus $d < k$ , so x cannot be primitive. This proves (a).

Part (b) follows from (a) and Theorem 8.10. Part (c) follows from part (b) and Theorem 8.11. □

Note. Theorem 8.15(b) shows that the Gauss sum $G ( n , \chi )$ is separable if $\chi$ is primitive. In a later section we prove the converse. That is, if $G ( n , \chi )$ is separable for every $n$ then $\chi$ is primitive. (See Theorem 8.19.)

# 8.8 Further properties of induced moduli

The next theorem refers to the action of $\chi$ on numbers which are congruent modulo an induced modulus.

Theorem 8.16 Let $\chi$ be a Dirichlet character mod $k$ and assume $d | k , d > 0$ Then $d$ is an induced modulus for $\chi \ : i f ,$ and only $i f ,$ ,

$$
\chi ( a ) = \chi ( b ) \quad w h e n e v e r \left( a , k \right) = ( b , k ) = 1
$$

PRooF. If (16) holds then $d$ is an induced modulus since we may choose $b = 1$ and refer to Equation (15). Now we prove the converse.

Choose $a$ and $b$ so that $( a , k ) = ( b , k ) = 1$ and ${ a \equiv b }$ (mod $d ]$ . We will show that $\chi ( a ) = \chi ( b )$ .Let $a ^ { \prime }$ be the reciprocal of $\pmb { a }$ mod $k$ $, a a ^ { \prime } \equiv 1$ (mod $k$ ) The reciprocal exists because $( a , k ) = 1$ .Now ${ a } \boldsymbol { a } ^ { \prime } \equiv 1$ (mod $d$ since $d \{ k$ Hence $\chi ( a a ^ { \prime } ) = 1$ since $d$ is an induced modulus. But $a a ^ { \prime } \equiv b a ^ { \prime } \equiv 1$ (mod $d$ )d because $a \equiv b$ (mod $d$ ), hence $\chi ( a a ^ { \prime } ) = \chi ( b a ^ { \prime } ) ;$ sO

$$
\chi ( a ) \chi ( a ^ { \prime } ) = \chi ( b ) \chi ( a ^ { \prime } ) .
$$

But $\chi ( a ^ { \prime } ) \neq 0$ since $\chi ( a ) \chi ( a ^ { \prime } ) = 1$ . Canceling $\chi ( a ^ { \prime } )$ we find $\chi ( a ) = \chi ( b ) ,$ and this completes the proof. □

Equation (16) tells us that $\chi$ is periodic mod $d$ on those integers relatively prime to $k$ . Thus $\chi$ acts very much like a character mod $d .$ To further explore this relation it is worthwhile to consider a few examples.

ExamPLE 1 The follwing table describes one of the characters $\chi$ mod 9.   

<table><tr><td>n</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>x(n)</td><td>1</td><td>-1</td><td>0</td><td>1</td><td>-1</td><td>0</td><td>1</td><td>-1</td><td>0</td></tr></table>

We note that this table is periodic modulo 3 so 3 is an induced modulus for x. In fact, $\chi$ acts like the following character $\psi$ modulo 3:

$$
\frac { n } { \psi ( n ) \quad \quad 1 \quad \quad 2 \quad \quad 3 }
$$

Since $\chi ( n ) = \psi ( n )$ for all n we call $\chi$ an extension of $\psi$ . It is clear that whenever x is an extension of a character $\psi$ modulo $d$ then $d$ will be an induced modulus for $\chi$ (id:)

ExaMPLE 2 Now we examine one of the characters $\chi$ modulo 6:

$$
\frac { n } { \chi ( n ) \qquad 1 \qquad 2 \qquad 3 \qquad 4 \qquad 5 \qquad 6 }
$$

In this case the number 3 is an induced modulus because $\chi ( n ) = 1$ for all $n \equiv 1$ (mod 3) with $( n , 6 ) = 1$ . (There is only one such $n ,$ namely, $n = 1 .$ (d

# 8: Periodic arithmetical functions and Gauss sums

However, $\chi$ is not an extension of any character $\psi$ modulo 3, because the only characters modulo 3 are the principal character $\psi _ { 1 }$ , given by the table:

$$
\frac { n } { \psi _ { 1 } ( n ) } \underbrace { 1 } _ { 1 } \underbrace { 2 \phantom { \psi _ { 1 } ( n ) } 3 } _ { 1 \ 0 }
$$

and the character $\psi$ shown in Example 1. Since $\chi ( 2 ) = 0$ it cannot be an extension of either $\psi$ or $\psi _ { 1 }$ -

These examples shed some light on the next theorem.

Theorem 8.17 Let $\chi$ be a Dirichlet character modulo $k$ and assume $d | k , d > 0$ Then the following two statements are equivalent :

(a) $d$ is an induced modulus for $\chi$ (b) There is a character $\psi$ modulo $d$ such that

$$
\chi ( n ) = \psi ( n ) \chi _ { 1 } ( n ) \quad f o r \ : a l l \ : n ,
$$

where $\mathbb { \chi } _ { 1 }$ is the principal character modulo $k$ -

PRooF. Assume (b) holds. Choose $\pmb { n }$ satisfying $( n , k ) = 1$ , $n \equiv 1 { \pmod { d } }$ . Then $\chi _ { 1 } ( n ) = \psi ( n ) = 1$ so $\chi ( n ) = 1$ and hence $d$ is an induced modulus. Thus, (b) implies (a).

Now assume (a) holds. We will exhibit a character $\psi$ modulo $d$ for which (17) holds. We define $\psi ( n )$ as follows: If $( n , d ) > 1$ , let $\psi ( n ) = 0$ In this case we also have $( n , k ) > 1$ so (17) holds because both members are zero.

Now suppose $( n , d ) = 1$ . Then there exists an integer m such that $m \equiv$ n (mod $d$ , $( m , k ) = 1$ . This can be proved immediately with Dirichlet's theorem. The arithmetic progression $x d + n$ contains infinitely many primes. We choose one that does not divide $k$ and call this m. However, the result is not that deep; the existence of such an m can easily be established without using Dirichlet's theorem. (See Exercise 8.4 for an alternate proof.) Having chosen m, which is unique modulo $d _ { \ast }$ , we define

$$
\psi ( n ) = \chi ( m ) .
$$

The number $\psi ( n )$ is well-defined because $\chi$ takes equal values at numbers which are congruent modulo $d$ and relatively prime to $k$ .

The reader can easily verify that $\chi$ is, indeed, a character mod $d .$ We shall verify that Equation (17) holds for all $\pmb { n }$

If $( n , k ) = 1$ then $( n , d ) = 1$ sO $\psi ( n ) = \chi ( m )$ for some $m \equiv n { \pmod { d } } .$ Hence, by Theorem 8.16,

$$
\chi ( n ) = \chi ( m ) = \psi ( n ) = \psi ( n ) \chi _ { 1 } ( n )
$$

since $\chi _ { 1 } ( n ) = 1$

If $( n , k ) > 1 .$ then $\chi ( n ) = \chi _ { 1 } ( n ) = 0$ and both members of (17) are 0. Thus, (17) holds for all $\pmb { n }$ □

# 8.9 The conductor of a character

Definition Let $\chi$ be a Dirichlet character mod $k$ . The smallest induced modulus $d$ for $\chi$ is called the conductor of $\chi$

Theorem 8.18 Every Dirichlet character $\chi$ mod $k$ can be expressed as a product,

$$
\chi ( n ) = \psi ( n ) \chi _ { 1 } ( n ) \quad f o r \ : a l l \ : n ,
$$

where $\chi _ { 1 }$ is the principal character mod $k$ and $\psi$ is a primitive character modulo the conductor of $\psi$

PROOF. Let $d$ be the conductor of $\chi$ From Theorem 8.17 we know that $\chi$ can be expressed as a product of the form (18), where $\psi$ is a character mod $d$ Now we shall prove that $\psi$ is primitive mod $d$

We assume that $\psi$ is not primitive mod $d$ and arrive at a contradiction. If $\psi$ is not primitive mod $d$ there is a divisor $q$ of d, $q < d ,$ which is an induced modulus for $\psi$ . We shall prove that this $q$ , which divides $k$ , is also an induced modulus for $\chi _ { \ i }$ , contradicting the fact that $d$ is the smallest induced modulus for $\chi$ ,

Choose $n \equiv 1 { \pmod { q } } , ( n , k ) = 1$ Then

$$
\chi ( n ) = \psi ( n ) \chi _ { 1 } ( n ) = \psi ( n ) = 1
$$

because $q$ is an induced modulus for $\psi$ . Hence $q$ is also an induced modulus for $\chi$ and this is a contradiction. □

# 8.10 Primitive characters and separable Gauss sums

As an application of the foregoing theorems we give the following alternate description of primitive characters.

Theorem 8.19 Let $\chi$ be a character mod $k$ . Then $\chi$ is primitive mod $k \ i f ,$ and only if, the Gauss sum

$$
G ( n , \chi ) = \sum _ { m \bmod k } \chi ( m ) e ^ { 2 \pi i m n / k }
$$

is separable for every n.

PROOF. If $\chi$ is primitive, then $G ( n , \chi )$ is separable by Theorem 8.15(b). Now we prove the converse.

Because of Theorems 8.9 and 8.10 it suffices to prove that if $\chi$ is not primitive mod $k$ then for some $r$ satisfying $( r , k ) > 1$ we have $G ( r , \chi ) \neq 0 .$ Suppose, then, that $\chi$ is not primitive mod $k$ . This implies $k > 1$ . Then $\chi$ has a conductor $d < k$ . Let $r = k / d$ Then $( r , k ) > 1$ and we shall prove that

$G ( r , \chi ) \neq 0$ for this $r .$ . By Theorem 8.18 there exists a primitive character $\psi$ mod $d$ such that $\chi ( n ) = \psi ( n ) \chi _ { 1 } ( n )$ for all $\pmb { n }$ . Hence we can write

$$
\begin{array} { r l r }  G ( r , \chi ) = \displaystyle \sum _ { m \bmod k } \psi ( m ) \chi _ { 1 } ( m ) e ^ { 2 \pi i r m / k } = \displaystyle \sum _  \begin{array} { l } { m \bmod k } \\ { ( m , k ) = 1 } \\ { = \displaystyle \sum _ { m \bmod k } \psi ( m ) e ^ { 2 \pi i m / d } = \frac { \varphi ( k ) } { \varphi ( d ) } \sum _ { \begin{array} { l } { m \bmod d } \\ { ( m , k ) = 1 } \end{array} } \psi ( m ) e ^ { 2 \pi i m / k } } \\ { ( m , k ) = 1 } & { \end{array} } & { } \end{array}
$$

where in the last step we used Theorem 5.33(a). Therefore we have

$$
G ( r , \chi ) = { \frac { \varphi ( k ) } { \varphi ( d ) } } G ( 1 , \psi ) .
$$

But $| G ( 1 , \psi ) | ^ { 2 } = d$ by Theorem 8.15 (since $\psi$ is primitive mod $d$ ) and hence $G ( r , \chi ) \neq 0$ . This completes the proof. □

# 8.11 The finite Fourier series of the Dirichlet characters

Since each Dirichlet character $\chi$ mod $k$ is periodic mod $k$ it has a finite Fourier expansion

$$
\chi ( m ) = \sum _ { n = 1 } ^ { k } a _ { k } ( n ) e ^ { 2 \pi i m n / k } ,
$$

and Theorem 8.4 tells us that its coefficients are given by the formula

$$
a _ { k } ( n ) = { \frac { 1 } { k } } \sum _ { m = 1 } ^ { k } \chi ( m ) e ^ { - 2 \pi i m n / k } .
$$

The sum on the right is a Gauss sum $G ( - n , \chi )$ so we have

$$
a _ { k } ( n ) = { \frac { 1 } { k } } G ( - n , \chi ) .
$$

When $\chi$ is primitive the Fourier expansion (19) can be expressed as follows:

Theorem 8.20 The finite Fourier expansion of a primitive Dirichlet character $x$ mod $k$ has the form

$$
\chi ( m ) = \frac { \tau _ { k } ( \chi ) } { \sqrt { k } } \sum _ { n = 1 } ^ { k } \bar { \chi } ( n ) e ^ { - 2 \pi i m n / k }
$$

where

$$
\tau _ { k } ( \chi ) = \frac { G ( 1 , \chi ) } { \sqrt { k } } = \frac { 1 } { \sqrt { k } } \sum _ { m = 1 } ^ { k } \chi ( m ) e ^ { 2 \pi i m / k } .
$$

The numbers $\tau _ { k } ( \chi )$ have absolute value 1.

PROOF. Since $\chi$ is primitive we have $G ( - n , \chi ) = \bar { \chi } ( - n ) G ( 1 , \chi )$ and (20) implies $a _ { k } ( n ) = \bar { \chi } ( - n ) G ( 1 , \chi ) / k$ . Therefore (19) can be written as

$$
\chi ( m ) = \frac { G ( 1 , \chi ) } { k } \sum _ { n = 1 } ^ { k } \bar { \chi } ( - n ) e ^ { 2 \pi i m n / k } = \frac { G ( 1 , \chi ) } { k } \sum _ { n = 1 } ^ { k } \bar { \chi } ( n ) e ^ { - 2 \pi i m n / k } ,
$$

which is the same as (21). Theorem 8.11 shows that the numbers $\tau _ { k } ( \chi )$ have absolute value 1. □

# 8.12 Pólya's inequality for the partial sums of primitive characters

The proof of Dirichlet's theorem given in Chapter 7 made use of the relation

$$
\left| \sum _ { m \leq x } \chi ( m ) \right| \leq \varphi ( k )
$$

which holds for any Dirichlet character $\chi$ mod $k$ and every real $x \ge 1$ .This cannot be improved when $\chi = \chi _ { 1 }$ because $\begin{array} { r } { \sum _ { m = 1 } ^ { k } \chi _ { 1 } ( m ) = \varphi ( k ) . } \end{array}$ However, Pólya showed that the inequality can be considerably improved when $\chi$ is a primitive character.

Theorem 8.21 Polya's inequality. $I f \chi$ is any primitive character mod $k$ then for all $x \ge 1$ we have

$$
\left| \sum _ { m \leq x } \chi ( m ) \right| < { \sqrt { k } } \log k .
$$

PROOF. We express $\chi ( m )$ by its finite Fourier expansion, as given in Theorem 8.20

$$
\chi ( m ) = \frac { \tau _ { k } ( \chi ) } { \sqrt { k } } \sum _ { n = 1 } ^ { k } \bar { \chi } ( n ) e ^ { - 2 \pi i m n / k } ,
$$

and sum over all $m \leq x$ to get

$$
\sum _ { m \leq x } \chi ( m ) = \frac { \tau _ { k } ( \chi ) } { \sqrt { k } } \sum _ { n = 1 } ^ { k - 1 } \bar { \chi } ( n ) \sum _ { m \leq x } e ^ { - 2 \pi i m n / k }
$$

since $\chi ( k ) = 0 .$ Taking absolute values and multiplying by $\sqrt { k }$ we find

$$
{ \sqrt { k } } \left| \sum _ { m \leq x } \chi ( m ) \right| \leq \sum _ { n = 1 } ^ { k - 1 } \left| \sum _ { m \leq x } e ^ { - 2 \pi i m n / k } \right| = \sum _ { n = 1 } ^ { k - 1 } | f ( n ) | ,
$$

say, where

$$
f ( n ) = \sum _ { m \leq x } e ^ { - 2 \pi i m n / k } .
$$

# 8: Periodic arithmetical functions and Gauss sums

Now

$$
f ( k - n ) = \sum _ { m \leq x } e ^ { - 2 \pi i m ( k - n ) / k } = \sum _ { m \leq x } e ^ { 2 \pi i m n / k } = \overline { { f ( n ) } }
$$

SO

$| f ( k - n ) | = | f ( n ) |$ . Hence (24) can be written as

$$
{ \sqrt { k } } \left| \sum _ { m \leq x } \chi ( m ) \right| \leq 2 \sum _ { n \leq k / 2 } | f ( n ) | .
$$

Now $f ( n )$ is a geometric sum of the form

$$
f ( n ) = \sum _ { m = 1 } ^ { r } y ^ { m }
$$

where $r = [ x ]$ and $y = e ^ { - 2 \pi i n / k }$ . Here $y \neq 1$ since $1 \leq n \leq k - 1$ Wriing $z = e ^ { - \pi i n / k }$ , we have $y = z ^ { 2 }$ and $z ^ { 2 } \neq 1$ since $n \leq k / 2$ Hence we have

$$
f ( n ) = y { \frac { y ^ { r } - 1 } { y - 1 } } = z ^ { 2 } { \frac { z ^ { 2 r } - 1 } { z ^ { 2 } - 1 } } = z ^ { r + 1 } { \frac { z ^ { r } - z ^ { - r } } { z - z ^ { - 1 } } }
$$

sO

$$
\left| f ( n ) \right| = \left| { \frac { z ^ { r } - z ^ { - r } } { z - z ^ { - 1 } } } \right| = \left| { \frac { e ^ { - \pi i r n / k } - e ^ { \pi i r n / k } } { e ^ { - \pi i n / k } - e ^ { \pi i n / k } } } \right| = { \frac { \left| \sin { \frac { \pi r n } { k } } \right| } { \left| \sin { \frac { \pi n } { k } } \right| } } \le { \frac { 1 } { \sin { \frac { \pi n } { k } } } } .
$$

Now we use the inequality sin $t \geq 2 t / \pi$ ,valid for $0 \leq t \leq \pi / 2$ with $t =$ $\pi n / k$ to get

$$
| f ( n ) | \leq \frac { 1 } { \frac { 2 } { \pi } \frac { \pi n } { k } } = \frac { k } { 2 n } .
$$

Hence (25) becomes

$$
{ \sqrt { k } } \left| \sum _ { m \leq x } \chi ( m ) \right| \leq k \sum _ { n \leq k / 2 } { \frac { 1 } { n } } < k \log k ,
$$

and this proves (23).

Note. In a later chapter we will prove that Pólya's inequality can be extended to any nonprincipal character. For nonprimitive characters it takes the form

$$
\sum _ { m \leq x } \chi ( m ) = O ( { \sqrt { k } } \log k ) .
$$

(See Theorem 13.15.)

# Exercises for Chapter 8

1. Let $x = e ^ { 2 \pi i / n }$ and prove that

$$
\sum _ { k = 1 } ^ { n - 1 } k x ^ { k } = { \frac { n } { x - 1 } } .
$$

2. Let $\begin{array} { r } { ( ( { \boldsymbol { \mathbf { \mathit { x } } } } ) ) = { \boldsymbol { \mathbf { \mathit { x } } } } - [ { \boldsymbol { \mathbf { \mathit { x } } } } ] - \frac { 1 } { 2 } } \end{array}$ if $_ { x }$ is not an integer, and let $( ( x ) ) = 0$ otherwise. Note that $\left( \left( x \right) \right)$ is a periodic function of $x$ with period 1. If $k$ and $\pmb { n }$ are integers, with $n > 0 ;$ , prove that

$$
\left( { \binom { k } { n } } \right) = \mathrm { ~ - ~ } { \frac { 1 } { 2 n } } \sum _ { m = 1 } ^ { n - 1 } \cot { \frac { \pi m } { n } } \sin { \frac { 2 \pi k m } { n } } .
$$

3. Let $c _ { k } ( m )$ denote Ramanujan's sum and let $\begin{array} { r } { M ( x ) = \sum _ { n \leq x } \mu ( n ) . } \end{array}$ the partial sums of the Möbius function.

(a) Prove that

$$
\sum _ { k = 1 } ^ { n } c _ { k } ( m ) = \sum _ { d \mid m } d M { \binom { n } { \tilde { d } } } .
$$

In particular, when $n = m$ , we have

$$
\sum _ { k = 1 } ^ { m } c _ { k } ( m ) = \sum _ { d \mid m } d M \left( { \frac { m } { d } } \right) .
$$

(b) Use (a) to deduce that

$$
M ( m ) = m \sum _ { d \mid m } { \frac { \mu ( m / d ) } { d } } \sum _ { k = 1 } ^ { d } c _ { k } ( d ) .
$$

(c) Prove that

$$
\sum _ { m = 1 } ^ { n } c _ { k } ( m ) = \sum _ { d \mid k } d \mu { \binom { k } { d } } { \binom { n } { d } } .
$$

4. Let $n , a , d$ be given integers with $( a , d ) = 1 .$ Let $m = a + q d$ where $q$ is the product (possibly empty) of all primes which divide $\pmb { n }$ but not $\pmb { a }$ . Prove that

$$
m \equiv a { \pmod { d } } \qquad \mathrm { a n d } ( m , n ) = 1 .
$$

5. Prove that there exists no real primitive character $\chi$ mod $k$ if $k = 2 m$ , where $\pmb { m }$ is odd.

6. Let $\chi$ be a character mod $k$ If $k _ { 1 }$ and $k _ { 2 }$ are induced moduli for $\chi$ prove that so too is $( k _ { 1 } , k _ { 2 } ) ,$ their gcd.

7. Prove that the conductor of $\chi$ divides every induced modulus for $\pmb { \chi }$

In Exercises 8 through 12, assume that $k = k _ { 1 } k _ { 2 } \cdots k _ { r }$ , where the positive integers $k _ { i }$ are relatively prime in pairs: $( k _ { i } , k _ { j } ) = 1$ if $i \neq j$ ,

8. (a) Given any integer $\pmb { a }$ , prove that there is an integer $a _ { i }$ such that

$$
a _ { i } \equiv a { \mathrm { ~ ( m o d ~ } } k _ { i } { \mathrm { ) } } \qquad { \mathrm { a n d ~ } } a _ { i } \equiv 1 { \mathrm { ~ ( m o d ~ } } k _ { j } { \mathrm { ) } } \quad { \mathrm { f o r ~ a l l ~ } } j \neq i .
$$

# 8:Periodic arithmetical functions and Gauss sums

(b) Let $\chi$ be a character mod $k$ Define $\chi _ { \mathrm { i } }$ by the equation

$$
\chi _ { i } ( a ) = \chi ( a _ { i } ) ,
$$

where $a _ { i }$ is the integer of part (a). Prove that $\chi _ { i }$ is a character mod $k _ { i }$

9. Prove that every character $\chi$ mod $k$ can be factored uniquely as a product of the form $\chi = \chi _ { 1 } \chi _ { 2 } \cdot \cdot \cdot \chi _ { r }$ , where $\mathbb { \chi } _ { i }$ is a character mod $k _ { i }$ -

10. Let $f ( \chi )$ denote the conductor of $\chi$ If $\chi$ has the factorization in Exercise 9, prove that $f ( \chi ) = f ( \chi _ { 1 } ) \cdot \cdot \cdot f ( \chi _ { r } ) .$

11. If $\chi$ has the factorization in Exercise 9, prove that for every integer $\pmb { a }$ we have

$$
G ( a , \chi ) = \prod _ { i = 1 } ^ { r } \chi _ { i } \biggl ( \frac { k } { k _ { i } } \biggr ) G ( a _ { i } , \chi _ { i } ) ,
$$

where $a _ { i }$ is the integer of Exercise 8.

12. If $\chi$ has the factorization in Exercise 9, prove that $\chi$ is primitive mod $k$ if, and only if, each $\chi _ { i }$ is primitive mod $k _ { i }$ . [Hint : Theorem 8.19.]

13. Let $\chi$ be a primitive character mod $k$ Prove that if $N < M$ we have

$$
\left| \sum _ { m = N + 1 } ^ { M } \frac { \chi ( m ) } { m } \right| < \frac { 2 } { N + 1 } \sqrt { k } \log k .
$$

14. This exercise outlines a slight improvement in Polya's inequality. Refer to the proof of Theorem 8.21. After inequality (26) write

$$
\sum _ { n \leq k / 2 } | f ( n ) | \leq \sum _ { n \leq k / 2 } { \frac { 1 } { \sin { \frac { \pi n } { k } } } } < { \frac { 1 } { \sin { \frac { \pi } { k } } } } + \int _ { 1 } ^ { k / 2 } { \frac { d t } { \sin { \frac { \pi t } { k } } } } .
$$

Show that the integral is less than $- ( k / \pi ) \log ( \sin ( \pi / 2 k ) )$ and deduce that

$$
\left| \sum _ { n \leq x } \chi ( n ) \right| < { \sqrt { k } } + { \frac { 2 } { \pi } } { \sqrt { k } } \log k .
$$

This improves Polya's inequality by a factor $2 / \pi$ in the principal term.

15. The Kloosterman sum $K ( m , n ; k )$ is defi ned as follows:

$$
K ( m , n ; k ) = \sum _ { \begin{array} { l } { h \bmod k } \\ { ( h , k ) = 1 } \end{array} } e ^ { 2 \pi i ( m h + n h ^ { \prime } ) / k }
$$

where $\pmb { h } ^ { \prime }$ is the reciprocal of h mod $k$ . When $k | n$ this reduces to Ramanujan's sum $c _ { k } ( m )$ . Derive the following properties of Kloosterman sums:

(a) $K ( m , n ; k ) = K ( n , m ; k )$

(b) $K ( m , n ; k ) = K ( 1 , m n ; k )$ whenever $( m , k ) = 1 ,$

(c) Given integers $n , k _ { 1 } , k _ { 2 }$ such that $( k _ { 1 } , k _ { 2 } ) = 1$ , show that there exist integers $n _ { 1 }$ and $n _ { 2 }$ such that

$$
n \equiv n _ { 1 } k _ { 2 } ^ { 2 } + n _ { 2 } k _ { 1 } ^ { 2 } { \pmod { k _ { 1 } k _ { 2 } } } ,
$$

and that for these integers we have

$$
K ( m , n ; k _ { 1 } k _ { 2 } ) = K ( m , n _ { 1 } ; k _ { 1 } ) K ( m , n _ { 2 } ; k _ { 2 } ) .
$$

This reduces the study of Kloosterman sums to the special case $K ( m , n ; p ^ { a } ) ,$ where $p$ is prime.

16. If $\pmb { n }$ and $k$ are integers, $n > 0$ the sum

$$
G ( k ; n ) = \sum _ { r \ : = 1 } ^ { n } e ^ { 2 \pi i k r ^ { 2 } / n }
$$

is called a quadratic Gauss sum. Derive the following properties of quadratic Gauss sums:

(a) $G ( k ; m n ) = G ( k m ; n ) G ( k n ; m )$ whenever $( m , n ) = 1$ . This reduces the study of Gauss sums to the special case $G ( k ; p ^ { \alpha } ) ,$ where $p$ is prime.

(b) Let $p$ be an odd prime, $p \chi k , \alpha \geq 2$ Prove that $G ( k ; p ^ { \alpha } ) = p G ( k ; p ^ { \alpha - 2 } )$ and deduce that

$$
\begin{array}{c} \begin{array} { r } { G ( k ; p ^ { \alpha } ) = \left\{ { p ^ { \alpha / 2 } } \begin{array} { l l } { \mathrm { i f ~ } \alpha \mathrm { ~ i s ~ e v e n , } } \\ { p ^ { ( \alpha - 1 ) / 2 } G ( k ; p ) } & { \mathrm { i f ~ } \alpha \mathrm { ~ i s ~ o d d . } } \end{array} \right.} \end{array}   \end{array}
$$

Further properties of the Gauss sum $G ( k ; p )$ are developed in the next chapter where it is shown that $G ( k ; p )$ is the same as the Gauss sum $G ( k , \chi )$ associated with a certain Dirichlet character $\mathbb { \chi }$ mod $p$ (See Exercise 9.9.)

# 9 Quadratic Residues and the Quadratic Reciprocity Law

# 9.1 Quadratic residues

As shown in Chapter 5, the problem of solving a polynomial congruence

$$
f ( x ) \equiv 0 { \pmod { m } }
$$

can be reduced to polynomial congruences with prime moduli plus a set of linear congruences. This chapter is concerned with quadratic congruences of the form

$$
x ^ { 2 } \equiv n { \pmod { p } }
$$

where $p$ is an odd prime and $n \not \equiv 0 { \bigl ( } { \mathrm { m o d ~ } } p { \bigr ) }$ . Since the modulus is prime we know that (1) has at most two solutions. Moreover, if $x$ is a solution so is $- { \boldsymbol { x } } .$ , hence the number of solutions is either 0 or 2.

Definition If congruence (1) has a solution we say that $\pmb { n }$ is a quadratic residue mod $p$ and we write $n R p$ , If (1) has no solution we say that $\pmb { n }$ is a quadratic non residue mod $p$ and we write $n \overrightarrow { R } p$

Two basic problems dominate the theory of quadratic residues :

1. Given a prime $p$ , determine which $\pmb { n }$ are quadratic residues mod $p$ and which are quadratic nonresidues mod $p$

2. Given $n ,$ determine those primes $p$ for which $\pmb { n }$ is a quadratic residue mod $p$ and those for which $\pmb { n }$ is a quadratic nonresidue mod $p$

We begin with some methods for solving problem 1.

ExAMPLE To find the quadratic residues modulo 11 we square the numbers 1, 2, ..., 10 and reduce mod 11. We obtain

$$
1 ^ { 2 } \equiv 1 , \qquad 2 ^ { 2 } \equiv 4 , \qquad 3 ^ { 2 } \equiv 9 , \qquad 4 ^ { 2 } \equiv 5 , \qquad 5 ^ { 2 } \equiv 3 \ ( \mathrm { m o d } \ 1 1 ) .
$$

It sufices to square only the first half of the numbers since

$$
6 ^ { 2 } \equiv ( - 5 ) ^ { 2 } \equiv 3 , { \Big . } 7 ^ { 2 } \equiv ( - 4 ) ^ { 2 } \equiv 5 , . . . , 1 0 ^ { 2 } \equiv ( - 1 ) ^ { 2 } \equiv 1 { \pmod { 1 1 } } .
$$

Consequently, the quadratic residues mod 11 are 1, 3, 4, 5, 9, and the nonresidues are 2, 6, 7, 8, 10.

This example ilustrates the following theorem.

Theorem 9.1 Let $p$ be an odd prime. Then every reduced residue system mod $p$ contains exactly $( p - 1 ) / 2$ quadratic residues and exactly $( p - 1 ) / 2$ quadratic nonresidues mod $p$ . The quadratic residues belong to the residue classes containing the numbers

$$
1 ^ { 2 } , 2 ^ { 2 } , 3 ^ { 2 } , \ldots , \left( { \frac { p - 1 } { 2 } } \right) ^ { 2 } .
$$

ProoF. First we note that the numbers in (2) are distinct mod $p$ In fact, if $x ^ { 2 } \equiv y ^ { 2 }$ (mod $p \llap / ,$ with $1 \leq x \leq ( p - 1 ) / 2$ and $1 \leq y \leq ( p - 1 ) / 2$ , then

$$
( x - y ) ( x + y ) \equiv 0 { \pmod { p } } .
$$

But $1 < x + y < p ~ \mathrm { s o } ~ x - y \equiv 0 ~ ( \mathrm { m o d } ~ p ) ;$ hence $x = y$ . Since

$$
( p - k ) ^ { 2 } \equiv k ^ { 2 } { \bf \Gamma } ( { \bf m o d } p ) ,
$$

every quadratic residue is congruent mod $p$ to exactly one of the numbers in (2). This completes the proof. □

The following brief table of quadratic residues $R$ and nonresidues $\overbar { R }$ was obtained with the help of Theorem 9.1.

<table><tr><td></td><td>p = 3</td><td>p=5 p=7</td><td>p=11</td><td>p= 13</td></tr><tr><td>R:</td><td>1</td><td>1,4 1,2,4</td><td>1,3,4, 5,9</td><td>1, 3, 4, 9, 10, 12</td></tr><tr><td>R:</td><td>2</td><td>2,3 3,5,6</td><td>2,6, 7, 8, 10</td><td>2, 5,6, 7, 8, 11</td></tr></table>

# 9.2 Legendre's symbol and its properties

Definition Let $p$ be an odd prime. If $n \not \equiv 0 { \bigl ( } { \mathrm { m o d } } p { \bigr ) }$ we define Legendre's symbol $( n | p )$ as follows:

$$
( n \vert p ) = \left\{ { \begin{array} { l l } { + 1 } & { { \mathrm { i f } } \ n R p , } \\ { - 1 } & { { \mathrm { i f } } \ n R p . } \end{array} } \right.
$$

If $n \equiv 0$ (mod $p$ ) we define $( n | p ) = 0 .$

9: Quadratic residues and the quadratic reciprocity law

Note. Some authors write $\left( { \frac { n } { p } } \right)$ instead of $( n | p )$

It is clear that $( m | p ) = ( n | p )$ whenever $m \equiv n$ (mod $p$ ),so $( n \mid p )$ is a periodic function of $\pmb { n }$ with period $p$

The litte Fermat theorem tells us that $n ^ { p - 1 } \equiv 1 { \pmod { p } } { \mathrm { ~ i f ~ } } p \nmid n$ Since

$$
n ^ { p - 1 } - 1 = ( n ^ { ( p - 1 ) / 2 } - 1 ) ( n ^ { ( p - 1 ) / 2 } + 1 )
$$

it folliows that $n ^ { ( p - 1 ) / 2 } \equiv \pm 1 { \pmod { p } }$ . The next theorem tells us that we get $+ 1$ if $n R p$ and -1 if $n \bar { R } p$

Theorem 9.2 Euler's criterion. Let $p$ be an odd prime. Then for all n we have

$$
( n | p ) \equiv n ^ { ( p - 1 ) / 2 } { \pmod { p } } .
$$

PROOF. If $n \equiv 0 { \pmod { p } }$ the result is trivial since both members are congruent to 0 mod $p$ . Now suppose that $( n | p ) = 1$ . Then there is an $x$ such that ${ x ^ { 2 } } \equiv n$ (mod $p$ and hence

$$
n ^ { ( p - 1 ) / 2 } \equiv { \bigl ( } x ^ { 2 } { \bigr ) } ^ { ( p - 1 ) / 2 } = x ^ { p - 1 } \equiv 1 = ( n | p ) { \pmod { p } } .
$$

This proves the theorem if $( n | p ) = 1$

Now suppose that $( n | p ) = - 1$ and consider the polynomial

$$
f ( x ) = x ^ { ( p - 1 ) / 2 } - 1 .
$$

Since $f ( x )$ has degree $( p - 1 ) / 2$ the congruence

$$
f ( x ) \equiv 0 { \pmod { p } }
$$

has at most $( p - 1 ) / 2$ solutions. But the $( p - 1 ) / 2$ quadratic residues mod $p$ are solutions so the nonresidues are not. Hence

$$
n ^ { ( p - 1 ) / 2 } \not \equiv 1 { \pmod { p } } \quad { \mathrm { i f ~ } } ( n | p ) = - 1 .
$$

But $n ^ { ( p - 1 ) / 2 } \equiv \pm 1 { \pmod { p } }$ so $n ^ { ( p - 1 ) / 2 } \equiv - 1 \equiv ( n | p ) { \pmod { p } }$ . This completes the proof. □

Theorem 9.3 Legendre's symbol $( n | p )$ is a completely multiplicative function of $\pmb { n }$

PROOF. If $p | m$ or $p | n$ then $p | m n \ \mathsf { s o } \ ( m n | p ) = 0$ and either $\left( m \vert p \right) = 0$ or $( n | p ) = 0$ . Therefore $( m n | p ) = ( m | p ) ( n | p )$ if $p | m \mathrm { o r } p | n$

If $p \not \in m$ and $p \not \in \not \vdash n$ then $p \chi$ mn and we have

$$
( m n | p ) \equiv ( m n ) ^ { ( p - 1 ) / 2 } = m ^ { ( p - 1 ) / 2 } n ^ { ( p - 1 ) / 2 } \equiv ( m | p ) ( n | p ) { \pmod { p } } .
$$

But each of $\{ m n | p \} , ( m | p )$ and $( n | p )$ is 1 or $^ { - 1 }$ so the difference

$$
( m n | p ) - ( m | p ) ( n | p )
$$

is either 0, 2, or —2. Since this difference is divisible by $p$ it must be 0.

Note. Since $( n | p )$ is a completely multiplicative function of $\pmb { n }$ which is periodic with period $p$ and vanishes when $p | n ,$ it follows that $( n | p ) = \chi ( n ) ,$ , where $\chi$ is one of the Dirichlet characters modulo $p$ . The Legendre symbol is called the quadratic character mod $p$ -

# 9.3 Evaluation of $( - 1 | p )$ and $( 2 | p )$

Theorem 9.4 For every odd prime $p$ we have

$$
( - 1 | p ) = ( - 1 ) ^ { ( p - 1 ) / 2 } = \left\{ { \begin{array} { l l } { 1 } & { i f \ p \equiv 1 { \pmod { 4 } } , } \\ { - 1 } & { i f \ p \equiv 3 { \pmod { 4 } } . } \end{array} } \right.
$$

PRooF. By Euler's criterion we have $( - 1 | p ) \equiv ( - 1 ) ^ { ( p - 1 ) / 2 } ($ mod p). Since each member of this congruence is 1 or $^ { - 1 }$ the two members are equal. □

Theorem 9.5 For every odd prime $p$ we have

$$
( 2 | p ) = ( - 1 ) ^ { ( p ^ { 2 } - 1 ) / 8 } = { \left\{ \begin{array} { l l } { 1 } & { i f p \equiv \pm 1 { \pmod { 8 } } , } \\ { - 1 } & { i f p \equiv \pm 3 { \pmod { 8 } } . } \end{array} \right. }
$$

PRooF. Consider the following $( p - 1 ) / 2$ congruences :

$$
\begin{array} { c c } { { p - 1 \equiv 1 ( - 1 ) ^ { 1 } } } & { { ( \mathrm { m o d } \ p ) } } \\ { { } } & { { 2 \equiv 2 ( - 1 ) ^ { 2 } } } \\ { { } } & { { } } \\ { { p - 3 \equiv 3 ( - 1 ) ^ { 3 } } } & { { ( \mathrm { m o d } \ p ) } } \\ { { } } & { { 4 \equiv 4 ( - 1 ) ^ { 4 } } } \\ { { } } & { { \vdots } } \\ { { } } & { { } } \\ { { r \equiv \frac { p - 1 } { 2 } ( - 1 ) ^ { ( p - 1 ) / 2 } \ ( \mathrm { m o d } \ p ) , } } \end{array}
$$

where $r$ is either $p - ( p - 1 ) / 2$ or $( p - 1 ) / 2$ . Multiply these together and note that each integer on the left is even. We obtain

$$
2 \cdot 4 \cdot 6 \cdot \cdot \cdot ( p - 1 ) \equiv \left( { \frac { p - 1 } { 2 } } \right) ! ( - 1 ) ^ { 1 + 2 + \cdots + ( p - 1 ) / 2 } { \pmod { p } } .
$$

This gives us

$$
2 ^ { ( p - 1 ) / 2 } \bigg ( \frac { p - 1 } { 2 } \bigg ) ! \equiv \bigg ( \frac { p - 1 } { 2 } \bigg ) ! ( - 1 ) ^ { ( p ^ { 2 } - 1 ) / 8 } ( \mathrm { m o d } p ) .
$$

9: Quadratic residues and the quadratic reciprocity law

Since $( ( p - 1 ) / 2 ) ! \not \equiv 0$ (mod p) this implies

$$
2 ^ { ( p - 1 ) / 2 } \equiv \big ( - 1 \big ) ^ { ( p ^ { 2 } - 1 ) / 8 } \ \big ( \mathrm { m o d } \ p \big ) .
$$

By Euler's criterion we have $2 ^ { ( p - 1 ) / 2 } \equiv ( 2 | p )$ (mod p), and since each member is 1 or $- 1$ the two members are equal. This completes the proof.

# 9.4 Gauss' lemma

Although Euler's criterion gives a straightforward method for computing $( n | p )$ , the calculation may become prohibitive for large $\pmb { n }$ since it requires raising $\pmb { n }$ to the power $( p - 1 ) / 2$ . Gauss found another criterion which involves a simpler calculation.

Theorem 9.6 Gauss' lemma. Assume $n \not \equiv 0$ (mod $p ^ { \star }$ ) and consider the least positive residues mod $p$ of the following $( p - 1 ) / 2$ multiples of $n$ :

$$
n , 2 n , 3 n , \ldots , { \frac { p - 1 } { 2 } } n .
$$

If m denotes the number of these residues which exceed $p / 2$ , then

$$
( n | p ) = ( - 1 ) ^ { m } .
$$

PRooF. The numbers in (3) are incongruent mod $p .$ We consider their least positive residues and distribute them into two disjoint sets $A$ and $B$ according as the residues are $< p / 2$ or $> p / 2$ . Thus

$$
A = \{ a _ { 1 } , a _ { 2 } , \ldots , a _ { k } \}
$$

where each $a _ { i } \equiv t n { \pmod { p } }$ for some $t \le ( p - 1 ) / 2$ and $0 < a _ { i } < p / 2$ ; and

$$
B = \{ b _ { 1 } , b _ { 2 } , . . . , b _ { m } \}
$$

where each $b _ { i } \equiv s n { \pmod { p } }$ for some $s \leq ( p - 1 ) / 2$ and $p / 2 < b _ { i } < p$ Note that $m + k = ( p - 1 ) / 2$ since $A$ and $B$ are disjoint. The number m of elements in $B$ is pertinent in this theorem. Form a new set $C$ of m elements by subtracting each $b _ { i }$ from $p$ . Thus

$$
C = \{ c _ { 1 } , c _ { 2 } , . . . , c _ { m } \} , { \mathrm { ~ w h e r e ~ } } c _ { i } = p - b _ { i } .
$$

Now $0 < c _ { i } < p / 2$ so the elements of $C$ lie in the same interval as the elements of $A$ . We show next that the sets $A$ and $C$ are disjoint.

Assume that $c _ { i } = a _ { j }$ for some pair $i$ and $j .$ Then $p - b _ { i } = a _ { j }$ $a _ { j } + b _ { i }$ $\mathtt { \equiv 0 }$ (mod $p _ { i }$ . Therefore

$$
t n + s n = ( t + s ) n \equiv 0 { \pmod { p } }
$$

for some $s$ and $t$ with $1 \leq t < p / 2 , 1 \leq s < p / 2$ But this is impossible since $p \not / n$ and $0 < s + t < p$ Therefore $A$ and $C$ are disjoint, so their union

$A \cup C$ contains $m + k = ( p - 1 ) / 2$ integers in the interval $[ 1 , ( p - 1 ) / 2 ]$ Hence

$$
A \cup C = \{ a _ { 1 } , a _ { 2 } , \ldots , a _ { k } , c _ { 1 } , c _ { 2 } , \ldots , c _ { m } \} = { \biggl \{ } 1 , 2 , \ldots , { \frac { p - 1 } { 2 } } { \biggr \} } .
$$

Now form the product of al the elements in $A \cup C$ to obtain

$$
a _ { 1 } a _ { 2 } \cdots a _ { k } c _ { 1 } c _ { 2 } \cdots c _ { m } = \left( { \frac { p - 1 } { 2 } } \right) ! .
$$

Since $c _ { i } = p - b _ { i }$ this gives us

$$
{ \begin{array} { r l } { \left( { \frac { p - 1 } { 2 } } \right) ! = a _ { 1 } a _ { 2 } \cdots a _ { k } ( p - b _ { 1 } ) ( p - b _ { 2 } ) \cdots ( p - b _ { m } ) } \\ & { \qquad \equiv ( - 1 ) ^ { m } a _ { 1 } a _ { 2 } \cdots a _ { k } b _ { 1 } b _ { 2 } \cdots b _ { m } { \pmod { p } } } \\ & { \qquad \equiv ( - 1 ) ^ { m } n ( 2 n ) ( 3 n ) \cdots \left( { \frac { p - 1 } { 2 } } n \right) { \pmod { p } } } \\ & { \qquad \equiv ( - 1 ) ^ { m } n ^ { ( p - 1 ) / 2 } { \left( { \frac { p - 1 } { 2 } } \right) } ! \qquad { \pmod { p } } . } \end{array} }
$$

Canceling the factorial we obtain

$$
n ^ { ( p - 1 ) / 2 } \equiv ( - 1 ) ^ { m } { \pmod { p } } .
$$

Euler's criterion shows that $( - 1 ) ^ { m } \equiv ( n | p )$ (mod $p ^ { \cdot }$ hence $( - 1 ) ^ { m } = ( n | p )$ and the proof of Gauss' lemma is complete. □

To use Gauss' lemma in practice we need not know the exact value of $m$ , but only its parity, that is, whether m is odd or even. The next theorem gives a relatively simple way to determine the parity of m.

Theorem 9.7 Let m be the number defined in Gauss' lemma. Then

$$
m \equiv \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \biggl [ \frac { t n } { p } \biggr ] + ( n - 1 ) \frac { p ^ { 2 } - 1 } { 8 } ( \mathrm { m o d } 2 ) .
$$

In particular, if n is odd we have

$$
m \equiv \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \biggl [ \frac { t n } { p } \biggr ] ( \mathrm { m o d } ~ 2 ) .
$$

PRoor. Recall that $\pmb { m }$ is the number of least positive residues of the num bers

$$
n , 2 n , 3 n , \ldots , { \frac { p - 1 } { 2 } } n
$$

which exceed $p / 2$ . Take a typical number, say tn, divide it by $p$ and examine the size of the remainder. We have

$$
{ \frac { t n } { p } } = \left[ { \frac { t n } { p } } \right] + \left\{ { \frac { t n } { p } } \right\} , \mathrm { w h e r e } 0 < \left\{ { \frac { t n } { p } } \right\} < 1 ,
$$

sO

$$
t n = p \bigg [ \frac { t n } { p } \bigg ] + p \bigg \{ \frac { t n } { p } \bigg \} = p \bigg [ \frac { t n } { p } \bigg ] + r _ { t } ,
$$

say, where $0 < r _ { t } < p$ . The number $r _ { t } = t n - p [ t n / p ]$ is the least positive residue of tn modulo $p .$ Referring again to the sets $A$ and $B$ used in the proof of Gauss' lemma we have

$$
\{ r _ { 1 } , r _ { 2 } , \ldots , r _ { ( p - 1 ) / 2 } \} = \{ a _ { 1 } , a _ { 2 } , \ldots , a _ { k } , b _ { 1 } , \ldots , b _ { m } \} .
$$

Recall also that

$$
\left\{ 1 , 2 , \ldots , { \frac { p - 1 } { 2 } } \right\} = \{ a _ { 1 } , a _ { 2 } , \ldots , a _ { k } , c _ { 1 } , \ldots , c _ { m } \}
$$

where each $c _ { i } = p - b _ { i }$ . Now we compute the sums of the elements in these sets to obtain the two equations

$$
\sum _ { t = 1 } ^ { ( p - 1 ) / 2 } r _ { t } = \sum _ { i = 1 } ^ { k } a _ { i } + \sum _ { j = 1 } ^ { m } b _ { j }
$$

and

$$
\sum _ { t = 1 } ^ { ( p - 1 ) / 2 } t = \sum _ { i = 1 } ^ { k } a _ { i } + \sum _ { j = 1 } ^ { m } c _ { j } = \sum _ { i = 1 } ^ { k } a _ { i } + m p - \sum _ { j = 1 } ^ { m } b _ { j } .
$$

In the first equation we replace $r _ { t }$ by its definition to obtain

$$
\sum _ { i = 1 } ^ { k } a _ { i } + \sum _ { j = 1 } ^ { m } b _ { j } = n \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } t - p \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \left[ \frac { t n } { p } \right] .
$$

The second equation is

$$
m p + \sum _ { i = 1 } ^ { k } a _ { i } - \sum _ { j = 1 } ^ { n } b _ { j } = \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } t .
$$

Adding this to the previous equation we get

$$
\begin{array} { r } { m p + 2 \displaystyle \sum _ { i = 1 } ^ { k } a _ { i } = ( n + 1 ) \displaystyle \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } t - p \displaystyle \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \Biggl [ \frac { t n } { p } \Biggr ] } \\ { = ( n + 1 ) \displaystyle \frac { p ^ { 2 } - 1 } { 8 } - p \displaystyle \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \Biggl [ \frac { t n } { p } \Biggr ] . } \end{array}
$$

Now we reduce this modulo 2, noting that $n + 1 \equiv n - 1$ (mod 2) and $p \equiv 1$ (mod 2), and we obtain

$$
m \equiv ( n - 1 ) { \frac { p ^ { 2 } - 1 } { 8 } } + \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \biggl [ { \frac { t n } { p } } \biggr ] ( \mathrm { m o d } 2 ) ,
$$

which completes the proof.

# 9.5 The quadratic reciprocity law

Both Euler's criterion and Gauss' lemma give straightforward though sometimes lengthy procedures for solving the first basic problem of the theory of quadratic residues. The second problem is much more dimicult. Its solution depends on a remarkable theorem known as the quadratic reciprocity law, first stated in a complicated form by Euler in the period 1744–1746, and rediscovered in 1785 by Legendre who gave a partial proof. Gauss discovered the reciprocity law independently at the age of eighteen and a year later in 1796 gave the first complete proof.

The quadratic reciprocity law states that if $p$ and $q$ are distinct odd primes, then $( p | q ) = ( q | p )$ unless $p \equiv q \equiv 3$ (mod 4), in which case $( p | q ) = - ( q | p ) .$ The theorem is usually stated in the following symmetric form given by Legendre.

Theorem 9.8 Quadratic reciprocity law. $I f p$ and $q$ are distinct odd primes, then

$$
( p | q ) ( q \{ p \} = ( - 1 ) ^ { ( p - 1 ) ( q - 1 ) / 4 } .
$$

PRooF. By Gauss' lemma and Theorem 9.7 we have

$$
( q | p ) = ( - 1 ) ^ { m }
$$

where

$$
m \equiv \sum _ { t = 1 } ^ { ( p - 1 ) / 2 } \biggl [ \frac { t q } { p } \biggr ] ( \mathrm { m o d } 2 ) .
$$

Similarly,

$$
( p | q ) = ( - 1 ) ^ { n }
$$

where

$$
n \equiv \sum _ { s = 1 } ^ { ( q - 1 ) / 2 } \left[ { \frac { s p } { q } } \right] ( { \bmod { 2 } } ) .
$$

Hence $( p | q ) ( q | p ) = ( - 1 ) ^ { m + n } ,$ , and (4) follows at once from the identity

$$
\sum _ { t = 1 } ^ { ( p - 1 ) / 2 } { \Bigg [ } { \frac { t q } { p } } { \Bigg ] } + \sum _ { s = 1 } ^ { ( q - 1 ) / 2 } { \Bigg [ } { \frac { s p } { q } } { \Bigg ] } = { \frac { p - 1 } { 2 } } { \frac { q - 1 } { 2 } } .
$$

9: Quadratic residues and the quadratic reciprocity law

To prove (5) consider the function

$$
\displaystyle f ( x , y ) = q x - p y .
$$

If $x$ and $y$ are nonzero integers then $f ( x , y )$ is a nonzero integer. Moreover, as $x$ takes the values $1 , 2 , \ldots , ( p - 1 ) / 2$ and $y$ takes the values 1, 2, .., $( q - 1 ) / 2$ then $f ( x , y )$ takes

$$
\frac { p - 1 } { 2 } \frac { q - 1 } { 2 }
$$

values, no two of which are equal since

$$
f ( x , y ) - f ( x ^ { \prime } , y ^ { \prime } ) = f ( x - x ^ { \prime } , y - y ^ { \prime } ) \neq 0 .
$$

Now we count the number of values of $f ( x , y )$ which are positive and the number which are negative.

For each fixed $_ x$ we have $f ( x , y ) > 0$ if and only if $y < q x / p$ or $y \le$ $[ q x / p ]$ . Hence the total number of positive values is

$$
\sum _ { x = 1 } ^ { ( p - 1 ) / 2 } { \left[ \frac { q x } { p } \right] } .
$$

Similarly, the number of negative values is

$$
\sum _ { y = 1 } ^ { ( q - 1 ) / 2 } \left[ { \frac { p y } { q } } \right] .
$$

Since the number of positive and negative values together is

$$
\frac { p - 1 } { 2 } \frac { q - 1 } { 2 }
$$

this proves (5) and hence (4).

Note. The reader may find it instructive to interpret the foregoing proof of (5) geometrically, using lattice points in the plane.

At least 150 proofs of the quadratic reciprocity law have been published. Gauss himself supplied no less than eight, including a version of the one just given. A short proof of the quadratic reciprocity law is described in an article by M. Gerstenhaber [25].

# 9.6 Applications of the reciprocity law

The following examples show how the quadratic reciprocity law can be used to solve the two basic types of problems in the theory of quadratic residues.

ExamPLE 1 Determine whether 219 is a quadratic residue or nonresidue mod 383.

Solution

We evaluate the Legendre symbol (219|383) by using the multiplicative property, the reciprocity law, periodicity, and the special values $( - 1 | p )$ and $( 2 | p )$ calculated earlier.

Since $2 1 9 = 3 \cdot 7 3$ the multiplicative property implies

$$
( 2 1 9 | 3 8 3 ) = ( 3 | 3 8 3 ) ( 7 3 | 3 8 3 ) .
$$

Using the reciprocity law and periodicity we have

$$
3 8 3 ) = ( 3 8 3 | 3 ) ( - 1 ) ^ { ( 3 8 3 - 1 ) ( 3 - 1 ) / 4 } = - ( - 1 | 3 ) = - ( - 1 ) ^ { ( 3 - 1 ) / 2 } = 1 ,
$$

and

$$
\begin{array} { c } { { ( 7 3 \vert 3 8 3 ) = ( 3 8 3 \vert 7 3 ) ( - 1 ) ^ { ( 3 8 3 - 1 ) ( 7 3 - 1 ) / 4 } = ( 1 8 \vert 7 3 ) = ( 2 \vert 7 3 ) ( } } \\ { { { } } } \\ { { = ( - 1 ) ^ { ( ( 7 3 ) ^ { 2 } - 1 ) / 8 } = 1 . } } \end{array}
$$

Hence (219|383) $\ l = 1$ so 219 is a quadratic residue mod 383.

ExAMPLE 2 Determine those odd primes $p$ for which 3 is a quadratic residue and those for which it is a nonresidue.

Solution

Again, by the reciprocity law we have

$$
( 3 | p ) = ( p | 3 ) ( - 1 ) ^ { ( p - 1 ) ( 3 - 1 ) / 4 } = ( - 1 ) ^ { ( p - 1 ) / 2 } ( p | 3 ) .
$$

To determine $\left( p | 3 \right)$ we need to know the value of $p$ mod 3, and to determine $( - 1 ) ^ { ( p - 1 ) / 2 }$ we need to know the value of $( p - 1 ) / 2$ mod 2, or the value of $p$ mod 4. Hence we consider $p$ mod 12. There are only four cases to consider, $p \equiv 1 , 5 , 7$ , or 11 (mod 12), the others being excluded since $p$ is odd.

Case 1. $p \equiv 1$ (mod 12). In this case $p \equiv 1$ (mod 3) so $( p | 3 ) = ( 1 | 3 ) = 1$ Also $p \equiv 1$ (mod 4) so $( p - 1 ) / 2$ is even, hence $( 3 | p ) = 1$

Case 2. $p \equiv 5$ (mod 12). In this case $p \equiv 2$ (mod 3) so $( p | 3 ) = ( 2 | 3 ) =$ $( - 1 ) ^ { ( 3 ^ { 2 } - 1 ) / \bar { 8 } } = - 1$ Again, $( p - 1 ) / 2$ is even since $p \equiv 1$ (mod 4), so $( 3 | p ) =$ $^ { - 1 }$

Case 3. $p \equiv 7$ (mod 12). In this case $p \equiv 1$ (mod 3), so $( p | 3 ) = ( 1 { \mathord { \left/ { \vphantom { \left( 1 3 \right) } } \right. \kern - delimiterspace } 3 } ) = 1$ Also $( p - 1 ) / 2$ is odd since $p \equiv 3$ (mod 4), hence $( 3 | p ) = - 1$

Case 4. $p \equiv 1 1$ (mod 12). In this case $p \equiv 2$ (mod 3) so $( p | 3 ) = ( 2 | 3 ) =$ $- 1 .$ Again $( p - 1 ) / 2$ is odd since $p \equiv 3$ (mod 4), hence $( 3 \left| p \right. = 1$ .

Summarizing the results of the four cases we find

$$
\begin{array} { l } { 3 R p \operatorname { i f } p \equiv \pm 1 ( \mathrm { m o d } 1 2 ) } \\ { 3 \overline { { { R } } } p \operatorname { i f } p \equiv \pm 5 ( \mathrm { m o d } 1 2 ) . } \end{array}
$$

# 9.7 The Jacobi symbol

To determine if a composite number is a quadratic residue or nonresidue mod $p$ it is necessary to consider several cases depending on the quadratic character of the factors. Some calculations can be simplified by using an extension of Legendre's symbol introduced by Jacobi.

9: Quadratic residues and the quadratic reciprocity law

Definition If $P$ is a positive odd integer with prime factorization

$$
P = \prod _ { i = 1 } ^ { r } p _ { i } ^ { a _ { i } }
$$

the Jacobi symbol $( n \vert P )$ is defined for al integers n by the equation

$$
( n | P ) = \prod _ { i = 1 } ^ { r } ( n \{ p _ { i } \} ^ { a _ { i } } ,
$$

where $\left( n | p _ { i } \right)$ is the Legendre symbol. We also define $( n | 1 ) = 1$

The possible values of $( n \backslash P )$ are $1 , - 1$ , or 0, with $\left( n \vert P \right) = 0$ if and only if $( n , P ) > 1$

If the congruence

$$
x ^ { 2 } \equiv n { \pmod { P } }
$$

has a solution then $\left( n | p _ { i } \right) = 1$ for each prime $p _ { i }$ in (6), and hence $( n | P ) = 1$ However, the converse is not true since $( n | P )$ can be 1 if an even number of factors $- 1$ appears in (6).

The reader can verify that the following properties of the Jacobi symbol are easily deduced from properties of the Legendre symbol.

Theorem 9.9 If $P$ and $Q$ are odd positive integers, we have

(a) $( m | P ) ( n | P ) = ( m n | P ) ,$   
(b) $( n | P ) ( n | Q ) = ( n | P Q ) ,$   
(c) $( m \{ P \} = ( n | P )$ whenever $m \equiv n$ (mod $P$ ),   
(d) $\displaystyle ( a ^ { 2 } n \lvert P ) = ( n \lvert P )$ whenever $( a , P ) = 1$

The special formulas for evaluating the Legendre symbols $( - 1 | p )$ and $( 2 | p )$ also hold for the Jacobi symbol.

Theorem 9.10 If $P$ is an odd positive integer we have

$$
( - 1 | P ) = ( - 1 ) ^ { ( P - 1 ) / 2 }
$$

and

$$
( 2 | P ) = ( - 1 ) ^ { ( P ^ { 2 } - 1 ) / 8 } .
$$

PROOF. Write $P = p _ { 1 } p _ { 2 } \cdots p _ { m }$ where the prime factors $p _ { i }$ are not necessarily distinct. This can also be written as

$$
P = \prod _ { i = 1 } ^ { m } ( 1 + p _ { i } - 1 ) = 1 + \sum _ { i = 1 } ^ { m } ( p _ { i } - 1 ) + \sum _ { i \neq j } ( p _ { i } - 1 ) ( p _ { j } - 1 ) + \cdots .
$$

But each factor $p _ { i } - 1$ is even so each sum after the first is divisible by 4. Hence

$$
P \equiv 1 + \sum _ { i = 1 } ^ { m } ( p _ { i } - 1 ) { \pmod { 4 } } ,
$$

or

$$
{ \frac { 1 } { 2 } } \left( P - 1 \right) \equiv \sum _ { i = 1 } ^ { m } { \frac { 1 } { 2 } } \left( p _ { i } - 1 \right) { \pmod { 2 } } .
$$

Therefore

$$
( - 1 | P ) = \prod _ { i = 1 } ^ { m } ( - 1 | p _ { i } ) = \prod _ { i = 1 } ^ { m } ( - 1 ) ^ { ( p _ { i } - 1 ) / 2 } = ( - 1 ) ^ { ( P - 1 ) / 2 } ,
$$

which proves (7).

To prove (8) we write

$$
P ^ { 2 } = \prod _ { i = 1 } ^ { m } ( 1 + { p _ { i } } ^ { 2 } - 1 ) = 1 + \sum _ { i = 1 } ^ { m } ( { p _ { i } } ^ { 2 } - 1 ) + \sum _ { i \ne j } ( { p _ { i } } ^ { 2 } - 1 ) ( { p _ { j } } ^ { 2 } - 1 ) + \cdots .
$$

Since $p _ { i }$ is odd we have ${ p _ { i } } ^ { 2 } - 1 \equiv 0$ (mod 8) so

$$
P ^ { 2 } \equiv 1 + \sum _ { i = 1 } ^ { m } ( { p _ { i } } ^ { 2 } - 1 ) { \pmod { 6 4 } }
$$

hence

$$
{ \frac { 1 } { 8 } } \left( P ^ { 2 } - 1 \right) = \sum _ { i = 1 } ^ { m } { \frac { 1 } { 8 } } \left( { p _ { i } } ^ { 2 } - 1 \right) ( { \bf m o d } 8 ) .
$$

This also holds mod 2, hence

$$
( 2 | P ) = \prod _ { i = 1 } ^ { m } ( 2 | p _ { i } ) = \prod _ { i = 1 } ^ { m } ( - 1 ) ^ { ( p _ { i } 2 - 1 ) / 8 } = ( - 1 ) ^ { ( P ^ { 2 } - 1 ) / 8 } ,
$$

which proves (8).

Theorem 9.11 Reciprocity law for Jacobi symbols. If $P$ and $Q$ are positive odd inteyers with $( P , Q ) = 1$ , then

$$
( P | Q ) ( Q | P ) = \bigl ( - 1 \bigr ) ^ { ( P - 1 ) ( Q - 1 ) / 4 } .
$$

PRoOF. Write $P = p _ { 1 } \cdots p _ { m }$ , $Q = q _ { 1 } \cdots q _ { n }$ , where the $p _ { i }$ and $q _ { i }$ are primes. Then

$$
( P | Q ) ( Q | P ) = \prod _ { i = 1 } ^ { m } \prod _ { j = 1 } ^ { n } ( p _ { i } | q _ { j } ) ( q _ { j } | p _ { i } ) = ( - 1 ) ^ { r } ,
$$

say. Applying the quadratic reciprocity law to each factor we find that

$$
r = \sum _ { i = 1 } ^ { m } \sum _ { j = 1 } ^ { n } { \frac { 1 } { 2 } } ( p _ { i } - 1 ) { \frac { 1 } { 2 } } ( q _ { j } - 1 ) = \sum _ { i = 1 } ^ { m } { \frac { 1 } { 2 } } ( p _ { i } - 1 ) \sum _ { j = 1 } ^ { n } { \frac { 1 } { 2 } } ( q _ { j } - 1 ) .
$$

9: Quadratic residues and the quadratic reciprocity law

In the proof of Theorem 9.10 we showed that

$$
\sum _ { i = 1 } ^ { m } { \frac { 1 } { 2 } } \left( p _ { i } - 1 \right) \equiv { \frac { 1 } { 2 } } \left( P - 1 \right) ( { \bmod { 2 } } ) ,
$$

and a corresponding congruence holds for $\sum { \scriptstyle { \frac { 1 } { 2 } } } ( q _ { j } - 1 )$ Therefore

$$
r \equiv { \frac { P - 1 } { 2 } } { \frac { Q - 1 } { 2 } } { \pmod { 2 } } ,
$$

which completes the proof.

ExAMPLE I Determine whether 888 is a quadratic residue or nonresidue of the prime 1999.

Solution We have

$$
( 8 8 8 | 1 9 9 9 ) = ( 4 | 1 9 9 9 ) ( 2 | 1 9 9 9 ) ( 1 1 1 | 1 9 9 9 ) = ( 1 1 1 | 1 9 9 9 ) .
$$

To calculate (111 |1999) using Legendre symbols we would write

$$
( 1 1 1 | 1 9 9 9 ) = ( 3 | 1 9 9 9 ) ( 3 7 | 1 9 9 9 )
$$

and apply the quadratic reciprocity law to each factor on the right. The calculation is simpler with Jacobi symbols since we have

$$
1 1 1 | 1 9 9 9 ) = - ( 1 9 9 9 | 1 1 1 ) = - ( 1 | 1 1 1 ) = - 1 .
$$

Therefore 888 is a quadratic nonresidue of 1999.

ExAmPLE 2 Determine whether — 104 is a quadratic residue or nonresidue of the prime 997.

Solution

Since $1 0 4 = 2 \cdot 4 \cdot 1 3$ we have

$$
\begin{array} { c } { { ( - 1 0 4 | 9 9 7 ) = ( - 1 | 9 9 7 ) ( 2 | 9 9 7 ) ( 1 3 | 9 9 7 ) = - ( 1 3 | 9 9 7 } } \\ { { { } } } \\ { { = - ( 9 9 7 | 1 3 ) = - ( 9 | 1 3 ) = - 1 . } } \end{array}
$$

Therefore $- 1 0 4$ is a quadratic nonresidue of 997.

# 9.8 Applications to Diophantine equations

Equations to be solved in integers are called Diophantine equations after Diophantus of Alexandria. An example is the equation

$$
y ^ { 2 } = x ^ { 3 } + k
$$

where $k$ is a given integer. The problem is to decide, for a given $k$ , whether or not the equation has integer solutions $x , y$ and, if so, to exhibit all of them.

We discuss this equation here partly because it has a long history, going back to the seventeenth century, and partly because some cases can be treated with the help of quadratic residues. A general theorem states that the Diophantine equation

$$
y ^ { 2 } = f ( x )
$$

has at most a finite number of solutions if $f ( x )$ is a polynomial of degree $\geq 3$ with integer coefficients and with distinct zeros. (See Theorem 4-18 in LeVeque [44], Vol. 2.) However, no method is known for determining the solutions (or even the number of solutions) except for very special cases. The next theorem describes an infinite set of values of $k$ for which (9) has no solutions.

Theorem 9.12 The Diophantine equation

$$
y ^ { 2 } = x ^ { 3 } + k
$$

has no solutions $i f k$ has the form

$$
k = ( 4 n - 1 ) ^ { 3 } - 4 m ^ { 2 } ,
$$

where m and n are integers such that no prime $p \equiv - 1$ (mod 4) divides m.

PRooF. We assume a solution $x , y$ exists and obtain a contradiction by considering the equation modulo 4. Since $k \equiv - 1$ (mod 4) we have

$$
y ^ { 2 } \equiv x ^ { 3 } - 1 { \mathrm { ~ } } ( \mathrm { m o d } 4 ) .
$$

Now $y ^ { 2 } \equiv 0$ or 1 (mod 4) for every y, so (12) cannot be satisfied if $x$ is even or if $x \equiv - 1$ (mod 4). Therefore we must have $x \equiv 1$ (mod 4). Now let

$$
a = 4 n - 1
$$

so that $k = a ^ { 3 } - 4 m ^ { 2 }$ , and write (10) in the form

$$
y ^ { 2 } + 4 m ^ { 2 } = x ^ { 3 } + a ^ { 3 } = ( x + a ) ( x ^ { 2 } - a x + a ^ { 2 } ) .
$$

Since $x \equiv 1 { \pmod { 4 } }$ and $a \equiv - 1$ (mod 4) we have

$$
x ^ { 2 } - a x + a ^ { 2 } \equiv 1 - a + a ^ { 2 } \equiv - 1 { \mathrm { ~ ( m o d ~ } } 4 { \mathrm { ) } } .
$$

Hence $x ^ { 2 } - a x + a ^ { 2 }$ is odd, and (14) shows that all its prime factors cannot be $\equiv 1$ (mod 4). Therefore some prime $p \equiv - 1$ (mod 4) divides $x ^ { 2 } - a x + a ^ { 2 }$ , and (13) shows that this also divides $y ^ { 2 } + 4 m ^ { 2 }$ . In other words,

$$
y ^ { 2 } \equiv - 4 m ^ { 2 } { \pmod { p } } \quad { \mathrm { f o r ~ s o m e ~ } } p \equiv - 1 { \pmod { 4 } } .
$$

But $p \nmid m$ by hypothesis, so $( - 4 m ^ { 2 } | p ) = ( - 1 | p ) = - 1 ;$ , contradicting (15). This proves that the Diophantine equation (l0) has no solutions when $k$ has the form (11). □

9: Quadratic residues and the quadratic reciprocity law

The following table gives some values of $k$ covered by Theorem 9.12.

$$
\begin{array} { c c c c c c c c c c c c c c c c c c c c c c c c c c c } { n } & { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 1 } & { 1 } & { 1 } & { 1 } & { 2 } & { 2 } & { 2 } & { 2 } & { 2 } \\ { n } & { 1 } & { 2 } & { 4 } & { 5 } & { 1 } & { 2 } & { 4 } & { 5 } & { 1 } & { 2 } & { 4 } & { 5 } & { 5 } \\ { k } & { - 5 } & { - 1 7 } & { - 6 5 } & { - 1 0 0 } & { 2 3 } & { 1 1 } & { - 3 7 } & { - 7 3 } & { 3 3 9 } & { 3 2 7 } & { 2 7 9 } & { 2 4 3 } & { 2 } \end{array}
$$

Note. All solutions of (10) have been calculated when $k$ is in the interval $- 1 0 0 \leq k \leq 1 0 0 .$ (See reference [32].) No solutions exist for the following positive values of $k \leq 1 0 0$ :

$k = 6 , 7 .$ ,11, 13, 14,20,21,23,29, 32, 34,39,42,45,46,47,51,53,58, 59,60,61,62,66,67,69,70,74,75,77,78,83,84,85,86,87,88,90, 93, 95, 96.

# 9.9 Gauss sums and the quadratic reciprocity law

This section gives another proof of the quadratic reciprocity law with the help of the Gauss sums

$$
G ( n , \chi ) = \sum _ { r { \bmod { p } } } \chi ( r ) e ^ { 2 \pi i n r / p } ,
$$

where $\chi ( \boldsymbol { r } ) = ( r | \boldsymbol { p } )$ is the quadratic character mod $p$ . Since the modulus is prime, $\chi$ is a primitive character and we have the separability property

$$
G ( n , \chi ) = ( n | p ) G ( 1 , \chi )
$$

for every $\pmb { n }$ . Also, Theorem 8.11 implies that $| G ( 1 , \chi ) | ^ { 2 } = p .$ The next theorem shows that $G ( 1 , \chi ) ^ { 2 }$ is $\pm p$

Theorem 9.13 If $p$ is an odd prime and $\chi ( r ) = \left( r | p \right)$ we have

$$
G ( 1 , \chi ) ^ { 2 } = ( - 1 | p ) p .
$$

PRoOF. We have

$$
G ( 1 , \chi ) ^ { 2 } = \sum _ { r = 1 } ^ { p - 1 } \sum _ { s = 1 } ^ { p - 1 } ( r | p ) ( s | p ) e ^ { 2 \pi i ( r + s ) / p } .
$$

For each pair $r , s$ there is a unique $t$ mod $p$ such that $s \equiv t r ~ ( \mathrm { m o d } ~ p ) .$ and $( r | p ) ( s | p ) = ( r | p ) ( t r | p ) = ( r ^ { 2 } | p ) ( t | p ) = ( t | p ) .$ Hence

$$
G ( 1 , \chi ) ^ { 2 } = \sum _ { t = 1 } ^ { p - 1 } \sum _ { r = 1 } ^ { p - 1 } ( t | p ) e ^ { 2 \pi i r ( 1 + t ) / p } = \sum _ { t = 1 } ^ { p - 1 } ( t | p ) \sum _ { r = 1 } ^ { p - 1 } e ^ { 2 \pi i r ( 1 + t ) / p } .
$$

The last sum on $r$ is a geometric sum given by

$$
\sum _ { r = 1 } ^ { p - 1 } e ^ { 2 \pi i r ( 1 + t ) / p } = \left\{ { \begin{array} { r l } { - 1 } & { { \mathrm { i f ~ } } p \ < ( 1 + t ) , } \\ { p - 1 } & { { \mathrm { i f ~ } } p \mid ( 1 + t ) . } \end{array} } \right.
$$

Therefore

$$
\begin{array} { l } { G ( 1 , \chi ) ^ { 2 } = \displaystyle - \sum _ { t = 1 } ^ { p - 2 } ( t | p ) + ( p - 1 ) ( p - 1 | p ) = - \sum _ { t = 1 } ^ { p - 1 } ( t | p ) + p ( - 1 | p ) } \\ { \displaystyle = ( - 1 | p ) p } \end{array}
$$

since $\sum _ { i = 1 } ^ { p - 1 } \left( t | p \right) = 0$ This proves (18).

Equation (18) shows that $G ( 1 , \chi ) ^ { 2 }$ is an integer, so $G ( 1 , \chi ) ^ { q - 1 }$ is also an integer for everyodd $q$ .The next theorem shows that the quadratic reciprocity law is connected to the value of this integer modulo $q$

Theorem 9.14 Let $p$ and $q$ be distinct odd primes and let $\chi$ be the quadratic character mod $p .$ Then the quadratic reciprocity law

$$
( q | p ) = ( - 1 ) ^ { ( p - 1 ) ( q - 1 ) / 4 } ( p | q )
$$

is equivalent to the congruence

$$
G ( 1 , \chi ) ^ { q - 1 } \equiv ( q | p ) { \pmod { q } } .
$$

PRooF. From (18) we have

$$
G ( 1 , \chi ) ^ { q - 1 } = ( - 1 | p ) ^ { ( q - 1 ) / 2 } p ^ { ( q - 1 ) / 2 } = ( - 1 ) ^ { ( p - 1 ) ( q - 1 ) / 4 } p ^ { ( q - 1 ) / 2 } .
$$

By Euler's criterion we have $p ^ { ( q - 1 ) / 2 } \equiv ( p | q )$ (mod $q$ ) so (21) implies

$$
G ( 1 , \chi ) ^ { q - 1 } \equiv ( - 1 ) ^ { ( p - 1 ) ( q - 1 ) / 4 } ( p | q ) { \pmod { q } } .
$$

If (20) holds we obtain

$$
( q | p ) \equiv ( - 1 ) ^ { ( p - 1 ) ( q - 1 ) / 4 } ( p | q ) { \pmod { q } }
$$

which implies (19) since both members are $\pm 1$ . Conversely, if (19) holds then (22) implies (20). □

The next theorem gives an identity which we will use to deduce (20).

Theorem 9.15 If p and q are distinct odd primes and $i f \chi$ is the quadratic character mod $p$ we have

$$
G ( 1 , \chi ) ^ { q - 1 } = ( q | p ) \sum _ { \stackrel { r _ { 1 } \stackrel { \mathrm { m o d } } { r _ { 1 } + \cdots + r _ { q } } = q } } \cdots \sum _ { \stackrel { r _ { q } \stackrel { \mathrm { m o d } } { r _ { 1 } \stackrel { \prime } { \scriptscriptstyle } } } } ( r _ { 1 } \cdot \cdot \cdot r _ { q } | p ) .
$$

PRooF. The Gauss sum $G ( n , \chi )$ is a periodic function of $n$ with period $p .$ The same is true of $G ( n , \chi ) ^ { q }$ so we have a finite Fourier expansion

$$
G ( n , \chi ) ^ { q } = \sum _ { m \bmod p } a _ { q } ( m ) e ^ { 2 \pi i m n / p } ,
$$

9: Quadratic residues and the quadratic reciprocity law

where the coeficients are given by

$$
a _ { q } ( m ) = \frac { 1 } { p } \sum _ { n \mathrm { m o d } p } G ( n , \chi ) ^ { q } e ^ { - 2 \pi i m n / p } .
$$

From the definition of $G ( n , \chi )$ we have

$$
\begin{array} { r l r } & { } & { G ( n , \chi ) ^ { q } = \underset { r _ { 1 } \mathrm { m o d } p } { \sum } ( r _ { 1 } | p ) e ^ { 2 \pi i n r _ { 1 } / p } \cdot \cdot \cdot \sum _ { r _ { q } \mathrm { m o d } p } ( r _ { q } | p ) e ^ { 2 \pi i n r _ { q } / p } } \\ & { } & \\ & { } & { \qquad = \underset { r _ { 1 } \mathrm { m o d } p } { \sum } \cdot \cdot \cdot \sum _ { r _ { q } \mathrm { m o d } p } ( r _ { 1 } \cdot \cdot \cdot r _ { q } | p ) e ^ { 2 \pi i n ( r _ { 1 } + \cdot \cdot \cdot + r _ { q } ) / p } , } \end{array}
$$

so (24) becomes

$$
a _ { q } ( m ) = { \frac { 1 } { p } } \sum _ { r _ { 1 } \mathrm { m o d } p } \cdots \sum _ { r _ { q } \mathrm { m o d } p } ( r _ { 1 } \cdots r _ { q } | p ) \sum _ { n \mathrm { m o d } p } e ^ { 2 \pi i n ( r _ { 1 } + \cdots + r _ { q } - m ) / p } .
$$

The sum on $n$ is a geometric sum which vanishes unless $r _ { 1 } + \cdots + r _ { q } \equiv$ m (mod $p \llap / ,$ , in which case the sum is equal to $p$ . Hence

$$
a _ { q } ( m ) = \sum _ { { r _ { 1 } \atop r _ { 1 } + \cdots + r _ { q } } \atop r _ { 1 } + \cdots + r _ { q } \equiv m \atop ( m \mid \atop r _ { 1 } + \cdots + r _ { q } \equiv m \pmod p } ( r _ { 1 } \cdot \cdot \cdot r _ { q } ! p ) .
$$

Now we return to (24) and obtain an alternate expression for $a _ { q } ( m )$ Using the separability of $G ( n , \chi )$ and the relation $( n | p ) ^ { q } = ( n | p )$ for odd $q$ we find

$$
\begin{array} { c } { { a _ { q } ( m ) = \displaystyle \frac { 1 } { p } G ( 1 , \chi ) ^ { q } \sum _ { n \bmod p } ( n | p ) e ^ { - 2 \pi i m n / p } = \displaystyle \frac { 1 } { p } G ( 1 , \chi ) ^ { q } G ( - m , \chi ) } } \\ { { = \displaystyle \frac { 1 } { p } G ( 1 , \chi ) ^ { q } ( m \{ p \} ) G ( - 1 , \chi ) = ( m | p ) G ( 1 , \chi ) ^ { q - 1 } } } \end{array}
$$

since

$$
G ( 1 , \chi ) G ( - 1 , \chi ) = G ( 1 , \chi ) \overline { { { G ( 1 , \chi ) } } } = | G ( 1 , \chi ) | ^ { 2 } = p .
$$

In other words, $G ( 1 , \chi ) ^ { q - 1 } = ( m ! p ) a _ { q } ( m ) ,$ Taking $m = q$ and using (25) we obtain (23). □

PRooF OF THE REciPRocirY LAw. To deduce the quadratic reciprocity law from (23) it sufices to show that

$$
\sum _ { r _ { 1 } \mathrm { m o d } p } \cdots \sum _ { r _ { q } \mathrm { m o d } p } ( r _ { 1 } \cdots r _ { q } | p ) \equiv 1 { \pmod { q } } ,
$$

where the summation indices $r _ { 1 } , \ldots , r _ { q }$ are subject to the restriction

$$
r _ { 1 } + \cdot \cdot \cdot + r _ { q } \equiv q { \pmod { p } } .
$$

If all the indices $r _ { 1 } , \ldots , r _ { q }$ are congruent to each other mod $p$ then their sum is congruent to $q r _ { j }$ for each $j = 1 , 2 , \dots , q ;$ so (27) holds if, and only if,

$$
q r _ { j } \equiv q ~ ( \mathrm { m o d } ~ p ) ,
$$

that is, i, and only $\mathrm { i f } r _ { j } \equiv 1 { \pmod { p } }$ for each $j$ In this case the corresponding summand in (26) is $( 1 | p ) = 1$ . For all other choices of indices satisfying (27) there must be at least two incongruent indices among $r _ { 1 } , \ldots , r _ { q }$ .Therefore every cyclic permutation of $r _ { 1 } , \ldots , r _ { q }$ gives a new solution of (27) which contributes the same summand, ${ \displaystyle ( r _ { 1 } \cdots r _ { q } \vdots p ) . }$ Therefore each such summand appears $q$ times and contributes 0 modulo $q$ to the sum. Hence the only contribution to the sum in (26) which is nonzero modulo $q$ is $( 1 \left. p \right. = 1$ This completes the proof. □

# 9.10 The reciprocity law for quadratic Gauss sums

This section describes another proof of the quadratic reciprocity law based on the quadratic Gauss sums

$$
G ( n ; m ) = \sum _ { r = 1 } ^ { m } e ^ { 2 \pi i n r ^ { 2 } / m } .
$$

If $p$ is an odd prime and $p \chi n$ we have the formula

$$
G ( n ; p ) = ( n | p ) G ( 1 ; p )
$$

which reduces the study of the sums $G ( n ; p )$ to the case $n = 1$ . Equation (29) follows easily from (28) or by noting that ${ \cal G } ( n ; p ) = { \cal G } ( n , \chi ) .$ where $\chi ( n ) = ( n | p ) ,$ and observing that $G ( n , \chi )$ is separable.

Although each term of the sum $G ( 1 ; p )$ has absolute value 1, the sum itself has absolute value 0, $\sqrt { p }$ or $\sqrt { 2 p }$ In fact, Gauss proved the remarkable formula

$$
G ( 1 ; m ) = { \frac { 1 } { 2 } } { \sqrt { m } } ( 1 + i ) ( 1 + e ^ { - \pi i m / 2 } ) = { \left\{ \begin{array} { l l } { { \sqrt { m } } } & { { \mathrm { i f ~ } } m \equiv 1 { \mathrm { ~ ( m o d ~ } } 4 ) } \\ { 0 } & { { \mathrm { i f ~ } } m \equiv 2 { \mathrm { ~ ( m o d ~ } } 4 { \mathrm { ) } } } \\ { i { \sqrt { m } } } & { { \mathrm { i f ~ } } m \equiv 3 { \mathrm { ~ ( m o d ~ } } 4 { \mathrm { ) } } } \\ { ( 1 + i ) { \sqrt { m } } } & { { \mathrm { i f ~ } } m \equiv 0 { \mathrm { ~ ( m o d ~ } } 4 ) } \end{array} \right. }
$$

for every $m \geq 1$ . A number of different proofs of (30) are known. We will deduce (30) by treating a related sum

$$
S ( a , m ) = \sum _ { r = 0 } ^ { m - 1 } e ^ { \pi i a r ^ { 2 } / m } ,
$$

where $a$ and m are positive integers. If $a = 2$ then $S ( 2 , m ) = G ( 1 ; m ) ,$

The sums $S ( a , m )$ enjoy a reciprocity law (stated below in Theorem 9.16) which implies Gauss' formula (30) and also leads to another proof of the quadratic reciprocity law.

9: Quadratic residues and the quadratic reciprocity law

Theorem 9.16 If the product ma is even, we have

$$
S ( a , m ) = \sqrt { \frac { m } { a } } \left( \frac { 1 + i } { \sqrt { 2 } } \right) \overline { { { S ( m , a ) } } } ,
$$

where the bar denotes the complex conjugate.

Note. To deduce Gauss' formula (30) we take $a = 2$ in (31) and observe that $\overline { { \Lambda ( m , 2 ) } } = 1 + e ^ { - \pi i m / 2 }$ ,

PRooF. This proof is based on residue calculus. Let $\pmb { g }$ be the function defined by the equation

$$
g ( z ) = \sum _ { r = 0 } ^ { m - 1 } e ^ { \pi i a ( z + r ) ^ { 2 } / m } .
$$

Then $g$ is analytic everywhere, and $g ( 0 ) = S ( a , m )$ . Since ma is even we find

$$
g ( z + 1 ) - g ( z ) = e ^ { \pi i a z ^ { 2 } / m } ( e ^ { 2 \pi i a z } - 1 ) = e ^ { \pi i a z ^ { 2 } / m } ( e ^ { 2 \pi i z } - 1 ) \sum _ { n = 0 } ^ { a - 1 } e ^ { 2 \pi i n z } .
$$

Now define $f$ by the equation

$$
f ( z ) = { \frac { g ( z ) } { e ^ { 2 \pi i z } - 1 } } .
$$

Then $f$ is analytic everywhere except for a first-order pole at each integer, and $f$ satisfies the equation

$$
f ( z + 1 ) = f ( z ) + \varphi ( z ) ,
$$

where

$$
\varphi ( z ) = e ^ { \pi i a z ^ { 2 } / m } \sum _ { n = 0 } ^ { a - 1 } e ^ { 2 \pi i n z } .
$$

The function $\varphi$ is analytic everywhere.

At $z = 0$ the residue of $f$ is $g ( 0 ) / ( 2 \pi i )$ and hence

$$
\quad S ( a , m ) = g ( 0 ) = 2 \pi i { \mathrm { ~ R e s ~ } } f ( z ) = \int _ { \gamma } f ( z ) d z ,
$$

where $\gamma$ is any positively oriented simple closed path whose graph contains only the pole $z = 0$ in its interior region. We will choose y so that it describes a parallelogram with vertices $A , A + 1 , B + 1 , B$ where

$$
A = - { \frac { 1 } { 2 } } - R e ^ { \pi i / 4 } \mathrm { a n d } B = - { \frac { 1 } { 2 } } + R e ^ { \pi i / 4 } ,
$$

as shown in Figure 9.1. Integrating $f$ along γ we have

$$
\int _ { \gamma } f = \int _ { A } ^ { A + 1 } f + \int _ { A + 1 } ^ { B + 1 } f + \int _ { B + 1 } ^ { B } f + \int _ { B } ^ { A } f .
$$

9.10: The reciprocity law for quadratic Gauss sums

![](images/884bf8e1958adb991c983626e0b33de5be369838e17ea40e8da472fa83480073.jpg)  
Figure 9.1

In the integral $\int _ { A + 1 } ^ { B + 1 } f$ we make the change of variable $w = z + 1$ and then use (33) to get

$$
\int _ { A + 1 } ^ { B + 1 } f ( w ) d w = \int _ { A } ^ { B } f ( z + 1 ) d z = \int _ { A } ^ { B } f ( z ) d z + \int _ { A } ^ { B } \varphi ( z ) d z .
$$

Therefore (35) becomes

$$
S ( a , m ) = \int _ { A } ^ { B } \varphi ( z ) d z + \int _ { A } ^ { A + 1 } f ( z ) d z - \int _ { B } ^ { B + 1 } f ( z ) d z .
$$

Now we show that the integrals along the horizontal segments from $A$ to $A + 1$ and from $B$ to $B + 1$ tend to 0 as $R \to + \infty$ . To do this we estimate the integrand on these segments. We write

$$
| f ( z ) | = { \frac { | g ( z ) | } { | e ^ { 2 \pi i z } - 1 | } } ,
$$

and estimate the numerator and denominator separately.

On the segment joining $B$ to $B + 1$ we let

$$
\gamma ( t ) = t + R e ^ { \pi i / 4 } , ~ \mathrm { w h e r e } - \frac { 1 } { 2 } \leq t \leq \frac { 1 } { 2 } .
$$

From (32) we find

$$
| g [ \gamma ( t ) ] | \leq \sum _ { r = 0 } ^ { m - 1 } \left| \exp \left\{ \frac { \pi i a ( t + R e ^ { \pi i / 4 } + r ) ^ { 2 } } { m } \right\} \right| ,
$$

where exp $z = e ^ { z }$ . The expression in braces has real part

$$
\frac { - \pi a ( \sqrt { 2 } t R + R ^ { 2 } + \sqrt { 2 } r R ) } { m } .
$$

Since $| e ^ { x + i y } | = e ^ { x }$ and e $\mathbf { x p } \{ - \pi a \sqrt { 2 } r R / m \} \le 1$ , each term in (38) has absolute value not exceeding ex| $\gimel \{ - { \pi a R ^ { 2 } } / { m } \} \exp \{ - { \sqrt { 2 } } { \pi a t R } / m \}$ . But −1/2 ≤ t ≤ 1/2, so we obtain the estimate

$$
| g [ \gamma ( t ) ] | \leq m e ^ { \pi \sqrt { 2 } a R / ( 2 m ) } e ^ { - \pi a R ^ { 2 } / m } .
$$

For the denominator in (37) we use the triangle inequality in the form

$$
| e ^ { 2 \pi i z } - 1 | \geq | | e ^ { 2 \pi i z } | - 1 | .
$$

Since $\exp \{ 2 \pi i \gamma ( t ) \} \vert = \exp \{ - 2 \pi R \sin ( \pi / 4 ) \} = \exp \{ - \sqrt { 2 } \pi R \}$ , we find

$$
| e ^ { 2 \pi i \gamma ( t ) } - 1 | \geq 1 - e ^ { - \sqrt { 2 } \pi R } .
$$

Therefore on the line segment joining $B$ to $B + 1$ we have the estimate

$$
| f ( z ) | \leq { \frac { m e ^ { \pi { \sqrt { 2 } } a R / ( 2 m ) } e ^ { - \pi a R ^ { 2 } / m } } { 1 - e ^ { - { \sqrt { 2 } } \pi R } } } = o ( 1 ) \quad { \mathrm { a s ~ } } R \to + \infty .
$$

A similar argument shows that the integrand tends to 0 on the segment joining $\pmb { A }$ to $A + 1$ as $R \to + \infty$ . Since the length of the path of integration is 1 in each case, this shows that the second and third integrals on the right of (36) tend to 0 as $R \to + \infty$ . Therefore we can write (36) in the form

$$
S ( a , m ) = \int _ { A } ^ { B } \varphi ( z ) d z + o ( 1 ) \quad { \mathrm { a s ~ } } R \to + \infty .
$$

To deal with the integral $\int _ { A } ^ { B } \varphi$ we apply Cauchy's theorem, integrating $\varphi$ around the parallelogram with vertices $A , B , \alpha , - \alpha ,$ where $\begin{array} { r } { \alpha = B + \frac { 1 } { 2 } = } \end{array}$ $R e ^ { \pi i / 4 }$ . (See Figure 9.2.) Since $\varphi$ is analytic everywhere, its integral around this parallelogram is 0, so

$$
\int _ { A } ^ { B } \varphi + \int _ { B } ^ { \alpha } \varphi + \int _ { \alpha } ^ { - \alpha } \varphi + \int _ { - \alpha } ^ { A } \varphi = 0 .
$$

![](images/1ab253c8e54cff3b8b695152eb2c4870e2a66709db13303c763d2ddb4bf87063.jpg)  
Figure 9.2

Because of the exponential factor $e ^ { \pi i a z ^ { 2 } / m }$ in (34), an argument similar to that given above shows that the integral of $\varphi$ along each horizontal segment $\to 0$ as $R  + \infty$ . Therefore (40) gives us

$$
\int _ { A } ^ { B } \varphi = \int _ { - \infty } ^ { \infty } \varphi + o ( 1 ) \quad { \mathrm { a s ~ } } R \to + \infty ,
$$

and (39) becomes

$$
S ( a , m ) = \int _ { - \infty } ^ { \infty } \varphi ( z ) d z + o ( 1 ) \quad { \mathrm { a s ~ } } R \to + \infty ,
$$

where $\alpha = R e ^ { \pi i / 4 }$ . Using (34) we find

$$
\int _ { - \infty } ^ { \infty } \varphi ( z ) d z = \sum _ { n = 0 } ^ { a - 1 } \int _ { - \infty } ^ { \infty } e ^ { \pi i a z ^ { 2 } / m } e ^ { 2 \pi i n z } d z = \sum _ { n = 0 } ^ { a - 1 } e ^ { - \pi i m n ^ { 2 } / a } I ( a , m , n , R ) ,
$$

where

$$
I ( a , m , n , R ) = \int _ { - \alpha } ^ { \alpha } \exp \left\{ \frac { \pi i a } { m } \left( z + \frac { n m } { a } \right) ^ { 2 } \right\} d z .
$$

Applying Cauchy's theorem again to the parallelogram with vertices $- x , x ,$ $\alpha - \left( n m / a \right)$ and $- \alpha - ( n m / a )$ , we find as before that the integrals along the horizontal segments $\bf \Pi \to 0$ as $R  + \infty$ ,so

$$
I ( a , m , n , R ) = \int _ { - \infty - n m / a } ^ { \infty - m n / a } \exp \Biggl \{ \frac { \pi i a } { m } ( z + \frac { n m } { a } ) ^ { 2 } \Biggr \} d z + o ( 1 ) \mathrm { a s } R  + \infty .
$$

The change of variable $w = \sqrt { a / m } ( z + ( n m / a ) )$ puts this into the form

$$
I ( a , m , n , R ) = \sqrt { \frac { m } { a } } \int _ { - \alpha \sqrt { a / m } } ^ { \alpha \sqrt { a / m } } e ^ { \pi i w ^ { 2 } } d w + o ( 1 ) \quad \mathrm { a s } R \to + \infty .
$$

Letting $R  + \infty$ in (41), we find

$$
S ( a , m ) = \sum _ { n = 0 } ^ { a - 1 } e ^ { - \pi i m n ^ { 2 } / a } \sqrt { \frac { m } { a } } \operatorname * { l i m } _ { R  + \infty } \int _ { - R \sqrt { a / m } e ^ { \pi i / 4 } } ^ { R \sqrt { a / m } e ^ { \pi i / 4 } } e ^ { \pi i w ^ { 2 } } d w .
$$

By writing $T = \sqrt { a / m } R$ , we see that the last limit is equal to

$$
\operatorname* { l i m } _ { T \to { } + \infty } \int _ { - T e ^ { \pi i / 4 } } ^ { T e ^ { \pi i / 4 } } e ^ { \pi i w ^ { 2 } } d w = I
$$

say, where $I$ is a number independent of $^ { a }$ and $\pmb { m }$ . Therefore (42) gives us

$$
S ( a , m ) = { \sqrt { \frac { m } { a } } } I { \widehat { S ( m , a ) } } .
$$

To evaluate $I$ we take $a = 1$ and $m = 2$ in (43). Then $S ( 1 , 2 ) = 1 + i$ and $S ( 2 , 1 ) = 1$ , so (43) implies $I = ( 1 + i ) / \sqrt { 2 }$ , and (43) reduces to (31). □

Theorem 9.16 implies a reciprocity law for quadratic Gauss sums.

Theorem $9 . 1 7 ~ I f h > 0 , k > 0 ,$ h odd, then

$$
G ( h ; k ) = \sqrt { { \frac { k } { h } } } { \frac { 1 + i } { 2 } } ( 1 + e ^ { - \pi i h k / 2 } ) \overline { { { G ( k ; h ) } } } .
$$

PROOF. Take $a = 2 h$ , $m = k$ in Theorem 9.16 to obtain

$$
G ( h ; k ) = S ( 2 h , k ) = \sqrt { \frac { k } { 2 h } } \frac { 1 + i } { \sqrt { 2 } } \overline { { { S ( k , 2 h ) } } } = \sqrt { \frac { k } { h } } \frac { 1 + i } { 2 } \sum _ { r = 0 } ^ { 2 h - 1 } e ^ { - \pi i k r ^ { 2 } / ( 2 h ) } .
$$

We split the sum on $r$ into two parts corresponding to even and odd $r .$ For even $r$ we write $r = 2 s$ where $s = 0 , 1 , 2 , \ldots , h - 1 ,$ Forodd $r$ we note that $( r + 2 h ) ^ { 2 } \equiv r ^ { 2 }$ (mod 4h) so the sum can be extended over the odd numbers in any complete residue system mod $2 h$ . We sum over the odd numbers in the interval $h \leq r < 3 h$ , writing $r = 2 s + h _ { \ast }$ where $s = 0 , 1 , 2 , \ldots , h - 1 .$ (The numbers $2 s + h$ are odd and distinct mod $2 h .$ ) This gives us

$$
\begin{array} { l } { { \displaystyle \sum _ { r = 0 } ^ { 2 h - 1 } e ^ { - \pi i k r ^ { 2 } / ( 2 h ) } = \sum _ { s = 0 } ^ { h - 1 } e ^ { - \pi i k ( 2 s ) ^ { 2 } / ( 2 h ) } + \sum _ { s = 0 } ^ { h - 1 } e ^ { - \pi i k ( 2 s + h ) ^ { 2 } / ( 2 h ) } } } \\ { { \displaystyle = \sum _ { s = 0 } ^ { h - 1 } e ^ { - 2 \pi i k s ^ { 2 } / h } \big ( 1 + e ^ { - \pi i h k / 2 } \big ) } } \\ { { \displaystyle = ( 1 + e ^ { - \pi i h k / 2 } ) \overline { { { G ( k ; h ) } } } . } } \end{array}
$$

Using this in (45) we obtain (44).

# 9.11 Another proof of the quadratic reciprocity law

Gauss' formula (30) leads to a quick proof of the quadratic reciprocity law. First we note that (30) implies

$$
G ( 1 ; k ) = i ^ { ( k - 1 ) ^ { 2 } / 4 } \sqrt { k }
$$

if $k$ is odd. Also, we have the multiplicative property (see Exercise 8.16(a))

$$
G ( m ; n ) G ( n ; m ) = G ( 1 ; m n ) \quad { \mathrm { i f ~ } } ( m , n ) = 1 .
$$

Therefore, if $p$ and $q$ are distinct odd primes we have

$$
\begin{array} { l } { G ( p ; q ) = ( p \backslash q ) G ( 1 ; q ) = ( p \backslash q ) i ^ { ( q - 1 ) ^ { 2 } / 4 } { \sqrt { q } } } \\ { G ( q ; p ) = ( q \backslash p ) G ( 1 ; p ) = ( q \backslash p ) i ^ { ( p - 1 ) ^ { 2 } / 4 } { \sqrt { p } } } \end{array}
$$

and

$$
G ( p ; q ) G ( q ; p ) = G ( 1 ; p q ) = i ^ { ( p q - 1 ) ^ { 2 } / 4 } \sqrt { p q } .
$$

Comparing the last equation with the previous two we fnd

$$
( p | q ) ( q | p ) i ^ { \{ ( q - 1 ) ^ { 2 } + \{ p - 1 \} ^ { 2 } \} / 4 } = i ^ { ( p q - 1 ) ^ { 2 } / 4 } ,
$$

and the quadratic reciprocity law follows by observing that

$$
i ^ { \{ ( p q - 1 ) ^ { 2 } - ( q - 1 ) ^ { 2 } - ( p - 1 ) ^ { 2 } \} / 4 } = \{ - 1 \} ^ { ( p - 1 ) ( q - 1 ) / 4 } .
$$

# Exercises for Chapter 9

1. Determine those odd primes $p$ for which $( - 3 | p ) = 1$ and those for which $\left( - 3 | p \right) =$ -1.

2. Prove that 5 is a quadratic residue of an odd prime $p$ if $p \equiv \pm 1$ (mod 10), and that 5 is a nonresidue if $p \equiv \pm 3$ (mod 10).

3. Let $p$ be an odd prime. Assume that the set $\{ 1 , 2 , \ldots , p - 1 \}$ can be expressed as the union of two nonempty subsets S and $T , S \neq T ,$ such that the product (mod $p \llap / ,$ ofany two elements in the same subset lies in $\pmb { S } _ { \mathrm { i } }$ whereas the product $( \boldsymbol { \mathrm { m o d } } \ p )$ of any element in S with any element in $T$ lies in $T$ . Prove that $s$ consists of the quadratic residues and ${ \pmb T }$ of the nonresidues mod $p$

4. Let $f ( x )$ be a polynomial which takes integer values when $x$ is an integer. $( a )$ If $^ { a }$ and $b$ are integers, prove that

$$
\sum _ { x \bmod p } ( f ( a x + b ) | p ) = \sum _ { x \bmod p } ( f ( x ) | p ) \quad { \mathrm { i f ~ } } ( a , p ) = 1 ,
$$

and that

$$
\sum _ { x \bmod p } ( a f ( x ) | p ) = ( a | p ) \sum _ { x \bmod p } ( f ( x ) | p ) \quad { \mathrm { f o r ~ a l l ~ } } a .
$$

(b) Prove that

$$
\sum _ { x \mathop { \mathrm { m o d } } p } ( a x + b | p ) = 0 \quad \mathrm { i f } ( a , p ) = 1 .
$$

(c) Let $f ( x ) = x ( a x + b ) ;$ where $( a , p ) = ( b , p ) = 1 .$ Prove that

$$
\sum _ { x = 1 } ^ { p - 1 } ( f ( x ) | p ) = \sum _ { x = 1 } ^ { p - 1 } ( a + b x | p ) = - ( a | p ) .
$$

[Hint: As $x$ runs through a reduced residue system mod $\pmb { p }$ , so does $\mathbf { \chi } _ { x ^ { \prime } } ^ { \prime }$ ,the reciprocal of $\boldsymbol { x }$ mod $p . ]$

5. Let $\pmb { \alpha }$ and $\beta$ be integers whose possible values are $\pm 1$ . Let $N ( \alpha , \beta )$ denote the number of integers $x$ among $1 , 2 , \ldots , p - 2$ such that

$$
\left( x | p \right) = \alpha \qquad { \mathrm { a n d } } \left( x + 1 | p \right) = \beta ,
$$

where $p$ is an odd prime. Prove that

$$
4 N ( \alpha , \beta ) = \sum _ { x = 1 } ^ { p ^ { - 2 } } \{ 1 + \alpha ( x \mid p ) \} \{ 1 + \beta ( x + 1 \mid p ) \} ,
$$

9: Quadratic residues and the quadratic reciprocity law

and use Exercise 4 to deduce that

$$
4 N ( \alpha , \beta ) = p - 2 - \beta - \alpha \beta - \alpha ( - 1 | p ) .
$$

In particular this gives

$$
\begin{array} { c } { { N ( 1 , 1 ) = \displaystyle \frac { p - 4 - ( - 1 \mid p ) } { 4 } , } } \\ { { { } } } \\ { { N ( - 1 , - 1 ) = N ( - 1 , 1 ) = \displaystyle \frac { p - 2 + ( - 1 \mid p ) } { 4 } , } } \\ { { { } } } \\ { { N ( 1 , - 1 ) = 1 + N ( 1 , 1 ) . } } \end{array}
$$

6. Use Exercise 5 to show that for every prime $p$ there exist integers $x$ and $y$ such that $x ^ { 2 } + y ^ { 2 } + 1 \equiv 0$ (mod p).

7. Let $p$ be an odd prime. Prove each of the following statements:

(a) $\sum _ { r = 1 } ^ { p - 1 } r ( r | p ) = 0 \quad { \mathrm { i f ~ } } p \equiv 1 { \pmod { 4 } } .$   
(b) $\sum _ { r = 1 \atop ( r \mid p ) = 1 } ^ { p - 1 } r = { \frac { p ( p - 1 ) } { 4 } } \quad { \mathrm { i f ~ } } p \equiv 1 { \pmod { 4 } } .$   
(c) $\sum _ { r = 1 } ^ { p - 1 } r ^ { 2 } ( r | p ) = p \sum _ { r = 1 } ^ { p - 1 } r ( r | p ) \quad { \mathrm { i f ~ } } p \equiv 3 { \pmod { 4 } } .$   
(d) $\sum _ { r = 1 } ^ { p - 1 } r ^ { 3 } ( r | p ) = { \frac { 3 } { 2 } } p \sum _ { r = 1 } ^ { p - 1 } r ^ { 2 } ( r | p ) \quad { \mathrm { i f ~ } } p \equiv 1 { \pmod { 4 } } .$   
(e) $\sum _ { r = 1 } ^ { p - 1 } r ^ { 4 } ( r | p ) = 2 p \sum _ { r = 1 } ^ { p - 1 } r ^ { 3 } ( r | p ) - p ^ { 2 } \sum _ { r = 1 } ^ { p - 1 } r ^ { 2 } ( r | p ) \quad { \mathrm { i f ~ } } p \equiv 3 { \mathrm { ~ ( m o d ~ } } 4 ) .$ $[ H i n t : p - r$ runs through the numbers $1 , 2 , \ldots , p - 1$ with r

8. Let $p$ be an odd prime, $p \equiv 3$ (mod 4), and let $q = ( p - 1 ) / 2$

(a) Prove that

$$
\{ 1 - 2 ( 2 \vert p ) \} \sum _ { r = 1 } ^ { q } r ( r \vert p ) = p \frac { 1 - ( 2 \vert p ) } { 2 } \sum _ { r = 1 } ^ { q } ( r \vert p ) .
$$

$[ H i n t : \mathbf { A } \mathbf { s } \ r$ runs through the numbers $1 , 2 , \ldots , q$ then $r$ and $p - r$ together run through the numbers $\mathbf { i } , 2 , \ldots , p - \mathbf { i }$ , as do $2 r$ and $p - 2 r . ]$

(b) Prove that

$$
\{ ( 2 | p ) - 2 \} \sum _ { r = 1 } ^ { p - 1 } r ( r | p ) = p \sum _ { r = 1 } ^ { q } ( r | p ) .
$$

9.If $p$ is an odd prime, let $\chi ( n ) = ( n | p ) .$ Prove that the Gauss sum $G ( n , \chi )$ associated with $\chi$ is the same as the quadratic Gauss sum $G ( n ; p )$ introduced in Exercise 8.16 if $( n , p ) = 1 .$ . In other words, if $p \gamma n$ we have

$$
G ( n , \chi ) = \sum _ { m \bmod p } \chi ( m ) e ^ { 2 \pi i m n / p } = \sum _ { r = 1 } ^ { p } e ^ { 2 \pi i n r ^ { 2 } / p } = G ( n ; p ) .
$$

It should be noted that $G ( n , \chi ) \neq G ( n ; p ) { \mathrm { i f } } p | n$ because $G ( p , \chi ) = 0$ but $G ( { \mathfrak { p } } ; { \mathfrak { p } } ) = { \mathfrak { p } }$

10. Evaluate the quadratic Gauss sum $G ( 2 ; { \mathfrak { p } } )$ using one of the reciprocity laws. Compare the result with the formula $G ( 2 ; p ) = ( 2 | p ) G ( 1 ; p )$ and deduce that $( 2 | p ) =$ $\bar { ( - 1 ) } ^ { ( p ^ { 2 } - 1 ) / 8 }$ if $p$ is an odd prime.

# 10 Primitive Roots

# 10.1 The exponent of a number mod $m$ Primitive roots

Let $^ a$ and $m$ be relatively prime integers, with $m \geq 1$ , and consider all the positive powers of $a$ :

$$
a , a ^ { 2 } , a ^ { 3 } , \ldots
$$

We know, from the Euler-Fermat theorem, that $a ^ { \varphi ( m ) } \equiv 1$ (mod m). However, there may be an earlier power $a ^ { f }$ such that $a ^ { f } \equiv 1 { \pmod { m } }$ . We are interested in the smallest positive $f$ with this property.

Definition The smallest positive integer $f$ such that

$$
a ^ { f } \equiv 1 { \pmod { m } }
$$

is called the exponent of $a$ modulo $m$ , and is denoted by writing

$$
\begin{array} { r } { f = \exp _ { m } ( a ) . } \end{array}
$$

If $\mathrm { e x p } _ { m } ( a ) = \varphi ( m )$ then $a$ is called a primitive root mod m.

The Euler-Fermat theorem tells us that $\begin{array} { r } { \exp _ { m } ( a ) \leq \varphi ( m ) } \end{array}$ . The next theorem shows that $\mathsf { e x p } _ { m } ( a )$ divides $\varphi ( m )$

Theorem 10.1 Given $m \geq 1 , ( a , m ) = 1 .$ ,let $f = \exp _ { m } ( a )$ . Then we have:

(a) $a ^ { k } \equiv a ^ { h }$ (mod $m$ $i f ,$ and only i $f , k \equiv h ( { \bf m o d } f ) .$ (b) $a ^ { k } \equiv 1$ (mod m) $i f ,$ and only if, $k \equiv 0$ (mod $f$ ). In particular, $f | \varphi ( m )$ (c) The mumbers $1 , a , a ^ { 2 } , \ldots , a ^ { f - 1 }$ are incongruent mod m.

ProoF. Parts (b) and (c) follow at once from (a), so we need only prove (a). If $a ^ { k } \equiv a ^ { h }$ (mod m) then $a ^ { k - \hbar } \equiv 1$ (mod m). Write

$$
k - h = q f + r , \quad { \mathrm { w h e r e } } \ 0 \leq r < f .
$$

Then $1 \equiv a ^ { k - h } = a ^ { q f + r } \equiv a ^ { r }$ $\left( { \overrightarrow { \bf m o d } } \ m \right)$ $\mathbf { s o } \ r = 0$ and $k \equiv h { \mathrm { ~ } } ( { \mathrm { m o d ~ } } f ) .$

Conversely, if $k \equiv h { \pmod { f } }$ then $k - h = q f$ so $a ^ { k - h } \equiv 1$ (mod m) and hence $a ^ { k } \equiv a ^ { h }$ (mod $^ { m }$ ) □

# 10.2 Primitive roots and reduced residue systems

Theorem 10.2 Let $( a , m ) = 1$ . Then $a$ is $a$ primitive root mod m if, and only if, the numbers

$$
a , a ^ { 2 } , \ldots , a ^ { \varphi ( m ) }
$$

form a reduced residue system mod m.

PROOF. If $a$ is a primitive root the numbers in (1) are incongruent mod $m ,$ by Theorem 10.1(c). Since there are $\varphi ( m )$ such numbers they form a reduced residue system mod m.

Conversely, if the numbers in (1) form a reduced residue system, then $a ^ { \varphi ( m ) } \equiv 1$ (mod m) but no smaller power is congruent to 1, so $a$ is a primitive root. □

Note. In Chapter 6 we found that the reduced residue classes mod m form a group. If m has a primitive root $a ,$ , Theorem 10.2 shows that this group is the cyclic group generated by the residue class $\hat { a }$

The importance of primitive roots is explained by Theorem 10.2. If m has a primitive root then each reduced residue system mod m can be expressed as a geometric progression. This gives a powerful tool that can be used in problems involving reduced residue systems. Unfortunately, not all moduli have primitive roots. In the next few sections we will prove that primitive roots exist only for the following moduli:

$$
m = 1 , 2 , 4 , p ^ { \alpha } , \mathrm { a n d } 2 p ^ { \alpha } ,
$$

where $p$ is an odd prime and $\alpha \geq 1$

The first three cases are easily settled. The case $m = 1$ is trivial. For $m = 2$ the number 1 is a primitive root. For $m = 4$ we have $\varphi ( 4 ) = 2$ and $3 ^ { 2 } \equiv$ 1 (mod 4), so 3 is a primitive root. Next we show that there are no primitive roots mod $2 ^ { \alpha }$ if ${ \mathfrak { X } } \geq 3$ .

10.3 The nonexistence of primitive roots mod $2 ^ { x }$ for $\alpha \geq 3$

Theorem 10.3 Let $x$ be an odd integer. $I f \alpha \geq 3$ we have

$$
x ^ { \varphi ( 2 ^ { \alpha } ) / 2 } \equiv 1 { \pmod { 2 ^ { \alpha } } } ,
$$

so there are no primitive roots mod $2 ^ { \alpha }$ -

PROOF. If $\alpha = 3$ congruence (2) states that $x ^ { 2 } \equiv 1$ (mod 8) for $x$ odd. This is easily verified by testing $x = 1 , 3 , 5 , 7$ or by noting that

$$
( 2 k + 1 ) ^ { 2 } = 4 k ^ { 2 } + 4 k + 1 = 4 k ( k + 1 ) + 1
$$

and observing that $k ( k + 1 )$ is even.

Now we prove the theorem by induction on $\pmb { \alpha } .$ We assume (2) holds for $\pmb { \alpha }$ and prove that it also holds for $\textsf { \textsf { X } } + 1$ . The induction hypothesis is that

$$
x ^ { \varphi ( 2 ^ { \alpha } ) / 2 } = 1 + 2 ^ { \alpha } t ,
$$

where $t$ is an integer. Squaring both sides we obtain

$$
x ^ { \varphi ( 2 ^ { \alpha } ) } = 1 + 2 ^ { \alpha + 1 } t + 2 ^ { 2 \alpha } t ^ { 2 } \equiv 1 { \pmod { 2 ^ { \alpha + 1 } } }
$$

because $2 \alpha \geq \alpha + 1$ This completes the proof since $\varphi ( 2 ^ { \alpha } ) = 2 ^ { \alpha - 1 } = \varphi ( 2 ^ { \alpha + 1 } ) / 2$ -

# 10.4 The existence of primitive roots mod $p$ for odd primes $p$

First we prove the following lenma.

Lemma 1 Given $( a , m ) = 1$ ,let $f = \exp _ { m } ( a )$ .Then

$$
\exp _ { m } ( a ^ { k } ) = \frac { \exp _ { m } ( a ) } { ( k , f ) } .
$$

In particular, $\exp _ { m } ( a ^ { k } ) = \exp _ { m } ( a ) \ i f$ , and only if, $( k , f ) = 1$

PRooF. The exponent of $a ^ { \pmb { k } }$ is the smallest positive $x$ such that

$$
a ^ { x k } \equiv 1 { \pmod { m } } .
$$

This is also the smallest $x > 0$ such that $k x \equiv 0 { \pmod { f } }$ . But this latter congruence is equivalent to the congruence

$$
x \equiv 0 { \pmod { \frac { f } { d } } } ,
$$

where $d = ( k , f )$ . The smallest positive solution of this congruence is $f / d ,$ so $\begin{array} { r } { \exp _ { m } ( \boldsymbol { a } ^ { k } ) = f / d , } \end{array}$ , as asserted.

Lemma 1 will be used to prove the existence of primitive roots for prime moduli. In fact, we shall determine the exact number of primitive roots mod $p$

Theorem 10.4 Let $p$ be an odd prime and let $d$ be any positive divisor of $p - 1$ - Then in every reduced residue system mod $p$ there are exactly $\varphi ( d )$ numbers a such that

$$
\exp _ { p } ( a ) = d .
$$

In particular, when $d = \varphi ( p ) = p - 1$ there are exactly $\varphi ( p - 1 )$ primitive roots mod $p$

PRoor. We use the method employed in Chapter 2 to prove the relation

$$
\sum _ { d \mid n } \varphi ( d ) = n .
$$

The numbers $1 , 2 , \ldots , p - 1$ are distributed into disjoint sets $A ( d ) _ { i }$ each set corresponding to a divisor $d$ of $p - 1$ . Here we define

$$
A ( d ) = \{ x : 1 \leq x \leq p - 1 \mathrm { ~ a n d ~ } \exp _ { p } ( x ) = d \} .
$$

Let $f ( d )$ be the number of elements in $A ( d )$ Then $f ( d ) \geq 0$ for each $d .$ Our goal is to prove that $f ( d ) = \varphi ( d ) .$

Since the sets $A ( d )$ are disjoint and since each $x = 1 , 2 , \ldots , p - 1$ falls into some $A ( d ) ,$ we have

$$
\sum _ { d | p - 1 } f ( d ) = p - 1 .
$$

But we also have

$$
\sum _ { d | p - 1 } \varphi ( d ) = p - 1
$$

SO

$$
\sum _ { d | p - 1 } \{ \varphi ( d ) - f ( d ) \} = 0 .
$$

To show each term in this sum is zero it sufices to prove that $f ( d ) \leq \varphi ( d ) .$ We do this by showing that either $f ( d ) = 0$ or $f ( d ) = \varphi ( d )$ ; or, in other words, that $f ( d ) \neq 0$ implies $f ( d ) = \varphi ( d )$

Suppose that $f ( d ) \neq 0 .$ Then $A ( d )$ is nonempty so $a \in A ( d )$ for some $^ { a }$ , Therefore

$$
\displaystyle \exp _ { p } ( a ) = d , \quad \mathrm { h e n c e } a ^ { d } \equiv 1 ( \mathrm { m o d } p ) .
$$

But every power of $a$ satisfies the same congruence, so the $d$ numbers

$$
a , a ^ { 2 } , \ldots , a ^ { d }
$$

are solutions of the polynomial congruence

$$
x ^ { d } - 1 \equiv 0 { \pmod { p } } ,
$$

these solutions being incongruent mod $p$ since $d = \exp _ { p } ( a )$ . But (4) has at most $d$ solutions since the modulus is prime, so the $d$ numbers in (3) must be all the solutions of (4). Hence each number in $A ( d )$ must be of the form $a ^ { k }$ for some $k = 1 , 2 , \ldots , d .$ When is $\begin{array} { r } { \mathtt { e x p } _ { p } ( a ^ { k } ) = d ? } \end{array}$ According to Lemma 1 this occurs if, and only if, $( k , d ) = 1$ . In other words, among the $d$ numbers in (3) there are $\varphi ( d )$ which have exponent $d$ modulo $p$ . Thus we have shown that $f ( d ) = \varphi ( d )$ if $f ( d ) \neq 0 .$ As noted earlier, this completes the proof. □

# 10.5 Primitive roots and quadratic residues

Theorem 10.5 Let $g$ be a primitive root mod $p$ where $p$ is an odd prime. Then the even powers

$$
g ^ { 2 } , g ^ { 4 } , \ldots , g ^ { p - 1 }
$$

are the quadratic residues mod $p$ , and the odd powers

$$
g , g ^ { 3 } , \ldots , g ^ { p - 2 }
$$

are the quadratic nonresidues mod $p$

PROOF. If $n$ is even, say $n = 2 m$ then $g ^ { n } = ( g ^ { m } ) ^ { 2 }$ so

$$
g ^ { n } \equiv x ^ { 2 } { \pmod { p } } , \quad { \mathrm { w h e r e ~ } } x = g ^ { m } .
$$

Hence $g ^ { n } R p$ But there are $( p - 1 ) / 2$ distinct even powers $g ^ { 2 } , \ldots , g ^ { p - 1 }$ modulo $p$ and the same number of quadratic residues mod $p$ . Therefore the even powers are the quadratic residues and the odd powers are the nonresidues. □

# 10.6 The existence of primitive roots mod $p ^ { \alpha }$

We turn next to the case $m = p ^ { \alpha }$ where $p$ is an odd prime and $\alpha \geq 2$ In seeking primitive roots mod $p ^ { \alpha }$ it is natural to consider as candidates the primitive roots mod $p$ Let $g$ be such a primitive root and let us ask whether $g$ might also be a primitive root mod $p ^ { 2 }$ . Now $g ^ { p - 1 } \equiv 1$ (mod $p )$ and, since $\varphi ( p ^ { 2 } ) = p ( p - 1 ) > p - 1$ ,this $\pmb { g }$ will certainly not be a primitive root mod $p ^ { 2 }$ if $g ^ { p - 1 } \equiv 1$ (mod $p ^ { 2 ^ { \cdot } }$ ). Therefore the relation

$$
g ^ { p - 1 } \not \equiv 1 { \pmod { p ^ { 2 } } }
$$

is a necessary condition for a primitive root $\pmb { g }$ mod $p$ to also be a primitive root mod $p ^ { 2 }$ . Remarkably enough, this condition is also sufficient for $\pmb { g }$ to be a primitive root mod $p ^ { 2 }$ and, more generally, mod $p ^ { \pmb { x } }$ for all powers $\alpha \geq 2$ . In fact, we have the following theorem.

Theorem 10.6 Let $p$ be an odd prime. Then we have:

(a) If $g$ is $a$ primitive root mod $p$ then $g$ is also a primitive root mod $p ^ { \alpha }$ for all $\alpha \geq 1 \ i f ,$ and only $i f ,$

$$
g ^ { p - 1 } \not \equiv 1 { \pmod { p ^ { 2 } } } .
$$

(b) There is at least one primitive root $\pmb { g }$ mod $p$ which satisfies (5), hence there exists at least one primitive root mod $p ^ { \alpha }$ if $\alpha \geq 2$

PRooF. We prove (b) first. Let $g$ be a primitive root mod $p$ $\mathbf { \Delta } [ \mathbf { f } g ^ { p - 1 } \neq 1 \ ( \mathbf { m o d } p ^ { 2 } )$ there is nothing to prove. However, if $g ^ { p - 1 } \equiv 1$ (mod $p ^ { 2 }$ ) we can show that $g _ { 1 } = g + p $ , which is another primitive root modulo $p$ , satisfes the condition

$$
g _ { 1 } ^ { \ p - 1 } \not \equiv 1 { \pmod { p ^ { 2 } } } .
$$

In fact, we have

$$
{ \begin{array} { r l } & { { g _ { 1 \ } } ^ { p - 1 } = ( g + p ) ^ { p - 1 } = g ^ { p - 1 } + ( p - 1 ) g ^ { p - 2 } p + t p ^ { 2 } } \\ & { \qquad \equiv g ^ { p - 1 } + ( p ^ { 2 } - p ) g ^ { p - 2 } \ ( { \bmod { \ p } } ^ { 2 } ) } \\ & { \qquad \equiv 1 - p g ^ { p - 2 } \ ( { \bmod { \ p } } ^ { 2 } ) . } \end{array} }
$$

But we cannot have $p g ^ { p - 2 } \equiv 0 { \pmod { p ^ { 2 } } }$ for this would imply $g ^ { p - 2 } \equiv$ $0 \ ( \mathbf { m o d } \ p )$ , contradicting the fact that $\pmb { g }$ is a primitive root mod $p$ Hence ${ g _ { 1 } } ^ { p - 1 } \not \equiv 1$ (mod $p ^ { 2 \cdot }$ ), so (b) is proved.

Now we prove (a). Let $\pmb { g }$ be a primitive root modulo $p$ . If this $g$ is a primitive root mod $p ^ { \alpha }$ for all $\alpha \geq 1$ then, in particular, it is a primitive root mod $p ^ { 2 }$ and, as we have already noted, this implies (5).

Now we prove the converse statement. Suppose that $g$ is a primitive root mod $p$ which satisfies (5). We must show that $g$ is also a primitive root mod $p ^ { \alpha }$ for all $\alpha \geq 2$ . Let $t$ be the exponent of $g$ modulo $p ^ { \alpha }$ We wish to show that $t = \varphi ( p ^ { \alpha } ) .$ Since $g ^ { t } \equiv 1$ (mod $p ^ { \alpha } ,$ we also have $g ^ { t } \equiv 1 { \pmod { p } }$ so $\varphi ( p ) | t$ and we can write

$$
t = q \varphi ( p ) .
$$

Now $t | \varphi ( p ^ { \alpha } )$ s0 $q \varphi ( p ) | \varphi ( p ^ { \alpha } )$ . But $\varphi ( p ^ { \alpha } ) = p ^ { \alpha - 1 } ( p - 1 )$ hence

$$
q ( p - 1 ) | p ^ { \alpha - 1 } ( p - 1 )
$$

which means $q | p ^ { \alpha - 1 }$ . Therefore $q = p ^ { \beta }$ where $\beta \leq \alpha - 1$ , and (6) becomes

$$
t = p ^ { \beta } ( p - 1 ) .
$$

If we prove that $\beta = \alpha - 1$ then $t = \varphi ( p ^ { \alpha } )$ and the proof wil be complete.

Suppose, on the contrary, that $\beta < \alpha - 1$ .Then $\beta \leq \alpha - 2$ and we have

$$
t = p ^ { \beta } ( p - 1 ) | p ^ { \alpha - 2 } ( p - 1 ) = \varphi ( p ^ { \alpha - 1 } ) .
$$

Thus, since $\varphi ( p ^ { \alpha - 1 } )$ is a multiple of $t$ , this implies,

$$
g ^ { \varphi ( p ^ { \alpha - 1 } ) } \equiv 1 { \pmod { p ^ { \alpha } } } .
$$

But now we make use of the following Lemma which shows that (7) is a contradiction. This contradiction will complete the proof of Theorem 10.6.

Lemma 2 Let $g$ be a primitive root modulo $p$ such that

$$
g ^ { p - 1 } \not \equiv 1 { \pmod { p ^ { 2 } } } .
$$

Then for every $\alpha \geq 2$ we hate

$$
g ^ { \varphi ( p ^ { \alpha - 1 } ) } \not \equiv 1 { \pmod { p ^ { \alpha } } } .
$$

ProoF OF LEmMA 2. We use induction on $\pmb { \alpha } .$ . For $\alpha = 2$ , relation (9) reduces to (8). Suppose then, that (9) holds for $\pmb { \alpha } .$ By the Euler-Fermat theorem we have

$$
g ^ { \varphi ( p ^ { \alpha - 1 } ) } \equiv 1 { \pmod { p ^ { \alpha - 1 } } }
$$

sO

$$
g ^ { \varphi ( p ^ { \alpha - 1 } ) } = 1 + k p ^ { \alpha - 1 }
$$

where $p \nmid k$ because of (9). Raising both sides of this last relation to the pth power we fi nd

$$
g ^ { \varphi ( p ^ { \alpha } ) } = ( 1 + k p ^ { x - 1 } ) ^ { p } = 1 + k p ^ { \alpha } + k ^ { 2 } { \frac { p ( p - 1 ) } { 2 } } p ^ { 2 ( \alpha - 1 ) } + r p ^ { 3 ( \alpha - 1 ) } .
$$

Now $2 \alpha - 1 \geq \alpha + 1$ and $3 \alpha - 3 \geq \alpha + 1$ since $\alpha \ge 2$ Hence, the last equation gives us the congruence

$$
g ^ { \varphi ( p ^ { \alpha } ) } \equiv 1 + k p ^ { x } { \pmod { p ^ { \alpha + 1 } } }
$$

where $p \nmid k$ . In other words, $g ^ { \varphi ( p ^ { \alpha } ) } \not \equiv 1 { \pmod { p ^ { \alpha + 1 } } }$ so (9) holds for $\alpha + 1$ if it holds for $\pmb { \alpha }$ This completes the proof of Lemma 2 and also of Theorem 10.6. □

# 10.7 The existence of primitive roots mod $2 p ^ { \alpha }$

Theorem 10.7 If $p$ is an odd prime and $\alpha \geq 1$ there exist odd primitive roots $g$ modulo $p ^ { \alpha }$ . Each such $g$ is also a primitive root modulo $2 p ^ { \alpha }$

PROOF. If $g$ is a primitive root modulo $p ^ { \pm }$ so is ${ \boldsymbol { g } } + { \boldsymbol { p } } ^ { \alpha }$ . But one of $\pmb { g }$ or $g + p ^ { \alpha }$ is odd so odd primitive roots mod $p ^ { \alpha }$ always exist. Let $g$ be an odd primitive root mod $p ^ { \alpha }$ and let $f$ be the exponent of $g$ mod $2 p ^ { \alpha }$ . We wish to show that $f = \varphi ( 2 p ^ { \alpha } )$ .Now $f | \varphi ( 2 p ^ { \alpha } ) ,$ and $\varphi ( 2 p ^ { \alpha } ) = \varphi ( 2 ) \varphi ( p ^ { \alpha } ) = \varphi ( p ^ { \alpha } )$ so $f \{ \varphi \{ p ^ { \alpha } \}$ On the other hand, $g ^ { f } \equiv 1$ (mod $2 p ^ { \alpha } )$ so $g ^ { f } \equiv 1$ (mod $p ^ { \alpha } ]$ , hence $\varphi ( p ^ { \alpha } ) | f$ since $\pmb { g }$ is a primitive root mod $p ^ { \pmb { \alpha } }$ Therefore $f = \varphi ( p ^ { \alpha } ) = \varphi ( 2 p ^ { \alpha } ) .$ so $g$ is a primitive root mod $2 p ^ { \alpha }$ , □

# 10.8 The nonexistence of primitive roots in the remaining cases

Theorem 10.8 Given $m \geq 1$ where m is not of the form $m = 1 , 2 , 4 , p ^ { \alpha }$ ,or $2 p ^ { a }$ , where $p$ is an odd prime. Then for any a with $( a , m ) = 1$ we have

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { m } } ,
$$

so there are no primitive roots mod $^ { m }$

PRooF. We have already shown that there are no primitive roots mod $2 ^ { \alpha }$ if $\alpha \geq 3$ Therefore we can suppose that m has the factorization

$$
m = 2 ^ { \alpha } { p _ { 1 } } ^ { \alpha _ { 1 } } \cdot \cdot \cdot p _ { s } ^ { \alpha _ { s } }
$$

where the $p _ { i }$ are odd primes, $s \geq 1$ , and $\alpha \geq 0$ . Since m is not of the form $1 , 2 , 4 , p ^ { \alpha }$ or $2 p ^ { \alpha }$ we have $\alpha \geq 2$ if $s = 1$ and $s \geq 2$ if $\pmb { \alpha = 0 }$ or 1. Note that

$$
\phi ( m ) = \phi ( 2 ^ { \alpha } ) \phi ( { p _ { 1 } } ^ { \alpha _ { 1 } } ) \cdot \cdot \cdot \phi ( { p _ { s } } ^ { \alpha _ { s } } ) .
$$

Now let $^ a$ be any integer relatively prime to $m$ . We wish to prove that

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { m } } .
$$

Let $g$ be a primitive root mod ${ p _ { 1 } } ^ { \alpha _ { 1 } }$ and choose $k$ so that

$$
a \equiv g ^ { k } { \pmod { p _ { 1 } ^ { \alpha _ { 1 } } } } .
$$

Then we have

$$
a ^ { \varphi ( m ) / 2 } \equiv g ^ { k \varphi ( m ) / 2 } \equiv g ^ { t \varphi ( p _ { 1 } \cdots ) } ( { \mathrm { m o d ~ } } { p _ { 1 } } ^ { \alpha _ { 1 } } )
$$

where

$$
t = k \varphi ( 2 ^ { \alpha } ) \varphi ( { p _ { 2 } } ^ { \alpha _ { 2 } } ) \cdot \cdot \cdot \varphi ( { p _ { s } } ^ { \alpha _ { s } } ) / 2 .
$$

We will show that $t$ is an integer. If $\alpha \geq 2$ the factor $\varphi ( 2 ^ { \alpha } )$ is even and hence $t$ is an integer. If $\pmb { \alpha = 0 }$ or 1 then $s \geq 2$ and the factor $\varphi ( p _ { 2 } ^ { \alpha _ { 2 } } )$ is even, so $t$ is an integer in this case as well. Hence congruence (10) gives us

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { p _ { 1 } } } .
$$

In the same way we find

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { p _ { i } ^ { \alpha _ { i } } } }
$$

for each $i = 1 , 2 , \dots , s .$ Now we show that this congruence also holds mod $2 ^ { \alpha }$ - If $\alpha \geq 3$ the condition $( a , m ) = 1$ requires $^ { a }$ to be odd and we may apply Theorem 10.3 to write

$$
a ^ { \varphi ( 2 ^ { \alpha } ) / 2 } \equiv 1 { \pmod { 2 ^ { \alpha } } } .
$$

Since $\varphi ( 2 ^ { \alpha } ) | \varphi ( m )$ this gives us

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { 2 ^ { \alpha } } }
$$

for $\alpha \geq 3$ .

If $\alpha \leq 2$ we have

$$
a ^ { \varphi ( 2 ^ { \alpha } ) } \equiv 1 { \pmod { 2 ^ { \alpha } } } .
$$

But $s \geq 1$ sO $\varphi ( m ) = \varphi ( 2 ^ { \alpha } ) \varphi ( { p _ { 1 } } ^ { x _ { 1 } } ) \cdot \cdot \cdot \varphi ( { p _ { s } } ^ { x _ { s } } ) = 2 r \varphi ( 2 ^ { \alpha } )$ where $r$ is an integer. Hence $\varphi ( 2 ^ { \alpha } ) | \varphi ( m ) / 2$ and (13) implies (12) for $\alpha \leq 2 .$ , Hence (12) holds for all $\pmb { \alpha } .$ , Multiplying together the congruences (11) and (12) we obtain

$$
a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { m } } ,
$$

and this shows that $\pmb { a }$ cannot be a primitive root mod m.

10.9 The number of primitive roots mod m

We have shown that an integer $m \geq 1$ has a primitive root if and only if

$$
m = 1 , 2 , 4 , p ^ { \alpha } \mathrm { o r } 2 p ^ { \alpha } ,
$$

where $p$ is an odd prime and $\mathfrak { z } \geq 1$ . The next theorem tells us how many primitive roots exist for each such m.

Theorem 10.9 If m has a primitive root $g$ then m has exactly $\varphi ( \varphi ( m ) )$ incongruent primitive roots and they are given by the numbers in the set

$$
S = \{ g ^ { n } \colon 1 \leq n \leq \varphi ( m ) , \mathrm { a n d } ( n , \varphi ( m ) ) = 1 \} .
$$

PROOF. We have $\begin{array} { r } { \mathbf { e x p } _ { m } ( g ) = \varphi ( m ) . } \end{array}$ and Lemma 1 shows that $\mathrm { e x p } _ { m } ( g ^ { n } ) = \mathrm { e x p } _ { m } ( g )$ if and only if $( n , \varphi ( m ) ) = 1$ . Therefore each element of $s$ is a primitive root mod m.

Conversely, if $a$ is a primitive root mod $\pmb { m }$ , then $a \equiv g ^ { k }$ (mod m) for some $k = 1 , 2 , \ldots , \varphi ( m )$ . Hence $\exp _ { m } ( g ^ { k } ) = \exp _ { m } ( a ) = \varphi ( m ) ,$ and Lemma 1 implies $( k , \varphi ( m ) ) = 1$ . Therefore every primitive root is a member of S. Since $s$ contains $\varphi ( \varphi ( m ) )$ incongruent members mod m the proof is complete. □

Although we have shown the existence of primitive roots for certain moduli, no direct method is known for calculating these roots in general without a great deal of computation, especially for large moduli. Let $g ( p )$ denote the smallest primitive root mod $p .$ Table 10.1 lists $g ( p )$ for all odd primes $p < 1 0 0 0$

Table 10.1 $g ( p )$ is the smallest primitive root of the prime $p$   

<table><tr><td>0</td><td>g(p)</td><td>p</td><td>g(p)</td><td>p</td><td>g(p)</td><td>p</td><td>g(p)</td><td>p</td><td>g(p)</td><td>P</td><td>g(p</td></tr><tr><td>2</td><td>1</td><td>109</td><td>6</td><td>269</td><td>2</td><td>439</td><td>15</td><td>617</td><td>3</td><td>811</td><td>3</td></tr><tr><td>3</td><td>2</td><td>113</td><td>3</td><td>271</td><td>6</td><td>443</td><td>2</td><td>619</td><td>2</td><td>821</td><td>2</td></tr><tr><td>5</td><td>2</td><td>127</td><td>3</td><td>277</td><td>5</td><td>449</td><td>3</td><td>631</td><td>3</td><td>823</td><td>3</td></tr><tr><td>7</td><td>3</td><td>131</td><td>2</td><td>281</td><td>3</td><td>457</td><td>13</td><td>641</td><td>3</td><td>827</td><td>2</td></tr><tr><td>11</td><td>2</td><td>137</td><td>3</td><td>283</td><td>3</td><td>461</td><td>2</td><td>643</td><td>11</td><td>829</td><td>2</td></tr><tr><td>13</td><td>2</td><td>139</td><td>2</td><td>293</td><td>2</td><td>463</td><td>3</td><td>647</td><td>5</td><td>839</td><td>11</td></tr><tr><td>17</td><td>3</td><td>149</td><td>2</td><td>307</td><td>5</td><td>467</td><td>2</td><td>653</td><td>2</td><td>853</td><td>2</td></tr><tr><td>19</td><td>2</td><td>151</td><td>6</td><td>311</td><td>17</td><td>479</td><td>13</td><td>659</td><td>2</td><td>857</td><td>3</td></tr><tr><td>23</td><td>5</td><td>157</td><td>5</td><td>313</td><td>10</td><td>487</td><td>3</td><td>661</td><td>2</td><td>859</td><td>2</td></tr><tr><td>29</td><td>2</td><td>163</td><td>2</td><td>317</td><td>2</td><td>491</td><td>2</td><td>673</td><td>5</td><td>863</td><td>5</td></tr><tr><td>31</td><td>3</td><td>167</td><td>5</td><td>331</td><td>3</td><td>499</td><td>7</td><td>677</td><td>2</td><td>877</td><td>2</td></tr><tr><td>37</td><td>2</td><td>173</td><td>2</td><td>337</td><td>10</td><td>503</td><td>5</td><td>683</td><td>5</td><td>881</td><td>3</td></tr><tr><td>41</td><td>6</td><td>179</td><td></td><td>347</td><td>2</td><td>509</td><td>2</td><td>691</td><td>3</td><td>883</td><td>2</td></tr><tr><td>43</td><td>3</td><td>181</td><td>2$</td><td>349</td><td>2</td><td>521</td><td>3</td><td>701</td><td>2</td><td>887</td><td>5</td></tr><tr><td>47</td><td>5</td><td>191</td><td>19</td><td>353</td><td>3</td><td>523</td><td>2</td><td>709</td><td>2</td><td>907</td><td>2</td></tr><tr><td>53</td><td>2</td><td>193</td><td>5</td><td>359</td><td>7</td><td>541</td><td>2</td><td>719</td><td>11</td><td>911</td><td>17</td></tr><tr><td>59</td><td></td><td>197</td><td></td><td>367</td><td>6</td><td>547</td><td>2</td><td>727</td><td>5</td><td>919</td><td>7</td></tr><tr><td>61</td><td></td><td>199</td><td>$\$</td><td>373</td><td>2</td><td>557</td><td>2</td><td>733</td><td>6</td><td>929</td><td>3</td></tr><tr><td>67</td><td>2$</td><td>211</td><td>2</td><td>379</td><td>2</td><td>563</td><td>2</td><td>739</td><td>3</td><td>937</td><td>5</td></tr><tr><td>71</td><td>7</td><td>223</td><td>3</td><td>383</td><td>5</td><td>569</td><td>3</td><td>743</td><td>5</td><td>941</td><td>2</td></tr><tr><td>73</td><td></td><td>227</td><td></td><td>389</td><td></td><td>571</td><td>3</td><td>751</td><td>3</td><td>947</td><td>2</td></tr><tr><td>79</td><td>5 3</td><td>229</td><td>2 6</td><td>397</td><td>2 5</td><td>577</td><td>5</td><td>757</td><td>2</td><td>953</td><td>3</td></tr><tr><td>83</td><td>2</td><td>233</td><td>3</td><td>401</td><td>3</td><td>587</td><td>2</td><td>761</td><td>6</td><td>967</td><td>5</td></tr><tr><td>89</td><td>3</td><td>239</td><td>7</td><td>409</td><td>21</td><td>593</td><td>3</td><td>769</td><td>11</td><td>971</td><td>6</td></tr><tr><td>97</td><td>5</td><td>241</td><td>7</td><td>419</td><td>2</td><td>599</td><td>7</td><td>773</td><td>2</td><td>977</td><td>3</td></tr><tr><td>101</td><td></td><td>251</td><td>6</td><td>421</td><td>2</td><td>601</td><td>7</td><td>787</td><td>2</td><td>983</td><td>5</td></tr><tr><td>103</td><td>2 5</td><td>257</td><td>3</td><td>431</td><td>7</td><td>607</td><td>3</td><td>797</td><td>2</td><td>997</td><td>7</td></tr><tr><td>107</td><td>2</td><td>263</td><td>5</td><td>433</td><td>5</td><td>613</td><td>2</td><td>809</td><td>3</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

# 10.10 The index calculus

If $\pmb { m }$ has a primitive root $g$ the numbers $1 , g , g ^ { 2 } , \ldots , g ^ { \varphi ( m ) - 1 }$ form a reduced residue system mod $m$ If $( a , m ) = 1$ there is a unique integer $k$ in the interval $0 \leq k \leq \varphi ( m ) - 1$ such that

$$
a \equiv g ^ { k } { \pmod { m } } .
$$

This integer is called the index of $a$ to the base $g$ (mod m), and we write

$$
k = \operatorname { i n d } _ { g } a
$$

or simply $k = \mathrm { i n d } a$ if the base $\pmb { g }$ is understood.

The following theorem shows that indices have properties analogous to those of logarithms. The proof is left as an exercise for the reader.

Theorem 10.10 Let $g$ be a primitive root mod m. ${ \cal I } f ( a , m ) = ( b , m ) = 1$ we have:

(a) $\operatorname { i n d } ( a b ) \equiv \operatorname { i }$ ad $a +$ ind $b$ (mod $\varphi ( m ) )$ (b) ind $a ^ { n } \equiv n$ ind $a$ (mod $\varphi ( m ) )$ if $n \geq 1$ (c) ind $1 = 0$ and ind $g = 1$ . (d) $\mathrm { i n d } ( - 1 ) = \varphi ( m ) / 2$ f $m > 2 .$ (e) If ${ \pmb g } ^ { \prime }$ is also a primitive root mod m then

$$
\mathrm { i n d } _ { g } a \equiv \mathrm { i n d } _ { g ^ { \prime } } a \cdot \mathrm { i n d } _ { g } g ^ { \prime } ( \mathrm { m o d } \varphi ( m ) ) .
$$

Tabie 10.2 on pp. 216-217 lists indices for all numbers $a \not \equiv 0 { \bigl ( } { \mathrm { m o d ~ } } p { \bigr ) }$ and all odd primes $p < 5 0$ The base $\pmb { g }$ is the smallest primitive root of $p$

The following examples illustrate the use of indices in solving congruences.

ExAMPLE 1 Linear congruences. Assume $\pmb { m }$ has a primitive root and let $( a , m ) = ( b , m ) = 1$ . Then the linear congruence

$$
a x \equiv b { \pmod { m } }
$$

is equivalent to the congruence

$$
\operatorname { i n d } a + \operatorname { i n d } x \equiv \operatorname { i n d } b { \bigl ( } { \bigl ( } { \bmod { \varphi } } ( m ) { \bigr ) } ,
$$

so the unique solution of (14) satisfies the congruence

$$
\operatorname { i n d } x \equiv \operatorname { i n d } b - \operatorname { i n d } a ( \operatorname { m o d } \varphi ( m ) ) .
$$

To treat a numerical example, consider the linear congruence

$$
9 x \equiv 1 3 ( \mathrm { m o d } 4 7 ) .
$$

The corresponding index relation is

$$
\mathrm { i n d } \ x \equiv \mathrm { i n d } 1 3 - \mathrm { i n d } 9 ( \mathrm { m o d } 4 6 ) .
$$

From Table 10.2 we find ind $1 3 = 1 1$ and ind $9 = 4 0$ (for $p = 4 7$ ), so

$$
x \equiv 1 1 - 4 0 \equiv - 2 9 \equiv 1 7 ( \mathrm { m o d } 4 6 ) .
$$

Again from Table 10.2 we find $x \equiv 3 8$ (mod 47).

ExAmPLE 2 Binomial congruences. A congruence of the form

$$
x ^ { n } \equiv a { \mathrm { ~ } } ( { \mathrm { m o d ~ } } m )
$$

is called a binomial congruence. If $m$ has a primitive root and if $( a , m ) = 1$ this is equivalent to the congruence

$$
n \ \mathrm { i n d } \ x \equiv \mathrm { i n d } \ a \ \ ( \mathrm { m o d } \ \varphi ( m ) ) ,
$$

which is linear in the unknown ind $\boldsymbol { x }$ . As such, it has a solution if, and only if, ind $a$ is divisible by $d = ( n , \varphi ( m ) ) .$ , in which case it has exactly $d$ solutions.

To illustrate with a numerical example, consider the binomial congruence

$$
x ^ { 8 } \equiv a { \mathrm { ~ } } ( { \mathrm { m o d ~ } } 1 7 ) .
$$

The corresponding index relation is

$$
8 \operatorname { i n d } x \equiv \operatorname { i n d } a { \pmod { 1 6 } } .
$$

In this example $d = ( 8 , 1 6 ) = 8$ . Table 10.2 shows that I and 16 are the only numbers mod 17 whose index is divisible by 8. In fact, ind $1 = 0$ and ind $1 6 =$ 8. Hence (15) has no solutions if $a \not \equiv 1$ or $a \not \equiv 1 6$ (mod 17).

For $a = 1$ congruence (16) becomes

$$
8 \ \mathrm { i n d } \ x \equiv 0 \ ( \mathrm { m o d } \ 1 6 ) ,
$$

and for $a = 1 6$ it becomes

$$
8 { \mathrm { ~ i n d ~ } } x \equiv 8 { \mathrm { ~ ( m o d ~ } } 1 6 { \mathrm { ) } } .
$$

Each of these has exactly eight solutions mod 16. The solutions of (17) are those $x$ whose index is even,

$$
x \equiv 1 , 2 , 4 , 8 , 9 , 1 3 , 1 5 , 1 6 \ ( \mathrm { m o d } \ 1 7 ) .
$$

These, of course, are the quadratic residues of 17. The solutions of (18) are those $\boldsymbol { x }$ whose index is odd, the quadratic nonresidues of 17,

$$
x \equiv 3 , 5 , 6 , 7 , 1 0 , 1 1 , 1 2 , 1 4 { \pmod { 1 7 } } .
$$

ExAMpLE 3 Exponential congruences. An exponential congruence is one of the form

$$
a ^ { \mathbf { x } } \equiv b { \mathrm { ~ ( m o d ~ } } m { \mathrm { ) } } .
$$

If $\pmb { m }$ has a primitive root and if $( a , m ) = ( b , m ) = 1$ this is equivalent to the linear congruence

$$
x \operatorname { i n d } a \equiv \operatorname { i n d } b { \pmod { \varphi ( m ) } } .
$$

Let $d = ( \operatorname { i n d } a , \varphi ( m ) )$ . Then (19) has a solution if, and only if, $d \{ { \mathrm { i n d } } b$ , in which case there are exactly $d$ solutions. In the numerical example

$$
2 5 ^ { \mathbf { x } } \equiv 1 7 { \pmod { 4 7 } }
$$

we have ind $2 5 = 2 .$ ,ind $1 7 = 1 6 .$ and $d = ( 2 , 4 6 ) = 2 .$ Therefore (19) becomes

$$
2 x \equiv 1 6 { \pmod { 4 6 } } ,
$$

with two solutions, $x \equiv 8$ and 31 (mod 46). These are also the solutions of (20) mod 47.

Table 10.2 Indices of all numbers $a \not \equiv 0$ (mod $p \llap / .$ for odd primes $p < 5 0 $ The base $g$ is the smallest primitive root of $p$ .   

<table><tr><td colspan="10"></td></tr><tr><td>a</td><td>Primes 3</td><td>5</td><td>7</td><td>11</td><td>13</td><td>17</td><td>19</td><td>23</td><td>29</td><td>31</td><td>37</td><td>41</td><td>43</td><td>47</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>2</td><td>1</td><td>1</td><td>2</td><td>1</td><td>1</td><td>14</td><td>1</td><td>2</td><td>1</td><td>24</td><td>1</td><td>26</td><td>27</td><td>18</td></tr><tr><td>3</td><td></td><td>3</td><td>1</td><td>8</td><td>4</td><td>1</td><td>13</td><td>16</td><td>5</td><td>1</td><td>26</td><td>15</td><td>1</td><td>20</td></tr><tr><td>4</td><td></td><td>2</td><td>4</td><td>2</td><td>2</td><td>12</td><td>2</td><td>4</td><td>2</td><td>18</td><td>2</td><td>12</td><td>12</td><td>36</td></tr><tr><td>5</td><td></td><td></td><td>5</td><td>4</td><td>9</td><td>5</td><td>16</td><td>1</td><td>22</td><td>20</td><td>23</td><td>22</td><td>25</td><td>1</td></tr><tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td>3</td><td>9 7</td><td>5 11</td><td>15 11</td><td>14</td><td>18</td><td>6</td><td>25</td><td>27</td><td>1</td><td>28</td><td>38</td></tr><tr><td>8</td><td></td><td></td><td></td><td>3</td><td>3</td><td>10</td><td>6 3</td><td>19</td><td>12</td><td>28</td><td>32</td><td>39</td><td>35</td><td>32</td></tr><tr><td>9</td><td></td><td></td><td></td><td>6</td><td>8</td><td>2</td><td>8</td><td>6 10</td><td>3 10</td><td>12 2</td><td>3 16</td><td>38 30</td><td>39 2</td><td>8</td></tr><tr><td>10</td><td></td><td></td><td></td><td>5</td><td>10</td><td>3</td><td>17</td><td>3</td><td>23</td><td>14</td><td>24</td><td>8</td><td>10</td><td>40 19</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td><td>7</td><td>7</td><td>12</td><td>9</td><td>25</td><td>23</td><td>30</td><td>3</td><td>30</td><td>7</td></tr><tr><td>12</td><td></td><td></td><td></td><td></td><td>6</td><td>13</td><td>15</td><td>20</td><td>7</td><td>19</td><td>28</td><td>27</td><td>13</td><td>10</td></tr><tr><td>13 14</td><td></td><td></td><td></td><td></td><td></td><td>4 9</td><td>5 7</td><td>14 21</td><td>18 13</td><td>11 22</td><td>11</td><td>31</td><td>32</td><td>11</td></tr><tr><td>15</td><td></td><td></td><td></td><td></td><td></td><td>6</td><td>11</td><td>17</td><td>27</td><td>21</td><td>33 13</td><td>25 37</td><td>20 26</td><td>4</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>21</td></tr><tr><td>16 17</td><td></td><td></td><td></td><td></td><td></td><td>8</td><td>4</td><td>8</td><td>4</td><td>6</td><td>4</td><td>24</td><td>24</td><td>26</td></tr><tr><td>18</td><td></td><td></td><td></td><td></td><td></td><td></td><td>10 9</td><td>7 12</td><td>21 11</td><td>7 26</td><td>7</td><td>33</td><td>38</td><td>16</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>15</td><td>9</td><td>4</td><td>17</td><td>16</td><td>29</td><td>12</td></tr><tr><td>19 20</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>5</td><td>24</td><td>8</td><td>35 25</td><td>9 34</td><td>19 37</td><td>45 37</td></tr></table>

<table><tr><td></td><td></td><td>13 11</td><td>17</td><td>29 17</td><td>22 31</td><td>1</td><td>36</td><td>6</td></tr><tr><td></td><td></td><td>26 20 8</td><td>27 13</td><td></td><td>15 29</td><td>13</td><td>15 16</td><td>2$</td></tr><tr><td></td><td></td><td>16</td><td>10</td><td></td><td>10</td><td>4</td><td>40 8</td><td>2</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td>19</td><td></td><td>5</td><td>12</td><td>17</td><td>17</td><td></td></tr><tr><td></td><td></td><td>15</td><td></td><td>3</td><td>6</td><td>5</td><td>3</td><td></td></tr><tr><td></td><td></td><td>14</td><td></td><td>16 9</td><td>34 21</td><td>11 7</td><td>5 41</td><td></td></tr><tr><td>1</td><td></td><td></td><td></td><td>15</td><td>14</td><td>23</td><td>11</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>9</td><td>28</td><td>34</td><td>3</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>5</td><td>10</td><td>9</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>20</td><td>18</td><td>31</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>8</td><td>19</td><td>23</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>19</td><td>21</td><td>18</td><td>33</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>18</td><td>2</td><td>14</td><td>30</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>32</td><td>7</td><td>42</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>3</td><td>4 33</td><td>17 31</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>20</td><td>22</td><td>9</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>41</td><td></td><td></td><td></td><td></td><td></td><td></td><td>6</td><td>15</td></tr><tr><td>42 43</td><td></td><td></td><td></td><td></td><td></td><td></td><td>21</td><td>24 13</td></tr><tr><td>44</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>43</td></tr><tr><td>45</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>41</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>46</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>23</td></tr></table>

# 10.11 Primitive roots and Dirichlet characters

Primitive roots and indices can be used to construct explicitly all the Dirichlet characters mod m. First we consider a prime power modulus $p ^ { \pmb { x } }$ , where $p$ is an odd prime and $\alpha \geq 1$

Let $\pmb { g }$ be a primitive root mod $p$ which is also a primitive root mod $p ^ { \beta }$ for all $\beta \gtrsim 1$ . Such a $g$ exists by Theorem 10.6. If $( n , p ) = 1$ let $b ( n ) = \operatorname { i n d } _ { g } n$ $\{ \mathbf { m o d } ~ p ^ { \alpha } \}$ , so that $b ( n )$ is the unique integer satisfying the conditions

$$
n \equiv g ^ { b ( n ) } ( \mathrm { m o d } p ^ { \alpha } ) , 0 \leq b ( n ) < \varphi ( p ^ { \alpha } ) .
$$

For $h = 0 , 1 , 2 , \ldots , \varphi ( p ^ { \alpha } ) - 1$ , define $\chi _ { h }$ by the relations

$$
\chi _ { h } ( n ) = { \left\{ \begin{array} { l l } { e ^ { 2 \pi i h b ( n ) / \varphi ( p ^ { \alpha } ) } } & { { \mathrm { i f ~ } } p \nmid n , } \\ { 0 } & { { \mathrm { i f ~ } } p \mid n . } \end{array} \right. }
$$

Using the properties of indices it is easy to verify that $\chi _ { h }$ is completely multiplicative and periodic with period $p ^ { \pmb { \alpha } }$ $\chi _ { h }$ is a Dirichlet character mod $p ^ { \alpha }$ ,with ${ { \chi } _ { 0 } }$ being the principal character. This verification is left as an exercise for the reader.

Since

$$
\chi _ { h } ( g ) = e ^ { 2 \pi i h / \varphi ( p ^ { \alpha } ) }
$$

the characters $\chi _ { 0 } , \ \chi _ { 1 } , . . . , \chi _ { \varphi ( p ^ { \alpha } ) - 1 }$ are distinct because they take distinct values at $g$ . Therefore, since there are $\varphi ( p ^ { \alpha } )$ such functions they represent all the Dirichlet characters mod $p ^ { \alpha }$ . The same construction works for the modulus $2 ^ { \mathfrak { a } }$ if $\alpha = 1$ or $\alpha = 2 .$ using $g = 3$ as the primitive root.

Now if $m = { p _ { 1 } } ^ { \alpha _ { 1 } } \cdot \cdot \cdot { p _ { r } } ^ { \alpha _ { r } } ,$ , where the $p _ { i }$ are distinct odd primes, and if $\chi _ { i }$ is a Dirichlet character mod ${ p _ { i } } ^ { \alpha _ { i } }$ , then the product ${ \chi = \chi _ { 1 } \cdots \chi _ { r } }$ is a Dirichlet character mod ${ \pmb m } .$ Since $\varphi ( m ) = \varphi ( { p _ { 1 } } ^ { \alpha _ { 1 } } ) \cdot \cdot \cdot \varphi ( { p _ { r } } ^ { \alpha _ { r } } )$ we get $\varphi ( m )$ such characters as each $\chi _ { i }$ runs through the $\varphi ( p _ { i } ^ { \alpha _ { i } } )$ characters mod ${ p _ { i } } ^ { \alpha _ { i } }$ . Thus we have explicitly constructed all characters mod m for every odd modulus m.

If $\alpha \geq 3$ the modulus $2 ^ { \alpha }$ has no primitive root and a slightly different construction is needed to obtain the characters mod $2 ^ { \alpha }$ . The following theorem shows that 5 is a good substitute for a primitive root mod $2 ^ { \alpha }$

Theorem 10.11 Assume $\alpha \geq 3$ . Then for every odd integer n there is a uniquely determined integer $b ( n )$ such that

$$
n \equiv ( - 1 ) ^ { ( n - 1 ) / 2 } \xi ^ { b ( n ) } \ ( \mathrm { m o d } \ 2 ^ { a } ) , w i t h \ 1 \leq b ( n ) \leq \varphi ( 2 ^ { a } ) / 2 .
$$

PRoOF. Let $f = \exp _ { 2 ^ { \alpha } } ( 5 )$ so that $5 ^ { f } \equiv 1 { \pmod { 2 ^ { \alpha } } }$ . We will show that $f =$ $\varphi ( 2 ^ { \alpha } ) / 2$ Now $f | \varphi ( 2 ^ { \alpha } ) = 2 ^ { \alpha - 1 }$ , $\mathbf { s o } f = 2 ^ { \beta }$ for some $\beta \leq \alpha - 1$ . From Theorem 10.8 we know that

$$
5 ^ { \varphi ( 2 ^ { \alpha } ) / 2 } \equiv 1 { \pmod { 2 ^ { \alpha } } } ,
$$

hence $f \leq \varphi ( 2 ^ { \alpha } ) / 2 = 2 ^ { \alpha - 2 }$ . Therefore $\beta \leq \alpha - 2$ We will show that $\beta \simeq$ $\alpha - 2$

Raise both members of the equation $5 = 1 + 2 ^ { 2 }$ to the $f = 2 ^ { \beta }$ power to obtain

$$
5 ^ { f } = ( 1 + 2 ^ { 2 } ) ^ { 2 ^ { \beta } } = 1 + 2 ^ { \beta + 2 } + r 2 ^ { \beta + 3 } = 1 + 2 ^ { \beta + 2 } ( 1 + 2 r )
$$

where $r$ is an integer. Hence $5 ^ { f } - 1 = 2 ^ { \beta + 2 } t$ where $t$ is odd. But $2 ^ { \alpha } | ( 5 ^ { f } - 1 )$ so $\alpha \leq \beta + 2$ or $\beta \geq \alpha - 2$ Hence $\beta = \alpha - 2$ and $f = 2 ^ { x - 2 } = \varphi ( 2 ^ { x } ) / 2$ Therefore the numbers

$$
5 , 5 ^ { 2 } , \ldots , 5 ^ { f }
$$

are incongruent mod $2 ^ { \alpha }$ . Also each is $\cong 1$ (mod 4) since $5 \lessapprox 1$ (mod 4). Similarly, the numbers

$$
- 5 , - 5 ^ { 2 } , \ldots , - 5 ^ { f }
$$

are incongruent mod $2 ^ { \mathfrak { a } }$ and each i $\mathfrak { s } \equiv 3 \ ( \mathrm { m o d } \ 4 )$ since $- 5 \equiv 3$ (mod 4). There are $2 f = \varphi ( 2 ^ { \alpha } )$ numbers in (22) and (23) together. Moreover, we cannot have $5 ^ { a } \equiv - 5 ^ { b }$ (mod $2 ^ { \alpha }$ because this would imply $1 \equiv - 1$ (mod 4). Hence the numbers in (22) together with those in (23) represent $\varphi ( 2 ^ { \alpha } )$ incongruent odd numbers mod $2 ^ { \alpha }$ Each odd $n \equiv 1$ (mod 4) is congruent mod $2 ^ { \alpha }$ to one of the numbers in (22), and each odd $n \equiv 3$ (mod 4) is congruent to one in (23). This proves the theorem. □

With the help of Theorem 10.11 we can construct all the characters mod $2 ^ { \mathfrak { a } }$ if $\alpha \geq 3$ Let

$$
f ( n ) = { \left\{ \begin{array} { l l } { ( - 1 ) ^ { ( n - 1 ) / 2 } } & { { \mathrm { ~ i f ~ } } n { \mathrm { ~ i s ~ o d d , } } } \\ { 0 } & { { \mathrm { ~ i f ~ } } n { \mathrm { ~ i s ~ e v e n , } } } \end{array} \right. }
$$

and let

$$
g ( n ) = { \left\{ \begin{array} { l l } { e ^ { 2 \pi i b ( n ) / 2 ^ { \alpha - 2 } } } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ o d d , } } } \\ { 0 } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ e v e n , } } } \end{array} \right. }
$$

where $b ( n )$ is the integer given by Theorem 10.11. Then it is easy to verify that each of $f$ and $g$ is a character mod $2 ^ { \alpha }$ . So is each product

$$
\chi _ { a , c } ( n ) = f ( n ) ^ { a } g ( n ) ^ { c }
$$

where $a = 1 , 2$ and $c = 1 , 2 , \ldots , \varphi ( 2 ^ { \alpha } ) / 2$ . Moreover these $\varphi ( 2 ^ { \mathfrak { a } } )$ characters are distinct so they represent all the characters mod $2 ^ { \alpha }$

Now if $m = 2 ^ { \alpha } Q$ where $\boldsymbol { \mathrm { ~ \sf ~ Q ~ } }$ is odd, we form the products ${ \chi } = \chi _ { 1 } \chi _ { 2 }$ where $\chi _ { 1 }$ runs through the $\varphi ( 2 ^ { \alpha } )$ characters mod $2 ^ { \alpha }$ and $\mathbb { \chi } _ { 2 }$ runs through the $\varphi ( Q )$ characters mod $\varrho$ to obtain all the characters mod $\pmb { m }$

# 10.12 Real-valued Dirichlet characters mod $p ^ { \alpha }$

If $x$ is a real-valued Dirichlet character mod m and $( n , m ) = 1$ , the number $\chi ( n )$ is both a root of unity and real, so $\chi ( n ) = \pm 1 .$ . From the construction in the foregoing section we can determine all real Dirichlet characters mod $p ^ { \alpha }$

Theorem 10.12 For an odd prime $p$ and $\alpha \geq 1$ , consider the $\varphi ( p ^ { \alpha } )$ Dirichlet characters $\chi _ { h }$ mod $p ^ { \alpha }$ given $b y$ (21). Then ${ \mathbb X } _ { h }$ is real $i f ,$ and only if, $h = 0$ or $h = \varphi ( p ^ { \alpha } ) / 2$ . Hence there are exactly two real characters mod $p ^ { \pmb { \alpha } }$

PROOF. We have $e ^ { \pi i z } = \pm 1$ if, and only if, $z$ is an integer, If $p \gamma n$ we have

$$
\chi _ { h } ( n ) = e ^ { 2 \pi i h b ( n ) / \varphi ( p ^ { \alpha } ) }
$$

so $\chi _ { h } ( n ) = \pm 1$ if, and only if, $\varphi ( p ^ { \alpha } ) | 2 h b ( n )$ . This condition is satisfied for all $\pmb { n }$ if $h = 0$ or if $h = \varphi ( p ^ { \alpha } ) / 2$ . Conversely, if $\varphi ( p ^ { a } ) | 2 h b ( n )$ for all $\pmb { n }$ then when $b ( n ) = 1$ we have $\varphi ( p ^ { \alpha } ) | 2 h$ or $\varphi ( p ^ { \alpha } ) / 2 | h$ .Hence $h = 0$ or $h = \varphi ( p ^ { \alpha } ) / 2$ since these are the only multiples of $\varphi ( p ^ { \alpha } ) / 2$ less than $\varphi ( p ^ { \alpha } )$ □

Note. The character corresponding to $h = 0$ is the principal character. When $\alpha = 1$ the quadratic character $\chi ( n ) = ( n | p )$ is the only other real character mod $p$

For the moduli $m = 1$ , 2 and 4, all the Dirichlet characters are real. The next theorem describes the real characters mod $2 ^ { \alpha }$ when $\alpha \geq 3$

Theorem 10.13 If $\alpha \geq 3$ , consider the $\varphi ( 2 ^ { \alpha } )$ Dirichlet characters $\chi _ { a , c }$ mod $2 ^ { \alpha }$ given $b y$ (25). Then $\chi _ { a , c }$ is real $i f ,$ and only i, $c = \varphi ( 2 ^ { \alpha } ) / 2$ or $c = \varphi ( 2 ^ { \alpha } ) / 4$ Hence there are exactly four real characters mod $2 ^ { \alpha } i f \alpha \geq 3$

PROOF. If $\alpha \geq 3$ and $\pmb { n }$ is odd we have, by (25),

$$
\chi _ { a , c } ( n ) = f ( n ) ^ { a } g ( n ) ^ { c }
$$

where $f ( n ) = \pm 1$ and

$$
g ( n ) ^ { c } = e ^ { 2 \pi i c b ( n ) / 2 ^ { c - 2 } } ,
$$

with $1 \leq c \leq 2 ^ { \alpha - 2 }$ . This is $\pm 1$ if, and only if, $2 ^ { \alpha - 2 } | 2 c b ( n ) ;$ or $2 ^ { a - 3 } | c b ( n ) .$ , Since $\varphi ( 2 ^ { \alpha } ) = 2 ^ { \alpha - 1 }$ this condition is satisfed if $c = \varphi ( 2 ^ { \alpha } ) / 2 = 2 ^ { \alpha - 2 }$ or if $c = \varphi ( 2 ^ { x } ) / 4 = 2 ^ { x - 3 }$ . Conversely, if $2 ^ { \alpha - 3 } | c b ( n )$ for all $\pmb { n }$ then $b ( n ) = 1$ requires $2 ^ { \alpha - 3 } | c \ s o \ c = 2 ^ { \alpha - 3 }$ or $2 ^ { \alpha - 2 }$ since $1 \leq c \leq 2 ^ { \alpha - 2 }$ □

# 10.13 Primitive Dirichlet characters mod $p ^ { \alpha }$

In Theorem 8.14 we proved that every nonprincipal character $\chi$ mod $p$ is primitive if $p$ is prime. Now we determine all the primitive Dirichlet characters mod $p ^ { \pmb { \alpha } }$

We recall (Section 8.7) that $\chi$ is primitive mod $k$ if, and only if, $\chi$ has no induced modulus $d < k .$ An induced modulus is a divisor $d$ of $k$ such that

$$
\chi ( n ) = 1 \quad { \mathrm { w h e n e v e r } } ( n , k ) = 1 { \mathrm { ~ a n d ~ } } n \equiv 1 { \mathrm { ~ ( m o d ~ } } d ) .
$$

If $k = p ^ { \alpha }$ and $\chi$ is imprimitive mod $p ^ { \alpha }$ then one of the divisors 1 $, p , \ldots , p ^ { \alpha - 1 }$ is an induced modulus, and hence $p ^ { \alpha - 1 }$ is an induced modulus. Therefore, $\chi$ is primitive mod $p ^ { \alpha }$ if, and only if, $p ^ { \alpha - 1 }$ is not an induced modulus for $\chi$

Theorem 10.14 For an odd prime $p$ and $\alpha \geq 2$ , consider the $\varphi ( p ^ { \alpha } )$ Dirichlet characters $\chi _ { h }$ mod $p ^ { \alpha }$ given $b y$ (21). Then $\chi _ { h }$ is primitive mod $p ^ { a } \ i f ,$ and only if, $p \nmid h$ .

PROOF. We will show that $p ^ { \alpha - 1 }$ is an induced modulus if, and only if, $p | h .$ If $p \gamma n$ we have, by (21),

$$
\chi _ { h } ( n ) = e ^ { 2 \pi i h b ( n ) / \varphi ( p ^ { \alpha } ) } ,
$$

where $n \equiv g ^ { { \dot { b } } ( n ) }$ (mod $p ^ { \alpha } )$ and $g$ is a primitive root mod $p ^ { \beta }$ for all $\beta \geq 1$ Therefore

$$
g ^ { \dot { b } ( n ) } \equiv n { \bf \nabla } ( { \bf m o d } p ^ { \alpha - 1 } ) .
$$

Now if $n \equiv 1$ (mod $p ^ { \alpha - 1 }$ ) then $g ^ { b ( n ) } \equiv 1$ (mod $p ^ { \alpha - 1 }$ ) and, since $g$ is a primitive root of $p ^ { \pmb { x } - \mathbf { 1 } }$ , we have $\varphi ( p ^ { \alpha - 1 } ) | b ( n )$ ,or

$$
b ( n ) = t \varphi ( p ^ { \alpha - 1 } ) = t \varphi ( p ^ { \alpha } ) / p
$$

for some integer $t$ Therefore

$$
\chi _ { h } ( n ) = e ^ { 2 \pi i h t / p } .
$$

If $p | h$ this equals 1 and hence $\chi _ { h }$ is imprimitive mod $p ^ { \alpha }$ If $p \nmid h$ take ${ \pmb n } =$ $1 + p ^ { \alpha - 1 }$ . Then $n \equiv 1$ (mod $p ^ { \alpha - 1 }$ ) but $n \not \equiv 1 { \pmod { p ^ { \alpha } } }$ sO $0 < b ( n ) < \varphi ( p ^ { \alpha } ) .$ Therefore $p \nmid t , p \nmid h t$ and $\chi _ { h } ( n ) \neq 1$ . This shows that $\chi _ { h }$ is primitive if $p \gamma h$

When $m = 1$ or 2, there is only one character $\chi$ mod $m$ , the principal character. If $m = 4$ there are two characters mod 4, the principal character and the primitive character $f$ given by (24). The next theorem describes all the primitive characters mod $2 ^ { \alpha }$ for $\alpha \geq 3$ . The proof is similar to that of Theorem 10.14 and is left to the reader.

Theorem 10.15 If $\alpha \geq 3$ , consider the $\varphi ( 2 ^ { x } )$ Dirichlet characters $\chi _ { a , c }$ mod $2 ^ { \mathfrak { a } }$ given $b y$ (25). Then $\chi _ { a , c }$ is primitive mod $2 ^ { \alpha }$ if, and only if, c is odd.

The foregoing results describe all primitive characters mod $p ^ { \pmb { x } }$ for all prime powers. To determine the primitive characters for a composite modulus $k$ we write

$$
k = { p _ { 1 } } ^ { \alpha _ { 1 } } \cdots { p _ { r } } ^ { \alpha _ { r } } .
$$

Then every character $\chi$ mod $k$ can be factored in the form

$$
\chi = \chi _ { 1 } \cdots \chi _ { r }
$$

where each $\chi _ { i }$ is a character mod $ { p _ { i } } ^ { \alpha _ { i } }$ . Moreover, by Exercise 8.12, $\chi$ is primitive mod $k$ if, and only if, each $\mathbb { \chi } _ { i }$ is primitive mod $p _ { i } ^ { \alpha _ { i } }$ . Therefore we have a complete description of all primitive characters mod $k$

# Exercises for Chapter 10

1. Prove that $m$ is prime if and only if $\exp _ { m } ( a ) = m - 1$ for some $\pmb { a }$

2.If $( a , m ) = ( b , m ) = 1$ and if $\begin{array} { r } { ( \exp _ { m } ( a ) , \exp _ { m } ( b ) ) = 1 } \end{array}$ , prove that

$$
\begin{array} { r } { \exp _ { m } ( a b ) = \exp _ { m } ( a ) \mathrm { e x p } _ { m } ( b ) . } \end{array}
$$

3. Let $g$ be a primitive root of an odd prime $p$ . Prove that $- \boldsymbol { \mathfrak { g } }$ is also a primitive root of $p$ if $p \equiv 1$ (mod 4), but that $\exp _ { p } ( - g ) = ( p - 1 ) / 2$ if $p \equiv 3$ (mod 4).

4. (a) Prove that 3 is a primitive root mod $p$ if $p$ is a prime of the form $2 ^ { n } + 1 , n > 1$ (b) Prove that 2 is a primitive root mod $p$ if $p$ is a prime of the form $4 q + 1$ , where $q$ is an odd prime.

5. Let $m > 2$ be an integer having a primitive root, and let $( a , m ) = 1$ . We write aRm if there exists an $x$ such that $a \equiv x ^ { 2 }$ (mod $m$ ). Prove that:

(a) aRm if, and only if, $a ^ { \varphi ( m ) / 2 } \equiv 1 { \pmod { m } } .$   
(b) If aRm the congruence $x ^ { 2 } \equiv a$ (mod $m$ ) has exactly two solutions.   
(c) There are exactly $\varphi ( m ) / 2$ integers $\pmb { a }$ , incongruent mod $m$ , such that $( a , m ) = 1$ and aRm.

6. Assume $m > 2 .$ ,d $( a , m ) = 1$ , aRm. Prove that the congruence $x ^ { 2 } \equiv a$ (mod m) has exactly two solutions if, and only if, $m$ has a primitive root.

7. Let $\begin{array} { r } { S _ { n } ( p ) = \sum _ { k = 1 } ^ { p - 1 } k ^ { n } , } \end{array}$ where $p$ is an odd prime and $n > 1$ . Prove that

$$
S _ { n } ( p ) \equiv { \left\{ \begin{array} { l l } { 0 { \pmod { p } } } & { { \mathrm { i f } } n \not \equiv 0 { \pmod { p - 1 } } , } \\ { - 1 { \pmod { p } } } & { { \mathrm { i f } } n \equiv 0 { \pmod { p - 1 } } . } \end{array} \right. }
$$

• 8. Prove that the sum of the primitive roots mod $p$ is congruent to $\mu ( p \sim 1 )$ mod $p$

9.If $p$ is an odd prime $> 3$ prove that the product of the primitive roots mod $p$ is congruent to 1 mod $p$

10. Let $p$ be an odd prime of the form $2 ^ { 2 ^ { k } } + 1$ . Prove that the set of primitive roots mod $p$ is equal to the set of quadratic nonresidues mod $p _ { \cdot }$ Use this result to prove that 7 is a primitive root of every such prime.

11. Assume $d \{ \varphi \{ m \}$ If $d = \exp _ { m } ( a )$ we say that $a$ is a primitive root of the congruence

$$
x ^ { d } \equiv 1 { \pmod { m } } .
$$

Prove that if the congruence

$$
x ^ { \varphi ( m ) } \equiv 1 { \pmod { m } }
$$

has a primitive root then it has $\varphi ( \varphi ( m ) )$ primitive roots, incongruent mod $m$

12. Prove the properties of indices described in Theorem 10.10.

13. Let $p$ be an odd prime. If $( h , p ) = 1$ let

$$
S ( h ) = \{ h ^ { n } \colon 1 \leq n \leq \varphi ( p - 1 ) , ( n , p - 1 ) = 1 \} .
$$

If $h$ is a primitive root of $p$ the numbers in the set ${ \pmb S } ( h )$ are distinct mod $p$ (they are, in fact, the primitive roots of $p$ ). Prove that there is an integer $h ,$ not a primitive root of $p$ , such that the numbers in $S ( h )$ are distinct mod $p$ if, and only if, $p \equiv 3$ (mod 4).

14.If $m > 1$ let $p _ { 1 } , \ldots , p _ { k }$ be the distinct prime divisors of $\varphi ( m )$ If $( g , m ) = 1$ prove that $\pmb { g }$ is a primitive root of m if, and only if, ${ \pmb g }$ does not satisfy any of the congruences $g ^ { \varphi ( m ) / p _ { i } } \equiv 1 { \pmod { m } }$ for $i = 1 , 2 , \ldots , k$

15. The prime $p = 7 1$ has 7 as a primitive root. Find all primitive roots of 71 and also find a primitive root for $p ^ { 2 }$ and for $2 p ^ { 2 }$ .

16. Solve each of the following congruences:

(a) $8 x \equiv 7$ (mod 43).   
(b) $x ^ { 8 } \equiv 1 7$ (mod 43).   
(c) $8 ^ { x } \equiv 3$ (mod 43).

17. Let $q$ be an odd prime and suppose that $p = 4 q + 1$ is also prime.

(a) Prove that the congruence $x ^ { 2 } \equiv - 1$ (mod p) has exactly two solutions, each of which is quadratic nonresidue of $p$   
(b) Prove that every quadratic nonresidue of $p$ is a primitive root of $p$ with the exception of the two nonresidues in (a).   
(c) Find all the primitive roots of 29.

18. (Extension of Exercise 17.) Let $q$ be an odd prime and suppose that $p = 2 ^ { n } q + 1$ is prime. Prove that every quadratic nonresidue $^ { a }$ of $p$ is a primitive root of $p$ if $a ^ { 2 ^ { n } } \not \equiv 1 { \pmod { p } }$

19. Prove that there are only two real primitive characters mod 8 and make a table showing their values.

20. Let $\chi$ be a real primitive character mod $m$ If $m$ is not a power of 2 prove that m has the form

$$
m = 2 ^ { \alpha } p _ { 1 } \cdots p _ { r }
$$

where the ${ p _ { i } }$ are distinct odd primes and $\alpha = 0 , 2$ or 3. If $\pmb { \alpha = 0 }$ show that

$$
\chi ( - 1 ) = \prod _ { p | m } ( - 1 ) ^ { ( p - 1 ) / 2 }
$$

and find a corresponding form ula for $\chi ( - 1 )$ when $\pmb { \alpha } = 2$ -

# 11 Dirichlet Series and Euler Products

# 11.1 Introduction

In 1737 Euler proved Euclid's theorem on the existence of infinitely many primes by showing that the series $\sum p ^ { - 1 }$ , extended over all primes, diverges. He deduced this from the fact that the zeta function $\zeta ( s ) ,$ given by

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } }
$$

for real $s > 1$ , tends to $\infty$ as $s \to 1$ . In 1837 Dirichlet proved his celebrated theorem on primes in arithmetical progressions by studying the series

$$
L ( s , \chi ) = \sum _ { n = 1 } ^ { \infty } \frac { \chi ( n ) } { n ^ { s } }
$$

where $\chi$ is a Dirichlet character and $s > 1$

The series in (1) and (2) are examples of series of the form

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } }
$$

where $f ( n )$ is an arithmetical function. These are called Pirichlet series with coefficients $f ( n )$ . They constitute one of the most useful tools in analytic number theory.

This chapter studies general properties of Dirichlet series. The next chapter makes a more detailed study of the Riemann zeta function $\zeta ( s )$ and the Dirichlet $L$ -functions $L ( s , \chi )$

Notation Following Riemann, we let s be a complex variable and write

$$
s = \sigma + i t ,
$$

where $\pmb { \sigma }$ and $t$ are real. Then $n ^ { s } = e ^ { s \log n } = e ^ { ( \sigma + i t ) \log n } = n ^ { \sigma } e ^ { i t \log n }$ . This shows that $| n ^ { s } | = n ^ { \pmb { \sigma } }$ since $| e ^ { i \pmb { \theta } } | = 1$ for real $\theta .$

The set of points $s = \sigma + i t$ such that $\sigma > a$ is called a half-plane. We will show that for each Dirichlet series there is a half-plane $\sigma > \sigma _ { c }$ in which the series converges, and another half-plane $\sigma > \sigma _ { a }$ in which it converges absolutely. We wil also show that in the half-plane of convergence the series represents an analytic function of the complex variable s.

# 11.2 The half-plane of absolute convergence of a Dirichlet series

First we note that if $\sigma \ge a$ we have $| n ^ { s } | = n ^ { \sigma } \geq n ^ { a }$ hence

$$
\left| { \frac { f ( n ) } { n ^ { s } } } \right| \leq { \frac { | f ( n ) | } { n ^ { a } } } .
$$

Therefore, if a Dirichlet series $\sum f ( n ) n ^ { - s }$ converges absolutely for $s = a + i b $ , then by the comparison test it also converges absolutely for all $\pmb { S }$ with $\sigma \ge a$ This observation implies the following theorem.

Theorem 11.1 Suppose the series $\sum | f ( n ) n ^ { - s } |$ does not converge for all s or diverge for all s. Then there exists a real number $\pmb { \sigma _ { a } }$ , called the abscissa of absolute convergence, such that the series $\sum f ( n ) n ^ { - s }$ converges absolutely $i f \sigma > \sigma _ { a }$ but does not converge absolutely i $\hat { \ b { \sigma } } < \pmb { \sigma } _ { \pmb { a } }$ .

PRoOF. Let $D$ be the set of all real $\pmb { \sigma }$ such that $\sum | f ( n ) n ^ { - s } |$ diverges. $D$ is not empty because the series does not converge for all $\pmb { S } ,$ and $D$ is bounded above because the series does not diverge for all $\pmb { S } .$ Therefore $D$ has a least upper bound which we call $\pmb { \sigma _ { a } }$ . If $\sigma < \sigma _ { a }$ then $\pmb { \sigma } \in D$ , otherwise $\pmb { \sigma }$ would be an upper bound for $D$ smaller than the least upper bound. If $\sigma > \sigma _ { a }$ then $\sigma \notin D$ since $\sigma _ { a }$ is an upper bound for $D$ . This proves the theorem. □

Note. If $\sum | f ( n ) n ^ { - s } |$ converges everywhere we define $\sigma _ { a } = - \infty$ . If the series $\sum | f ( { \overline { { n } } } ) n ^ { - s } |$ converges nowhere we define $\sigma _ { a } = + \infty$

ExaMPLE 1 Riemann zeta function. The Dirichlet series $\sum _ { n = 1 } ^ { \infty } n ^ { - s }$ converges absolutely for $\sigma > 1$ . When $s = 1$ the series diverges, so $\sigma _ { a } = 1$ . The sum of this series is denoted by $\zeta ( s )$ and is called the Riemann zeta function.

ExAMPLE 2 If $f$ is bounded, say $| f ( n ) | \leq M$ for all $n \geq 1 .$ then $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > 1 ,$ ${ \pmb \sigma _ { a } } \le 1$ . In particular if $\chi$ is a Dirichlet character the $L$ -series $L ( s , \chi ) = \sum \chi ( n ) n ^ { - s }$ converges absolutely for $\sigma > 1$

ExAMPLE 3 The series $\sum n ^ { n } n ^ { - s }$ diverges for every s so $\sigma _ { a } = + \infty$

ExAMPLE 4 The series $\sum n ^ { - n } n ^ { - s }$ converges absolutely for every . $\mathfrak { s o } \sigma _ { a } = - \infty$

# 11.3 The function defined by a Dirichlet series

Assume that $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a }$ and let $F ( s )$ denote the sum function

$$
F ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) } { n ^ { s } } \quad \mathrm { f o r } \sigma > \sigma _ { a } .
$$

This section derives some properties of $\bar { F } ( s )$ . First we prove the following lemma.

Lemma 1 If $N \geq 1$ and $\sigma \geq c > \sigma _ { a }$ we have

$$
\left| \sum _ { n = N } ^ { \infty } f ( n ) n ^ { - s } \right| \leq N ^ { - ( \sigma - c ) } \sum _ { n = N } ^ { \infty } | f ( n ) | n ^ { - c } .
$$

PROoF. We have

$$
\begin{array} { l } { \displaystyle \left. \ \sum _ { n = N } ^ { \infty } f ( n ) n ^ { - s } \right. \leq \displaystyle \sum _ { n = N } ^ { \infty } \lvert f ( n ) \rvert n ^ { - \sigma } = \displaystyle \sum _ { n = N } ^ { \infty } \lvert f ( n ) \rvert n ^ { - c } n ^ { - ( \sigma - c ) } } \\ { \leq N ^ { - ( \sigma - c ) } \displaystyle \sum _ { n = N } ^ { \infty } \lvert f ( n ) \rvert n ^ { - c } . } \end{array}
$$

The next theorem describes the behavior of $\boldsymbol { F } ( s )$ as $\sigma \to + \infty$

Theorem 11.2 If ${ \cal F } ( s )$ is given by (4), then

$$
\operatorname* { l i m } _ { \sigma \to { } + \infty } F ( \sigma + i t ) = f ( 1 )
$$

uniformly for $- \infty < t < + \infty$

PROOF. Since $\begin{array} { r } { F ( s ) = f ( 1 ) + \sum _ { n = 2 } ^ { \infty } f ( n ) n ^ { - s } } \end{array}$ we need only prove that the second term tends to 0 as $\sigma  + \infty$ .Choose $c > \sigma _ { a }$ .Then for $\pmb { \sigma } \geq c$ the lemma implies

$$
\left| \sum _ { n = 2 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } \right| \leq 2 ^ { - ( \sigma - c ) } \sum _ { n = 2 } ^ { \infty } | f ( n ) | n ^ { - c } = { \frac { A } { 2 ^ { \sigma } } }
$$

where $\pmb { A }$ is independent of $\pmb { \sigma }$ and $t .$ Since $A / 2 ^ { \sigma } \to 0 { \mathrm { ~ a s ~ } } \sigma \to + \infty$ this proves the theorem. □

EXAMPLES $\zeta ( \sigma + i t ) \to 1$ and $L ( \sigma + i t , \chi )  1$ as $\sigma \to + \infty$

We prove next that all the coeficients are uniquely determined by the sum function.

Theorem 11.3 Uniqueness theorem. Given two Dirichlet series

$$
F ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) } { n ^ { s } } \qquad a n d G ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { g ( n ) } { n ^ { s } } ,
$$

both absolutely convergent for $\sigma > \sigma _ { a } . { \cal I } f F ( s ) = G ( s ) _ { . }$ for each s in an infinite sequence $\left\{ s _ { k } \right\}$ such that $\sigma _ { k } \to + \infty$ as $k \to \infty$ ,then $f ( n ) = g ( n )$ for every n.

PRoOF. Let $h ( n ) = f ( n ) - g ( n )$ and let $H ( s ) = F ( s ) - G ( s )$ Then $H ( s _ { k } ) = 0$ for each $k$ . To prove that $h ( n ) = 0$ for all $\pmb { n }$ we assume that $h ( n ) \neq 0$ for some $\pmb { n }$ and obtain a contradiction.

Let $N$ be the smallest integer for which $h ( n ) \neq 0$ Then

$$
H ( s ) = \sum _ { n = N } ^ { \infty } { \frac { h ( n ) } { n ^ { s } } } = { \frac { h ( N ) } { N ^ { s } } } + \sum _ { n = N + 1 } ^ { \infty } { \frac { h ( n ) } { n ^ { s } } } .
$$

Hence

$$
h ( N ) = N ^ { s } H ( s ) - N ^ { s } \sum _ { n = N + 1 } ^ { \infty } \frac { h ( n ) } { n ^ { s } } .
$$

Putting $s = s _ { k }$ we have $H ( s _ { k } ) = 0$ hence

$$
h ( N ) = { } - N ^ { s _ { k } } \sum _ { n = N + 1 } ^ { \infty } h ( n ) n ^ { - s _ { k } } .
$$

Choose $k$ so that $\sigma _ { k } > c$ where $c > \sigma _ { a }$ . Then Lemma 1 implies

$$
\vert h ( N ) \vert \leq N ^ { \sigma _ { k } } ( N + 1 ) ^ { - ( \sigma _ { k } - c ) } \sum _ { n = N + 1 } ^ { \infty } \vert h ( n ) \vert n ^ { - c } = \left( { \frac { N } { N + 1 } } \right) ^ { \sigma _ { k } } A
$$

where $\pmb { A }$ is independent of $k$ . Letting $k \to \infty$ we find $( N / ( N + 1 ) ) ^ { \sigma _ { \star } } \to 0$ sO $h ( N ) = 0 .$ , a contradiction. □

The uniqueness theorem implies the existence of a half-plane in which a Dirichlet series does not vanish (unless, of course, the series vanishes identically).

Theorem 11.4 Let $\begin{array} { r } { F ( s ) = \displaystyle \sum f ( n ) n ^ { - s } } \end{array}$ and assume that $F ( s ) \neq 0$ for some s with $\sigma > \sigma _ { a }$ . Then there is a half-plane $\sigma > c \ge \sigma _ { a }$ in which $F ( s )$ is never zero.

ProoF. Assume no such half-plane exists. Then for every $k = 1 , 2 , \dots$ there is a point $s _ { k }$ with $\sigma _ { k } > k$ such that $F ( s _ { k } ) = 0$ Since $\sigma _ { k } \to + \infty$ as $k \to \infty$ the uniqueness theorem shows that. $f ( n ) = 0$ for all $\pmb { n } .$ , contradicting the hypothesis that $F ( s ) \neq 0$ for some s. □

# 11.4 Multiplication of Dirichlet series

The next theorem relates products of Dirichlet series with the Dirichlet convolution of their coefficients.

Theorem 11.5 Given two functions $F ( s )$ and $G ( s )$ represented by Dirichlet series,

$$
F ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) } { n ^ { s } } f o r \sigma > a ,
$$

and

$$
G ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { g ( n ) } { n ^ { s } } } f o r \sigma > b .
$$

Then in the half-plane where both series converge absolutely we have

$$
F ( s ) G ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { h ( n ) } { n ^ { s } } ,
$$

where $h = f * g ,$ , the Dirichlet convolution of f and $\pmb { g }$ :

$$
h ( n ) = \sum _ { d \mid n } f ( d ) g { \binom { n } { \tilde { d } } } .
$$

Conversely, $i f F ( s ) G ( s ) = \sum \alpha ( n ) n ^ { - s } ,$ for all in a sequence $\{ s _ { k } \}$ with $\sigma _ { k } \to + \infty$ cd $a s k \to \infty$ then $\alpha = f * g$

ProoF. For any s for which both series converge absolutely we have

$$
F ( s ) G ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) n ^ { - s } \sum _ { m = 1 } ^ { \infty } g ( m ) m ^ { - s } = \sum _ { n = 1 } ^ { \infty } \sum _ { m = 1 } ^ { \infty } f ( n ) g ( m ) ( m n ) ^ { - s } .
$$

Because of absolute convergence we can multiply these series together and rearrange the terms in any way we please without altering the sum. Collect together those terms for which mn is constant, say $m n = k$ . The possible values of $k$ are 1, 2, ..., hence

$$
F ( s ) G ( s ) = \sum _ { k = 1 } ^ { \infty } \biggl ( \sum _ { m n = k } f ( n ) g ( m ) \biggr ) k ^ { - s } = \sum _ { k = 1 } ^ { \infty } h ( k ) k ^ { - s }
$$

where $\begin{array} { r } { h ( k ) = \sum _ { m n = k } f ( n ) g ( m ) = ( f * g ) ( k ) . } \end{array}$ This proves the first assertion, and the second follows from the uniqueness theorem. □

ExAMPLE 1 Both series $\sum n ^ { - s }$ and $\sum \mu ( n ) n ^ { - s }$ converge absolutely for $\sigma > 1$ Taking $f ( n ) = 1$ and $g ( n ) = \mu ( n )$ in (5) we find $h ( n ) = [ 1 / n ]$ so

$$
\zeta ( s ) \sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { s } } } = 1 \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

In particular, this shows that $\zeta ( s ) \neq 0$ for $\sigma > 1$ and that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { s } } } = { \frac { 1 } { \zeta ( s ) } } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

ExAMPLE 2 More generally, assume $f ( 1 ) \neq 0$ and let $g = f ^ { - 1 }$ , the Dirichlet inverse of $f .$ Then in any half-plane where both series $\begin{array} { r } { F ( s ) = \displaystyle \sum f ( n ) n ^ { - s } } \end{array}$ and $G ( s ) = \sum \dot { g } ( n ) n ^ { - s }$ converge absolutely we have $F ( s ) \neq 0$ and $G ( s ) = 1 / F ( s )$

ExAMPLE 3 Assume $F ( s ) = \sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a }$ . If $f$ is completely multiplicative we have $f ^ { - 1 } ( n ) = \mu ( n ) f ( n )$ Since $| f ^ { - 1 } ( n ) | \leq$ $| f ( n ) |$ the series $\sum \mu ( n ) f ( n ) n ^ { - s }$ also converges absolutely for $\sigma > \sigma _ { a }$ and we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) f ( n ) } { n ^ { s } } } = { \frac { 1 } { F ( s ) } } \quad { \mathrm { i f ~ } } \sigma > \sigma _ { a } .
$$

In particular for every Dirichlet character $\chi$ we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) \chi ( n ) } { n ^ { s } } } = { \frac { 1 } { L ( s , \chi ) } } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

ExAMPLE 4 Take $f ( n ) = 1$ and $g ( n ) = \varphi ( n ) .$ , Euler's totient. Since $\varphi ( n ) \leq n$ the series $\sum \varphi ( n ) n ^ { - s }$ converges absolutely for $\sigma > 2 .$ Also, $\begin{array} { r } { h ( n ) = \sum _ { d \mid n } \varphi ( d ) } \end{array}$ $\mathbf { \mu } = \mathbf { \mu } _ { n }$ so (5) gives us

$$
\zeta ( s ) \sum _ { n = 1 } ^ { \infty } { \frac { \varphi ( n ) } { n ^ { s } } } = \sum _ { n = 1 } ^ { \infty } { \frac { n } { n ^ { s } } } = \zeta ( s - 1 ) \quad { \mathrm { i f ~ } } \sigma > 2 .
$$

Therefore

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \varphi ( n ) } { n ^ { s } } } = { \frac { \zeta ( s - 1 ) } { \zeta ( s ) } } \quad { \mathrm { i f ~ } } \sigma > 2 .
$$

ExAMPLE 5 Take $f ( n ) = 1$ and $g ( n ) = n ^ { \alpha }$ . Then $\begin{array} { r } { h ( n ) = \sum _ { d \mid n } d ^ { \alpha } = \sigma _ { \alpha } ( n ) , } \end{array}$ and (5) gives us

$$
\zeta ( s ) \zeta ( s - \alpha ) = \sum _ { n = 1 } ^ { \infty } { \frac { \sigma _ { \alpha } ( n ) } { n ^ { s } } } \quad { \mathrm { i f ~ } } \sigma > \operatorname* { m a x } \{ 1 , 1 + \operatorname { R e } ( \alpha ) \} .
$$

ExAMPLE 6 Take $f ( n ) = 1$ and $g ( n ) = \lambda ( n ) ;$ Liouville's function. Then

$$
h ( n ) = \sum _ { d \mid n } \lambda ( d ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n = m ^ { 2 } { \mathrm { ~ f o r ~ s o m e ~ } } m , } \\ { 0 } & { { \mathrm { o t h e r w i s e } } , } \end{array} \right. }
$$

so (5) gives us

$$
\zeta ( s ) \sum _ { n = 1 } ^ { \infty } { \frac { \lambda ( n ) } { n ^ { s } } } = \sum _ { \stackrel { n = 1 } { n = \operatorname { s q u a r e } } } ^ { \infty } { \frac { 1 } { n ^ { s } } } = \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m ^ { 2 s } } } = \zeta ( 2 s ) .
$$

11: Dirichlet series and Euler products

Hence

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \lambda ( n ) } { n ^ { s } } } = { \frac { \zeta ( 2 s ) } { \zeta ( s ) } } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

# 11.5 Euler products

The next theorem, discovered by Euler in 1737, is sometimes called the analytic version of the fundamental theorem of arithmetic.

Theorem 11.6 Let f be a multiplicative arithmetical function such that the series $\sum f ( n )$ is absolutely convergent. Then the sum of the series can be expressed as an absolutely convergent infinite product,

$$
\sum _ { n = 1 } ^ { \infty } f ( n ) = \prod _ { p } \{ 1 + f ( p ) + f ( p ^ { 2 } ) + \cdots \}
$$

extended over all primes. If $f$ is completely multiplicative, the product simplifies and we have

$$
\sum _ { n = 1 } ^ { \infty } f ( n ) = \prod _ { p } { \frac { 1 } { 1 - f ( p ) } } .
$$

Note. In each case the product is called the Euler product of the series.

PRooF. Consider the finite product

$$
P ( x ) = \prod _ { p \leq x } \{ 1 + f ( p ) + f ( p ^ { 2 } ) + \cdots \}
$$

extended over all primes $p \leq x .$ Since this is the product of a fi nite number of absolutely convergent series we can multiply the series and rearrange the terms in any fashion without altering the sum. A typical term is of the form

$$
f ( p _ { 1 } { } ^ { a _ { 1 } } ) f ( p _ { 2 } { } ^ { a _ { 2 } } ) \cdot \cdot \cdot f ( p _ { r } { } ^ { a _ { r } } ) = f ( p _ { 1 } { } ^ { a _ { 1 } } p _ { 2 } { } ^ { a _ { 2 } } \cdot \cdot \cdot p _ { r } { } ^ { a _ { r } } )
$$

since $f$ is multiplicative. By the fundamental theorem of arithmetic we can write

$$
P ( x ) = \sum _ { n \in A } f ( n )
$$

where $\pmb { A }$ consists of those $\pmb { n }$ having all their prime factors $\leq x$ . Therefore

$$
\sum _ { n = 1 } ^ { \infty } f ( n ) - P ( x ) = \sum _ { n \in B } f ( n ) , 
$$

where $B$ is the set of $\pmb { n }$ having at least one prime factor $> x$ . Therefore

$$
\left| \sum _ { n = 1 } ^ { \infty } f ( n ) - P ( x ) \right| \leq \sum _ { n \in B } | f ( n ) | \leq \sum _ { n > x } | f ( n ) | .
$$

As $x \to \infty$ the last sum on the right $ 0$ since $\sum \left| f ( n ) \right|$ is convergent. Hence $P ( x )  \sum f ( n )$ as $x \to \infty$ .

Now an infinite product of the form $\prod ( 1 + a _ { n } )$ converges absolutely whenever the corresponding series $\sum a _ { n }$ converges absolutely. In this case we have

$$
\sum _ { p \leq x } | f ( p ) + f ( p ^ { 2 } ) + \cdots \cdot | \leq \sum _ { p \leq x } ( | f ( p ) | + | f ( p ^ { 2 } ) | + \cdots \cdot ) \leq \sum _ { n = 2 } ^ { \infty } | f ( n ) | .
$$

Since al the partial sums are bounded, the series of positive terms

$$
\sum _ { p } | f ( p ) + f ( p ^ { 2 } ) + \cdot \cdot \cdot |
$$

converges, and this implies absolute convergence of the product in (6).

Finally, when $f$ is completely multiplicative we have $f ( p ^ { n } ) = f ( p ) ^ { n }$ and each series on the right of (6) is a convergent geometric series with sum $( 1 - f ( p ) ) ^ { - 1 }$ . □

Applying Theorem 11.6 to absolutely convergent Dirichlet series we immediately obtain :

Theorem 11.7 Assume $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a }$ . If $f$ is multiplicative we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } = \prod _ { p } \left\{ 1 + { \frac { f ( p ) } { p ^ { s } } } + { \frac { f ( p ^ { 2 } ) } { p ^ { 2 s } } } + \cdots \right\} \quad i f \sigma > \sigma _ { a } ,
$$

and $i f f$ is completely muliplicative we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } = \prod _ { p } { \frac { 1 } { 1 - f ( p ) p ^ { - s } } } \quad i f \sigma > \sigma _ { a } .
$$

It should be noted that the general term of the product in (8) is the Bell series $f _ { p } ( x )$ of the function $f$ with $x = p ^ { - s }$ . (See Section 2.16.)

ExAMPLEs Taking $f ( n ) = 1 , \mu ( n ) , \varphi ( n ) , \sigma _ { \alpha } ( n ) , \lambda ( n )$ and $\chi ( n ) ,$ , respectively, we obtain the following Euler products :

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } } = \prod _ { p } { \frac { 1 } { 1 - p ^ { - s } } } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

$$
{ \frac { 1 } { \zeta ( s ) } } = \sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { s } } } = \prod _ { p } { ( 1 - p ^ { - s } ) } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

$$
{ \frac { \zeta ( s - 1 ) } { \zeta ( s ) } } = \sum _ { n = 1 } ^ { \infty } { \frac { \varphi ( n ) } { n ^ { s } } } = \prod _ { p } { \frac { 1 - p ^ { - s } } { 1 - p ^ { 1 - s } } } { \mathrm { ~ i f ~ } } \sigma > 2 .
$$

$$
\zeta ( s ) \zeta ( s - \alpha ) = \sum _ { n = 1 } ^ { \infty } { \frac { \sigma _ { \alpha } ( n ) } { n ^ { s } } } = \prod _ { p } { \frac { 1 } { ( 1 - p ^ { - s } ) ( 1 - p ^ { \alpha - s } ) } } ~ { \mathrm { i f ~ } } \sigma > \operatorname* { m a x } \{ 1 , 1 + \operatorname { R e } ( \alpha ) \} ,
$$

$$
{ \frac { \zeta ( 2 s ) } { \zeta ( s ) } } = \sum _ { n = 1 } ^ { \infty } { \frac { \lambda ( n ) } { n ^ { s } } } = \prod _ { p } { \frac { 1 } { 1 + p ^ { - s } } } \quad { \mathrm { i f ~ } } \sigma > 1 ,
$$

$$
L ( s . \chi ) = \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { n ^ { s } } } = \prod _ { p } { \frac { 1 } { 1 - \chi ( p ) p ^ { - s } } } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

Note. If $\chi = \chi _ { 1 }$ , the principal character mod $k _ { i }$ then $\chi _ { 1 } ( p ) = 0$ if $p | k$ and $\chi _ { 1 } ( p ) = 1$ if $p \nmid k ,$ , so the Euler product for $L ( s , \chi _ { \tt S } )$ becomes

$$
L ( s , \chi _ { 1 } ) = \prod _ { p \gamma k } { \frac { 1 } { 1 - p ^ { - s } } } = \prod _ { p } { \frac { 1 } { 1 - p ^ { - s } } } \cdot \prod _ { p \mid k } ( 1 - p ^ { - s } ) = \zeta ( s ) \prod _ { p \mid k } ( 1 - p ^ { - s } ) .
$$

Thus the $L$ -function $L ( s , \chi _ { 1 } )$ is equal to the zeta function $\zeta ( s )$ multiplied by a finite number of factors.

# 11.6 The half-plane of convergence of a Dirichlet series

To prove the existence of a half-plane of convergence we use the following lemma.

Lemma 2 Let $s _ { 0 } = \sigma _ { 0 } + i t _ { 0 }$ and assume that the Dirichlet series $\sum f ( n ) n ^ { - s _ { 0 } }$ has bounded partial sums, say

$$
\left\{ \sum _ { n \leq x } f ( n ) n ^ { - s _ { 0 } } \right\} \leq M
$$

for all $x \ge 1$ . Then for each s with $\sigma > \sigma _ { 0 }$ we have

$$
\biggl | \sum _ { a < n \leq b } f ( n ) n ^ { - s } \biggr | \leq 2 M a ^ { \sigma _ { 0 } - \sigma } \biggl ( 1 + \frac { | s - s _ { 0 } | } { \sigma - \sigma _ { 0 } } \biggr ) .
$$

PROOF. Let $a ( n ) = f ( n ) n ^ { - s _ { 0 } }$ and let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } a ( n ) . } \end{array}$ Then $f ( n ) n ^ { - s } =$ $a ( n ) n ^ { s _ { 0 } - s }$ so we can apply Theorem 4.2 (with $f ( x ) = x ^ { s _ { 0 } - s } )$ to obtain

$$
\sum _ { a < n \leq b } f ( n ) n ^ { - s } = A ( b ) b ^ { s _ { 0 } - s } - A ( a ) a ^ { s _ { 0 } - s } + ( s - s _ { 0 } ) \int _ { a } ^ { b } A ( t ) t ^ { s _ { 0 } - s - 1 } d t .
$$

Since $| A ( x ) | \leq M$ this gives us

$$
\begin{array} { r l r } {  { \Bigg | \sum _ { a < n \leq b } f ( n ) n ^ { - s } \Bigg | \leq M b ^ { \sigma _ { 0 } - \sigma } + M a ^ { \sigma _ { 0 } - \sigma } + | s - s _ { 0 } | M \int _ { a } ^ { b } t ^ { \sigma _ { 0 } - \sigma - 1 } d t } } \\ & { } & \\ & { } & { \leq 2 M a ^ { \sigma _ { 0 } - \sigma } + | s - s _ { 0 } | M | \frac { b ^ { \sigma _ { 0 } - \sigma } - a ^ { \sigma _ { 0 } - \sigma } } { \sigma _ { 0 } - \sigma } | } \\ & { } & \\ & { } & { \leq 2 M a ^ { \sigma _ { 0 } - \sigma } \bigg ( 1 + \frac { | s - s _ { 0 } | } { \sigma - \sigma _ { 0 } } \bigg ) . } \end{array}
$$

ExAMPLEs If the partial sums $\sum \eta \leq x \ f ( n )$ are bounded, Lemma 2 implies that $\sum f ( n ) n ^ { - s }$ converges for $\sigma > 0$ In fact, if we take $s _ { 0 } = \sigma _ { 0 } = 0$ in (9) we obtain, for $\sigma > 0 ;$ ,

$$
\left| \sum _ { a < n \leq b } f ( n ) n ^ { - s } \right| \leq K a ^ { - \sigma }
$$

where $\kappa$ is independent of a. Letting $a \to + \infty$ we find that $\sum f ( n ) n ^ { - s }$ converges if $\sigma > 0$ . In particular, this shows that the Dirichlet series

$$
\sum \limits _ { n = 1 } ^ { \infty } \frac { ( - 1 ) ^ { n } } { n ^ { s } }
$$

converges for $\sigma > 0$ since $\| \sum _ { n \leq x } { \big ( } - 1 { \big ) } ^ { n } | \leq 1 .$ Similarly, if $\chi$ is any nonprincipal Dirichlet character mod $k$ we have $| \sum _ { n \leq x } \chi ( n ) | \leq \varphi ( k )$ so

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { n ^ { s } } }
$$

converges for $\sigma > 0 .$ . The same type of reasoning gives the following theorem.

Theorem 11.8 If the series $\sum f ( n ) n ^ { - s }$ converges for $s = \sigma _ { 0 } + i t _ { 0 }$ then it also converges for all s with $\sigma > \sigma _ { 0 }$ . If it diverges for $s = \sigma _ { 0 } + i t _ { 0 }$ then it diverges for all s with $\sigma < \sigma _ { 0 }$ .

ProoF. The second statement follows from the first. To prove the first statement, choose any $\pmb { s }$ with $\sigma > \sigma _ { 0 }$ . Lemma 2 shows that

$$
\left| \sum _ { a < n \leq b } f ( n ) n ^ { - s } \right| \leq K a ^ { \sigma _ { 0 } - \sigma }
$$

where $K$ is independent of $\pmb { a }$ . Since $a ^ { \sigma _ { 0 } - \sigma } \to 0$ as $a  + \infty$ , the Cauchy condition shows that $\sum f ( n ) n ^ { - s }$ converges. □

Theorem 11.9 If the series $\sum f ( n ) n ^ { - s }$ does not converge everywhere or diverge everywhere, then there exists a real number $\sigma _ { \mathfrak { c } }$ , called the abscissa of convergence, such that the series converges for all $\pmb { s }$ in the half-plane $\sigma > \sigma _ { c }$ and diverges for all s in the half-plane $\sigma < \sigma _ { c }$ .

ProoF. We argue as in the proof of Theorem 11.1, taking $\sigma _ { c }$ to be the least upper bound of all $\pmb { \sigma }$ for which $\sum f ( n ) n ^ { - s }$ diverges. □

Note. If the series converges everywhere we define $\sigma _ { \mathfrak { c } } = - \infty$ , and if it converges nowhere we define $\sigma _ { \mathfrak { c } } = + \infty$

Since absolute converge implies convergence, we always have $\sigma _ { a } \geq \sigma _ { c }$ If $\sigma _ { a } > \sigma _ { c }$ there is an infinite strip $\sigma _ { c } < \sigma < \sigma _ { a }$ in which the series converges conditionally (see Figure I1.1.) The next theorem shows that the width of this strip does not exceed 1.

![](images/a0dda629d26824a745c9d87fbef03e9cef3dd261cb31b14db516cb92836fa096.jpg)  
Figure 11.1

Theorem 11.10 For any Dirichlet series with $\sigma _ { \mathfrak { c } }$ finite we have

$$
0 \leq \sigma _ { a } - \sigma _ { c } \leq 1 .
$$

PRoor. It suffices to show that if $\sum f ( n ) n ^ { - s _ { 0 } }$ converges for some ${ \mathfrak { s } } _ { \mathbf { 0 } }$ then it converges absolutely for all s with $\sigma > \sigma _ { 0 } + 1$ . Let $A$ be an upper bound for the numbers $\mid f ( n ) n ^ { - s _ { 0 } } \mid$ .Then

$$
\left| { \frac { f ( n ) } { n ^ { s } } } \right| = \left| { \frac { f ( n ) } { n ^ { s _ { 0 } } } } \right| \left| { \frac { 1 } { n ^ { s - s _ { 0 } } } } \right| \leq { \frac { A } { n ^ { \sigma - \sigma _ { 0 } } } }
$$

so $\sum | f ( n ) n ^ { - s } |$ converges by comparison with $\sum n ^ { \pmb { \sigma } _ { 0 } - \pmb { \sigma } } ,$

ExAMPLE The series

$$
\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { n ^ { s } } }
$$

converges if $\sigma > 0$ , but the convergence is absolute only if $\sigma > 1 .$ Therefore in this example $\pmb { \sigma _ { c } } = 0$ and $\sigma _ { a } = 1$ .

Convergence properties of Dirichlet series can be compared with those of power series. Every power series has a disk of convergence, whereas every Dirichlet series has a half-plane of convergence. For power series the interior of the disk of convergence is also the domain of absolute convergence. For Dirichlet series the domain of absolute convergence may be a proper subset of the domain of convergence. A power series represents an analytic function inside its disk of convergence. We show next that a Dirichlet series represents an analytic function inside its half-plane of convergence.

# 11.7 Analytic properties of Dirichlet series

Analytic properties of Dirichlet series will be deduced from the following general theorem of complex function theory which we state as a lemma.

Lemma 3 Let $\{ f _ { n } \}$ be a sequence of functions analytic on an open subset S of the complex plane, and assume that $\{ f _ { n } \}$ converges uniformly on every compact subset of S to a limit function $f .$ Then $f$ is analytic on S and the sequence of derivatives $\{ f _ { n } ^ { \prime } \}$ converges uniformly on every compact subset of S to the derivative $f ^ { \prime }$ .

PROOF. Since $f _ { n }$ is analytic on $\pmb { S }$ we have Cauchy's integral formula

$$
f _ { n } ( a ) = { \frac { 1 } { 2 \pi i } } \int _ { \partial D } { \frac { f _ { n } ( z ) } { z - a } } d z
$$

where $D$ is any compact disk in $s , \partial D$ is its positively oriented boundary, and $a$ is any interior point of $D$ . Because of uniform convergence we can pass to the limit under the integral sign and obtain

$$
f ( a ) = { \frac { 1 } { 2 \pi i } } \int _ { \partial D } { \frac { f ( z ) } { z - a } } d z
$$

which implies that $f$ is analytic inside $D$ . For the derivatives we have

$$
f _ { n } ^ { \prime } ( a ) = { \frac { 1 } { 2 \pi i } } \int _ { \partial D } { \frac { f _ { n } ( z ) } { ( z - a ) ^ { 2 } } } d z \qquad { \mathrm { a n d ~ } } f ^ { \prime } ( a ) = { \frac { 1 } { 2 \pi i } } \int _ { \partial D } { \frac { f ( z ) } { ( z - a ) ^ { 2 } } } d z
$$

from which it follows easily that $f _ { n } ^ { \prime } ( a )  f ^ { \prime } ( a )$ uniformly on every compact subset of $\pmb { S }$ as $n  \nolinebreak \infty$ □

To apply the lemma to Dirichlet series we show first that we have uniform convergence on compact subsets of the half-plane of convergence.

Theorem 11.11 A Dirichlet series $\sum f ( n ) n ^ { - s }$ converges uniformly on every compact subset lying interior to the half-plane of convergence $\sigma > \sigma _ { c }$

PRooF. It sufices to show that $\sum f ( n ) n ^ { - s }$ converges uniformly on every compact rectangle $R = [ \alpha , \beta ] \times [ \overline { { c } } , d ]$ with $\alpha > \sigma _ { c }$ . To do this we use the estimate obtained in Lemma 2,

$$
\left| \sum _ { a < n \leq b } f ( n ) n ^ { - s } \right| \leq 2 M a ^ { \sigma _ { 0 } - \sigma } \bigg ( 1 + \frac { | s - s _ { 0 } | } { \sigma - \sigma _ { 0 } } \bigg )
$$

where $s _ { 0 } = \sigma _ { 0 } + i t _ { 0 }$ is any point in the half-plane $\sigma > \sigma _ { c }$ and $s$ is any point with $\sigma > \sigma _ { 0 }$ . We choose $s _ { 0 } = \sigma _ { 0 }$ where $\sigma _ { c } < \sigma _ { 0 } < \alpha .$ (See Figure 11.2.)

![](images/2b9ea0d28c8c96dab6f1614f89dd9047cea37e54644929813a76d6f1b00268a8.jpg)  
Figure 11.2

Then if $s \in R$ we have $\sigma - \sigma _ { 0 } \geq \alpha - \sigma _ { 0 }$ and $| s _ { 0 } - s | < C$ where $C$ isa constant depending on $s _ { 0 }$ and $R$ but not on s. Then (10) implies

$$
\biggl | \sum _ { a < n \leq b } f ( n ) n ^ { - s } \biggr | \leq 2 M a ^ { \sigma _ { 0 } - \alpha } \biggl ( 1 + \frac { C } { \alpha - \sigma _ { 0 } } \biggr ) = B a ^ { \sigma _ { 0 } - \alpha }
$$

where $B$ is independent of s. Since $a ^ { \sigma _ { 0 } - \alpha }  0$ as $a  + \infty$ the Cauchy condition for uniform convergence is satisfied. □

Theorem 11.12 The sum function $F ( s ) = \sum f ( n ) n ^ { - s }$ of $\pmb { a }$ Dirichlet series is analytic in its half-plane of convergence $\sigma > \sigma _ { c }$ , and its derivative $F ^ { \prime } ( s )$ is represented in this half-plane by the Dirichlet series

$$
F ^ { \prime } ( s ) = - \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) { \log { n } } } { n ^ { s } } } ,
$$

obtained by differentiating term by term.

ProoF. We apply Theorem 11.11 and Lemma 3 to the sequence of partial sums. □

Notes. The derived series in (11) has the same abscissa of convergence and the same abscissa of absolute convergence as the series for $F ( s )$

Applying Theorem 11.12 repeatedly we find that the kth derivative is given by

$$
F ^ { ( k ) } ( s ) = ( - 1 ) ^ { k } \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) ( \log n ) ^ { k } } { n ^ { s } } } \quad { \mathrm { f o r ~ } } \sigma > \sigma _ { c } .
$$

ExAMPLEs For $\sigma > 1$ we have

$$
\zeta ^ { \prime } ( s ) = - \sum _ { n = 1 } ^ { \infty } { \frac { \log n } { n ^ { s } } }
$$

and

$$
- \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } = \sum _ { n = 1 } ^ { \infty } \frac { \Lambda ( n ) } { n ^ { s } } .
$$

Equation (12) follows by differentiating the series for the zeta function term by term, and (13) is obtained by multiplying the two Dirichlet series $\sum \Lambda ( n ) n ^ { - s }$ and $\sum n ^ { - s }$ and using the identity $\sum _ { d \mid n } \Lambda ( d ) = \log n .$ ,d

# 11.8 Dirichlet series with nonnegative coefficients

Some functions which are defined by Dirichlet series in their half-plane of convergence $\sigma > \sigma _ { c }$ can be continued analytically beyond the line $\sigma = \sigma _ { c }$ . For example, in the next chapter we will show that the Riemann zeta function $\zeta ( s )$ can be continued analytically beyond the line $\sigma = 1$ to a function which is analytic for all $s$ except for a simple pole at $s = 1$ . Similarly, if $\chi$ is a nonprincipal Dirichlet character, the $L$ -function $L ( s , \chi )$ can be continued analytically beyond the line $\sigma = 1$ to an entire function (analytic for all s). The singularity for the zeta function is explained by the following theorem of Landau which deals with Dirichlet series having nonnegative coeficients.

Theorem 11.13 Let $F ( s )$ be represented in the half-plane $\sigma > c$ by the Dirichlet series

$$
F ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } ,
$$

where c is finite, and assume that $f ( n ) \geq 0 ,$ for all $n \geq n _ { 0 } . { \mathrm { ~ } } I f F ( s )$ is analytic in some disk about the point $s = c ,$ , then the Dirichlet series converges in the half-plane $\sigma > c - \varepsilon$ for some $\varepsilon > 0 .$ Consequently, if the Dirichlet series has a finite abscissa of convergence $\sigma _ { c }$ ,then $F ( s )$ has a singularity on the real axis at the point $s = \sigma _ { c }$ .

PROOF. Let $a = 1 + c .$ Since $F$ is analytic at ${ \pmb a }$ it can be represented by an absolutely convergent power series expansion about ${ \pmb a }$ ,

$$
F ( s ) = \sum _ { k = 0 } ^ { \infty } { \frac { F ^ { ( k ) } ( a ) } { k ! } } ( s \cdots a ) ^ { k } ,
$$

and the radius of con vergence of this power series exceeds 1 since $F$ is analytic at $c .$ (See Figure 11.3.) By Theorem 11.12 the derivatives $F ^ { ( k ) } ( a )$ can be determined by repeated differentiation of (14). This gives us

$$
F ^ { ( k ) } ( a ) = ( - 1 ) ^ { k } \sum _ { n = 1 } ^ { \infty } f ( n ) ( \log n ) ^ { k } n ^ { - a } ,
$$

so (15) can be rewritten as

$$
F ( s ) = \sum _ { k = 0 } ^ { \infty } \sum _ { n = 1 } ^ { \infty } { \frac { ( a - s ) ^ { k } } { k ! } } f ( n ) ( \log n ) ^ { k } n ^ { - a } .
$$

Since the radius of convergence exceeds $\mathbf { 1 }$ , this formula is valid for some real $s = c - \varepsilon$ where $\varepsilon > 0$ (see Figure 11.3.) Then $a - s = 1 + \varepsilon$ for this $s$ and the double series in (16) has nonnegative terms for $n \geq n _ { 0 }$ . Therefore we can interchange the order of summation to obtain

$$
F ( c - \varepsilon ) = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \alpha } } } \sum _ { k = 0 } ^ { \infty } { \frac { \{ ( 1 + \varepsilon ) \mathrm { l o g } n \} ^ { k } } { k ! } } = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \alpha } } } e ^ { ( 1 + \varepsilon ) \mathrm { l o g } n } = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \alpha - \varepsilon } } } .
$$

In other words, the Dirichlet series $\sum f ( n ) n ^ { - s }$ converges for $s = c - \varepsilon ,$ hence it also converges in the half-plane $\sigma > c - \varepsilon$ , □

![](images/26cbedb190f61d90043d2b6224e6bb1ccc0224fbac317cd2036e2430913d38d2.jpg)  
Figure 11.3

# 11.9 Dirichlet series expressed as exponentials of Dirichlet series

A Dirichlet series $F ( s ) = \sum f ( n ) n ^ { - s }$ which does not vanish identically has a half-plane in which it never vanishes. The next theorem shows that in this half-plane $F ( s )$ is the exponential of another Dirichlet series if $f \left( 1 \right) \neq 0$

Theorem 11.14 Let $\begin{array} { r } { F ( s ) = \sum f ( n ) n ^ { - s } } \end{array}$ be absolutely convergent for $\sigma > \sigma _ { a }$ and assume that $f ( 1 ) \neq 0 .$ if $F ( s ) \neq 0$ for $\sigma > \sigma _ { 0 } \geq \sigma _ { a }$ , then for $\sigma > \sigma _ { 0 }$ we have

$$
F ( s ) = e ^ { G ( s ) }
$$

with

$$
G ( s ) = \log f ( 1 ) + \sum _ { n = 2 } ^ { \infty } { \frac { ( f ^ { \prime } * f ^ { - 1 } ) ( n ) } { \log n } } n ^ { - s } ,
$$

where $f ^ { - 1 }$ is the Dirichlet inverse of f and $f ^ { \prime } ( n ) = f ( n ) { \log { n } } .$

Note. For complex $z \neq 0$ log $z$ denotes that branch of the logarithm which is real when $z > 0$

PROOF. Since $F ( s ) \neq 0$ we can write $F ( s ) = e ^ { G ( s ) }$ for some function $G ( s )$ which is analytic for $\sigma > \sigma _ { 0 }$ . Differentiation gives us

$$
F ^ { \prime } ( s ) = e ^ { G ( s ) } G ^ { \prime } ( s ) = F ( s ) G ^ { \prime } ( s ) ,
$$

sO $G ^ { \prime } ( s ) = F ^ { \prime } ( s ) / F ( s )$ . But

$$
F ^ { \prime } ( s ) = - \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) \mathrm { l o } \mathrm { \ } n } { n ^ { s } } } = - \sum _ { n = 1 } ^ { \infty } { \frac { f ^ { \prime } ( n ) } { n ^ { s } } } \quad \quad { \mathrm { a n d ~ } } { \frac { 1 } { F ( s ) } } = \sum _ { n = 1 } ^ { \infty } { \frac { f ^ { - 1 } ( n ) } { n ^ { s } } } ,
$$

hence

$$
G ^ { \prime } ( s ) = F ^ { \prime } ( s ) \cdot { \frac { 1 } { F ( s ) } } = - \sum _ { n = 2 } ^ { \infty } { \frac { ( f ^ { \prime } \ast f ^ { - 1 } ) ( n ) } { n ^ { s } } } .
$$

Integration gives

$$
G ( s ) = C + \sum _ { n = 2 } ^ { \infty } { \frac { ( f ^ { \prime } * f ^ { - 1 } ) ( n ) } { \log n } } n ^ { - s }
$$

where $C$ is a constant. Letting $\sigma  + \infty$ we find $\begin{array} { r } { \operatorname* { l i m } _ { \sigma \to \infty } G ( \sigma + i t ) = C , } \end{array}$ hence

$$
f ( 1 ) = \operatorname* { l i m } _ { \sigma  \infty } F ( \sigma + i t ) = e ^ { C }
$$

sO $C = \log f ( 1 )$ . This completes the proof The proof also shows that the series for $G ( s )$ converges absolutely if $\sigma > \sigma _ { 0 }$ . □

ExAMPLE 1 When $f ( n ) = 1$ we have $f ^ { \prime } ( n ) = \log n$ and $f ^ { - 1 } ( n ) = \mu ( n )$ so

$$
( f ^ { \prime } * f ^ { - 1 } ) ( n ) = \sum _ { d | n } \log d \mu { \binom { n } { d } } = \Lambda ( n ) .
$$

Therefore if $\sigma > 1$ we have

$$
\zeta ( s ) = e ^ { G ( s ) }
$$

where

$$
G ( s ) = \sum _ { n = 2 } ^ { \infty } \frac { \Lambda ( n ) } { \log n } n ^ { - s } .
$$

ExaMPLE 2 A similar argument shows that if $f$ is completely multiplicative and $\begin{array} { r } { F ( s ) = \sum f ( n ) n ^ { - s } } \end{array}$ then in the half-plane of absolute convergence $\sigma > \sigma _ { a }$ we have

$$
F ( s ) = e ^ { G ( s ) }
$$

where

$$
G ( s ) = \sum _ { n = 2 } ^ { \infty } { \frac { f ( n ) \Lambda ( n ) } { \log n } } n ^ { - s }
$$

$$
\begin{array} { r } { ( f ^ { \prime } \ast f ^ { - 1 } ) ( n ) = \sum _ { d \mid n } f ( d ) \mathrm { l o g } d \mu ( n / d ) f ( n / d ) = f ( n ) \Lambda ( n ) . } \end{array}
$$

The formulas in the foregoing examples can also be deduced with the help of Euler products. For example, for the Riemann zeta function we have

$$
\zeta ( s ) = \prod _ { p } { \frac { 1 } { 1 - p ^ { - s } } } .
$$

Keep s real, $s > 1$ , so that $\zeta ( s )$ is positive. Taking logarithms and using the power series $- \log ( 1 - x ) = \sum x ^ { m } / m$ we find

$$
\log { \zeta ( s ) } = - \sum _ { p } \log ( 1 - p ^ { - s } ) = \sum _ { p } \sum _ { m = 1 } ^ { \infty } { \frac { p ^ { - m s } } { m } } = \sum _ { n = 1 } ^ { \infty } \Lambda _ { 1 } ( n ) n ^ { - s }
$$

where

$$
\Lambda _ { 1 } ( n ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n = p ^ { m } { \mathrm { ~ f o r ~ s o m e ~ p r i m e ~ } } p , } \\ { 0 } & { { \mathrm { o t h e r w i s e . } } } \end{array} \right. }
$$

But if $n = p ^ { m }$ then log $n = m$ log $p = m \Lambda ( n )$ so $1 / m = \Lambda ( n ) / 1 0 \mathrm { g } n .$ Therefore

$$
\log { \zeta ( s ) } = \sum _ { n = 2 } ^ { \infty } { \frac { \Lambda ( n ) } { \log n } } n ^ { - s }
$$

which implies (17) for real $s > 1$ . But each member of (17) is analytic in the half-plane $\sigma > 1$ so, by analytic continuation, (17) also holds for $\sigma > 1$

# 11.10 Mean value formulas for Dirichlet series

Theorem 11.15 Given two Dirichlet series $\begin{array} { r } { F ( s ) = \sum f ( n ) n ^ { - s } } \end{array}$ and ${ \cal G } ( s ) =$ $\sum g ( n ) n ^ { - s }$ with abscissae of absolute convergence $\pmb { \sigma _ { 1 } }$ and $\sigma _ { 2 }$ , respectively. Then for $a > \sigma _ { 1 }$ and $b > \sigma _ { 2 }$ we have

$$
\operatorname* { l i m } _ { T \to \infty } { \frac { 1 } { 2 T } } \int _ { - T } ^ { T } F ( a + i t ) G ( b - i t ) d t = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) g ( n ) } { n ^ { a + b } } } .
$$

PRoOF. We have

$$
{ \begin{array} { r l } & { F ( a + i t ) G ( b - i t ) = \left( \displaystyle \sum _ { m = 1 } ^ { \infty } \frac { f ( m ) } { m ^ { a + i t } } \right) \left( \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { g ( n ) } { n ^ { b - i t } } \right) = \displaystyle \sum _ { m = 1 } ^ { \infty } \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { f ( m ) g ( n ) } { m ^ { a } n ^ { b } } \left( \displaystyle \frac { n } { m } \right) ^ { i t } } \\ & { \qquad = \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) g ( n ) } { n ^ { a + b } } + \displaystyle \sum _ { m = 1 } ^ { \infty } \sum _ { n = 1 \atop n \neq n } ^ { \infty } \frac { f ( m ) g ( n ) } { m ^ { a } n ^ { b } } \left( \displaystyle \frac { n } { m } \right) ^ { i t } . } \end{array} }
$$

Now

$$
\sum _ { m = 1 } ^ { \infty } \sum _ { n = 1 } ^ { \infty } \left| { \frac { f ( m ) g ( n ) } { m ^ { a } n ^ { b } } } \left( { \frac { n } { m } } \right) ^ { i t } \right| \leq \sum _ { m = 1 } ^ { \infty } { \frac { | f ( m ) | } { m ^ { a } } } \sum _ { n = 1 } ^ { \infty } { \frac { | g ( n ) | } { n ^ { b } } }
$$

so the series is absolutely convergent, and this convergence is also uniform for al t. Hence we can integrate term by term and divide by ${ 2 T }$ to obtain

$$
{ \begin{array} { r l } & { { \frac { 1 } { 2 T } } { \displaystyle \int _ { - T } ^ { T } } F ( a + i t ) G ( b - i t ) d t } \\ & { \qquad = \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) g ( n ) } { n ^ { a + b } } } + \sum _ { \stackrel { m \neq n } { m \neq n } } ^ { \infty } { \frac { f ( m ) g ( n ) } { m ^ { a } n ^ { b } } } { \frac { 1 } { 2 T } } { \displaystyle \int _ { - T } ^ { T } } e ^ { i t \log ( n / m ) } d t . } \end{array} }
$$

But for $m \neq n$ we have

$$
\int _ { - T } ^ { T } e ^ { i t \log ( n / m ) } d t = { \frac { e ^ { i t \log ( n / m ) } } { i \log ( n / m ) } } { \Biggl | } _ { - T } ^ { T } = { \frac { 2 \sin \left[ T \log \left( { \frac { n } { m } } \right) \right] } { \log \left( { \frac { n } { m } } \right) } }
$$

so we obtain

$$
\begin{array} { r l r } {  { \frac { 1 } { 2 T } \int _ { - T } ^ { T } F ( a + i t ) G ( b - i t ) d t } } \\ & { } & { = \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) g ( n ) } { n ^ { a + b } } + \sum _ { \stackrel { m , n = 1 } { m \neq n } } ^ { \infty } \frac { f ( m ) g ( n ) } { m ^ { a } n ^ { b } } \frac { \sin [ T \log ( \frac { n } { m } ) ] } { T \log ( \frac { n } { m } ) } . } \end{array}
$$

Again, the double series converges uniformly with respect to $T$ since $( \sin x ) / x$ is bounded for every $x$ . Hence, we can pass to the limit term by term to obtain the statement of the theorem. □

Theorem 11.16 If $\begin{array} { r } { F ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) n ^ { - s } } \end{array}$ converges absolutely for $\sigma > \sigma _ { a }$ then for $\sigma > \sigma _ { a }$ we have

$$
\operatorname* { l i m } _ { T \to \infty } \frac { 1 } { 2 T } \int _ { - T } ^ { T } | F ( \sigma + i t ) | ^ { 2 } d t = \sum _ { n = 1 } ^ { \infty } \frac { | f ( n ) | ^ { 2 } } { n ^ { 2 \sigma } } .
$$

In particular, $i f \sigma > 1$ we have (a) $\operatorname* { l i m } _ { T \to \infty } { \frac { 1 } { 2 T } } \int _ { - T } ^ { T } | \zeta ( \sigma + i t ) | ^ { 2 } d t = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { 2 \sigma } } } = \zeta ( 2 \sigma ) .$ (b) $\operatorname* { l i m } _ { T \to \infty } \frac { 1 } { 2 T } \int _ { - T } ^ { T } | \zeta ^ { ( k ) } ( \sigma + i t ) | ^ { 2 } d t = \sum _ { n = 1 } ^ { \infty } \frac { \log ^ { 2 k } n } { n ^ { 2 \sigma } } = \zeta ^ { ( 2 k ) } ( 2 \sigma ) .$ (c) $\operatorname* { l i m } _ { T \to \infty } { \frac { 1 } { 2 T } } { \int } _ { - T } ^ { T } | \zeta ( \sigma + i t ) | ^ { - 2 } d t = \sum _ { n = 1 } ^ { \infty } { \frac { \mu ^ { 2 } ( n ) } { n ^ { 2 \sigma } } } = { \frac { \zeta ( 2 \sigma ) } { \zeta ( 4 \sigma ) } } .$ (d)) $\operatorname* { l i m } _ { T \to \infty } { \frac { 1 } { 2 T } } \int _ { - T } ^ { T } | \zeta ( \sigma + i t ) | ^ { 4 } d t = \sum _ { n = 1 } ^ { \infty } { \frac { { \sigma _ { 0 } } ^ { 2 } ( n ) } { n ^ { 2 \sigma } } } = { \frac { \zeta ^ { 4 } ( 2 \sigma ) } { \zeta ( 4 \sigma ) } } .$

PRooF. Formula (18) follows by taking $g ( n ) = { \overline { { f ( n ) } } }$ in Theorem 11.15. To deduce the special formulas (a) through (d) we need only evaluate the Dirichlet series $\sum | f ( n ) | ^ { 2 } n ^ { - 2 \sigma }$ for the following choices of $f ( n )$ : (a) $f ( n ) = 1 ; \{ \ b \} \ f ( n ) =$ $( - 1 ) ^ { k } \overline { { { \log } } } ^ { k } n ; ( \mathsf { c } ) f ( n ) = \mu ( n ) ;$ (d) $f ( n ) = \sigma _ { 0 } ( n )$ . The formula (a) is clear, and formula (b) follows from the relation

$$
\zeta ^ { ( k ) } ( s ) = ( - 1 ) ^ { k } \sum _ { n = 1 } ^ { \infty } { \frac { \log ^ { k } n } { n ^ { s } } } .
$$

To prove (c) and (d) we use Euler products. For (c) we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \mu ^ { 2 } ( n ) } { n ^ { s } } } = \prod _ { p } { ( 1 + p ^ { - s } ) } = \prod _ { p } { \frac { 1 - p ^ { - 2 s } } { 1 - p ^ { - s } } } = { \frac { \zeta ( s ) } { \zeta ( 2 s ) } } .
$$

Replacing $s$ by $2 \sigma$ we get (c). For (d) we write

$$
\begin{array} { c } { { \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { { \sigma _ { 0 } } ^ { 2 } ( n ) } { n ^ { s } } = \prod _ { p } \left\{ 1 + { \sigma _ { 0 } } ^ { 2 } ( p ) p ^ { - s } + { \sigma _ { 0 } } ^ { 2 } ( p ^ { 2 } ) p ^ { - 2 s } + \cdots \right\} } } \\ { { = \prod _ { p } \left\{ 1 + 2 ^ { 2 } p ^ { - s } + 3 ^ { 2 } p ^ { - 2 s } + \cdots \right\} } } \\ { { = \prod _ { p } \left\{ \displaystyle \sum _ { n = 0 } ^ { \infty } ( n + 1 ) ^ { 2 } p ^ { - n s } \right\} = \prod _ { p } \frac { 1 - p ^ { - 2 s } } { ( 1 - p ^ { - s } ) ^ { 4 } } = \displaystyle \frac { \zeta ^ { 4 } ( s ) } { \zeta ( 2 s ) } } } \end{array}
$$

since $\sum _ { n = 0 } ^ { \infty } ( n + 1 ) ^ { 2 } x ^ { n } = { \frac { x + 1 } { ( x - 1 ) ^ { 3 } } } = { \frac { 1 - x ^ { 2 } } { ( 1 - x ) ^ { 4 } } }$ Now replace s by $2 \sigma$ to get (d)

# 11.11 An integral formula for the coeicients of a Dirichlet series

Theorem 11.17 Assume the series $\begin{array} { r } { F ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) n ^ { - s } } \end{array}$ converges absolutely for $\sigma > \sigma _ { a }$ . Then for $\sigma > \sigma _ { a }$ and $x > 0$ we have

$$
\operatorname* { l i m } _ { T \to \infty } { \frac { 1 } { 2 T } } \int _ { - T } ^ { T } F ( \sigma + i t ) x ^ { \sigma + i t } d t = { \biggl \{ } f ( n )  { \begin{array} { l l } { i f x = n , } \\ { 0 } \end{array} }
$$

PROOF. For $\sigma > \sigma _ { a }$ we have

$$
{ \begin{array} { r l } & { { \frac { 1 } { 2 T } } \displaystyle \int _ { - T } ^ { T } F ( \sigma + i t ) x ^ { \sigma + i t } d t = { \frac { x ^ { \sigma } } { 2 T } } \displaystyle \int _ { - T } ^ { T } \displaystyle \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \sigma } } } \left( { \frac { x } { n } } \right) ^ { i t } d t } \\ & { \qquad = { \frac { x ^ { \sigma } } { 2 T } } \displaystyle \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \sigma } } } \displaystyle \int _ { - T } ^ { T } e ^ { i t \log ( x / n ) } d t , } \end{array} }
$$

since the series is uniformly convergent for all $t$ in any interval $[ - T , T ]$ . If $x$ is not an integer then $x / n \neq 1$ for all $\pmb { n }$ and we have

$$
\int _ { - T } ^ { T } e ^ { i t \log ( x / n ) } d t = { \frac { 2 \sin \left[ T \log \left( { \frac { x } { n } } \right) \right] } { \log \left( { \frac { x } { n } } \right) } }
$$

and the series becomes

$$
{ \frac { x ^ { \sigma } } { T } } \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \sigma } } } { \frac { \sin \left[ T \log \left( { \frac { x } { n } } \right) \right] } { \log \left( { \frac { x } { n } } \right) } }
$$

which tends to 0 as $T \to \infty$ . However, if $x$ is an integer, say $x \Leftarrow k$ , then the term in (19) with $n = k$ contributes

$$
\int _ { - T } ^ { T } \left( { \frac { x } { n } } \right) ^ { i t } d t = \int _ { - T } ^ { T } \left( { \frac { k } { k } } \right) ^ { i t } d t = \int _ { - T } ^ { T } d t = 2 T ,
$$

and hence

$$
{ \frac { x ^ { \sigma } } { 2 T } } \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \sigma } } } \int _ { - T } ^ { T } \left( { \frac { x } { n } } \right) ^ { i t } d t = f ( k ) + { \frac { k ^ { \sigma } } { 2 T } } \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { \sigma } } } \int _ { - T } ^ { T } \left( { \frac { k } { n } } \right) ^ { i t } d t .
$$

The second term tends to 0 as $T \to \infty$ as was shown in first part of the argument. □

# 11.12 An integral formula for the partial sums of a Dirichlet series

In this section we derive a formula of Perron for expressing the partial sums of a Dirichlet series as an integral of the sum function. We shall require a lemma on contour integrals.

Lemma 4 If $c > 0 ,$ define $\int _ { c - \infty } ^ { c + \infty i }$ to mean $\operatorname* { l i m } _ { T \to \infty }$ $\int _ { c - i T } ^ { c + i T }$ . Then if a is any positive real number, we have

$$
\frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } a ^ { z } \frac { d z } { z } = \left\{ \begin{array} { l l } { { 1 } } & { { i f a > 1 , } } \\ { { 1 } } & { { } } \\ { { \overline { { 2 } } } } & { { i f a = 1 , } } \\ { { 0 } } & { { i f 0 < a < 1 . } } \end{array} \right.
$$

Moreover, we have

$$
\left| \frac { 1 } { 2 \pi i } \int _ { c - i T } ^ { c + i T } a ^ { z } \frac { d z } { z } \right| \leq \frac { a ^ { c } } { \pi T \log \left( \frac { 1 } { a } \right) } \quad i f 0 < a < 1 ,
$$

$$
\left| \frac { 1 } { 2 \pi i } \int _ { c - i T } ^ { c + i T } a ^ { z } \frac { d z } { z } - 1 \right| \leq \frac { a ^ { c } } { \pi T \log a } \quad i f a > 1 ,
$$

and

$$
\left| { \frac { 1 } { 2 \pi i } } \int _ { c - i T } ^ { c + i T } { \frac { d z } { z } } - { \frac { 1 } { 2 } } \right| \leq { \frac { c } { \pi T } } \quad i f a = 1 .
$$

PROoF. Suppose first that $0 < a < 1$ and consider the rectangular contour $R$ shown in Figure 11.4. Since $a ^ { z } / z$ is analytic inside $R$ we have $\int _ { R } a ^ { z } / z d z = 0 .$ Hence

$$
\int _ { c - i T } ^ { c + i T } = \int _ { b + i T } ^ { c + i T } + \int _ { b - i T } ^ { b + i T } + \int _ { c - i T } ^ { b - i T } ,
$$

![](images/8cc63cb310924f6c9e2265f8f859119578655962199cc97bfd3553dd3fedc319.jpg)  
Figure 11.4

11: Dirichlet series and Euler products

SO

$$
\begin{array} { l } { \displaystyle \left. \displaystyle \int _ { c - i T } ^ { c + i T } a ^ { z } \displaystyle \frac { d z } { z } \right. \leq \int _ { c } ^ { b } \displaystyle \frac { a ^ { x } } { T } d x + \displaystyle \frac { 2 T a ^ { b } } { b } + \int _ { c } ^ { b } \displaystyle \frac { a ^ { x } } { T } d x } \\ { \leq \displaystyle \frac { 2 } { T } \displaystyle \int _ { c } ^ { \infty } a ^ { x } d x + \displaystyle \frac { 2 T a ^ { b } } { b } = \displaystyle \frac { 2 } { T } \left( \displaystyle \frac { - a ^ { c } } { \log a } \right) + \displaystyle \frac { 2 T a ^ { b } } { b } . } \end{array}
$$

Let $b  \infty$ . Then $a ^ { b } \to 0 .$ hence

$$
\left| \int _ { c - i T } ^ { c + i T } a ^ { z } \frac { d z } { z } \right| \leq \frac { 2 a ^ { c } } { T \log \left( \frac { 1 } { a } \right) } .
$$

This proves (20).

![](images/153f383d2d190421640942d629817e9cbe9936e48b48b65ee9ed27c066d5a449.jpg)  
Figure 11.5

If $a > 1$ we use instead the contour $R$ shown in Figure 11.5. Here $b > c > 0$ and $T > c$ Now $a ^ { z } / z$ has a first order pole at $z = 0$ with residue 1 since

$$
a ^ { z } = e ^ { z \log a } = 1 + z \log a + O ( | z | ^ { 2 } ) { \mathrm { a s ~ } } z \to 0 .
$$

Therefore

$$
2 \pi i = \left( \int _ { c - i T } ^ { c + i T } + \int _ { c + i T } ^ { - b + i T } + \int _ { - b + i T } ^ { - b - i T } + \int _ { - b - i T } ^ { c - i T } \right) { a ^ { z } } \frac { d z } { z } ,
$$

hence

$$
\frac { 1 } { 2 \pi i } \int _ { c - i T } ^ { c + i T } a ^ { z } \frac { d z } { z } - 1 = \frac { 1 } { 2 \pi i } \biggl ( \int _ { - b + i T } ^ { c + i T } + \int _ { - b - i T } ^ { - b + i T } + \int _ { c - i T } ^ { - b - i T } \biggr ) a ^ { z } \frac { d z } { z } .
$$

We now estimate the integrals on the right. We have

$$
\begin{array} { r l r } {  {  \int _ { - b + i T } ^ { c + i T } a ^ { \alpha } \frac { d z } { z }  \leq \int _ { - b } ^ { c } \displaystyle \frac { a ^ { \alpha } d x } { T } \leq \frac { 1 } { T } \int _ { - \infty } ^ { c } a ^ { x } d x = \frac { 1 } { T } \displaystyle \frac { a ^ { c } } { \log a } , } } \\ & { } & { \  \int _ { - b - i T } ^ { - b + i T } a ^ { \alpha } \frac { d z } { z }  \leq 2 T \displaystyle \frac { a ^ { - b } } { b } , } \\ & { } & { \  \int _ { c - i T } ^ { - b - i T } a ^ { z } \displaystyle \frac { d z } { z }  \leq \int _ { - b } ^ { c } \displaystyle \frac { a ^ { x } d x } { T } \leq \frac { 1 } { T } \displaystyle \frac { a ^ { c } } { \log a } . } \end{array}
$$

As $b \to \infty$ the second integral tends to 0 and we obtain (21).

When $a = 1$ , we can treat the integral directly. We have

$$
{ \begin{array} { r l } & { \displaystyle { \int _ { c - i T } ^ { c + i T } } { \frac { d z } { z } } = { \int _ { - T } ^ { T } } { \frac { i d y } { c + i y } } = { \int _ { - T } ^ { T } } { \frac { y } { c ^ { 2 } + y ^ { 2 } } } d y + i c { \int _ { - T } ^ { T } } { \frac { d y } { c ^ { 2 } + y ^ { 2 } } } } \\ & { \qquad = 2 i c { \int _ { 0 } ^ { T } } { \frac { d y } { c ^ { 2 } + y ^ { 2 } } } , } \end{array} }
$$

the other integral vanishing because the integrand is an odd function. Hence

$$
\frac { 1 } { 2 \pi i } \int _ { c - i T } ^ { c + i T } \frac { d z } { z } = \frac { c } { \pi } \int _ { 0 } ^ { T } \frac { d y } { c ^ { 2 } + y ^ { 2 } } = \frac { 1 } { \pi } \arctan \frac { T } { c } = \frac { 1 } { 2 } - \frac { 1 } { \pi } \arctan \frac { c } { T } .
$$

Since arctan $c / T < c / T$ this proves (22), and the proof of Lemma 4 is complete.

Theorem 11.18 Perron's formula. Let $\begin{array} { r } { F ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) / n ^ { s } } \end{array}$ be absolutely convergent for $\sigma > \sigma _ { a }$ ; let $c > 0 , x > 0$ be arbitrary. Then if $\sigma > \sigma _ { a } \sim c$ we have:

$$
{ \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } F ( s + z ) { \frac { x ^ { z } } { z } } d z = \sum _ { n \leq x } * { \frac { f ( n ) } { n ^ { s } } }
$$

where $\sum ^ { \ast }$ means that the last term in the sum must be multiplied by $1 / 2$ when $x$ is an integer.

PRooF. In the integral, $c$ is the real part of $z$ , so the series for $F ( s + z )$ is absolutely and uniformly convergent on compact subsets of the half-plane $\sigma + c > \sigma _ { a }$ . Therefore

$$
\begin{array} { l } { \displaystyle \int _ { c - i T } ^ { \kappa + i T } F ( s + z ) \frac { x ^ { \varepsilon } } { z } d z = \int _ { c - i T } ^ { \infty + i T } \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) } { n ^ { s + z } } \frac { x ^ { \varepsilon } } { z } d z } \\ { = \displaystyle \sum _ { n = 1 } ^ { \infty } \frac { f ( n ) } { n ^ { s } } \int _ { c - i T } ^ { \infty + i T } \left( \frac { x } { n } \right) ^ { z } \frac { d z } { z } } \\ { = \displaystyle \sum _ { n < x } \frac { f ( n ) } { n ^ { s } } \int _ { c - i T } ^ { \infty + i T } \left( \frac { x } { n } \right) ^ { z } \frac { d z } { z } + \displaystyle \sum _ { n > x } \frac { f ( n ) } { n ^ { s } } \int _ { c - i T } ^ { \kappa + i T } \left( \frac { x } { n } \right) ^ { z } \frac { d z } { z } } \\ { ~ + ~ ^ { \prime } \frac { f ( x ) } { x ^ { s } } \int _ { c - i T } ^ { \kappa + i T } \frac { d z } { z } , } \end{array}
$$

the symbol $+ ^ { \prime }$ indicating that the last term appears only if $x$ is an integer. In the finite sum $\sum \eta < x$ we can pass to the limit $T \to \infty$ term by term, and the integral is $2 \pi i$ by Lemma 4. (Here $a = x / n , a > 1 . ,$ The last term (if it appears) yields $\pi i f ( x ) x ^ { - s }$ and the theorem will be proved if we show that

$$
\operatorname* { l i m } _ { T \to \infty } \sum _ { n > x } { \frac { f ( n ) } { n ^ { s } } } \int _ { c - i T } ^ { c + i T } \left( { \frac { x } { n } } \right) ^ { z } { \frac { d z } { z } } = 0 .
$$

We know that $\int _ { c - i \infty } ^ { c + i \infty } ( x / n ) ^ { z } \{ d z / z ) = 0$ if $n > x$ but to prove (23) we must estimate the rate at which $\int _ { c - i T } ^ { c + i T }$ tends to zero.

From Lemma 4 we have the estimate

$$
\left| \int _ { c - i T } ^ { c + i T } a ^ { z } \frac { d z } { z } \right| \leq \frac { 2 } { T } \frac { a ^ { c } } { \left( \log \frac { 1 } { a } \right) } \mathrm { i f } 0 < a < 1 .
$$

Here $a = x / n$ with $n > x$ In fact, $n \geq [ x ] + 1$ so that $1 / a = n / x \geq$ $( [ x ] + 1 ) / x$ . Hence

$$
\begin{array} { r l } { \displaystyle  \sum _ { n > x } \displaystyle \frac { f ( n ) } { n ^ { s } } \int _ { c - i T } ^ { c + i T } ( \frac { x } { n } ) ^ { z } \displaystyle \frac { d z } { z }  \leq \displaystyle \sum _ { n > x } \displaystyle \frac { \lvert f ( n ) \rvert } { n ^ { \sigma } } \displaystyle \frac { 2 } { T } ( \frac { x } { n } ) ^ { c } \displaystyle \frac { 1 } { \log ( \displaystyle \frac { [ x ] + 1 } { x } ) } } & { } \\ { = \displaystyle \frac { 2 } { T } \displaystyle \frac { x ^ { c } } { \log ( \displaystyle \frac { [ x ] + 1 } { x } ) } \sum _ { n > x } \displaystyle \frac { \lvert f ( n ) \rvert } { n ^ { \sigma + c } }  0 \quad \mathrm { a s } \ T  \infty } & { } \end{array}
$$

This proves Perron's formula.

Note. If $c > \sigma _ { a }$ Perron's formula is valid for $s = 0$ and we obtain the following integral representation for the partial sums of the coeficients:

$$
{ \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } F ( z ) { \frac { x ^ { z } } { z } } d z = \sum _ { n \leq x } * f ( n ) .
$$

# Exercises for Chapter 11

1. Derive the following identities, valid for $\sigma > 1$

$$
\zeta ( s ) = s \int _ { 1 } ^ { \infty } { \frac { [ x ] } { x ^ { s + 1 } } } d x .
$$

(b) $\sum _ { p } { \frac { 1 } { p ^ { s } } } = s \int _ { 1 } ^ { \infty } { \frac { \pi ( x ) } { x ^ { s + 1 } } } d x .$ where the um isextended ver alprimes.

$$
{ \frac { 1 } { \zeta ( s ) } } = s \int _ { 1 } ^ { \infty } { \frac { M ( x ) } { x ^ { s + 1 } } } d x , { \mathrm { ~ w h e r e ~ } } M ( x ) = \sum _ { n \leq x } \mu ( n ) .
$$

$$
- { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } = s \int _ { 1 } ^ { \infty } { \frac { \psi ( x ) } { x ^ { s + 1 } } } d x , { \mathrm { ~ w h e r e ~ } } \psi ( x ) = \sum _ { n \leq x } \Lambda ( n ) .
$$

$$
L ( s , \chi ) = s \int _ { 1 } ^ { \infty } { \frac { A ( x ) } { x ^ { s + 1 } } } d x , { \mathrm { ~ w h e r e ~ } } A ( x ) = \sum _ { n \leq x } \chi ( n ) ,
$$

Show that (e) is also valid for $\sigma > 0$ if $\chi$ is a nonprincipal character. [Hint : Theorem 4.2.]

2. Assume that the series $\sum _ { n = 1 } ^ { \infty } f ( n )$ converges with sum $A$ , and let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } f ( n ) . } \end{array}$

(a) Prove that the Dirichlet series $\begin{array} { r } { F ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) n ^ { - s } } \end{array}$ converges for each $s$ with $\sigma > 0$ and that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } = A - s \int _ { 1 } ^ { \infty } { \frac { R ( x ) } { x ^ { s + 1 } } } d x ,
$$

where $R ( x ) = A - A ( x ) .$ [Hint: Theorem 4.2.]

(b) Deduce that $F ( \sigma )  A \mathrm { a s } \sigma  0 +$ (c) If $\sigma > 0$ and $N \geq 1$ is an integer, prove that

$$
F ( s ) = \sum _ { n = 1 } ^ { N } { \frac { f ( n ) } { n ^ { s } } } - { \frac { A ( N ) } { N ^ { s } } } + s \int _ { N } ^ { \infty } { \frac { A ( y ) } { y ^ { s + 1 } } } d y .
$$

(d) Write $s = \sigma + i t$ ,take $N = 1 + [ | t | ]$ in part (c) and show that

$$
| F ( \sigma + i t ) | = O ( | t | ^ { 1 - \sigma } ) \quad { \mathrm { i f } } 0 < \sigma < 1 .
$$

3. (a) Prove that the series $\sum n ^ { - 1 - i t }$ has bounded partial sums if $t \neq 0 ,$ When $t = 0$ the partial sums are unbounded. (b) Prove that the series $\sum n ^ { - 1 - i t }$ diverges for all real t. In other words, the Dirichlet series for $\zeta ( s )$ diverges everywhere on the line $\sigma = 1$

4. Let $\begin{array} { r } { F ( s ) = \sum _ { n = 1 } ^ { \infty } f ( n ) n ^ { - s } } \end{array}$ where $f ( n )$ is completely multiplicative and the series converges absolutely for $\sigma > \sigma _ { \alpha }$ . Prove that if $\sigma > \sigma _ { a }$ we have

$$
{ \frac { F ^ { \prime } ( s ) } { F ( s ) } } = - \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) \Lambda ( n ) } { n ^ { s } } } .
$$

In the following exercises, $\lambda ( n )$ is Liouville's function, $d ( n )$ is the number of divisors of $n , \ \nu ( n )$ and $\kappa ( n )$ are defined as follows: $\nu ( 1 ) = 0 \nonumber$ ,id) $\kappa ( 1 ) = 1$ ; if $n = { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { k } } ^ { a _ { k } }$ then $\nu ( n ) = k$ and $\kappa ( n ) = a _ { 1 } a _ { 2 } \cdot \cdot \cdot a _ { k }$ .

Prove that the identities in Exercises 5 through 10 are valid for $\sigma > 1$

$$
5 . \sum _ { n = 1 } ^ { \infty } \frac { d ( n ^ { 2 } ) } { n ^ { s } } = \frac { \zeta ^ { 3 } ( s ) } { \zeta ( 2 s ) } .
$$

$$
6 . \sum _ { n = 1 } ^ { \infty } { \frac { v ( n ) } { n ^ { s } } } = \zeta ( s ) \sum _ { p } { \frac { 1 } { p ^ { s } } } .
$$

$$
\begin{array} { r l } {  { 8 . \sum _ { n = 1 } ^ { \infty } \frac { 2 ^ { \nu ( n ) } \lambda ( n ) } { n ^ { s } } = \frac { \zeta ( 2 s ) } { \zeta ^ { 2 } ( s ) } . } } \\ & { \ 9 . \sum _ { n = 1 } ^ { \infty } \frac { \kappa ( n ) } { n ^ { s } } = \frac { \zeta ( s ) \zeta ( 2 s ) \zeta ( 3 s ) } { \zeta ( 6 s ) } . } \\ & { \ \mathrm { { 1 0 . ~ \sum _ { n = 1 } ^ { \infty } \frac { 3 ^ { \nu ( n ) } \kappa ( n ) } { n ^ { s } } = \frac { \zeta ^ { 3 } ( s ) } { \zeta ( 3 s ) } . } } } \end{array}
$$

$$
7 . \sum _ { n = 1 } ^ { \infty } { \frac { 2 ^ { \nu ( n ) } } { n ^ { s } } } = { \frac { \zeta ^ { 2 } ( s ) } { \zeta ( 2 s ) } } .
$$

11. Express the sum of the series $\sum _ { n = 1 } ^ { \infty } 3 ^ { \operatorname { v } ( n ) } \kappa ( n ) \lambda ( n ) n ^ { - s }$ in terms of the Riemann zeta function.

12. Let f be a completely multiplicative function such that $f ( p ) = f ( p ) ^ { 2 }$ for each prime $p$ If the series $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a }$ and has sum $F ( s ) _ { \ast }$ prove that $F ( s ) \neq 0$ and that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) \lambda ( n ) } { n ^ { s } } } = { \frac { F ( 2 s ) } { F ( s ) } } \quad { \mathrm { i f ~ } } \sigma > \sigma _ { a } .
$$

11: Dirichlet series and Euler products

13. Let f be a multiplicative function such that $f ( p ) = f ( p ) ^ { 2 }$ for each prime $p _ { \cdot }$ If the series $\sum \mu ( n ) f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a }$ and has sum $F ( s ) _ { : }$ prove that $F ( s ) \neq 0$ and that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) | \mu ( n ) | } { n ^ { s } } } = { \frac { F ( 2 s ) } { F ( s ) } } \quad { \mathrm { i f ~ } } \sigma > \sigma _ { a } .
$$

14. Let $f$ be a multiplicative function such that $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > \sigma _ { a } , \operatorname { I f } p$ is prime and $\sigma > \sigma _ { \mathfrak { a } }$ prove that

$$
( 1 + f ( p ) p ^ { - s } ) \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) \mu ( n ) } { n ^ { s } } } = ( 1 - f ( p ) p ^ { - s } ) \sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) \mu ( n ) \mu ( p , n ) } { n ^ { s } } } ,
$$

where $\mu ( p , n )$ is the Möbius function evaluated at the gcd of $p$ and $\pmb { n }$

[Hint : Euler products.]

15. Prove that

$$
\sum _ { m = 1 } ^ { \infty } \sum _ { n = 1 } ^ { \infty } \frac { 1 } { m ^ { 2 } n ^ { 2 } } = \frac { \zeta ^ { 2 } ( 2 ) } { \zeta ( 4 ) } .
$$

More generally, if each $s _ { i }$ has real part $\sigma _ { i } > 1$ , express the multiple sum

$$
\sum _ { \begin{array} { l } { m _ { 1 } = 1 } \\ { ( m _ { 1 } \ldots \ldots m _ { r } ) = 1 } \end{array} } ^ { \infty } { \cdots } \cdot \cdot \sum _ { m _ { r } = 1 } ^ { \infty } { m _ { 1 } } ^ { - s _ { 1 } } \cdot \cdot \cdot \cdot m _ { r } ^ { - s _ { r } }
$$

in terms of the Riemann zeta function.

16. Integrals of the form

$$
f ( s ) = \int _ { 1 } ^ { \infty } { \frac { A ( x ) } { x ^ { s } } } d x ,
$$

where $A ( x )$ is Riemann-integrable on every compact interval $[ 1 , a ]$ , have some properties analogous to those of Dirichlet series. For example, they possess a half-plane of absolute convergence $\sigma > \sigma _ { a }$ and a half-plane of convergence $\sigma > \sigma _ { c }$ in which $f ( s )$ is analytic. This exercise describes an analogue of Theorem 11.13 (Landau's theorem).

Let $f ( s )$ be represented in the half-plane $\sigma > \sigma _ { c }$ by (24), where $\pmb { \sigma } _ { c }$ is finite, and assume that $A ( x )$ is real-yalued and does not change sign for $x \geq x _ { 0 }$ . Prove that $f ( s )$ has a singularity on the real axis at the point $s = \sigma _ { c }$

17. Let $\begin{array} { r } { \lambda _ { a } ( n ) = \sum _ { d \mid n } d ^ { a } \lambda ( d ) } \end{array}$ where $\lambda ( n )$ is Liouville's function. Prove that if $\sigma >$ $\boldsymbol { \mathrm { m a x } } \{ 1 , \boldsymbol { \mathrm { R e } } ( \boldsymbol { a } ) + 1 \}$ , we have

$$
\sum _ { n = 1 } ^ { \infty } { \frac { \lambda _ { a } ( n ) } { n ^ { s } } } = { \frac { \zeta ( s ) \zeta ( 2 s - 2 a ) } { \zeta ( s - a ) } }
$$

and

$$
\sum _ { n = 1 } ^ { \infty } \frac { \lambda ( n ) \lambda _ { a } ( n ) } { n ^ { s } } = \frac { \zeta ( 2 s ) \zeta ( s - a ) } { \zeta ( s ) } .
$$

# The Functions 1つ $\zeta ( s )$ and $L ( s , \chi )$ 12

# 12.1 Introduction

This chapter develops further properties of the Riemann zeta function $\zeta ( s )$ and the Dirichlet $L$ -functions $L ( s , \chi )$ defined for $\sigma > 1$ by the series

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { s } } } \quad \quad { \mathrm { a n d ~ } } L ( s , \chi ) = \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { n ^ { s } } } .
$$

As in the last chapter we write $s = \sigma + i t$ . The treatment of both $\zeta ( s )$ and $L ( s , \chi )$ can be unified by introducing the Hurwitz zeta function $\zeta ( s , a ) ,$ defined for $\sigma > 1$ by the series

$$
\zeta ( s , a ) = \sum _ { n = 0 } ^ { \infty } { \frac { 1 } { ( n + a ) ^ { s } } } .
$$

Here $\pmb { a }$ is a fixed real number, $0 < a \le 1$ . When $a = 1$ this reduces to the Riemann zeta function, $\zeta ( s ) = \zeta ( s , 1 )$ . We can also express $L ( s , \chi )$ in terms of Hurwitz zeta functions. If $\chi$ is a character mod $k$ we rearrange the terms in the series for $L ( s , \chi )$ according to the residue classes mod $k$ That is, we write

$$
n = q k + r , { \mathrm { ~ w h e r e ~ } } 1 \leq r \leq k { \mathrm { ~ a n d ~ } } q = 0 , 1 , 2 , \ldots ,
$$

and obtain

$$
{ \begin{array} { r l } & { L ( s , \chi ) = \displaystyle \sum _ { n = 1 } ^ { \infty } { \frac { \chi ( n ) } { n ^ { s } } } = \displaystyle \sum _ { r = 1 } ^ { k } \sum _ { q = 0 } ^ { \infty } { \frac { \chi ( q k + r ) } { ( q k + r ) ^ { s } } } = \displaystyle { \frac { 1 } { k ^ { s } } } \sum _ { r = 1 } ^ { k } \chi ( r ) \sum _ { q = 0 } ^ { \infty } { \frac { 1 } { \left( q + { \frac { r } { k } } \right) ^ { s } } } } \\ & { \qquad = k ^ { - s } \displaystyle \sum _ { r = 1 } ^ { k } \chi ( r ) \zeta { \Biggl ( } s , { \frac { r } { k } } { \Biggr ) } . } \end{array} }
$$

This representation of $L ( s , \chi )$ as a linear combination of Hurwitz zeta func-tions shows that the properties of $L$ -functions depend ultimately on those of $\zeta ( s , a )$

Our first goal is to obtain the analytic continuation of $\zeta ( s , a )$ beyond the line $\sigma = 1$ . This is done through an integral representation for $\zeta ( s , a )$ obtained from the integral formula for the gamma function $\Gamma ( s )$

# 12.2 Properties of the gamma function

Throughout the chapter we shall require some basic properties of the gamma function $\Gamma ( s )$ . They are listed here for easy reference, although not all of them will be needed. Proofs can be found in most textbooks on complex function theory.

For $\sigma > 0$ we have the integral representation

$$
\Gamma ( s ) = \int _ { 0 } ^ { \infty } x ^ { s - 1 } e ^ { - x } d x .
$$

The function so defined for $\sigma > 0$ can be continued beyond the line $\sigma = 0 ,$ , and $\Gamma ( s )$ exists as a function which is analytic everywhere in the ${ \pmb S }$ plane except for simple poles at the points

$$
s = 0 , - 1 , - 2 , - 3 , \ldots ,
$$

with residue $( - 1 ) ^ { n } / n !$ at $s = - n$ We also have the representation

$$
\Gamma ( s ) = \operatorname * { l i m } _ { n  \infty } { \frac { n ^ { s } n ! } { s ( s + 1 ) \cdots ( s + n ) } } \quad { \mathrm { ~ f o r ~ } } s \neq 0 , - 1 , - 2 , \ldots ,
$$

and the product formula

$$
{ \frac { 1 } { \Gamma ( s ) } } = s e ^ { C s } \prod _ { n = 1 } ^ { \infty } \biggl ( 1 + { \frac { s } { n } } \biggr ) e ^ { - s / n } \quad \mathrm { f o r ~ a l l ~ } s ,
$$

where $C$ is Euler's constant. Since the product converges for all $s , \Gamma ( s )$ is never zero. The gamma function satisfies two functional equations,

$$
\Gamma ( s + 1 ) = s \Gamma ( s )
$$

and

$$
\Gamma ( s ) \Gamma ( 1 - s ) = \frac { \pi } { \sin \pi s } ,
$$

valid for all $\pmb { S }$ , and a multiplication formula

$$
\Gamma ( s ) \Gamma \biggl ( s + \frac { 1 } { m } \biggr ) \cdot \cdot \cdot \Gamma \biggl ( s + \frac { m - 1 } { m } \biggr ) = ( 2 \pi ) ^ { ( m - 1 ) / 2 } m ^ { ( 1 / 2 ) - m s } \Gamma ( m s ) ,
$$

valid for all $s$ and all integers $m \geq 1$

We wil use the integral representation (1), the functional equations (2) and (3), and the fact that $\Gamma ( s )$ exists in the whole plane, with simple poles at the integers $s = 0 , \ldots 1 , \ - 2 , \ldots$ We also note that $\Gamma ( n + 1 ) = n !$ if $\pmb { n }$ isa nonnegative integer.

# 12.3 Integral representation for the Hurwitz zeta function

The Hurwitz zeta function $\zeta ( s , a )$ is initially defined for $\sigma > 1$ by the series

$$
\zeta ( s , a ) = \sum _ { n = 0 } ^ { \infty } { \frac { 1 } { ( n + a ) ^ { s } } } .
$$

Theorem 12.1 The series for $\zeta ( s , a )$ converges absolutely for $\sigma > 1$ . The convergence is uniform in every half-plane $\sigma \ge 1 + \delta , \delta > 0$ $\zeta ( s , a )$ is an analytic function of s in the half-plane $\sigma > 1$ .

PRooF. All these statements follow from the inequalities

$$
\displaystyle \sum _ { n = 1 } ^ { \infty } | ( n + a ) ^ { - s } | = \displaystyle \sum _ { n = 1 } ^ { \infty } ( n + a ) ^ { - \sigma } \leq \displaystyle \sum _ { n = 1 } ^ { \infty } ( n + a ) ^ { - ( 1 + \delta ) } .
$$

Theorem 12.2 For $\sigma > 1$ we have the integral representation

$$
\Gamma ( s ) \zeta ( s , a ) = \int _ { 0 } ^ { \infty } { \frac { x ^ { s - 1 } e ^ { - a x } } { 1 - e ^ { - x } } } d x .
$$

In particular, when $a = 1$ we have

$$
\Gamma ( s ) \zeta ( s ) = \int _ { 0 } ^ { \infty } { \frac { x ^ { s - 1 } e ^ { - x } } { 1 - e ^ { - x } } } d x .
$$

PRooF. First we keep s real, $s > 1$ , and then extend the result to complex s by analytic continuation.

In the integral for $\Gamma ( s )$ we make the change of variable $x = ( n + a ) t .$ , where $n \geq 0$ , to obtain

$$
\Gamma ( s ) = \int _ { 0 } ^ { \infty } e ^ { - x } x ^ { s - 1 } d x = ( n + a ) ^ { s } \int _ { 0 } ^ { \infty } e ^ { - ( n + a ) t } t ^ { s - 1 } d t ,
$$

or

$$
( n + a ) ^ { - s } \Gamma ( s ) = \int _ { 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } \ d t .
$$

Summing over all $n \geq 0$ we find

$$
\zeta ( s , a ) \Gamma ( s ) = \sum _ { n = 0 } ^ { \infty } \int _ { 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } \ : d t ,
$$

the series on the right being convergent if $\sigma > 1$ . Now we wish to interchange the sum and integral. The simplest way to justify this is to regard the integral as a Lebesgue integral. Since the integrand is nonnegative, Levi's convergence theorem (Theorem 10.25 in Reference [2]) tells us that the series

$$
\sum _ { n = 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 }
$$

converges almost everywhere to a sum function which is Lebesgue-integrable on $[ 0 , + \infty )$ and that

$$
\zeta ( s , a ) \Gamma ( s ) = \sum _ { n = 0 } ^ { \infty } \int _ { 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } d t = \int _ { 0 } ^ { \infty } \sum _ { n = 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } d t .
$$

But if $t > 0$ we have $0 < e ^ { - t } < 1$ and hence

$$
\sum _ { n = 0 } ^ { \infty } e ^ { - n t } = { \frac { 1 } { 1 - e ^ { - t } } } ,
$$

the series being a geometric series. Therefore we have

$$
\sum _ { n = 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } = { \frac { e ^ { - a t } t ^ { s - 1 } } { 1 - e ^ { - t } } }
$$

almost everywhere on $[ 0 , + \infty )$ , in fact everywhere except at 0, so

$$
\zeta ( s , a ) \Gamma ( s ) = \int _ { 0 } ^ { \infty } \sum _ { n = 0 } ^ { \infty } e ^ { - n t } e ^ { - a t } t ^ { s - 1 } d t = \int _ { 0 } ^ { \infty } { \frac { e ^ { - a t } t ^ { s - 1 } } { 1 - e ^ { - t } } } d t .
$$

This proves (5) for real $s > 1$ . To extend it to all complex s with $\sigma > 1$ we note that both members are analytic for $\sigma > 1$ . To show that the right member is analytic we assume $1 + \delta \leq \sigma \leq c .$ where $c > 1$ and $\delta > 0$ and write

$$
\int _ { 0 } ^ { \infty } \left| \frac { e ^ { - a t } t ^ { s - 1 } } { 1 - e ^ { - t } } \right| d t \leq \int _ { 0 } ^ { \infty } \frac { e ^ { - a t } t ^ { d - 1 } } { 1 - e ^ { - t } } d t = \left( \int _ { 0 } ^ { 1 } + \int _ { 1 } ^ { \infty } \right) \frac { e ^ { - a t } t ^ { d - 1 } } { 1 - e ^ { - t } } d t .
$$

If $0 \leq t \leq 1$ we have $t ^ { \sigma - 1 } \leq t ^ { \delta } .$ and if $t \geq 1$ we have $t ^ { \sigma - 1 } \leq t ^ { c - 1 }$ . Also, since $e ^ { t } - 1 \geq t$ for $t \geq 0$ we have

$$
\int _ { 0 } ^ { 1 } { \frac { e ^ { - a t } t ^ { d - 1 } } { 1 - e ^ { - t } } } d t \leq \int _ { 0 } ^ { 1 } { \frac { e ^ { ( 1 - a ) t } t ^ { \delta } } { e ^ { t } - 1 } } d t \leq e ^ { ( 1 - a ) } \int _ { 0 } ^ { 1 } t ^ { \delta - 1 } d t = { \frac { e ^ { 1 - a } } { \delta } } ,
$$

and

$$
\int _ { 1 } ^ { \infty } { \frac { e ^ { - a t } t ^ { \sigma - 1 } } { 1 - e ^ { - t } } } d t \leq \int _ { 1 } ^ { \infty } { \frac { e ^ { - a t } t ^ { \sigma - 1 } } { 1 - e ^ { - t } } } d t \leq \int _ { 0 } ^ { \infty } { \frac { e ^ { - a t } t ^ { c - 1 } } { 1 - e ^ { - t } } } d t = \Gamma ( c ) \zeta ( c , a ) .
$$

This shows that the integral in (5) converges uniformly in every strip $1 + \delta$ $\leq \sigma \leq c _ { : }$ where $\delta > 0$ , and therefore represents an analytic function in every such strip, hence also in the half-plane $\sigma > 1$ . Therefore, by analytic continuation, (5) holds for all $\pmb { S }$ with $\sigma > 1$ □

# 12.4 A contour integral representation for the Hurwitz zeta function

To extend $\zeta ( s , a )$ beyond the line $\sigma = 1$ we derive another representation in terms of a contour integral. The contour $C$ is a loop around the negative real axis, as shown in Figure 12.1. The loop is composed of three parts $C _ { 1 } , C _ { 2 } , C _ { 3 } . C _ { 2 }$ is a positively oriented circle of radius $c < 2 \pi$ about the origin, and $C _ { 1 } , C _ { 3 }$ are the lower and upper edges of a "cut'" in the $z$ -plane along the negative real axis, traversed as shown in Figure 12.1.

![](images/783102628d29ba05c49a51c72cc8c97457383f905fa499ad56e9f8b04817920d.jpg)  
Figure 12.1

This means that we use the parametrizations $z = r e ^ { - \pi i }$ on $C _ { 1 }$ and $z = r e ^ { \pi i }$ on $C _ { 3 }$ where $r$ varies from $c$ to $+ \infty$ .

Theorem 12.3 If $\mathbf { 0 } < a \le 1$ the function defined by the contour integral

$$
I ( s , a ) = { \frac { 1 } { 2 \pi i } } \int _ { c } { \frac { z ^ { s - 1 } e ^ { a z } } { 1 - e ^ { z } } } d z
$$

is an entire function of s. Moreover, we have

$$
\zeta ( s , a ) = \Gamma ( 1 - s ) I ( s , a ) \quad i f \sigma > 1 .
$$

PRoOF. Here $z ^ { s }$ means $r ^ { s } e ^ { - \pi i s }$ on $C _ { 1 }$ and $r ^ { s } e ^ { \pi i s }$ on $C _ { 3 }$ . We consider an arbitrary compact disk $| s | \leq M$ and prove that the integrals along $C _ { 1 }$ and $C _ { 3 }$ converge uniformly on every such disk. Since the integrand is an entire function of $\mathbf { \delta S }$ this will prove that $I ( s , a )$ is entire.

Along $C _ { 1 }$ we have, for $r \geq 1$

$$
| z ^ { s - 1 } | = r ^ { \sigma - 1 } | e ^ { - \pi i ( \sigma - 1 + i t ) } | = r ^ { \sigma - 1 } e ^ { \pi t } \leq r ^ { M - 1 } e ^ { \pi M }
$$

since $| s | \lesssim M$ . Similarly, along $C _ { 3 }$ we have, for $r \geq 1$ ,

$$
| z ^ { s - 1 } | = r ^ { \sigma - 1 } | e ^ { \pi i ( \sigma - 1 + i t ) } | = r ^ { \sigma - 1 } e ^ { - \pi t } \le r ^ { M - 1 } e ^ { \pi M } .
$$

Hence on either $C _ { 1 }$ or $C _ { 3 }$ we have, for $r \geq 1$ ,

$$
\left| \frac { z ^ { s - 1 } e ^ { a z } } { 1 - e ^ { z } } \right| \leq \frac { r ^ { M - 1 } e ^ { \pi M } e ^ { - a r } } { 1 - e ^ { - r } } = \frac { r ^ { M - 1 } e ^ { \pi M } e ^ { ( 1 - a ) r } } { e ^ { r } - 1 } .
$$

But e' − 1 > e'/2 when r > log 2 so the integrand is bounded by ArM-1 e-ar where A is a constant depending on M but not on r. Since f pM-1e-ar dr converges if $c > 0$ this shows that the integrals along $C _ { 1 }$ and $C _ { 3 }$ converge

uniformly on every compact disk $| s | \leq M$ , and hence $I ( s , a )$ is an entire function of s.

To prove (6) we write

$$
2 \pi i I ( s , a ) = \left( \int _ { C _ { 1 } } + \int _ { C _ { 2 } } + \int _ { C _ { 3 } } \right) z ^ { s - 1 } g ( z ) \ d z
$$

where $g ( z ) = e ^ { a z } / ( 1 - e ^ { z } )$ On $C _ { 1 }$ and $C _ { 3 }$ we have $\begin{array} { r } { g ( z ) = g ( - r ) , } \end{array}$ and on $C _ { 2 }$ we write $z = c e ^ { i \theta }$ ,where $- \pi \leq \theta \leq \pi$ This gives us

$$
\begin{array} { l } { { 2 \pi i I ( s , a ) = \displaystyle \int _ { \infty } ^ { c } r ^ { s - 1 } e ^ { - \pi i s } g ( - r ) d r + i \int _ { - \pi } ^ { \pi } c ^ { s - 1 } e ^ { \imath s } c ^ { i \theta } g ( c e ^ { i \theta } ) d \theta } } \\ { { \displaystyle ~ + \int _ { c } ^ { \infty } r ^ { s - 1 } e ^ { \pi i s } g ( - r ) d r } } \\ { { = 2 i \sin ( \pi s ) \displaystyle \int _ { c } ^ { \infty } r ^ { s - 1 } g ( - r ) d r + i c ^ { s } \displaystyle \int _ { - \pi } ^ { \pi } e ^ { i s \theta } g ( c e ^ { i \theta } ) d \theta . } } \end{array}
$$

Dividing by 2i, we get

$$
\pi I ( s , a ) = \sin ( \pi s ) I _ { 1 } ( s , c ) + I _ { 2 } ( s , c )
$$

say. Now let $c \to 0$ . We find

$$
\operatorname* { l i m } _ { c \to 0 } I _ { 1 } ( s , c ) = \int _ { 0 } ^ { \infty } \frac { r ^ { s - 1 } e ^ { - a r } } { 1 - e ^ { - r } } d r = \Gamma ( s ) \zeta ( s , a ) ,
$$

if $\sigma > 1$ . We show next that $\begin{array} { r } { \operatorname* { l i m } _ { c  0 } I _ { 2 } ( s , c ) = 0 . } \end{array}$ To do this note that $g ( z )$ is analytic in $| z | < 2 \pi$ except for a first order pole at $z = 0$ Therefore $z g ( z )$ is analytic everywhere inside $| z | < 2 \pi$ and hence is bounded there, say $| g ( z ) | \leq A / | z |$ , where $| z | = c < 2 \pi$ and $A$ is a constant. Therefore we have

$$
| I _ { 2 } ( s , c ) | \leq { \frac { c ^ { \sigma } } { 2 } } \int _ { - \pi } ^ { \pi } e ^ { - \imath \theta } { \frac { { \cal A } } { c } } d \theta \leq { \cal A } e ^ { \pi | \imath | } c ^ { \sigma - 1 } .
$$

If $\sigma > 1$ and $c \to 0$ we find $I _ { 2 } ( s , c ) \to 0$ hence $\pi I ( s , a ) = \sin ( \pi s ) \Gamma ( s ) \zeta ( s , a ) .$ Since $\Gamma ( s ) \Gamma ( 1 - s ) = \pi / \sin \pi s$ this proves (6). □

# 12.5 The analytic continuation of the Hurwitz zeta function

In the equation $\zeta ( s , a ) = \Gamma ( 1 - s ) I ( s , a ) ;$ valid for $\sigma > 1$ , the functions $I ( s , a )$ and $\Gamma ( 1 - s )$ are meaningful for every complex $s$ . Therefore we can use this equation to define $\zeta ( s , a )$ for $\sigma \leq 1$

Definition If $\sigma \leq 1$ we defi ne $\zeta ( s , a )$ by the equation

$$
\zeta ( s , a ) = \Gamma ( 1 - s ) I ( s , a ) .
$$

This equation provides the analytic continuation of $\zeta ( s , a )$ in the entire $\mathbf { S }$ plane.

Theorem 12.4 The function $\zeta ( s , a )$ so defined is analytic for all s except for $\pmb { a }$ simple pole at $s = 1$ with residue 1.

PROOF. Since $I ( s , a )$ is entire the only possible singularities of $\zeta ( s , a )$ are the poles of $\Gamma ( 1 - s ) { \mathrm { } } $ that is, the points $s = 1 , 2 , 3 ,$ ... But Theorem 12.1 shows that $\zeta ( s , a )$ is analytic at $s = 2 , 3 , \ldots$ so $s = 1$ is the only possible pole of $\zeta ( s , a )$ (

Now we show that there is a pole at $s = 1$ with residue 1. If $s$ is any integer, say $s = n$ , the integrand in the contour integral for $I ( s , a )$ takes the same values on $C _ { 1 }$ as on $C _ { 3 }$ and hence the integrals along $C _ { 1 }$ and $C _ { 3 }$ cancel, leaving

$$
I ( n , a ) = \frac { 1 } { 2 \pi i } \int _ { C _ { 2 } } \frac { z ^ { n - 1 } e ^ { a z } } { 1 - e ^ { z } } d z = \operatorname { R e s } \frac { z ^ { n - 1 } e ^ { a z } } { 1 - e ^ { z } } .
$$

In particular when $s = 1$ we have

$$
I ( 1 , a ) = \mathop { \mathrm { R e s } } _ { z = 0 } \frac { e ^ { a z } } { 1 - e ^ { z } } = \operatorname* { l i m } _ { z \to 0 } \frac { z e ^ { a z } } { 1 - e ^ { z } } = \operatorname* { l i m } _ { z \to 0 } \frac { z } { 1 - e ^ { z } } = \operatorname* { l i m } _ { z \to 0 } \frac { - 1 } { e ^ { z } } = - 1 .
$$

To find the residue of $\zeta ( s , a )$ at $s = 1$ we compute the limit

$$
\begin{array} { l } { \operatorname* { l i m } _ { s  1 } ( s - 1 ) \zeta ( s , a ) = - \displaystyle \operatorname* { l i m } _ { s  1 } ( 1 - s ) \Gamma ( 1 - s ) I ( s , a ) = - I ( 1 , a ) \operatorname* { l i m } _ { s  1 } \Gamma ( 2 - s ) } \\ { \qquad = \Gamma ( 1 ) = 1 . } \end{array}
$$

This proves that $\zeta ( s , a )$ has a simple pole at $s = 1$ with residue 1.

Note. Since $\zeta ( s , a )$ is analytic at $s = 2 , 3 ,$ ... and $\Gamma ( 1 - s )$ has poles at these points, Equation (7) implies that $I ( s , a )$ vanishes at these points.

# 12.6 Analytic continuation of $\zeta ( s )$ and $L ( s , \chi )$

In the introduction we proved that for $\sigma > 1$ we have

$$
\zeta ( s ) = \zeta ( s , 1 )
$$

and

$$
L ( s , \chi ) = k ^ { - s } \sum _ { r = 1 } ^ { k } \chi ( r ) \zeta { \binom { r } { s } } , { \frac { r } { k } } \Biggr ) ,
$$

where $\chi$ is any Dirichlet character mod $k$ . Now we use these formulas as defi nitions of the functions $\zeta ( s )$ and $L ( s , \chi )$ for $\sigma \leq 1$ . In this way we obtain the analytic continuation of $\zeta ( s )$ and $L ( s , \chi )$ beyond the line $\sigma = 1$ .

Theorem 12.5 (a) The Riemann zeta function $\zeta ( s )$ is analytic everywhere except for a simple pole at $s = 1$ with residue 1. (b) For the principal character $\chi _ { 1 }$ mod $k ,$ the L-function $L ( s , \chi _ { 1 } )$ is analytic everywhere except for a simple pole at $s = 1$ with residue $\varphi ( k ) / k$ . (c) $I f \chi \neq \chi _ { 1 }$ , $L ( s , \chi )$ is an entire function of $\pmb { S } .$ d

ProoF. Part (a) follows at once from Theorem 12.4. To prove (b) and (c) we use the relation

$$
\sum _ { r { \bmod { k } } } \chi ( r ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f ~ } } \chi \neq \chi _ { 1 } , } \\ { \varphi ( k ) } & { { \mathrm { i f ~ } } \chi = \chi _ { 1 } . } \end{array} \right. }
$$

Since $\zeta ( s , r / k )$ has a simple pole at $s = 1$ with residue 1, the function $\chi ( r ) \zeta ( s , r / k )$ has a simple pole at $s = 1$ with residue $\chi ( r ) .$ Therefore

$$
\begin{array} { r l } & { { \tt R e s \ } L ( s , \chi ) = \displaystyle \operatorname* { l i m } _ { s  1 } ( s - 1 ) L ( s , \chi ) = \displaystyle \operatorname* { l i m } _ { s  1 } ( s - 1 ) k ^ { - s } \sum _ { r = 1 } ^ { k } \chi ( r ) \zeta \Bigg ( s , \frac { r } { k } \Bigg ) } \\ & { \quad \quad = \displaystyle \frac { 1 } { k } \sum _ { r = 1 } ^ { k } \chi ( r ) = \{ \begin{array} { l l } { 0 } & { \mathrm { i f } \ \chi \neq \chi _ { 1 } , } \\ { \displaystyle \frac { \varphi ( k ) } { k } } & { \mathrm { i f } \ \chi = \chi _ { 1 } . } \end{array}  } \end{array}
$$

# 12.7 Hurwitz's formula for $\zeta ( s , a )$

The function $\zeta ( s , a )$ was originally defined for $\sigma > 1$ by an infinite series. Hurwitz obtained another series representation for $\zeta ( s , a )$ valid in the halfplane $\sigma < 0 .$ Before we state this formula we discuss a lemma that will be used in its proof.

Lemma 1 Let $s ( r )$ denote the region that remains when we remove from the z-plane all open circular disks of radius $r , \ 0 < r < \pi ,$ with centers at $z = 2 n \pi i$ , $n = 0$ ,±1, ±2,...Then $i f 0 < a \le 1$ the function

$$
g ( z ) = { \frac { e ^ { a z } } { 1 - e ^ { z } } }
$$

is bounded in $s ( r )$ . (The bound depends on $r$ )

PROOF. Write $z = x + i y$ and consider the punctured rectangle

$$
Q ( r ) = \{ z : | x | \leq 1 , | y | \leq \pi , | z | \geq r \} ,
$$

shown in Figure 12.2.

![](images/dd0b7ece229a56daaf6940d2d2f641400ceefbaa9c41f93d7b52c28f26fb7733.jpg)  
Figure 12.2

This is a compact set ${ \mathfrak { s o } } g$ is bounded on $Q ( r ) .$ Also, since $\vert g ( z + 2 \pi i ) \vert =$ $| g ( z ) | , g$ is bounded in the punctured infinite strip

$$
\{ z : | x | \leq 1 , | z - 2 n \pi i | \geq r , n = 0 , \pm 1 , \pm 2 , \ldots \} .
$$

Now we show that $g$ is bounded outside this strip. Suppose $| x | \ge 1$ and consider

$$
| g ( z ) | = \left| { \frac { e ^ { a z } } { 1 - e ^ { z } } } \right| = { \frac { e ^ { a x } } { | 1 - e ^ { z } | } } \leq { \frac { e ^ { a x } } { | 1 - e ^ { x } | } } .
$$

For $x \ge 1$ we have $| 1 - e ^ { x } | = e ^ { x } - 1$ and $e ^ { a x } \leq e ^ { x }$ so

$$
| g ( z ) | \leq { \frac { e ^ { x } } { e ^ { x } - 1 } } = { \frac { 1 } { 1 - e ^ { - x } } } \leq { \frac { 1 } { 1 - e ^ { - 1 } } } = { \frac { e } { e - 1 } } .
$$

Also, when $x \leq - 1$ we have $| 1 - e ^ { { \boldsymbol { { x } } } } | = 1 - e ^ { { \boldsymbol { { x } } } } \colon$ 60

$$
| g ( z ) | \leq { \frac { e ^ { a x } } { 1 - e ^ { x } } } \leq { \frac { 1 } { 1 - e ^ { x } } } \leq { \frac { 1 } { 1 - e ^ { - 1 } } } = { \frac { e } { e - 1 } } .
$$

Therefore $| g ( z ) | \leq e / ( e - 1 )$ for $\left| x \right| \geqslant 1$ and the proof of the lemma is complete. □

We turn now to Hurwitz's formula. This involves another Dirichlet series $F ( x , s )$ given by

$$
F ( x , s ) = \sum _ { n = 1 } ^ { \infty } { \frac { e ^ { 2 \pi i n x } } { n ^ { s } } } ,
$$

where $x$ is real and $\sigma > 1$ . Note that $F ( x , s )$ is a periodic function of $x$ with period 1 and that $F ( 1 , s ) = \zeta ( s )$ . The series converges absolutely if $\sigma > 1$ . If $x$ is not an integer the series also converges (conditionally) for $\sigma > 0$ because for each fixed nonintegral $x$ the coeficients have bounded partial sums.

Note. We shall refer to $F ( x , s )$ as the periodic zeta function.

Theorem 12.6 Hurwitz's formula. If $\mathbf { 0 } < a \le 1$ and $\sigma > 1$ we have

$$
\zeta ( 1 - s , a ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \{ e ^ { - \pi i s / 2 } F ( a , s ) + e ^ { \pi i s / 2 } F ( - a , s ) \} .
$$

${ I f a \neq 1 }$ this representation is also valid for $\sigma > 0$

PRooF. Consider the function

$$
I _ { \scriptscriptstyle N } ( s , a ) = { \frac { 1 } { 2 \pi i } } \int _ { \cal C ( N ) } { \frac { z ^ { s - 1 } e ^ { a z } } { 1 - e ^ { z } } } d z ,
$$

where $C ( N )$ is the contour shown in Figure 12.3, $N$ being an integer.

12: The functions $\zeta ( s )$ and $L ( s , \chi )$

![](images/b2b1d08fa1465cdf0b5cd89c7f4204e39dba49169aac95f8e0e69ad3f82acbfd.jpg)  
Figure 12.3

First we prove that $\begin{array} { r } { \operatorname* { l i m } _ { N \to \infty } I _ { N } ( s , a ) = I ( s , a ) } \end{array}$ if $\sigma < 0$ For this it sufices to show that the integral along the outer circle tends to 0 as $N \to \infty$ .

On the outer circle we have $z = R e ^ { i \theta }$ , $- \pi \leq \theta \leq \pi$ hence

$$
| z ^ { s - 1 } | = | R ^ { s - 1 } e ^ { i \theta ( s - 1 ) } | = R ^ { \sigma - 1 } e ^ { - t \theta } \leq R ^ { \sigma - 1 } e ^ { \pi | t | } .
$$

Since the outer circle lies in the set $S ( r )$ of Lemma 1, the integrand is bounded by $A e ^ { \pi | t | } R ^ { \sigma - 1 }$ , where $A$ is the bound for $| g ( z ) |$ implied by Lemma 1; hence the integral is bounded by

$$
2 \pi A e ^ { \pi | t | } R ^ { \sigma } ,
$$

and this $\bf \Pi \to 0$ as $R \to \infty$ if $\sigma < 0 .$ Therefore, replacing $\pmb { S }$ by $1 - s$ we see that

$$
\operatorname* { l i m } _ { N  \infty } I _ { N } ( 1 - s , a ) = I ( 1 - s , a ) \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

Now we compute $I _ { N } ( 1 - s , a )$ explicitly by Cauchy's residue theorem. We have

$$
I _ { N } ( 1 - s , a ) = - \sum _ { \stackrel { n = - N } { n \neq 0 } } ^ { N } R ( n ) = - \sum _ { n = 1 } ^ { N } \{ R ( n ) + R ( - n ) \}
$$

where

$$
R ( n ) = \operatorname { R e s } _ { z = 2 n \pi i } \left( { \frac { z ^ { - s } e ^ { a z } } { 1 - e ^ { z } } } \right) .
$$

Now

$$
R ( n ) = \operatorname* { l i m } _ { z  2 n \pi i } ( z - 2 n \pi i ) \frac { z ^ { - s } e ^ { a z } } { 1 - e ^ { z } } = \frac { e ^ { 2 n \pi i a } } { ( 2 n \pi i ) ^ { s } } \operatorname* { l i m } _ { z  2 n \pi i } \frac { z - 2 n \pi i } { 1 - e ^ { z } } = - \frac { e ^ { 2 n \pi i a } } { ( 2 n \pi i ) ^ { s } } ,
$$

# 12.8: The functional equation for the Riemann zeta function

hence

$$
I _ { N } ( 1 - s , a ) = \sum _ { n = 1 } ^ { N } \frac { e ^ { 2 n \pi i a } } { ( 2 n \pi i ) ^ { s } } + \sum _ { n = 1 } ^ { N } \frac { e ^ { - 2 n \pi i a } } { ( - 2 n \pi i ) ^ { s } } .
$$

But $i ^ { - s } = e ^ { - \pi i s / 2 }$ and $( - i ) ^ { - s } = e ^ { \pi i s / 2 }$

$$
I _ { N } ( 1 - s , a ) = \frac { e ^ { - \pi i s / 2 } } { ( 2 \pi ) ^ { s } } \sum _ { n = 1 } ^ { N } \frac { e ^ { 2 n \pi i a } } { n ^ { s } } + \frac { e ^ { \pi i s / 2 } } { ( 2 \pi ) ^ { s } } \sum _ { n = 1 } ^ { N } \frac { e ^ { - 2 n \pi i a } } { n ^ { s } } .
$$

Letting $N \to \infty$ and using (11) we obtain

$$
I ( 1 - s , a ) = \frac { e ^ { - \pi i s / 2 } } { ( 2 \pi ) ^ { s } } F ( a , s ) + \frac { e ^ { \pi i s / 2 } } { ( 2 \pi ) ^ { s } } F ( - a , s ) .
$$

Hence

$$
\zeta ( 1 - s , a ) = \Gamma ( s ) I ( 1 - s , a ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \{ e ^ { - \pi i s / 2 } F ( a , s ) + e ^ { \pi i s / 2 } F ( - a , s ) \} .
$$

# 12.8 The functional equation for the Riemann zeta function

The first application of Hurwitz's formula is Riemann's functional equation for $\zeta ( s )$

Theorem 12.7 For all s we have

$$
\zeta ( 1 - s ) = 2 ( 2 \pi ) ^ { - s } \Gamma ( s ) \mathrm { c o s } \biggl ( \frac { \pi s } { 2 } \biggr ) \zeta ( s )
$$

or, equivalently,

$$
\zeta ( s ) = 2 ( 2 \pi ) ^ { s - 1 } \Gamma ( 1 - s ) \mathrm { s i n } \biggl ( \frac { \pi s } { 2 } \biggr ) \zeta ( 1 - s ) .
$$

PROOF. Taking $a = 1$ in the Hurwitz formula we obtain, for $\sigma > 1$ ,d

$$
\zeta ( 1 - s ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \left\{ e ^ { - \pi i s / 2 } \zeta ( s ) + e ^ { \pi i s / 2 } \zeta ( s ) \right\} = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } 2 \cos \Biggl ( \frac { \pi s } { 2 } \Biggr ) \zeta ( s ) .
$$

This proves (12) for $\sigma > 1$ and the result holds for all $s$ by analytic continuation. To deduce (13) from (12) replace $\pmb { S }$ by $1 - s .$ ,d

Note. Taking $s = 2 n + 1$ in (12) where $n = 1 , 2 , 3 , \ldots$ , the factor $\cos ( \pi s / 2 )$ vanishes and we find the so-called trivial zeros of $\zeta ( s )$ ,

$$
\zeta ( - 2 n ) = 0 \quad \mathrm { f o r } n = 1 , 2 , 3 , \ldots
$$

The functional equation can be put in a simpler form if we use Legendre's duplication formula for the gamma function,

$$
2 \pi ^ { 1 / 2 } 2 ^ { - 2 s } \Gamma ( 2 s ) = \Gamma ( s ) \Gamma \biggl ( s + \frac { 1 } { 2 } \biggr ) ,
$$

which is the special case $m = 2$ of Equation (4). When $\pmb { S }$ is replaced by $( 1 - s ) / 2$ this becomes

$$
2 ^ { s } \pi ^ { 1 / 2 } \Gamma ( 1 - s ) = \Gamma \bigg ( \frac { 1 - s } { 2 } \bigg ) \Gamma \bigg ( 1 - \frac { s } { 2 } \bigg ) .
$$

Since

$$
\Gamma \left( { \frac { s } { 2 } } \right) \Gamma \left( 1 - { \frac { s } { 2 } } \right) = { \frac { \pi } { \displaystyle \sin { \frac { \pi s } { 2 } } } }
$$

this gives us

$$
\Gamma ( 1 - s ) \sin \frac { \pi s } { 2 } = \frac { 2 ^ { - s } \pi ^ { 1 / 2 } \Gamma \Big ( \frac { 1 - s } { 2 } \Big ) } { \Gamma \Big ( \frac { s } { 2 } \Big ) } .
$$

Using this to replace the product $\Gamma ( 1 - s ) \sin ( \pi s / 2 )$ in (13) we obtain

$$
\pi ^ { - s / 2 } \Gamma \biggl ( \frac { s } { 2 } \biggr ) \zeta ( s ) = \pi ^ { - ( 1 - s ) / 2 } \Gamma \biggl ( \frac { 1 - s } { 2 } \biggr ) \zeta ( 1 - s ) .
$$

In other words, the functional equation takes the form

$$
\Phi ( s ) = \Phi ( 1 - s ) ,
$$

where

$$
\Phi ( s ) = \pi ^ { - s / 2 } \Gamma \biggl ( \frac { s } { 2 } \biggr ) \zeta ( s ) .
$$

The function $\Phi ( s )$ has simple poles at $s = 0$ and $s = 1$ . Following Riemann, we multiply $\Phi ( s )$ by $s ( s - 1 ) / 2$ to remove the poles and define

$$
\zeta ( s ) = { \frac { 1 } { 2 } } s ( s - 1 ) \Phi ( s ) .
$$

Then $\xi ( s )$ is an entire function of $\pmb { S }$ and satisfies the functional equation

$$
\xi ( s ) = \xi ( 1 - s ) .
$$

# 12.9 A functional equation for the Hurwitz zeta function

The functional equation for $\zeta ( s )$ is a special case of a functional equation for $\zeta ( s , a )$ when $\pmb { a }$ is rational.

Theorem 12.8 If $h$ and $k$ are integers, $1 \leq h \leq k$ , then for all s we have

$$
\zeta { \biggl ( } 1 - s , { \frac { h } { k } } { \biggr ) } = { \frac { 2 \Gamma ( s ) } { ( 2 \pi k ) ^ { s } } } \sum _ { r = 1 } ^ { k } \cos { \biggl ( } { \frac { \pi s } { 2 } } - { \frac { 2 \pi r h } { k } } { \biggr ) } \zeta { \biggl ( } s , { \frac { r } { k } } { \biggr ) } .
$$

ProoF. This comes from the fact that the function $F ( x , s )$ is a linear combination of Hurwitz zeta functions when $x$ is rational. In fact, if $x = h / k$ we can rearrange the terms in (9) according to the residue classes mod $k$ by writing

$$
n = q k + r , { \mathrm { ~ w h e r e ~ } } 1 \leq r \leq k { \mathrm { ~ a n d ~ } } q = 0
$$

This gives us, for $\sigma > 1$ ,

$$
\begin{array} { l } { { \displaystyle F \bigg ( \frac { h } { k } , s \bigg ) = \sum _ { n = 1 } ^ { \infty } \frac { e ^ { 2 \pi i n h / k } } { n ^ { s } } = \sum _ { r = 1 } ^ { k } \sum _ { q = 0 } ^ { \infty } \frac { e ^ { 2 \pi i r h / k } } { ( q k + r ) ^ { s } } = \frac { 1 } { k ^ { s } } \sum _ { r = 1 } ^ { k } e ^ { 2 \pi i r h / k } \sum _ { q = 0 } ^ { \infty } \frac { 1 } { \bigg ( q + \frac { r } { k } \bigg ) ^ { s } } } } \\ { { \displaystyle ~ = k ^ { - s } \sum _ { r = 1 } ^ { k } e ^ { 2 \pi i r h / k } \zeta \bigg ( s , \frac { r } { k } \bigg ) } . } \end{array}
$$

Therefore if we take $a = h / k$ in Hurwitz's formula we obtain

$$
\begin{array} { c } { { \zeta \biggl ( 1 - s , \displaystyle \frac { h } { k } \biggr ) = \displaystyle \frac { \Gamma ( s ) } { ( 2 \pi k ) ^ { s } } \sum _ { r = 1 } ^ { k } ( e ^ { - \pi i s / 2 } e ^ { 2 \pi i r h / k } + e ^ { \pi i s / 2 } e ^ { - 2 \pi i r h / k } ) \zeta \biggl ( s , \displaystyle \frac { r } { k } \biggr ) } } \\ { { = \displaystyle \frac { 2 \Gamma ( s ) } { ( 2 \pi k ) ^ { s } } \sum _ { r = 1 } ^ { k } \cos \biggl ( \displaystyle \frac { \pi s } { 2 } - \displaystyle \frac { 2 \pi r h } { k } \biggr ) \zeta \biggl ( s , \displaystyle \frac { r } { k } \biggr ) , } } \end{array}
$$

which proves (14) for $\sigma > 1 .$ The result holds for alls by analytic continuation.

It should be noted that when $h = k = 1$ there is only one term in the sum in (14) and we obtain Riemann's functional equation.

# 12.10 The functional equation for $L$ -functions

Hurwitz's formula can also be used to deduce a functional equation for the Dirichlet $L$ -functions. First we show that it sufices to consider only the primitive characters mod $k$

Theorem 12.9 Let $\chi$ be any Dirichlet character mod $k _ { i }$ let $d$ be any induced modulus, and write

$$
\chi ( n ) = \psi ( n ) \chi _ { 1 } ( n ) ,
$$

where $\psi$ is a character mod $d$ and $\chi _ { 1 }$ is the principal character mod $k$ .Then for all s we have

$$
L ( s , \chi ) = L ( s , \psi ) \prod _ { p \mid k } { \Bigg ( } 1 - { \frac { \psi ( p ) } { p ^ { s } } } { \Bigg ) } .
$$

PRoOF. First keep $\sigma > 1$ and use the Euler product

$$
L ( s , \chi ) = \prod _ { p } \frac { 1 } { 1 - \frac { \chi ( p ) } { p ^ { s } } } .
$$

Since $\chi ( p ) = \psi ( p ) \chi _ { 1 } ( p )$ and since $\chi _ { 1 } ( p ) = 0$ if $p | k$ and $\chi _ { 1 } ( p ) = 1$ if $p \nmid k$ we find

$$
\begin{array} { l } { { \displaystyle { \cal L } ( s , \chi ) = \prod _ { p \nearrow k } \displaystyle \frac { 1 } { 1 - \displaystyle \frac { \psi ( p ) } { p ^ { s } } } = \prod _ { p } \displaystyle \frac { 1 } { 1 - \displaystyle \frac { \psi ( p ) } { p ^ { s } } } \cdot \prod _ { p \lfloor k } \left( 1 - \displaystyle \frac { \psi ( p ) } { p ^ { s } } \right) } } \\ { { \displaystyle ~ = { \cal L } ( s , \psi ) \prod _ { p \lfloor k } \left( 1 - \displaystyle \frac { \psi ( p ) } { p ^ { s } } \right) } . } \end{array}
$$

This proves the theorem for $\sigma > 1$ and we extend it to all s by analytic continuation. □

Note. If we choose $d$ in the foregoing theorem to be the conductor of $\chi .$ , then $\psi$ is a primitive character modulo $d .$ This shows that every $L$ -series $L ( s , \chi )$ is equal to the $L$ -series $L ( s , \psi )$ of a primitive character, multiplied by a fi nite number of factors.

To deduce the functional equation for $L$ -functions from Hurwitz's formula we fi rst express $L ( s , \chi )$ in terms of the periodic zeta function $F ( x , s )$

Theorem 12.10 Let $\chi$ be ${ \pmb a }$ primitive character mod $k$ . Then for $\sigma > 1$ we have

$$
G ( 1 , \bar { \chi } ) L ( s , \chi ) = \sum _ { h = 1 } ^ { k } \bar { \chi } ( h ) F \bigg ( \frac { h } { k } , s \bigg ) ,
$$

where $G ( m , \chi )$ is the Gauss sum associated with $\chi ,$

$$
G ( m , \chi ) = \sum _ { r = 1 } ^ { k } \chi ( r ) e ^ { 2 \pi i r m / k } .
$$

PROOF. Take $x = h / k$ in (9), multiply by $\bar { \chi } ( h )$ and sum on $h$ to obtain

$$
\begin{array} { l } { { \displaystyle \sum _ { h = 1 } ^ { k } \bar { \chi } ( h ) F \bigg ( \frac { h } { k } , s \bigg ) = \sum _ { h = 1 } ^ { k } \sum _ { n = 1 } ^ { \infty } \bar { \chi } ( h ) e ^ { 2 \pi i n h / k } n ^ { - s } = \sum _ { n = 1 } ^ { \infty } n ^ { - s } \sum _ { h = 1 } ^ { k } \bar { \chi } ( h ) e ^ { 2 \pi i n h / k } } } \\ { { = \displaystyle \sum _ { n = 1 } ^ { \infty } n ^ { - s } G ( n , \bar { \chi } ) . } } \end{array}
$$

But $G ( n , { \bar { \chi } } )$ is separable because $\bar { \chi }$ is primitive, so $G ( n , \bar { \chi } ) = \chi ( n ) G ( 1 , \bar { \chi } )$ hence

$$
\sum _ { h = 1 } ^ { k } \bar { \chi } ( h ) F \bigg ( \frac { h } { k } , s \bigg ) = G ( 1 , \bar { \chi } ) \sum _ { n = 1 } ^ { \infty } \chi ( n ) n ^ { - s } = G ( 1 , \bar { \chi } ) L ( s , \chi ) .
$$

Theorem 12.11 Functional equation for Dirichlet $L$ -functions. If $\chi$ is any primitive character mod $k$ then for all s we have

$$
L ( 1 - s , \chi ) = \frac { k ^ { s - 1 } \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \{ e ^ { - \pi i s / 2 } + \chi ( - 1 ) e ^ { \pi i s / 2 } \} G ( 1 , \chi ) L ( s , \bar { \chi } ) .
$$

PRoor. We take $x = h / k$ in Hurwitz's formula then multiply each member by $\chi ( h )$ and sum on $h$ . This gives us

$$
\begin{array} { c } { { { \displaystyle \sum _ { h = 1 } ^ { k } \chi ( h ) \zeta \biggl ( 1 - s , \frac { h } { k } \biggr ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \left\{ e ^ { - \pi i s / 2 } \sum _ { h = 1 } ^ { k } \chi ( h ) F \biggl ( \frac { h } { k } , s \biggr ) \right. } } } \\ { { { \displaystyle \qquad + \left. e ^ { \pi i s / 2 } \sum _ { h = 1 } ^ { k } \chi ( h ) F \biggl ( \frac { - h } { k } , s \biggr ) \right\} } . } } \end{array}
$$

Since $F ( x , s )$ is periodic in $x$ with period 1 and $\chi ( h ) = \chi ( - 1 ) \chi ( - h )$ we can write

$$
\begin{array} { l } { \displaystyle \sum _ { h \bmod k } \chi ( h ) F \biggl ( \frac { - h } { k } , s \biggr ) = \chi ( - 1 ) \sum _ { h \bmod k } \chi ( - h ) F \biggl ( \frac { - h } { k } , s \biggr ) } \\ { = \chi ( - 1 ) \sum _ { h \bmod k } \chi ( k - h ) F \biggl ( \frac { k - h } { k } , s \biggr ) } \\ { = \chi ( - 1 ) \sum _ { h \bmod k } \chi ( h ) F \biggl ( \frac { h } { k } , s \biggr ) , } \end{array}
$$

and the previous formula becomes

$$
\sum _ { h = 1 } ^ { k } \chi ( h ) \zeta \biggl ( 1 - s , \frac { h } { k } \biggr ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \left\{ e ^ { - \pi \mathrm { i } s / 2 } + \chi ( - 1 ) e ^ { \pi \mathrm { i } s / 2 } \right\} \sum _ { h = 1 } ^ { k } \chi ( h ) F \biggl ( \frac { h } { k } , s \biggr ) .
$$

Now we multiply both members by $k ^ { s - 1 }$ and use (15) to obtain (16).

# 12.11 Evaluation of $\zeta ( - n , a )$

The value of $\zeta ( - n , a )$ can be calculated explicitly if $\pmb { n }$ is a nonnegative integer. Taking $s = - n$ in the relation $\zeta ( s , a ) = \Gamma ( 1 - s ) I ( s , a )$ we find

$$
\zeta ( - n , a ) = \Gamma ( 1 + n ) I ( - n , a ) = n ! I ( - n , a ) .
$$

We also have

$$
I ( - n , a ) = \operatorname { R e s } _ { z = 0 } { \Bigg ( } { \frac { z ^ { - n - 1 } e ^ { \dot { a } z } } { 1 - e ^ { z } } } { \Bigg ) } .
$$

The calculation of this residue leads to an interesting class of functions known as Bernoulli polynomials.

Definition For any complex $x$ we define the functions $B _ { n } ( x )$ by the equation

$$
{ \frac { z e ^ { x z } } { e ^ { z } - 1 } } = \sum _ { n = 0 } ^ { \infty } { \frac { B _ { n } ( x ) } { n ! } } z ^ { n } , { \mathrm { w h e r e ~ } } | z | < 2 \pi .
$$

The numbers $B _ { n } ( 0 )$ are called Bernoulli numbers and are denoted by $B _ { \eta }$ . Thus,

$$
{ \frac { z } { e ^ { z } - 1 } } = \sum _ { n = 0 } ^ { \infty } { \frac { B _ { n } } { n ! } } z ^ { n } , { \mathrm { w h e r e ~ } } | z | < 2 \pi .
$$

Theorem 12.12 The functions $B _ { n } ( x )$ are polynomials in $x$ given by

$$
B _ { n } ( x ) = \sum _ { k = 0 } ^ { n } { \binom { n } { k } } B _ { k } x ^ { n - k } .
$$

PROOF. We have

$$
\sum _ { n = 0 } ^ { \infty } { \frac { B _ { n } ( x ) } { n ! } } z ^ { n } = { \frac { z } { e ^ { z } - 1 } } \cdot e ^ { x z } = { \biggl ( } \sum _ { n = 0 } ^ { \infty } { \frac { B _ { n } } { n ! } } z ^ { n } { \biggr ) } { \biggl ( } \sum _ { n = 0 } ^ { \infty } { \frac { x ^ { n } } { n ! } } z ^ { n } { \biggr ) } .
$$

Equating coeficients of $z ^ { n }$ we find

$$
{ \frac { B _ { n } ( x ) } { n ! } } = \sum _ { k = 0 } ^ { n } { \frac { B _ { k } } { k ! } } { \frac { x ^ { n - k } } { ( n - k ) ! } }
$$

from which the theorem follows.

Theorem 12.13 For every integer $n \geq 0$ we have

$$
\zeta ( - n , a ) = - \frac { B _ { n + 1 } ( a ) } { n + 1 } .
$$

Proor. As noted earlier, we have $\zeta ( - n , a ) = n ! I ( - n , a ) .$ Now

$$
\begin{array} { r l r } & { } & { I ( - n , a ) = { \tt R e s } \bigg ( \frac { z ^ { - n - 1 } e ^ { a z } } { 1 - e ^ { z } } \bigg ) = - { \tt R e s } \bigg ( z ^ { - n - 2 } \frac { z e ^ { a z } } { e ^ { z } - 1 } \bigg ) } \\ & { } & \\ & { } & { = - { \tt R e s } \bigg ( z ^ { - n - 2 } \sum _ { m = 0 } ^ { \infty } \frac { B _ { m } ( a ) } { m ! } z ^ { m } \bigg ) = - \frac { B _ { n + 1 } ( a ) } { ( n + 1 ) ! } , } \end{array}
$$

from which we obtain (17).

# 12.12 Properties of Bernoulli numbers and Bernoulli polynomials

Theorem 12.14 The Bernoulli polynomials $B _ { n } ( x )$ satisfy the difference equation

$$
B _ { n } ( x + 1 ) - B _ { n } ( x ) = n x ^ { n - 1 } \quad i f n \geq 1 .
$$

Therefore we have

$$
B _ { n } ( 0 ) = B _ { n } ( 1 ) \quad i f n \geq 2 .
$$

PRooF. We have the identity

$$
z { \frac { e ^ { ( x + 1 ) z } } { e ^ { z } - 1 } } - z { \frac { e ^ { x z } } { e ^ { z } - 1 } } = z e ^ { x z }
$$

from which we find

$$
\sum _ { n = 0 } ^ { \infty } \frac { B _ { n } ( x + 1 ) - B _ { n } ( x ) } { n ! } z ^ { n } = \sum _ { n = 0 } ^ { \infty } \frac { x ^ { n } } { n ! } z ^ { n + 1 } .
$$

Equating coeficients of $z ^ { n }$ we obtain (18). Taking $x = 0$ in (18) we obtain (19).

Theorem 12.15 If $\mathbf { \hat { \mu } } _ { n } \geq 2$ we have

$$
B _ { n } = \sum _ { k = 0 } ^ { n } { \binom { n } { k } } B _ { k } .
$$

PRooF. This follows by taking $x = 1$ in Theorem 12.12 and using (19).

Theorem 12. 15 gives arecursion formula for computing Bernoulli numbers. The definition gives $B _ { 0 } = 1$ , and Theorem 12.15 yields in succession the values

$$
\begin{array} { l l l l l } { { B _ { 0 } = 1 , \quad } } & { { B _ { 1 } = - { \displaystyle \frac { 1 } { 2 } } , \quad } } & { { B _ { 2 } = { \displaystyle \frac { 1 } { 6 } } , \quad } } & { { B _ { 3 } = 0 , \quad } } & { { B _ { 4 } = - { \displaystyle \frac { 1 } { 3 0 } } , } } \\ { { } } & { { } } & { { } } & { { } } \\ { { B _ { 5 } = 0 , \quad } } & { { B _ { 6 } = { \displaystyle \frac { 1 } { 4 2 } } , \quad } } & { { B _ { 7 } = 0 , \quad } } & { { B _ { 8 } = - { \displaystyle \frac { 1 } { 3 0 } } , \quad } } & { { B _ { 9 } = 0 , } } \end{array}
$$

$$
B _ { 1 0 } = \frac { 5 } { 6 6 } , \qquad B _ { 1 1 } = 0 .
$$

From a knowledge of the $B _ { k }$ we can compute the polynomials $B _ { n } ( x )$ by using Theorem 12.12. The first few are:

$$
B _ { 0 } ( x ) = 1 , \qquad B _ { 1 } ( x ) = x - \frac 1 2 , \qquad B _ { 2 } ( x ) = x ^ { 2 } - x + \frac 1 6 ,
$$

$$
B _ { 3 } ( x ) = x ^ { 3 } - \frac { 3 } { 2 } x ^ { 2 } + \frac { 1 } { 2 } x , \qquad B _ { 4 } ( x ) = x ^ { 4 } - 2 x ^ { 3 } + x ^ { 2 } - \frac { 1 } { 3 0 } .
$$

We observe that Theorems 12.12 and 12.15 can be written symbolically as follows :

$$
B _ { n } ( x ) = ( B + x ) ^ { n } , \qquad B _ { n } = ( B + 1 ) ^ { n } .
$$

In these symbolic formulas the right members are to be expanded by the binomial theorem, then each power $B ^ { k }$ is to be replaced by $B _ { k }$ .

Theorem 12.16 If $n \geq 0$ we have

$$
\zeta ( - n ) = - { \frac { B _ { n + 1 } } { n + 1 } } .
$$

Also, f $n \geq 1$ we have $\zeta ( - 2 n ) = 0$ ,hence $B _ { 2 n + 1 } = 0$

PRoOF. To evaluate $\zeta ( - n )$ we simply take $a = 1$ in Theorem 12.13. We have already noted that the functional equation

$$
\zeta ( 1 - s ) = 2 ( 2 \pi ) ^ { - s } \Gamma ( s ) \mathrm { c o s } \biggl ( \frac { \pi s } { 2 } \biggr ) \zeta ( s )
$$

implies $\zeta ( - 2 n ) = 0$ for $n \geq 1$ hence $B _ { 2 n + 1 } = 0$ by (20).

Note. The result $B _ { 2 n + 1 } = 0$ also follows by noting that the left member of

$$
\frac { z } { e ^ { z } - 1 } + \frac { 1 } { 2 } z = 1 + \sum _ { n = 2 } ^ { \infty } \frac { B _ { n } } { n ! } z ^ { n }
$$

is an even function of $z$

Theorem 12.17 $I f k$ is $\pmb { a }$ positive integer we have

$$
\zeta ( 2 k ) = ( - 1 ) ^ { k + 1 } \frac { ( 2 \pi ) ^ { 2 k } B _ { 2 k } } { 2 ( 2 k ) ! } .
$$

PROOF. We take $s \simeq 2 k$ in the functional equation for $\zeta ( s )$ to obtain

$$
\zeta ( 1 - 2 k ) = 2 ( 2 \pi ) ^ { - 2 k } \Gamma ( 2 k ) \mathrm { c o s } ( \pi k ) \zeta ( 2 k ) ,
$$

or

$$
- \frac { B _ { 2 k } } { 2 k } = 2 ( 2 \pi ) ^ { - 2 k } ( 2 k - 1 ) ! ( - 1 ) ^ { k } \zeta ( 2 k ) .
$$

This implies (22).

Note. If we put $s = 2 k + 1$ in (21) both members vanish and we get no information about $\zeta ( 2 k + 1 )$ . As yet no simple formula analogous to (22) is known for $\zeta ( 2 k + 1 )$ or even for any special case such as $\zeta ( 3 )$ . It is not even known whether $\zeta ( 2 k + 1 )$ is rational or irrational for any $k$

Theorem 12.18 The Bernoull numbers ${ \bar { B } } _ { 2 k }$ alternate in sign. That is,

$$
( - 1 ) ^ { k + 1 } B _ { 2 k } > 0 .
$$

Moreover, $| B _ { 2 k } |  \infty$ as $k  \infty$ . In fact

$$
( - 1 ) ^ { k + 1 } B _ { 2 k } \sim \frac { 2 ( 2 k ) ! } { ( 2 \pi ) ^ { 2 k } } \quad a s k \to \infty .
$$

PROOF. Since $\zeta ( 2 k ) > 0 .$ (22) shows that the numbers $B _ { 2 k }$ alternate in sign. The asymptotic relation (23) follows from the fact that $\zeta ( 2 k ) \to 1$ as $k \to \infty$

Note. From (23) it follows that $| B _ { 2 k + 2 } / B _ { 2 k } | \sim k ^ { 2 } / \pi ^ { 2 } ~ { \sf a s } ~ k  \infty$ . Also, by invoking Stirling's formula, $n ! \sim ( n / e ) ^ { n } { \sqrt { 2 \pi n } }$ we find

$$
( - 1 ) ^ { k + 1 } B _ { 2 k } \sim 4 \pi \sqrt { e } \biggl ( { \frac { k } { \pi e } } \biggr ) ^ { 2 k + 1 / 2 } \quad \mathrm { a s ~ } k \to \infty .
$$

The next theorem gives the Fourier expansion of the polynomial $B _ { n } ( x )$ in the interval $0 < x \leq 1$ .

Theorem 12.19 I $f 0 < x \leq 1$ we have

$$
B _ { n } ( x ) = - \frac { n ! } { ( 2 \pi i ) ^ { n } } \sum _ { { k = - \infty } \atop { k \neq 0 } } ^ { + \infty } \frac { e ^ { 2 \pi i k x } } { k ^ { n } } ,
$$

and hence

$$
\begin{array} { c } { { \displaystyle B _ { 2 n } ( x ) = ( - 1 ) ^ { n + 1 } \frac { 2 ( 2 n ) ! } { ( 2 \pi ) ^ { 2 n } } \sum _ { k = 1 } ^ { \infty } \frac { \cos 2 \pi k x } { k ^ { 2 n } } , } } \\ { { \displaystyle B _ { 2 n + 1 } ( x ) = ( - 1 ) ^ { n + 1 } \frac { 2 ( 2 n + 1 ) ! } { ( 2 \pi ) ^ { 2 n + 1 } } \sum _ { k = 1 } ^ { \infty } \frac { \sin 2 \pi k x } { k ^ { 2 n + 1 } } . } } \end{array}
$$

PRooF. Equation (24) follows at once by taking $s = n$ in Hurwitz's formula and applying Theorem 12.13. The other two formulas are special cases of (24).

Note. The function $\textstyle { \overline { { B } } } _ { n } ( x )$ defined for all real $x$ by the right member of (24) is called the nth Bernoulli periodic function. It is periodic with period 1 and agrees with the Bernoulli polynomial $B _ { n } ( x )$ in the interval $0 < x \leq 1$ Thus we have

$$
{ \overline { { B } } } _ { n } ( x ) = B _ { n } ( x - [ x ] ) .
$$

# 12.13 Formulas for $L ( 0 , \chi )$

Theorem 12.13 implies

$$
\zeta ( 0 , a ) = - B _ { 1 } ( a ) = { \frac { 1 } { 2 } } - a .
$$

In particular $\zeta ( 0 ) = \zeta ( 0 , 1 ) = - 1 / 2$ We can also calculate $L ( 0 , \chi )$ for every Dirichlet character $\chi$

Theorem 12.20 Let x be any Dirichlet character mod $k$ -

(a) $I f \chi = \chi _ { 1 }$ (the principal character), then $L ( 0 , \chi _ { 1 } ) = 0$ (b) $I f \chi \neq \chi _ { 1 }$ we have

$$
L ( 0 , \chi ) = - \frac { 1 } { k } \sum _ { r = 1 } ^ { k } r \chi ( r ) .
$$

Moreover, $L ( 0 , \chi ) = 0 i f \chi ( - 1 ) = 1 .$

PROOF. If $\chi = \chi _ { 1 }$ we use the formula

$$
L ( s , \chi _ { 1 } ) = \zeta ( s ) \prod _ { p \mid k } ( 1 - p ^ { - s } )
$$

proved for $\sigma > 1$ in Chapter 11. This also holds for al $\pmb { S }$ by analytic continuation. When $s = 0$ the product vanishes so $L ( 0 , \chi _ { 1 } ) = 0$

If $\chi \neq \chi _ { 1 }$ we have

$$
L ( 0 , \chi ) = \sum _ { r = 1 } ^ { k } \chi ( r ) \zeta { \binom { r } { 0 , } } = \sum _ { r = 1 } ^ { k } \chi ( r ) { \binom { 1 } { 2 } } - { \frac { r } { k } } \bigg ) = - { \frac { 1 } { k } } \sum _ { r = 1 } ^ { k } r \chi ( r ) .
$$

Now

$$
\begin{array} { l } { { \displaystyle \sum _ { r = 1 } ^ { k } r \chi ( r ) = \sum _ { r = 1 } ^ { k } ( k - r ) \chi ( k - r ) = k \sum _ { r = 1 } ^ { k } \chi ( k - r ) - \sum _ { r = 1 } ^ { k } r \chi ( - r ) } } \\ { { = - \chi ( - 1 ) \sum _ { r = 1 } ^ { k } r \chi ( r ) . } } \end{array}
$$

Therefore if $\chi ( - 1 ) = 1$ we have $\sum _ { r = 1 } ^ { k } r \chi ( r ) = 0 .$

# 12.14 Approximation of $\zeta ( s , a )$ by finite sums

Some applications require estimates on the rate of growth of $\zeta ( \sigma + i t , a )$ asa function of $t .$ . These will be deduced from another representation of $\zeta ( s , a )$ obtained from Euler's summation formula. This relates $\zeta ( s , a )$ to the partial sums of its series in the half-plane $\sigma > 0$ and also gives an alternate way to extend $\zeta ( s , a )$ analytically beyond the line $\sigma = 1$ .

Theorem 12.21 For any integer $N \geq 0$ and $\sigma > 0$ we have

$$
\zeta ( s , a ) = \sum _ { n = 0 } ^ { N } { \frac { 1 } { ( n + a ) ^ { s } } } + { \frac { ( N + a ) ^ { 1 - s } } { s - 1 } } - s \int _ { N } ^ { \infty } { \frac { x - [ x ] } { ( x + a ) ^ { s + 1 } } } d x .
$$

PRooF. We apply Euler's summation formula (Theorem 3.1) with $f ( t ) =$ $( t + a ) ^ { - s }$ and with integers $\boldsymbol { x }$ and $y$ to obtain

$$
\sum _ { y < n \leq x } { \frac { 1 } { ( n + a ) ^ { s } } } = \int _ { y } ^ { x } { \frac { d t } { ( t + a ) ^ { s } } } - s \int _ { y } ^ { x } { \frac { t - [ t ] } { ( t + a ) ^ { s + 1 } } } d t .
$$

Take $y = N$ and let $x \to \infty$ , keeping $\sigma > 1 .$ This gives us

$$
\sum _ { n = N + 1 } ^ { \infty } { \frac { 1 } { ( n + a ) ^ { s } } } = \int _ { N } ^ { \infty } { \frac { d t } { ( t + a ) ^ { s } } } - s \int _ { N } ^ { \infty } { \frac { t - [ t ] } { ( t + a ) ^ { s + 1 } } } d t ,
$$

or

$$
\zeta ( s , a ) - \sum _ { n = 0 } ^ { N } { \frac { 1 } { ( n + a ) ^ { s } } } = { \frac { ( N + a ) ^ { 1 - s } } { s - 1 } } - s \int _ { N } ^ { \infty } { \frac { t - [ t ] } { ( t + a ) ^ { s + 1 } } } d t .
$$

This proves (25) for $\sigma > 1$ If $\sigma \ge \delta > 0$ the integral is dominated by $\int _ { N } ^ { \infty } ( t + a ) ^ { - \delta - 1 }$ dt so it converges uniformly for ${ \pmb \sigma } \geq \delta$ and hence represents an analytic function in the half-plane $\sigma > 0 .$ Therefore (25) holds for $\sigma > 0$ by analytic continuation. □

The integral on the right of (25) can also be written as a series. We split the integral into a sum of integrals in which $[ x ]$ is constant, say $[ x ] = n ,$ and we obtain

$$
\int _ { N } ^ { \infty } { \frac { x - [ x ] } { ( x + a ) ^ { s + 1 } } } d x = \sum _ { n = N } ^ { \infty } \int _ { n } ^ { n + 1 } { \frac { x - n } { ( x + a ) ^ { s + 1 } } } d x = \sum _ { n = N } ^ { \infty } \int _ { 0 } ^ { 1 } { \frac { u } { ( u + n + a ) ^ { s + 1 } } } d u .
$$

Therefore (25) can also be written in the form

$$
\zeta ( s , a ) - \sum _ { n = 0 } ^ { N } { \frac { 1 } { ( n + a ) ^ { s } } } = { \frac { ( N + a ) ^ { 1 - s } } { s - 1 } } - s \sum _ { n = N } ^ { \infty } \int _ { 0 } ^ { 1 } { \frac { u } { ( u + n + a ) ^ { s + 1 } } } d u
$$

if $\sigma > 0 .$ Integration by parts leads to similar representations in successively larger half-planes, as indicated in the next theorem.

Theorem 12.22 1 $f \sigma > - 1$ we have

$$
\begin{array} { c l c r } { \displaystyle \zeta ( s , a ) - \sum _ { n = 0 } ^ { N } \frac { 1 } { ( n + a ) ^ { s } } = \frac { ( N + a ) ^ { 1 - s } } { s - 1 } } \\ { \displaystyle - \frac { s } { 2 ! } \left. \zeta ( s + 1 , a ) - \sum _ { n = 0 } ^ { N } \frac { 1 } { ( n + a ) ^ { s + 1 } } \right. } \\ { \displaystyle - \frac { s ( s + 1 ) } { 2 ! } \sum _ { n = N } ^ { \infty } \int _ { 0 } ^ { 1 } \frac { u ^ { 2 } } { ( n + a + u ) ^ { s + 2 } } d u . } \end{array}
$$

More generally, $j \sigma > - m$ where $m = 1 , 2 , 3 , \ldots$ , we have

$$
\begin{array} { l } { { \zeta ( s , a ) - \displaystyle \sum _ { n = 0 } ^ { N } { \displaystyle \frac { 1 } { ( n + a ) ^ { s } } } = { \displaystyle \frac { ( N + a ) ^ { 1 - s } } { s - 1 } } - \displaystyle \sum _ { r = 1 } ^ { m } { \displaystyle \frac { s ( s + 1 ) \cdots ( s + r - 1 ) } { ( r + 1 ) ! } } } } \\ { { \mathrm { } \qquad \times \left. \displaystyle \zeta ( s + r , a ) - \displaystyle \sum _ { n = 0 } ^ { N } { \displaystyle \frac { 1 } { ( n + a ) ^ { s + r } } } \right. } } \\ { { \mathrm { } \qquad - \displaystyle \frac { s ( s + 1 ) \cdots ( s + m ) } { ( m + 1 ) ! } } } \\ { { \mathrm { } \qquad \times \displaystyle \sum _ { n = N } ^ { \infty } \displaystyle \int _ { 0 } ^ { 1 } { \displaystyle \frac { u ^ { m + 1 } } { ( n + a + u ) ^ { s + m + 1 } } } d u . } } \end{array}
$$

PRooF. Integration by parts implies

$$
\int { \frac { u d u } { ( n + a + u ) ^ { s + 1 } } } = { \frac { u ^ { 2 } } { 2 ( n + a + u ) ^ { s + 1 } } } + { \frac { s + 1 } { 2 } } \int { \frac { u ^ { 2 } d u } { ( n + a + u ) ^ { s + 2 } } } ,
$$

so if $\sigma > 0$ we have

$$
\begin{array} { c } { { \displaystyle \sum _ { n = N } ^ { \infty } \int _ { 0 } ^ { 1 } \displaystyle \frac { u \ d u } { \left( n + a + u \right) ^ { s + 1 } } = \displaystyle \frac { 1 } { 2 } \sum _ { n = N } ^ { \infty } \displaystyle \frac { 1 } { \left( n + a + 1 \right) ^ { s + 1 } } } } \\ { { + \displaystyle \frac { s + 1 } { 2 } \sum _ { n = N } ^ { \infty } \displaystyle \int _ { 0 } ^ { 1 } \displaystyle \frac { u ^ { 2 } \ d u } { \left( n + a + u \right) ^ { s + 2 } } . } } \end{array}
$$

But if $\sigma > 0$ the first sum on the right is $\begin{array} { r } { \zeta ( s + 1 , a ) - \sum _ { n = 0 } ^ { N } \left( n + a \right) ^ { - s - 1 } } \end{array}$ and (26) implies (27). The result is also valid for $\sigma > - 1$ by analytic continuation. By repeated integration by parts we obtain the more general representation in (28). □

# 12.15 Inequalities for $| \zeta ( s , a ) |$

The formulas in the foregoing section yield upper bounds for $| \zeta ( \sigma + i t , a ) |$ as a function of $t$

Theorem 12.23 (a) If $\delta > 0$ we have

$$
| \zeta ( s , a ) - a ^ { - s } | \leq \zeta ( 1 + \delta ) \quad i f \sigma \geq 1 + \delta .
$$

(b) $I f 0 < \delta < 1$ there is $a$ positive constant $A ( \delta ) ,$ depending on $\delta$ but not on sor $\pmb { a }$ , such that

$$
\begin{array} { r l } & { | \zeta ( s , a ) - a ^ { - s } | \leq A ( \delta ) | t | ^ { \delta } \quad i f 1 - \delta \leq \sigma \leq 2 a n d | t | \geq 1 , } \\ & { | \zeta ( s , a ) - a ^ { - s } | \leq A ( \delta ) | t | ^ { 1 + \delta } \quad i f - \delta \leq \sigma \leq \delta a n d | t | \geq 1 , } \\ & { | \zeta ( s , a ) | \leq A ( \delta ) | t | ^ { m + 1 + \delta } \quad i f - m - \delta \leq \sigma \leq - m + \delta a n d | t | } \end{array}
$$

where $m = 1 , 2 , 3 , \ldots$ .

PRoor. For part (a) we use the defining series for $\zeta ( s , a )$ to obtain

$$
| \zeta ( s , a ) - a ^ { - s } | \leq \sum _ { n = 1 } ^ { \infty } \frac { 1 } { ( n + a ) ^ { \sigma } } \leq \sum _ { n = 1 } ^ { \infty } \frac { 1 } { n ^ { 1 + \delta } } = \zeta ( 1 + \delta ) ,
$$

which implies (29).

For part (b) we use the representation in (25) when $1 - \delta \leq \sigma \leq 2$ to obtain

$$
\begin{array} { r } { | \zeta ( s , a ) - a ^ { - s } | \leq \displaystyle \sum _ { n = 1 } ^ { N } \displaystyle \frac { 1 } { ( n + a ) ^ { \sigma } } + \displaystyle \frac { ( N + a ) ^ { 1 - \sigma } } { | s - 1 | } + | s | \displaystyle \int _ { N } ^ { \infty } \displaystyle \frac { d x } { ( x + a ) ^ { \sigma + 1 } } } \\ { < 1 + \displaystyle \int _ { 1 } ^ { N } \displaystyle \frac { d x } { ( x + a ) ^ { \sigma } } + \displaystyle \frac { ( N + a ) ^ { 1 - \sigma } } { | s - 1 | } + \displaystyle \frac { | s | } { \sigma } ( N + a ) ^ { - \sigma } . } \end{array}
$$

Since $\sigma \ge 1 - \delta > 0$ we have $( x + a ) ^ { \sigma } \geq ( x + a ) ^ { 1 - \delta } > x ^ { 1 - \delta } \operatorname { s o }$

$$
\int _ { 1 } ^ { N } \frac { d x } { ( x + a ) ^ { \sigma } } \leq \int _ { 1 } ^ { N } \frac { d x } { x ^ { 1 - \delta } } < \frac { N ^ { \delta } } { \delta } .
$$

Also, since $| s - 1 | = | \sigma - 1 + i t | \geq | t | \geq 1$ we have

$$
{ \frac { ( N + a ) ^ { 1 - \sigma } } { | s - 1 | } } \leq ( N + a ) ^ { \delta } \leq ( N + 1 ) ^ { \delta } .
$$

Finally, since $| s | \leq | \sigma | + | t | \leq 2 + | t |$ we find

$$
{ \frac { \left\{ s \right\} } { \sigma } } ( N + a ) ^ { - \sigma } < { \frac { 2 + \left\{ t \right\} } { 1 - \delta } } ( N + a ) ^ { \delta - 1 } < { \frac { 2 + \left. t \right. } { 1 - \delta } } { \frac { 1 } { N ^ { 1 - \delta } } } .
$$

These give us

$$
| \zeta ( s , a ) - a ^ { - s } | < 1 + \frac { N ^ { \delta } } { \delta } + ( N + 1 ) ^ { \delta } + \frac { 2 + | t | } { 1 - \delta } \frac { N ^ { \delta } } { N } .
$$

Now take $N = 1 + [ | t | ]$ . Then the last three terms are $O ( | t | ^ { \delta } ) .$ where the constant implied by the $o$ -symbol depends only on $\delta .$ . This proves (30).

To prove (31) we use the representation in (27). This gives us

$$
\begin{array} { r l r } & { } & { | \zeta ( s , a ) - a ^ { - s } | \le \displaystyle \sum _ { n = 1 } ^ { N } \displaystyle \frac { 1 } { ( n + a ) ^ { \sigma } } + \displaystyle \frac { ( N + a ) ^ { 1 - \sigma } } { | s - 1 | } + \displaystyle \frac { 1 } { 2 } | s | \{ | \zeta ( s + 1 ) , a ) - a ^ { - s - 1 } | \} } \\ & { } & { \quad + \displaystyle \frac { 1 } { 2 } | s | \displaystyle \sum _ { n = 1 } ^ { N } \displaystyle \frac { 1 } { ( n + a ) ^ { \sigma + 1 } } + \displaystyle \frac { 1 } { 2 } | s | \left| s + 1 \right| \displaystyle \sum _ { n = N } ^ { \infty } \displaystyle \frac { 1 } { ( n + a ) ^ { \sigma + 2 } } . } \end{array}
$$

As in the proof of (30) we take $N = 1 + [ | t | ]$ so that $N = O ( \{ t \vert )$ and we show that each term on the right is $O ( | t | ^ { 1 + \delta } ) .$ where the constant implied

by the $o$ -symbol depends only on δ. The inequalities $- \delta \leq \sigma \leq \delta$ imply $1 - \delta \leq 1 - \sigma \leq 1 + \delta$ hence

$$
\begin{array} { c } { \displaystyle \sum _ { n = 1 } ^ { N } \displaystyle \frac { 1 } { ( n + a ) ^ { \sigma } } < 1 + \int _ { 1 } ^ { N } \displaystyle \frac { d x } { ( x + a ) ^ { \sigma } } < 1 + \displaystyle \frac { ( N + a ) ^ { 1 - \sigma } } { 1 - \sigma } } \\ { \leq 1 + \displaystyle \frac { ( N + 1 ) ^ { 1 + \delta } } { 1 - \delta } = O ( \vert t \vert ^ { 1 + \delta } ) . } \end{array}
$$

Since $| s - 1 | \geq | t | \geq 1$ the second term is also $O ( | t | ^ { 1 + \delta } )$ . For the third term we use (30), noting that $1 - \delta \leq \sigma + 1 \leq 1 + \delta$ and $\{ s \} = O ( | t \rangle ) ,$ and we find that this term is also $O ( | t | ^ { 1 + \delta } )$ . Next, we have

$$
\begin{array} { l } { \displaystyle { \{ s \} \sum _ { n = 1 } ^ { N } \frac { 1 } { ( n + a ) ^ { \sigma + 1 } } = O \bigg ( | t | \int _ { 1 } ^ { N } \frac { d x } { ( x + a ) ^ { 1 - \delta } } \bigg ) } } \\ { \displaystyle { \qquad = O ( | t | N ^ { - \delta } ) = O ( | t | ^ { 1 - \delta } ) = O ( | t | ^ { 1 + \delta } ) . } } \end{array}
$$

Finally,

$$
\begin{array} { l } { | s | \left| s + 1 \right| \displaystyle \sum _ { n = N } ^ { \infty } \frac 1 { ( n + a ) ^ { \sigma + 2 } } = O \biggl ( \left| t \right| ^ { 2 } \displaystyle \int _ { N } ^ { \infty } \frac { d x } { ( x + a ) ^ { \sigma + 2 } } \biggr ) = O ( | t | ^ { 2 } N ^ { - \sigma - 1 } ) } \\ { = O ( | t | ^ { 2 } N ^ { \delta - 1 } ) = O ( | t | ^ { 1 + \delta } ) . } \end{array}
$$

This completes the proof of (31).

The proof of (32) is similar, except that we use (28) and note that $a ^ { - \sigma } = O ( 1 )$ when $\sigma < 0 .$ □

# 12.16 Inequalities for $| \zeta ( s ) |$ and $| L ( s , \chi ) |$

When $a = 1$ the estimates in Theorem 12.23 give corresponding estimates for $| \zeta ( s ) |$ . They also lead to bounds for Dirichlet $L$ -series. If $\sigma \ge 1 + \delta$ , where $\delta > 0 .$ both $| \zeta ( s ) |$ and $\{ L ( s , \chi ) \}$ are dominated by $\zeta ( 1 + \delta )$ so we consider only $\sigma \le 1 + \delta$

Theorem 12.24 Let $\chi$ be any Dirichlet character mod $k$ and assume $0 < \delta < 1$ , Then there is $a$ positive constant $A ( \delta ) ,$ depending on $\delta$ but not on s or $\pmb { k }$ , such that for $s = \sigma + i t$ with $| t | \geq 1$ we have

$$
\vert L ( s , \chi ) \vert \leq A ( \delta ) \vert k t \vert ^ { m + 1 + \delta } \quad i f - m - \delta \leq \sigma \leq - m + \delta ,
$$

where $m = - 1 , 0 , 1 , 2 , \ldots$

PRoor. We recall the relation

$$
L ( s , \chi ) = k ^ { - s } \sum _ { r = 1 } ^ { k - 1 } \chi ( r ) \zeta { \binom { r } { s } } . \frac { r } { k } \biggr ) .
$$

If $m = 1 , 2 , 3 , \ldots$ we use (32) to obtain

$$
| L ( s , \chi ) | \leq k ^ { - \sigma } \sum _ { r = 1 } ^ { k - 1 } \left| \zeta \left( s , \frac { r } { k } \right) \right| < k ^ { m + \delta } k A ( \delta ) | t | ^ { m + 1 + \delta }
$$

which proves (33) for $m \geq 1$ . If $m = 0$ or $^ { - 1 }$ we write

$$
L ( s , \chi ) = \sum _ { r = 1 } ^ { k - 1 } \frac { \chi ( r ) } { r ^ { s } } + k ^ { - s } \sum _ { r = 1 } ^ { k - 1 } \chi ( r ) \biggl \{ \zeta \biggl ( s , \frac { r } { k } \biggr ) - \biggl ( \frac { r } { k } \biggr ) ^ { - s } \biggr \} .
$$

Since $- m - \delta \leq \sigma \leq - m + \delta$ we can use (30) and (31) to obtain

$$
k ^ { - \sigma } \left| \zeta \left( s , \frac { r } { k } \right) - \left( \frac { r } { k } \right) ^ { - s } \right| \leq k ^ { m + \delta } A ( \delta ) | t | ^ { m + 1 + \delta } ,
$$

so the second sum in (34) is dominated by $A ( \delta ) | k t | ^ { m + 1 + \delta }$ . The frst sum is dominated by

$$
\sum _ { r = 1 } ^ { k - 1 } { \frac { 1 } { r ^ { \sigma } } } \leq \sum _ { r = 1 } ^ { k - 1 } r ^ { m + \delta } < 1 + \int _ { 1 } ^ { k } x ^ { m + \delta } d x = { \frac { k ^ { m + 1 + \delta } } { m + 1 + \delta } } \leq { \frac { k ^ { m + 1 + \delta } } { \delta } } ,
$$

and this sum can also be absorbed in the estimate $A ( \delta ) | k t | ^ { m + 1 + \delta }$

# Exercises for Chapter 12

1. Let $f ( n )$ be an arithmetical function which is periodic modulo $k$ -

(a) Prove that the Dirichlet series $\sum f ( n ) n ^ { - s }$ converges absolutely for $\sigma > 1$ and that

$$
\sum _ { n = 1 } ^ { \infty } { \frac { f ( n ) } { n ^ { s } } } = k ^ { - s } \sum _ { r = 1 } ^ { k } f ( r ) \zeta { \Bigg ( } s , { \frac { r } { k } } { \Bigg ) } \quad { \mathrm { i f ~ } } \sigma > 1 .
$$

(b) If $\sum _ { r = 1 } ^ { k } f ( r ) = 0$ prove that the Dirichlet series $\sum f ( n ) n ^ { - s }$ converges for $\sigma > 0$ and that there is an entire function $F ( s )$ such that $\overline { { F } } ( s ) = \sum f ( n ) n ^ { - s }$ for $\sigma > 0$ ,

2.1f $x$ is real and $\sigma > 1$ , let $F ( x , s )$ denote the periodic zeta function,

$$
F ( x , s ) = \sum _ { n \mathop { = } 1 } ^ { \infty } { \frac { e ^ { 2 \pi i n x } } { n ^ { s } } } .
$$

If $0 < a < 1$ and $\sigma > 1$ prove that Hurwitz's formula implies

$$
F ( a , s ) = \frac { \Gamma ( 1 - s ) } { ( 2 \pi ) ^ { 1 - s } } \{ e ^ { \pi i ( 1 - s ) / 2 } \zeta ( 1 - s , a ) + e ^ { \pi i ( s - 1 ) / 2 } \zeta ( 1 - s , 1 - a ) \} .
$$

3. The formula in Exercise 2 can be used to extend the definition of $F ( a , s )$ over the entire $\pmb { S }$ plane if $0 < a < 1$ . Prove that $F ( a , s ) ,$ ,so extended, is an entire function of $\pmb { S } .$

4.If $0 < a < 1$ and $0 < b < 1$ let

$$
\Phi ( a , b , s ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \{ \zeta ( s , a ) F ( b , 1 + s ) + \zeta ( s , 1 - a ) F ( 1 - b , 1 + s ) \} ,
$$

where $F$ is the function in Exercise 2. Prove that

$$
\begin{array} { l } { \displaystyle \frac { \Phi ( a , b , s ) } { \Gamma ( s ) \Gamma ( - s ) } = e ^ { \pi \mathrm { i } s / 2 } \{ \zeta ( s , a ) \zeta ( - s , 1 - b ) + \zeta ( s , 1 - a ) \zeta ( - s , b ) \} } \\ { + \ e ^ { - \pi \mathrm { i } s / 2 } \{ \zeta ( - s , 1 - b ) \zeta ( s , 1 - a ) + \zeta ( - s , b ) \zeta ( s , a ) \} , } \end{array}
$$

and deduce that $\Phi ( a , b , s ) = \Phi ( 1 - b , a , - s )$ . This functional equation is useful in the theory of elliptic modular functions.

In Exercises 5, 6 and 7, $\xi ( s )$ denotes the entire function introduced in Section 12.8,

$$
\xi ( s ) = { \frac { 1 } { 2 } } s ( s - 1 ) \pi ^ { - s / 2 } \Gamma \biggl ( { \frac { s } { 2 } } \biggr ) \zeta ( s ) .
$$

5. Prove that $\xi ( s )$ is real on the lines $t = 0$ and $\sigma = 1 / 2$ , and that $\xi ( 0 ) = \xi ( 1 ) = 1 / 2$

6. Prove that the zeros of $\xi ( s )$ (if any exist) are all situated in the strip $0 \leq \sigma \leq 1$ and lie symmetrically about the lines $t = 0$ and $\sigma = 1 / 2$

7. Show that the zeros of $\zeta ( s )$ in the critical strip $0 < \sigma < 1$ (if any exist) are identical in position and order of multiplicity with those of $\xi ( s )$

8. Let $\chi$ be a primitive character mod $k$ . Define

$$
a = a ( \chi ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f ~ } } \chi ( - 1 ) = 1 , } \\ { 1 } & { { \mathrm { i f ~ } } \chi ( - 1 ) = - 1 . } \end{array} \right. }
$$

(a) Show that the functional equation for $L ( s , \chi )$ has the form

$$
L ( 1 - s , \bar { \chi } ) = \varepsilon ( \chi ) 2 ( 2 \pi ) ^ { - s } k ^ { s - \frac { \textstyle + } { 2 } } \cos \biggl ( \frac { \pi ( s - a ) } { 2 } \biggr ) \Gamma ( s ) L ( s , \chi ) , \mathrm { w h e r e ~ } | \varepsilon ( \chi ) | = 1 .
$$

(b) Let

$$
\xi ( s , \chi ) = { \binom { k } { \pi } } ^ { ( s + a ) / 2 } \Gamma { \binom { s + a } { 2 } } L ( s , \chi ) . ^ { }
$$

Show that $\xi ( 1 - s , \bar { \chi } ) = \varepsilon ( \chi ) \xi ( s , \chi ) .$

9. Refer to Exercise 8.

(a) Prove that $\xi ( s , \chi ) \neq 0$ if $\sigma > 1$ or $\sigma < 0$ , (b) Describe the location of the zeros of $L ( s , \chi )$ in the half-plane $\sigma < 0$

10. Let $\chi$ be a nonprimitive character modulo $k$ . Describe the location of the zeros of $L ( s , \chi )$ in the half-plane $\sigma < 0$

11. Prove that the Bernoulli polynomials satisfy the relations

12. Let $B _ { n }$ denote the nth Bernoulli number. Note that

$$
\begin{array} { r l } & { B _ { 2 } = \frac { 1 } { 6 } = 1 - \frac { 1 } { 2 } - \frac { 1 } { 3 } , \qquad B _ { 4 } = \frac { - 1 } { 3 0 } = 1 - \frac { 1 } { 2 } - \frac { 1 } { 3 } - \frac { 1 } { 5 } , } \\ & { B _ { 6 } = \frac { 1 } { 4 2 } = 1 - \frac { 1 } { 2 } - \frac { 1 } { 3 } - \frac { 1 } { 7 } . } \end{array}
$$

These formulas illustrate a theorem discovered in 1840 by von Staudt and Clausen (independently). If $n \geq 1$ we have

$$
B _ { 2 n } = I _ { n } - \sum _ { p - 1 | 2 n } { \frac { 1 } { p } } ,
$$

where $I _ { n }$ is an integer and the sum is over all primes $p$ such that $p - 1$ divides $2 n$ This exercise outlines a proof due to Lucas.

(a) Prove that

$$
B _ { n } = \sum _ { k = 0 } ^ { n } { \frac { 1 } { k + 1 } } \sum _ { r = 0 } ^ { k } ( - 1 ) ^ { r } { \binom { k } { r } } r ^ { n } .
$$

[Hint: Write $x = \log \{ 1 + ( e ^ { x } - 1 ) \}$ and use the power series for $x / ( e ^ { x } - 1 ) . ]$

(b) Prove that

$$
B _ { n } = \sum _ { k = 0 } ^ { n } { \frac { k ! } { k + 1 } } c ( n , k ) ,
$$

where $c ( n , k )$ is an integer.

(c) If $a , b$ are integers with $a \ge 2$ , $b \geq 2$ and $a b > 4 .$ prove that $a b | ( a b - 1 ) !$ . This shows that in the sum of part (b), every term with $k + 1$ composite, $k > 3$ , is an integer.

(d) If $p$ is prime, prove that

$$
\sum _ { r = 0 } ^ { p - 1 } ( - 1 ) ^ { r } { \binom { p - 1 } { r } } r ^ { n } \equiv { \left\{ \begin{array} { l l } { - 1 { \pmod { p } } } & { { \mathrm { i f ~ } } p - 1 | n , n > 0 , } \\ { 0 { \pmod { p } } } & { { \mathrm { i f ~ } } p - 1 \nmid \gamma n . } \end{array} \right. }
$$

(e) Use the above results or some other method to prove the von Staudt-Clausen theorem.

13. Prove that the derivative of the Bernoulli polynomial $B _ { n } ( x )$ is $n B _ { n - 1 } ( x )$ if $n \geq 2$

14. Prove that the Bernoulli polynomials satisfy the addition formula

$$
B _ { n } ( x + y ) = \sum _ { k = 0 } ^ { n } { \binom { n } { k } } B _ { k } ( x ) y ^ { n - k } .
$$

15. Prove that the Bernoulli polynomials satisfy the multiplication formula

$$
B _ { p } ( m x ) = m ^ { p - 1 } \sum _ { k = 0 } ^ { m - 1 } B _ { p } \bigg ( x + \frac { k } { m } \bigg ) .
$$

16. Prove that if $r \geq 1$ the Bernoulli numbers satisfy the relation

$$
\sum _ { k = 0 } ^ { r } { \frac { 2 ^ { 2 k } B _ { 2 k } } { ( 2 k ) ! ( 2 r + 1 - 2 k ) ! } } = { \frac { 1 } { ( 2 r ) ! } } .
$$

17. Calculate the integral $\int _ { 0 } ^ { 1 } x B _ { p } ( x ) d x$ in two ways and deduce the formula

$$
\sum _ { r = 0 } ^ { p } { \binom { p } { r } } { \frac { B _ { r } } { p + 2 - r } } = { \frac { B _ { p + 1 } } { p + 1 } } .
$$

12:The functions $\zeta ( s )$ and $L ( s , \chi )$

18. (a) Verify the identity

$$
\begin{array} { r } { \frac { u v } { ( e ^ { u } - 1 ) ( e ^ { v } - 1 ) } \frac { e ^ { u + v } - 1 } { u + v } = \frac { u v } { u + v } \bigg ( 1 + \frac 1 { e ^ { u } - 1 } + \frac 1 { e ^ { v } - 1 } \bigg ) } \\ { = 1 + \displaystyle \sum _ { n = 2 } ^ { \infty } \frac { u v } { n ! } \bigg ( \frac { u ^ { n - 1 } + v ^ { n - 1 } } { u + v } \bigg ) B _ { n } . } \end{array}
$$

(b) Let $J = \int _ { 0 } ^ { 1 } B _ { p } ( x ) B _ { q } ( x ) d x$ . Show that $J$ is the coefficient of $p ! q ! u ^ { p } v ^ { q }$ in the expansion of part (a). Use this to deduce that

$$
\int _ { 0 } ^ { 1 } B _ { p } ( x ) B _ { q } ( x ) d x = { \left\{ \begin{array} { l l } { \displaystyle ( - 1 ) ^ { p + 1 } { \frac { p ! q ! } { ( p + q ) ! } } B _ { p + q } } & { { \mathrm { i f ~ } } p \geq 1 , q \geq 1 , } \\ { 1 } & { { \mathrm { i f ~ } } p = q = 0 , } \\ { 0 } & { { \mathrm { i f ~ } } p \geq 1 , q = 0 ; { \mathrm { o r ~ } } p = 0 , q \geq 1 . } \end{array} \right. }
$$

19. (a) Use a method similar to that in Exercise 18 to derive the identity

$$
( u \ + \ v ) \sum _ { m = 0 } ^ { \infty } \sum _ { n = 0 } ^ { \infty } B _ { m } ( x ) B _ { n } ( x ) \frac { u ^ { m } v ^ { n } } { m ! n ! } \ = \ \sum _ { m = 0 } ^ { \infty } \ \sum _ { n = 0 } ^ { \infty } B _ { m + n } ( x ) \frac { u ^ { m } v ^ { n } } { m ! n ! } \sum _ { r = 0 } ^ { \infty } \frac { B _ { 2 r } } { ( 2 r ) ! } ( u ^ { 2 r } v \ + \ u v ^ { 2 r } ) .
$$

(b) Compare coeficients in (a) and integrate the result to obtain the formula

$$
B _ { m } ( x ) B _ { n } ( x ) = \sum _ { r } \left\{ { \binom { m } { 2 r } } n + { \binom { n } { 2 r } } m \right\} { \frac { B _ { 2 r } B _ { m + n - 2 r } ( x ) } { m + n - 2 r } } + ( - 1 ) ^ { m + 1 } { \frac { m ! n ! } { ( m + n ) ! } } B _ { m + n - 2 r } ( x ) B _ { n } ( x )
$$

for $m \geq 1 , n \geq 1$ Indicate the range of the index $r$

20. Show that if $m \geq 1 , n \geq 1$ and $p \geq 1$ , we have

$$
\begin{array} { r l r } {  { \int _ { 0 } ^ { 1 } B _ { n } ( x ) B _ { n } ( x ) B _ { p } ( x ) d x } } \\ & { } & { = ( - 1 ) ^ { p + 1 } p ! \sum _ { r } \{ \binom { m } { 2 r } n + \binom { n } { 2 r } m \} \frac { ( m + n - 2 r - 1 ) ! } { ( m + n + p - 2 r ) ! } B _ { 2 r } B _ { m + n + p - 2 r } . } \end{array}
$$

In particular, compute $\int _ { 0 } ^ { 1 } B _ { 2 } { } ^ { 3 } ( x ) d x$ from this formula.

21. Let $f ( n )$ be an arithmetical function which is periodic mod $k _ { \ast }$ , and let

$$
g ( n ) = { \frac { 1 } { k } } \sum _ { m \bmod k } f ( m ) e ^ { - 2 \pi i m n / k }
$$

denote the fi nite Fourier coeficients of $f .$ If

$$
F ( s ) = k ^ { - s } \sum _ { r = 1 } ^ { k } f ( r ) \zeta { \binom { r } { s , \frac { r } { k } } } ,
$$

prove that

$$
{ \cal F } ( 1 - s ) = \frac { \Gamma ( s ) } { ( 2 \pi ) ^ { s } } \left\{ e ^ { \pi i s / 2 } \sum _ { r = 1 } ^ { k } g ( r ) \zeta \left( s , \frac { r } { k } \right) + { e ^ { - \pi i s / 2 } } \sum _ { r = 1 } ^ { k } g ( - r ) \zeta \left( s , \frac { r } { k } \right) \right\} .
$$

22. Let $\chi$ be any nonprincipal character mod $k$ and let $\begin{array} { r } { S ( x ) = \sum _ { n \leq x } \chi ( n ) . } \end{array}$ ,

(a) If $N \geq 1$ and $\sigma > 0$ prove that

$$
L ( s , \chi ) = \sum _ { n = 1 } ^ { N } \frac { \chi ( n ) } { n ^ { s } } + s \int _ { N } ^ { \infty } \frac { S ( x ) - S ( N ) } { x ^ { s + 1 } } d x .
$$

(b) If $s = \sigma + i t$ with $\sigma \ge \delta > 0$ and $| t | \geq 0$ , use part (a) to show that there is a constant $A ( \delta )$ such that

$$
\vert L ( s , \chi ) \vert \leq A ( \delta ) B ( k ) ( \vert t \vert + 1 ) ^ { 1 - \delta }
$$

where $B ( k )$ is an upper bound for $| S ( x ) |$ . In Theorem 13.15 it is shown that $B ( k ) = O ( { \sqrt { k } } \log k ) .$ d

(c) Prove that for some constant $A > 0$ we have

$$
| L ( s , \chi ) | \leq A \log k \quad { \mathrm { i f ~ } } \sigma \geq 1 - { \frac { 1 } { \log k } } { \mathrm { a n d ~ } } 0 \leq | t | \leq 2 .
$$

[Hint: Take $N = k$ in part (a).]

# 13 Analytic Proof of the Prime Number Theorem

# 13.1 The plan of the proof

The prime number theorem is equivalent to the statement

$$
\psi ( x ) \sim x \quad { \mathrm { a s ~ } } x \to \infty ,
$$

where $\psi ( x )$ is Chebyshev's function,

$$
\psi ( x ) = \sum _ { n \leq x } \Lambda ( n ) .
$$

This chapter gives an analytic proof of (1) based on properties of the Riemann zeta function. The analytic proof is shorter than the elementary proof sketched in Chapter 4 and its principal ideas are easier to comprehend. This section outlines the main features of the proof.

The function $\psi$ is a step function and it is more convenient to deal with its integral, which we denote by $\psi _ { 1 }$ . Thus, we consider

$$
\psi _ { 1 } ( x ) = \int _ { 1 } ^ { x } \psi ( t ) d t .
$$

The integral $\psi _ { 1 }$ is a continuous piecewise linear function. We show first that the asymptotic relation

$$
\psi _ { 1 } ( x ) \sim { \frac { 1 } { 2 } } x ^ { 2 } \quad \mathrm { a s } x  \infty
$$

implies (1) and then prove (2). For this purpose we express $\psi _ { 1 } ( x ) / x ^ { 2 }$ in terms of the Riemann zeta function by means of a contour integral,

$$
{ \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { x ^ { s - 1 } } { s ( s + 1 ) } } \left( - { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } \right) d s , \mathrm { ~ w h e r e ~ } c > 1 .
$$

The quotient $- \zeta ^ { \prime } ( s ) / \zeta ( s )$ has a first order pole at $s = 1$ with residue 1. If we subtract this pole we get the formula

$$
{ \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } - { \frac { 1 } { 2 } } { \left( 1 - { \frac { 1 } { x } } \right) } ^ { 2 } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { x ^ { s - 1 } } { s ( s + 1 ) } } { \left( - { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } - { \frac { 1 } { s - 1 } } \right) } d s , { \mathrm { ~ f o r ~ } } c > 1 .
$$

We let

$$
h ( s ) = { \frac { 1 } { s ( s + 1 ) } } \biggl ( - { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } - { \frac { 1 } { s - 1 } } \biggr )
$$

and rewrite the last equation in the form

$$
{ \begin{array} { r l } & { { \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } - { \frac { 1 } { 2 } } { \bigg ( } 1 - { \frac { 1 } { x } } { \bigg ) } ^ { 2 } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } x ^ { s - 1 } h ( s ) d s } \\ & { \qquad = { \frac { x ^ { c - 1 } } { 2 \pi } } \int _ { - \infty } ^ { + \infty } h ( c + i t ) e ^ { i t \log x } d t . } \end{array} }
$$

To complete the proof we are required to show that

$$
\operatorname* { l i m } _ { x \to \infty } { \frac { x ^ { c - 1 } } { 2 \pi } } \int _ { - \infty } ^ { + \infty } h ( c + i t ) e ^ { i t \log x } d t = 0 .
$$

Now the Riemann-Lebesgue lemma in the theory of Fourier series states that

$$
\operatorname* { l i m } _ { x \to \infty } \int _ { - \infty } ^ { + \infty } f ( t ) e ^ { i t x } d t = 0
$$

if the integral $\int _ { - \infty } ^ { + \infty } | f ( t ) |$ dt converges. The integral in (4) is of this type, with $\boldsymbol { x }$ replaced by log $x$ , and we can easily show that the integral $\int _ { - \infty } ^ { + \infty } \left| h ( c + i t ) \right| d t$ converges if $c > 1$ , so the integral in (4) tends to 0 as $x \to \infty$ . However, the factor $x ^ { c - 1 }$ outside the integral tends to $\infty$ when $c > 1$ , so we are faced with an indeterminate form, $\infty \cdot 0$ . Equation (3) holds for every $c > 1$ . If we could put $c = 1$ in (3) the troublesome factor $x ^ { c - 1 }$ would disappear. But then $h ( c + i t )$ becomes $h ( 1 + i t )$ and the integrand involves $\zeta ^ { \prime } ( s ) / \zeta ( s )$ on the line $\sigma = 1 .$ In this case it is more difmi cult to prove that the integral $\int _ { - \infty } ^ { + \infty } \left| h ( 1 + i t ) \right| d t$ converges, a fact which needs to be verified before we can apply the Riemann-Lebesgue lemma. The last and most dificult part of the proof is to show that it is possible to replace $c$ by 1 in (3) and that the integral $\int _ { - \infty } ^ { + \infty } \left| h ( 1 + i t ) \right| d t$ converges. This requires a more detailed study of the Riemann zeta function in the vicinity of the line $\sigma = 1$ .

Now we proceed to carry out the plan outlined above. We begin with some lemmas.

# 13.2 Lemmas

Lemma 1 For any arithmetical function $a ( n )$ let

$$
A ( x ) = \sum _ { n \leq x } a ( n ) ,
$$

13: Analytic proof of the prime number theorem

where $A ( x ) = 0 i f x < 1$ Then

$$
\sum _ { n \leq x } ( x - n ) a ( n ) = \int _ { 1 } ^ { x } A ( t ) \ d t .
$$

Proor. We apply Abel's identity (Theorem 4.2) which states that

$$
\sum _ { n \leq x } a ( n ) f ( n ) = A ( x ) f ( x ) - \int _ { 1 } ^ { x } A ( t ) f ^ { \prime } ( t ) d t
$$

if $f$ has a continuous derivative on $[ 1 , x ]$ . Taking $f ( t ) = t$ we have

$$
\sum _ { n \leq x } a ( n ) f ( n ) = \sum _ { n \leq x } n a ( n ) \quad { \mathrm { a n d ~ } } A ( x ) f ( x ) = x \sum _ { n \leq x } a ( n )
$$

so (6) reduces to (5).

The next lemma is a form of L'Hospital's rule for increasing piecewise linear functions.

Lemma 2 Let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } a ( n ) } \end{array}$ and let $A _ { 1 } ( x ) = \int _ { 1 } ^ { x } A ( t ) d t$ . Assume also that $a ( n ) \geq 0$ for all n. If we have the asymptotic formula

$$
A _ { 1 } ( x ) \sim L x ^ { c } \quad a s x  \infty
$$

for some $c > 0$ and $L > 0$ , then we also have

$$
A ( x ) \sim c L x ^ { c - 1 } \quad a s x  \infty .
$$

In other words, formal differentiation of (7) gives a correct result.

PRooF. The function $A ( x )$ is increasing since the $a ( n )$ are nonnegative. Choose any $\beta > 1$ and consider the difference $A _ { 1 } ( \beta x ) - A _ { 1 } ( x )$ We have

$$
\begin{array} { l } { \displaystyle { A _ { 1 } ( \beta x ) - A _ { 1 } ( x ) = \int _ { x } ^ { \beta x } A ( u ) d u \geq \int _ { x } ^ { \beta x } A ( x ) d u = A ( x ) ( \beta x - x ) } } \\ { \displaystyle { \quad = x ( \beta - 1 ) A ( x ) . } } \end{array}
$$

This gives us

$$
x A ( x ) \leq \frac { 1 } { \beta - 1 } \left\{ A _ { 1 } ( \beta x ) - A _ { 1 } ( x ) \right\}
$$

or

$$
\frac { A ( x ) } { x ^ { c - 1 } } \leq \frac { 1 } { \beta - 1 } \left\{ \frac { A _ { 1 } ( \beta x ) } { ( \beta x ) ^ { c } } \beta ^ { c } - \frac { A _ { 1 } ( x ) } { x ^ { c } } \right\} .
$$

Keep $\beta$ fixed and let $x  \infty$ in this inequality. We find

$$
\operatorname* { l i m } _ { x \to \infty } \operatorname* { s u p } _ { x ^ { c - 1 } } \leq { \frac { 1 } { \beta - 1 } } \left( L \beta ^ { c } - L \right) = L { \frac { \beta ^ { c } - 1 } { \beta - 1 } } .
$$

Now let $\beta \to 1 +$ . The quotient on the right is the difference quotient for the derivative of $x ^ { c }$ at $x = 1$ and has the limit $c .$ . Therefore

$$
\operatorname* { l i m } _ { x \to \infty } \operatorname* { s u p } _ { x ^ { c - 1 } } \leq c L .
$$

Now consider any $\pmb { \alpha }$ with $0 < \alpha < 1$ and consider the difference $\begin{array} { r } { A _ { 1 } ( x ) - A _ { 1 } ( \alpha x ) . } \end{array}$ An argument similar to the above shows that

$$
\operatorname* { l i m } _ { x \to \infty } \operatorname* { i n f } _ { x ^ { c - 1 } } \geq L { \frac { 1 - \alpha ^ { c } } { 1 - \alpha } } .
$$

As $\alpha  1 -$ the right member tends to $c L$ . This, together with (9) shows that $A ( x ) / x ^ { c - 1 }$ tends to the limit $c L$ as $x \to \infty$ . □

When $a ( n ) = \Lambda ( n )$ we have $A ( x ) = \psi ( x ) , \ A _ { 1 } ( x ) = \psi _ { 1 } ( x ) ,$ and $a ( n ) \geq 0$ Therefore we can apply Lemmas 1 and 2 and immediately obtain:

Theorem 13.1 We have

$$
\psi _ { 1 } ( x ) = \sum _ { n \leq x } ( x - n ) \Lambda ( n ) .
$$

Also, the asymptotic relation $\psi _ { 1 } ( x ) \sim x ^ { 2 } / 2$ implies $\psi ( x ) \sim x \ a s \ x  \infty .$

Our next task is to express $\psi _ { 1 } ( x ) / x ^ { 2 }$ as a contour integral involving the zeta function. For this we will require the special cases $k = 1$ and $k = 2$ of the following lemma on contour integrals. (Compare with Lemma 4 in Chapter 11.)

Lemma $3 . f c > 0$ and $u > 0 ,$ , then for every integer $k \geq 1$ we have

$$
{ \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { u ^ { - z } } { z ( z + 1 ) \cdots ( z + k ) } } d z = { \Biggl \{ } { \frac { 1 } { k ! } } ( 1 - u ) ^ { k }  \quad i f 0 < u \leq 1 ,
$$

the integral being absolutely convergent.

ProoF. First we note that the integrand is equal to $u ^ { - z } \Gamma ( z ) / \Gamma ( z + k + 1 ) .$ This follows by repeated use of the functional equation $\Gamma ( z + 1 ) = z \Gamma ( z ) .$ d To prove the lemma we apply Cauchy's residue theorem to the integral

$$
{ \frac { 1 } { 2 \pi i } } \int _ { c ( R ) } { \frac { u ^ { - z } \Gamma ( z ) } { \Gamma ( z + k + 1 ) } } d z ,
$$

where $C ( R )$ is the contour shown in Figure 13.1(a) if $0 < u \leq 1$ , and that in Figure 13.1(b) if $u > 1$ . The radius $R$ of the circle is greater than $2 k + c$ so all the poles at $z = 0 , - 1 , \ldots , - k$ lie inside the circle.

13: Analytic proof of the prime number theorem

![](images/ed5be5e7588cd4eb6254aec918c7e60bf6a0460d0a6212f37f29646990d5d13d.jpg)  
Figure 13.1

Now we show that the integral along each of the circular arcs tends to 0 as $R \to \infty$ . If $z = x + i y$ and $| z | = R$ the integrand is dominated by

$$
\left| \frac { u ^ { - z } } { z ( z + 1 ) \cdots ( z + k ) } \right| = \frac { u ^ { - x } } { | z | | z + 1 | \cdots | z + k | } \le \frac { u ^ { - c } } { R | z + 1 | \cdots | z + k | } .
$$

The inequality $u ^ { - x } \leq u ^ { - \epsilon }$ follows from the fact that $u ^ { - x }$ is an increasing function of $x$ if $0 < u \leq 1$ and a decreasing function if $u > 1$ Now if $1 \leq n \leq k$ we have

$$
| z + n | \geq | z | - n = R - n \geq R - k \geq R / 2
$$

since $R > 2 k$ . Therefore the integral along each circular arc is dominated by

$$
\frac { 2 \pi R u ^ { - c } } { R ( \frac { 1 } { 2 } R ) ^ { k } } = O ( R ^ { - k } )
$$

and this $\mathord {  } 0$ as $R \to \infty$ since $k \geq 1$

If $u > 1$ the integrand is analytic inside $C ( R )$ hence $\int _ { C ( { \pmb R } ) } = 0 .$ Letting $R \to \infty$ we find that the lemma is proved in this case.

If $0 < u \leq 1$ we evaluate the integral around $C ( R )$ by Cauchy's residue theorem. The integrand has poles at the integers $n = 0 , - 1 , \ldots , - k .$ hence

$$
\begin{array} { l } { { \displaystyle \frac { 1 } { 2 \pi i } \int _ { { \cal C } ( R ) } \overline { { { \Gamma ( z + k + 1 ) } } } d z = \sum _ { n = 0 } ^ { k } \mathsf { R e s } \displaystyle \frac { u ^ { - z } \Gamma ( z ) } { \Gamma ( z + k + 1 ) } \qquad } } \\ { . \qquad = \displaystyle \sum _ { n = 0 } ^ { k } \displaystyle \frac { u ^ { n } } { \Gamma ( k + 1 - n ) } \displaystyle \mathsf { R e s } \ \Gamma ( z ) = \sum _ { n = 0 } ^ { k } \displaystyle \frac { u ^ { n } ( - 1 ) ^ { n } } { ( k - n ) ! n ! } \qquad } \\ { \displaystyle \qquad = \displaystyle \frac { 1 } { k ! } \sum _ { n = 0 } ^ { k } \binom { k } { n } ( - u ) ^ { n } = \displaystyle \frac { ( 1 - u ) ^ { k } } { k ! } . } \end{array}
$$

Letting $R \to \infty$ we obtain the lemma.

13.3 A contour integral representation for $\psi _ { 1 } ( x ) / x ^ { 2 }$

Theorem $1 3 . 2 ~ I f c > 1$ and $x \ge 1$ we have

$$
{ \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { x ^ { s - 1 } } { s ( s + 1 ) } } \left( - { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } \right) d s .
$$

PRooF. From Equation (10) we have $\begin{array} { r } { \psi _ { 1 } ( x ) / x = \sum _ { n \leq x } { ( 1 - n / x ) } \Lambda ( n ) . } \end{array}$ Now use Lemma 3 with $k = 1$ and $u = n / x$ . If $n \leq x$ we obtain

$$
1 - { \frac { n } { x } } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { ( x / n ) ^ { s } } { s ( s + 1 ) } } d s .
$$

Multiplying this relation by $\Lambda ( n )$ and summing over all $n \leq x$ we find

$$
\frac { \psi _ { 1 } ( x ) } { x } = \sum _ { n \leq x } \frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } \frac { \Lambda ( n ) ( x / n ) ^ { s } } { s ( s + 1 ) } d s = \sum _ { n = 1 } ^ { \infty } \frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } \frac { \Lambda ( n ) ( x / n ) ^ { s } } { s ( s + 1 ) } d s
$$

since the integral vanishes if $n > x$ This can be written as

$$
{ \frac { \psi _ { 1 } ( x ) } { x } } = \sum _ { n = 1 } ^ { \infty } \int _ { c - \infty i } ^ { c + \infty i } f _ { n } ( s ) d s ,
$$

where $2 \pi i f _ { n } ( x ) = \Lambda ( n ) ( x / n ) ^ { s } / ( s ^ { 2 } + s ) ,$ Next we wish to interchange the sum and integral in (12). For this it sufices to prove that the series

$$
\sum _ { n = 1 } ^ { \infty } \int _ { c - \infty i } ^ { c + \infty i } | f _ { n } ( s ) | d s
$$

is convergent. (See Theorem 10.26 in [2].) The partial sums of this series satisfy the inequality

$$
\sum _ { n = 1 } ^ { N } \int _ { c - \infty i } ^ { c + \infty i } { \frac { \Lambda ( n ) ( x / n ) ^ { c } } { | s | \left\{ s + 1 \right\} } } d s = \sum _ { n = 1 } ^ { N } { \frac { \Lambda ( n ) } { n ^ { c } } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { x ^ { c } } { | s | \left\{ s + 1 \right\} } } d s \leq A \sum _ { n = 1 } ^ { \infty } { \frac { \Lambda ( n ) } { n ^ { c } } } ,
$$

where $\pmb { A }$ is a constant, so (13) converges. Hence we can interchange the sum and integral in (12) to obtain

$$
\begin{array} { l } { \displaystyle \frac { \psi _ { 1 } ( x ) } { x } = \int _ { c - \infty i } ^ { c + \infty i } \sum _ { n = 1 } ^ { \infty } f _ { n } ( s ) d s = \frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } \frac { x ^ { s } } { s ( s + 1 ) } \sum _ { n = 1 } ^ { \infty } \frac { \Lambda ( n ) } { n ^ { s } } d s } \\ { = \displaystyle \frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } \frac { x ^ { s } } { s ( s + 1 ) } \biggl ( - \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } \biggr ) d s . } \end{array}
$$

Now divide by $x$ to obtain (11).

Theorem 13.3 If $c > 1$ and $x \ge 1$ we have

$$
{ \frac { \psi _ { 1 } ( x ) } { { x } ^ { 2 } } } - { \frac { 1 } { 2 } } \left( 1 - { \frac { 1 } { x } } \right) ^ { 2 } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { x } ^ { s - 1 } h ( s ) d s ,
$$

where

$$
h ( s ) = \frac { 1 } { s ( s + 1 ) } \biggl ( - \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } - \frac { 1 } { s - 1 } \biggr ) .
$$

PRooF. This time we use Lemma 3 with $k = 2$ to get

$$
{ \frac { 1 } { 2 } } \left( 1 - { \frac { 1 } { x } } \right) ^ { 2 } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } { \frac { { x } ^ { s } } { s ( s + 1 ) ( s + 2 ) } } d s ,
$$

where $c > 0 .$ Replace s by $s - 1$ in the integral (keeping $c > 1 \AA$ ) and subtract the result from (11) to obtain Theorem 13.3. □

If we parameterize the path of integration by writing $s = c + i t$ , we find $x ^ { s - 1 } = \bar { x } ^ { c - 1 } x ^ { i t } = x ^ { c - 1 } e ^ { i t \ \log x }$ and Equation (14) becomes

$$
{ \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } - { \frac { 1 } { 2 } } { \bigg ( } 1 - { \frac { 1 } { x } } { \bigg ) } ^ { 2 } = { \frac { x ^ { c - 1 } } { 2 } } \int _ { c - \infty i } ^ { c + \infty i } h ( c + i t ) e ^ { i t \log x } d t .
$$

Our next task is to show that the right member of (16) tends to 0 as $x \to \infty$ . As mentioned earlier, we first show that we can put $c = 1$ in (16). For this purpose we need to study $\zeta ( s )$ in the neighborhood of the line $\sigma = 1$ .

# 13.4 Upper bounds for $| \zeta ( s ) |$ and $\vert \zeta ^ { \prime } ( s ) \vert$ near the line $\sigma = 1$

To study $\zeta ( s )$ near the line $\sigma = 1$ we use the representation obtained from Theorem 12.21 which is valid for $\sigma > 0$ ,

$$
\zeta ( s ) = \sum _ { n = 1 } ^ { N } { \frac { 1 } { n ^ { s } } } - s \int _ { N } ^ { \infty } { \frac { x - [ x ] } { x ^ { s + 1 } } } d x + { \frac { N ^ { 1 - s } } { s - 1 } } .
$$

We also use the formula for $\zeta ^ { \prime } ( s )$ obtained by differentiating each member of (17),

$$
\begin{array} { l } { { \zeta ^ { \prime } ( s ) = \displaystyle - \sum _ { n = 1 } ^ { N } \displaystyle \frac { \log n } { n ^ { s } } + s \int _ { N } ^ { \infty } \displaystyle \frac { ( x - [ x ] ) \log x } { x ^ { s + 1 } } d x - \int _ { N } ^ { \infty } \displaystyle \frac { x - [ x ] } { x ^ { s + 1 } } d x } } \\ { { \displaystyle - \displaystyle \frac { N ^ { 1 - s } \log N } { s - 1 } - \displaystyle \frac { N ^ { 1 - s } } { ( s - 1 ) ^ { 2 } } . } } \end{array}
$$

The next theorem uses these relations to obtain upper bounds for $| \zeta ( s ) |$ and $| \zeta ^ { \prime } ( s ) |$ .

Theorem 13.4 For every $A > 0$ there exists a constant $M$ (depending on $A$ )d) such that

$$
| \zeta ( s ) | \le M \log t \qquad a n d | \zeta ^ { \prime } ( s ) | \le M \log ^ { 2 } t
$$

for all s with $\sigma \ge 1 / 2$ satisfying

$$
\sigma > 1 - { \frac { A } { \log t } } \qquad a n d t \geq e .
$$

Note. The inequalities (20) describe a region of the type shown in Figure 13.2.

![](images/469a408befa3f08499e6625e89d645543f880321aca79633b36062f47595da99.jpg)  
Figure 13.2

PROOF. If $\sigma \ge 2$ we have $| \zeta ( s ) | \le \zeta ( 2 )$ and $| \zeta ^ { \prime } ( s ) | \le | \zeta ^ { \prime } ( 2 ) |$ and the inequalities in (19) are trivially satisfied. Therefore we can assume $\sigma < 2$ and $t \geq e .$ We then have

$$
| s | \leq \sigma + t \leq 2 + t < 2 t \qquad { \mathrm { a n d ~ } } | s - 1 | \geq t
$$

so $1 / | s - 1 | \leq 1 / t$ . Estimating $| \zeta ( s ) |$ by using (17) we find

$$
| \zeta ( s ) | \leq \sum _ { n = 1 } ^ { N } { \frac { 1 } { n ^ { \sigma } } } + 2 t \int _ { N } ^ { \infty } { \frac { 1 } { x ^ { \sigma + 1 } } } d x + { \frac { N ^ { 1 - \sigma } } { t } } = \sum _ { n = 1 } ^ { N } { \frac { 1 } { n ^ { \sigma } } } + { \frac { 2 t } { \sigma N ^ { \sigma } } } + { \frac { N ^ { 1 - \sigma } } { t } } .
$$

Now we make $N$ depend on $t$ by taking $N = [ t ]$ Then $N \leq t < N + 1$ and log $n \leq \log t$ if $n \leq N$ The inequality (2o) implies $1 - \sigma < A / 1 0 \mathrm { g } \ t \ s \mathrm { o }$

$$
\frac { 1 } { n ^ { \sigma } } = \frac { n ^ { 1 - \sigma } } { n } = \frac { 1 } { n } e ^ { ( 1 - \sigma ) \log n } < \frac { 1 } { n } e ^ { A \log n / \log t } \leq \frac { 1 } { n } e ^ { A } = O \bigg ( \frac { 1 } { n } \bigg ) .
$$

13:Analytic proof of the prime number theorem

Therefore

$$
{ \frac { 2 t } { \sigma N ^ { \sigma } } } \leq { \frac { N + 1 } { N } } = O ( 1 ) \qquad { \mathrm { a n d ~ } } { \frac { N ^ { 1 - \sigma } } { t } } = { \frac { N } { t } } { \frac { 1 } { N ^ { \sigma } } } = O { \binom { 1 } { \frac { 1 } { N } } } = O ( 1 ) ,
$$

sO

$$
| \zeta ( s ) | = O { \biggl ( } \sum _ { n = 1 } ^ { N } { \frac { 1 } { n } } { \biggr ) } + O ( 1 ) = O ( \log N ) + O ( 1 ) = O ( \log t ) .
$$

This proves the inequality for $| \zeta ( s ) |$ in (19). To obtain the inequality for $\vert \zeta ^ { \prime } ( s ) \vert$ we apply the same type of argument to (18). The only essential difference is that an extra factor log $N$ appears on the right. But log $N = O ( \log t )$ so we get $| \zeta ^ { \prime } ( s ) | = O ( \log ^ { 2 } t )$ in the specifed region. □

# 13.5 The nonvanishing of $\zeta ( s )$ on the line $\sigma = 1$

In this section we prove that $\zeta ( 1 + i t ) \neq 0$ for every real t. The proof is based on an inequality which will also be needed in the next section.

Theorem 13.5 If $\sigma > 1$ we have

$$
\zeta ^ { 3 } ( \sigma ) | \zeta ( \sigma + i t ) | ^ { 4 } | \zeta ( \sigma + 2 i t ) | \geq 1 .
$$

ProoF. We recall the identity $\zeta ( s ) = e ^ { G ( s ) }$ proved in Section 11.9, Example 1, where

$$
G ( s ) = \sum _ { n = 2 } ^ { \infty } { \frac { \Lambda ( n ) } { \log n } } n ^ { - s } = \sum _ { p } \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m p ^ { m s } } } \qquad ( \sigma > 1 ) .
$$

This can be written as

$$
\zeta ( s ) = \exp \Biggl \{ \sum _ { p } \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m p ^ { m s } } } \Biggr \} = \exp \Biggl \{ \sum _ { p } \sum _ { m = 1 } ^ { \infty } { \frac { e ^ { - i m t \log p } } { m p ^ { m \sigma } } } \Biggr \} ,
$$

from which we find

$$
| \zeta ( s ) | = \exp \Biggl \{ \sum _ { p } \sum _ { m = 1 } ^ { \infty } { \frac { \cos ( m t \log p ) } { m p ^ { m \sigma } } } \Biggr \} .
$$

We apply this formula repeatedly with $s = \sigma _ { \ast }$ , $s = \sigma + i t$ and $s = \sigma + 2 i t .$ , and obtain

$$
\begin{array} { c } { { \zeta ^ { 3 } ( \sigma ) | \zeta ( \sigma + i t ) | ^ { 4 } | \zeta ( \sigma + 2 i t ) | } } \\ { { = \displaystyle \exp \Biggl \{ \sum _ { p } \sum _ { m = 1 } ^ { \infty } \frac { 3 + 4 \cos ( m t \log p ) + \cos ( 2 m t \log p ) } { m p ^ { m \sigma } } \Biggr \} . } } \end{array}
$$

But we have the trigonometric inequality

$$
3 + 4 \cos \theta + \cos 2 \theta \geq 0
$$

which follows from the identity

$$
3 + 4 \cos \theta + \cos 2 \theta = 3 + 4 \cos \theta + 2 \cos ^ { 2 } \theta - 1 = 2 ( 1 + \cos \theta ) ^ { 2 } .
$$

Therefore each term in the last infinite series is nonnegative so we obtain (21). □

Theorem 13.6 We have $\zeta ( 1 + i t ) \neq 0$ for every real t.

PRooF. We need only consider $t \neq 0$ Rewrite (21) in the form

$$
\{ ( \sigma - 1 ) \zeta ( \sigma ) \} ^ { 3 } \left| \frac { \zeta ( \sigma + i t ) } { \sigma - 1 } \right| ^ { 4 } | \zeta ( \sigma + 2 i t ) | \geq \frac { 1 } { \sigma - 1 } .
$$

This is valid if $\sigma > 1$ . Now let $\sigma  1 +$ in (22). The first factor approaches 1 since $\zeta ( s )$ has residue 1 at the pole $s = 1$ .The third factor tends to $| \zeta ( 1 + 2 i t ) |$ . If $\zeta ( 1 + i t )$ were equal to 0 the middle factor could be written as

$$
\left| \frac { \zeta ( \sigma + i t ) - \zeta ( 1 + i t ) } { \sigma - 1 } \right| ^ { 4 } \to | \zeta ^ { \prime } ( 1 + i t ) | ^ { 4 } \quad \mathrm { a s } \sigma \to 1 + .
$$

Therefore, if for some $t \neq 0$ we had $\zeta ( 1 + i t ) = 0$ the left member of (22) would approach the limit $| \zeta ^ { \prime } ( 1 + i t ) | ^ { 4 } | \zeta ( 1 + 2 i t ) |$ as $\sigma  1 +$ . But the right member tends to $\infty$ as $\sigma  1 +$ and this gives a contradiction. □

# 13.6 Inequalities for $| 1 / \zeta ( s ) |$ and $\vert \zeta ^ { \prime } ( s ) / \zeta ( s ) \vert$

Now we apply Theorem 13.5 once more to obtain the following inequalities for $| 1 / \zeta ( s ) |$ and $| \zeta ^ { \prime } ( s ) / \zeta ( s ) |$ .

Theorem 13.7 There is a constant $M > 0$ such that

$$
\left| { \frac { 1 } { \zeta ( s ) } } \right| < M \log ^ { 7 } t \qquad a n d \left| { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } \right| < M \log ^ { 9 } t
$$

whenever $\sigma \geq 1$ and $t \geq e$

PROOF. For $\sigma \ge 2$ we have

$$
| { \frac { 1 } { \zeta ( s ) } } | = | \sum _ { n = 1 } ^ { \infty } { \frac { \mu ( n ) } { n ^ { s } } } | \leq \sum _ { n = 1 } ^ { \infty } { \frac { 1 } { n ^ { 2 } } } \leq \zeta ( 2 ) 
$$

and

$$
\left| \left. \zeta ^ { \prime } ( s ) \right| \leq \sum _ { n = 1 } ^ { \infty } \frac { \Lambda ( n ) } { n ^ { 2 } } , \right.
$$

so the inequalities hold trivialy if $\sigma \ge 2$ . Suppose, then, that $1 \leq \sigma \leq 2$ and $t \geq e$ . Rewrite inequality (21) as follows:

$$
\frac { 1 } { | \zeta ( \sigma + i t ) | } \le \zeta ( \sigma ) ^ { 3 / 4 } | \zeta ( \sigma + 2 i t ) | ^ { 1 / 4 } .
$$

Now $( \pmb { \sigma } - 1 ) \zeta ( \pmb { \sigma } )$ is bounded in the interval $1 \leq \sigma \leq 2$ , say $( \sigma - 1 ) \zeta ( \sigma ) \leq M _ { \mathrm { : } }$ , where $M$ is an absolute constant. Then

$$
\zeta ( \sigma ) \leq { \frac { M } { \sigma - 1 } } \quad { \mathrm { i f ~ } } 1 < \sigma \leq 2 .
$$

Also, $\zeta ( \sigma + 2 i t ) = O ( \log t )$ if $1 \leq \sigma \leq 2$ (by Theorem 13.4), so for $1 < \sigma \leq 2$ we have

$$
{ \frac { 1 } { | \zeta ( \sigma + i t ) | } } \le { \frac { M ^ { 3 / 4 } ( \log t ) ^ { 1 / 4 } } { ( \sigma - 1 ) ^ { 3 / 4 } } } = { \frac { A ( \log t ) ^ { 1 / 4 } } { ( \sigma - 1 ) ^ { 3 / 4 } } } ,
$$

where $\pmb { A }$ is an absolute constant. Therefore for some constant $B > 0$ we have

$$
| \zeta ( \sigma + i t ) | > { \frac { B ( \sigma - 1 ) ^ { 3 / 4 } } { ( \log t ) ^ { 1 / 4 } } } , \quad { \mathrm { i f ~ } } 1 < \sigma \leq 2 , { \mathrm { a n d ~ } } t \geq e .
$$

This also holds trivially for $\sigma = 1$ . Let $\pmb { \alpha }$ be any number satisfying $1 < \alpha < 2$ Then if $1 \leq \sigma \leq \alpha , t \geq e .$ , we may use Theorem 13.4 to write

$$
\begin{array} { r l r } {  { | \zeta ( \sigma + i t ) - \zeta ( \alpha + i t ) | \le \int _ { \sigma } ^ { \alpha } | \zeta ^ { \prime } ( u + i t ) | d u \le ( \alpha - \sigma ) M \log ^ { 2 } t } } \\ & { } & { \le ( \alpha - 1 ) M \log ^ { 2 } t . } \end{array}
$$

Hence, by the triangle inequality,

$$
\begin{array} { r l r } {  { | \zeta ( \sigma + i t ) | \ge | \zeta ( \alpha + i t ) | - | \zeta ( \sigma + i t ) - \zeta ( \alpha + i t ) | } } \\ & { } & \\ & { \ge | \zeta ( \alpha + i t ) | - ( \alpha - 1 ) M \log ^ { 2 } t \ge \frac { B ( \alpha - 1 ) ^ { 3 / 4 } } { ( \log t ) ^ { 1 / 4 } } - ( \alpha - 1 ) M \log ^ { 2 } t . } \end{array}
$$

This holds if $1 \leq \sigma \leq \alpha .$ and by (23) it also holds for $\alpha \leq \sigma \leq 2 \operatorname { s i n c e } { ( \sigma - 1 ) ^ { 3 / 4 } }$ $\ge ( \alpha - 1 ) ^ { 3 / 4 }$ . In other words, if $1 \leq \sigma \leq 2$ and $t \geq e$ we have the inequality

$$
| \zeta ( \sigma + i t ) | \geq { \frac { B ( \alpha - 1 ) ^ { 3 / 4 } } { ( \log t ) ^ { 1 / 4 } } } - ( \alpha - 1 ) M \log ^ { 2 } t
$$

for any $\alpha$ satisfying $1 < \alpha < 2$ . Now we make $\pmb { \alpha }$ depend on $t$ and choose $\pmb { \alpha }$ so the first term on the right is twice the second. This requires

$$
\alpha = 1 + \left( \frac { B } { 2 M } \right) ^ { 4 } \frac { 1 } { \left( \log t \right) ^ { 9 } } .
$$

Clearly $\alpha > 1$ and also $\alpha < 2$ if $t \geq t _ { 0 }$ for some $t _ { 0 }$ . Thus, if $t \geq t _ { 0 }$ and $1 \leq \sigma \leq 2$ we have

$$
| \zeta ( \sigma + i t ) | \geq ( \alpha - 1 ) M \log ^ { 2 } t = { \frac { C } { ( \log t ) ^ { 7 } } } .
$$

The inequality also holds with (perhaps) a diferent $C$ if $e \leq t \leq t _ { 0 }$

This proves that $| \zeta ( s ) | \geq C \log ^ { - 7 } t$ for all $\sigma \geq 1 , t \geq e ,$ , giving us a corresponding upper bound for $| 1 / \zeta ( s ) |$ . To get the inequality for $| \zeta ^ { \prime } ( s ) / \zeta ( s ) |$ we apply Theorem 13.4 and obtain an extra factor $\log ^ { 2 } \ t$ □

# 13.7 Completion of the proof of the prime number theorem

Now we are almost ready to complete the proof of the prime number theorem. We need one more fact from complex function theory which we state as a lemma.

Lemma 4 If f(s) has a pole of order $k$ at $s = a$ then the quotient $f ^ { \prime } ( s ) / f ( s )$ has $^ { a }$ first order pole at $s = \alpha$ with residue $- k$ .

PRoOF. We have $f ( s ) = g ( s ) / ( s - \alpha ) ^ { k }$ , where $g$ is analytic at $\alpha$ and $g ( { \boldsymbol { \alpha } } ) \neq 0$ Hence for all $\mathbf { S }$ in a neighborhood of $\alpha$ we have

$$
f ^ { \prime } ( s ) = { \frac { g ^ { \prime } ( s ) } { ( s - \alpha ) ^ { k } } } - { \frac { k g ( s ) } { ( s - \alpha ) ^ { k + 1 } } } = { \frac { g ( s ) } { ( s - \alpha ) ^ { k } } } \left\{ { \frac { - k } { s - \alpha } } + { \frac { g ^ { \prime } ( s ) } { g ( s ) } } \right\} .
$$

Thus

$$
\frac { f ^ { \prime } ( s ) } { f ( s ) } = \frac { - k } { s - \alpha } + \frac { g ^ { \prime } ( s ) } { g ( s ) } .
$$

This proves the lemma since $g ^ { \prime } ( s ) / g ( s )$ is analytic at $\alpha$

# Theorem 13.8 The function

$$
F ( s ) = - \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } - \frac { 1 } { s - 1 }
$$

is analytic at $s = 1$

PRooF. By Lemma 4, $- \zeta ^ { \prime } ( s ) / \zeta ( s )$ has a first order pole at 1 with residue 1, as does $1 / ( s \mathrm { ~ - ~ } 1 )$ . Hence their difference is analytic at $s = 1$ . □

Theorem 13.9 For $x \ge 1$ we have

$$
\frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } - \frac { 1 } { 2 } \bigg ( 1 - \frac { 1 } { x } \bigg ) ^ { 2 } = \frac { 1 } { 2 \pi } \int _ { - \infty } ^ { \infty } h ( 1 + i t ) e ^ { i t \log x } d t ,
$$

where the integral $\int _ { - \infty } ^ { \infty } | h ( 1 + i t ) |$ dt converges. Therefore, by the Riemann-Lebesgue lemna we have

$$
\psi _ { 1 } ( x ) \sim x ^ { 2 } / 2
$$

and hence

$$
\psi ( x ) \sim x \quad a s x  \infty .
$$

13: Analytic proof of the prime number theorem

PRooF. In Theorem 13.3 we proved that if $c > 1$ and $x \ge 1$ we have

$$
{ \frac { \psi _ { 1 } ( x ) } { x ^ { 2 } } } - { \frac { 1 } { 2 } } \left( 1 - { \frac { 1 } { x } } \right) ^ { 2 } = { \frac { 1 } { 2 \pi i } } \int _ { c - \infty i } ^ { c + \infty i } x ^ { s - 1 } h ( s ) d s ,
$$

where

$$
h ( s ) = \frac { 1 } { s ( s + 1 ) } \biggl ( - \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } - \frac { 1 } { s - 1 } \biggr ) .
$$

Our first task is to show that we can move the path of integration to the line $\sigma = 1$ . To do this we apply Cauchy's theorem to the rectangle $R$ shown in Figure 13.3. The integral of $x ^ { s - 1 } h ( s )$ around $R$ is 0 since the integrand is analytic inside and on $R$ Now we show that the integrals along the horizontal segments tend to 0 as $T \to \infty$ . Since the integrand has the same absolute value at conjugate points, it suffices to consider only the upper segment, $t = T .$ On this segment we have the estimates

![](images/4cb2e86b0efa2089da3478b101df6fa42888bbdba3746646fe2af5119c3fc3df.jpg)  
Figure 13.3

$$
\left| { \frac { 1 } { s ( s + 1 ) } } \right| \leq { \frac { 1 } { T ^ { 2 } } } \qquad \mathrm { a n d } \ \left| { \frac { 1 } { s ( s + 1 ) ( s - 1 ) } } \right| \leq { \frac { 1 } { T ^ { 3 } } } \leq { \frac { 1 } { T ^ { 2 } } } .
$$

Also, there is a constant $M$ such that $| \zeta ^ { \prime } ( s ) / \zeta ( s ) | \le M \log ^ { 9 } t$ if $\sigma \geq 1$ and $t \geq e$ . Hence if $T \geq e$ we have

$$
| h ( s ) | \leq { \frac { M \log ^ { 9 } T } { T ^ { 2 } } }
$$

so that

$$
\left| \int _ { 1 } ^ { c } x ^ { s - 1 } h ( s ) \ d s \right| \leq \int _ { 1 } ^ { c } x ^ { c - 1 } { \frac { M \log ^ { 9 } T } { T ^ { 2 } } } d \sigma = M x ^ { c - 1 } { \frac { \log ^ { 9 } T } { T ^ { 2 } } } ( c - 1 ) .
$$

Therefore the integrals along the horizontal segments tend to 0 as $T \to \infty$ , and hence we have

$$
\int _ { c - \infty i } ^ { c + \infty i } x ^ { s - 1 } h ( s ) d s = \int _ { 1 - \infty i } ^ { 1 + \infty i } x ^ { s - 1 } h ( s ) d s .
$$

On the line $\sigma = 1$ we write $s = 1 + i t$ to obtain

$$
\frac { 1 } { 2 \pi i } \int _ { 1 - \infty i } ^ { 1 + \infty i } x ^ { s - 1 } h ( s ) d s = \frac { 1 } { 2 \pi } \int _ { - \infty } ^ { \infty } h ( i + i t ) e ^ { i t \log x } d t .
$$

Now we note that

$$
\int _ { - \infty } ^ { \infty } | h ( 1 + i t ) | d t = \int _ { - e } ^ { e } + \int _ { e } ^ { \infty } + \int _ { - \infty } ^ { - e } .
$$

In the integral from $e$ to $\infty$ we have

$$
| h ( 1 + i t ) | \leq { \frac { M \log ^ { 9 } t } { t ^ { 2 } } }
$$

so $\int _ { e } ^ { \infty } | h ( 1 + i t ) |$ dt converges. Similarly, $\int _ { - \infty } ^ { - e }$ converges, so $\int _ { - \infty } ^ { \infty } \left| h ( 1 + i t ) \right| d t$ converges. Thus we may apply the Riemann-Lebesgue lemma to obtain $\psi _ { 1 } ( x ) \sim x ^ { 2 } / 2$ . By Theorem 13.1 this implies $\psi ( x ) \sim x$ as $x \to \infty$ , and this completes the proof of the prime number theorem. □

# 13.8 Zero-free regions for $\zeta ( s )$

The inequality $| 1 / \zeta ( s ) | < M \log ^ { 7 } t$ which we proved in Theorem 13.7 for $\sigma \geq 1$ and $t \geq e$ can be extended to the left of the line $\sigma = 1$ . The estimate is not obtained in a vertical strip but rather in a region somewhat like that shown in Figure 13.2 where the left boundary curve approaches the line $\sigma = 1$ asymptotically as $t  \infty$ . The inequality implies the nonvanishing of $\zeta ( s )$ in this region. More precisely, we have:

Theorem 13.10 Assume $\sigma \ge 1 / 2$ . Then there exist constants $A > 0$ and $C > 0$ such that

$$
| \zeta ( \sigma + i t ) | > { \frac { C } { \log ^ { 7 } t } }
$$

whenever

$$
1 - { \frac { A } { \log ^ { 9 } t } } < \sigma \leq 1 \qquad a n d t \geq e .
$$

This implies that $\zeta ( \sigma + i t ) \neq 0$ if o and t satisfy (25).

ProoF. The triangle inequality, used in conjunction with Theorem 13.7, gives us

$$
\begin{array} { r l r } {  { | \zeta ( \sigma + i t ) | \ge | \zeta ( 1 + i t ) | - | \zeta ( 1 + i t ) - \zeta ( \sigma + i t ) | } } \\ & { } & \\ & { } & { > \frac { B } { \log ^ { 7 } t } - | \zeta ( 1 + i t ) - \zeta ( \sigma + i t ) | , } \end{array}
$$

for some $B > 0$ . To estimate the last term we write

$$
| \zeta ( 1 + i t ) - \zeta ( \sigma + i t ) | = \bigg | \int _ { \sigma } ^ { 1 } \zeta ^ { \prime } ( u + i t ) d u \bigg | \le \int _ { \sigma } ^ { \prime } | \zeta ^ { \prime } ( u + i t ) | d u .
$$

Since $t \geq e$ we have $\log ^ { 9 } t \geq \log t \mathrm { s o } 1 - ( A / \log ^ { 9 } t ) \geq 1 - ( A / \log t ) .$ Thus, if $\pmb { \sigma }$ satisfies (25) for any $A > 0$ we can apply Theorem 13.4 to estimate $\lvert \zeta ^ { \prime } ( u + i t ) \rvert$ , giving us

$$
| \zeta ( 1 + i t ) - \zeta ( \sigma + i t ) | \leq M ( 1 - \sigma ) { \log ^ { 2 } { t } } < M \log ^ { 2 } { t } { \frac { A } { { \log ^ { 9 } { t } } } } = { \frac { M A } { { \log ^ { 7 } { t } } } } .
$$

Using this in (26) we find

$$
| \zeta ( \sigma + i t ) | > { \frac { B - M A } { \log ^ { 7 } t } } .
$$

This holds for some $B > 0$ , any $A > 0$ and some $M > 0$ depending on $A$ A value of $M$ that works for some $A$ also works for every smaller $A$ . Therefore we can choose $A$ small enough so that $B - M A > 0$ If we let $C = B - M A$ the last inequality becomes $| \zeta ( \sigma + i t ) | > C \log ^ { - 7 } t$ which proves the theorem for all $\pmb { \sigma }$ and $t$ satisfying

$$
1 - { \frac { A } { \log ^ { 9 } t } } < \sigma < 1 , \qquad { \mathrm { a n d ~ } } t \geq e .
$$

But the result also holds for $\sigma = 1$ by Theorem 13.7 so the proof is complete.

We know that $\zeta ( s ) \neq 0$ if $\sigma \geq 1$ , and the functional equation

$$
\zeta ( s ) = 2 ( 2 \pi ) ^ { 1 - s } \Gamma ( 1 - s ) \mathrm { s i n } \biggl ( \frac { \pi s } { 2 } \biggr ) \zeta ( 1 - s )
$$

shows that $\zeta ( s ) \neq 0$ if $\sigma \le 0$ except for the zeros at $s = - 2 , \ : - 4 , \ : - 6 , \ : . . .$ which arise from the vanishing of $\sin ( \pi s / 2 )$ . These are called the "trivial" zeros of $\zeta ( s ) .$ The next theorem shows that, aside from the trivial zeros, $\zeta ( s )$ has no further zeros on the real axis.

Theorem 13.11 If $\sigma > 0$ we have

$$
( 1 - 2 ^ { 1 - s } ) \zeta ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { ( - 1 ) ^ { n - 1 } } { n ^ { s } } .
$$

This implies that $\zeta ( s ) < 0 i f s$ is real and $0 < s < 1$

PRooF. First assume that $\sigma > 1$ . Then we have

$$
\begin{array} { l } { { ( 1 - 2 ^ { 1 - s } ) \zeta ( s ) = \displaystyle \sum _ { n = 1 } ^ { \infty } \displaystyle \frac { 1 } { n ^ { s } } - 2 \displaystyle \sum _ { n = 1 } ^ { \infty } \displaystyle \frac { 1 } { ( 2 n ) ^ { s } } } } \\ { { = ( 1 + 2 ^ { - s } + 3 ^ { - s } + \cdot \cdot \cdot ) - 2 ( 2 ^ { - s } + 4 ^ { - s } + 6 ^ { - s } + \cdot \cdot \cdot ) } } \\ { { = 1 - 2 ^ { - s } + 3 ^ { - s } - 4 ^ { - s } + 5 ^ { - s } - 6 ^ { - s } + \cdot \cdot \cdot , } } \end{array}
$$

which proves (27) for $\sigma > 1$ . However, if $\sigma > 0$ the series on the right converges, so (27) also holds for $\sigma > 0$ by analytic continuation.

When s is real the series in (27) is an alternating series with a positive sum. If $0 < s < 1$ the factor $( 1 - 2 ^ { 1 - s } )$ is negative hence $\zeta ( s )$ is also negative.□

# 13.9 The Riemann hypothesis

In his famous 8-page memoir on $\pi ( x )$ published in 1859, Riemann [58] stated that it seems likely that the nontrivial zeros of $\zeta ( s )$ all lie cn the line $\sigma = 1 / 2$ , although he could not prove this. The assertion that all the nontrivial zeros have real part $1 / 2$ is now called the Riemann hypothesis. In 1900 Hilbert listed the problem of proving or disproving the Riemann hypothesis as one of the most important problems confronting twentieth century mathematicians. To this day it remains unsolved.

The Riemann hypothesis has attracted the attention of many eminent mathematicians and a great deal has been discovered about the distribution of the zeros of $\zeta ( s )$ . The functional equation shows that all the nontrivial zeros (if any exist) must lie in the strip $0 < \sigma < 1$ , the so-called "critical strip." It is easy to show that the zeros are symmetrically located about the real axis and about the "critical line" $\sigma = 1 / 2$

In 1915 Hardy proved that an infinite number of zeros are located on the critical line. In 1921 Hardy and Littlewood showed that the number of zeros on the line segment joining $1 / 2$ to $( 1 / 2 ) + i T$ is at least $_ { A T }$ for some positive constant $A$ ,if $T$ is suficiently large. In 1942 Selberg improved this by showing that the number is at least $A T \log T$ for some $A > 0$ It is also known that the number in the critical strip with $0 < t < T$ is asymptotic to $T$ log $T / 2 \pi$ as $T \to \infty$ , so Selberg's result shows that a positive fraction of the zeros lie on the critical line. Recently (1974) Levinson showed that this fraction is at least $7 / 1 0 .$ That is, the constant in Selberg's theorem satisfies $A \geq 7 / 2 0 \pi .$ ,

Extensive calculations by Gram, Backlund, Lehmer, Haselgrove, Rosser, Yohe, Schoenfeld, and others have shown that the first three-and-a-half million zeros above the real axis are on the critical line. In spite of all this evidence in favor of the Riemann hypothesis, the calculations also reveal certain phenomena which suggest that counterexamples to the Riemann hypothesis might very well exist. For a fascinating account of the story of large-scale calculations concerning $\zeta ( s )$ the reader should consult [17].

# 13.10 Application to the divisor function

The prime number theorem can sometimes be used to estimate the order of magnitude of multiplicative arithmetical functions. In this section we use it to derive inequalities for $d ( n ) ,$ , the number of divisors of $\pmb { n }$

In Chapter 3 we proved that the average order of $d ( n )$ is log ${ \pmb n } .$ When n is prime we have $d ( n ) = 2$ so the growth of $d ( n )$ is most pronounced when $\pmb { n }$ has many divisors. Suppose $\pmb { n }$ is the product of al the primes $\leq x ,$ say

$$
\mathfrak { n } = 2 \cdot 3 \cdot 5 \cdot \cdot \cdot \cdot \mathfrak { p } _ { \pi ( \mathfrak { x } ) } .
$$

Since $d ( n )$ is multiplicative we have

$$
d ( n ) = d ( 2 ) d ( 3 ) \cdot \cdot \cdot d ( p _ { \pi ( x ) } ) = 2 ^ { \pi ( x ) } .
$$

For large $x , \pi ( x )$ is approximately $x / 1 0 { \mathfrak { g } } x$ and (28) implies that

$$
\log n = \sum _ { p \leq x } \log p = \vartheta ( x ) \sim x
$$

so $2 ^ { \pi ( x ) }$ is approximately 2log n/ 1og logn, Now

$$
2 ^ { a { \mathrm { ~ l o g } } n } = e ^ { a { \mathrm { ~ l o g } } n { \mathrm { ~ l o g } } 2 } = n ^ { a { \mathrm { ~ l o g } } 2 }
$$

hence $2 ^ { 1 0 8 ^ { n / } }$ 10g $\log n = n ^ { \log 2 / }$ log logn. In other words, when $\pmb { n }$ is of the form (28) then $d ( n )$ is approximately $2 ^ { 1 0 8 ^ { n / } }$ log $\log n = n ^ { \log 2 / }$ log logn.

By pursuing this idea with a little more care we obtain the following inequalities for $d ( n )$

Theorem 13.12 Let $\varepsilon > 0$ be given. Then we have:

(a) There exists an integer $N ( \varepsilon )$ such that $n \geq N ( \varepsilon )$ implies

$$
d ( n ) < 2 ^ { ( 1 + \varepsilon ) \log n / \log \log n } = n ^ { ( 1 + \varepsilon ) \log 2 / \log \log n } .
$$

(b) For infinitely many $\pmb { n }$ we have

$$
d ( n ) > 2 ^ { ( 1 - \varepsilon ) \log n / \log \log n } = n ^ { ( 1 - \varepsilon ) \log 2 / \log \log n } .
$$

Note. These inequalities are equivalent to the relation

$$
\operatorname* { l i m } _ { n \to \infty } \operatorname* { s u p } { \frac { \log d ( n ) { \log \log n } } { \log n } } = \log 2 .
$$

PROOF. Write $n = { p _ { 1 } } ^ { a _ { 1 } } \cdot \cdot \cdot { p _ { k } } ^ { a _ { k } }$ , so that $\begin{array} { r } { d ( n ) = \prod _ { i = 1 } ^ { k } ( a _ { i } + 1 ) . } \end{array}$ We split the product into two parts, separating those prime divisors $< f ( n )$ from those $\geq f ( n ) ,$ where $f ( n )$ will be specified later. Then $d ( n ) = P _ { 1 } ( n ) P _ { 2 } ( n )$ where

$$
P _ { 1 } ( n ) = \prod _ { p _ { i } < f ( n ) } ( a _ { i } + 1 ) \qquad \mathrm { a n d } ~ P _ { 2 } ( n ) = \prod _ { p _ { i } \geq f ( n ) } ( a _ { i } + 1 ) .
$$

In the product $P _ { 2 } ( n )$ we use the inequality $( a + 1 ) \leq 2 ^ { a }$ to obtain $P _ { 2 } \{ n \} \leq$ $2 ^ { \pmb { s } ( \pmb { n } ) }$ , where

$$
S ( n ) = \sum _ { \stackrel { i = 1 } { p _ { i } \geq f ( n ) } } ^ { k } a _ { i } .
$$

Now

$$
n = \prod _ { i = 1 } ^ { k } p _ { i } { } ^ { a _ { i } } \ge \prod _ { p _ { i } \ge f ( n ) } p _ { i } { } ^ { a _ { i } } \ge \prod _ { p _ { i } \ge f ( n ) } f ( n ) ^ { a _ { i } } = f ( n ) ^ { S ( n ) } ,
$$

hence

$$
\log n \geq S ( n ) \log f ( n ) , \qquad { \mathrm { o r ~ } } S ( n ) \leq { \frac { \log n } { \log f ( n ) } } .
$$

This gives us

$$
P _ { 2 } ( n ) \leq 2 ^ { \log n / \log f ( n ) } .
$$

To estimate $P _ { 1 } ( n )$ we write

$$
P _ { 1 } ( n ) = \exp \Biggl \{ \sum _ { p _ { i } < f ( n ) } \log ( a _ { i } + 1 ) \Biggr \}
$$

and show that $\log ( a _ { i } + 1 ) < 2$ 1og 1og $\pmb { n }$ if $\pmb { n }$ is suficiently large. In fact, we have

$$
n \geq p _ { i } ^ { \ a _ { i } } \geq 2 ^ { a _ { i } }
$$

hence

$$
\log n \geq a _ { \mathrm { i } } \log 2 , \qquad { \mathrm { o r ~ } } a _ { i } \leq \log n / \log 2 .
$$

Therefore

$$
1 + a _ { i } \leq 1 + { \frac { \log n } { \log 2 } } < ( \log n ) ^ { 2 } \quad { \mathrm { i f ~ } } n \geq n _ { 1 }
$$

for some $n _ { 1 }$ . Thus $n \geq n _ { 1 }$ implies $\log ( 1 + a _ { i } ) < \log ( \log n ) ^ { 2 } = 2$ log log n. This gives us

$$
P _ { 1 } ( n ) < \exp \biggl \{ 2 \log \log n \sum _ { p _ { i } < f ( n ) } 1 \biggr \} \leq \exp \{ 2 \log \log n \pi ( f ( n ) ) \} .
$$

Using the inequality $\pi ( x ) < 6 x / 1 0 \mathrm { g } x$ (see Theorem 4.6) we obtain

$$
P _ { 1 } ( n ) < \exp \left\{ { \frac { 1 2 f ( n ) \log \log n } { \log f ( n ) } } \right\} = 2 ^ { c f ( n ) \log \log n / \log f ( n ) } ,
$$

where $c = 1 2 / 1 0 \mathrm { g } 2 .$ Combining (29) and (30) we obtain $d ( n ) = P _ { 1 } ( n ) P _ { 2 } ( n ) <$ $2 ^ { \pmb { \theta } ^ { ( n ) } }$ where

$$
g ( n ) = { \frac { \log n + c f ( n ) \log \log n } { \log f ( n ) } } = { \frac { \log n } { \log \log n } } { \frac { 1 + c { \frac { f ( n ) \log \log n } { \log n } } } { \log f ( n ) } } .
$$

Now we choose $f ( n )$ to make $f ( n ) { \log \log n } / { \log n } \to 0$ and also to make log $f ( n ) / \log \log n \to 1$ as $n  \infty$ . For this it suffices to take

$$
f ( n ) = { \frac { \log n } { ( \log \log n ) ^ { 2 } } } .
$$

Then

$$
g ( n ) = { \frac { \log n } { \log \log n } } { \frac { 1 + o ( 1 ) } { 1 + o ( 1 ) } } = { \frac { \log n } { \log \log n } } ( 1 + o ( 1 ) ) < ( 1 + \varepsilon ) { \frac { \log n } { \log \log n } }
$$

if $n \geq N ( \varepsilon )$ for some $N ( \varepsilon )$ This proves part (a).

To prove part (b) we pick a set of integers n with a large number of prime factors. In fact, we take $\pmb { n }$ to be the product of all the primes $\leq x .$ Then $n  \infty$ if and only if $x \to \infty$ . For such $\pmb { n }$ we have, by the prime number theorem,

$$
d ( n ) = 2 ^ { \pi ( x ) } = 2 ^ { ( 1 + o ( 1 ) ) x / \log x } .
$$

Also for such $n$ we have

$$
\log n = \sum _ { p \leq x } \log p = \vartheta ( x ) = x ( 1 + o ( 1 ) )
$$

sO

$$
x = { \frac { \log n } { 1 + o ( 1 ) } } = ( 1 + o ( 1 ) ) { \log n }
$$

hence

$$
\begin{array} { l } { \log x = \log \log n + \log ( 1 + o ( 1 ) ) = \log \log n \Bigg ( 1 + \frac { \log ( 1 + o ( 1 ) ) } { \log \log n } \Bigg ) } \\ { = ( 1 + o ( 1 ) ) \mathrm { l o g } \mathrm { l o g } n . } \end{array}
$$

Therefore $x / 1 0 { \bf g } x = ( 1 + o ( 1 ) ) \log n / \log \log n$ and

$$
d \left( n \right) = 2 ^ { ( 1 + o ( 1 ) ) \log { n / \log { \mathrm { ~ l o g ~ } } n } }
$$

for such $\pmb { n }$ But $1 + o ( 1 ) > 1 - \varepsilon$ if $n \geq N ( \varepsilon )$ for some $N ( \varepsilon ) _ { : }$ and this proves (b).

Note. As a corollary of Theorem 13.12 we obtain the relation

$$
d ( n ) = o ( n ^ { \delta } )
$$

for every $\delta > 0$ This result can also be derived without the use of the prime number theorem. (See Exercise 13.13.)

# 13.11 Application to Euler's totient

The type of argument used in the foregoing section can also be used to obtain inequalities for $\varphi ( n )$ .When $\pmb { n }$ is prime we have $\varphi ( n ) = n - 1 .$ When $\pmb { n }$ has a large number of prime factors $\varphi ( n )$ will be much smaller. In fact, if $\pmb { n }$ is the product of all primes $\leq x$ we have

$$
\varphi ( n ) = n \prod _ { p \leq x } { \left( 1 - { \frac { 1 } { p } } \right) } .
$$

The next theorem gives the asymptotic behavior of this product for large $x$

Theorem 13.13 There is a positive constant $^ c$ such that, for $x \geq 2 .$

$$
\prod _ { p \leq x } { \left( 1 - { \frac { 1 } { p } } \right) } = { \frac { c } { \log x } } + O { \left( { \frac { 1 } { \log ^ { 2 } x } } \right) } .
$$

Note.It can be shown that $c = e ^ { - c }$ where $C$ is Euler's constant. (See[31].)

PROOF.Let $P ( x )$ denote the productin(32). Then log $\begin{array} { r } { P ( x ) = \sum _ { p \leq x } \log ( 1 - 1 / p ) . } \end{array}$ To estimate this sum we use the power series expansion

$$
- \log ( 1 - t ) = t + { \frac { t ^ { 2 } } { 2 } } + { \frac { t ^ { 3 } } { 3 } } + \cdots + { \frac { t ^ { n } } { n } } + \cdots ( | t | < 1 )
$$

with $t = 1 / p$ Transposing one term we ind, with $a _ { p } = - \log ( 1 - 1 / p ) - 1 / p ,$

$$
0 < a _ { p } = { \frac { 1 } { 2 p ^ { 2 } } } + { \frac { 1 } { 3 p ^ { 3 } } } + \cdots < { \frac { 1 } { 2 } } \left( { \frac { 1 } { p ^ { 2 } } } + { \frac { 1 } { p ^ { 3 } } } + \cdots \right) = { \frac { 1 } { 2 p ( p - 1 ) } } .
$$

This inequality shows that the infinite series

$$
\sum _ { p } a _ { p } = \sum _ { p } \left\{ - \log \left( 1 - { \frac { 1 } { p } } \right) - { \frac { 1 } { p } } \right\}
$$

converges, since it is dominated by $\textstyle \sum _ { n = 2 } ^ { \infty } 1 / n ( n - 1 )$ If $B$ denotes the sum of the series in (33) we have

$$
0 < B - \sum _ { p \leq x } a _ { p } = \sum _ { p > x } a _ { p } \leq \sum _ { n \geq x } { \frac { 1 } { n ( n - 1 ) } } = - \sum _ { n \geq x } \left( { \frac { 1 } { n } } - { \frac { 1 } { n - 1 } } \right) = O { \binom { 1 } { x } } .
$$

Hence

$$
\sum _ { p \leq x } a _ { p } = B + O \biggl ( \frac { 1 } { x } \biggr ) ,
$$

or

$$
- \log P ( x ) = \sum _ { p \leq x } { \frac { 1 } { p } } + B + O { \biggl ( } { \frac { 1 } { x } } { \biggr ) } .
$$

But by Theorem 4.12 the sum on the right is log log $x + A + O ( 1 / \log x )$ so

$$
\log P ( x ) = - \log \log x - B - A + O { \biggl ( } { \frac { 1 } { \log x } } { \biggr ) } .
$$

Therefore

$$
P ( x ) = \exp \{ \log P ( x ) \} = e ^ { - B - A } e ^ { - \log \log x } e ^ { O ( 1 / \log x ) } .
$$

Now let $c = e ^ { - B - A }$ and use the inequality $e ^ { u } = 1 + O ( u )$ for $0 < u < 1$ to obtain

$$
P ( x ) = { \frac { c } { \log x } } \left\{ 1 + O { \left( { \frac { 1 } { \log x } } \right) } \right\} = { \frac { c } { \log x } } + O { \left( { \frac { 1 } { \log ^ { 2 } x } } \right) } .
$$

This completes the proof.

Theorem 13.14 Let c be the constant of Theorem 13.13, and let $\varepsilon > 0$ be given. (a) There exists an $N ( \varepsilon )$ such that

$$
\varphi ( n ) \geq ( 1 - \varepsilon ) { \frac { c n } { \log \log n } } \quad f o r \ a l l \ n \geq N ( \varepsilon ) .
$$

(b) For infinitely many $\pmb { n }$ we have

$$
\varphi ( n ) \leq ( 1 + \varepsilon ) { \frac { c n } { \log \log n } } .
$$

In other words,

$$
\operatorname* { l i m } _ { n \to \infty } { \frac { \varphi ( n ) \log \log n } { n } } = c .
$$

PRooF. We prove part (b) first. Take $n = \prod _ { p \leq x } p$ Then

$$
\frac { \varphi ( n ) } { n } = \prod _ { p \leq x } \biggl ( 1 - \frac { 1 } { p } \biggr ) = \frac { c } { \log x } + O \biggl ( \frac { 1 } { \log ^ { 2 } x } \biggr ) .
$$

But 1c $\mathfrak { g } n = \mathfrak { g } ( x ) = ( 1 + o ( 1 ) ) x .$ so log log $n = ( 1 + o ( 1 ) ) \log x ,$ hence

$$
{ \frac { \varphi ( n ) } { n } } = { \frac { c ( 1 + o ( 1 ) ) } { \log \log n } } + O { \left( { \frac { 1 } { ( \log \log n ) ^ { 2 } } } \right) } = { \frac { c ( 1 + o ( 1 ) ) } { \log \log n } } \leq ( 1 + \varepsilon ) { \frac { c } { \log \log n } }
$$

if $n \geq N ( \varepsilon )$ for some $N ( \mathfrak { e } )$ This proves (b).

To prove (a) take any $n > 1$ and write

$$
{ \frac { \varphi ( n ) } { n } } = \prod _ { p \mid n } \left( 1 - { \frac { 1 } { p } } \right) = P _ { 1 } ( n ) P _ { 2 } ( n )
$$

where

$$
P _ { 1 } ( n ) = \prod _ { \stackrel { p \mid n } { p \leq \log n } } \bigg ( 1 - \frac { 1 } { p } \bigg ) , \mathrm { a n d } P _ { 2 } ( n ) = \prod _ { \stackrel { p \mid n } { p > \log n } } \bigg ( 1 - \frac { 1 } { p } \bigg ) .
$$

Then

$$
P _ { 2 } ( n ) > \prod _ { \stackrel { p \mid n } { p > \log n } } \left( 1 - { \frac { 1 } { \log n } } \right) = \left( 1 - { \frac { 1 } { \log n } } \right) ^ { f ( n ) }
$$

where $f ( n )$ is the number of primes which divide $_ n$ and exceed log n. Since

$$
n \geq \prod _ { p \mid n } p > \prod _ { \stackrel { p \mid n } { p > \log n } } p \geq ( \log n ) ^ { f ( n ) }
$$

we find $\log n > f ( n ) \log \log n ,$ so $f ( n ) < \log n / \log \log n .$ Since $1 - \{ 1 / \log n \}$ $< 1$ , inequality (34) gives us

$$
P _ { 2 } ( n ) > { \Biggl ( } 1 - { \frac { 1 } { \log n } } { \Biggr ) } ^ { \log n / \log \log n } = \left\{ { \Biggl ( } 1 - { \frac { 1 } { \log n } } { \Biggr ) } ^ { \log n } \right\} ^ { 1 / \log \log n } .
$$

Now $( 1 - ( 1 / u ) ) ^ { u } \to e ^ { - 1 }$ as $u \to \infty$ so the last member in (35) tends to 1 as $n \to \infty$ . Hence (35) gives us

$$
P _ { 2 } ( n ) > 1 + o ( 1 ) \quad \mathrm { a s \ } n \to \infty .
$$

Therefore

$$
\begin{array} { l } { { \displaystyle { \frac { \varphi ( n ) } { n } } = P _ { 1 } ( n ) P _ { 2 } ( n ) > ( 1 + o ( 1 ) ) \prod _ { p \mid n } \left( 1 - { \frac { 1 } { p } } \right) \geq ( 1 + o ( 1 ) ) \prod _ { p \leq \log n } \left( 1 - { \frac { 1 } { p } } \right) } } \\ { ~ } \\ { { \displaystyle ~ = ( 1 + o ( 1 ) ) \frac { c } { \log \log n } ( 1 + o ( 1 ) ) \geq ( 1 - \varepsilon ) \frac { c } { \log \log n } } } \end{array}
$$

if $n \geq N ( \varepsilon )$ . This proves part (a).

# 13.12 Extension of Polya's inequality for character sums

We conclude this chapter by extending Polya's inequality (Theorem 8.21) to arbitrary nonprincipal characters. The proof makes use of the estimate for the divisor function,

$$
d ( n ) = O ( n ^ { \delta } )
$$

obtained in (31).

Theorem 13.15 If x is any nonprincipal character mod $k$ , then for all $x \ge 2$ we have

$$
\sum _ { m \leq x } \chi ( m ) = O ( { \sqrt { k } } \log k ) .
$$

13: Analytic proof of the prime number theorem

PROOF. If $\chi$ is primitive, Theorem 8.21 shows that

$$
\sum _ { m \leq x } \chi ( m ) < { \sqrt { k } } \log k .
$$

Now consider any nonprincipal character $\chi$ mod $k$ and let $c$ denote the conductor of $\mathbb { X }$ Then $c | k , c < k ,$ and we can write

$$
\chi ( m ) = \psi ( m ) \chi _ { 1 } ( m )
$$

where $\mathbb { \chi } _ { 1 }$ is the principal character mod $k$ and $\psi$ is a primitive character mod $c$ .Then

$$
\begin{array} { l } { { \displaystyle \sum _ { m \leq x } \chi ( m ) = \sum _ { \stackrel { m \leq x } { i = n } } \psi ( m ) = \sum _ { m \leq x } \psi ( m ) \sum _ { d \mid ( m , k ) } \mu ( d ) = \sum _ { \stackrel { m \leq x } { d \mid k } } \sum _ { d \mid k } \mu ( d ) \psi ( m ) } } \\ { { \mathrm { } } } \\ { { \displaystyle \qquad = \sum _ { d \mid k } \mu ( d ) \sum _ { q \leq x / d } \psi ( q d ) = \sum _ { d \mid k } \mu ( d ) \psi ( d ) \sum _ { q \leq x / d } \psi ( q ) . } } \end{array}
$$

Hence

$$
\left| \sum _ { m \leq x } \chi ( m ) \right| \leq \sum _ { d \mid k } \left| \mu ( d ) \psi ( d ) \right| \left| \ \sum _ { q \leq x / d } \psi ( q ) \right| < \sqrt { c } \log c \sum _ { d \mid k } \left| \mu ( d ) \psi ( d ) \right|
$$

because $\psi$ is primitive mod $c$ In the last sum each factor $| \mu ( d ) \psi ( d ) |$ is either 0 or 1. If $| \mu ( d ) \psi ( d ) | = 1$ then $| \mu ( d ) | = 1$ so $d$ is a squarefree divisor of $k$ say

$$
d = p _ { 1 } p _ { 2 } \cdots p _ { r } .
$$

Also, $| \psi ( d ) \} = 1$ so $\left( d , c \right) = 1$ which means no prime factor $p _ { i }$ divides $c$ Hence each $p _ { i }$ divides $k / c$ so $d$ divides $k / c$ . In other words,

$$
\sum _ { d \mid k } | \mu ( d ) \psi ( d ) | \leq \sum _ { d \mid k / c } 1 = d { \binom { k } { c } } = O { \binom { \left( { k } \right) ^ { \delta } } { c } }
$$

for every $\delta > 0 .$ In particular, $d ( k / c ) = O ( \sqrt { k / c } )$ so (36) implies

$$
\sum _ { m \leq x } \chi ( m ) = O \bigg ( \sqrt { \frac { k } { c } } \sqrt { c } \log c \bigg ) = O ( \sqrt { k } \log c ) = O ( \sqrt { k } \log k ) .
$$

# Exercises for Chapter 13

1. Chebyshev proved that if $\psi ( x ) / x$ tends to a limit as $x  \infty$ then this limit equals 1. A proof was outlined in Exercise 4.26. This exercise outlines another proof based on the identity

$$
- { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } = s \int _ { 1 } ^ { \infty } { \frac { \psi ( x ) } { x ^ { s + 1 } } } d x , \qquad ( \sigma > 1 )
$$

given in Exercise 11.1(d).

(a) Prove that $( 1 - s ) \zeta ^ { \prime } ( s ) / \zeta ( s ) \to 1$ as $s \to 1 ,$ (b) Let $\delta = \operatorname* { l i m } \operatorname* { s u p } ( \psi ( x ) / x )$ Given $\varepsilon > 0 .$ choose $N = N ( \varepsilon )$ so that $x \ge N$ implies $\pmb { x }  \pmb { \alpha }$ $\psi ( x ) \leq ( \delta + \varepsilon ) x$ . Keep $s$ real, $1 < s \leq 2$ , split the integral in (37) into two parts, $\int _ { 1 } ^ { N } + \int _ { N } ^ { \infty }$ , and estimate each part to obtain the inequality

$$
- \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } \leq C ( \varepsilon ) + \frac { s ( \delta + \varepsilon ) } { s - 1 } ,
$$

where $C ( \varepsilon )$ is a constant independent of s. Use (a) to deduce that $\delta \gtrsim 1$

(c) Let $\gamma = \operatorname* { l i m } \operatorname* { i n f } ( \psi ( x ) / x )$ and use a similar argument to deduce that $\gamma \leq 1$ . $\pmb { x }  \infty$ Therefore if $\psi ( x ) / x$ tends to a limit as $x \to \infty$ then $\gamma = \delta = 1$ .

2. Let $\begin{array} { r } { A ( x ) = \sum _ { n \leq x } a ( n ) , } \end{array}$ where

$$
a ( n ) = { \left\{ \begin{array} { l l } { 0 } & { { \mathrm { i f ~ } } n \neq { \mathrm { a ~ p r i m e ~ p ~ } } } \\ { 1 } \\ { { \overline { { k } } } } & { { \mathrm { i f ~ } } n = p ^ { k } . } \end{array} \right. }
$$

Prove that $A ( x ) = \pi ( x ) + O ( { \sqrt { x } } \log \log x ) .$

3. (a) If $c > 1$ and $x \neq$ integer, prove that if $x > 1$ ,

$$
\frac { 1 } { 2 \pi i } \int _ { c - \infty i } ^ { c + \infty i } \log \zeta ( s ) \frac { x ^ { s } } { s } d s = \pi ( x ) + \frac { 1 } { 2 } \pi ( x ^ { 1 / 2 } ) + \frac { 1 } { 3 } \pi ( x ^ { 1 / 3 } ) + \cdot \cdot \cdot .
$$

(b) Show that the prime number theorem is equivalent to the asymptotic relation

$$
\frac { 1 } { 2 \pi i } \int _ { c - \infty } ^ { c + \infty i } \log \zeta ( s ) \frac { x ^ { s } } { s } d s \sim \frac { x } { \log x } \quad \mathrm { a s ~ } x  \infty .
$$

A proof of the prime number theorem based on this relation was given by Landau in 1903.

4. Let $\begin{array} { r } { M ( x ) = \sum _ { n \leq x } \mu ( n ) . } \end{array}$ The exact order of magnitude of $M ( x )$ for large $x$ is not known. In Chapter 4 it was shown that the prime number theorem is equivalent to the relation $M ( x ) = o ( x )$ as $x \to \infty$ . This exercise relates the order of magnitude of $M ( x )$ with the Riemann hypothesis.

Suppose there is a positive constant $\theta$ such that

$$
M ( x ) = O ( x ^ { \theta } ) \quad { \mathrm { f o r ~ } } x \geq 1 .
$$

Prove that the formula

$$
{ \frac { 1 } { \zeta ( s ) } } = s \int _ { 1 } ^ { \infty } { \frac { M ( x ) } { x ^ { s + 1 } } } d x ,
$$

which holds for $\sigma > 1$ (see Exercise 11.1(c)) would also be valid for $\sigma > \theta .$ Deduce that $\zeta ( s ) \neq 0$ for $\sigma > \theta ,$ In particular, this shows that the relation $M ( x ) = O ( x ^ { 1 / 2 + \varepsilon } )$ for every $\varepsilon > 0$ implies the Riemann hypothesis. It can also be shown that the Riemann hypothesis implies $M ( x ) = O ( x ^ { 1 / 2 + \varepsilon } )$ for every $\varepsilon > 0 .$ (See Titchmarsh [69], p.315.)

13: Analytic proof of the prime number theorem

5. Prove the following lemma, which is similar to Lemma 2. Let

$$
A _ { 1 } ( x ) = \int _ { 1 } ^ { x } { \frac { A ( u ) } { u } } d u ,
$$

where $A ( u )$ is a nonnegative increasing function for $u \geq 1$ . If we have the asymptotic formula

$$
A _ { 1 } ( x ) \sim L x ^ { c } \quad \mathrm { a s } x \to \infty ,
$$

for some $c > 0$ and $L > 0$ , then we also have

$$
A ( x ) \sim c L x ^ { c } \quad \mathrm { a s } x  \infty .
$$

6. Prove that

$$
{ \frac { 1 } { 2 \pi i } } \int _ { 2 - x { i } } ^ { 2 + \infty i } { \frac { y ^ { s } } { s ^ { 2 } } } d s = 0 \quad { \mathrm { i f ~ } } 0 < y < 1 .
$$

What is the value of this integral if $y \ge 1 \small { : }$

7. Express

$$
{ \frac { 1 } { 2 \pi i } } \int _ { 2 - \infty i } ^ { 2 + \infty i } { \frac { x ^ { s } } { s ^ { 2 } } } \left( - { \frac { \zeta ^ { \prime } ( s ) } { \zeta ( s ) } } \right) d s
$$

as a fi nite sum involving $\Lambda ( n )$ -

8. Let $\chi$ be any Dirichlet character mod $k$ with $\chi _ { 1 }$ the principal character. Define

$$
F ( \sigma , t ) = 3 \frac { L ^ { \prime } } { L } ( \sigma , \chi _ { 1 } ) + 4 \frac { L ^ { \prime } } { L } ( \sigma + i t , \chi ) + \frac { L ^ { \prime } } { L } ( \sigma + 2 i t , \chi ^ { 2 } ) .
$$

If $\sigma > 1$ prove that $\boldsymbol { F } ( \sigma , t )$ has real part equal to

$$
- \sum _ { n = 1 } ^ { \infty } { \frac { \Lambda ( n ) } { n ^ { \sigma } } } \operatorname { R e } \{ 3 \chi _ { 1 } ( n ) + 4 \chi ( n ) n ^ { - i t } + \chi ^ { 2 } ( n ) n ^ { - 2 i t } \}
$$

and deduce that Re $F ( \sigma , t ) \leq 0 .$

9. Assume that $L ( s , \chi )$ has a zero of order $m \geq 1$ at $s = 1 + i t$ . Prove that for this $t$ we have:

$$
\frac { L ^ { \prime } } { L } ( \sigma + i t , \chi ) = \frac { m } { \sigma - 1 } + O ( 1 ) \quad \mathrm { a s } \ \sigma  1 + ,
$$

and

(b) there exists an integer $r \geq 0$ such that

$$
\frac { L ^ { \prime } } { L } ( \sigma + 2 i t , \chi ^ { 2 } ) = \frac { r } { \sigma - 1 } + O ( 1 ) \mathrm { a s } \sigma  1 + ,
$$

except when $\chi ^ { 2 } = \chi _ { 1 }$ and $\mathbf { \nabla } _ { t } = 0 .$

10. Use Exercises 8 and 9 to prove that

$$
L ( 1 + i t , \chi ) \neq 0 \mathrm { \quad f o r ~ a l l ~ r e a l ~ } t \mathrm { \ i f ~ } \chi ^ { 2 } \neq \chi _ { 1 }
$$

and that

$$
L ( 1 + i t , \chi ) \neq 0
$$

$$
[ H i n t : C o n s i d e r \ F ( \sigma , t ) \ { \mathrm { a s } } \ \sigma \to 1 + . ]
$$

11. Foranyarithmeticalfunction $f ( n ) ,$ prove that thefollowing statements are equivalent :

(a) $f ( n ) = O ( n ^ { \varepsilon } )$ for every $\varepsilon > 0$ and all $n \geq n _ { 1 }$ (b) $f ( n ) = o ( n ^ { \delta } )$ for every $\delta > 0$ as $n  \infty$ .

12. Let $f ( n )$ be a multiplicative function such that if $p$ is prime then

$$
f ( p ^ { m } ) \to 0 \quad \mathrm { a s } p ^ { m } \to \infty .
$$

That is, for every $\varepsilon > 0$ there is an $N ( \varepsilon )$ such that $| f ( p ^ { m } ) | < \varepsilon$ whenever $p ^ { m } > N ( \varepsilon ) .$ Prove that $f ( n )  0$ as $n  \infty$ .

[Hint: There is a constant $A > 0$ such that $| f ( p ^ { m } ) | < A$ for all primes $p$ and all $m \geq 0 .$ , and a constant $B > 0$ such that $| f ( p ^ { m } ) | < 1$ whenever $p ^ { m } > B . ]$

13. If $\alpha \geq 0$ let $\begin{array} { r } { \sigma _ { a } ( n ) = \sum _ { d \mid n } d ^ { \alpha } } \end{array}$ .Prove that for every $\delta > 0$ we have

$$
\sigma _ { \alpha } ( n ) = o ( n ^ { \alpha + \delta } ) \quad { \mathrm { a s ~ } } n \to \infty .
$$

[Hint: Use Exercise 12.]

# 14 Partitions

# 14.1 Introduction

Until now this book has been concerned primarily with multiplicative number theory, a study of arithmetical functions related to prime factorization of integers. We turn now to another branch of number theory called additive number theory. A basic problem here is that of expressing a given positive integer $\pmb { n }$ as a sum of integers from some given set $A$ say

$$
A = \{ a _ { 1 } , a _ { 2 } , \ldots \} ,
$$

where the elements $a _ { i }$ are special numbers such as primes, squares, cubes, triangular numbers, etc. Each representation of $\pmb { n }$ as a sum of elements of $A$ is called a partition of $\pmb { n }$ and we are interested in the arithmetical function $A ( n )$ which counts the number of partitions of $_ n$ into summands taken from $A$ We illustrate with some famous examples.

Goldbach conjecture Every even $n > 4$ is the sum of two odd primes.

In this example $A ( n )$ is the number of solutions of the equation

$$
n = p _ { 1 } + p _ { 2 } ,
$$

where the $p _ { i }$ are odd primes. Goldbach's assertion is that $A ( n ) \geq 1$ for even $n > 4 .$ . This conjecture dates back to 1742 and is undecided to this date. In 1937 the Russian mathematician Vinogradov proved that every suficiently large odd number is the sum of three odd primes. In 1966 the Chinese mathematician Chen Jing-run proved that every suficiently large even number is the sum of a prime plus a number with no more than two prime factors. (See [10].)

Representation by squares For a given integer $k \geq 2$ consider the partition function $r _ { k } ( n )$ which counts the number of solutions of the equation

$$
n = { x _ { 1 } } ^ { 2 } + \cdots + { x _ { k } } ^ { 2 } ,
$$

where the $x _ { i }$ may be positive, negative or zero, and the order of summands is taken into account.

For $k = 2 , 4 , 6 $ , or 8, Jacobi [34] expressed $r _ { k } ( n )$ in terms of divisor functions. For example, he proved that

$$
r _ { 2 } ( n ) = 4 \{ d _ { 1 } ( n ) - d _ { 3 } ( n ) \} ,
$$

where $d _ { 1 } ( n )$ and $d _ { 3 } ( n )$ are the number of divisors of $\pmb { n }$ congruent to 1 and 3 mod 4, respectively. Thus, $r _ { 2 } ( 5 ) = 8$ because both divisors, 1 and 5, are congruent to 1 mod 4. In fact there are four representations given by

$$
5 = 2 ^ { 2 } + 1 ^ { 2 } = ( - 2 ) ^ { 2 } + 1 ^ { 2 } = ( - 2 ) ^ { 2 } + ( - 1 ) ^ { 2 } = 2 ^ { 2 } + ( - 1 ) ^ { 2 } ,
$$

and four more with the order of summands reversed.

For $k = 4$ Jacobi proved that

$$
\begin{array} { l } { { r _ { 4 } ( n ) = \displaystyle \sum _ { d \mid n } d = 8 \sigma ( n ) \quad \mathrm { i f ~ } n \mathrm { ~ i s ~ o d d , } } } \\ { { \displaystyle \phantom { \sum _ { d = 1 } ^ { n } } } } \\ { { \displaystyle \phantom { \sum _ { d = 1 } ^ { n } d = 8 \sigma ( n ) \sum _ { d = 1 } ^ { n } d = 8 \sigma ( n ) } } } \end{array}
$$

The formulas for $r _ { 6 } ( n )$ and $r _ { 8 } ( n )$ are a bit more complicated but of the same general type. (See [14].)

Exact formulas for $r _ { k } ( n )$ have also been found for $k = 3 , 5 ,$ or 7; they involve Jacobi's extension of Legendre's symbol for quadratic residues. For example, if $\pmb { n }$ is odd it is known that

$$
{ \begin{array} { r } { r _ { 3 } ( n ) = 2 4 \sum _ { m \leq n / 4 } ( m | n ) \quad { \mathrm { i f ~ } } n \equiv 1 { \mathrm { ~ ( m o d ~ } } 4 ) } \\ { = 8 \sum _ { m \leq n / 2 } ( m | n ) \quad { \mathrm { i f ~ } } n \equiv 3 { \mathrm { ~ ( m o d ~ } } 4 ) , } \end{array} }
$$

where now the numbers $x _ { 1 } , x _ { 2 } , x _ { 3 }$ in (2) are taken to be relatively prime.

For larger values of $k$ the analysis of $r _ { k } ( n )$ is considerably more complicated. There is a large literature on the subject with contributions by Mordell, Hardy, Littlewood, Ramanujan, and many others. For $k \geq 5$ it is known that $r _ { k } ( n )$ can be expressed by an asymptotic formula of the form

$$
r _ { k } ( n ) = \rho _ { k } ( n ) + R _ { k } ( n ) ,
$$

where $\rho _ { k } ( n )$ is the principal term, given by the infinite series

$$
\rho _ { k } ( n ) = \frac { \pi ^ { k / 2 } n ^ { k / 2 - 1 } } { \Gamma \left( \frac { k } { 2 } \right) } \sum _ { q = 1 } ^ { \infty } \sum _ { h = 1 \atop ( h , q ) = 1 } ^ { q } { \left( \frac { G ( h ; q ) } { q } \right) ^ { k } e ^ { - 2 \pi i n h / q } } ,
$$

and $R _ { k } ( n )$ is a remainder term of smaller order. The series for $\rho _ { k } ( n )$ is called the singular series and the numbers $G ( h ; q )$ are quadratic Gauss sums,

$$
G ( h ; q ) = \sum _ { r = 1 } ^ { q } e ^ { 2 \pi i h r ^ { 2 } / q } .
$$

In 1917 Mordell noted that $r _ { k } ( n )$ is the coeficient of $x ^ { n }$ in the power series expansion of the $k$ th power of the series

$$
 \vartheta = 1 + 2 \sum _ { n = 1 } ^ { \infty } x ^ { n ^ { 2 } } .
$$

The function 9 is related to elliptic modular functions which play an important role in the derivation of (3).

Waring's problem To determine whether, for a given positive integer $k$ , there is an integer $s$ (depending only on $k$ ) such that the equation

$$
n = { x _ { 1 } } ^ { k } + { x _ { 2 } } ^ { k } + \cdot \cdot \cdot + { x _ { s } } ^ { k }
$$

has solutions for every $n \geq 1$

The problem is named for the English mathematician E. Waring who stated in 1770 (without proof and with imited numerical evidence) that every $\pmb { n }$ is the sum of 4 squares, of 9 cubes, of 19 fourth powers, etc. In this example the partition function $A ( n )$ is the number of solutions of (4), and the problem is to decide if there exists an s such that $A ( n ) \geq 1$ for all n.

If s exists for a given $k$ then there is a least value of $s$ and this is denoted by $g ( k )$ . Lagrange proved the existence of $g ( 2 )$ in 1770 and, during the next 139 years, the existence of $g ( k )$ was shown for $k = 3 .$ , 4, 5, 6, 7, 8 and 10. In 1909 Hilbert proved the existence of $g ( k )$ for every $k$ by an inductive argument but did not determine its numerical value for any $k$ . The exact value of $g ( k )$ is now known for every $k$ except $k = 4 ,$ Hardy and Littlewood gave an asymptotic formula for the number of solutions of (4) in terms of a singular series analogous to that in (3). For a historical account of Waring's problem see W. J. Ellison [18].

# Unrestricted partitions

One of the most fundamental problems in additive number theory is that of unrestricted partitions. The set of summands consists of all positive integers, and the partition function to be studied is the number of ways n

can be written as a sum of positive integers $\leq n .$ , that is, the number of solutions of

$$
n = a _ { i _ { 1 } } + a _ { i _ { 2 } } + \cdots
$$

The number of summands is unrestricted, repetition is allowed, and the order of the summands is not taken into account. The corresponding partition function is denoted by $p ( n )$ and is called the unrestricted partition function, or simply the partition function. The summands are called parts. For example, there are exactly five partitions of 4, given by

$$
4 = 3 + 1 = 2 + 2 = 2 + 1 + 1 = 1 + 1 + 1 + 1 ,
$$

so $p ( 4 ) = 5 .$ Similarly, $p ( 5 ) = 7$ , the partitions of 5 being

$$
\begin{array} { l } { 5 = 4 + 1 = 3 + 2 = 3 + 1 + 1 = 2 + 2 + 1 = 2 + 1 + 1 + 1 } \\ { = 1 + 1 + 1 + 1 + 1 . } \end{array}
$$

The rest of this chapter is devoted to a study of $p ( n )$ and related functions.

# 14.2 Geometric representation of partitions

There is a simple way of representing partitions geometrically by using a display of lattice points called a graph. For example, the partition of 15 given by

$$
6 + 3 + 3 + 2 + 1
$$

can be represented by 15 lattice points arranged in five rows as follows:

If we read this graph vertically we get another partition of 15,

$$
5 + 4 + 3 + 1 + 1 + 1 .
$$

Two such partitions are said to be conjugate. Note that the largest part in either of these partitions is equal to the number of parts in the other. Thus we have the following theorem.

Theorem 14.1 The number of partitions of n into m parts is equal to the number of partitions of n into parts, the largest of which is m.

Several theorems can be proved by simple combinatorial arguments involving graphs, and we will return later to a beautiful illustration of this method. However, the deepest results in the theory of partitions require a more analytical treatment to which we turn now.

# 14.3 Generating functions for partitions

A function $F ( s )$ defined by a Dirichlet series $\begin{array} { r } { F ( s ) = \sum f ( n ) n ^ { - s } } \end{array}$ is called a generating function of the coefficients $f ( n ) ,$ Dirichlet series are useful generating functions in multiplicative number theory because of the relation

$$
n ^ { - s } m ^ { - s } = ( n m ) ^ { - s } .
$$

In additive number theory it is more convenient to use generating functions represented by power series,

$$
F ( x ) = \sum f ( n ) x ^ { n }
$$

because $x ^ { n } x ^ { m } = x ^ { n + m }$ . The next theorem exhibits a generating function for the partition function $p ( n )$

Theorem 14.2 Euler. For $| x | < 1$ we have

$$
\prod _ { m = 1 } ^ { \infty } { \frac { 1 } { 1 - x ^ { m } } } = \sum _ { n = 0 } ^ { \infty } p ( n ) x ^ { n } ,
$$

where $p ( 0 ) = 1$

ProoF. First we give a formal derivation of this identity, ignoring questions of convergence, then we give a more rigorous proof.

If each factor in the product is expanded into a power series (a geometric series) we get

$$
\prod _ { n = 1 } ^ { \infty } { \frac { 1 } { 1 - x ^ { n } } } = ( 1 + x + x ^ { 2 } + \cdots ) ( 1 + x ^ { 2 } + x ^ { 4 } + \cdots ) ( 1 + x ^ { 3 } + x ^ { 6 } + \cdots ) \cdots .
$$

Now we multiply the series on the right, treating them as though they were polynomials, and collect like powers of $x$ to obtain a power series of the form

$$
1 + \sum _ { k = 1 } ^ { \infty } a ( k ) x ^ { k } .
$$

We wish to show that $a ( k ) = p ( k ) .$ Suppose we take the term $x ^ { k _ { 1 } }$ from the first series, the term $x ^ { 2 k _ { 2 } }$ from the second, the term $x ^ { 3 k _ { 3 } }$ from the third, . . ., and the term $x ^ { m k _ { m } }$ from the mth, where each $k _ { i } \geq 0$ Their product is

$$
x ^ { k _ { 1 } } x ^ { 2 k _ { 2 } } x ^ { 3 k _ { 3 } } \cdot \cdot \cdot x ^ { m k _ { m } } = x ^ { k } ,
$$

say, where

$$
k = k _ { 1 } + 2 k _ { 2 } + 3 k _ { 3 } + \cdot \cdot \cdot + m k _ { m } .
$$

This can also be written as follws:

$$
k = ( 1 + 1 + \cdot \cdot \cdot + 1 ) + ( 2 + 2 + \cdot \cdot \cdot + 2 ) + \cdot \cdot \cdot + ( m + m + \cdot \cdot \cdot + m ) ,
$$

where the first parenthesis contains $k _ { 1 }$ ones, the second $k _ { 2 }$ twos, and so on. This is a partition of $k$ into positive summands. Thus, each partition of $k$ will produce one such term $x ^ { k }$ and, conversely, each term $x ^ { k }$ comes from a corresponding partition of $k$ . Therefore $a ( k ) ,$ , the coefi cient of $x ^ { k } ,$ , is equal to $p ( k ) ,$ the number of partitions of $k$

The foregoing argument is not a rigorous proof because we have ignored questions of convergence and we have also multiplied together infinitely many geometric series, treating them as though they were polynomials. However, it is not difmicult to transform the above ideas into a rigorous proof.

For this purpose we restrict $x$ to lie in the interval $0 \leq x < 1$ and introduce two functions,

$$
F _ { m } ( x ) = \prod _ { k = 1 } ^ { m } { \frac { 1 } { 1 - x ^ { k } } } , \qquad \mathrm { a n d } F ( x ) = \prod _ { k = 1 } ^ { \infty } { \frac { 1 } { 1 - x ^ { k } } } = \operatorname* { l i m } _ { m \to \infty } F _ { m } ( x ) .
$$

The product defining $F ( x )$ converges absolutely if $0 \leq x < 1$ because its reciprocal $\prod ( 1 - x ^ { k } )$ converges absolutely (since the series $\sum x ^ { k }$ converges absolutely). Note also that for each ixed $x$ the sequence $\{ F _ { m } ( x ) \}$ is increasing because

$$
F _ { m + 1 } ( x ) = { \frac { 1 } { 1 - x ^ { m + 1 } } } F _ { m } ( x ) \geq F _ { m } ( x ) .
$$

Thus $F _ { m } ( x ) \leq F ( x )$ for each fixed $x$ ,d $0 \leq x < 1$ , and every m. Now $\boldsymbol { F } _ { m } ( \boldsymbol { x } )$ is the product of a finite number of absolutely convergent series. Therefore it, too, is an absolutely convergent series which we can write as

$$
F _ { m } ( x ) = 1 + \sum _ { k = 1 } ^ { \infty } p _ { m } ( k ) x ^ { k } .
$$

Here $p _ { m } ( k )$ is the number of solutions of the equation

$$
k = k _ { 1 } + 2 k _ { 2 } + \cdot \cdot \cdot + m k _ { m } .
$$

In other words, $\smash { p _ { m } ( k ) }$ is the number of partitions of $k$ into parts not exceeding $m$ . If $m \geq k$ , then $\begin{array} { r } { p _ { m } ( k ) = p ( k ) . } \end{array}$ . Therefore we always have

$$
p _ { m } ( k ) \leq p ( k )
$$

with equality when $m \geq k$ . In other words, we have

$$
\operatorname* { l i m } _ { m \to \infty } p _ { m } ( k ) = p ( k ) .
$$

Now we split the series for $F _ { m } ( x )$ into two parts,

$$
\begin{array} { c l } { { F _ { m } ( x ) = \displaystyle \sum _ { k = 0 } ^ { m } p _ { m } ( k ) x ^ { k } + \displaystyle \sum _ { k = m + 1 } ^ { \infty } p _ { m } ( k ) x ^ { k } } } \\ { { = \displaystyle \sum _ { k = 0 } ^ { m } p ( k ) x ^ { k } + \displaystyle \sum _ { k = m + 1 } ^ { \infty } p _ { m } ( k ) x ^ { k } . } } \end{array}
$$

Since $x \ge 0$ we have

$$
\sum _ { k \mathop { = } 0 } ^ { m } p ( k ) x ^ { k } \leq F _ { m } ( x ) \leq F ( x ) .
$$

This shows that the series $\sum _ { k = 0 } ^ { \infty } p ( k ) x ^ { k }$ converges. Moreover, since $p _ { m } ( k ) \leq$ $p ( k )$ we have

$$
\sum _ { k = 0 } ^ { \infty } p _ { m } ( k ) x ^ { k } \leq \sum _ { k = 0 } ^ { \infty } p ( k ) x ^ { k } \leq F ( x )
$$

so, for each fixed $x$ , the series $\sum p _ { m } ( k ) x ^ { k }$ converges uniformly in m. Letting $m  \infty$ we get

$$
F ( x ) = \operatorname* { l i m } _ { m \to \infty } F _ { m } ( x ) = \operatorname* { l i m } _ { m \to \infty } \sum _ { k = 0 } ^ { \infty } p _ { m } ( k ) x ^ { k } = \sum _ { k = 0 } ^ { \infty } \operatorname* { l i m } _ { m \to \infty } p _ { m } ( x ) x ^ { k } = \sum _ { k = 0 } ^ { \infty } p ( k ) x ^ { k } ,
$$

which proves Euler's identity for $0 \leq x < 1$ . We extend it by analytic continuation to the unit disk $| x | < 1$ . □

Table 14.1 Generating functions   

<table><tr><td>Generating function</td><td>The number of partitions of n into parts which are</td></tr><tr><td>8 1 Π -x^2m-1$ m=1</td><td>odd</td></tr><tr><td>8 1 Ⅱ -x^2m$ m=1 1</td><td>even</td></tr><tr><td>0 1 Π 1-xm2$ m=1</td><td>squares</td></tr><tr><td>1 Ⅱ -xp$ P</td><td>primes</td></tr><tr><td>x ΠI (1 + xm) m=1</td><td>unequal</td></tr><tr><td>x I(1 + x2m−1) m= 1</td><td>odd and unequal</td></tr><tr><td>0 II(1 + x2m) m=1</td><td>even and unequal</td></tr><tr><td>C I(1 +xm²) m=1</td><td>distinct squares</td></tr><tr><td>I(1 + xp) P</td><td>distinct primes</td></tr></table>

By similar arguments we can readily find the generating functions of many other partition functions. We mention a few examples in Table 14.1.

# 14.4 Euler's pentagonal-number theorem

We consider next the partition function generated by the product $\prod ( 1 - x ^ { m } ) ,$ the reciprocal of the generating function of $p ( n )$ . Write

$$
\prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } ) = 1 + \sum _ { n = 1 } ^ { \infty } a ( n ) x ^ { n } .
$$

To express $a ( n )$ as a partition function we note that every partition of $\pmb { n }$ into unequal parts produces a term $x ^ { n }$ on the right with a coefficient $+ 1$ or $- 1$ . The coefficient is $+ 1$ if $x ^ { n }$ is the product of an even number of terms, and $- 1$ otherwise. Therefore,

$$
a ( n ) = p _ { e } ( n ) - p _ { o } ( n ) ,
$$

where $p _ { e } ( n )$ is the number of partitions of $\pmb { n }$ into an even number of unequal parts, and $p _ { o } ( n )$ is the number of partitions into an odd number of unequal parts. Euler proved that $p _ { e } ( n ) = p _ { o } ( n )$ for all $\pmb { n }$ except those belonging to a special set called pentagonal numbers.

The pentagonal numbers 1, 5, 12, 22, ... were mentioned in the Historical Introduction. They are related to the pentagons shown in Figure 14.1.

![](images/c16c221373ab531bca7473bac934d717e565adaf02e22c2ab6cf6665e329a801.jpg)  
Figure 14.1

These numbers are also the partial sums of the terms in the arithmetic progression

$$
1 , 4 , 7 , 1 0 , 1 3 , \ldots , 3 n + 1 , \ldots
$$

If $\omega ( n )$ denotes the sum of the first $\pmb { n }$ terms in this progression then

$$
\omega ( n ) = \sum _ { k = 0 } ^ { n - 1 } ( 3 k + 1 ) = \frac { 3 n ( n - 1 ) } { 2 } + n = \frac { 3 n ^ { 2 } - n } { 2 } .
$$

The numbers $\omega ( n )$ and $\omega ( - n ) = ( 3 n ^ { 2 } + n ) / 2$ are called the pentagonal numbers.

Theorem 14.3 Euler's pentagonal-number theorem. $I f | x | < 1$ we have

$$
\begin{array} { l } { \displaystyle \prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } ) = 1 - x - x ^ { 2 } + x ^ { 5 } + x ^ { 7 } - x ^ { 1 2 } - x ^ { 1 5 } + \cdots } \\ { = 1 + \displaystyle \sum _ { n = 1 } ^ { \infty } ( - 1 ) ^ { n } \lbrace x ^ { \omega ( n ) } + x ^ { \omega ( - n ) } \rbrace = \displaystyle \sum _ { n = - \infty } ^ { \infty } ( - 1 ) ^ { n } x ^ { \omega ( n ) } . } \end{array}
$$

ProoF. First we prove the result for $0 \leq x < 1$ and then extend it to the disk $| x | < 1$ by analytic continuation. Define $P _ { 0 } = S _ { 0 } = 1$ and, for $n \geq 1$ let

$$
P _ { n } = \prod _ { r = 1 } ^ { n } ( 1 - x ^ { r } ) \qquad { \mathrm { a n d ~ } } S _ { n } = 1 + \sum _ { r = 1 } ^ { n } ( - 1 ) ^ { r } \{ x ^ { \omega ( r ) } + x ^ { \omega ( - r ) } \} .
$$

The infinite product $\prod ( 1 - x ^ { m } )$ converges so $P _ { n } \to \prod ( 1 - x ^ { m } )$ as $n \to \infty$ We will prove (using a method of Shanks [63]) that

$$
| S _ { n } - P _ { n } | \leq n x ^ { n + 1 } .
$$

ince $n x ^ { n + 1 }  0$ as $n  \infty$ this will prove Euler's identity for $0 \leq x < 1$

To prove (6) we let $g ( r ) = r ( r + 1 ) / 2$ and introduce the sums

$$
F _ { n } = \sum _ { r = 0 } ^ { n } ( - 1 ) ^ { r } { \frac { P _ { n } } { P _ { r } } } x ^ { r n + g ( r ) } .
$$

We show first that $F _ { n }$ is a disguised form of $S _ { n }$ . It is easily verifed that $F _ { 1 } = S _ { 1 } = 1 - x - x ^ { 2 }$ . Therefore, if we show that

$$
F _ { n } - F _ { n - 1 } = S _ { n } - S _ { n - 1 } , ~ \mathrm { o r } ~ F _ { n } - S _ { n } = F _ { n - 1 } - S _ { n - 1 } ,
$$

this will prove that $F _ { n } = S _ { n }$ for all $n \geq 1$ Now

$$
F _ { n } - F _ { n - 1 } = \sum _ { r = 0 } ^ { n } ( - 1 ) ^ { r } { \frac { P _ { n } } { \widetilde { P _ { r } } } } x ^ { r n + g ( r ) } - \sum _ { r = 0 } ^ { n - 1 } ( - 1 ) ^ { r } { \frac { P _ { n - 1 } } { P _ { r } } } x ^ { r ( n - 1 ) + g ( r ) } .
$$

In the first sum we write $P _ { n } = ( 1 - x ^ { n } ) P _ { n - 1 }$ and separate the term with $r = n .$ Then we distribute the difference $1 - x ^ { n }$ to obtain

$$
\begin{array} { c } { { F _ { n } - F _ { n - 1 } = ( - 1 ) ^ { n } x ^ { n ^ { 2 } + g ( n ) } + \displaystyle \sum _ { r = 0 } ^ { n - 1 } ( - 1 ) ^ { r } \frac { P _ { n - 1 } } { P _ { r } } x ^ { r n + g ( r ) } } } \\ { { - \displaystyle \sum _ { r = 0 } ^ { n - 1 } ( - 1 ) ^ { r } \frac { P _ { n - 1 } } { P _ { r } } x ^ { ( r + 1 ) n + g ( r ) } - \displaystyle \sum _ { r = 0 } ^ { n - 1 } ( - 1 ) ^ { r } \frac { P _ { n - 1 } } { P _ { r } } x ^ { r ( n - 1 ) + g ( r ) } . } } \end{array}
$$

Now combine the first and third sums and note that the term with $r = 0$ cancels. In the second sum we shift the index and obtain

$$
\begin{array} { c } { { F _ { n } - F _ { n - 1 } = ( - 1 ) ^ { n } x ^ { n ^ { 2 } + g ( n ) } + \displaystyle \sum _ { r = 1 } ^ { n - 1 } ( - 1 ) ^ { r } \displaystyle \frac { P _ { n - 1 } } { P _ { r } } x ^ { r ( n - 1 ) + g ( r ) } ( x ^ { r } - 1 ) } } \\ { { - \displaystyle \sum _ { r = 1 } ^ { n } ( - 1 ) ^ { r - 1 } \displaystyle \frac { P _ { n - 1 } } { P _ { r - 1 } } x ^ { r n + g ( r - 1 ) } . } } \end{array}
$$

But $( x ^ { r } - 1 ) / P _ { r } = - 1 / P _ { r - 1 }$ and $r ( n - 1 ) + g ( r ) = r n + g ( r - 1 )$ so the last two sums cancel term by term except for the term with $r = n$ in the second sum. Thus we get

$$
F _ { n } - F _ { n - 1 } = ( - 1 ) ^ { n } x ^ { n ^ { 2 } + g ( n ) } + ( - 1 ) ^ { n } x ^ { n ^ { 2 } + g ( n - 1 ) } .
$$

But

$$
n ^ { 2 } + g ( n ) = n ^ { 2 } + \frac { n ( n + 1 ) } { 2 } = \omega ( - n ) \qquad \mathrm { a n d ~ } n ^ { 2 } + g ( n - 1 ) = \omega ( n ) ,
$$

sO

$$
F _ { n } - F _ { n - 1 } = ( - 1 ) ^ { n } \{ x ^ { \omega ( n ) } + x ^ { \omega ( - n ) } \} = S _ { n } - S _ { n - 1 } ,
$$

and hence $F _ { n } = S _ { n }$ for all $n \geq 1$ .In the sum defining $F _ { n }$ the first term is $P _ { n }$ so

$$
F _ { n } = P _ { n } + \sum _ { r = 1 } ^ { n } ( - 1 ) ^ { r } { \frac { P _ { n } } { P _ { r } } } x ^ { r n + g ( r ) } .
$$

Note that $0 < P _ { n } / P _ { r } \leq 1$ since $0 \leq x < 1$ . Also, each factor $x ^ { r n + g ( r ) } \leq x ^ { n + 1 }$ so the sum on the right of (7) is bounded above by $n x ^ { n + 1 }$ . Therefore $\vert F _ { n } - P _ { n } \vert$ $\leq n x ^ { n + 1 }$ and, since $F _ { n } = S _ { n }$ , this proves (6) and completes the proof of Euler's identity. □

# 14.5 Combinatorial proof of Euler's pentagonal-number theorem

Euler proved his pentagonal-number theorem by induction in 1750. Later proofs were obtained by Legendre in 1830 and Jacobi in 1846. This section describes a remarkable combinatorial proof given by F. Franklin [22] in 1881.

We have already noted that

$$
\prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } ) = 1 + \sum _ { n = 1 } ^ { \infty } \{ p _ { e } ( n ) - p _ { o } ( n ) \} x ^ { n } ,
$$

where $p _ { e } ( n )$ is the number of partitions of $\pmb { n }$ into an even number of unequal parts, and $p _ { \bullet } ( n )$ is the number of partitions into an odd number of unequal parts. Franklin used the graphical representation of partitions by lattice points to show that there is a one-to-one correspondence between partitions of $\pmb { n }$ into an odd and even number of unequal parts, so that $\begin{array} { r } { p _ { e } ( n ) = p _ { o } ( n ) , } \end{array}$ except when $n$ is a pentagonal number.

Consider the graph of any partition of $\pmb { n }$ into unequal parts. We say the graph is in standard form if the parts are arranged in decreasing order, as illustrated by the example in Figure 14.2. The longest line segment connecting points in the last row is called the base of the graph, and the number of lattice points on the base is denoted by $b .$ Thus, $b \geq 1$ . The longest $4 5 ^ { \circ }$ line segment joining the last point in the first row with other points in the

# 14: Partitions

$$
\sum \limits _ { i = 1 } ^ { \infty } \sum \limits _ { i = 1 } ^ { \infty } i = 4
$$

Figure 14.2

graph is called the slope, and the number of lattice points on the slope is denoted by s. Thus, $s \geq 1$ . In Figure 14.2 we have $b \approx 2$ and $s = 4$

Now we define two operations $A$ and $B$ on this graph. Operation A moves the points on the base so that they lie on a line parallel to the slope, as indicated in Figure 14.3(a). Operation $B$ moves the points on the slope so that they lie on a line parallel to the base, as shown in Figure 14.3(b). We say an operation is permissible if it preserves the standard form of the graph, that is, if the new graph again has unequal parts arranged in descending order.

![](images/833be60c4ccfa3bb30ffa036746e14df2934e0c3866b44464175cd35073c7c4e.jpg)  
Figure 14.3

If $\pmb { A }$ is permissible we get a new partition of $\pmb { n }$ into unequal parts, but the number of parts is one less than before. If $B$ is permissible we get a new partition into unequal parts, but the number of parts is one greater than before. Therefore, if for every partition of $\pmb { n }$ exactly one of $\pmb { A }$ or $B$ is permissible there will be a one-to-one correspondence between partitions of $\pmb { n }$ into odd and even unequal parts, so $p _ { e } ( n ) = p _ { \circ } ( n )$ for such $\pmb { n }$ ,

To determine whether $\pmb { A }$ or $B$ is permissible we consider three cases: (1) $b < s$ ;(2) $b = s$ ; (3) $b > s$

Case $I \colon \operatorname { I f } b < s$ then $b \leq s - 1$ so operation $\pmb { A }$ is permissible but $B$ is not since $B$ destroys the standard form. (See Figure 14.3.)

Case 2: If $b = s ,$ operation $B$ is not permissible since it results in a new graph not in standard form. Operation $\pmb { A }$ is permissible except when the base and slope intersect, as shown in Figure 14.4(a), in which case the new graph is not in standard form.

Case $3$ If $b > s$ , operation $\pmb { A }$ is not permissible, whereas $B$ is permissible except when $b = s + 1$ and the base and slope intersect, as shown in Figure 14.4(b). In this case the new graph contains two equal parts.

Therefore, exactly one of $\pmb { A }$ or $B$ is permissible with the two exceptions noted above. Consider the first exceptional case, shown in Figure 14.4(a), and suppose there are $k$ rows in the graph. Then $b = k$ also so the number $\pmb { n }$ is given by

![](images/a3ef3228615590d5156d09df5052e208e83a4afffd3274494c7ffd510d679504.jpg)  
Figure 14.4 Neither $A$ nor $B$ is permissible.

$$
n = k + ( k + 1 ) + \cdots + ( 2 k - 1 ) = { \frac { 3 k ^ { 2 } - k } { 2 } } = \omega ( k ) .
$$

For this partition of n we have an extra partition into even parts if $k$ is even, and an extra partition into odd parts if $k$ is odd, so

$$
p _ { e } ( n ) - p _ { o } ( n ) = ( - 1 ) ^ { k } .
$$

In the other exceptional case, shown in Figure 14.4(b), there is an additin, al lattice point in each row so

$$
n = { \frac { 3 k ^ { 2 } - k } { 2 } } + k = { \frac { 3 k ^ { 2 } + k } { 2 } } = \omega ( - k )
$$

and again $p _ { e } ( n ) - p _ { o } ( n ) = ( - 1 ) ^ { k }$ . This completes Franklin's proof of identity.

# 14.6 Euler's recursion formula for $p ( n )$

Theorem 14.4 Let $p ( 0 ) = 1$ and define $p ( n )$ to be 0 if $n < 0 .$ Then for $n \geq 1$ we have

$$
p ( n ) - p ( n - 1 ) - p ( n - 2 ) + p ( n - 5 ) + p ( n - 7 ) + \cdots = 0 ,
$$

or, what amounts to the same thing,

$$
p ( n ) = \sum _ { k = 1 } ^ { \infty } ( - 1 ) ^ { k + 1 } \{ p ( n - \omega ( k ) ) + p ( n - \omega ( - k ) ) \} .
$$

PRooF. Theorems 14.2 and 14.3 give us the identity

$$
\Bigg ( 1 + \sum _ { k = 1 } ^ { \infty } ( - 1 ) ^ { k } \{ x ^ { \omega ( k ) } + x ^ { \omega ( - k ) } \} \Bigg ) \Bigg ( \sum _ { m = 0 } ^ { \infty } p ( m ) x ^ { m } \Bigg ) = 1 .
$$

If $n \geq 1$ the coefi cient of $x ^ { n }$ on the right is 0 so we immediately obtain (8) by equating coefficients. □

MacMahon used this recursion formula to compute $p ( n )$ up to $n = 2 0 0$ - Here are some sample values from his table.

$$
{ \begin{array} { r l } & { p ( 1 ) = 1 } \\ & { p ( 5 ) = 7 } \\ & { p ( 1 0 ) = 4 2 } \\ & { p ( 1 5 ) = 1 7 6 } \\ & { p ( 2 0 ) = 6 2 7 } \\ & { p ( 2 5 ) = 1 . 9 5 8 } \\ & { p ( 3 0 ) = 5 . 6 0 4 } \\ & { p ( 4 0 ) = 3 7 . 3 3 8 } \\ & { p ( 5 0 ) = 2 0 4 . 2 2 6 } \\ & { p ( 1 0 0 ) = 1 9 0 . 5 6 9 . 2 9 2 } \\ & { p ( 2 0 0 ) = 3 9 7 2 . 9 9 9 . 0 2 9 3 8 8 } \end{array} }
$$

These examples indicate that $p ( n )$ grows very rapidly with $n .$ The largest value of $p ( n )$ yet computed is $p ( 1 4 , 0 3 1 ) .$ , a number with 127 digits. D. H. Lehmer [42] computed this number to verify a conjecture of Ramanujan which asserted that $p ( 1 4 , 0 3 1 ) \equiv 0$ (mod 114). The assertion was correct. Obviously, the recursion formula in (8) was not used to calculate this value of $p ( n )$ . Instead, Lehmer used an asymptotic formula of Rademacher [54] which implies

$$
p ( n ) \sim { \frac { e ^ { K \sqrt { n } } } { 4 n \sqrt { 3 } } } \quad \mathrm { a s } ~ n \to \infty ,
$$

where $K = \pi ( 2 / 3 ) ^ { 1 / 2 }$ . For $n = 2 0 0$ the quantity on the right is approximately $4 \times 1 0 ^ { 1 2 }$ which is remarkably close to the actual yalue of $p ( 2 0 0 )$ given in MacMahon's table.

In the sequel to this volume we give a derivation of Rademacher's asymptotic formula for $p ( n ) .$ The proof requires considerable preparation from the theory of elliptic modular functions. The next section gives a crude upper bound for $p ( n )$ which involves the exponential $e ^ { \kappa { \sqrt { n } } }$ and which can be obtained with relatively little effort.

# 14.7 An upper bound for $p ( n )$

Theorem 14.5 If $n \geq 1$ we have $p ( n ) < e ^ { K { \sqrt { n } } }$ where $K = \pi ( 2 / 3 ) ^ { 1 / 2 }$

PROOF. Let

$$
F ( x ) = \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) ^ { - 1 } = 1 + \sum _ { k = 1 } ^ { \infty } p ( k ) x ^ { k } ,
$$

and restrict $x$ to the interval $0 < x < 1 .$ Then we have $p ( n ) x ^ { n } < F ( x ) ,$ from which we obtain $\log p ( n ) + n \log x < \log F ( x ) ,$ or

$$
\log p ( n ) < \log F ( x ) + n \log { \frac { 1 } { x } } .
$$

We estimate the terms log $F ( x )$ and $n \log ( 1 / x )$ separately. First we write

$$
\begin{array} { l } { \log F ( x ) = - \log \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) = - \sum _ { n = 1 } ^ { \infty } \log ( 1 - x ^ { n } ) = \sum _ { n = 1 } ^ { \infty } \sum _ { m = 1 } ^ { \infty } \frac { x ^ { m n } } { m } } \\ { \displaystyle = \sum _ { m = 1 } ^ { \infty } \frac { 1 } { m } \sum _ { n = 1 } ^ { \infty } ( x ^ { m } ) ^ { n } = \sum _ { m = 1 } ^ { \infty } \frac { 1 } { m } \frac { x ^ { m } } { 1 - x ^ { m } } . } \end{array}
$$

Since we have

$$
{ \frac { 1 - x ^ { m } } { 1 - x } } = 1 + x + x ^ { 2 } + \cdot \cdot \cdot + x ^ { m - 1 } ,
$$

and since $0 < x < 1$ , we can write

$$
m x ^ { m - 1 } < \frac { 1 - x ^ { m } } { 1 - x } < m ,
$$

and hence

$$
\frac { m ( 1 - x ) } { x } < \frac { 1 - x ^ { m } } { x ^ { m } } < \frac { m ( 1 - x ) } { x ^ { m } } .
$$

Inverting and dividing by $m$ we get

$$
{ \frac { 1 } { m ^ { 2 } } } { \frac { x ^ { m } } { 1 - x } } \leq { \frac { 1 } { m } } { \frac { x ^ { m } } { 1 - x ^ { m } } } \leq { \frac { 1 } { m ^ { 2 } } } { \frac { x } { 1 - x } } .
$$

Summing on m we obtain

$$
\log F ( x ) = \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m } } { \frac { x ^ { m } } { 1 - x ^ { m } } } \leq { \frac { x } { 1 - x } } \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m ^ { 2 } } } = { \frac { \pi ^ { 2 } } { 6 } } { \frac { x } { 1 - x } } = { \frac { \pi ^ { 2 } } { 6 t } } ,
$$

where

$$
t = { \frac { 1 - x } { x } } .
$$

Note that $t$ varies from $\infty$ to 0 through positive values as $x$ varies from 0 to 1.

Next we estimate the term $n \log ( 1 / x )$ .For $t > 0$ we have $\log ( 1 + t ) < t ,$ But

$$
1 + t = 1 + { \frac { 1 - x } { x } } = { \frac { 1 } { x } } , \qquad \mathtt { s o l o g } { \frac { 1 } { x } } < t .
$$

# 14: Partitions

Now

$$
\log p ( n ) < \log F ( x ) + n \log { \frac { 1 } { x } } < { \frac { \pi ^ { 2 } } { 6 t } } + n t .
$$

The minimum of $( \pi ^ { 2 } / 6 t ) + n t$ occurs when the two terms are equal, that is, when $\pi ^ { 2 } / ( 6 t ) = n t$ , or $t = \pi / { \sqrt { 6 n } }$ .For this value of $t$ we have

$$
\log p ( n ) < 2 n t = 2 n \pi / { \sqrt { 6 n } } = K { \sqrt { n } }
$$

sO $p ( n ) < e ^ { K { \sqrt { n } } } ,$ , as asserted.

Note. J. H. van Lint [48] has shown that with a little more effort we can obtain the improved inequality

$$
p ( n ) < { \frac { \pi e ^ { K _ { \star } { \overline { { n } } } } } { \sqrt { 6 ( n - 1 ) } } } \quad { \mathrm { f o r ~ } } n > 1 .
$$

Since $p ( k ) \geq p ( n )$ if $k \geq n$ , we have, for $n > 1$ ,

$$
F ( x ) > \sum _ { k = n } ^ { \infty } p ( k ) x ^ { k } \geq p ( n ) \sum _ { k = n } ^ { \infty } x ^ { k } = { \frac { p ( n ) x ^ { n } } { 1 - x } } .
$$

Taking logarithms we obtain, insteady of (9), the inequality

$$
\log p ( n ) < \log F ( x ) + n \log { \frac { 1 } { x } } + \log ( 1 - x ) .
$$

Since $1 - x = t x$ we have $\begin{array} { r } { \log ( 1 - x ) = \log t - \log ( 1 / x ) , } \end{array}$ hence (10) can be replaced by

$$
\log p ( n ) < { \frac { \pi ^ { 2 } } { 6 t } } + ( n - 1 ) t + \log t .
$$

An easy calculation with derivatives shows that the function

$$
f ( t ) = \frac { \pi ^ { 2 } } { 6 t } + ( n - 1 ) t + \log t
$$

has its minimum at

$$
t = \frac { - 1 + \sqrt { 1 + [ 4 ( n - 1 ) \pi ^ { 2 } / 6 ] } } { 2 ( n - 1 ) } .
$$

Using this value of $t$ in (12) and dropping insignificant terms we obtain (11).

# 14.8 Jacobi's triple product identity

This section describes a famous identity of Jacobi from the theory of theta functions. Euler's pentagonal number theorem and many other partition identities occur as special cases of Jacobi's formula.

Theorem 14.6 Jacobi's triple product identity. For complex $x$ and $z$ with $| x | < 1$ and $z \neq 0$ we have

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) ( 1 + x ^ { 2 n - 1 } z ^ { 2 } ) ( 1 + x ^ { 2 n - 1 } z ^ { - 2 } ) = \sum _ { m = - \infty } ^ { \infty } x ^ { m ^ { 2 } } z ^ { 2 m } .
$$

PROoF. The restriction $| x | < 1$ assures absolute convergence of each of the products $\prod ( 1 - x ^ { 2 n } ) .$ $\prod ( 1 + x ^ { 2 n - 1 } z ^ { 2 } ) ,$ $\prod ( 1 + x ^ { 2 n - 1 } z ^ { - 2 } )$ , and of the series in (13). Moreover, for each fixed $x$ with $| x | < 1$ the series and products converge uniformly on compact subsets of the $z$ -plane not containing $z = 0$ so each member of (1 3) is an analytic function of $z$ for $z \neq 0$ . For fixed $z \neq 0$ the series and products also converge uniformly for $| x | \le r < 1$ hence represent analytic functions of $x$ in the disk $| x | < 1$ .

To prove (13) we keep $x$ fixed and define $F ( z )$ for $z \neq 0$ by the equation

$$
F ( z ) = \prod _ { n = 1 } ^ { \infty } ( 1 + x ^ { 2 n - 1 } z ^ { 2 } ) ( 1 + x ^ { 2 n - 1 } z ^ { - 2 } ) .
$$

First we show that $F$ satisfies the functional equation

$$
x z ^ { 2 } F ( x z ) = F ( z ) .
$$

From (14) we find

$$
\begin{array} { c } { { F ( x z ) = \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 + x ^ { 2 n + 1 } z ^ { 2 } ) ( 1 + x ^ { 2 n - 3 } z ^ { - 2 } ) } } \\ { { = \displaystyle \prod _ { m = 2 } ^ { \infty } ( 1 + x ^ { 2 m - 1 } z ^ { 2 } ) \displaystyle \prod _ { r = 0 } ^ { \infty } ( 1 + x ^ { 2 r - 1 } z ^ { - 2 } ) . } } \end{array}
$$

Since $x z ^ { 2 } = ( 1 + x z ^ { 2 } ) / ( 1 + x ^ { - 1 } z ^ { - 2 } ) .$ multiplication of the last equation by $x z ^ { 2 }$ gives (15).

Now let $G ( z )$ denote the left member of (13) so that

$$
G ( z ) = F ( z ) \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) .
$$

Then $G ( z )$ also satisfies the functional equation (15). Moreover, $G ( z )$ is an even function of $z$ which is analytic for all $z \neq 0$ so it has a Laurent expansion of the form

$$
G ( z ) = \sum _ { m = - \infty } ^ { \infty } a _ { m } z ^ { 2 m }
$$

where $a _ { - m } = a _ { m }$ since $G ( z ) = G ( z ^ { - 1 } )$ . (The coeficients $a _ { m }$ depend on $x . \lambda$ Using the functional equation (15) in (17) we find that the coeficients satisfy the recursion formula

$$
a _ { m } = x ^ { 2 m - 1 } a _ { m - 1 }
$$

which, when iterated, gives

$$
a _ { m } = a _ { 0 } x ^ { m ^ { 2 } } \quad { \mathrm { f o r ~ a l l ~ } } m \geq 0
$$

since $1 + 3 + \cdots + ( 2 m - 1 ) = m ^ { 2 }$ . This also holds for $m < 0 .$ Hence (17) becomes

$$
G _ { x } ( z ) = a _ { 0 } ( x ) \sum _ { m = { \mathrm { ~ - ~ } } \infty } ^ { \infty } x ^ { m ^ { 2 } } z ^ { 2 m } ,
$$

where we have written $G _ { x } ( z ) { \mathrm { f o r } } G ( z )$ and $a _ { 0 } ( x )$ for $a _ { 0 }$ to indicate the dependence on $x$ . Note that (18) implies $a _ { 0 } ( x ) \to 1$ as $x \to 0 .$ To complete the proof we must show that $a _ { 0 } ( x ) = 1$ for all $x$

Taking $z = e ^ { \pi i / 4 }$ in (18) we find

$$
{ \frac { G _ { x } ( e ^ { \pi i / 4 } ) } { a _ { 0 } ( x ) } } = \sum _ { m = - \infty } ^ { \infty } x ^ { m ^ { 2 } } i ^ { m } = \sum _ { n = - \infty } ^ { \infty } ( - 1 ) ^ { n } x ^ { ( 2 n ) ^ { 2 } }
$$

since $i ^ { m } = - i ^ { - m }$ if $m$ is odd. From (18) we see that the series on the right of (19) is $G _ { x ^ { 4 } } ( i ) / a _ { 0 } ( x ^ { 4 } )$ so we have the identity

$$
\frac { G _ { x } ( e ^ { \pi i / 4 } ) } { a _ { 0 } ( x ) } = \frac { G _ { x ^ { 4 } } ( i ) } { a _ { 0 } ( x ^ { 4 } ) } .
$$

We show next that $G _ { x } ( e ^ { \pi i / 4 } ) = G _ { x ^ { 4 } } ( i )$ . In fact, (14) and (16) gives us

$$
G _ { x } ( e ^ { \pi i / 4 } ) = \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) ( 1 + x ^ { 4 n - 2 } ) .
$$

Since every even number is of the form $_ { 4 n }$ or $4 n - 2$ we have

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) = \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 4 n } ) ( 1 - x ^ { 4 n - 2 } )
$$

sO

$$
\begin{array} { l } { G _ { x } ( e ^ { \pi i / 4 } ) = \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 4 n } ) ( 1 - x ^ { 4 n - 2 } ) ( 1 + x ^ { 4 n - 2 } ) = \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 4 n } ) ( 1 - x ^ { 8 n - 4 } ) } \\ { = \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 8 n } ) ( 1 - x ^ { 8 n - 4 } ) ( 1 - x ^ { 8 n - 4 } ) = G _ { x 4 } ( i ) . } \end{array}
$$

Hence (20) implies $a _ { 0 } ( x ) = a _ { 0 } ( x ^ { 4 } )$ Replacing $x$ by $x ^ { 4 } , x ^ { 4 ^ { 2 } } , \ldots$ , we find

$$
a _ { 0 } ( x ) = a _ { 0 } ( x ^ { 4 k } ) \quad { \mathrm { f o r ~ } } k = 1 , 2 , \ldots
$$

But $x ^ { 4 ^ { k } } \to 0$ as $k \to \infty$ and $a _ { 0 } ( x ) \to 1$ as $x \to 0$ so $a _ { 0 } ( x ) = 1$ for all $x$ This completes the proof. □

# 14.9 Consequences of Jacobi's identity

If we replace $x$ by $x ^ { a }$ and $z ^ { 2 }$ by $x ^ { b }$ in Jacobi's identity we find

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n a } ) ( 1 + x ^ { 2 n a - a + b } ) ( 1 + x ^ { 2 n a - a - b } ) = \sum _ { m = - \infty } ^ { \infty } x ^ { a m ^ { 2 } + b m } .
$$

Similarly, if $z ^ { 2 } = - x ^ { b }$ we find

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n a } ) ( 1 - x ^ { 2 n a - a + b } ) ( 1 - x ^ { 2 n a - a - b } ) = \sum _ { m = - \infty } ^ { \infty } ( - 1 ) ^ { m } x ^ { a m ^ { 2 } + b m } .
$$

To obtain Euler's pentagonal number theorem simply take $a = 3 / 2$ and $b = 1 / 2$ in this last identity.

Jacobi's formula leads to another important formula for the cube of Euler's product.

Theorem $1 4 . 7 \ : I f \vert x \vert < 1$ we have

$$
\begin{array} { l } { { \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) ^ { 3 } = \sum _ { m = - \infty } ^ { \infty } ( - 1 ) ^ { m } m x ^ { ( m ^ { 2 } + m ) / 2 } } } \\ { { = \sum _ { m = 0 } ^ { \infty } ( - 1 ) ^ { m } ( 2 m + 1 ) x ^ { ( m ^ { 2 } + m ) / 2 } . } } \end{array}
$$

PROOF. Replacing $z ^ { 2 }$ by $- x z$ in Jacobi's identity we obtain

$$
\displaystyle { \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) ( 1 - x ^ { 2 n } z ) ( 1 - x ^ { 2 n - 2 } z ^ { - 1 } ) } = \displaystyle { \sum _ { m = 0 } ^ { \infty } ( - 1 ) ^ { m } x ^ { m ^ { 2 + m } } ( z ^ { m } - z ^ { - m - 1 } ) } .
$$

Now we rearrange terms on both sides, using the relations

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n - 2 } z ^ { - 1 } ) = ( 1 - z ^ { - 1 } ) \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } z ^ { - 1 } )
$$

and

$$
z ^ { m } - z ^ { - m - 1 } = ( 1 - z ^ { - 1 } ) ( 1 + z ^ { - 1 } + z ^ { - 2 } + \cdot \cdot \cdot + z ^ { - 2 m } ) z ^ { m } .
$$

Canceling a factor $1 - z ^ { - 1 }$ we obtain

$$
\begin{array} { l } { { \displaystyle \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 2 n } ) ( 1 - x ^ { 2 n } z ) ( 1 - x ^ { 2 n } z ^ { - 1 } ) } \ ~ } \\ { { \displaystyle \qquad = \sum _ { m = 0 } ^ { \infty } ( - 1 ) ^ { m } x ^ { m ^ { 2 + m } } z ^ { m } ( 1 + z ^ { - 1 } + z ^ { - 2 } + \cdots + z ^ { - 2 m } ) . } } \end{array}
$$

Taking $z = 1$ and replacing $x$ by $\mathbf { x } ^ { 1 / 2 }$ we obtain (21).

# 14.10 Logarithmic differentiation of generating functions

Theorem 14.4 gives a recursion formula for $p ( n )$ . There are other types of recursion formulas for arithmetical functions that can be derived by logarithmic differentiation of generating functions. We describe the method in the following setting.

Let $\pmb { A }$ be a given set of positive integers, and let $f ( n )$ be a given arithmetical function. Assume that the product

$$
F _ { A } ( x ) = \prod _ { n \in A } ( 1 - x ^ { n } ) ^ { - f ( a ) / n }
$$

and the series

$$
G _ { A } ( x ) = \sum _ { n \in A } { \frac { f ( n ) } { n } } x ^ { n }
$$

converge absolutely for $| x | < 1$ and represent analytic functions in the unit disk $| x | < 1$ . The logarithm of the product is given by

$$
\log F _ { A } ( x ) = - \sum _ { n \in A } { \frac { f ( n ) } { n } } \log ( 1 - x ^ { n } ) = \sum _ { n \in A } { \frac { f ( n ) } { n } } \sum _ { m = 1 } ^ { \infty } { \frac { x ^ { m n } } { m } } = \sum _ { m = 1 } ^ { \infty } { \frac { 1 } { m } } G _ { A } ( x ^ { m } ) .
$$

Differentiating and multiplying by $x$ we obtain

$$
x \frac { F _ { A } ^ { \prime } ( x ) } { F _ { A } ( x ) } = \sum _ { m = 1 } ^ { \infty } G _ { A } ^ { \prime } ( x ^ { m } ) x ^ { m } = \sum _ { m = 1 } ^ { \infty } \sum _ { n \in A } f ( n ) x ^ { m n } = \sum _ { m = 1 } ^ { \infty } \sum _ { n = 1 } ^ { \infty } \chi _ { A } ( n ) f ( n ) x ^ { m n } ,
$$

where $\chi _ { A }$ is the characteristic function of the set $\pmb { A }$ ,

$$
\chi _ { A } ( n ) = { \left\{ \begin{array} { l l } { 1 } & { { \mathrm { i f ~ } } n \in A , } \\ { 0 } & { { \mathrm { i f ~ } } n \not \in A . } \end{array} \right. }
$$

Collecting the terms with $m n = k$ we find

$$
\sum _ { m = 1 } ^ { \infty } \sum _ { n = 1 } ^ { \infty } \chi _ { A } ( n ) f ( n ) x ^ { m n } = \sum _ { k = 1 } ^ { \infty } f _ { A } ( k ) x ^ { k } ,
$$

where

$$
f _ { A } ( k ) = \sum _ { d \mid k } \chi _ { A } ( d ) f ( d ) = \sum _ { d \mid k \atop d \in A } f ( d ) .
$$

Therefore we have the following identity,

$$
x F _ { A } ^ { \prime } ( x ) = F _ { A } ( x ) \sum _ { k = 1 } ^ { \infty } f _ { A } ( k ) x ^ { k } .
$$

Now write the product $F _ { A } ( x )$ as a power series,

$$
F _ { A } ( x ) = \sum _ { n = 0 } ^ { \infty } p _ { A , f } ( n ) x ^ { n } , \mathrm { w h e r e } p _ { A , f } ( 0 ) = 1 ,
$$

and equate coefficients of $x ^ { n }$ in (22) to obtain the recursion formula (24) in the following theorem.

Theorem 14.8 For a given set $\pmb { A }$ and a given arithmetical functionf, the numbers $p _ { A , f } ( n )$ defined by the equation

$$
\prod _ { n \in A } ( 1 - x ^ { n } ) ^ { - f ( n ) / n } = 1 + \sum _ { n = 1 } ^ { \infty } p _ { A , f } ( n ) x ^ { n }
$$

satisfy the recursion formula

$$
n p _ { A , f } ( n ) = \sum _ { k = 1 } ^ { n } f _ { A } ( k ) p _ { A , f } ( n - k ) ,
$$

where $p _ { A , f } ( 0 ) = 1$ and

$$
f _ { A } ( k ) = \sum _ { { d \underset { d \in A } { d } } } f ( d ) .
$$

ExAMPLE 1 Let $A$ be the set of all positive integers. I $\operatorname { f } f ( n ) = n$ , then $p _ { A , f } ( n ) =$ $p ( n ) ,$ , the unrestricted partition function, and $f _ { A } ( k ) = \sigma ( k ) ,$ the sum of the divisors of $k$ . Equation (24) becomes

$$
n p ( n ) = \sum _ { k = 1 } ^ { n } \sigma ( k ) p ( n - k ) ,
$$

a remarkable relation connecting a function of multiplicative number theory with one of additive number theory.

ExAMPLE 2 Take $\pmb { A }$ as in Example 1, but let $f ( n ) = - n .$ Then the coeficien ts in (23) are determined by Euler's pentagonal-number theorem and the recursion formula (24) becomes

$$
n p _ { A , f } ( n ) = - \sum _ { k = 1 } ^ { n } \sigma ( k ) p _ { A , f } ( n - k ) = - \sigma ( n ) - \sum _ { k = 1 } ^ { n - 1 } p _ { A , f } ( k ) \sigma ( n - k ) ,
$$

where

$$
p _ { { \scriptscriptstyle A , f } } ( n ) = { \left\{ \begin{array} { l l } { ( - 1 ) ^ { m } } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ a ~ p e n t a g o n a l ~ n u m b e r ~ } } \omega ( m ) { \mathrm { ~ o r ~ } } \omega ( - m ) } \\ { 0 } & { { \mathrm { i f ~ } } n { \mathrm { ~ i s ~ n o t ~ a ~ p e n t a g o n a l ~ n u m b e r . } } } \end{array} \right. }
$$

Equation (25) can also be written as follows:

$$
\begin{array} { r l } { \sigma ( n ) - \sigma ( n - 1 ) - \sigma ( n - 2 ) + \sigma ( n - 5 ) + \sigma ( n - 7 ) - \cdots } & { } \\ { = \left\{ \begin{array} { l l } { ( - 1 ) ^ { m - 1 } \omega ( m ) } & { \mathrm { i f ~ } n = \omega ( m ) , } \\ { ( - 1 ) ^ { m - 1 } \omega ( - m ) } & { \mathrm { i f ~ } n = \omega ( - m ) , } \\ { 0 } & { \mathrm { o t h e r w i s e . } } \end{array} \right. } \end{array}
$$

The sum on the left terminates when the term $\sigma ( k )$ has $k \leq 1$ To illustrate, when $n = 6$ and $n = 7$ this gives the relations

$$
\begin{array} { l } { { \sigma ( 6 ) = \sigma ( 5 ) + \sigma ( 4 ) - \sigma ( 1 ) , } } \\ { { \sigma ( 7 ) = \sigma ( 6 ) + \sigma ( 5 ) - \sigma ( 2 ) - 7 . } } \end{array}
$$

# 14.11 The partition identities of Ramanujan

By examining MacMahon's table of the partition function, Ramanujan was led to the discovery of some striking divisibility properties of $p ( n )$ For example, he proved that

$$
\begin{array} { c } { { p ( 5 m + 4 ) \equiv 0 ( \mathrm { m o d } 5 ) , } } \\ { { \ } } \\ { { p ( 7 m + 5 ) \equiv 0 ( \mathrm { m o d } 7 ) , } } \\ { { \ } } \\ { { p ( 1 1 m + 6 ) \equiv 0 ( \mathrm { m o d } 1 1 ) . } } \end{array}
$$

In connection with these discoveries he also stated without proof two remarkable identities,

$$
\sum _ { m = 0 } ^ { \infty } p ( 5 m + 4 ) x ^ { m } = 5 { \frac { \varphi ( x ^ { 5 } ) ^ { 5 } } { \varphi ( x ) ^ { 6 } } } ,
$$

and

$$
\sum _ { m = 0 } ^ { \infty } p ( 7 m + 5 ) x ^ { m } = 7 \frac { \varphi ( x ^ { 7 } ) ^ { 3 } } { \varphi ( x ) ^ { 4 } } + 4 9 x \frac { \varphi ( x ^ { 7 } ) ^ { 7 } } { \varphi ( x ) ^ { 8 } } ,
$$

where

$$
\varphi ( x ) = \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) .
$$

Since the functions on the right of (29) and (30) have power series expansions with integer coefficients, Ramanujan's identities immediately imply the congruences (26) and (27).

Proofs of (29) and (30), based on the theory of modular functions, were found by Darling, Mordell, Rademacher, Zuckerman, and others. Further proofs, independent of the theory of modular functions, were given by Kruyswijk [36] and later by Kolberg. Kolberg's method gives not only the Ramanujan identities but many new ones. Kruyswijk's proof of (29) is outlined in Exercises 11–15.

# Exercises for Chapter 14

1. Let A denote a nonempty set of positive integers.

(a) Prove that the product

$$
\prod _ { m \in A } ( 1 - x ^ { m } ) ^ { - 1 }
$$

is the generating function of the number of partitions of $_ { n }$ into parts belonging to the set $A$

(b) Describe the partition function generated by the product

$$
\prod _ { m \in A } ( 1 + x ^ { m } ) .
$$

In particular, describe the partition function generated by the finite product $\prod _ { m = 1 } ^ { k } { \big ( } 1 + x ^ { m } { \big ) }$

2.If $| x | < 1$ prove that

$$
\prod _ { m = 1 } ^ { \infty } ( 1 + x ^ { m } ) = \prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { 2 m - 1 } ) ^ { - 1 } ,
$$

and deduce that the number of partitions of $\pmb { n }$ into unequal parts is equal to the number of partitions of $\pmb { n }$ into odd parts.

3. For complex $x$ and $z$ with $\left. x \right. < 1$ , let

$$
f ( x , z ) = \prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } z ) .
$$

(a) Prove that for each fixed $z$ the product is an analytic function of $x$ in the disk $| x | < 1$ , and that for each fixed $x$ with $| x | < 1$ the product is an entire function of $z$

(b) Define the numbers $a _ { n } ( x )$ by the equation

$$
f ( x , z ) = \sum _ { n = 0 } ^ { \infty } a _ { n } ( x ) z ^ { n } .
$$

Show that $f ( x , z ) = ( 1 - x z ) f ( x , z x )$ and use this to prove that the coeficients satisfy the recursion formula

$$
a _ { n } ( x ) = a _ { n } ( x ) x ^ { n } - a _ { n \cdots 1 } ( x ) x ^ { n } .
$$

(c) From part (b) deduce that $a _ { n } ( x ) = ( - 1 ) ^ { n } x ^ { n ( n + 1 ) / 2 } / P _ { n } ( x ) .$ where

$$
P _ { n } ( x ) = \prod _ { r = 1 } ^ { n } ( \operatorname { I } - x ^ { r } ) .
$$

This proves the following identity for $| x | < 1$ and arbitrary $z$ :

$$
\prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } z ) = \sum _ { n = 0 } ^ { \infty } \frac { ( - 1 ) ^ { n } } { P _ { n } ( x ) } x ^ { n ( n + 1 ) / 2 } z ^ { n } .
$$

# 14: Partitions

4. Use a method analogous to that of Exercise 3 to prove that if $| x | < 1$ and $| z | < 1$ we have

$$
\prod _ { m = 1 } ^ { \infty } ( 1 - x ^ { m } z ) ^ { - 1 } = \sum _ { n = 0 } ^ { \infty } { \frac { z ^ { n } } { P _ { n } ( x ) } }
$$

where $\begin{array} { r } { P _ { \eta } ( x ) = \prod _ { r = 1 } ^ { n } \big ( 1 - x ^ { r } \big ) . } \end{array}$

5. If $x \neq 1$ let $Q _ { 0 } ( x ) = 1$ and for $n \geq 1$ define

$$
Q _ { n } ( x ) = \prod _ { r = 1 } ^ { n } { \frac { 1 - x ^ { 2 r } } { 1 - x ^ { 2 r - 1 } } } .
$$

(a) Derive the following finite identities of Shanks:

$$
\begin{array} { l } { { \displaystyle \sum _ { m = 1 } ^ { 2 n } x ^ { m ( m - 1 ) / 2 } = \sum _ { s = 0 } ^ { n - 1 } \frac { Q _ { n } ( x ) } { Q _ { s } ( x ) } x ^ { s ( 2 n + 1 ) } } , } \\ { { \displaystyle \sum _ { m = 1 } ^ { 2 n + 1 } x ^ { m ( m - 1 ) / 2 } = \sum _ { s = 0 } ^ { n } \frac { Q _ { n } ( x ) } { Q _ { s } ( x ) } x ^ { s ( 2 n + 1 ) } } . } \end{array}
$$

(b) Use Shanks' identities to deduce Gauss' triangular-number theorem:

$$
\sum _ { m = 1 } ^ { \infty } x ^ { m ( m - 1 ) / 2 } = \prod _ { n = 1 } ^ { \infty } { \frac { 1 - x ^ { 2 n } } { 1 - x ^ { 2 n - 1 } } } \quad { \mathrm { f o r ~ } } | x | < 1 .
$$

6. The following identity is valid for $| x | < 1$ :

$$
\sum _ { m = - \infty } ^ { \infty } x ^ { m ( m + 1 ) / 2 } = \prod _ { n = 1 } ^ { \infty } ( 1 + x ^ { n - 1 } ) ( 1 - x ^ { 2 n } ) ,
$$

(a) Derive this from the identities in Exercises 2 and 5(b).   
(b) Derive this from Jacobi's triple product identity.

7. Prove that the follwing identities, valid for $\vert x \vert < 1$ , are consequences of Jacobi's triple product identity:

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 5 n } ) ( 1 - x ^ { 5 n - 1 } ) ( 1 - x ^ { 5 n - 4 } ) = \sum _ { m = - \infty } ^ { \infty } ( - 1 ) ^ { m } x ^ { m ( 5 m + 3 ) / 2 } .
$$

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { 5 n } ) ( 1 - x ^ { 5 n - 2 } ) ( 1 - x ^ { 5 n - 3 } ) = \sum _ { m = - \infty } ^ { \infty } ( - 1 ) ^ { m } x ^ { m ( 5 m + 1 ) / 2 } .
$$

8. Prove that the recursion formula

$$
n p ( n ) = \sum _ { k = 1 } ^ { n } \sigma ( k ) p ( n - k ) ,
$$

obtained in Section 14.10, can be put in the form

$$
n p ( n ) = \sum _ { m = 1 } ^ { n } \sum _ { k \leq n / m } m p ( n - k m ) .
$$

9. Suppose that each positive integer $k$ is written in $g ( k )$ different colors, where $g ( k )$ is a positive integer. Let $p _ { g } ( n )$ denote the number of partitions of $\pmb { n }$ in which each part $k$ appears in at most $g ( k )$ different colors. When $g ( k ) = 1$ for all $k$ this is the

unrestricted partition function $p ( n ) .$ Find an infinite product which generates $p _ { g } \{ n \}$ and prove that there is an arithmetical function $f$ (depending on $g ]$ such that

$$
n p _ { g } ( n ) = \sum _ { k = 1 } ^ { n } f ( k ) p _ { g } ( n - k ) .
$$

10. Refer to Section 14.10 for notation. By solving the first-order differential equation in (22) prove that if $| x | < 1$ we have

$$
\prod _ { n \in A } ( 1 - x ^ { n } ) ^ { - f ( n ) / n } = \exp \Biggl \{ \int _ { 0 } ^ { x } \frac { H ( t ) } { t } d t \Biggr \} ,
$$

where

$$
H ( x ) = \sum _ { k = 1 } ^ { \infty } f _ { A } ( k ) x ^ { k } \quad { \mathrm { a n d } } \quad f _ { A } ( k ) = \sum _ { d \mid k \atop d \in A } f ( d ) .
$$

Deduce that

$$
\prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) ^ { \mu ( n ) / n } = e ^ { - x } \quad { \mathrm { f o r ~ } } | x | < 1 ,
$$

where $\mu ( n )$ is the Mobius function.

The following exercises outline a proof of Ramanujan's partition identity

$$
\sum _ { m = 0 } ^ { \infty } p ( 5 m + 4 ) x ^ { m } = 5 { \frac { \varphi ( x ^ { 5 } ) ^ { 5 } } { \varphi ( x ) ^ { 6 } } } , \mathrm { ~ w h e r e ~ } \varphi ( x ) = \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } ) ,
$$

by a method of Kruyswijk not requiring the theory of modular functions.

11. (a) Let $\varepsilon = e ^ { 2 \pi i / k }$ where $k \geq 1$ and show that for all $x$ we have

$$
\prod _ { h \mathop { = } 1 } ^ { k } ( 1 - x \varepsilon ^ { h } ) = 1 - x ^ { k } .
$$

(b) More generally, if $( n , k ) = d$ prove that

$$
\prod _ { h = 1 } ^ { k } ( 1 - x \varepsilon ^ { n h } ) = ( 1 - x ^ { k / d } ) ^ { d } ,
$$

and deduce that

$$
\prod _ { h = 1 } ^ { k } ( 1 - x ^ { n } e ^ { 2 \pi i n h / k } ) = { \left\{ \begin{array} { l l } { 1 - x ^ { n k } } & { { \mathrm { i f ~ } } ( n , k ) = 1 , } \\ { ( 1 - x ^ { n } ) ^ { k } } & { { \mathrm { i f ~ } } k \mid n . } \end{array} \right. }
$$

12. (a) Use Exercise 11(b) to prove that for prime $q$ and $| x | < 1$ we have

$$
\prod _ { n = 1 } ^ { \infty } \prod _ { h = 1 } ^ { q } ( 1 - x ^ { n } e ^ { 2 \pi i n h / q } ) = \frac { \varphi ( x ^ { q } ) ^ { q + 1 } } { \varphi ( x ^ { q ^ { 2 } } ) } .
$$

(b) Deduce the identity

$$
\sum _ { m = 0 } ^ { \infty } p ( m ) x ^ { m } = \frac { \varphi ( x ^ { 2 5 } ) } { \varphi ( x ^ { 5 } ) ^ { 6 } } \prod _ { h = 1 } ^ { 4 } \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } e ^ { 2 \pi i n h / 5 } ) .
$$

# 14: Partitions

13. If $q$ is prime and if $0 \leq r < q$ , a power series of the form

$$
\sum _ { n = 0 } ^ { \infty } a ( n ) x ^ { q n + r }
$$

is said to be of type r mod $q$

(a) Use Euler's pentagonal number theorem to show that $\varphi ( x )$ is a sum of three power series,

$$
\varphi ( x ) = \prod _ { n = 1 } ^ { \infty } \left( 1 - x ^ { n } \right) = I _ { 0 } + I _ { 1 } + I _ { 2 } ,
$$

where $I _ { k }$ denotes a power series of type $k$ mod 5.

(b) Let $\alpha = e ^ { 2 \pi i / 5 }$ and show that

$$
\prod _ { h = 1 } ^ { 4 } \prod _ { n = 1 } ^ { \infty } ( 1 - x ^ { n } x ^ { n h } ) = \prod _ { h = 1 } ^ { 4 } ( I _ { 0 } + I _ { 1 } x ^ { h } + I _ { 2 } x ^ { 2 h } ) .
$$

(c) Use Exercise 12(b) to show that

$$
\sum _ { m = 0 } ^ { \infty } p ( 5 m + 4 ) x ^ { 5 m + 4 } = V _ { 4 } { \frac { \varphi ( x ^ { 2 5 } ) } { \varphi ( x ^ { 5 } ) ^ { 6 } } } ,
$$

where $V _ { 4 }$ is the power series of type 4 mod 5 obtained from the product in part (b).

14. (a) Use Theorem 14.7 to show that the cube of Euler's product is the sum of three power series,

$$
\varphi ( x ) ^ { 3 } = W _ { 0 } + W _ { 1 } + W _ { 3 } ,
$$

where $W _ { k }$ denotes a power series of type $k$ mod 5.

(b) Use the identity $W _ { 0 } + W _ { 1 } + W _ { 3 } = ( I _ { 0 } + I _ { 1 } + I _ { 2 } ) ^ { 3 }$ to show that the power series in Exercise 13(a) satisfy the relation

$$
I _ { 0 } I _ { 2 } = - { I _ { 1 } } ^ { 2 } .
$$

(c) Prove that $I _ { 1 } = - x \varphi ( x ^ { 2 5 } )$

15. Observe that the product $\prod _ { h = 1 } ^ { 4 } \left( I _ { 0 } + I _ { 1 } \alpha ^ { h } + I _ { 2 } \alpha ^ { 2 h } \right)$ is a homogeneous polynomial in $I _ { 0 } , I _ { 1 } , I _ { 2 }$ of degree 4, so the terms contributing to series of type 4 mod 5 come from the terms ${ { I } _ { 1 } } ^ { 4 }$ $^ 4 , I _ { 0 } I _ { 1 } { } ^ { 2 } I _ { 2 }$ and $I _ { 0 } ^ { 2 } I _ { 2 } ^ { 2 }$

(a) Use Exercise 14(c) to show that there exists a constant $c$ such that

$$
V _ { 4 } = c { I _ { 1 } } ^ { 4 } ,
$$

where $V _ { 4 }$ is the power series in Exercise $1 3 ( \mathbf { c } )$ , and deduce that

$$
\sum _ { m = 0 } ^ { \infty } p ( 5 m + 4 ) x ^ { 5 m + 4 } = c x ^ { 4 } \frac { \varphi ( x ^ { 2 5 } ) ^ { 5 } } { \varphi ( x ^ { 5 } ) ^ { 6 } } .
$$

(b) Prove that $c = 5$ and deduce Ramanujan's identity

$$
\sum _ { m = 0 } ^ { \infty } p ( 5 m + 4 ) x ^ { m } = 5 { \frac { \varphi ( x ^ { 5 } ) ^ { 5 } } { \varphi ( x ) ^ { 6 } } } .
$$

# Bibliography

1. Apostol, Tom M. (1970) Euler's $\varphi$ -function and separable Gauss sums. Proc. Amer. Math. Soc., 24: 482–485; MR 41, #1661.   
2. Apostol, Tom M. (1974) Mathematical Analysis, 2nd ed. Reading, Mass. : Addison-Wesley Publishing Co.   
3. Ayoub, Raymond G. (1963) An Introduction to the Analytic Theory of Numbers. Mathematical Surveys, No. 10. Providence, R. I.: American Mathematical Society.   
4. Bell, E. T. (1915) An arithmetical theory of certain numerical finctions. University of Washington Publ. in Math. and Phys. Sci., No. 1, Vol. 1: 1–44.   
5. Borozdkin, K. G. (l956) K voprosu O postoyanni I. M. Vinogradova. Trudy tretego vsesoiuznogo matematičeskogo siezda, Vol. I, Moskva [Russian].   
6. Buhštab, A. A. (1965) New results in the investigation of the Goldbach-Euler problem and the problem of prime pairs. [Russian]. Dokl. Akad. Nauk SSSR, 162: 735-738; MR 31, #2226. [English translation: (1965) Soviet Math. Dokl. 6: 729–732.1   
7. Chandrasekharan, Komaravolu (1968) Introduction to Analytic Number Theory. Die Grundlehren der Mathematischen Wissenschaften, Band 148. New York: Springer-Verlag.   
8. Chandrasekharan, Komaravolu (1970) Arithmetical Functions. Die Grundlehren der Mathematischen Wissenschaften, Band 167. New York. Springer-Verlag.   
9. Chebyshev, P. L. Sur la fonction qui détermine la totalite des nombres premiers inferieurs à une limite donée. (a) (1851) Mem. Ac. Sc. St. Pétersbourg, 6: 141–157. (b) (1852) Jour. de Math (1) 17: 341–365. [Oeuwres, 1: 27–48.]   
10. Chen, Jing-run (1966) On the representation of a large even integer as the sum of a prime and the product of at most two primes. Kexue Tongbao (Foreign Lang. Ed.), 17:385–386;MR34,#7483.   
11. Clarkson, James A. (1966) On the series of prime reciprocals. Proc. Amer. Math. Soc., 17: 541; MR 32, #5573.   
12. Davenport, Harold (1967) Muliplicative Number Theory. Lectures in Advanced Mathematics, No. 1. Chicago: Markham Publishing Co.   
13. Dickson, Leonard Eugene (1919) History of the Theory of Numbers. (3 volumes). Washington, D. C.: Carnegie Institution of Washington. Reprinted by Chelsea Publishing Co., New York, 1966.   
14. Dickson, Leonard Eugene (1930) Studies in the Theory of Numbers. Chicago: The University of Chicago Press.   
15. Dirichlet, P. G. Lejeune (1837) Beweis des Satzes, dass jede unbegrenzte arithmetische Progression, deren erstes Glied und Differenz ganze Zahlen ohne gemeinschlaftichen Factor sind, unendliche viele Primzahlen enthalt. Abhand. Ak. Wiss. Berlin:45-81. [Werke, 1: 315–342.]   
16. Dirichlet, P. G. Lejeune (1840) Ueber eine Eigenschaft der quadratischen Formen. Bericht Ak. Wiss. Berlin: 49–52. [Werke, 1: 497–502.]   
17. Edwards, H. M.(1974) Riemann's Zeta Function. New York and London: Academic Press.   
18. Ellison, W. J. (1971) Waring's problem. Amer. Math. Monthly, 78: 10–36.   
19. Erdös, Paul (1949) On a new method in elementary number theory which leads to an elementary proof of the prime number theorem. Proc. Nat. Acad. Sci. U.S.A., 35: 374-384: MR 10, 595.   
20. Euler, Leonhard (1737) Variae observationes circa series infnitas. Commentarii Academiae Scientiarum Imperialis Petropolitanae, 9: 160–188. {Opera Omnia (1), 14;216-244.]   
21. Euler, Leonhard (1748) Introductio in Analysin Infnitorum, Vol. 1. Lausanne: Bousquet. [Opera Omnia (1), 8.]   
22. Frankin, F. (1881) Sur le développement du produit inni $( 1 - x ) ( 1 - x ^ { 2 } )$ $( 1 - x ^ { 3 } ) ( 1 - x ^ { 4 } ) \cdot \cdot \cdot$ . Comptes Rendus Acad. Sci. (Paris), 92: 448–450.   
23. Gauss, C. F. (1801) Disquisiliones Arithmeticae. Lipsiae. [English translation: Arthur A. Clarke (1966) New Haven: Yale University Press.   
24. Gauss, C. F. (1849) Letter to Encke, dated 24 December. [Werke, Vol. II, 444–447.]   
25. Gerstenhaber, Murray (1963) The 152nd proof of the law of quadratic eciprocity. Amer. Math. Monthly, 70: 397–398; MR'27, #100.   
26. Goldbach, C. (1742) Letter to Euler, dated 7 June.   
27. Grosswald, Emil (1966) Topics from the Theory of Numbers. New York: The Macmillan Co.   
28. Hadamard, J. (l896) Sur Ia distribution des zéros de la fonction $\zeta ( s )$ et ses consé- quences arithmétiques. Bull. Soc. Math. France, 24: 199–220.   
29. Hagis, Peter, Jr. (1973) A lower bound for the set of odd perfect numbers. Math. Comp., 27: 951-953; MR 48, #3854.   
30. Hardy, G. H. (1940) Ramanujan. Twelve Lectures on Subjects Suyyested by His Life and Work. Cambridge: The University Press.   
31. Hardy, G. H. and Wright, E. M. (1960) An Introduction to the Theory of Numbers, 4th ed. Oxford : Clarendon Press.   
32. Hemer, Ove (1954) Notes on the Diophantine equation $y ^ { 2 } - k = x ^ { 3 }$ . Ark. Mat. 3: 67-77; MR 15, 776.   
33. Ingham, A. E. (1932) The Distribution of Prime Numbers. Cambridge Tracts in Mathematics and Mathematical Physics, No. 30. Cambridge : The University Press.   
34. Jacobi, C. G. J. (1829) Fundamenta Nova Theoriae Functionum Ellipticarum. [Gesammelte Werke, Band I, 49–239.]   
35. Kolesnik, G. A. (1969) An improvement of the remainder term in the divisor problem. (Russian). Mat. Zametki, 6: 545–554; MR 41, #1659. [English translation: (1969), Math. Notes, 6: 784–791.]   
36. Kruyswijk, D. (1950) On some well-known properties of the partition function $p ( n )$ and Euler's infi nite product. Nieuw Arch. Wisk., (2) 23: 97–107; MR 11, 715.   
37. Landau, E.(1909) Handbuch der Lehre von der Verteitng der Primzahlen. Leipzig: Teubner. Reprinted by Chelsea, 1953.   
38. Landau, E. (1927) Vorlesungen über Zahlentheorie (3 volumes). Leipzig: Hirzel. Reprinted by Chelsea, 1947.   
39. Leech, J (1957) Note on the distribution of prime numbers. J. London Math. Soc., 32:56-58;MR18,642.   
40. Legendre, A. M. (1798) Essai sur la Theorie des Nombres. Paris: Duprat.   
41. Lehmer, D. H. (1959) On the exact number of primes less than a given limit. Illinois J. Math., 3: 381-388; MR 21, #5613.   
42. Lehmer, D. H. (1936) On a conjecture of Ramanujan. J. London Math. Soc., 11: 114–118.   
43. Lehmer, D.N. (1914) List of prime numbers from 1 to 10, 006, 721. Washington, D.C.: Carnegie Institution of Washington, Publ. No. 165.   
44. LeVeque, W. J. (1956) Topics in Number Theory (2 volumes). Reading, Mass.: Addison-Wesley Publishing Co.   
45. LeVeque, W. J. (1974) Reviews in Number Theory (6 volumes). Providence, RI: American Mathematical Society.   
46. Levinson, N. (1969) A motivated account of an elementary proof of the prime number theorem. Amer. Math. Monthly, 76: 225–245; MR'39, #2712.   
47. Levinson, Norman (1974) More than one third of zeros of Riemann's zeta-function are on $\sigma = 1 / 2$ . Advances Math., 13: 383–436.   
48. van Lint, Jacobus Hendricus (1974) Combinatorial Theory Seminar (Eindhoven University of Technology), Lecture Notes in Mathematics 382. Springer-Verlag, Chapter 4.   
49. Litlewood, J. E (1914) Sur la distribution des nombres premiers. Comptes Rendus Acad. Sci. (Paris), 158: 1869–1872.   
50. Mill, W. H. (1947) A prime-representing function. Bull. Amer. Math. Soc., 53: 604;MR 8, 567.   
51. Nevanlinna, V. (1962) Uber den elementaren Beweis des Primzahlsatzes. Soc. Sci. Fenn. Comment. Phys.-Math,. 27 No. 3, 8 pp.; MR 26, #2416.   
52. Niven, I. and Zuckerman, H. S. (1972) An Introduction to the Theory of Numbers, 3rd ed. New York: John Wiley and Sons, Inc.   
53. Prachar, Karl (1957) Primzahlverteilung. Die Grundlehren der Mathematischen Wissenschaften, Band 91. Berlin-Göttingen-Heidelberg: Springer-Verlag.   
54. Rademacher, Hans (1937) On the partition function $p ( n )$ . Proc. London Math. Soc. 43:241–254.   
55. Rademacher, Hans (1964) Lectures on Elementary Number Theory. New York: Blaisdell Publishing Co.   
56. Rademacher, Hans (1973) Topics in Analytic Number Theory. Die Grundlehren der Mathematischen Wissenschaften, Band 169. New York-Heidelberg-Berlin: Springer-Verlag.   
57.Renyi, A. (1948) On the representation of an even number as the sum of a single prime and a single almost-prime number. (Russian). Izv Akad. Nauk SSSR Ser. Mat., 12: 57–78; MR9, 413. [English translation: (1962) Amer. Math. Soc. Transl. 19 (2): 299–321.)   
58. Riemann, B.(1859) Uber die AnzahI der Primzahlen unter einer gegebener Grösse. Monatsber. Akad. Berlin, 671–680.   
59. Robinson, R. M. (1958) A report on primes of the form $k \cdot 2 ^ { n } + 1$ and on factors of Fermat numbers. Proc. Amer. Math. Soc., 9: 673–681; MR 20, #3097.   
60.Rosser, J.Barkley, and Schoenfeld, Lowel(962)Approximate formulas for some functions of prime number theory. Ilinois J. Math., 6: 69–94; MR 25, #1139.   
61. Schnirelmann, L.(1930) On additive properties of numbers. (Rusian). Izv. Donskowo Politechn. Inst. (Nowotscherkask), 14 (2–3): 3–28.   
62. Selberg, Atle (1949) An elementary proof of the prime number theorem. Ann. of Math., 50: 305–313; MR 10, 595.   
63. Shanks, Daniel(1951) A short proofof an identityofEuler. Proc. Amer. Math. Soc., 2:747–749; MR 13, 321.   
64. Shapiro, HaroldN. (1950) On the number of primes lessthan or equal x. Proc. Amer. Math. Soc., 1: 346–348; MR 12, 80.   
65. Shapiro, Harold N. (1952) On primes in arithmetic progression I. Ann. of Math. 52:231-243: MR12, 81.   
66. Shen, Mok-Kong (1964) On checking the Goldbach conjecture. Nordisk Tidskr. Informations-Behandling, 4: 243–245; MR 30, #3051.   
67. Sierpinski, Waclaw (1964) Elementary Theory of Numbers. Translated from Polish by A. Hulanicki Monografe Matematyczne, Tom 42. Warsaw: Panstwowe Wzdawnictwo Naukowe.   
68. Tatuzawa, Tika, and Iseki Kaneshiro (1951) On Selberg's elementary proofof the prime number theorem. Proc. Japan Acad., 27: 340-342; MR 13, 725.   
69. Titchmarsh, E. C. (1951) The Theory of the Riemann Zeta Function. Oxford: Clarendon Press.   
70. Uspensky,JV. and Heaslet, M. A.(1939) Elementary Number Theory. NewYork: McGraw-Hill Book Co.   
71. Valle Poussin, Ch. de la (1896) Recherches analytiques sur la theorie des nombres premiers. Ann. Soc. Sci. Bruxelles, $2 {  { \theta _ { 2 } } }$ :183–256, 281–297.   
72. Vinogradov,A.I.1965) The densiy hypothesis for Diricht $L$ series. (Russian). Izv. Akad. Nauk SSSR, Ser. Math. 29: 903–934; MR 33, #5579. [Correction: (1966) ibid, 30: 719–720; MR 33, #2607.]   
73. Vinogradov, I. M (1937) The representation of an odd number as the sum of three primes. (Russian.) Dokl. Akad. Nauk SSSR, 16: 139–142.   
74. Vinogradov, I. M. (1954) Elements of Number Theory. Translated by S. Kravetz. New York: Dover Publications.   
75. Walfisz,A.(1963) WeylscheExponentialsummen inder neueren Zahlentheorie. Mathematische Forschungsberichte, XV, V E B Deutscher Verlag der Wissenschaften, Berlin.   
76. Wiliams, H. C., and Zarmke, C. R. (1972) Some prime numbers of the form $2 A 3 ^ { n } + 1$ and $2 A 3 ^ { n } - 1$ . Math. Comp. 26: 995–998; MR 47, #3299.   
77. Wrathall, Claude P. (1964) New factors of Fermat numbers. Math. Comp., 18: 324-325; MR 29, #1167.   
78. Yin, Wen-lin (1956) Note on the representation of large integers as sums of primes. Bull. Acad. Polon. Sci. Cl. I1, 4: 793–795: MR 19, 16.

# Index of Special Symbols

divides (does not divide), 14   
greatest common divisor (gcd),15, 21   
least common multiple (lcm), 22   
Möbius function, 24   
Euler totient, 25   
Dirichlet convolution, 29

identity function, 30

Dirichlet inverse, 30   
unit function, 31   
Mangoldt function, 32   
Liouville function, 37   
divisor functions, 38   
generalized convolution, 39   
Bell series of f modulo $p _ { : }$ 43   
derivative, 45   
Euler's constant, 53   
big oh notation, 53   
asymptotic equality, 53   
Riemann zeta function, 55   
number of primes $\leq x .$ 74   
Chebyshev $\psi$ -function, 75

$\begin{array} { r l } & { d | u _ { 1 } , d ^ { \prime } | ^ { n } , } \\ & { ( u _ { 2 } , b | u _ { 1 } , u _ { 1 } ) } \\ & { \mathrm { L e g . l } } \\ & { ( \mathrm { L e g . l } ) _ { 1 } } \\ & { \rho ( u ) } \\ & { \rho ( u ) } \\ & { ( \rho ^ { \prime } + \rho _ { g } , } \\ & { I ( \rho ) = [ \frac { 1 } { 2 } ] , } \\ & { ( - \frac { 1 } { 2 } , 1 ) } \\ & { \rho ( u ) } \\ & { ( u _ { 1 } ^ { \prime } ) - 1 , } \\ & { \rho ( u ) } \\ & { \lambda _ { 1 } \rho _ { 1 } } \\ & { \rho ( u ) \rho _ { 1 } , d | \phi | } \\ & { \sigma _ { 2 } c , } \end{array}$ , an),2),fp(x)f'(n) = f(n)log n,C,0,\~,ζ(s),$\pi ( x ) ,$ 4(x)，

Chebyshev 9-function, 75   
partial sums of Möbius function, 91   
little oh notation, 94   
congruence, 106   
residue class a modulo $m$ ,109   
reciprocal of a modulo $m$ ,111   
Dirichlet character, 138   
sum of series $\sum \chi ( n ) / n$ 141   
sum of series $- \sum \chi ( n ) \log n / n ,$ 148   
Ramanujan sum, 160   
Gauss sum associated with $\chi$ 165   
quadratic Gauss sum, 177   
quadratic residue (nonresidue) mod $p$ 178   
Legendre symbol, 179   
Jacobi symbol, 188   
exponent of a modulo m, 204   
index of $\pmb { a }$ to base $g _ { \colon }$ 213   
Dirichlet $L$ -function, 224   
abscissa of absolute convergence, 225   
abscissa of convergence, 233   
gamma function, 250   
Hurwitz zeta function, 251   
periodic zeta function, 257   
Bernoulli polynomials, (numbers), 264   
periodic Bernoulli functions, 267   
partition function, 307   
pentagonal numbers, 311

9(x)   
M(x)   
0,   
a = b (mod m),   
à   
a   
$\begin{array} { r l } & { u , } \\ & { \chi ( n ) , } \\ & { L ( 1 , \gamma ) , } \\ & { L ( 1 , \chi ) , } \\ & { c _ { k } ( n ) , } \\ & { G ( n , \chi ) , } \\ & { G ( k ; n ) , } \\ & { H R _ { P } , n \bar { R } _ { P } , } \\ & { ( n | p ) , } \\ & { n | P | , } \end{array}$ id:   
expm(a),   
ind a,   
L(s, x),   
σa,   
σc   
T(s),   
ζ(s, a),   
F(x, s),   
Bn(x), Bn,   
Bn(x),   
p(n),   
ω(n), ω(−n),

# Index

Bell, Eric Temple, 29, 42, 329 Bell series, 43 Bernoulli, numbers, 265 periodic functions, 267 polynomials, 264 Binomial congruence, 214 Borozdkin, K. G., 10, 329 Buhstab, A. A., 11, 329

Cauchy, Augustin-Louis, 44, 144, 198   
Cauchy product, 44   
Chandrasekharan, Komaravolu, 329   
Character, Dirichlet, 138 of an abelian group, 133 primitive, 168 principal, 138

Chebyshev, Pafnuti Liwowich, 9, 75   
Chebyshev function $\vartheta ( x )$ 75   
Chebyshev function $\psi ( x ) ,$ 75   
Chen, Jing-run, 11, 304, 329   
Chinese remainder theorem, 117   
Clarkson, James A.. 18, 330   
Classes of residues, 109   
Clausen, Thomas, 275   
Common divisor, 14   
Commutative group, 129   
Complete residue system, 110   
Completely multiplicative function, 33   
Conductor of a character, 171   
Congruence, 106   
Convolution. Dirichlet. 29   
generalized, 39   
van der Corput, J. G., 59   
Critical line, 293   
Critical strip, 293   
Cross-classifcation principle, 123   
Cyclic group, 131

Darling, H. B. C., 324   
Davenport, Harold, 330   
Decomposition property of reduced residue systems, 125   
Derivative of arithmetical functions, 45   
Dickson, Leonard Eugene, 12, 330   
Diophantine equation, 5, 190   
Dirichlet, Peter Gustav Lejeune, 5, 7, 29, 53, 138,146,224   
Dirichlet, character x(n), 138 convolution (product), 29 divisor problem, 59 estimate for d(n), 53, 57 inverse, 30 L-function, 224 series, 224 theorem on primes in arithmetic progressions, 7, 146, 154   
Disquisitiones arithmeticae, 5   
Divisibility, 14   
Division algorithm, 19   
Divisor, 14   
Divisor function ${ \pmb \sigma } _ { \alpha } ( n ) .$ 38

Edwards, H. M., 330   
Elementary proof of prime number   
theorem, 9, 98   
Ellison, W. J., 306, 330   
Erdos, Paul, 9, 330   
Euclidean algorithm, 20   
Euclid's lemma, 16   
Euler, Leonhard, 4, 5, 7,9, 19, 25, 53, 54, 113,   
180,185, 230, 308, 312, 315   
Euler-Fermat theorem, 113   
Euler product, 230   
Euler's constant, 53, 250   
Euler's criterion, 180

Euler's pentagonal-number theorem, 312   
Euler's summation formula, 54   
Euler totient function $\varphi ( n ) , 2 5$   
Evaluation, of $( - 1 | p )$ 181 of $( 2 | p )$ 181 of $\zeta ( - n , a ) .$ 264 of $\zeta ( 2 n )$ 266 of $L ( 0 , \chi )$ 268   
Exponent of a modulo m, 204   
Exponential congruence, 215   
Factor, 14   
Fermat, Pierre de, 5, 7, 11, 113, 114   
Fermat conjecture, 11   
Fermat prime, 7.   
Fermat theorem (little), 114   
Finite Fourier expansion, 160   
Formal power series, 41   
Fourier coeficient, 160   
Franklin, Fabian, 313, 330   
Function, arithmetical, 24 Bernoulli periodic ${ \bar { B } } _ { n } ( x ) .$ 267 Chebyshev $\mathcal A ( x ) .$ 75 Chebyshev $\psi ( x ) .$ 75 completely multiplicative, 33 Dirichlet $L ( s , \chi ) ,$ 224 divisor $d ( n ) , \sigma _ { \alpha } ( n ) , 3$ 8 Euler totient $\varphi ( n )$ 25 Hurwitz zeta $\zeta ( s , a )$ 249 Liouville $\lambda ( n ) .$ 37 Mangoldt $\Lambda ( n ) .$ 32 Möbius $\mu ( n )$ 24 periodic zeta $F ( x , s ) ,$ 257 Riemann zeta $\zeta ( s ) , 9 , 2 4 9$ $\kappa ( n ) .$ 247 $M ( x ) ,$ 91 $\nu ( n ) , 2 4 7$ $\pi ( x ) , 8 , 7 4$ $\psi _ { 1 } \{ x \} , 2 7 8$   
Functional equation, for $\Gamma ( s ) .$ 250 for $L ( s , \chi ) , 2 6 3$ for $\zeta ( s ) , 2 5 9$ for $\zeta ( s , h / k ) ,$ 261   
Fundamental theorem of arithmetic, 17

Gamma function, 250   
Gauss, Carl Friedrich, 5, 7, 8, 106, 165, 177,   
182,185,306,326   
Gauss sum, associated with ${ \mathbb X } ,$ 165   
quadratic, 177, 306   
Gauss' lemma, 182   
Gauss' triangular-number theorem, 326   
Generating function, 308   
Geometric sum, 157, 158   
Gerstenhaber, Murray, 186, 330   
Goldbach, C., 6, 9, 304   
Goldbach conjecture, 9, 304   
Greatest common divisor, 15, 20, 21   
Greatest integer symbol, 8, 25, 54, 72   
Grosswald, Emi, 330

Group, definition of, 129 abelian. 129 cyclic, 131   
Group character, 133

Hadamard, Jacques, 9, 74, 330   
Hagis, Peter, Jr., 5, 330   
Half-plane, of absolute convergence, 225   
of convergence, 233   
Hardy, Godfrey Harold, 59, 293, 305, 330   
Hemer, Ove, 330   
Hilbert, David, 293   
Hurwitz, Adolf, 249   
Hurwitz formula for $\zeta ( s , a ) ,$ 257   
Hurwitz zeta function ζ(s, a), 249, 251, 253,   
255

Identity element, 30, 129   
Identity function I(n), 30   
Index, 213   
Index calculus, 214   
Indices (table of), 216, 217   
Induced modulus, 167   
Induction, principle of, 13   
Infinitude of primes, 16, 19   
Inequalities, for $| \zeta ( s , a ) |$ ,270 for $| \zeta ( s ) |$ ,270,287,291 for $| L ( s , \chi ) |$ .272 for ${ \pi } ( n ) .$ 82 for nth prime $p _ { n }$ ,84 for $d ( n )$ 294 for $\varphi ( n )$ 298 for $p ( n )$ 316,318   
Ingham, A. E., 330   
Inverse, Dirichlet, 30 of completely multiplicative function, 36   
Inversion formula, Möbius, 32 generalized, 40   
Iseki, Kaneshiro, 99, 332

Jacobi, Carl Gustav Jacob, 187, 305, 313, 319   
Jacobi symbol $( n | P ) _ { \negmedspace \emptyset }$ 188   
Jacobi triple product identity, 319   
Jordan totient $J _ { \kappa } ( n ) ,$ 48   
Kloosterman, H. D., 176   
Kloosterman sum, 176   
Kolberg, Oddmund, 324   
Kolesnik, G. A., 59   
Kruyswijk, D., 324, 327, 331

Lagrange, Joseph Louis, 5, 115, 144, 158   
Lagrange interpolation formula, 158   
Lagrange's theorem on polynomial congruences, 115   
Landau, Edmund, 59, 237, 248, 301, 331   
Landau's theorem, 237, 248   
Lattice points, 57, 62 visibility of, 62

Law of quadratic reciprocity. 185, 189.   
193,200   
Least common multiple, 22   
Leech, John, 10, 331   
Legendre, Adrien-Marie, 5, 67, 179, 185, 331   
Legendre's identity, 67   
Legendre symbol $\{ n \left| p \right\}$ 179   
Lehmer, Derrick Henry, 6, 293, 316, 331   
Lehmer, Derrick Norman, 6, 331   
Lemma of Gauss, 182   
LeVeque, William Judson, 2, 191, 331   
Levinson, Norman, 293, 331   
$L$ -function $L ( s , \chi ) .$ 224   
Linear congruence, 111, 112, 114, 214   
van Lint, Jacobus Hendricus, 318, 331   
Liouville, Joseph, 37   
Liouville function $\lambda ( n ) ,$ 37   
Little Fermat theorem, 114   
Littlewood, John Edensor, 10, 305, 331   
Logarithmic integral $L i ( x ) ,$ 102   
Lucas, Édouard, 275   
MacMahon, Percy A., 316   
von Mangoldt, H., 32   
von Mangoldt function $\Lambda ( n ) ,$ 32   
Mean value formulas for Dirichlet series, 240   
Mersenne, P., 4   
Mersenne numbers, 4   
Mertens, Franz, 91   
Mertens' conjecture, 91   
Mills, W. H., 8, 331   
Möbius, Augustus Ferdinand, 24   
Möbius function $\mu ( n ) ,$ 24   
Möbius function $\mu _ { k } ( n )$ of order $k$ 50   
Mobius inversion formula, 32   
product form, 47   
generalized, 40   
Mordell, Louis Joel, 305, 306   
Multiplication, Dirichlet. 29   
of residue classes, 138   
Multiplicative function, 33   
Multiplicative number theory, 304   
Nevanlinna, Veikko, 331   
Niven, Ivan, 331   
Nonresidue, 178   
Number-theoretic function, 24

$o$ , big oh notation, 53   
$^ { o . }$ , little oh notation, 94   
Order of a group, 130   
Orthogonality relation, for group characters, 137 for Dirichlet characters, 140

Partition, 304   
Partition function $p ( n ) .$ 307   
Pentagonal numbers, 2, 5, 311   
Pentagonal-number theorem, 312   
Perfect numbers, 4

Periodic arithmetical function, 157   
Periodic zeta function, 257   
Polya, G., 173, 299   
Polya inequality for character sums, 173. 176,299   
Polygonal numbers, 2, 5   
Polynomial congruence, 115   
Prachar, Karl, 331   
Prime number theorem, 9, 65, 74, 79, 92, 94, 98,278,289   
Primes, 2, 16, contained in a factorial, 67 in arithmetic progressions, 7, 146, 154 Fermat, 7 infinitude of, 16, 19 Mersenne, 4   
Primitive character, 168   
Primitive root, 204   
Principal character, 134, 138   
Product, of arithmetical functions, 29 of Dirichlet series, 228   
Pythagorean triple, 2

Quadratic, congruence, 178 Gauss sum, 177, 195 nonresidue, 178 reciprocity law, 185, 189, 193, 200 residue, 178

Rademacher, Hans, 316, 331   
Ramanujan, Srinivasa, 160, 305, 324, 328   
Ramanujan partition identities, 324, 328   
Ramanujan sum, 160, 176   
Reciprocity law, for Jacobi symbols, 189 for Legendre symbols, 185, 193, 200 for quadratic Gauss sums, 200   
Reduced fraction, 21   
Relatively prime, 15, 21 in pairs, 21   
Renyi, Alfred, 10, 332   
Residue, quadratic, 178   
Residue class, 109   
Residue system, complete, 110 reduced, 113, 125   
Riemann, Georg Friedrich Bernhard, 9, 225 293,332   
Riemann hypothesis, 293, 301   
Riemann-Lebesgue lemma, 279   
Riemann-Stieltjes integral, 77   
Riemann zeta function, 249   
Ring of formal power series, 42   
Robinson, Raphael M., 7, 332   
Rosser, J. Barkley, 293, 332

Schnirelmann, L., 10, 332   
Selberg, Atle, 9, 46, 100, 332   
Selberg asymptotic formula, 100, 103, 104   
Selberg identity, 46   
Separable Gauss sums, 165, 171   
Shanks, Danie1, 312, 326, 332   
Shapiro, Harold N., 85, 146, 332   
Shapiro's Tauberian theorem, 85   
Shen, Mok-Kong, 9, 332   
Sierpiński, Waclaw, 11, 148, 332   
Smallest primitive roots (table of), 213   
Squarefree, 21   
von Staudt, Karl Georg Christian, 275   
Subgroup, 130   
Summation formula of Euler, 54   
Symbol, Jacobi $( n \mid P ) .$ 188   
Legendre $\{ n | p \}$ 179   
System of residues, complete, 110   
reduced, 113   
Tatuzawa, Tikao, 99, 332   
Tauberian theorem, 85   
Theta function, 306   
Titchmarsh, Edward Charles, 301, 332   
Totient function $\varphi ( n )$ 25   
Triangular numbers, 2, 326   
Triangular-number theorem, 326   
Trivial zeros of ζ(s), 259   
Twin primes, 6   
Unique factorization theorem, 17   
Uspensky, J. V., 332   
Vallee-Poussin, C. J. de la, 9, 74, 332   
Vinogradov, A. I., 11, 332   
Vinogradov, I. M., 10, 304, 332   
Visibility of lattice points, 62   
Voronoi, G., 59   
Walfisz, Arnold, 91, 332   
Waring, Edward, 306   
Waring's problem, 306   
Williams, H. C., 6, 332   
Wilson, John, 116   
Wilson's theorem, 116   
Wrathall, Claude P., 7, 332   
Wright, E. M., 330   
Wolstenholme's theorem, 116

Yin, Wen-lin, 10, 332

Zarnke, C. R., 6, 332   
Zero-free regions of ζ(s), 291, 292   
Zeros, of $L$ -function L(s, x), 274 of Riemann's zeta function ζ(s), 259, 274, 293   
Zeta function, Hurwitz, 249 periodic, 257 Riemann, 9, 249   
Zuckerman, Herbert S.. 331

This introductory textbook is designed to teach undergraduates the basic ideas and techniques of number theory, with special consideration to the principles of analytic number theory. The first five chapters treat elementary concepts such as divisibility, congruence and arithmetical functions. The topics in the next chapters include Dirichlet's theorem on primes in progressions, Gauss sums, quadratic residues, Dirichlet series, and Euler products with applications to the Riemann zeta function and Dirichlet L-functions. Also included is an introduction to partitions. Among the strong points of the book are its clarity of exposition and a collection of exercises at the end of each chapter. The first ten chapters, with the exception of one section, are accessible to anyone with knowledge of elementary calculus; the last four chapters require some knowledge of complex function theory including complex integration and residue calculus.