'use client';

export default function Age() {

  // Set up a function to calculate months, weeks, and days between two dates
  function calculateTimeDiff(startDateString: string, endDateString: string): { months: number, weeks: number, days: number } {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Calculate months
    let months = 0;
    let tempDate = new Date(startDate);
    while (tempDate.getTime() <= endDate.getTime()) {
      const nextMonth = new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate());
      if (nextMonth.getTime() <= endDate.getTime()) {
        months++;
        tempDate = nextMonth;
      } else {
        break;
      }
    }

    // Calculate remaining days after full months
    const dateAfterMonths = new Date(startDate.getFullYear(), startDate.getMonth() + months, startDate.getDate());
    const remainingDaysMs = endDate.getTime() - dateAfterMonths.getTime();
    const remainingDays = Math.floor(remainingDaysMs / (1000 * 60 * 60 * 24));

    // Calculate weeks and leftover days from remainingDays
    const weeks = Math.floor(remainingDays / 7);
    const days = remainingDays % 7;

    return { months, weeks, days };
  }

  const startDate = "2025-07-12";
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const age = calculateTimeDiff(startDate, today);

  return (
    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
      The puppies were born on 12 July 2025.
      <br />
      Today the puppies are <strong>{age.months} months, {age.weeks} weeks, and {age.days} days old!</strong>
    </p>
  );
}
