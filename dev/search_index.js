var documenterSearchIndex = {"docs":
[{"location":"tutorials/math_symbol/#Math-Symbols-1","page":"Math Symbol","title":"Math Symbols","text":"","category":"section"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"The package defines some commonly used mathematical symbols and operators. Some of its features include:","category":"page"},{"location":"tutorials/math_symbol/#Pauli-Matrices-1","page":"Math Symbol","title":"Pauli Matrices","text":"","category":"section"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Single qubit Pauli matrices are defined by σx, σy, σz and σi. One can simply calculate the tensor product of single qubits Pauli matrices by","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> σx⊗σz\n4×4 Array{Complex{Float64},2}:\n 0.0+0.0im   0.0+0.0im  1.0+0.0im   0.0+0.0im\n 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -1.0+0.0im\n 1.0+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im\n 0.0+0.0im  -1.0+0.0im  0.0+0.0im  -0.0+0.0im","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"The eigenvectors of each Pauli matrices are also defined in constant PauliVec, where PauliVec[1],PauliVec[2],PauliVec[3] corresponds to eigenvectors of σx, σy, σz. Additionally, the first eigenvector is the one with positive eigenvalue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> σz*PauliVec[3][1] == PauliVec[3][1]\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Additionally, a sparse version of Pauli matrices are defined in spσx et al. They can be used to construct Hamiltonian in the form of sparse matrix.","category":"page"},{"location":"tutorials/math_symbol/#Construction-of-Multi-Qubits-Matrices-1","page":"Math Symbol","title":"Construction of Multi-Qubits Matrices","text":"","category":"section"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"The package provides various utility functions to construct multi-qubits matrices. For all the functions listed below, keyword argument sp can be set to generate sparse matrices.","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"The standard driver Hamiltonian in quantum annealing can be constructed with standard_driver","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> standard_driver(2) == σx⊗σi + σi⊗σx\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"and for sparse matrices","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> standard_driver(2, sp=true) == spσx⊗spσi + spσi⊗spσx\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"A multi-qubits matrix can be constructed from its string representation using q_translate","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> q_translate(\"ZZ+0.5ZI-XZ\")\n4×4 Array{Complex{Float64},2}:\n  1.5+0.0im   0.0+0.0im  -1.0+0.0im   0.0+0.0im\n  0.0+0.0im  -0.5+0.0im   0.0+0.0im   1.0+0.0im\n -1.0+0.0im   0.0+0.0im  -1.5+0.0im  -0.0+0.0im\n  0.0+0.0im   1.0+0.0im  -0.0+0.0im   0.5+0.0im","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Collective operators(same Pauli operator acting on each individual qubit) can be constructed with collective_operator","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> collective_operator(\"z\", 3) == σz⊗σi⊗σi + σi⊗σz⊗σi + σi⊗σi⊗σz\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Single clause in multi-qubits Hamiltonian can be constructed by","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> single_clause([\"z\",\"z\"], [2,3], -2, 4) == -2σi⊗σz⊗σz⊗σi\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Local field terms of the form ΣhᵢZᵢ can be constructed with local_field_term","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> local_field_term([1.0, 0.5], [1, 2], 2) == σz⊗σi+0.5σi⊗σz\ntrue","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"Two local terms of the form JᵢⱼZᵢZⱼ can be constructed with two_local_term","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> two_local_term([1.0, 0.5], [[1,2], [1,3]], 3) == σz⊗σz⊗σi + 0.5σz⊗σi⊗σz\ntrue","category":"page"},{"location":"tutorials/math_symbol/#Construction-of-Multi-Qubits-states-1","page":"Math Symbol","title":"Construction of Multi-Qubits states","text":"","category":"section"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"The quantum state of spin system can be construct with q_translate_state","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"julia> q_translate_state(\"001\")\n8-element Array{Complex{Float64},1}:\n 0.0 + 0.0im\n 1.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im","category":"page"},{"location":"tutorials/math_symbol/#","page":"Math Symbol","title":"Math Symbol","text":"In the string representation 0 and 1 represent the eigenstates of σ_z operator.","category":"page"},{"location":"tutorials/annealing/#Annealing-1","page":"Annealing","title":"Annealing","text":"","category":"section"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"This package implements AbstractFactory pattern for potential quantum annealing process via an abstract type AbstractAnnealing. A complete quantum annealing process is assembled from the following parts:","category":"page"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"Hamiltonian: Any object implements the AbstractHamiltonian interface\nInitial state: A state vector/density matrix\n(Optional)System bath coupling – system part\n(Optional)System bath coupling – bath part\n(Optional)Additional control protocols","category":"page"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"For example, the following code block construct a standard single qubit annealing process","category":"page"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"H = DenseHamiltonian([(s)->1-s, (s)->s], -[σx, σz]/2)\nu0 = PauliVec[1][1]\ncoupling = [σz]\nbath = Ohmic(1e-4, 4, 16)\nannealing = Annealing(H, u0; coupling=coupling, bath=bath)","category":"page"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"with Hamiltonian","category":"page"},{"location":"tutorials/annealing/#","page":"Annealing","title":"Annealing","text":"H(s) = -(1-s)fracsigma_x2 - sfracsigma_z2 + sigma_z otimes B + H_B","category":"page"},{"location":"tutorials/hamiltonians/#Hamiltonians-1","page":"Hamiltonian","title":"Hamiltonians","text":"","category":"section"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"The Hamiltonian object implements AffineDiffEqOperator interface.","category":"page"},{"location":"tutorials/hamiltonians/#Note:-this-functionality-in-[DifferentialEquations.jl](http://docs.juliadiffeq.org/latest/)-is-still-under-heavy-development.-The-interface-of-this-package-may-change-accordingly-in-the-future.-1","page":"Hamiltonian","title":"Note: this functionality in DifferentialEquations.jl is still under heavy development. The interface of this package may change accordingly in the future.","text":"","category":"section"},{"location":"tutorials/hamiltonians/#Construction-1","page":"Hamiltonian","title":"Construction","text":"","category":"section"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"For fs = [f1,f2,...,fn] and Ms = [M1,M2,...,Mn] where each of the fi and Mi are Function(or callable object) and Matrix, the following constructor:","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"function TypeHamiltonian(fs,Ms)","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"builds an time dependent H = f_1(t)M_1 + f_2(t)M_2 +  + f_n(t)M_n. The Type should be changed to a specific descriptor of the Hamiltonian. For example","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"julia> H = DenseHamiltonian([(s)->1-s, (s)->s], [σx, σz])","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"create a standard single qubit annealing Hamiltonian of the form H(s)=(1-s)σ_x+sσ_z. In this construction, the unit of fs is assumed to be GHz. The value of H at time  t can be obtained by using evaluate","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"julia> evaluate(H, 0.5)\n2×2 Array{Complex{Float64},2}:\n  0.5+0.0im  -0.5+0.0im\n -0.5+0.0im  -0.5+0.0im","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"It is important to notice that, even though H can be called directly like a Function, it will produce a value scaled by a 2π factor","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"julia> H(0.5) == 2π*(σx + σz)/2\ntrue","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"This is because, internally, when every AbstractHamiltonian is constructed, a 2π factor is multiplied to every elements in Ms. So it is recommended to use evaluate to obtain the results in consistent unit.","category":"page"},{"location":"tutorials/hamiltonians/#Plotting-1","page":"Hamiltonian","title":"Plotting","text":"","category":"section"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"This package can also interact with Plots.jl to provide convenient ways for visualizing the objects. For AbstractHamiltonians, plot function can be used to plot the its energy structure.","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"using Plots\nplot(H, 0:0.01:1, 2)","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"The above code will produce the following figure","category":"page"},{"location":"tutorials/hamiltonians/#","page":"Hamiltonian","title":"Hamiltonian","text":"(Image: plot_hamiltonian_example)","category":"page"},{"location":"lib/QTBase/#","page":"Base","title":"Base","text":"Modules = [QTBase]\nPrivate = false","category":"page"},{"location":"lib/QTBase/#QTBase.PauliVec","page":"Base","title":"QTBase.PauliVec","text":"PauliVec\n\nConstants for the eigenvectors of single qubit Pauli matrices. Indices 1, 2 and 3 corresponds to the eigenvectors of σ_x, σ_y and σ_z.\n\nExamples\n\njulia> σx*PauliVec[1][1] == PauliVec[1][1]\ntrue\n\n\n\n\n\n","category":"constant"},{"location":"lib/QTBase/#QTBase.AbstractAnnealingControl","page":"Base","title":"QTBase.AbstractAnnealingControl","text":"abstract type AbstractAnnealingControl\n\nBase for types defining various control protocols in quantum annealing process.\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.AbstractAnnealingParams","page":"Base","title":"QTBase.AbstractAnnealingParams","text":"abstract type AbstractAnnealingParams\n\nBase for types defining parametrized functions for annealing ODEs.\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.AbstractDenseHamiltonian","page":"Base","title":"QTBase.AbstractDenseHamiltonian","text":"abstract type AbstractDenseHamiltonian <: AbstractHamiltonian{T<:Number}\n\nBase for types defining Hamiltonians using dense matrices.\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.AbstractHamiltonian","page":"Base","title":"QTBase.AbstractHamiltonian","text":"abstract type AbstractHamiltonian\n\nSuptertype for Hamiltonians with elements of type T. Any Hamiltonian object should implement two interfaces: H(t) and H(du, u, p, t).\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.AbstractOpenSys","page":"Base","title":"QTBase.AbstractOpenSys","text":"abstract type AbstractOpenSys\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.AbstractSparseHamiltonian","page":"Base","title":"QTBase.AbstractSparseHamiltonian","text":"abstract type AbstractSparseHamiltonian <: AbstractHamiltonian{T<:Number}\n\nBase for types defining Hamiltonians using sparse matrices.\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.Annealing","page":"Base","title":"QTBase.Annealing","text":"struct Annealing{hType, uType} <: QTBase.AbstractAnnealing{hType,uType}\n\nDefines a quantum annealing process.\n\nFields\n\nH\nHamiltonian for the annealing.\nu0\nInitial state for the annealing.\nsspan\nRange of annealing parameter.\ncoupling\nA list of system bath coupling operators(system part).\nbath\nA list of system bath coupling operators(bath part).\ncontrol\nAdditional control protocols for the annealing.\ntstops\nExtra times that the timestepping algorithm must step to.\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.DaviesGenerator","page":"Base","title":"QTBase.DaviesGenerator","text":"struct DaviesGenerator <: AbstractOpenSys\n\nDefines Davies generator\n\nFields\n\ncoupling\nγ\nS\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.DenseHamiltonian","page":"Base","title":"QTBase.DenseHamiltonian","text":"struct DenseHamiltonian{T<:Complex} <: AbstractDenseHamiltonian{T<:Complex}\n\nDefines a time dependent Hamiltonian object with dense Matrices. All the values in the input is assumed to have the unit of GHz. An additional 2π factor will be multiplied to each matrices when constructing the object.\n\nFields\n\nf\nList of time dependent functions\nm\nList of constant matrices\nu_cache\nInternal cache\nsize\nSize\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.DenseHamiltonian-Tuple{Any,Any}","page":"Base","title":"QTBase.DenseHamiltonian","text":"function DenseHamiltonian(funcs, mats)\n\nConstructor of DenseHamiltonian object. funcs and mats are a list of time dependent functions and the corresponding matrices.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.DenseHamiltonian-Tuple{Real}","page":"Base","title":"QTBase.DenseHamiltonian","text":"function (h::DenseHamiltonian)(t::Real)\n\nCalling the Hamiltonian returns the value 2πH(t).\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.OpenSysSets","page":"Base","title":"QTBase.OpenSysSets","text":"abstract type OpenSysSets <: AbstractOpenSys\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.SparseHamiltonian","page":"Base","title":"QTBase.SparseHamiltonian","text":"struct SparseHamiltonian{T} <: AbstractSparseHamiltonian{T}\n\nDefines a time dependent Hamiltonian object with sparse Matrices. All the values in the input is assumed to have the unit of GHz. An additional 2π factor will be multiplied to each matrices when constructing the object.\n\nFields\n\nf\nList of time dependent functions\nm\nList of constant matrices\nu_cache\nInternal cache\nsize\nSize\n\n\n\n\n\n","category":"type"},{"location":"lib/QTBase/#QTBase.SparseHamiltonian-Tuple{Any,Any}","page":"Base","title":"QTBase.SparseHamiltonian","text":"function SparseHamiltonian(funcs, mats)\n\nConstructor of SparseHamiltonian object. funcs and mats are a list of time dependent functions and the corresponding matrices.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.SparseHamiltonian-Tuple{Real}","page":"Base","title":"QTBase.SparseHamiltonian","text":"function (h::SparseHamiltonian)(t::Real)\n\nCalling the Hamiltonian returns the value 2πH(t).\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.:⊗","page":"Base","title":"QTBase.:⊗","text":"⊗(A, B)\n\nCalculate the tensor product of A and B.\n\nExamples\n\njulia> σx⊗σz\n4×4 Array{Complex{Float64},2}:\n 0.0+0.0im   0.0+0.0im  1.0+0.0im   0.0+0.0im\n 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -1.0+0.0im\n 1.0+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im\n 0.0+0.0im  -1.0+0.0im  0.0+0.0im  -0.0+0.0im\n\n\n\n\n\n","category":"function"},{"location":"lib/QTBase/#QTBase.beta_2_temperature-Tuple{Any}","page":"Base","title":"QTBase.beta_2_temperature","text":"beta_2_temperature(β)\n\nConvert thermodynamic β in the unit of inverse angular frequency to physical temperature T in GHz.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.check_positivity-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number","page":"Base","title":"QTBase.check_positivity","text":"check_positivity(m)\n\nCheck if matrix m is positive. Internally it compares the minimum eigen value of m to 0.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.check_unitary-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number","page":"Base","title":"QTBase.check_unitary","text":"check_unitary(𝐔; rtol=1e-6, atol=1e-8)\n\nTest if 𝐔 is a unitary matrix. The function checks how close both 𝐔𝐔^ and 𝐔^𝐔 are to I, with relative and absolute error given by rtol, atol.\n\nExamples\n\njulia> check_unitary(exp(-1.0im*5*0.5*σx))\ntrue\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.collective_operator-Tuple{Any,Any}","page":"Base","title":"QTBase.collective_operator","text":"collective_operator(op, num_qubit; sp=false)\n\nConstruct the collective operator for a system of num_qubit qubits. op is the name of the collective Pauli matrix. For example, the following code construct an IZ + ZI matrix. Generate sparse matrix when sp is set to true.\n\nExamples\n\njulia> collective_operator(\"z\", 2)\n4×4 Array{Complex{Float64},2}:\n 2.0+0.0im  0.0+0.0im  0.0+0.0im   0.0+0.0im\n 0.0+0.0im  0.0+0.0im  0.0+0.0im   0.0+0.0im\n 0.0+0.0im  0.0+0.0im  0.0+0.0im   0.0+0.0im\n 0.0+0.0im  0.0+0.0im  0.0+0.0im  -2.0+0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.construct_hamming_weight_op-Tuple{Int64,String}","page":"Base","title":"QTBase.construct_hamming_weight_op","text":"construct_hamming_weight_op(num_qubit::Int64, op::String; sp=false)\n\nConstruct the Hamming weight operator for system of size num_qubit. The type of the Hamming weight operator is specified by op: \"x\", \"y\" or \"z\". Generate sparse matrix when sp is set to true.\n\nExamples\n\njulia> construct_hamming_weight_op(2,\"z\")\n4×4 Array{Complex{Float64},2}:\n 0.0+0.0im  0.0+0.0im  0.0+0.0im  0.0+0.0im\n 0.0+0.0im  1.0+0.0im  0.0+0.0im  0.0+0.0im\n 0.0+0.0im  0.0+0.0im  1.0+0.0im  0.0+0.0im\n 0.0+0.0im  0.0+0.0im  0.0+0.0im  2.0+0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.cpvagk","page":"Base","title":"QTBase.cpvagk","text":"cpvagk(f, t, a, b, tol=256*eps())\n\nCalculate the Cauchy principle value integration of the form 𝒫_a^b f(x)(x-t) dx. The algorithm is adapted from P. Keller, 02.01.2015\n\n\n\n\n\n","category":"function"},{"location":"lib/QTBase/#QTBase.eigen_decomp-Tuple{AbstractDenseHamiltonian,Any}","page":"Base","title":"QTBase.eigen_decomp","text":"function eigen_decomp(h::AbstractDenseHamiltonian, t; level = 2) -> (w, v)\n\nCalculate the eigen value decomposition of the Hamiltonian h at time t. Keyword argument level specifies the number of levels to keep in the output. w is a vector of eigenvalues and v is a matrix of the eigenvectors in the columns. (The kth eigenvector can be obtained from the slice w[:, k].) w will be in unit of GHz.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.eigen_decomp-Tuple{AbstractSparseHamiltonian,Any}","page":"Base","title":"QTBase.eigen_decomp","text":"function eigen_decomp(h::AbstractSparseHamiltonian, t; level = 2) -> (w, v)\n\nCalculate the eigen value decomposition of the Hamiltonian h at time t. Keyword argument level specifies the number of levels to keep in the output. w is a vector of eigenvalues and v is a matrix of the eigenvectors in the columns. (The kth eigenvector can be obtained from the slice w[:, k].) w will be in unit of GHz. Arpack.jl is used internally for solving eigensystems of sparse matrices. Any keyword arguments of eigs function is supported here.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.eigen_sys-Tuple{Any,AbstractArray{Float64,1}}","page":"Base","title":"QTBase.eigen_sys","text":"eigen_sys(hfun, t; levels=2, tol=1e-4)\n\nCalculate the eigen values and eigen states of Hamiltonian hfun at each points of vector t. The output keeps the lowest levels eigenstates and their corresponding eigenvalues. tol specifies the error tolerance for sparse matrices decomposition. Output (vals, vecs) whose dimensions are (levels, tdim) and (hdim, levels, tdim) respectively.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.evaluate-Tuple{AbstractHamiltonian,Any}","page":"Base","title":"QTBase.evaluate","text":"evaluate(H::AbstractHamiltonian, t)\n\nEvaluate the time dependent Hamiltonian at time t with the unit of GHz\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.freq_2_temperature-Tuple{Any}","page":"Base","title":"QTBase.freq_2_temperature","text":"freq_2_temperature(freq)\n\nConvert frequency in GHz to temperature in mK.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.gibbs_state-Tuple{Any,Any}","page":"Base","title":"QTBase.gibbs_state","text":"gibbs_state(h, β)\n\nCalculate the Gibbs state of the matrix h at temperature T (mK).\n\nExamples\n\njulia> gibbs_state(σz, 10)\n2×2 Array{Complex{Float64},2}:\n 0.178338+0.0im       0.0+0.0im\n      0.0+0.0im  0.821662+0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.inst_population-Tuple{Any,Any,Any}","page":"Base","title":"QTBase.inst_population","text":"function inst_population(t, states, hamiltonian; level=1)\n\nFor a time series quantum states given by states, whose time points are given by t, calculate the population of instantaneous eigenstates of hamiltonian. The levels of the instantaneous eigenstates are specified by level, which can be any slice index.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.local_field_term-Tuple{Any,Any,Any}","page":"Base","title":"QTBase.local_field_term","text":"local_field_term(h, idx, num_qubit; sp=false)\n\nConstruct local Hamiltonian of the form hᵢσᵢᶻ. idx is the index of all local field terms and h is a list of the corresponding weights. num_qubit is the total number of qubits. Generate sparse matrix when sp is set to true.\n\nExamples\n\njulia> local_field_term([1.0, 0.5], [1, 2], 2) == σz⊗σi+0.5σi⊗σz\ntrue\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.low_level_hamiltonian-Tuple{Any,Any}","page":"Base","title":"QTBase.low_level_hamiltonian","text":"low_level_hamiltonian(h, levels)\n\nCalculate the Hamiltonian h projected to lower energy subspace containing levels energy levels.\n\nExamples\n\njulia> low_level_hamiltonian(σx⊗σx, 2)\n4×4 Array{Complex{Float64},2}:\n -0.5+0.0im   0.0+0.0im   0.0+0.0im   0.5+0.0im\n  0.0+0.0im  -0.5+0.0im   0.5+0.0im   0.0+0.0im\n  0.0+0.0im   0.5+0.0im  -0.5+0.0im   0.0+0.0im\n  0.5+0.0im   0.0+0.0im   0.0+0.0im  -0.5+0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.matrix_decompose-Union{Tuple{T}, Tuple{Array{T,2},Array{Array{T,2},1}}} where T<:Number","page":"Base","title":"QTBase.matrix_decompose","text":"matrix_decompose(mat::Matrix{T}, basis::Array{Matrix{T},1})\n\nDecompse matrix mat onto matrix basis basis\n\nExamples\n\njulia> matrix_decompose(1.0*σx+2.0*σy+3.0*σz, [σx,σy,σz])\n3-element Array{Complex{Float64},1}:\n 1.0 + 0.0im\n 2.0 + 0.0im\n 3.0 + 0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.q_translate-Tuple{String}","page":"Base","title":"QTBase.q_translate","text":"q_translate(h::String)\n\nConvert a string h representing multi-qubits Pauli matrices summation into its numerical form.\n\nExamples\n\njulia> q_translate(\"X+2.0Z\")\n2×2 Array{Complex{Float64},2}:\n 2.0+0.0im   1.0+0.0im\n 1.0+0.0im  -2.0+0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.q_translate_state-Tuple{String}","page":"Base","title":"QTBase.q_translate_state","text":"q_translate_state(h::String; normal=false)\n\nConvert a string representation of quantum state to a vector. The keyword argument normal indicates whether to normalize the output vector. (Currently only '0' and '1' are supported)\n\nExamples\n\nSingle term:\n\njulia> q_translate_state(\"001\")\n8-element Array{Complex{Float64},1}:\n 0.0 + 0.0im\n 1.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n 0.0 + 0.0im\n\nMultiple terms:\n\njulia> q_translate_state(\"(101)+(001)\", normal=true)\n8-element Array{Complex{Float64},1}:\n                0.0 + 0.0im\n 0.7071067811865475 + 0.0im\n                0.0 + 0.0im\n                0.0 + 0.0im\n                0.0 + 0.0im\n 0.7071067811865475 + 0.0im\n                0.0 + 0.0im\n                0.0 + 0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.single_clause-NTuple{4,Any}","page":"Base","title":"QTBase.single_clause","text":"single_clause(ops, q_ind, weight, num_qubit; sp=false)\n\nConstruct a single clause of the multi-qubits Hamiltonian. ops is a list of Pauli operator names which appears in this clause. q_ind is the list of indices corresponding to the Pauli matrices in ops. weight is the constant factor of this clause. num_qubit is the total number of qubits. A sparse matrix can be construct by setting sp to true. The following example construct a clause of Z_1 I Z_32.\n\nExamples\n\njulia> single_clause([\"z\", \"z\"], [1, 3], 0.5, 3)\n8×8 Array{Complex{Float64},2}:\n 0.5+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im\n 0.0+0.0im  -0.5+0.0im  0.0+0.0im  -0.0+0.0im   0.0+0.0im  -0.0+0.0im   0.0+0.0im  -0.0+0.0im\n 0.0+0.0im   0.0+0.0im  0.5+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im   0.0+0.0im\n 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -0.5+0.0im   0.0+0.0im  -0.0+0.0im   0.0+0.0im  -0.0+0.0im\n 0.0+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im  -0.5+0.0im  -0.0+0.0im  -0.0+0.0im  -0.0+0.0im\n 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -0.0+0.0im  -0.0+0.0im   0.5-0.0im  -0.0+0.0im   0.0-0.0im\n 0.0+0.0im   0.0+0.0im  0.0+0.0im   0.0+0.0im  -0.0+0.0im  -0.0+0.0im  -0.5+0.0im  -0.0+0.0im\n 0.0+0.0im  -0.0+0.0im  0.0+0.0im  -0.0+0.0im  -0.0+0.0im   0.0-0.0im  -0.0+0.0im   0.5-0.0im\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.standard_driver-Tuple{Any}","page":"Base","title":"QTBase.standard_driver","text":"standard_driver(num_qubit; sp=false)\n\nConstruct the standard driver Hamiltonian for a system of num_qubit qubits. For example, a two qubits standard driver matrix is IX + XI. Generate sparse matrix when sp is set to true.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.temperature_2_beta-Tuple{Any}","page":"Base","title":"QTBase.temperature_2_beta","text":"temperature_2_beta(T; unit=:ħ)\n\nConvert physical temperature T in mK to thermodynamic β in the unit of inverse angular frequency.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.temperature_2_freq-Tuple{Any}","page":"Base","title":"QTBase.temperature_2_freq","text":"temperature_2_freq(T)\n\nConvert temperature from mK to GHz.\n\n\n\n\n\n","category":"method"},{"location":"lib/QTBase/#QTBase.two_local_term-Tuple{Any,Any,Any}","page":"Base","title":"QTBase.two_local_term","text":"two_local_term(j, idx, num_qubit; sp=false)\n\nConstruct local Hamiltonian of the form Jᵢⱼσᵢᶻσⱼᶻ. idx is the index of all two local terms and j is a list of the corresponding weights. num_qubit is the total number of qubits. Generate sparse matrix when sp is set to true.\n\nExamples\n\njulia> two_local_term([1.0, 0.5], [[1,2], [1,3]], 3) == σz⊗σz⊗σi + 0.5σz⊗σi⊗σz\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#HOME-1","page":"Home","title":"HOME","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This is a quantum annealing toolbox for Julia programming language.","category":"page"},{"location":"#Tutorials-1","page":"Home","title":"Tutorials","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The following tutorials will introduce you to the functionality of QuantumAnnealingTools.jl.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n    \"tutorials/math_symbol.md\",\n    \"tutorials/hamiltonians.md\",\n    \"tutorials/annealing.md\"\n    ]\nDepth = 1","category":"page"},{"location":"lib/bath/#Bath-Module-1","page":"Bath","title":"Bath Module","text":"","category":"section"},{"location":"lib/bath/#Ohmic-Bath-Object-1","page":"Bath","title":"Ohmic Bath Object","text":"","category":"section"},{"location":"lib/bath/#","page":"Bath","title":"Bath","text":"OhmicBath\nOhmic(η, fc, T)\ncorrelation(τ, params::OhmicBath)\npolaron_correlation(τ, params::OhmicBath)\nγ(w, params::OhmicBath)\nS(w, params::OhmicBath; atol=1e-7)\ninterpolate_spectral_density(ω_grid::AbstractRange{T}, params::OhmicBath) where T<:Number","category":"page"},{"location":"lib/bath/#QuantumAnnealingTools.OhmicBath","page":"Bath","title":"QuantumAnnealingTools.OhmicBath","text":"OhmicBath\n\nOhmic bath object to hold a particular parameter set.\n\nFields\n\nη – strength.\nωc – cutoff frequence.\nβ – inverse temperature.\n\n\n\n\n\n","category":"type"},{"location":"lib/bath/#QuantumAnnealingTools.Ohmic-Tuple{Any,Any,Any}","page":"Bath","title":"QuantumAnnealingTools.Ohmic","text":"Ohmic(η, fc, T)\n\nConstruct OhmicBath from parameters with physical unit: η–unitless interaction strength; fc–cutoff frequency in GHz; T–temperature in mK.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.correlation-Tuple{Any,OhmicBath}","page":"Bath","title":"QuantumAnnealingTools.correlation","text":"correlation(τ, params::OhmicBath)\n\nCalculate the correlation function of Ohmic bath.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.polaron_correlation-Tuple{Any,OhmicBath}","page":"Bath","title":"QuantumAnnealingTools.polaron_correlation","text":"polaron_correlation(τ, params::OhmicBath)\n\nCalculate the polaron transformed correlation function of Ohmic bath.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.γ-Tuple{Any,OhmicBath}","page":"Bath","title":"QuantumAnnealingTools.γ","text":"γ(ω, params::OhmicBath)\n\nCalculate Ohmic spectrum density, defined as a full Fourier transform on the bath correlation function.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.S-Tuple{Any,OhmicBath}","page":"Bath","title":"QuantumAnnealingTools.S","text":"S(w, params::OhmicBath; atol=1e-7)\n\nCalculate the Lamb shift of Ohmic spectrum. atol is the absolute tolerance for Cauchy principal value integral.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.interpolate_spectral_density-Union{Tuple{T}, Tuple{AbstractRange{T},OhmicBath}} where T<:Number","page":"Bath","title":"QuantumAnnealingTools.interpolate_spectral_density","text":"interpolate_spectral_density(ω_grid::AbstractRange{T}, params::OhmicBath) where T<:Number\n\nCalculate the Ohmic bath spectral density S on grid ω_grid, and construct interpolation objects for it. A separate function for γ is also returned without doing interpolation.\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#Hybrid-Ohmic-Bath-1","page":"Bath","title":"Hybrid Ohmic Bath","text":"","category":"section"},{"location":"lib/bath/#","page":"Bath","title":"Bath","text":"HybridOhmicBath\nHybridOhmic(W, η, fc, T)\npolaron_correlation(τ, bath::HybridOhmicBath, a=1)\nGₕ(ω, bath::HybridOhmicBath, a=1)\nGₗ(ω, bath::HybridOhmicBath, a=1)","category":"page"},{"location":"lib/bath/#QuantumAnnealingTools.HybridOhmicBath","page":"Bath","title":"QuantumAnnealingTools.HybridOhmicBath","text":"HybridOhmicBath\n\nA hybrid noise model with both low and high frequency noise. The high frequency noise is characterized by Ohmic bath and the low frequence noise is characterized by the MRT width W.\n\nFields\n\nW – MRT width (2π GHz)\nϵl – low spectrum reorganization energy (2π GHz)\nϵ – total reorganization energy (2π GHz)\nη – strength of high frequency Ohmic bath\nωc – cutoff frequence\nβ – inverse temperature\nwidth_h – half width at half maximum for high frequency Ohmic bath\nwidth_l – half width at half maximu for low frequency slow bath\n\n\n\n\n\n","category":"type"},{"location":"lib/bath/#QuantumAnnealingTools.HybridOhmic-NTuple{4,Any}","page":"Bath","title":"QuantumAnnealingTools.HybridOhmic","text":"HybridOhmic(W, η, fc, T)\n\nConstruct HybridOhmicBath object with parameters in physical units. W: MRT width (mK); η: interaction strength (unitless); fc: Ohmic cutoff frequency (GHz); T: temperature (mK).\n\n\n\n\n\n","category":"method"},{"location":"lib/bath/#QuantumAnnealingTools.polaron_correlation","page":"Bath","title":"QuantumAnnealingTools.polaron_correlation","text":"polaron_correlation(τ, bath::HybridOhmicBath, a=1)\n\nCalculate polaron transformed correlation function of HybridOhmicBath 'bath' at time 'τ' with relative strength a. The effective strength will be a * W^2 and a * η.\n\n\n\n\n\n","category":"function"},{"location":"lib/bath/#QuantumAnnealingTools.Gₕ","page":"Bath","title":"QuantumAnnealingTools.Gₕ","text":"Gₕ(ω, bath::HybridOhmicBath, a=1)\n\nHigh frequency noise spectrum of the HybridOhmicBath bath with relative strength a.\n\n\n\n\n\n","category":"function"},{"location":"lib/bath/#QuantumAnnealingTools.Gₗ","page":"Bath","title":"QuantumAnnealingTools.Gₗ","text":"Gₗ(ω, bath::HybridOhmicBath, a=1)\n\nLow frequency noise specturm of the HybridOhmicBath bath with relative strength a.\n\n\n\n\n\n","category":"function"},{"location":"lib/Proj/#Projection-Tools-1","page":"Projection Tools","title":"Projection Tools","text":"","category":"section"},{"location":"lib/Proj/#","page":"Projection Tools","title":"Projection Tools","text":"LowLevelSystem\nget_dθ(sys::LowLevelSystem, i=1, j=2)\nRotatedTwoLevelSystem\nproj_low_lvl(hfun, dhfun, interaction, s_axis::AbstractArray{T, 1}; ref=nothing, tol=1e-4, lvl=2) where T<:Number","category":"page"},{"location":"lib/Proj/#QuantumAnnealingTools.LowLevelSystem","page":"Projection Tools","title":"QuantumAnnealingTools.LowLevelSystem","text":"LowLevelSystem\n\nObject for a projected low level system. The projection is only valid for real Hamiltonians.\n\nFields\n\ns – unitless time grid.\nev – energy values for different levels.\ndθ – geometric terms.\nop – projected system bath interaction operators\nref – energy eigenstates at the final time\nlvl – number of levels being kept.\n\n\n\n\n\n","category":"type"},{"location":"lib/Proj/#QuantumAnnealingTools.get_dθ","page":"Projection Tools","title":"QuantumAnnealingTools.get_dθ","text":"get_dθ(sys::LowLevelSystem, i=1, j=2)\n\nGet the geometric terms between i, j energy levels from LowLevelSystem.\n\n\n\n\n\n","category":"function"},{"location":"lib/Proj/#QuantumAnnealingTools.RotatedTwoLevelSystem","page":"Projection Tools","title":"QuantumAnnealingTools.RotatedTwoLevelSystem","text":"RotatedTwoLevelSystem\n\nObject for a rotated two level system.\n\nFields\n\ns – unitless time grid.\nω – ω₁₂.\nT – off diagonal element of the Hamiltonian.\nG – geometric term.\na, b, c, d – projected system bath parameters\nθ – rotation angle\n\n\n\n\n\n","category":"type"},{"location":"lib/Proj/#QuantumAnnealingTools.proj_low_lvl-Union{Tuple{T}, Tuple{Any,Any,Any,AbstractArray{T,1}}} where T<:Number","page":"Projection Tools","title":"QuantumAnnealingTools.proj_low_lvl","text":"proj_low_lvl(hfun, dhfun, interaction, s_axis::AbstractArray{T, 1}; ref=nothing, tol=1e-4, lvl=2) where T<:Number\n\nProject a multi-level quantum system to the lowest lvl levels. hfun and dhfun are the Hamiltonian and its derivative. interaction is a list of system bath interaction operators. s_axis is the grid for the computation. ref is the reference for the initial eigenstates. tol specify the error tolerance for eigen-decomposition if sparse matrix is used.\n\n\n\n\n\n","category":"method"}]
}
