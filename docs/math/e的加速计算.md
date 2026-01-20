---
title: e的加速计算
createTime: 2026/01/20
permalink: /math/e-fast/
---

$$
\begin{aligned}
\text{令 } &(i)\quad\sigma_n = 1 + \sum_{k=1}^{n} \frac{1}{k!}, \quad \bar{\sigma }_n= 1 + \sum_{k=1}^{n} \frac{(-1)^k}{k!}, \quad \\
&(ii)\quad E_0(x)=1, \quad E_{i+1}(x) = x E_i(x+1) - E_i(x), \quad i \ge 0
\end{aligned}
$$

$$\mathcal{E}_i(n) = \frac{i! (-1)^{i}}{n! E_i(n+1) E_{i+1}(n+1)},\quad i \ge 0$$
有
$$
\sigma_n+\frac{1}{n!}\sum_{i=0}^m\frac{i!(-1)^i}{E_i(n+1)E_{i+1}(n+1)}=\frac{1}{\bar{\sigma}_{m+1}}+(-1)^{m+1}(m+1)!\sum_{k=1}^{n} \frac{1}{k! E_{m+1}(k) E_{m+1}(k+1)} \tag{1}
$$



## 生成函数思考：

求指数生成函数
$$
G(x,t)=\sum_{n=0}^\infty\frac{E_n(x)}{n!}t^n\tag{2}
$$
答：
由递推关系，求得
$$
\frac{\partial G}{\partial t} + G(x, t) = x G(x+1, t)\tag{3}
$$


猜测$G(x,t)$有一下形式：
$$
G(x,t)=A(t)e^{xB(t)}
$$
代入(3)的方程
$$
\frac{A'(t)}{A(t)}+xB'(t)=xe^{B(t)}-1\tag{4}
$$
猜测地令
$$
\frac{A'(t)}{A(t)}=-1,\quad B'(t)=e^{B(t)}
$$
由初值条件
最终解出
$$
G(x,t)=\frac{e^{-t}}{(1-t)^x}\tag{5}
$$

## 附
以下列出了 $i=0$ 到 $i=9$ 的多项式展开形式：
$$\begin{aligned} E_{0}(x) &= 1\\ E_{1}(x) &= x-1\\ E_{2}(x) &= x^2-x+1\\ E_{3}(x) &= x^3+2 x-1\\ E_{4}(x) &= x^4+2 x^3+5 x^2+1\\ E_{5}(x) &= x^5+5 x^4+15 x^3+15 x^2+9 x-1\\ E_{6}(x) &= x^6+9 x^5+40 x^4+85 x^3+94 x^2+35 x+1\\ E_{7}(x) &= x^7+14 x^6+91 x^5+315 x^4+609 x^3+595 x^2+230 x-1\\ E_{8}(x) &= x^8+20 x^7+182 x^6+924 x^5+2779 x^4+4844 x^3+4458 x^2+1624 x+1\\ E_{9}(x) &= x^9+27 x^8+330 x^7+2310 x^6+9975 x^5+26817 x^4+43238 x^3+37590 x^2+13209 x-1 \end{aligned}$$

## E_i(m)表
$$
\begin{array}{llllll}
 \text{i} & \text{m=1} & \text{m=2} & \text{m=3} & \text{m=4} & \text{m=5} \\
 0 & 1 & 1 & 1 & 1 & 1 \\
 1 & 0 & 1 & 2 & 3 & 4 \\
 2 & 1 & 3 & 7 & 13 & 21 \\
 3 & 2 & 11 & 32 & 71 & 134 \\
 4 & 9 & 53 & 181 & 465 & 1001 \\
 5 & 44 & 309 & 1214 & 3539 & 8544 \\
 6 & 265 & 2119 & 9403 & 30637 & 81901 \\
 7 & 1854 & 16687 & 82508 & 296967 & 870274 \\
 8 & 14833 & 148329 & 808393 & 3184129 & 10146321 \\
 9 & 133496 & 1468457 & 8743994 & 37401155 & 128718044 \\
 10 & 1334961 & 16019531 & 103459471 & 477471021 & 1764651461 \\
\end{array}
$$
## 一些e的加速计算公式

$$
\begin{aligned}
&\sum_{k=1}^\infty\frac{1}{k!E_2(k)E_2(k+1)}=\sum_{k=1}^\infty\frac{1}{k!(k^2-k+1)(k^2+k+1)}=\frac{e}{2}-1\\
&\sum_{k=1}^\infty\frac{1}{k!E_3(k)E_3(k+1)}=\sum_{k=1}^\infty\frac{1}{k!(k^3+2k-1)(k^3+3k^2+5k+2)}=\frac{1}{2}-\frac{e}{6}
\end{aligned}
$$
$$\begin{aligned} 1 + \sum_{k=1}^{n} \frac{1}{k!} + \frac{1}{n!n} - \frac{1}{n!n(n^2+n+1)} &= 2 + 2\sum_{k=1}^{n}\frac{1}{k!(k^2-k+1)(k^2+k+1)} \end{aligned}$$
$$\begin{aligned} 1 + \sum_{k=1}^{n} \frac{1}{k!} &+ \frac{1}{n!\,n} - \frac{1}{n!\,n(n^2+n+1)} + \frac{2}{n!(n^2+n+1)(n^3+3n^2+5n+2)} \\[10pt] &= 3 - 6\sum_{k=1}^{n}\frac{1}{k!(k^3+2k-1)(k^3+3k^2+5k+2)} \end{aligned}
$$