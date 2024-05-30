---
title: "Compton Scattering"
topicId: 1
pageId: 5
layout: 'page'
tags: ['page']
---

Compton Scattering is the phenomenon observed when high frequency photons come in contact with an electron (or any charged particle in general) and is subsequently scattered.

In this example an incident photon with wavelength $\lambda$ gets scattered from an electron initially at rest. After collision the electron is deflected an angle $\phi$ below the x-axis and gains some speed $v$. The photon is simultaneously deflected an angle $\theta$ and now has the wavelength $\lambda'$.

A few relations to keep in mind here are the energy of the photon $E = h\nu = hc/\lambda$ and the de Broglie relation $\lambda = h/p$.

<div id="emph-block">
<b>Proof Sketch</b>

- Conserve momentum in both axes, find momentum of electron.
- Conserve energy before and after collision, substitute momentum of electron and cancel terms.
- Simplify the energy equation in terms of wavelength, find expression for $\Delta \lambda$

</div>


Conserving momentum along the x and y axes we have two equations.

$$
\begin{gather} 
p = \ m_ev\cos{\phi} + p'\cos{\theta} \\\\\
m_ev\sin{\phi} = \ p'\sin{\theta} 
\end{gather}
$$

Squaring the two equations and adding

$$
\begin{aligned} 
m_e^2v^2 &= (p- p'\cos{\theta})^2 + p'^2\sin^2{\theta} \\\\\
&= p^2 - 2pp'\cos{\theta} + p'^2\cos^2{\theta} + p'^2\sin^2{\theta} \\\\
&= p^2 - 2pp'\cos{\theta} + p'^2 \\\\
\end{aligned}
$$

By de Broglie relation,

$$
\begin{aligned} 
m_e^2v^2 &= h^2(\frac{1}{\lambda^2} - \frac{2}{\lambda\lambda'}\cos{\theta} + \frac{1}{\lambda'^2}) \\\\
\end{aligned}
$$

Conserving energy before and after collision,

$$
\begin{gather} 
h\nu + m_ec^2 = \sqrt{m_e^2c^4 + (m_ev)^2c^2} + h\nu' \\\\\
\implies h(\nu-\nu') + m_ec^2 = \sqrt{m_e^2c^4 + (m_ev)^2c^2} \\\\\
\implies h^2(\nu-\nu')^2 + 2h(\nu-\nu')m_ec^2 = (m_ev)^2c^2 \\\\\
\end{gather}
$$

Substitute $(m_ev)^2$,

$$
\begin{aligned}
h^2(\nu-\nu')^2 &+ 2h(\nu-\nu')m_ec^2 \\\\
&= h^2(\frac{1}{\lambda^2} - \frac{2}{\lambda\lambda'}\cos{\theta} + \frac{1}{\lambda'^2})c^2 \\\\
&= h^2(\nu^2 - 2\nu\nu'\cos{\theta} + \nu'^2) \\\\
\end{aligned}
$$

Expand along both sides and cancel,

$$
\require{cancel}
\begin{aligned}
\cancel{h^2\nu^2} - 2h^2\nu\nu' & + \cancel{h^2\nu'^2} + 2h(\nu-\nu')m_ec^2 \\\\
=& \cancel{h^2\nu^2} - 2h^2\nu\nu'\cos{\theta} + \cancel{h^2\nu'^2} \\\\
\implies 2h(\nu-\nu')m_ec^2 =& \ 2h^2\nu\nu'(1-\cos{\theta})\\\\
\implies (\frac{c}{\lambda}-\frac{c}{\lambda'})m_ec^2 =& \ \frac{hc^2}{\lambda\lambda'}(1-\cos{\theta})\\\\
\implies {\lambda' - \lambda \over \lambda\lambda'}m_ec =& \ \frac{h}{\lambda\lambda'}(1-\cos{\theta})\\\\
\implies \lambda' - \lambda  =& \ \frac{h}{m_ec}(1-\cos{\theta})\\\\
\end{aligned}
$$

<!-- $$
\begin{aligned}
h^2(\nu-\nu')^2 + 2h(\nu-\nu')m_ec^2 &= h^2(\nu^2 - 2\nu\nu'\cos{\theta} + \nu'^2) \\\\
h^2(\nu^2-2\nu\nu'+\nu'^2) + 2h(\nu-\nu')m_ec^2 &= h^2(\nu^2 - 2\nu\nu'\cos{\theta} + \nu'^2) \\\\
2h^2\nu\nu' + 2h(\nu-\nu')m_ec^2 &= 2h^2\nu\nu'\cos{\theta} \\\\
(\nu-\nu')m_ec^2 &= h\nu\nu'(1-\cos{\theta}) \\\\
(\frac{c}{\lambda}-\frac{c}{\lambda'})m_ec^2 &= h\frac{c^2}{\lambda\lambda'}(1-\cos{\theta}) \\\\
({\lambda' - \lambda\over\lambda\lambda'})m_ec^2 &= h\frac{c}{\lambda\lambda'}(1-\cos{\theta}) \\\\
(\lambda' - \lambda)m_ec^2 &= hc(1-\cos{\theta}) \\\\
\lambda' - \lambda &= \frac{h}{m_ec}(1-\cos{\theta}) \\\\
\end{aligned}
$$ -->

As the term $(1-\cos{\theta})$ is always positive, the outgoing photon always has the greater wavelength $\Delta \lambda > 0$,

$$\boxed{\Delta \lambda = \frac{h}{m_ec}(1-\cos{\theta})}$$

The shift in wavelength can be anywhere between 0 and $2h/m_ec$. The *Compton wavelength* of any particle is thus defined as
$$\lambda_\text{compton} = \frac{h}{m_0c}$$

#### $\theta$ for maximum energy loss 

The expression for energy loss is as follows

$$\Delta E =\frac{hc}{\Delta \lambda} = m_ec^2{1\over 1-\cos{\theta}}$$

We can find the maximum energy loss by setting $\Delta E/d\theta = 0$

$$
\begin{aligned}
\frac{\Delta E}{d\theta} &= m_ec^2 {-\sin{\theta}\over (1-\cos{\theta})^2} = 0 \\\\
\implies \sin{\theta} &= 0 \implies \theta = 0, \pi
\end{aligned}
$$

$\theta = 0$ corresponds to the case where the neither the electron nor the photon suffers no change in momentum. $\theta = \pi$ corresponds to the scenario where the photon suffers complete $180 ^\circ$ recoil, this is the case with the maximum energy loss. The outgoing photon has wavelength, 

$$
\lambda' = \frac{2h}{m_ec} + \lambda
$$

#### Electron cannot absorb all of the energy of the photon

Suppose after the collision, the electron completely absorbs the photon energy and proceeds in the direction of impact.

By momentum conservation we have,
$$p = m_ev$$

$v$ being the velocity of the electron after impact. By the conservation of energy befor and after collision we have,

$$
\begin{aligned}
pc + m_ec^2 &= \sqrt{m_e^2c^4 + (m_ev)^2c^2} \\\\
p^2c^2 + 2pm_ec^3 + m_e^2c^4 &= m_e^2c^4 + (m_ev)^2c^2 \\\\
p^2c^2 + 2pm_ec^3 &= p^2c^2 \\\\
2pm_ec^3 &= 0 \implies p=0 \\\\
\end{aligned}
$$

As momentum of a photon is always non-zero, this violates the principle of conservation of energy.