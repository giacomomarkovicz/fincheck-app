import { useState } from 'react'

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null)
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId
    )
  }

  function handleChangeYear(step: number) {
    setSelectedYear((year) => year + step)
  }

  return {
    selectedBankAccountId,
    selectedYear,
    handleSelectBankAccount,
    handleChangeYear
  }
}
