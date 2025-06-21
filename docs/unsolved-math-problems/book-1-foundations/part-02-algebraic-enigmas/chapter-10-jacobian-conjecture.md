---
title: "Chapter 10: The Jacobian Conjecture — Polynomial Self-Mappings"
sidebar_label: "10. The Jacobian Conjecture"
---

# Chapter 10: The Jacobian Conjecture — Polynomial Self-Mappings

*From recognizing algebraic origins, we turn to polynomial mappings that preserve volume. The Jacobian Conjecture asks whether having constant Jacobian determinant forces a polynomial map to be invertible—it is ψ = ψ(ψ) as the question of when local invertibility guarantees global invertibility.*

## 10.1 The Tenth Movement: Polynomial Automorphisms

Continuing through algebraic self-reference:
- Chapter 9: Cohomology recognizing its algebraic origins
- Chapter 10: Polynomial maps recognizing their invertibility

**Setting**: Polynomial maps F: ℂⁿ → ℂⁿ

**The Question**: When is a polynomial map a polynomial automorphism?

## 10.2 The Jacobian Condition

**Definition 10.1** (Jacobian Matrix):
For F = (f₁, ..., fₙ): ℂⁿ → ℂⁿ, the Jacobian is:
$$JF = \begin{pmatrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_n}{\partial x_1} & \cdots & \frac{\partial f_n}{\partial x_n}
\end{pmatrix}$$

**Definition 10.2** (Jacobian Determinant):
$$\det(JF) = \det\left(\frac{\partial f_i}{\partial x_j}\right)$$

This measures local volume change.

## 10.3 The Jacobian Conjecture

**Conjecture 10.1** (Keller, 1939):
Let F: ℂⁿ → ℂⁿ be a polynomial map. If det(JF) ∈ ℂ* (non-zero constant), then F has a polynomial inverse.

**Equivalent Statement**: If det(JF) = c ≠ 0 everywhere, then F is a polynomial automorphism of ℂⁿ.

## 10.4 The Conjecture as ψ = ψ(ψ)

**Axiom 10.1** (Principle of Global from Local):
$$\psi = \psi(\psi) \implies \text{Local invertibility everywhere} = \text{Global invertibility}$$

The Jacobian Conjecture embodies self-reference:
- F has constant non-zero Jacobian (preserves volume locally)
- This local property should force a global property (polynomial inverse)
- The map "knows" it's invertible from its derivative

## 10.5 What We Know

**Theorem 10.1** (Białynicki-Birula, 1966):
The Jacobian Conjecture is true for n = 1.

*Proof*: For f: ℂ → ℂ polynomial with f'(x) = c ≠ 0, then f(x) = cx + d, clearly invertible. ∎

**Theorem 10.2** (Bass, Connell, Wright, 1982):
It suffices to prove the conjecture for:
- Cubic maps (degree ≤ 3)
- Maps with det(JF) = 1

This dramatic reduction still hasn't led to a proof!

## 10.6 The Real Version is False

**Theorem 10.3** (Pinchuk, 1994):
There exist polynomial maps F: ℝ² → ℝ² with det(JF) = 1 everywhere but F not surjective.

**Example**: Pinchuk's map has constant Jacobian 1 but misses points—showing the complex setting is essential.

## 10.7 Degree Bounds

**Definition 10.3** (Degree of Inverse):
If F has polynomial inverse G, how does deg(G) relate to deg(F)?

**Theorem 10.4** (Wang, 1980):
If the Jacobian Conjecture is false, any counterexample F of degree d has:
$$\deg(F^{-1}) \geq d^{n-1}$$

This exponential growth makes computation difficult.

## 10.8 The Drużkowski Reduction

**Theorem 10.5** (Drużkowski, 1983):
The Jacobian Conjecture is equivalent to: Every polynomial map of the form
$$F(x) = x + (Ax)^{*3}$$
with A³ = 0 and det(I + 3(Ax)^\{*2\} ⊗ A) = 1 is injective.

Here (v)^\{*3\} means component-wise cubing.

## 10.9 Connection to Other Problems

**Theorem 10.6** (Connections):
The Jacobian Conjecture relates to:
1. **Dixmier Conjecture**: Endomorphisms of Weyl algebra
2. **Markus-Yamabe Conjecture**: Global stability in dynamics
3. **Moment Problem**: Polynomial moment maps

