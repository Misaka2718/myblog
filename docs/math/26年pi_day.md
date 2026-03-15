---
title: 26年pi_day公式
createTime: 2026/03/15 17:02:55
permalink: /math/k3bbikkk/
---
只是把一些公式塞了进来.
$$
\begin{cases}
\frac{\frac{5}{3} p^2 + \frac{5p}{2} x + x^2}{(1+x)_p^3}
&= \frac{p^5}{6} J_{p+1}(x) + \frac{(3p-2)(p-1)}{2} J_p(x) + (3p-2) K_p(x)\\
\frac{6p^3 - 8p^2 + 6p - 3x + 18px - 9p^2x - 3x^2 + 9px^2}{(-3 + 9p)(1+x)_p^3}
&= Q_1(p) K_{p+1}(x) + Q_0(p) J_{p+1}(x) + Q_4(p) K_p(x) - Q_4(p) J_p(x) - Q_4(p) \frac{x}{(1+x)_p^3}\\
Q_0(p) &= \frac{p^4(-3 + p + 6p^2)}{-3 + 9p} \\
Q_1(p) &= \frac{3p^3(-2 + p + 3p^2)}{-3 + 9p} \\
Q_4(p) &= \frac{3(2 - 9p + 9p^2)}{-3 + 9p}
\end{cases}
$$

$$
\begin{align*}
&\frac{\left(p^3 (1+p)^6 (-2+3 p)\right) J(p+2)}{-6+54 p^2}+\frac{1}{2} (1+p) (-2+3 p) J(p)\\
&= \frac{(p+1)(3p-2) \left[ 28 p^5+80 p^4+82 p^3+\left(45 p^2+42 p+9\right) x^3+36 p^2+\left(87 p^3+135 p^2+63 p+9\right) x^2+\left(78 p^4+171 p^3+126 p^2+36 p+3\right) x+(9 p+3) x^4+6 p\right]}{6 (9p^2-1) (1+x)_{p+1}^3}
\end{align*}
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} 4^{6 k} \left(14336 k^5+10496 k^4+2336 k^3+72 k^2-30 k-3\right) \binom{2 k}{k}^2}{16 k^3 (4 k+1)^3 (6 k+1) \binom{3 k}{k} \binom{4 k}{2 k}^3 \binom{6 k}{3 k}}=32-3 \pi ^2
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} 4^{6 k-4} \left(7168 k^5-12672 k^4+8592 k^3-2804 k^2+441 k-27\right)}{k^5 (2 k-1)^3 \binom{4 k}{2 k}^3 \binom{3 k}{k} \binom{2 k}{k}}=7\zeta(3)
$$

$$
\sum _{k=1}^{\infty } \frac{ (-1)^{k-1} \left(114688 k^5-162816 k^4+76480 k^3-11880 k^2-323 k+141\right) (2 k)! (4 k)! (4 k-4)! (4 k-3)!}{(k-1)! (3 k)! (8 k+1)! \left(\frac{1}{4}\right)_{2 k}}=\pi-2
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} \left(7168 k^5-2688 k^4-944 k^3+396 k^2+4 k-3\right) \binom{4 k}{k}}{4^{4 k} k (2 k-1)^2 (2 k+1) (4 k-3) (4 k-1)^2 (4 k+1)}=6-8\ln 2
$$

$$
\zeta(4) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1} (k!)^3}{16 k^4 (2k-1)^3 (3k)!} \Big[ 4k(2k-1)(56k^2-32k+5) H_{2k} - (208k^3 - 188k^2 + 54k - 5) \Big]
$$

$$
\begin{align*}
&\pi=2+\sum _{n=1}^{\infty }(-1)^{n-1}16^n \frac{  \left(114688 n^5-162816 n^4+76480 n^3-11880 n^2-323 n+141 \right) (2 n)! (4 n)! (4 n-4)! (4 n-3)!}{(n-1)! (3 n)! (8 n+1)! \prod _{j=1}^{2 n} (4 j-3)}
\\
&\pi^2=10+\sum _{n=1}^\infty \frac{(-1)^{n} \left(56 n^2+24 n+3\right)  }{2 n^2 (2
   n+1) (6 n+1) }\frac{(3 n)!}{ (6 n)!} \left (\frac{(2 n)!}{n!}\right ) ^3\\
