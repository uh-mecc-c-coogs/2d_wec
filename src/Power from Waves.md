---
layout: base.njk
title: Power from Waves
---

# Power From Waves 
Capturing wave energy requires more than just making a buoy move. The rate at which useful work is done — the <em>power</em> — depends on both the force applied and the velocity of the device.

## The Power Equation 
In mechanics, instantaneous power is simply force multiplied by velocity: 

<code class="equation">P = F · v</code> 

For a heaving WEC, <em>F</em> is the force exerted by the power take-off (PTO) system — the mechanism that converts mechanical motion into electricity — and <em>v</em> is the vertical velocity of the buoy at that instant. Both must be large, and they must act in the same direction, to produce useful power. 

<div class="callout">
<p>
<strong>Key idea:</strong> A heavy, slowly moving buoy and a fast-moving buoy with no resistance both produce <em>zero</em> net power. Maximizing power means balancing force and velocity.
</p>
</div>

## The Role of the Power Take-Off (PTO) 
The PTO system connects the buoy to an electrical generator. In the simplest model, it acts like a <em>damper</em>: it resists motion in proportion to velocity. 

<code class="equation">F_PTO = −B_PTO · v</code>

where <em>B_PTO</em> is the PTO damping coefficient. This resistance is what extracts energy from the wave; without it the buoy would oscillate freely and deliver no power.

But if the PTO applies too much damping, it locks the buoy in place and again no power is produced. There is an optimal damping level that balances extracting energy while still allowing the buoy to move. 

## Optimal Damping 
For a linear system driven at resonance, the theoretically optimal PTO damping coefficient equals the radiation damping of the buoy — the damping caused by the energy radiated back into the water by the buoy's own motion. At this optimum, half of the wave energy intercepted by the device is extracted as useful power, and the other half is radiated back.

The simplified model in this simulator does not include radiation damping, but the same principle holds: there is a sweet spot for PTO damping, and the simulator lets you explore it interactively. 

## Average Power 
Because both force and velocity vary sinusoidally over time, it is the <em>time-averaged power</em> that matters in practice. For a linear damper driven by a regular wave at its resonant frequency: 
<code class="equation">P_avg = ½ · B_PTO · v_peak²</code> 

where <em>v_peak</em> is the peak velocity of the buoy. This shows that increasing velocity amplitude (by improving resonance tuning) and choosing the right damping are both critical levers for improving power output. 

## Physical Limits on Power Capture 
Can a device capture all the energy in the waves passing by? No. For a point absorber, there is a theoretical upper limit on how much power a device of a given size can capture. Interestingly, a narrow buoy can capture energy from a wave crest much wider than itself — but only up to a fundamental limit set by the wavelength and the device's radiation characteristics.

In the simplified simulator, these limits are not explicitly modeled. The focus is on building intuition about how force, velocity, and damping interact — the foundation for understanding real WEC performance. 

<div class="callout callout-caution">
<p>
<strong>Simulator note:</strong> The applet uses a linear PTO damper model. Real PTO systems — hydraulic circuits, direct-drive generators, air turbines — have nonlinear characteristics and efficiency losses not captured here. The simplified model is sufficient to understand the trade-off between damping force and buoy motion.
</p>
</div>

## Try It Yourself
In the simulator, adjust the PTO damping slider and watch how average power changes. Find the damping value that maximizes power for a given wave. Then change the wave period and notice how the optimal damping changes too. 

