const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell } = require('docx');

// Function to generate the report
function generateReport() {
    const doc = new Document();

    // Chapter 1: Introduction
    doc.addSection({
        children: [
            new Paragraph({ text: 'Chapter 1: Introduction', heading: 'Heading1' }),
            new Paragraph('This chapter introduces the Smart Expense Tracker, its purpose, and how it works.'),
        ],
    });

    // Chapter 2: Features
    doc.addSection({
        children: [
            new Paragraph({ text: 'Chapter 2: Features', heading: 'Heading1' }),
            new Paragraph('This chapter outlines the key features of the Smart Expense Tracker.'),
            new Table({
                rows: [
                    new TableRow({
                        children: [new TableCell({ children: [new Paragraph('Feature')] }), new TableCell({ children: [new Paragraph('Description')] })],
                    }),
                    new TableRow({
                        children: [new TableCell({ children: [new Paragraph('Expense Tracking')] }), new TableCell({ children: [new Paragraph('Track and categorize expenses easily.')] })],
                    }),
                    new TableRow({
                        children: [new TableCell({ children: [new Paragraph('Budgeting')] }), new TableCell({ children: [new Paragraph('Set and manage budgets effectively.')] })],
                    }),
                    // Additional features can be added here
                ],
            }),
        ],
    });

    // Chapter 3: User Guide
    doc.addSection({
        children: [
            new Paragraph({ text: 'Chapter 3: User Guide', heading: 'Heading1' }),
            new Paragraph('This chapter provides a step-by-step guide on how to use the Smart Expense Tracker.'),
        ],
    });

    // Chapter 4: Technical Details
    doc.addSection({
        children: [
            new Paragraph({ text: 'Chapter 4: Technical Details', heading: 'Heading1' }),
            new Paragraph('This chapter covers the technical specifications and architecture of the application.'),
        ],
    });

    // Chapter 5: Conclusion
    doc.addSection({
        children: [
            new Paragraph({ text: 'Chapter 5: Conclusion', heading: 'Heading1' }),
            new Paragraph('This chapter summarizes the importance and future prospects of the Smart Expense Tracker.'),
        ],
    });

    // Export the document to a file
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync('Smart_Expense_Tracker_Report.docx', buffer);
        console.log('Report generated: Smart_Expense_Tracker_Report.docx');
    });
}

// Execute the report generation function
generateReport();