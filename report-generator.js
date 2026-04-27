// report-generator.js

/**
 * Smart Expense Tracker Report Generator
 */

function generateReport(expenseData) {
    // Introduction
    const report = `\n# Smart Expense Tracker Report\n\n## Introduction\nThis report provides insights into your expenses for the month.\n`;

    // Analyzing Expense Data
    const analysisChapter = analyzeExpenses(expenseData);

    // Generating Summary
    const summary = generateSummary(expenseData);

    // Append Chapters to the report
    return report + analysisChapter + summary;
}

function analyzeExpenses(data) {
    // Placeholder for analyzing logic
    // Normally, this would calculate totals, averages, etc.
    return `\n## Expense Data Analysis\n\n- Total Expenses: $${calculateTotal(data)}\n- Average Expense: $${calculateAverage(data)}\n`;
}

function calculateTotal(data) {
    return data.reduce((acc, expense) => acc + expense.amount, 0);
}

function calculateAverage(data) {
    return calculateTotal(data) / data.length;
}

function generateSummary(data) {
    return `\n## Summary\nOverall, your expenses for the month are manageable based on your income level.\n`;
}

// Example usage: Pass in an array of expense objects with an amount property.
const expenses = [
    { amount: 50 },
    { amount: 20 },
    { amount: 30 }
];
console.log(generateReport(expenses));

// References
// - Financial Management 101
// - JavaScript: The Good Parts

// Appendix
// - Sample Report Structure:
//  1. Introduction
//  2. Expense Analysis
//  3. Summary
//  4. References
