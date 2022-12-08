// Страница Заглушка 1
import {FC} from "react";
// Core worker
import { Worker } from '@react-pdf-viewer/core';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
// Styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer: FC = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
      <Viewer
        fileUrl="https://pdfobject.com/pdf/pdf_open_parameters_acro8.pdf"
      />
    </Worker>
  );
}
export default PdfViewer;