&\sum _{k=1}^{\infty } (-1)^{k-1} 4^{6 k-2}\frac{ \left(14336 k^5+10496 k^4+2336 k^3+72 k^2-30 k-3\right) }{k^3 }\frac{((2 k)!)^9 (3 k)!}{(k!)^3 ((4 k+1)!)^3 (6 k+1)!}=32-3\pi^2
\\
&\sum _{n=1}^{\infty }(-1)^{n-1}16^n \frac{  \left(114688 n^5-162816 n^4+76480 n^3-11880 n^2-323 n+141 \right) }{ \prod _{j=1}^{2 n} (4 j-3)}\frac{(2 n)! (4 n)! (4 n-4)! (4 n-3)!}{(n-1)! (3 n)! (8 n+1)!} =\pi-2\approx 1.14159
\end{align*}
$$

$$
\sum_{k=1}^{\infty} \frac{1}{k(k+x)} = \sum_{k=1}^{\infty} \frac{(x+1)_{k-1} (3k+2x)}{k(k+x)_{k+1}}
$$

$$
\pi = \sum_{k=1}^{\infty} \frac{2^{4k+1}}{k(4k)! \binom{8k}{4k}} \left[ (2k-1) \prod_{m=1}^k (4m-7)^2 \prod_{m=1}^{2k} (4m-1)- (6k-1) \prod_{m=1}^k (4m-5)^2 \prod_{m=1}^{2k} (4m-3)  \right]
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} 2^{8 k} \left(40 k^2-24 k+3\right)}{k^3 (2 k-1) \binom{4 k}{2 k}^2 \binom{2 k}{k}}=2^6G
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k+1} (10 k-3) ((k-1)!)^2}{(2 k-1) (2 k)!}=\frac{\pi^2}{3} 
$$

$$
\sum _{k=1}^\infty \frac{(-1)^{k-1}}{(k+x)^2} =\sum_{k=1}^p(-1)^{k-1}\frac{\left(10 k^2+k (6 x-3)+(x-1) x\right) (k-1)!^2 (2 k-2)!}{2 (x+1)_{2 k}^2}+(-1)^pp!^2(2p)!\sum_{k=1}^\infty \frac{(-1)^{k-1}}{(k+x)_{2p+1}^2} ,p=1,2,3,\cdots 
$$

$$
\sum _{k=1}^\infty \frac{(-1)^{k-1}}{(k+x)^2(k+x+1)^2} =\sum _{k=1}^p \frac{(-1)^{k-1} (2 k)!^3 \left(10 k^2+6 k x+7 k+x^2+2 x+1\right)}{k 16^k (k!)^2 (x+1)_{2k+1}^2}+(-1)^p\frac{((2p+1)!)^3}{16^p (p!)^2}\sum _{k=1}^\infty \frac{(-1)^{k-1}}{(k+x)_{2p+2}^2} 
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} (5k+1)}{k(2k+1) 16^k} \binom{2k}{k}=3-4\ln 2
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} 16^k \left(40 k^2+16 k+1\right) ((2 k)!)^5)}{k (k!)^2 ((4 k+1)!)^2}=8-2\pi
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} \left(360 k^2+1\right) ((2 k)!)^3)}{ k 16^k (k!)^2 \left(-\frac{1}{6}\right)_{2 k+1}^2}=144 \left(\pi +12-\sqrt{3} \log \left(\sqrt{3}+2\right)\right)
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} 2^{8 k-4} \left(40 k^2-1\right)}{k^3 (2 k-1) (4 k+1)^2 \binom{2 k}{k} \binom{4 k}{2 k}^2}=4-4G
$$

$$
\sum _{k=1}^{\infty } \frac{(-1)^{k-1} \left(2 k (10 k-3) H_{2 k}-(6 k-1)\right)}{k^3 (2 k-1) \binom{2 k}{k}}=6\zeta(3)
$$


