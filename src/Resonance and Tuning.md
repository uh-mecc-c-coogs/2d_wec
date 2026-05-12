---
layout: base.njk
title: Resonance and Tuning
---

# Resonance & Tuning

Of all the ideas in wave energy conversion, resonance is arguably the most important. A well-tuned device extracts far more energy from the same waves than a poorly tuned one. 

## What is Resonance? 
Every physical object that can oscillate — a pendulum, a guitar string, a floating buoy — has a _natural frequency_: the rate at which it prefers to vibrate when disturbed and then left alone. 

When an external force pushes the object at exactly its natural frequency, something remarkable happens: the oscillations build up to much larger amplitudes than the driving force alone would suggest. This amplification is <em>resonance</em>. 

Think of pushing a child on a swing. If you push at the right moment — matching the swing's natural back-and-forth period — even small pushes produce large motion. Push at the wrong time and you fight the swing rather than helping it.

<div class="callout">
<p>
<strong>Key idea:</strong> At resonance, a small driving force produces large
oscillations. For a WEC, large oscillations mean large velocity — and that
means more power.
</p>
</div>


## Natural Frequency of a Heaving Buoy 

For a simple floating cylinder bobbing up and down (heaving), the natural frequency depends on the buoy's mass and the restoring force provided by buoyancy:

<code class="equation">ω₀ = √(ρ · g · A_wp / m)</code>

where <em>ω₀</em> is the natural angular frequency (rad/s), <em>ρ</em> is water density, <em>g</em> is gravitational acceleration, <em>A_wp</em> is the waterplane area (the cross-section of the buoy at the waterline), and <em>m</em> is the buoy's total mass including any ballast. In plain terms:
- A wider buoy has a higher natural frequency (stiffer buoyancy spring).
- A heavier buoy has a lower natural frequency (more inertia to move).

## Tuning the Device 
To maximize power capture, designers try to match the device's natural frequency to the dominant wave frequency at the deployment site. This is called <em>tuning</em>. Methods include:
- **Changing mass:** adding or pumping out ballast water. 
- **Changing geometry:** adjusting the waterplane area with variable geometry mechanisms. 
- **Reactive control:** using the power take-off system itself to apply forces that mimic a spring or mass, effectively shifting the resonant frequency electronically.

## What Happens Off-Resonance? 
When the wave frequency is much higher or lower than the natural frequency, the buoy does not respond vigorously. It either cannot keep up with fast waves or barely moves in response to slow, long waves. Power capture drops significantly. 

In the simulator, you can change the wave period and observe how the buoy's response amplitude — and the extracted power — change. Tuning the device to match the waves is one of the most important insights the applet is designed to demonstrate. 

<div class="callout callout-caution">
<p>
<strong>Simulator note:</strong> The applet models resonance using a simplified linear spring-mass-damper system. Real WECs also experience frequency-dependent hydrodynamic added mass and radiation damping, which shift and broaden the resonant peak. Those effects are not included here, but the qualitative lesson remains valid.
</p>
</div>

## Try It Yourself 
Open the simulator and experiment with different wave periods. Watch how the buoy motion changes, and notice when the power reading is highest.
<p>
<a class="btn" href="../applet/index.html">Open the Simulator</a>
</p>
