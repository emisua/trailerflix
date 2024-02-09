export function formatBudget(budget: string) {
  // Convierte el presupuesto a una cadena de texto
  const stringBudget = budget.toString()

  // Determina la longitud del presupuesto
  const budgetLength = stringBudget.length

  // Define las opciones para el formato de moneda
  const options = {
    style: 'currency',
    currency: 'EUR', // Cambia 'EUR' por el código de moneda deseado
  }

  // Aplica el formato basado en la longitud del presupuesto
  let formattedBudget
  if (budgetLength >= 7) {
    formattedBudget = stringBudget.slice(0, -6) + 'M' // Millones
  } else if (budgetLength >= 4) {
    formattedBudget = stringBudget.slice(0, -3) + 'K' // Miles
  } else {
    formattedBudget = parseFloat(stringBudget).toLocaleString('es-ES', options) // Menos de 1000
  }

  // Regresa el valor formateado
  console.log(formattedBudget)
  return `${formattedBudget} €`
}
