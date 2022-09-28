export default function Omissions() {
  return (
    <main className="main">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mt-3 mb-4">
            Пропуски занятий
            <button className="btn badge bg-primary m-2">
              Выбрать группу
            </button>
          </h4>
        </div>

        {/* <PeriodButtonsMonth onPeriodSelected={console.log} />
        <AbsenceTable students={absence20students} /> */}

      </div>
    </main>
  )
}