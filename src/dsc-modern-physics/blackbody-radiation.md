---
title: 'Blackbody Radiation and The Faliure of Classical Theory'
topicId: 1
pageId: 1
layout: 'page'
tags: ['page']
---

### Blackbody

Every physical body at a certain temperature absorbs a fraction of energy incident on it and in turn emits radiation in the form of electromagnetic waves. *The ratio of energy absorbed to total energy incident on the body is known as absorbitivity (denoted $a$)*.

In late 1800s through some simple thermodynamic arguments Gustave Kirchhoff postulated that for any body at thermal equilibrium, the ratio of emissive power and absorbitivity is a universal function of radiative wavelength and temperature.

For **an ideal body that absorbs light of all frequencies incident on it** (i.e. $a=1$) its emissive power is a function of radiative wavelength and temperature only. This is known as a black body. *The ratio of emmissive power of any real material to that of a black body is called emmissivity(denoted $\epsilon$)*. It follows from Kirchhoff's law that for all bodies at thermal equilibrium, the emissivity is equal to its absorbtivity. ($a = \epsilon$). 

In a laboratory, a black body can be approximated by a large non reflective cavity with its inside coated in lamp-blabk or platinum black. When this cavity is heated, and brought to thermal equilibrium at a temperature T, it emits a characteristic continuous frequency curve. 

The energy in the cavity per unit volume in the freqency interval $[\nu, \nu+d\nu]$ is known as *spectral energy density* or simply *spectral density*, the units of which are $\text{J}\text{m}^{-3}\text{Hz}^{-1}$. The spectral density as a function of frequency and temperature appears on this site as $u(\nu, T)$ or alternatively $u(\lambda, T)$ when it is a function of wavelength instead.

The problem of finding this function challenged the foundations of classical physics only later yielding to Max Planck's theory of the quanta.

### Stefan-Boltzmann Law

In 1879, Joseph Stefan found **the total intensity of radiation for the black body is proportional to its temperature to the fourth power**. His student Ludwig Boltzmann would later derive the following relation, now known as the *Stefan-Boltzmann law*.

$$ \boxed{\int^\infty_0 u(\nu,T) = \frac{4 \sigma}{c} T^4} $$


### Wein's Displacement Law

Wilhelm Wien, a life-long friend of Planck, noted that in the emission spectra *the peaks of the curves were displaced on change of temperature while the produt of the maximum wavelength and Temperature remained constant*. He would go on to give the following relation,

$$
\lambda_\text{max} \propto \frac{1}{T} \quad \text{or,} \quad \boxed{\lambda_\text{max}T = b}
$$

where $b=2.897 \times 10^{−3} \text{mK}$ is Wien's displacement constant.

### Wein's Distribution Law

Wein mantained that the blackbody spectra can be explained thermodynamically. He assumed that molecules(a radical idea at the time) within the black body acted as oscillators which gave off radiation. Using the Maxwellian distribution of velocities he settled on a form of equation as follows $u(\lambda, T) = C\lambda^{-\alpha} e^{-c/\lambda T} $. Integrating over wavelengths 0 to infinity and comparing with Stefan-Boltzmann Law he found $\alpha=5$. 

Wein's approximation fails at lower frequency ranges. For a long time, in the dearth of good experimental data at low frequences, it served as the most accurate description of Kirchhoff's universal function.

Wein's distribution can be treated as the *high frequency or the short wavelength limit of Planck's Distribution law*, where the constants substutited give the equation,

$$\boxed{u(\nu, T) = \frac{8\pi h \nu^3}{c^3}e^{-h\nu/kT}}$$

Where $k = 1.38 \times 10^{-23} JK^{-1}$ is the Boltzmann constant, and $h = 6.626 \times 10^{-34} Js$ being the Planck constant, c is the speed of light. 


### Rayleigh's Energy Distribution Law

Similar to Wein's analyis, Rayliegh imagined particles to be acting as harmonic oscillators, these oscillators give rise to a number of standing waves within the black body that correspond to the radiations at different frequencies. If the number of standing waves (modes) within the range $[\nu, \nu+d\nu]$ is $N(\nu)$ then the spectral energy density within the interval is $u(\nu, T)=N(\nu)\langle E \rangle$ with $\langle E \rangle$ being the average energy of the oscillators. 

