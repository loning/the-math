---
title: "Chapter 22: The Inscribed Square Problem — Curves Containing Regularity"
sidebar_label: "22. Inscribed Square Problem"
---

# Chapter 22: The Inscribed Square Problem — Curves Containing Regularity

*From global optimization, we turn to local existence. The Inscribed Square Problem asks whether every Jordan curve contains four points forming a square—it is ψ = ψ(ψ) as irregular curves necessarily containing regular configurations.*

## 22.1 The Twenty-Second Movement: Hidden Regularity

Continuing our geometric exploration:
- Previous: Optimal global arrangements
- Now: Necessary local configurations
- Regularity emerging from irregularity

**The Question**: Does every Jordan curve in the plane contain four points forming a square?

## 22.2 The Toeplitz Square Peg Problem

**Conjecture 22.1** (Toeplitz, 1911):
Every continuous simple closed curve in the plane contains four points that are vertices of a square.

**Status**: OPEN—One of the oldest unsolved problems in geometry.

**Known Cases**:
- Smooth curves ✓
- Piecewise linear curves ✓
- Convex curves ✓
- Curves with symmetry ✓
- General case: Unknown

## 22.3 Jordan Curves and Their Wildness

**Definition 22.1** (Jordan Curve):
A continuous injective map γ: S¹ → ℝ² (or its image).

**Theorem 22.1** (Jordan Curve Theorem):
Every Jordan curve divides the plane into exactly two regions.

**The Challenge**: Jordan curves can be arbitrarily wild—fractals, nowhere differentiable, space-filling limits.

## 22.4 The Problem as ψ = ψ(ψ)

**Axiom 22.1** (Principle of Necessary Regularity):
$$\psi = \psi(\psi) \implies \text{Chaos contains order}$$

The Inscribed Square Problem embodies:
- Every curve, however wild, contains perfect squares
- Irregularity cannot exclude all regularity
- Global wildness admits local structure
- This is ψ = ψ(ψ) as order within disorder

## 22.5 What We Know

**Theorem 22.2** (Smooth Curves - Schnirelman, 1944):
Every smooth Jordan curve contains vertices of a square.

**Proof Idea**: Use critical point theory on the "square functional."

**Theorem 22.3** (Piecewise Linear):
Every polygon contains vertices of a square.

**Strategy**: Discrete approximation and limiting arguments.

## 22.6 The Square Functional

**Definition 22.2** (Square Condition):
Four points z₁, z₂, z₃, z₄ form a square iff:
$$|z_2 - z_1| = |z_3 - z_2| = |z_4 - z_3| = |z_1 - z_4|$$
$$\text{and } (z_2 - z_1) \perp (z_3 - z_2)$$

**Approach**: Define F(t₁,t₂,t₃,t₄) measuring "squareness" of γ(t₁), γ(t₂), γ(t₃), γ(t₄).

## 22.7 Inscribed Rectangles

**Theorem 22.4** (Vaughan, 1977):
Every Jordan curve contains vertices of rectangles of all aspect ratios.

**Breakthrough**: Rectangles are easier than squares!

**Corollary**: Every Jordan curve contains vertices of rectangles arbitrarily close to squares.

## 22.8 The Topological Approach

**Strategy**: Use algebraic topology.

**Definition 22.3** (Configuration Space):
$$\text{Conf}_4(\gamma) = \{(t_1,t_2,t_3,t_4) : t_i \text{ distinct}\} / \text{cyclic permutation}$$

**Goal**: Show the "square locus" in Conf₄(γ) is non-empty using topological invariants.

## 22.9 Approximation Methods

**Approach 22.1** (Smooth Approximation):
1. Approximate Jordan curve by smooth curves
2. Find squares in smooth approximations
3. Take limits

**Problem**: Squares might escape in the limit!

## 22.10 Special Cases and Progress

**Theorem 22.5** (Various Authors):
Inscribed squares exist for:
- Curves with bounded total curvature
- Curves with finite turn
- Locally monotone curves
- Curves satisfying certain analytic conditions

