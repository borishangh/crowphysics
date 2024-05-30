---
title: "The Schrodinger Equation in 1D"
topicId: 2
pageId: 1
layout: 'page'
tags: ['page']
---

In classical mechanics the *state* of a system is given by its position and momentum, once that is known we can predict how it wil behave (or how the state will evolve) using Newton's Laws. At very small distances however, we can never know with absolute certainty both a particle's position and momentum. The bounds for this uncertainty given by Heisenberg, puts it many orders of magnitude below our everyday measurements, classical mechanics works on these scales. Many counter-intuitive results by Einstein and de Broglie suggests that particles at small scales, in fact, behave like waves. This should prompt the question - what then is the wavefunction of the particle and how does it evolve with time?

As for the second question, how would such an equation look like? As any relation describing change it should be differential in nature, and encapsulate a few facts:

<div id="emph-block">

1) When two wavefronts meet their peaks and troughs superimpose linearly, meaning the combined effect of the waves $\Psi_1$ and $\Psi_2$ can be given by the function $\Psi = \Psi_1 + \Psi_2$. This indicates that the differential equation must be linear and homogeneous.

2) The wave nature of matter described by Einstein-de Broglie Relations must follow from the equation. These are the energy equation $E = h\nu = \hbar \omega$ and the expression for wavelength $\lambda = h/ p$.

3) Total energy $E = U + K$ mus be conserved.

</div>

Take the canonical solution to the wave equation in 1D, $\Psi_1(x,t) = A\sin(kx -\omega t)$ another solution may be $\Psi_2(x,t) = B\cos(kx -\omega t)$. In this case, consider the complex wavefunction solution $\Psi(x, t) = Ce^{i(kx- \omega t)}$ - a wave propagating in the +x direction.

from the de Broglie relation we have $p = h/\lambda = \hbar (2\pi)/\lambda = \hbar / k$. Which we can pug in our expression for kinetic energy,

$$
K = \frac{p^2}{2m} = \frac{\hbar^2k^2}{2m} 
$$

ideally In our equation $E= K + U$ with $E = \hbar \omega$

$$
\hbar \omega\Psi(x, t) = \frac{\hbar^2k^2}{2m}\Psi(x, t) + U(x, t)\Psi(x, t)
$$

Notice that,

$$
\begin{gather}
\frac{\partial^2}{\partial x^2}\Psi(x, t) = -k^2\Psi(x, t) \\\\
\frac{\partial}{\partial t}\Psi(x, t) = i\omega\Psi(x, t)
\end{gather} 
$$

We can thus substitute in,

$$
\boxed{i \hbar \frac{\partial}{\partial t}\Psi(x, t) = \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\Psi(x, t) + U(x, t)\Psi(x, t)}
$$

This is the *Schordinger equation* in 1 dimension.

Sometimes the term for energy is written using the operator $\hat E = i\hbar\frac{\partial}{\partial t}$, while the sum of kinetic and potential energy is written as the Hamiltonian Operator $\hat H = \left( \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + U \right)$, the Schrodiger equation reduces to a simple statement of conservation of energy $\hat E \Psi = \hat H \Psi$.