We found <a href="#modes">the  number of modes</a>,

$$
N(\nu) = \frac{8\pi\nu^2}{c^3}d\nu
$$

Assuming once again that these oscillators follow the Maxwell-Boltzmann distribution,

$$
\langle E \rangle = {\int_0^\infty E e^{-E/kT}dE\over\int_0^\infty e^{-E/kT}dE} = kT
$$

This is also evident from the equipartition theorum that assigns an average contribution of $\frac{1}{2}k_BT$ each from the kinetic and potential energy of a harmonic oscilator.

Thus the statement of Rayliegh-Jeans Distribution Law is as follows,

$$
\boxed{u(\nu, T) = \frac{8\pi\nu^2}{c^3}kT}
$$

Rayliegh-Jeans Distribution fails at high frequencies quickly reaching incredibly high energy densities near and beyond the ultraviolet spectrum. This fact that $u \to \infty$ as $\nu \to \infty$ is known as the *ultraviolet catastrophe*.

In contrast with Wein's distribution it exists as the *low frequency or the long wavelength limit* to Planck's Distribution Law.

#### Number of modes in a cavity <a id="modes"/>

<div id = "warn">(not mentioned in syllabus)</div>
<div id = "warn-block">
Consider a cube with side $L$. Standing waves within this cavity can only exist if the half-wavelength of the wave is an integral multiple of length.
$$
{L \over \lambda / 2} = m \quad \text{or} \quad \lambda = {2L \over n}
$$

In terms of wavenumber, $k=2\pi/\lambda  = \pi n/L$. The magnitude squared of the wavevector having components $(k_x, k_y, k_z)$ is as follows,

$$
\begin{aligned}
k^2 &= k_x^2+k_y^2+k_z^2 \\\\
&= \frac{\pi^2n_x^2}{L^2} + \frac{\pi^2n_y^2}{L^2} + \frac{\pi^2n_z^2}{L^2}
\end{aligned}
$$ or,
$$ 
\begin{aligned}
n_x^2+n_y^2 & + n_z^2 = \frac{k^2L^2}{\pi^2} \\\\
&= \left(\frac{2\pi\nu}{c}\right)^2 \frac{L^2}{\pi^2} \\\\
&= \frac{4\nu^2L^2}{c^2}
\end{aligned}
$$

which is an equation of a sphere in coordinates $(n_x, n_y, n_z)$ with radius $2\nu L/c$. You can imagine this space representing all the possible wavevectors that would all satisfy the half-integer multiple condition. 

All the lattice points that lie on the sphere described above have frequency $\nu$, the volume of the sphere corresponds to the total number of lattice points(modes) that have frequency less than $\nu$. However, only the positive wavenumbers have any physical meaning, so we should be looking at only one octant of this space.
This gives the volume,

$$
\left(\frac{1}{8}\right) \frac{4}{3} \pi \left(\frac{2\nu L}{c}\right)^3 = \frac{4}{3}\pi \frac{\nu^3L^3}{c^3}
$$

Simply set $L=1$ and differentiate with respect to $\nu$ to find the number of modes lying in the interval $[\nu, \nu + d\nu]$,

$$
\frac{4\pi}{3c^3}(3\nu^2d\nu) = \frac{4\pi\nu^2}{c^3}d\nu
$$

Since two polarization states exist for every mode, we multiply the above by 2 to arrive at our final expression for the number of states in a frequency interval per unit volume,

$$
\boxed{N(\nu) = \frac{8\pi\nu^2}{c^3}d\nu}
$$

</div>


### References

- [1]: J. Crepeau, <a href = "https://webpages.uidaho.edu/~crepeau/ht2009-88060.pdf" target = "blank_">A Brief History of the $T^4$ Law</a>,  University of Idaho, 2009.
- [2]: N. Zettili, “Quantum Mechanics, Concepts and Applications,” Wiley, Chichester, 2001.
