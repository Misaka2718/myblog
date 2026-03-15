---
title: zeta(3)与调和级数,马尔可夫变换
createTime: 2026/02/16 
permalink: /math/2mcgmi7z/
---

关于马尔可夫变换，微积分学教程的一个推广。
从 $(x+1)_{k+i} = (x+1)_{k+i}$

定义一个对称函数 

$$a_{i,k}(x)= \frac{(x+1)_{k-1}}{(x+i)\cdots(x+i+k)} =\frac{(x+1)_{i-1}}{(x+k)\cdots(x+k+i)}$$



令 $x=0$ 刚好是教程里的.
在一个矩形(i:1->I,k:1->K)中进行累级数求和：
套用公式

$$\sum_{n=1}^{N} \frac{1}{(\alpha+n)_p} = \frac{1}{p-1} \left( \frac{1}{(\alpha+1)_{p-1}} - \frac{1}{(\alpha+N+1)_{p-1}} \right)$$

$$\sum_{i=1}^{I} a_{i,k}(x) = \frac{(x+1)_{k-1}}{k} \left( \frac{1}{(x+1)_k} - \frac{1}{(x+I+1)_k} \right)$$

$$= \frac{1}{k(x+k)} - \frac{(x+1)_{k-1}}{k(x+I+1)_k}$$
则矩形内总和为：
$$\sum_{k=1}^{K} \sum_{i=1}^{I} a_{i,k} = \sum_{k=1}^{K} \frac{1}{k(k+x)} - \sum_{k=1}^{K} \frac{(x+1)_{k-1}}{k(x+I+1)_k}$$
"现在把矩阵这样变形，在第m行中使前m-1行项保持原状，而第m项代之以第m行从第m项开始的所有项的和$r_m$，而丢弃其余的项"


$$\begin{aligned} &r_m = \sum_{i=m}^{I} \frac{(x+1)_{m-1}}{(i+x)\cdots(i+x+m)}\\&= \sum_{i=1}^{I-m+1} \frac{(x+1)_{m-1}}{(i+m-1+x)\cdots(i+2m-1+x)} \\ & = \frac{(x+1)_{m-1}}{m} \left( \frac{1}{(m+x)_m} - \frac{1}{(I+x+1)_m} \right) \end{aligned}$$



第 $m$ 的其余各项和为：
$$\begin{aligned}
J_m &= \sum_{k=m+1}^{K} \frac{(x+1)_{m-1}}{(x+k)\dots(x+k+m)}\\
&= \sum_{k=1}^{K-m} \frac{(x+1)_{m-1}}{(k+m+x)\dots(k+2m+x)}\\
&=\frac{(x+1)_{m-1}}{m} \left( \frac{1}{(m+x+1)_m} - \frac{1}{(K+x+1)_m} \right)\\

\end{aligned}$$



则 $r_m + J_m$ 为变换过的列：
$$\begin{aligned}
&\quad r_m + J_m\\
&= \frac{(x+1)_{m-1}}{m(m+x)_m} + \frac{(x+1)_{m-1}}{m(m+x+1)_m} - \frac{(x+1)_{m-1}}{m(x+I+1)_m} - \frac{(x+1)_{m-1}}{m(K+x+1)_m}\\
&=\frac{(x+1)_{m-1}(3m+2x)}{m(m+x)_{m+1}} - \frac{(x+1)_{m-1}}{m(x+I+1)_m} - \frac{(x+1)_{m-1}}{m(K+x+1)_m}
\end{aligned}$$



总之，
$$
\sum_{m=1}^{I}( r_m + J_m) = \sum_{i=1}^{I} \sum_{k=1}^{K} 
$$
令 $I = K = n$，化简后得：

$$\sum_{k=1}^{n} \frac{1}{k(k+x)} = \sum_{k=1}^{n} \frac{(x+1)_{k-1} (3k+2x)}{k(k+x+1)_k} - \sum_{k=1}^{n} \frac{(x+1)_{k-1}}{k(n+x+1)_k}\tag{1}$$

对(1)式求导后
$$\begin{aligned} -\sum_{k=1}^{n} \frac{1}{k(k+x)^2} &= \sum_{k=1}^{n} \frac{(x+1)_{k-1}(3k+2x)}{k(k+x)_{k+1}} \left[ 2\psi(x+k) - \psi(x+1) - \psi(2k+x+1) + \frac{2}{3k+2x} \right] \\ &\quad - \sum_{k=1}^{n} \frac{(x+1)_{k-1}}{k(n+x+1)_k} \left[ \psi(x+k) - \psi(x+1) - \psi(n+k+x+1) + \psi(n+x+1) \right] \end{aligned}$$
代入$x=0$得
$$\sum_{k=1}^{n} \frac{1}{k^3} = \sum_{k=1}^{n} \frac{1}{k^2 \binom{n+k}{k}} \left( H_k - H_{n+k} + H_n - \frac{1}{k} \right) - \sum_{k=1}^{n} \frac{3}{k^2 \binom{2k}{k}} \left( 2H_k - H_{2k} - \frac{4}{3k} \right)\tag{2}$$
令$n\to\infty$
$$\sum_{k=1}^{\infty} \frac{1}{k^3} = \zeta(3) = 3 \sum_{k=1}^{\infty} \frac{1}{k^2 \binom{2k}{k}} \left( H_{2k} - 2H_k + \frac{4}{3k} \right)\tag{3}$$

配合
$$\zeta(3) = 3 \sum_{k=1}^{\infty} \frac{1}{k^2 \binom{2k}{k}} \left( H_k - \frac{1}{3k} \right)\tag{4}$$
消去$1/k$得
$$
\zeta(3) = \frac{3}{5} \sum_{k=1}^{\infty} \frac{1}{k^2 \binom{2k}{k}} (H_{2k} + 2H_k)\tag{5}
$$

---
(4)式子见

[[级数加速法]]中
$$\sum_{k=1}^{\infty} \frac{1}{(k+x)^2} = \sum_{k=1}^{\infty} \frac{(3k+2x) k!^2}{k^3 \binom{2k}{k} (x+1)_k^2}\tag{6}$$
两边对$x$求导代入$x=0$得(4)式。