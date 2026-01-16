---
title: 级数,公式
createTime: 2026/01/15 13:52:48
permalink: /math/zkzkhq8n/
---

$$
\begin{align*}
& 1 + \sum_{k=1}^{n}\dfrac{1}{k!} + \dfrac{1}{n!\,n} - \dfrac{1}{n!\,n(n^2+n+1)} + \dfrac{2}{n!(n^2+n+1)(n^3+3n^2+5n+2)} \\[12pt]
&= 3 - 6\sum_{k=1}^{n}\dfrac{1}{k!(k^3+2k-1)(k^3+3k^2+5k+2)}
\end{align*}
\begin{align*}
& \frac{8}{3} + 24\sum_{k=1}^{n}\frac{1}{k!(k^4+2k^3+5k^2+1)(k^4+6k^3+17k^2+20k+9)} \\
&= \sum_{k=0}^{n}\frac{1}{k!} + \frac{1}{n!n} - \frac{1}{n!n(n^2+n+1)} + \frac{2}{n!(n^2+n+1)(n^3+3n^2+5n+2)} \\
&\quad - \frac{6}{n!(n^3+3n^2+5n+2)(n^4+6n^3+17n^2+20n+9)}\end{align*}
$$

$$
\int_{-1}^1 \prod_{n=1}^{\infty} (1 - x^n)  \mathrm{d}x=\frac{4 \sqrt{\frac{6}{23}} \pi  \sinh \left(\frac{\sqrt{23} \pi }{12}\right)}{1-2 \sqrt{2} \cosh \left(\frac{\sqrt{23} \pi }{12}\right)+2 \cosh
   \left(\frac{\sqrt{23} \pi }{6}\right)}
$$

$$
\int_{0}^1 \prod_{n=1}^{\infty} (1 - x^n)  \mathrm{d}x=8 \sqrt{\frac{3}{23}} \pi\frac{  \sinh \left(\frac{\sqrt{23} \pi }{6}\right)}{2 \cosh \left(\frac{\sqrt{23} \pi }{3}\right)-1}
$$

$$
\frac{\pi^2}{6}=3\sum_{k=1}^p\frac{1}{k^2 {2k \choose k}}  +\frac{(p!)^3}{2^p(2p-1)!!} \sum_{k=1}^\infty\frac{1}{(k)_{p+1}^2} 
$$
$$
\sum _{k=1}^p \frac{H_k^{(2)}}{k}-\frac{\pi ^2 H_p}{6}+\zeta (3)=p!\sum_{k=1}^\infty\frac{1}{k^2(k)_{p+1}} 
$$
$$
\zeta (3)=\frac{\pi ^2}{6} H_p-\sum _{k=1}^p \frac{H_k^{(2)}}{k}+p!\sum_{k=1}^\infty\frac{1}{k^2(k)_{p+1}} 
$$
$$
\zeta (3)=\sum_{k=1}^{\infty}\frac{\zeta(2)-H_k^{(2)}}{k},\quad H_k^{(2)}=\sum_{j=1}^{k}\frac{1}{j^2}
$$

$$
\begin{align*}
    \zeta (3)&=\sum_{k=1}^{p}\frac{\zeta(2)-H_k^{(2)}}{k}+p!\sum_{k=1}^\infty\frac{1}{k^2(k)_{p+1}}\\
    &=\sum_{k=1}^{p}\frac{\zeta(2)-H_k^{(2)}}{k}+p!\sum_{k=1}^\infty\frac{1}{k^3(k+1)(k+2)\cdots(k+p)} ,\\ 
    &\text{其中}H_k^{(2)}=\sum_{j=1}^{k}\frac{1}{j^2}\text{为2阶调和数}
\end{align*}
$$

$$
\begin{align*}
   \zeta(3) &= \sum _{k=1}^\infty \frac{(-1)^{k-1} \left(56 k^2-32 k+5\right) (k!)^3}{4 k^3 (2 k-1)^2 (3k)!} \\
  & =\sum _{k=1}^p \frac{(-1)^{k-1} \left(56 k^2-32 k+5\right) (k!)^3}{4 k^3 (2 k-1)^2 (3k)!} + \frac{(-1)^p (p!)^3 ((2p)!)^3}{(3p)!} \sum _{k=1}^\infty \frac{1}{\left[ k(k+1)\cdots (k+2p) \right]^3}\\
  &\text{这里p是正整数} p=1,2,3,\cdots
