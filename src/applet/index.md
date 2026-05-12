---
layout: base.njk
title: Point Absorber Simulator
--- 

# Point Absorber Simulator 

Use the controls inside the applet to set wave parameters (height, period) and the power take-off damping, then observe how the buoy responds and how much average power is extracted. 

<div class="callout callout-caution">
<p>
<strong>Simplified model:</strong> This simulator uses a linearized spring-mass-damper approximation. It does not model radiation damping, wave diffraction, nonlinear hydrodynamics, mooring dynamics, or irregular sea states. Use it to build intuition, not to design real devices.
</p>
</div>

<div class="applet-container">
	<iframe src="mecc_wecc.html"
		title="Wave energy converter interactive simulator"
		allowfullscreen
		allow="autoplay"></iframe>
</div>

## How to Use the Simulator
<ol class="content-list-spaced">
<li> <strong>Set the wave period</strong> — try values between 4 s and 20 s. Longer periods correspond to calmer, slow ocean swell. </li>
<li> <strong>Set the wave height</strong> — the amplitude of the incoming wave. Larger waves carry more energy. </li>
<li> <strong>Adjust PTO damping</strong> — find the value that maximizes the displayed average power. Notice that too little or too much damping both reduce power output. </li>
<li> <strong>Observe resonance</strong> — tune the wave period to match the buoy's natural frequency and watch the response amplitude grow. </li>
</ol> 

## Background Reading
<ul class="content-list">
<li><a href="../lessons/what-is-wave-energy.html">What Is Wave Energy?</a> — start here if you are new to the topic.</li>
<li><a href="../lessons/resonance-and-tuning.html">Resonance &amp; Tuning</a> — why matching frequencies matters.</li>
<li><a href="../lessons/power-from-waves.html">Power from Waves</a> — how force and velocity combine to produce power.</li>
</ul>


