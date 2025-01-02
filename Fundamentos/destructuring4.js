function rand   ({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    // Math.random() * (max - min) + min return math.random() * (1000 - 0) + 0
}// gerar valores randomicos entre 0 e 1000 e arredondar para baixo