# Math Symbols
The package defines some commonly used mathematical symbols and operators. Some of its features include:
## Pauli Matrices
Single qubit Pauli matrices are defined by ```σx```, ```σy```, ```σz``` and ```σi```. One can simply calculate the tensor product of single qubits Pauli matrices by
```julia-repl
julia> σx⊗σz
4×4 Array{Complex{Float64},2}:
 0.0+0.0im   0.0+0.0im  1.0+0.0im   0.0+0.0im
 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -1.0+0.0im
 1.0+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im
 0.0+0.0im  -1.0+0.0im  0.0+0.0im  -0.0+0.0im
```
The eigenvectors of each Pauli matrices are also defined in constant [`PauliVec`](@ref), where ```PauliVec[1]```,```PauliVec[2]```,```PauliVec[3]``` corresponds to eigenvectors of ```σx```, ```σy```, ```σz```. Additionally, the first eigenvector is the one with positive eigenvalue
```julia-repl
julia> σz*PauliVec[3][1] == PauliVec[3][1]
true
```
Additionally, a sparse version of Pauli matrices are defined in ```spσx``` et al. They can be used to construct Hamiltonian in the form of sparse matrix.
## Construction of Multi-Qubits Matrices
The package provides various utility functions to construct multi-qubits matrices. For all the functions listed below, keyword argument `sp` can be set to generate sparse matrices.
  * The standard driver Hamiltonian in quantum annealing can be constructed with [`standard_driver`](@ref)
```julia-repl
julia> standard_driver(2) == σx⊗σi + σi⊗σx
true
```
  and for sparse matrices
```julia-repl
julia> standard_driver(2, sp=true) == spσx⊗spσi + spσi⊗spσx
true
```

  * A multi-qubits matrix can be constructed from its string representation using [`q_translate`](@ref)
```julia-repl
julia> q_translate("ZZ+0.5ZI-XZ")
4×4 Array{Complex{Float64},2}:
  1.5+0.0im   0.0+0.0im  -1.0+0.0im   0.0+0.0im
  0.0+0.0im  -0.5+0.0im   0.0+0.0im   1.0+0.0im
 -1.0+0.0im   0.0+0.0im  -1.5+0.0im  -0.0+0.0im
  0.0+0.0im   1.0+0.0im  -0.0+0.0im   0.5+0.0im
```

  * Collective operators(same Pauli operator acting on each individual qubit) can be constructed with [`collective_operator`](@ref)
```julia-repl
julia> collective_operator("z", 3) == σz⊗σi⊗σi + σi⊗σz⊗σi + σi⊗σi⊗σz
true
```

  * Single clause in multi-qubits Hamiltonian can be constructed by
```julia-repl
julia> single_clause(["z","z"], [2,3], -2, 4) == -2σi⊗σz⊗σz⊗σi
true
```

  * Local field terms of the form ``ΣhᵢZᵢ`` can be constructed with [`local_field_term`](@ref)
```julia-repl
julia> local_field_term([1.0, 0.5], [1, 2], 2) == σz⊗σi+0.5σi⊗σz
true
```

  * Two local terms of the form ``∑JᵢⱼZᵢZⱼ`` can be constructed with [`two_local_term`](@ref)
```julia-repl
julia> two_local_term([1.0, 0.5], [[1,2], [1,3]], 3) == σz⊗σz⊗σi + 0.5σz⊗σi⊗σz
true
```
## Construction of Multi-Qubits states
The quantum state of spin system can be construct with [`q_translate_state`](@ref)
```julia-repl
julia> q_translate_state("001")
8-element Array{Complex{Float64},1}:
 0.0 + 0.0im
 1.0 + 0.0im
 0.0 + 0.0im
 0.0 + 0.0im
 0.0 + 0.0im
 0.0 + 0.0im
 0.0 + 0.0im
 0.0 + 0.0im
```
In the string representation `0` and `1` represent the eigenstates of ``σ_z`` operator.