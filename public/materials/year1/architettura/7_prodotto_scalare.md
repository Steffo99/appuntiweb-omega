# Prodotto scalare in RISC-V

```riscv
# Che bello! Adoro l'assembly!
# Ommioddiofunzionawowimawizard
.global _start

# La sezione .data contiene i dati del programma
.section .data

    primo: .word 1, 2, 3, 4, 5
    secondo: .word 1, 2, 3, 4, 5

# La sezione .rodata contiene i dati del programma in sola lettura
.section .rodata

# La sezione .text contiene il testo del programma
.section .text

    # s0: primo[s0]
    # s1: secondo[s0]
    # s2: monomio
    # s3: indirizzo da cui prendere il valore
    # s4: indice
    # s5: dimensione array
    # a0: somma

    _start:
        li s2, 0
        li a0, 0
        li s4, 0
        li s5, 5

    somma:
        la s3, primo
        add s3, s3, s4
        lw s0, 0(s3)

        la s3, secondo
        add s3, s3, s4
        lw s1, 0(s3)

        mulw s2, s1, s0
        add a0, a0, s2
        addi s4, s4, 4
        addi s5, s5, -1
        bne zero, s5, somma

    _end:
        li a7, 93
        ecall
```