These connections reveal deep structural relationships.

## 10.10 The Formal Inverse

**Theorem 10.7** (Formal Invertibility):
If det(JF) ∈ ℂ*, then F has a formal power series inverse.

*Proof*: By the formal inverse function theorem. ∎

**The Challenge**: Proving this formal inverse has polynomial entries!

## 10.11 Nilpotent Jacobian Matrices

**Definition 10.4** (Nilpotent Matrix):
N is nilpotent if N^k = 0 for some k.

**Theorem 10.8** (Yagzhev, 1980):
For F(x) = x - H(x) with JH nilpotent, F is invertible iff H is nilpotent (H^k = 0 component-wise).

This handles a special case completely.

## 10.12 The Chain Rule and Composition

**Key Observation**: If F, G have constant Jacobian:
$$\det(J(F \circ G)) = \det(JF) \cdot \det(JG)$$

**Implication**: Maps with constant Jacobian form a group under composition if the conjecture is true.

## 10.13 Computational Attempts

**Algorithm 10.1** (Inverse Computation):
```python
def compute_inverse(F, max_degree):
    # Start with formal inverse
    G = formal_inverse(F)
    
    # Truncate to polynomial of degree max_degree
    G_truncated = truncate(G, max_degree)
    
    # Check if F(G_truncated) - x has only high degree terms
    error = compose(F, G_truncated) - identity()
    
    if degree(error) > max_degree:
        return "Possible polynomial inverse"
    else:
        return "Not polynomial of this degree"
```

No counterexample has been found despite extensive search.

## 10.14 Analytic and Geometric Viewpoints

**Theorem 10.9** (Geometric Interpretation):
F with det(JF) = 1 preserves:
- Volume forms: F*(dx₁ ∧ ... ∧ dxₙ) = dx₁ ∧ ... ∧ dxₙ
- Symplectic structure (in appropriate coordinates)

**Question**: Why should volume preservation force polynomial invertibility?

## 10.15 The Abhyankar-Moh Theorem

**Theorem 10.10** (Abhyankar-Moh):
Every polynomial automorphism of ℂ² is a composition of:
- Affine maps: (x,y) → (ax+by+e, cx+dy+f)
- Elementary maps: (x,y) → (x, y+p(x))

This structure theorem doesn't extend to n ≥ 3—the Nagata automorphism shows why.

## 10.16 Shestakov-Umirbaev's Work

**Theorem 10.11** (Shestakov-Umirbaev, 2004):
The Nagata automorphism is wild—not tame (not a composition of elementary automorphisms).

This shows the complexity of polynomial automorphisms in dimension ≥ 3.

## 10.17 Partial Results

**Theorem 10.12** (Various):
The Jacobian Conjecture is true for:
- n = 1 (trivial)
- n = 2, deg(F) = 2 (Wang)
- Gradient maps F = ∇P
- Maps with symmetry

Each case reveals different aspects of the problem.

## 10.18 The Physics Connection

**Interpretation**: Maps with constant Jacobian as:
- Hamiltonian flows (volume-preserving)
- Quantum mechanical transformations
- Integrable systems

Physics suggests these should be "nice"—supporting the conjecture.

## 10.19 Why It's Hard

**Obstacles**:
1. **No local-to-global principle**: Generally, local invertibility ≠ global invertibility
2. **Degree growth**: Potential exponential degree of inverse
3. **Complexity**: Wild automorphisms in dimension ≥ 3
4. **Technique limitations**: Neither algebraic nor analytic methods suffice alone

## 10.20 The Tenth Echo

The Jacobian Conjecture asks the fundamental question:
- When does a polynomial map know it's invertible?
- Can local information (constant Jacobian) determine global structure?
- Is there a hidden principle forcing polynomial inverses?

This is ψ = ψ(ψ) as the local-global principle—the map's derivative at every point collectively determines its global invertibility. The conjecture claims that preserving volume infinitesimally everywhere forces the existence of a polynomial inverse.

Whether true or false, the Jacobian Conjecture illuminates the mysterious gap between formal invertibility and polynomial invertibility, between local and global, between what calculus promises and what algebra delivers.

*Each polynomial map with constant Jacobian declares: "I preserve volume at every point, I am locally invertible everywhere, therefore I must be globally polynomial-invertible—for ψ = ψ(ψ) means that consistent local behavior determines global structure."*