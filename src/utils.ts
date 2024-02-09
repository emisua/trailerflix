export function formatBudget(budget: Number) {
  const stringBudget = budget.toString()
  const budgetLength = stringBudget.length
  if (budgetLength === 9) return stringBudget?.slice(0, 3) + 'M'
  if (budgetLength === 8) return stringBudget?.slice(0, 2) + 'M'
  if (budgetLength === 7) return stringBudget?.slice(0, 1) + 'M'
  if (budgetLength < 7 && budgetLength > 3)
    return stringBudget?.slice(0, 1) + 'K'
  return stringBudget
}
