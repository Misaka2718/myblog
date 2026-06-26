---
title: 高斯和的theta函数求解
createTime: 2026/06/26 22:13:23
permalink: /math/Guasssum/
---
定义
$$
S(p,q):=\sum_{r=0}^{q-1}e^{-\pi \mathrm{i}r^2 p/q}
$$
我们其实有
对于正整数的$p,q$,$\quad$,$pq$是偶数(一横表示共轭复数)
$$
S(p, q) = \sqrt{\frac{q}{p}} \frac{1-i}{\sqrt{2}} \overline{S(q, p)}.\tag{1}
$$
在此公式令$q=2$,
$$
(1+e^{-\mathrm{i}\pi p/2})=\frac{1-\mathrm{i}}{\sqrt{p}}\sum_{r=0}^{p-1}e^{2\pi \mathrm{i}r^2/p}
$$
即
$$
\sum_{r=0}^{p-1}e^{2\pi \mathrm{i}r^2/p}=\frac{\sqrt{p}}{2}(1+\mathrm{i})(1+e^{-\mathrm{i}\pi p/2})=\begin{cases} 
\sqrt{p} & \text{if } p \equiv 1 \pmod 4 \\
0 & \text{if } p \equiv 2 \pmod 4 \\
i\sqrt{p} & \text{if } p \equiv 3 \pmod 4 \\
(1 + i)\sqrt{p} & \text{if } p \equiv 0 \pmod 4 
\end{cases}\tag{2}
$$
对(2)两边取实部，虚部得到三角和恒等式。
式(1)的证明，这里用theta函数和它的模变化公式:
$$
\theta_3(s):=\sum_{n=-\infty}^\infty e^{-\pi n^2s}
$$
和
$$
\sqrt{s}\theta_3(s)=\theta_3(1/s),\quad Re(s)>0\tag{3}
$$
引理
对于$q$是正整数，$pq$是偶数
$$
\lim_{\varepsilon \to 0^+} \sqrt{\varepsilon} \theta_3\left(\varepsilon + \frac{ip}{q}\right) = \frac{1}{q} S(p, q).\tag{4}
$$

**proof:**
在
$$
\theta_3\left(\varepsilon + \frac{ip}{q}\right) = 1 + 2 \sum_{n=1}^{\infty} e^{-\pi n^2\left(\varepsilon + \frac{ip}{q}\right)}
$$
中对 $n$  按照模 $q$ 进行分组。 令 $n = sq + r$
$r$遍历 $1$ 到 $q$。商$s$ 遍历 $0$ 到 $\infty$。
利用$pq$是偶数的前提和$e^{\mathrm{i}\pi z}$的周期性有
$$
\begin{align}
e^{-\pi i n^2 p/q} &= e^{-\pi i (sq+r)^2 p/q} \\
&=e^{-\pi i pq s^2} \cdot e^{-2\pi i p s r} \cdot e^{-\pi i r^2 p/q}\\
&=e^{-\pi i r^2 p/q}
\end{align}
$$
则:
$$
\theta_3\left(\varepsilon + \frac{ip}{q}\right) = 1 + 2 \sum_{r=1}^{q} e^{-\pi i r^2 p/q} \left[ \sum_{s=0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi} \right]
$$
用麦克劳林-柯西积分判别法估计$\sum_{s=0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi}$
$$
\sum_{s=0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi} = \int_{0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi} ds + R
$$

其中：$0 \le R \le e^{-r^2 \varepsilon \pi} \le 1$。
因此:
$$
\sqrt{\varepsilon} \theta_3\left(\varepsilon + \frac{ip}{q}\right) = \sum_{r=1}^{q} e^{-\pi i r^2 p/q} \left[ 2\sqrt{\varepsilon} \int_{0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi} ds \right] + O(\sqrt{\varepsilon})
$$
令$\varepsilon \to 0^+$并计算求和号里面的不定式:
$$
\begin{aligned} &\lim_{\varepsilon \to 0^+} \sqrt{\varepsilon} \int_{0}^{\infty} e^{-(r+sq)^2 \varepsilon \pi} ds = \lim_{\varepsilon \to 0^+} \sqrt{\varepsilon} \int_{r/q}^{\infty} e^{-\varepsilon \pi q^2 s^2} ds \\ &= \lim_{\varepsilon \to 0^+} \sqrt{\varepsilon} \int_{0}^{\infty} e^{-\varepsilon \pi q^2 s^2} ds = \frac{1}{\sqrt{\pi} q} \int_{0}^{\infty} e^{-t^2} dt = \frac{1}{2q}. \end{aligned}
$$
则再有
$$
\lim_{\varepsilon \to 0^+} \sqrt{\varepsilon} \theta_3\left(\varepsilon + \frac{ip}{q}\right) = \sum_{r=1}^{q} e^{-\pi i r^2 p/q} \left[ 2 \cdot \frac{1}{2q} \right] = \frac{1}{q} \sum_{r=1}^{q} e^{-\pi i r^2 p/q}=\frac{1}{q} S(p, q)
$$
引理证明完毕。
现在可以证明式(1)了，对$\theta_3\left(\varepsilon + \frac{ip}{q}\right)$用上模变化公式(3)和泰勒展开
$$
\frac{1}{\varepsilon + \frac{ip}{q}}=\varepsilon \frac{q^2}{p^2} - \frac{iq}{p} + O(\varepsilon^2)
$$
有
$$
\sqrt{\varepsilon} \theta_3\left(\varepsilon + \frac{ip}{q}\right) = \sqrt{\varepsilon} \left(\varepsilon + \frac{ip}{q}\right)^{-1/2} \theta_3\left(\varepsilon \frac{q^2}{p^2} - \frac{iq}{p} + O(\varepsilon^2)\right).
$$
对此令$\varepsilon \to 0^+$由引理得：
$$
\begin{align}
 &\frac{1}{q} S(p, q)=e^{-i\pi/4} \sqrt{\frac{q}{p}} \cdot \lim_{\varepsilon \to 0^+} \left[ \sqrt{\varepsilon} \cdot \theta_3\left(\varepsilon \frac{q^2}{p^2} - \frac{iq}{p}\right) \right]\\
 &= e^{-i\pi/4} \sqrt{\frac{q}{p}} \cdot \lim_{\varepsilon' \to 0^+} \left[ \left(\sqrt{\varepsilon'} \frac{p}{q}\right) \cdot \theta_3\left(\varepsilon' - \frac{iq}{p}\right) \right]\\
 &= e^{-i\pi/4} \frac{\sqrt{p}}{\sqrt{q}} \cdot \lim_{\varepsilon' \to 0^+} \left[ \sqrt{\varepsilon'} \theta_3\left(\varepsilon' + \frac{i(-q)}{p}\right) \right]\\
 &=e^{-i\pi/4} \frac{\sqrt{p}}{\sqrt{q}} \cdot \frac{1}{p} S(-q,p) \\
 &= e^{-i\pi/4} \frac{1}{\sqrt{q}\sqrt{p}} S(-q,p)
\end{align}\tag{5}
$$
其中$\varepsilon' = \varepsilon \frac{q^2}{p^2}$。我们在第四个等号中对$-q$和$p$再次使用了引理。
对(5)式子整理，由于
$$
e^{-i\pi/4} = \frac{1-i}{\sqrt{2}}
$$
$$
S(-q, p) = \overline{S(q, p)}
$$
则
$$S(p, q) =e^{-i\pi/4}\sqrt{\frac{q}{p}}S(-q, p) = \sqrt{\frac{q}{p}} \frac{1-i}{\sqrt{2}} \overline{S(q, p)}.
$$
式(1)证明完毕.