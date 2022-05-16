import React from "react";
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
    const PAGENUMBER = 1;

    const { pdf } = props;

    return (
        <>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={PAGENUMBER} />
            </Document>
        </>
    );
}