\end{align*}
$$

$$
\begin{align*}
\zeta(3) &= \sum _{k=1}^\infty \frac{(-1)^{k-1} \left(56 k^2-32 k+5\right)}{4 k^3 (2 k-1)^2} \frac{(k!)^3}{(3k)!} \\
         &= \sum _{k=1}^p \frac{(-1)^{k-1} \left(56 k^2-32 k+5\right)}{4 k^3 (2 k-1)^2} \frac{(k!)^3}{(3k)!} \\
         &\quad + \frac{(-1)^p (p!)^3 ((2p)!)^3}{(3p)!} \sum _{k=1}^\infty \frac{1}{\left[ k(k+1)(k+2)\cdots (k+2p) \right]^3}, \quad p=1,2,3,\dots
\end{align*}
$$
$$\sum_{k=1}^{\infty} \frac{1}{(k+x)^2}=\sum_{k=1}^{\infty} \frac{(3 k + 2 x) ((k - 1)!)^3}{2^k (2 k - 1)!! (x+1)_k^2}  =\sum_{k=1}^{\infty} \frac{(3 k + 2 x) k!^2}{k^3 \binom{2k}{k} (x+1)_k^2} = \psi_1(x+1)$$
$$
\pi^2=10+\sum _{k=1}^p \frac{(-1)^{k} \left(56 k^2+24 k+3\right)  }{2 k^2 (2
   k+1) (6 k+1) }\frac{(3 k)!}{ (6 k)!} \left (\frac{(2 k)!}{k!}\right ) ^3+\frac{(-1)^{p-1} (2 p+1)^5 ((2 p)!)^6 (3 p)!}{(6 p+1) (p!)^3 (6 p)!}\sum _{k=1}^\infty \frac{1}{(k)_{2p+2}^3} ,\quad p\ge 1
$$
$$\displaystyle \sum_{n=1}^{\infty} \frac{2^{4n+1}(3n-1)}{ n^3 \displaystyle \binom{2n}{n} ^3} = \pi^2$$

$$
\sum_{k=1}^\infty\frac{1}{(k+x)^2}=\sum_{k=1}^p\frac{(3 k + 2 x) ((k - 1)!)^3}{2^k (2 k - 1)!! (x+1)_k^2} +\frac{(p!)^3}{2^p(2p-1)!!} \sum _{k=1}^\infty\frac{1}{(k+x)_{p+1}^2} 
$$