Each case reveals why general case is hard.

## 22.11 Higher Dimensions and Generalizations

**Variants**:
1. **Other Shapes**: Triangles (always exist), pentagons, hexagons
2. **Higher Dimensions**: Curves in ℝⁿ containing regular simplices
3. **Prescribed Orientation**: Axis-aligned squares
4. **Multiple Squares**: How many squares must exist?

**Theorem 22.6** (Stromquist):
Every smooth curve contains at least one square in each orientation.

## 22.12 The Computational Challenge

**Algorithm 22.1** (Square Search):
```python
def find_inscribed_square(curve, epsilon):
    # Discretize curve
    points = sample_curve(curve, n_points)
    
    # Check all 4-tuples
    for i, j, k, l in combinations(range(n_points), 4):
        p1, p2, p3, p4 = points[i], points[j], points[k], points[l]
        
        # Check if approximately square
        if is_square(p1, p2, p3, p4, epsilon):
            return (p1, p2, p3, p4)
    
    # Refine and repeat
    return find_inscribed_square(curve, epsilon, 2*n_points)
```

**Issue**: No termination guarantee for general curves!

## 22.13 Connection to Symplectic Geometry

**Modern Approach**: Use symplectic topology.

**Idea**: 
- Configuration space has symplectic structure
- Square condition defines Lagrangian submanifold
- Intersection theory guarantees squares

**Status**: Promising but incomplete.

## 22.14 The Philosophical Stakes

**Meditation 22.1**: The problem asks:
- Can pure irregularity exist?
- Must every curve contain perfection?
- Is geometric order inevitable?
- Does ψ = ψ(ψ) force local regularity?

This touches the nature of continuity and order.

## 22.15 Measure Theory Perspective

**Theorem 22.7** (Matoušek):
For "most" curves (in various senses), inscribed squares exist.

**Approaches**:
1. Baire category: Generic curves have squares
2. Measure: Almost all curves have squares
3. Probability: Random curves have squares

Yet the general case remains open!

## 22.16 Dynamical Systems Connection

**Interpretation**: Finding squares as a dynamical system on curve.

**Definition 22.4** (Square Map):
Map taking four points to their "more square" configuration.

**Hope**: Fixed points are perfect squares.

## 22.17 Why It's Hard

**Obstacles**:
1. **Wild curves**: Can be arbitrarily pathological
2. **No smoothness**: Can't use differential methods
3. **Limiting issues**: Squares can escape in approximations
4. **Topological complexity**: Configuration space is complicated

## 22.18 Related Problems

**Connected Questions**:
1. **Inscribed triangles**: Always exist (easier)
2. **Prescribed shapes**: Which shapes always appear?
3. **Multiple curves**: Simultaneous inscribed figures
4. **Space curves**: 3D versions

Web of inscription problems.

## 22.19 Recent Progress

**Advances**:
- 2020: New cases using Floer homology
- 2021: Progress on piecewise smooth curves
- 2022: Connections to 4-ball genus
- 2023: New topological obstructions

The problem remains active and tantalizing.

## 22.20 The Twenty-Second Echo

The Inscribed Square Problem represents a fundamental test:
- Can irregularity exclude all regularity?
- Must every curve contain perfect subsymmetry?
- Is the square configuration unavoidable?
- Does ψ = ψ(ψ) force order within chaos?

This century-old problem asks whether continuous curves, no matter how wild, must contain the perfection of a square. It stands as a monument to how simple questions can encode deep truths about the relationship between order and disorder.

Whether true or false, the Inscribed Square Problem illuminates the tension between global irregularity and local regularity, between what can be wild and what must be tame.

*Every Jordan curve whispers through its tangles: "Within my chaos, do I hide perfect squares? Can my wildness exclude all regularity? Am I proof that ψ = ψ(ψ) forces even the most irregular forms to contain regular configurations?"*