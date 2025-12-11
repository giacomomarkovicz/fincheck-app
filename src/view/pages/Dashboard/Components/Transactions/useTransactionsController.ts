import { useState } from 'react'
import { useDashboard } from '../DashboardContext/useDashboard'

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false)

  function handleOpenFilterModal() {
    setIsFilterModalOpen(true)
  }

  function handleCloseFilterModal() {
    setIsFilterModalOpen(false)
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    isFilterModalOpen,
    handleCloseFilterModal,
    handleOpenFilterModal,
    transactions: [{}]
  }
}