$$
\frac{\pi^2}{2}=\sum _{k=1}^p \frac{16^k (3 k-1)}{k^3 \binom{2 k}{k}^3}+\frac{\left(2^{p+2} (p!)^3\right)}{(2 p-1)\text{!!}} \sum _{k=1}^{\infty } \frac{1}{\prod _{j=0}^p (2 k+2 j-1)^2}
$$
$$
\begin{align*}
\sum_{k=1}^{\infty} \frac{1}{(k+x-1)^2} &= \sum_{k=1}^{\infty} \frac{(3 k + 2 x-2) (k!)^2}{k^3 \binom{2k}{k} (x)_k^2}, \\
\text{where } (x)_k &= x(x+1)\cdots(x+k-1).
\end{align*}
\begin{align*}
\sum_{k=1}^{\infty} \frac{1}{(k+x-1)^2} &= \sum_{k=1}^{\infty} \frac{(3k + 2x-2) \, (k!)^2}{k^3 \binom{2k}{k} (x)_k^2} \\
& \quad \text{其中 } (x)_k \text{ 为 Pochhammer 符号：} \\
& \quad (x)_k = x(x+1)(x+2)\cdots(x+k-1)
\end{align*}
$$
$$
\begin{align*}
\boxed{ \sum_{k=1}^{\infty} \frac{1}{(k+x-1)^2} = \sum_{k=1}^{\infty} \frac{(3 k + 2 x-2) (k!)^2}{k^3 \binom{2k}{k} (x)_k^2} } \\[1em]
\text{where } (x)_k = x(x+1)\cdots(x+k-1) \quad (\text{Pochhammer}) \\
\end{align*}
$$
$$
\begin{align*}
S(x) &= \sum_{k=1}^{\infty} \frac{1}{(k+x-1)^2} = \sum_{k=1}^{\infty} \frac{(3 k + 2 x - 2) (k!)^2}{k^3 \binom{2k}{k} (x)_k^2} \\[1em]
&\text{where } (x)_k = x(x+1)\cdots(x+k-1) \quad (\text{Pochhammer}) \\
\implies \quad & 
\begin{cases} 
\displaystyle x=1: & \displaystyle \frac{\pi^2}{6}= \sum_{k=1}^{\infty} \frac{1}{k^2} = 3\sum_{k=1}^{\infty} \frac{1}{k^2 \binom{2k}{k}} \\[15pt]
\displaystyle x=\frac{1}{2}: & \displaystyle \frac{\pi^2}{2}=\sum_{k=1}^{\infty} \frac{4}{(2k-1)^2} = \sum_{k=1}^{\infty} \frac{16^k (3k-1)}{k^3 \binom{2k}{k}^3}
\end{cases}
\end{align*}
$$
$$
\begin{align*}
S(x) &= \sum_{k=1}^{\infty} \frac{1}{(k+x-1)^2} = \sum_{k=1}^{\infty} \frac{(3 k + 2 x - 2) (k!)^2}{k^3 \binom{2k}{k} (x)_k^2} \\[1em]
&\text{此处} (x)_k = x(x+1)\cdots(x+k-1) \quad (\text{Pochhammer记号}) \\
\implies \quad & 
\begin{cases} 
\displaystyle x=1: & \displaystyle \frac{\pi^2}{6}= \sum_{k=1}^{\infty} \frac{1}{k^2} = 3\sum_{k=1}^{\infty} \frac{1}{k^2 \binom{2k}{k}} \\[15pt]
\displaystyle x=\frac{1}{2}: & \displaystyle \frac{\pi^2}{2}=\sum_{k=1}^{\infty} \frac{4}{(2k-1)^2} = \sum_{k=1}^{\infty} \frac{16^k (3k-1)}{k^3 \binom{2k}{k}^3}
\end{cases}
\end{align*}
$$
$$
10-\pi^2=\sum _{k=1}^\infty \frac{(-1)^{k-1} \left(56 k^2+24 k+3\right)  }{2 k^2 (2
   k+1) (6 k+1) }\frac{(3 k)!}{ (6 k)!} \left (\frac{(2 k)!}{k!}\right ) ^3
$$

$$
\sum _{k=1}^{\infty } \frac{1}{(k+x) (k+y)}=\sum _{k=1}^p \frac{(3 k+x+y) (k-1)! (x-y+1)_{k-1} (y-x+1)_{k-1}}{2^k (2 k-1)\text{!!} (1+x)_k (1+y)_k}+\frac{p! (x-y+1)_p (y-x+1)_p }{2^p (2 p-1)\text{!!}}\sum _{k=1}^{\infty } \frac{1}{(k+x)_{p+1} (k+y)_{p+1}}
$$

$$
\begin{align*}
\sum_{k=1}^{\infty} \frac{1}{(k+x)(k+y)}&= \sum_{k=1}^{\infty} \frac{3k+x+y}{k \binom{2k}{k}} \frac{(1+x-y)_{k-1} (1+y-x)_{k-1}}{(1+x)_k (1+y)_k}\\ 
&= \sum_{k=1}^{p} \frac{3k+x+y}{k \binom{2k}{k}} \frac{(1+x-y)_{k-1} (1+y-x)_{k-1}}{(1+x)_k (1+y)_k}\\
&\quad + \frac{p! \, (x-y+1)_p (y-x+1)_p}{2^p (2p-1)!!} \sum_{k=1}^{\infty} \frac{1}{(k+x)_{p+1} (k+y)_{p+1}}
\end{align*}
$$

$$
\begin{align*}
   &\text{已知}:2\sin\left (\frac{x}{2}\right ) \left (\frac{1}{2}+\sum_{k=1}^n\cos(kx) \right )=\sin\left(n+\frac{1}{2} \right )x\\
   &\text{证明:}\\
 &(1)\lim _{n\to \infty }\int _0^\pi\left(\frac{1}{2\sin\left (\frac{x}{2}\right )} -\frac{1}{x}\right )\sin\left (n+\frac{1}{2} \right )x\mathrm{d}x=0 \\
 &(2)\int_0^{+\infty} \frac{\sin x}{x} \mathrm{d}x=\frac{\pi}{2}  
\end{align*}
$$
$$\pi^2=\sum_{n=1}^\infty \frac{2^{4n+1}(3n-1)}{n^3\binom{2n}{n}^3 } $$

