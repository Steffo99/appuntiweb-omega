# Stack in RISC-V

```riscv
# Che bello! Adoro l'assembly!
# Funziona!
.global _start

# La sezione .data contiene i dati del programma
.section .data

# La sezione .rodata contiene i dati del programma in sola lettura
.section .rodata

# La sezione .text contiene il testo del programma
.section .text

    # Creo una label _start che funzionerà da entrypoint
    _start: 
        li  s0, 5       # Scrivi il numero 5
        li  s3, 3       # COSTANTE: 3
        
    # Pushing phase
    pushing:
        sb s0, 0(sp)  # Metti nello stack s0
        addi sp, sp, 1  # Aumenta di 1 lo stack pointer
        addi s2, s2, 1  # Aumenta di 1 la dimensione dello stack
        addi s0, s0, -1  # Diminuisci di 1 il numero da fattorializzare
        bgeu s0, s3, pushing  # Continua a pushare finchè non arrivi a 2
        li  s1, 2

    # Popping phase
    popping:
        addi sp, sp, -1  # Diminuisci di 1 lo stack pointer
        # Attenzione: diminuisco lo stack pointer PRIMA di caricare dallo stack, altrimenti caricarei il nulla
        lb s0, 0(sp)  # Prendi dallo stack il prossimo numero
        addi s2, s2, -1  # Diminuisci di 1 la dimensione dello stack
        mul s1, s1, s0  # Effettua la moltiplicazione
        bne s2, zero, popping  # Se ci sono altri valori nello stack, continua a moltiplicare

    # Ending phase
    ending:
        li a7, 93
        ecall
```
